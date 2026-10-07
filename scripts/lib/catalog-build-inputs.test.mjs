import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, it } from 'vitest';
import { catalogBuildInputs } from './catalog-build-inputs.mjs';
import { buildCatalogIndexSource } from './catalog-tooling.mjs';

it('preserves index order for a model and its prefixed variants, independent of filename extension ordering', async () => {
 const root = await mkdtemp(join(tmpdir(), 'compatair-build-inputs-'));
 try {
  for (const kind of ['compressors', 'tools']) {
   const directory = join(root, 'src/data/products', kind);
   await mkdir(directory, { recursive: true });
   const files = ['model.ts', 'model-variant.ts'];
   await writeFile(join(directory, 'index.ts'), buildCatalogIndexSource(kind, files));
   for (const file of files) await writeFile(join(directory, file), `export default { id: '${file.slice(0, -3)}', source: 'https://example.com/proof' };`);
  }
  await writeFile(join(root, 'src/data/evidence-history.snapshot.json'), '{"events":[]}');
  await writeFile(join(root, 'src/data/product-seo-titles.ts'), 'export const productSeoTitles = {}; export const productSeoDescriptions = {}; export const toolUseSeoTitles = {}; export function productSeoTitle(id: string) { return id; }');
  const plugin = catalogBuildInputs(root);
  const module = join(root, 'src/data/products/tools/index.ts');
  const transformed = await plugin.transform.call({ environment: { name: 'prerender' } }, '', module);
  expect(JSON.parse(await readFile(join(root, '.astro/build-inputs/tools.json'), 'utf8')).map(item => item.id)).toEqual(['model', 'model-variant']);
  expect(transformed.code).not.toContain('model-variant');
  expect(transformed.code).toContain('readFileSync');
  const historyModule = join(root, 'src/data/evidence-history.ts');
  const historyTransformed = await plugin.transform.call({ environment: { name: 'prerender' } }, '', historyModule);
  expect(historyTransformed.code).toContain('evidenceHistorySchema.parse(input)');
  expect(JSON.parse(await readFile(join(root, '.astro/build-inputs/history.json'), 'utf8'))).toEqual({ events: [] });
  await expect(plugin.transform.call({ environment: { name: 'client' } }, '', historyModule)).rejects.toThrow('client bundle');
  await expect(plugin.transform.call({ environment: { name: 'client' } }, '', module)).rejects.toThrow('client bundle');
  await writeFile(module, 'broken index');
  await expect(catalogBuildInputs(root).transform.call({}, '', module)).rejects.toThrow('out of sync');
 } finally { await rm(root, { recursive: true, force: true }); }
});
