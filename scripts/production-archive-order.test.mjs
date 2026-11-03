import { afterEach, describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { productionArchiveOrder, assertProductionArchiveEntries } from './production-archive-order.mjs';

const roots = [], script = new URL('./production-archive-order.mjs', import.meta.url);
afterEach(async () => { await Promise.all(roots.splice(0).map(root => rm(root, { recursive: true, force: true }))); });
async function fixture() {
 const root = await mkdtemp(join(tmpdir(), 'compatair-archive-order-')); roots.push(root);
 const files = { '_server/catalog.sqlite': Buffer.from([0, 1, 255, 2]), 'data/catalog.json': Buffer.from('{"preuve":"débit réel"}'), 'data/catalog.ndjson': Buffer.from('{"preuve":"débit réel"}\n'), 'data/empty': Buffer.alloc(0), 'data/-C': Buffer.from('literal filename'), 'compresseurs/exact/index.html': Buffer.from('<p>Contenu complet</p>') };
 for (const directory of ['_server', 'data', 'compresseurs/exact', 'empty-directory', '.well-known']) await mkdir(join(root, directory), { recursive: true });
 for (const [path, bytes] of Object.entries(files).reverse()) await writeFile(join(root, path), bytes);
 return { root, files };
}
describe('lossless production archive ordering', () => {
 it('lists every entry exactly once, keeps empty directories and places the three catalogue representations together', async () => {
  const { root, files } = await fixture(), paths = await productionArchiveOrder(root);
  expect(paths).toEqual(await productionArchiveOrder(root));
  expect(new Set(paths).size).toBe(paths.length);
  expect(paths).toEqual(['./', './.well-known', './_server', './compresseurs', './compresseurs/exact', './data', './empty-directory', './_server/catalog.sqlite', './data/catalog.json', './data/catalog.ndjson', './compresseurs/exact/index.html', './data/-C', './data/empty']);
  expect(paths.filter(path => Object.hasOwn(files, path.slice(2))).sort()).toEqual(Object.keys(files).map(path => `./${path}`).sort());
 });
 it('emits a complete NUL list through a symlinked CLI path and tar restores all original bytes', async () => {
  const { root, files } = await fixture();
  const launcher = await mkdtemp(join(tmpdir(), 'compatair-archive-cli-')); roots.push(launcher);
  const link = join(launcher, 'order-entry.mjs');
  await symlink(script.pathname, link);
  const list = execFileSync(process.execPath, [link, root]);
  expect(list.at(-1)).toBe(0);
  expect(list.toString()).toBe((await productionArchiveOrder(root)).join('\0') + '\0');
  const manifest = join(launcher, 'files.list'), archive = join(launcher, 'all.tar'), extracted = join(launcher, 'extracted');
  await writeFile(manifest, list); await mkdir(extracted);
  execFileSync('tar', ['-C', root, '--null', '--no-recursion', '-T', manifest, '-cf', archive]);
  const listing = execFileSync('tar', ['-tf', archive], { encoding: 'utf8' });
  expect(assertProductionArchiveEntries(list.toString(), listing)).toBe(13);
  expect(execFileSync(process.execPath, [link, '--verify-list', manifest], { input: listing, encoding: 'utf8' })).toContain('13 entries preserved');
  execFileSync('tar', ['-xf', archive, '-C', extracted]);
  expect(await productionArchiveOrder(extracted)).toEqual(await productionArchiveOrder(root));
  for (const [path, bytes] of Object.entries(files)) expect(await readFile(join(extracted, path))).toEqual(bytes);
 });
 it.each(['missing', 'duplicate', 'changed', 'truncated-list', 'truncated-manifest'])('blocks an incomplete or altered archive inventory: %s', async kind => {
  const { root } = await fixture(); let manifest = (await productionArchiveOrder(root)).join('\0') + '\0';
  let listing = manifest.slice(0, -1).split('\0').join('\n') + '\n';
  if (kind === 'missing') listing = listing.split('\n').slice(1).join('\n');
  if (kind === 'duplicate') listing += './data/catalog.json\n';
  if (kind === 'changed') listing = listing.replace('catalog.ndjson', 'wrong.ndjson');
  if (kind === 'truncated-list') listing = listing.slice(0, -1);
  if (kind === 'truncated-manifest') manifest = manifest.slice(0, -1);
  expect(() => assertProductionArchiveEntries(manifest, listing)).toThrow();
 });
 it.each(['file', 'directory'])('rejects a symlinked %s instead of omitting or following it', async kind => {
  const { root } = await fixture();
  await symlink(kind === 'file' ? join(root, 'data/catalog.json') : join(root, 'data'), join(root, 'linked'));
  await expect(productionArchiveOrder(root)).rejects.toThrow('link or special');
 });
 it('can be imported from a stdin module without attempting CLI file access', async () => {
  const result = execFileSync(process.execPath, ['--input-type=module', '-'], { input: `import { productionArchiveOrder } from ${JSON.stringify(script.href)}; console.log(typeof productionArchiveOrder);`, encoding: 'utf8' });
  expect(result).toBe('function\n');
 });
 it.each(['line\nbreak', '.git'])('rejects unsafe archive entry %j', async name => {
  const { root } = await fixture(); await writeFile(join(root, name), 'keep');
  await expect(productionArchiveOrder(root)).rejects.toThrow('Unsafe');
 });
 it('rejects a symlinked root', async () => {
  const { root } = await fixture(); const target = join(root, 'root-link'); await symlink(join(root, 'data'), target);
  await expect(productionArchiveOrder(target)).rejects.toThrow('regular directory');
 });
});
