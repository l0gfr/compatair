import { createHash } from 'node:crypto';
import { cp, mkdir, mkdtemp, open, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { loadCatalogProducts, generateCatalogIndexes } from './lib/catalog-tooling.mjs';

// Synthetic references exist only in a disposable, non-deployable source copy.
// No product fixture is added to the real catalog or to Git.
const source = process.cwd();
const root = await mkdtemp(join(tmpdir(), 'compatair-build-growth-'));
const hash = value => createHash('sha256').update(value).digest('hex');
console.log(`Isolated benchmark: ${root}`);
for (const name of ['src', 'server', 'scripts', 'config', 'public', 'benchmarks', 'contracts', 'docs', 'astro.config.mjs', 'package.json', 'pnpm-lock.yaml', 'tsconfig.json']) await cp(join(source, name), join(root, name), { recursive: true });
await mkdir(join(root, 'node_modules'));
for (const name of await readdir(join(source, 'node_modules'))) {
 if (['.astro', '.vite'].includes(name)) continue;
 await symlink(join(source, 'node_modules', name), join(root, 'node_modules', name));
}
await writeFile(join(root, 'BENCHMARK_ONLY'), 'Synthetic fixtures. Never publish this directory.\n');
async function command(args, name) {
 const logfile = join(root, `${name}.log`), output = await open(logfile, 'w');
 const started = performance.now();
 try {
  await new Promise((accept, reject) => {
   const child = spawn(process.execPath, args, { cwd: root, env: { ...process.env, GITHUB_ACTIONS: 'false' }, stdio: ['ignore', output.fd, output.fd] });
   child.once('error', reject); child.once('exit', status => status === 0 ? accept() : reject(new Error(`${name} exited ${status}: ${logfile}`)));
  });
 } finally { await output.close(); }
 return { seconds: Math.round((performance.now() - started) / 10) / 100, log: logfile };
}
async function build(name, force = false) {
 if (force) await rm(join(root, '.astro/page-calculations-v1'), { recursive: true, force: true });
 const result = await command(['node_modules/astro/bin/astro.mjs', 'build', ...(force ? ['--force'] : [])], name);
 const log = await readFile(result.log, 'utf8');
 result.cachedPages = (log.match(/\((?:cached|restored)\)/g) ?? []).length;
 try { result.pageCalculations = JSON.parse(await readFile(join(root, '.astro/page-calculations-v1/stats.json'), 'utf8')); } catch { result.pageCalculations = { calculated: 0, reused: 0, memoryHits: 0 }; }
 result.verdictBytes = (await readFile(join(root, 'dist/data/verdicts.json'))).length;
 console.log(JSON.stringify({ phase: name, ...result }));
 return result;
}
async function htmlHashes() {
 const result = {};
 async function walk(directory) { for (const entry of await readdir(directory, { withFileTypes: true })) {
  const path = join(directory, entry.name);
  if (entry.isDirectory()) await walk(path);
  else if (entry.name.endsWith('.html')) result[path.slice(join(root, 'dist').length)] = hash(await readFile(path));
 } }
 for (const family of ['compresseurs', 'outils-pneumatiques', 'quel-compresseur-pour', 'guides']) await walk(join(root, 'dist', family));
 return result;
}
const report = { schemaVersion: 1, synthetic: true, node: process.version, root, addedTools: 1000, phases: {} };
report.phases.prepare = await command(['scripts/prepare-indexation.mjs', '--offline'], 'prepare-baseline');
report.phases.baselineCold = await build('baseline-cold', true);
report.phases.baselineWarm = await build('baseline-warm');
const original = await loadCatalogProducts(root, 'tools');
const template = original.products.find(entry => entry.product.demandModel === 'fixed-flow').product;
const historyPath = join(root, 'src/data/evidence-history.snapshot.json');
const history = JSON.parse(await readFile(historyPath, 'utf8'));
const titlesPath = join(root, 'src/data/product-seo-titles.ts');
let titles = await readFile(titlesPath, 'utf8');
let productTitles = '', useTitles = '';
for (let index = 1; index <= report.addedTools; index++) {
 const product = structuredClone(template), suffix = String(index).padStart(4, '0');
 product.id = product.slug = `zz-benchmark-fixture-${suffix}`;
 product.brand = 'ZZ Benchmark'; product.model = `Fixture ${suffix}`; product.label = `ZZ Benchmark Fixture ${suffix}`;
 product.mpn = `BENCHMARK-${suffix}`; delete product.ean; delete product.gtin; product.distributorSkus = [];
 for (const evidence of product.evidence) history.events.push({ id: `baseline:${product.id}:${evidence.id}`, evidenceId: evidence.id, productId: product.id, productType: 'tool', occurredAt: history.startedAt, kind: 'baseline', summary: 'Synthetic benchmark fixture. Never publish.', fingerprint: hash(JSON.stringify({ productId: product.id, evidence })), snapshot: evidence });
 await writeFile(join(root, 'src/data/products/tools', `${product.slug}.ts`), `const product = ${JSON.stringify(product)};\nexport default product;\n`);
 productTitles += `\n ${JSON.stringify(product.id)}: ${JSON.stringify(`${product.label} : fiche de test`)},`;
 useTitles += `\n ${JSON.stringify(product.id)}: ${JSON.stringify(`${product.label} : besoin de test`)},`;
}
titles = titles.replace('export const productSeoTitles: Record<string, string> = {', `export const productSeoTitles: Record<string, string> = {${productTitles}`)
 .replace('export const toolUseSeoTitles: Record<string, string> = {', `export const toolUseSeoTitles: Record<string, string> = {${useTitles}`);
await writeFile(titlesPath, titles);
const { historyVersion: _version, ...historyData } = history;
await writeFile(historyPath, JSON.stringify({ ...historyData, historyVersion: hash(JSON.stringify(historyData)) }));
await generateCatalogIndexes(root);
report.phases.prepareGrowth = await command(['scripts/prepare-indexation.mjs', '--offline'], 'prepare-growth');
report.phases.growthIncremental = await build('growth-incremental');
const incremental = await htmlHashes();
report.phases.growthWarm = await build('growth-warm');
report.phases.growthCold = await build('growth-cold', true);
const cold = await htmlHashes();
const differences = [...new Set([...Object.keys(incremental), ...Object.keys(cold)])].filter(path => incremental[path] !== cold[path]);
report.checkedHtmlFiles = Object.keys(cold).length;
report.incrementalMatchesCold = differences.length === 0;
report.differences = differences;
await writeFile(join(root, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (differences.length) throw new Error(`Incremental HTML differs from cold build: ${differences.slice(0, 5).join(', ')}`);
