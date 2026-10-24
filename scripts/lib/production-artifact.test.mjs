import { afterEach, describe, expect, it } from 'vitest';
import { createHash, randomBytes } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { lstat, mkdir, mkdtemp, open, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { prepareProductionArtifact, restoreProductionArtifact } from './production-artifact.mjs';

const sha = 'a'.repeat(40), roots = [], MiB = 1024 * 1024;
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
afterEach(async () => { await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true }))); });
function command(name, args, input) {
 const result = spawnSync(name, args, { input, env: { ...process.env, COPYFILE_DISABLE: '1' }, maxBuffer: 16 * MiB });
 if (result.error || result.status !== 0) throw result.error ?? new Error(result.stderr.toString());
 return result.stdout;
}
async function checkedWrite(root, name, bytes) {
 await writeFile(join(root, name), bytes);
 await writeFile(join(root, `${name}.sha256`), `${digest(bytes)}  ${name}\n`);
}
async function fixture({ prepared = true, ready = true } = {}) {
 const root = await mkdtemp(join(tmpdir(), 'compatair-production-artifact-')); roots.push(root);
 const manifest = { schemaVersion: 1, gitSha: sha, builtAt: '2026-10-24T00:00:00Z', batches: [] };
 const plan = { allowRelease: true, manifest, previousSha: 'b'.repeat(40) };
 await mkdir(join(root, '.astro/seo'), { recursive: true }); await mkdir(join(root, 'dist/data'), { recursive: true });
 await writeFile(join(root, '.astro/seo/indexation-build.json'), JSON.stringify(plan));
 await writeFile(join(root, 'dist/data/release.json'), JSON.stringify({ gitSha: sha }));
 await writeFile(join(root, 'dist/data/indexation.json'), JSON.stringify(manifest));
 await writeFile(join(root, 'dist/index.html'), 'complete immutable site');
 await writeFile(join(root, 'dist/sitemap-index.xml'), '<sitemapindex/>');
 await writeFile(join(root, 'dist/data/catalog.json'), '{"catalog":"must survive restoration"}');
 const archive = join(root, `compatair-${sha}.tar.xz`);
 command('tar', ['-cJf', archive, '-C', join(root, 'dist'), '.']);
 await checkedWrite(root, `compatair-${sha}.tar.xz`, await readFile(archive));
 const admin = join(root, `compatair-admin-${sha}.tar.gz`);
 command('tar', ['-czf', admin, '-C', join(root, 'dist'), 'index.html']);
 await checkedWrite(root, `compatair-admin-${sha}.tar.gz`, await readFile(admin));
 if (prepared) await prepareProductionArtifact(root, sha);
 if (ready) { await rm(join(root, 'dist'), { recursive: true }); await rm(join(root, '.astro/seo/indexation-build.json')); }
 return { root, manifest, plan, archive };
}
async function expectNoRestoration(root) {
 await expect(lstat(join(root, 'dist'))).rejects.toMatchObject({ code: 'ENOENT' });
 await expect(lstat(join(root, '.astro/seo/indexation-build.json'))).rejects.toMatchObject({ code: 'ENOENT' });
 expect((await readdir(root)).some(name => name.startsWith('.compatair-restore-'))).toBe(false);
}
function tarBytes(entries) {
 const blocks = [];
 for (const { name, type = '0', link = '', value = Buffer.alloc(0), size = value.length } of entries) {
  const header = Buffer.alloc(512);
  const text = (value, offset, length) => header.write(value, offset, length, 'ascii');
  text(name, 0, 100); text('0000644\0', 100, 8); text('0000000\0', 108, 8); text('0000000\0', 116, 8);
  text(`${size.toString(8).padStart(11, '0')}\0`, 124, 12); text('00000000000\0', 136, 12); header.fill(32, 148, 156);
  text(type, 156, 1); text(link, 157, 100); text('ustar\0', 257, 6); text('00', 263, 2);
  text(`${header.reduce((sum, byte) => sum + byte, 0).toString(8).padStart(6, '0')}\0 `, 148, 8);
  blocks.push(header, value, Buffer.alloc((512 - value.length % 512) % 512));
 }
 return Buffer.concat([...blocks, Buffer.alloc(1024)]);
}

describe('production artifacts crossing isolated CI runners', () => {
 it.each([false, true])('restores the exact complete dist and plan, with existing empty dist=%s', async empty => {
  const { root, plan } = await fixture();
  if (empty) await mkdir(join(root, 'dist'));
  expect(await restoreProductionArtifact(root, sha)).toMatchObject({ release: sha });
  expect(await readFile(join(root, 'dist/index.html'), 'utf8')).toBe('complete immutable site');
  expect(await readFile(join(root, 'dist/data/catalog.json'), 'utf8')).toBe('{"catalog":"must survive restoration"}');
  expect(await readFile(join(root, 'dist/sitemap-index.xml'), 'utf8')).toBe('<sitemapindex/>');
  expect(JSON.parse(await readFile(join(root, '.astro/seo/indexation-build.json'), 'utf8'))).toEqual(plan);
  expect((await readdir(root)).some(name => name.startsWith('.compatair-restore-'))).toBe(false);
 });
 it('prepares a strictly named compressed plan and its exact checksum', async () => {
  const { root } = await fixture({ prepared: false, ready: false });
  const result = await prepareProductionArtifact(root, sha);
  const bytes = await readFile(join(root, result.plan));
  expect(result.bytes).toBe(bytes.length);
  expect(await readFile(join(root, `${result.plan}.sha256`), 'utf8')).toBe(`${digest(bytes)}  ${result.plan}\n`);
  await expect(prepareProductionArtifact(root, sha)).rejects.toThrow('target already exists');
 });
 it.each(['', 'MAIN', 'a'.repeat(39), 'A'.repeat(40), `${sha}\n`])('rejects an invalid revision before filesystem operations: %j', async invalid => {
  await expect(prepareProductionArtifact('/does-not-exist', invalid)).rejects.toThrow('SHA');
  await expect(restoreProductionArtifact('/does-not-exist', invalid)).rejects.toThrow('SHA');
 });
 it.each(['allowRelease', 'plan-sha', 'release-sha'])('refuses preparing inconsistent release metadata: %s', async kind => {
  const { root, plan } = await fixture({ prepared: false, ready: false });
  if (kind === 'allowRelease') plan.allowRelease = false;
  if (kind === 'plan-sha') plan.manifest.gitSha = 'c'.repeat(40);
  await writeFile(join(root, '.astro/seo/indexation-build.json'), JSON.stringify(plan));
  if (kind === 'release-sha') await writeFile(join(root, 'dist/data/release.json'), JSON.stringify({ gitSha: 'c'.repeat(40) }));
  await expect(prepareProductionArtifact(root, sha)).rejects.toThrow('identity');
 });
 it.each(['source-plan', 'source-parent', 'output-payload', 'output-checksum'])('refuses prepare symlinks without modifying their targets: %s', async kind => {
  const { root } = await fixture({ prepared: false, ready: false });
  const external = join(root, 'external'); await writeFile(external, 'keep');
  const target = kind === 'source-plan' ? '.astro/seo/indexation-build.json' : kind === 'source-parent' ? '.astro/seo' : kind === 'output-payload' ? `compatair-plan-${sha}.json.gz` : `compatair-plan-${sha}.json.gz.sha256`;
  await rm(join(root, target), { recursive: true, force: true }); await symlink(external, join(root, target));
  await expect(prepareProductionArtifact(root, sha)).rejects.toThrow();
  expect(await readFile(external, 'utf8')).toBe('keep');
 });
 it.each(['source', 'compressed'])('bounds the plan before publishing it: %s', async kind => {
  const { root, plan } = await fixture({ prepared: false, ready: false });
  const padding = kind === 'source' ? 'x'.repeat(32 * MiB) : randomBytes(5 * MiB).toString('base64');
  await writeFile(join(root, '.astro/seo/indexation-build.json'), JSON.stringify({ ...plan, padding }));
  await expect(prepareProductionArtifact(root, sha)).rejects.toThrow(/bounded|budget/);
 });
 it.each(['tar.xz', 'admin.tar.gz', 'plan.json.gz'])('requires every payload and checksum before extraction: %s', async kind => {
  const { root } = await fixture();
  const name = kind === 'tar.xz' ? `compatair-${sha}.tar.xz` : kind === 'admin.tar.gz' ? `compatair-admin-${sha}.tar.gz` : `compatair-plan-${sha}.json.gz`;
  await rm(join(root, `${name}.sha256`));
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow();
  await expectNoRestoration(root);
 });
 it.each(['payload', 'checksum', 'parent', 'dist', 'plan'])('rejects symlink restoration inputs and targets: %s', async kind => {
  const { root } = await fixture(); const outside = join(root, 'outside'); await mkdir(outside); await writeFile(join(outside, 'keep'), 'keep');
  const target = kind === 'payload' ? `compatair-${sha}.tar.xz` : kind === 'checksum' ? `compatair-${sha}.tar.xz.sha256` : kind === 'parent' ? '.astro/seo' : kind === 'dist' ? 'dist' : '.astro/seo/indexation-build.json';
  await rm(join(root, target), { recursive: true, force: true }); await symlink(outside, join(root, target));
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow();
  expect(await readFile(join(outside, 'keep'), 'utf8')).toBe('keep');
  expect(await readdir(outside)).toEqual(['keep']);
 });
 it('preserves a nonempty dist and an existing plan instead of overwriting them', async () => {
  const { root } = await fixture(); await mkdir(join(root, 'dist')); await writeFile(join(root, 'dist/keep'), 'keep');
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow('dist target');
  expect(await readFile(join(root, 'dist/keep'), 'utf8')).toBe('keep');
  await rm(join(root, 'dist'), { recursive: true }); await writeFile(join(root, '.astro/seo/indexation-build.json'), 'keep');
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow('target already exists');
  expect(await readFile(join(root, '.astro/seo/indexation-build.json'), 'utf8')).toBe('keep');
 });
 it.each(['bad-digest', 'wrong-name', 'extra-line', 'one-space', 'missing-newline', 'uppercase', 'high-bit'])('strictly verifies checksums before extracting: %s', async kind => {
  const { root } = await fixture(), name = `compatair-${sha}.tar.xz`;
  const original = await readFile(join(root, `${name}.sha256`)); let changed = original.toString();
  if (kind === 'bad-digest') changed = `${'0'.repeat(64)}  ${name}\n`;
  if (kind === 'wrong-name') changed = changed.replace(name, '../outside');
  if (kind === 'extra-line') changed += '\n';
  if (kind === 'one-space') changed = changed.replace('  ', ' ');
  if (kind === 'missing-newline') changed = changed.trimEnd();
  if (kind === 'uppercase') changed = changed.toUpperCase();
  if (kind === 'high-bit') { const bytes = Buffer.from(original); bytes[0] |= 0x80; changed = bytes; }
  await writeFile(join(root, `${name}.sha256`), changed);
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow(/checksum/);
  await expectNoRestoration(root);
 });
 it.each([['release', 192], ['admin', 8], ['plan', 4]])('enforces the compressed %s budget before extraction', async (kind, limit) => {
  const { root } = await fixture();
  const name = kind === 'release' ? `compatair-${sha}.tar.xz` : kind === 'admin' ? `compatair-admin-${sha}.tar.gz` : `compatair-plan-${sha}.json.gz`;
  const handle = await open(join(root, name), 'w'); try { await handle.truncate(limit * MiB + 1); } finally { await handle.close(); }
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow('bounded regular file');
  await expectNoRestoration(root);
 });
 it('rejects an oversized decompressed plan without extracting anything', async () => {
  const { root } = await fixture();
  await checkedWrite(root, `compatair-plan-${sha}.json.gz`, gzipSync(Buffer.alloc(32 * MiB + 1, 32)));
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow(); await expectNoRestoration(root);
 });
 it.each(['plan', 'release', 'indexation'])('binds restored metadata to the exact approved manifest and SHA: %s', async kind => {
  const { root, plan } = await fixture();
  if (kind === 'plan') {
   await checkedWrite(root, `compatair-plan-${sha}.json.gz`, gzipSync(JSON.stringify({ ...plan, manifest: { ...plan.manifest, gitSha: 'c'.repeat(40) } })));
  } else {
   const source = join(root, 'changed'); await mkdir(join(source, 'data'), { recursive: true });
   await writeFile(join(source, 'data/release.json'), JSON.stringify({ gitSha: kind === 'release' ? 'c'.repeat(40) : sha }));
   await writeFile(join(source, 'data/indexation.json'), JSON.stringify({ ...plan.manifest, ...(kind === 'indexation' ? { batches: [{ unexpected: true }] } : {}) }));
   command('tar', ['-cJf', join(root, 'changed.tar.xz'), '-C', source, '.']);
   await checkedWrite(root, `compatair-${sha}.tar.xz`, await readFile(join(root, 'changed.tar.xz')));
  }
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow(/identity|manifest/); await expectNoRestoration(root);
 });
 it.each([
  [{ name: '../../escape.txt' }], [{ name: '/absolute.txt' }], [{ name: './a/../escape.txt' }], [{ name: './a\\escape' }],
  [{ name: './line\nbreak' }], [{ name: './.git/config' }], [{ name: './duplicate' }, { name: 'duplicate' }],
  [{ name: './link', type: '2', link: '../../escape' }], [{ name: './hardlink', type: '1', link: './data/release.json' }],
  [{ name: './pipe', type: '6' }], [{ name: './device', type: '3' }], [{ name: './parent' }, { name: './parent/child' }],
 ].map(entries => ({ entries })))('refuses unsafe archives without publishing partial targets: %j', async ({ entries }) => {
  const { root } = await fixture();
  const compressed = command('xz', ['-zc'], tarBytes(entries));
  await checkedWrite(root, `compatair-${sha}.tar.xz`, compressed);
  await expect(restoreProductionArtifact(root, sha)).rejects.toThrow(); await expectNoRestoration(root);
  await expect(lstat(join(root, 'escape.txt'))).rejects.toMatchObject({ code: 'ENOENT' });
 });
 it('refuses invalid CLI modes and missing revision before doing work', () => {
  const cli = new URL('../production-artifact.mjs', import.meta.url);
  for (const args of [[], ['unknown'], ['prepare', 'extra'], ['restore']]) {
   const result = spawnSync(process.execPath, [cli.pathname, ...args], { env: { ...process.env, GITHUB_SHA: '' }, encoding: 'utf8' });
   expect(result.status).not.toBe(0);
   expect(result.stderr).toMatch(/Expected production-artifact|Invalid production artifact SHA/);
  }
 });
});
