import { createHash } from 'node:crypto';
import { constants } from 'node:fs';
import { lstat, mkdir, mkdtemp, open, readdir, realpath, rename, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { isDeepStrictEqual } from 'node:util';
import { gzipSync, gunzipSync } from 'node:zlib';

const MiB = 1024 * 1024;
const PLAN_LIMIT = 32 * MiB;
const EXPANDED_LIMIT = 8 * 1024 * MiB;
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

function revision(sha) {
 if (typeof sha !== 'string' || !/^[a-f0-9]{40}$/.test(sha)) throw new Error('Invalid production artifact SHA');
 return sha;
}
async function regular(path, maximum) {
 const initial = await lstat(path);
 if (!initial.isFile() || initial.isSymbolicLink() || initial.size > maximum) throw new Error('Production artifact is not a bounded regular file');
 const handle = await open(path, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
 try {
  const info = await handle.stat();
  if (!info.isFile() || info.size > maximum || info.dev !== initial.dev || info.ino !== initial.ino) throw new Error('Production artifact is not a bounded regular file');
  const bytes = Buffer.alloc(info.size);
  let offset = 0;
  while (offset < bytes.length) {
   const { bytesRead } = await handle.read(bytes, offset, bytes.length - offset, offset);
   if (!bytesRead) throw new Error('Production artifact changed while reading');
   offset += bytesRead;
  }
  if ((await handle.read(Buffer.alloc(1), 0, 1, offset)).bytesRead) throw new Error('Production artifact changed while reading');
  return bytes;
 } finally { await handle.close(); }
}
async function directory(root, parts, create = false) {
 let path = root;
 for (const part of parts) {
  path = join(path, part);
  if (create) await mkdir(path, { mode: 0o755 }).catch(error => { if (error.code !== 'EEXIST') throw error; });
  const info = await lstat(path);
  if (!info.isDirectory() || info.isSymbolicLink()) throw new Error('Unsafe production artifact directory');
 }
 return path;
}
async function missing(path) {
 try { await lstat(path); } catch (error) { if (error.code === 'ENOENT') return; throw error; }
 throw new Error('Production artifact target already exists');
}
async function emptyDist(root) {
 try {
  const info = await lstat(join(root, 'dist'));
  if (!info.isDirectory() || info.isSymbolicLink() || (await readdir(join(root, 'dist'))).length) throw new Error('Production dist target must be absent or an empty regular directory');
 } catch (error) { if (error.code !== 'ENOENT') throw error; }
}
function json(bytes) {
 const value = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
 if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid production artifact JSON');
 return value;
}
function identities(plan, release, sha) {
 if (plan.allowRelease !== true || plan.manifest?.gitSha !== sha || release.gitSha !== sha) throw new Error('Production artifact release identity mismatch');
}
async function checked(root, name, limit) {
 const checksumBytes = await regular(join(root, `${name}.sha256`), 512);
 const expected = new RegExp(`^([a-f0-9]{64})  ${name.replaceAll('.', '\\.')}\\n$`).exec(checksumBytes.toString('utf8'));
 if (!expected || !Buffer.from(expected[0]).equals(checksumBytes)) throw new Error('Invalid production artifact checksum format');
 const bytes = await regular(join(root, name), limit);
 if (hash(bytes) !== expected[1]) throw new Error('Production artifact checksum mismatch');
 return bytes;
}
function tar(args) {
 const result = spawnSync('tar', args, { encoding: 'utf8', env: { PATH: process.env.PATH, LC_ALL: 'C', TZ: 'UTC', COPYFILE_DISABLE: '1' }, timeout: 120_000, maxBuffer: 32 * MiB });
 if (result.error || result.signal || result.status !== 0 || result.stderr) throw new Error('Production archive listing or extraction failed');
 return result.stdout;
}
function lines(text) {
 if (!text.endsWith('\n')) throw new Error('Invalid production archive listing');
 return text.slice(0, -1).split('\n');
}
function archiveEntries(path) {
 const names = lines(tar(['-tf', path]));
 const descriptions = lines(tar(['-tvf', path, '--numeric-owner']));
 if (names.length !== descriptions.length || names.length > 200_000) throw new Error('Invalid production archive entry count');
 const entries = new Map();
 let expanded = 0;
 for (let index = 0; index < names.length; index++) {
  const name = names[index], description = descriptions[index];
  // Both GNU tar and BSD tar are supported; any ambiguous or linked entry fails closed.
  const metadata = /^([d-])[rwxStTs-]{9}[+@.]?\s+\S+\/\S+\s+(\d+)\s+\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}(?::\d{2})?\s+(.+)$/.exec(description)
   ?? /^([d-])[rwxStTs-]{9}[+@.]?\s+\d+\s+\S+\s+\S+\s+(\d+)\s+[A-Z][a-z]{2}\s+\d{1,2}\s+(?:\d{2}:\d{2}|\d{4})\s+(.+)$/.exec(description);
  if (!metadata || metadata[3] !== name) throw new Error('Production archive contains a link, special file or ambiguous entry');
  const type = metadata[1], size = Number(metadata[2]);
  let relative = name.startsWith('./') ? name.slice(2) : name;
  if (relative.endsWith('/')) relative = relative.slice(0, -1);
  if (!relative || relative === '.') {
   if (type !== 'd') throw new Error('Invalid production archive root');
   relative = '';
  } else if (relative.split('/').some(part => !/^[A-Za-z0-9_@.+%=-]+$/.test(part) || part === '.' || part === '..' || part === '.git')) throw new Error('Unsafe production archive path');
  if (entries.has(relative) || !Number.isSafeInteger(size) || size < 0 || (type === 'd' && size !== 0)) throw new Error('Invalid production archive metadata');
  entries.set(relative, { type, size });
  expanded += size;
  if (expanded > EXPANDED_LIMIT) throw new Error('Production archive exceeds the expanded size budget');
 }
 for (const name of entries.keys()) {
  const parts = name.split('/');
  for (let i = 1; i < parts.length; i++) if (entries.get(parts.slice(0, i).join('/'))?.type === '-') throw new Error('Production archive file shadows a directory');
 }
 return entries;
}
async function inspectExtracted(root, entries, prefix = '') {
 for (const item of await readdir(join(root, prefix), { withFileTypes: true })) {
  const name = prefix ? `${prefix}/${item.name}` : item.name;
  const info = await lstat(join(root, name));
  if (item.isDirectory() && info.isDirectory()) await inspectExtracted(root, entries, name);
  else if (!item.isFile() || !info.isFile() || info.isSymbolicLink() || entries.get(name)?.type !== '-' || info.size !== entries.get(name)?.size) throw new Error('Unexpected extracted production archive entry');
 }
}

export async function prepareProductionArtifact(root, sha) {
 revision(sha); root = await realpath(root);
 await directory(root, ['.astro', 'seo']); await directory(root, ['dist', 'data']);
 const bytes = await regular(join(root, '.astro/seo/indexation-build.json'), PLAN_LIMIT);
 const plan = json(bytes), release = json(await regular(join(root, 'dist/data/release.json'), MiB));
 identities(plan, release, sha);
 const compressed = gzipSync(bytes, { level: 9 });
 if (compressed.length > 4 * MiB) throw new Error('Production artifact plan exceeds its compressed size budget');
 const name = `compatair-plan-${sha}.json.gz`, checksumName = `${name}.sha256`;
 await missing(join(root, name)); await missing(join(root, checksumName));
 let created = false;
 try {
  await writeFile(join(root, name), compressed, { flag: 'wx', mode: 0o600 }); created = true;
  await writeFile(join(root, checksumName), `${hash(compressed)}  ${name}\n`, { flag: 'wx', mode: 0o600 });
 } catch (error) { if (created) await rm(join(root, name), { force: true }); throw error; }
 return { plan: name, bytes: compressed.length };
}

export async function restoreProductionArtifact(root, sha) {
 revision(sha); root = await realpath(root);
 await emptyDist(root);
 await directory(root, ['.astro', 'seo'], true);
 const planTarget = join(root, '.astro/seo/indexation-build.json');
 await missing(planTarget);
 const archive = await checked(root, `compatair-${sha}.tar.xz`, 192 * MiB);
 await checked(root, `compatair-admin-${sha}.tar.gz`, 8 * MiB);
 const plan = gunzipSync(await checked(root, `compatair-plan-${sha}.json.gz`, 4 * MiB), { maxOutputLength: PLAN_LIMIT });
 const parsedPlan = json(plan);
 if (parsedPlan.allowRelease !== true || parsedPlan.manifest?.gitSha !== sha) throw new Error('Production artifact plan identity mismatch');
 const temporary = await mkdtemp(join(root, '.compatair-restore-'));
 let planCreated = false;
 try {
  const archivePath = join(temporary, 'release.tar.xz');
  await writeFile(archivePath, archive, { flag: 'wx', mode: 0o600 });
  const entries = archiveEntries(archivePath), dist = join(temporary, 'dist');
  await mkdir(dist, { mode: 0o755 });
  tar(['-xf', archivePath, '-C', dist, '--no-same-owner', '--no-same-permissions']);
  await inspectExtracted(dist, entries);
  await directory(dist, ['data']);
  const release = json(await regular(join(dist, 'data/release.json'), MiB));
  const manifest = json(await regular(join(dist, 'data/indexation.json'), PLAN_LIMIT));
  identities(parsedPlan, release, sha);
  if (!isDeepStrictEqual(parsedPlan.manifest, manifest)) throw new Error('Production artifact indexation manifest mismatch');
  await emptyDist(root); await missing(planTarget);
  await writeFile(planTarget, plan, { flag: 'wx', mode: 0o600 }); planCreated = true;
  await rename(dist, join(root, 'dist'));
  return { release: sha, entries: entries.size };
 } catch (error) { if (planCreated) await rm(planTarget, { force: true }); throw error; }
 finally { await rm(temporary, { recursive: true, force: true }); }
}
