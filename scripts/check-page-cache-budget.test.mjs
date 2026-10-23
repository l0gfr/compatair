import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, symlink, truncate, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { it } from 'vitest';

const script = fileURLToPath(new URL('./check-page-cache-budget.mjs', import.meta.url));
const limit = 1536 * 1024 * 1024;

async function inspectFixture(prepare) {
 const root = await mkdtemp(join(tmpdir(), 'compatair-page-budget-'));
 const cache = join(root, 'node_modules/.astro');
 const output = join(root, 'github-output');
 // ftruncate changes logical size only: boundary cases do not write GiB of data.
 const sparseFile = async (relative, bytes) => {
  const path = join(cache, relative);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, ''); await truncate(path, bytes);
  return path;
 };
 try {
  await prepare({ root, cache, sparseFile });
  const result = spawnSync(process.execPath, [script], { cwd: root, encoding: 'utf8', timeout: 5_000,
   env: { ...process.env, GITHUB_OUTPUT: output } });
  assert.ifError(result.error); assert.equal(result.status, 0, result.stderr);
  const summary = JSON.parse(result.stdout);
  assert.equal(summary.limit, limit);
  assert.equal(await readFile(output, 'utf8'), `ready=${summary.ready}\n`);
  return summary;
 } finally { await rm(root, { recursive: true, force: true }); }
}

it('does not save an absent or empty page cache without failing the build', async () => {
 assert.deepEqual(await inspectFixture(async () => {}), { ready: false, bytes: 0, limit });
 assert.deepEqual(await inspectFixture(async ({ cache }) => { await mkdir(cache, { recursive: true }); }),
  { ready: false, bytes: 0, limit });
});

it('accepts the measured October catalog cache above the former 384 MiB cap', async () => {
 const bytes = 1_062_831_606;
 const actual = await inspectFixture(async ({ sparseFile }) => {
  await sparseFile('rendered/pages.bin', bytes - 100); await sparseFile('manifest.bin', 100);
 });
 assert.deepEqual(actual, { ready: true, bytes, limit });
});

it('accepts exactly 1.5 GiB and refuses one byte more across regular files', async () => {
 for (const excess of [0, 1]) {
  const actual = await inspectFixture(async ({ sparseFile }) => {
   await sparseFile('a.bin', limit - 1); await sparseFile('nested/b.bin', 1 + excess);
  });
  assert.deepEqual(actual, { ready: excess === 0, bytes: limit + excess, limit });
 }
});

it('still refuses symbolic links even when their target is a small regular file', async () => {
 const actual = await inspectFixture(async ({ root, cache }) => {
  await mkdir(cache, { recursive: true });
  const target = join(root, 'outside-cache'); await writeFile(target, 'small');
  await symlink(target, join(cache, 'linked-entry'));
 });
 assert.deepEqual(actual, { ready: false, bytes: 0, limit });
});
