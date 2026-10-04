import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { getHeapStatistics } from 'node:v8';
import { parse } from 'yaml';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog.ts';
import { matchingPurchaseLinks } from '../../src/data/direct-purchase-inventory.ts';
import { sourceInventory } from './source-link-health.mjs';

export function productSourceEntries(product, kind, now) {
 const entries = product.evidence.map(evidence => ({ url: evidence.sourceUrl, reference: { productId: product.id, evidenceId: evidence.id, retrievedAt: evidence.retrievedAt } }));
 if (kind === 'compressors') for (const link of matchingPurchaseLinks(product, now)) entries.push({ url: link.url, reference: { productId: product.id, role: 'direct-purchase' } });
 return entries;
}

if (!isMainThread && workerData?.task === 'source-inventory') {
 if (getHeapStatistics().heap_size_limit > 288 * 1024 * 1024) throw new Error('Source inventory worker heap exceeds 288 MiB.');
 const entries = [];
 const schema = workerData.kind === 'compressors' ? compressorSchema : toolProfileSchema;
 for (const file of workerData.files) {
  const { default: raw } = await import(pathToFileURL(join(workerData.root, 'src/data/products', workerData.kind, file)).href);
  entries.push(...productSourceEntries(schema.parse(raw), workerData.kind, new Date(workerData.now)));
 }
 parentPort.postMessage(entries);
}

function batch(root, kind, files, now) {
 return new Promise((resolve, reject) => {
  const parentOnly = /^--(?:input-type|max[-_]old[-_]space[-_]size|max[-_]semi[-_]space[-_]size)(?:=|$)/;
  const execArgv = process.execArgv.filter((arg, index, args) => !parentOnly.test(arg) && !(parentOnly.test(args[index - 1] ?? '') && !args[index - 1].includes('=')));
  const worker = new Worker(new URL(import.meta.url), { execArgv, workerData: { task: 'source-inventory', root, kind, files, now: now.toISOString() }, resourceLimits: { maxOldGenerationSizeMb: 256, maxYoungGenerationSizeMb: 8 } });
  let result;
  worker.once('message', value => { result = value; });
  worker.once('error', reject);
  worker.once('exit', code => code === 0 && Array.isArray(result) ? resolve(result) : reject(new Error(`Source inventory worker failed (${code})`)));
 });
}

// Read the same validated records and EAN/age-filtered purchase links used by
// the pages. No compatibility matrix or HTML build is needed to list URLs.
export async function collectVersionedSourceInventory(root, { now = new Date() } = {}) {
 const entries = [];
 for (const kind of ['compressors', 'tools']) {
  const files = (await readdir(join(root, 'src/data/products', kind))).filter(file => file.endsWith('.ts') && file !== 'index.ts').sort();
  for (let offset = 0; offset < files.length; offset += 1024) entries.push(...await batch(root, kind, files.slice(offset, offset + 1024), now));
 }
 for (const file of (await readdir(join(root, 'src/content/guides'))).filter(file => file.endsWith('.md')).sort()) {
  const raw = await readFile(join(root, 'src/content/guides', file), 'utf8');
  const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatter) throw new Error(`Frontmatter manquant : ${file}`);
  const data = parse(frontmatter[1]);
  if (!Array.isArray(data.sources) || data.sources.some(url => typeof url !== 'string')) throw new Error(`Sources invalides : ${file}`);
  for (const url of data.sources) entries.push({ url, reference: { guide: file } });
 }
 return sourceInventory(entries);
}
