import { afterEach, describe, expect, it } from 'vitest';
import { chmod, lstat, mkdir, mkdtemp, readFile, readdir, rm, symlink, utimes, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { decodeSourceArchiveManifest, stageSourceArchive } from './stage-source-archive.mjs';

const roots = [];
afterEach(async () => { await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true }))); });
async function fixture() {
 const root = await mkdtemp(join(tmpdir(), 'compatair-stage-archive-'));
 roots.push(root);
 const source = join(root, 'source'), target = join(root, 'target');
 await mkdir(source); await mkdir(target);
 return { root, source, target };
}
describe('source archive staging', () => {
 it('preserves working-tree bytes, executable mode, millisecond timestamps and unusual filenames', async () => {
  const { source, target } = await fixture();
  const files = ['normal.txt', 'nested/a space.txt', 'nested/line\nbreak.txt', 'run.sh'];
  await mkdir(join(source, 'nested'));
  const timestamp = new Date('2026-01-02T03:04:05.123Z');
  const metadata = new Map();
  for (const [index, file] of files.entries()) {
   await writeFile(join(source, file), Buffer.from([index, 0, 255, 10]));
   await chmod(join(source, file), file === 'run.sh' ? 0o755 : 0o644);
   await utimes(join(source, file), timestamp, timestamp);
   metadata.set(file, await lstat(join(source, file)));
  }
  expect(await stageSourceArchive(source, target, files.join('\0') + '\0')).toBe(files.length);
  for (const file of files) {
   const actual = await lstat(join(target, file));
   expect(actual.mode & 0o777).toBe(file === 'run.sh' ? 0o755 : 0o644);
   expect(actual.atimeMs).toBeCloseTo(metadata.get(file).atime.getTime(), 0);
   expect(actual.mtimeMs).toBeCloseTo(metadata.get(file).mtime.getTime(), 0);
   expect(await readFile(join(target, file))).toEqual(await readFile(join(source, file)));
  }
 });
 it('rejects malformed manifests, duplicates, traversal and Git internals', async () => {
  const { source, target } = await fixture();
  for (const manifest of ['a', 'a\0a\0', '../outside\0', '/absolute\0', 'a/../b\0', '.git/config\0', 'a//b\0', '\0']) {
   await expect(stageSourceArchive(source, target, manifest)).rejects.toThrow();
  }
 });
 it('rejects symbolic links, symbolic parents and directory entries', async () => {
  const { root, source, target } = await fixture();
  await writeFile(join(root, 'external.txt'), 'external');
  await symlink(join(root, 'external.txt'), join(source, 'link'));
  await symlink(root, join(source, 'parent'));
  await mkdir(join(source, 'directory'));
  for (const manifest of ['link\0', 'parent/external.txt\0', 'directory\0']) {
   await expect(stageSourceArchive(source, target, manifest)).rejects.toThrow();
  }
 });
 it('never overwrites staging files and refuses intersecting roots', async () => {
  const { root, source, target } = await fixture();
  await writeFile(join(source, 'a'), 'source'); await writeFile(join(target, 'a'), 'existing');
  await expect(stageSourceArchive(source, target, 'a\0')).rejects.toThrow();
  expect(await readFile(join(target, 'a'), 'utf8')).toBe('existing');
  const nested = join(source, 'staging'); await mkdir(nested);
  await expect(stageSourceArchive(source, nested, 'a\0')).rejects.toThrow('roots must be disjoint');
  await expect(stageSourceArchive(source, source, 'a\0')).rejects.toThrow('roots must be disjoint');
  await expect(stageSourceArchive(source, root, 'a\0')).rejects.toThrow('roots must be disjoint');
 });
 it('refuses unrelated entries in staging before copying any file', async () => {
  const { source, target } = await fixture();
  await writeFile(join(source, 'a'), 'source');
  await writeFile(join(target, 'sentinel'), 'keep');
  await expect(stageSourceArchive(source, target, 'a\0')).rejects.toThrow('staging must be empty');
  expect(await readdir(target)).toEqual(['sentinel']);
  expect(await readFile(join(target, 'sentinel'), 'utf8')).toBe('keep');
 });
 it('rejects a staging parent symlink without creating files outside staging', async () => {
  const { root, source, target } = await fixture();
  const outside = join(root, 'outside');
  await mkdir(outside); await mkdir(join(source, 'nested'));
  await writeFile(join(outside, 'sentinel'), 'keep');
  await writeFile(join(source, 'nested', 'a'), 'source');
  await symlink(outside, join(target, 'nested'));
  await expect(stageSourceArchive(source, target, 'nested/a\0')).rejects.toThrow('staging must be empty');
  expect(await readdir(outside)).toEqual(['sentinel']);
  expect((await lstat(join(target, 'nested'))).isSymbolicLink()).toBe(true);
 });
 it('rejects a staging file symlink without altering its destination', async () => {
  const { root, source, target } = await fixture();
  const outside = join(root, 'external.txt');
  await writeFile(outside, 'keep'); await writeFile(join(source, 'a'), 'source');
  await symlink(outside, join(target, 'a'));
  await expect(stageSourceArchive(source, target, 'a\0')).rejects.toThrow('staging must be empty');
  expect(await readFile(outside, 'utf8')).toBe('keep');
  expect((await lstat(join(target, 'a'))).isSymbolicLink()).toBe(true);
 });
 it('allows sibling roots whose names share a prefix', async () => {
  const { source } = await fixture();
  const target = `${source}-staging`; await mkdir(target);
  await writeFile(join(source, 'a'), 'source');
  expect(await stageSourceArchive(source, target, 'a\0')).toBe(1);
  expect(await readFile(join(target, 'a'), 'utf8')).toBe('source');
 });
 it('reports a missing file instead of successful staging', async () => {
  const { source, target } = await fixture();
  const files = ['a', 'b', 'c', 'd', 'e', 'f'];
  for (const file of files) await writeFile(join(source, file), `source-${file}`);
  await expect(stageSourceArchive(source, target, ['missing', ...files].join('\0') + '\0')).rejects.toMatchObject({ code: 'ENOENT' });
  for (const file of await readdir(target)) {
   expect(files).toContain(file);
   expect(await readFile(join(target, file), 'utf8')).toBe(`source-${file}`);
  }
 });
 it.each([{ bytes: [0xff, 0] }, { bytes: [0xc3, 0] }, { bytes: [0xed, 0xa0, 0x80, 0] }])('rejects invalid UTF-8 manifest bytes $bytes', ({ bytes }) => {
  expect(() => decodeSourceArchiveManifest(Buffer.from(bytes))).toThrow();
 });
 it('preserves a leading BOM as part of the first filename', async () => {
  const { source, target } = await fixture();
  const filename = '\uFEFFleading-bom.txt';
  await writeFile(join(source, filename), 'source');
  const manifest = decodeSourceArchiveManifest(Buffer.from(`${filename}\0`));
  expect(manifest).toBe(`${filename}\0`);
  expect(await stageSourceArchive(source, target, manifest)).toBe(1);
  expect(await readdir(target)).toEqual([filename]);
  expect(await readFile(join(target, filename), 'utf8')).toBe('source');
 });
});
