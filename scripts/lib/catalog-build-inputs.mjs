import { stripTypeScriptTypes } from 'node:module';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildCatalogIndexSource, loadCatalogProducts } from './catalog-tooling.mjs';

// Only build-time data leaves the module graph. Rendering code stays tracked by
// Astro. Every cacheKey-bearing route explicitly fingerprints its consumed data.
export function catalogBuildInputs(root) {
 const generated = join(root, '.astro/build-inputs');
 const code = new Map();
 let preparation;
 async function prepare() {
  await mkdir(generated, { recursive: true });
  await rm(join(root, '.astro/page-calculations-v1/stats.json'), { force: true });
  const loader = path => `import { readFileSync } from 'node:fs';\nconst input = JSON.parse(readFileSync(${JSON.stringify(path)}, 'utf8'));\n`;
  for (const [kind, name] of [['compressors', 'rawCompressors'], ['tools', 'rawTools']]) {
   const { files, products } = await loadCatalogProducts(root, kind);
   const module = join(root, 'src/data/products', kind, 'index.ts');
   if (await readFile(module, 'utf8') !== buildCatalogIndexSource(kind, files)) throw new Error(`Catalog index out of sync: ${kind}`);
   const path = join(generated, `${kind}.json`);
   await writeFile(path, JSON.stringify(products.sort((a, b) => { const left = a.file.slice(0, -3), right = b.file.slice(0, -3); return left < right ? -1 : left > right ? 1 : 0; }).map(entry => entry.product)));
   code.set(module, `${loader(path)}export const ${name} = input;`);
  }
  const titlesPath = join(root, 'src/data/product-seo-titles.ts');
  const titles = await import(pathToFileURL(titlesPath).href);
  const path = join(generated, 'titles.json');
  const names = ['productSeoTitles', 'productSeoDescriptions', 'toolUseSeoTitles'];
  await writeFile(path, JSON.stringify(Object.fromEntries(names.map(name => [name, titles[name]]))));
  const source = await readFile(titlesPath, 'utf8');
  code.set(titlesPath, `${loader(path)}export const { ${names.join(', ')} } = input;\n${stripTypeScriptTypes(source.slice(source.indexOf('export function productSeoTitle')))}`);
  const historyPath = join(root, 'src/data/evidence-history.snapshot.json');
  const historyInput = join(generated, 'history.json');
  await writeFile(historyInput, await readFile(historyPath));
  code.set(join(root, 'src/data/evidence-history.ts'), `${loader(historyInput)}import { evidenceHistorySchema } from '../domain/evidence-history';\nexport const evidenceHistory = evidenceHistorySchema.parse(input);`);
 }
 return {
  name: 'compatair-catalog-build-inputs', apply: 'build', enforce: 'post',
  async transform(_source, id) {
   // Preparing once also keeps build inputs identical across Vite environments.
   if (!id.startsWith(resolve(root, 'src/data'))) return;
   await (preparation ??= prepare());
   const replacement = code.get(id);
   if (replacement) {
    if (this.environment?.name === 'client') throw new Error('Catalog build inputs must never enter a client bundle');
    return { code: replacement, map: null };
   }
  },
 };
}

export async function reportPageCalculations(root) {
 let stats = { calculated: 0, reused: 0, memoryHits: 0 };
 try { stats = JSON.parse(await readFile(join(root, '.astro/page-calculations-v1/stats.json'), 'utf8')); } catch { /* No cached calculation was requested. */ }
 console.log(`[page-calculations] ${JSON.stringify(stats)}`);
}
