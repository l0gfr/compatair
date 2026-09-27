import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { writeCatalogDatabase, openCatalogRepository, repositoryCatalog, calculationSnapshotMetadata } from '../server/catalog-repository.mjs';
import { createCompatAirServer } from '../server/mcp-server.mjs';

const [mode, path, sizeText] = process.argv.slice(2);
if (mode === '--measure') {
 const start = performance.now(), repository = openCatalogRepository(path);
 const catalog = repositoryCatalog(repository);
 const server = createCompatAirServer({ catalog, verdictSnapshot: calculationSnapshotMetadata(repository), allowedOrigins: new Set() });
 await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
 const startupMs = performance.now() - start;
 const queries = [], decisions = [];
 try {
  for (let i = 0; i < 100; i++) {
   let tick = performance.now();
   const found = repository.search({ query: `fixture ${String(i).padStart(6, '0')}`, limit: 10 });
   assert.equal(found.items.length, 2); queries.push(performance.now() - tick);
   tick = performance.now();
   const result = repository.evaluate(`fixture-compressor-${String(i).padStart(6, '0')}`, `fixture-tool-${String(i).padStart(6, '0')}`);
   assert.ok(result); decisions.push(performance.now() - tick);
  }
  const response = await fetch(`http://127.0.0.1:${server.address().port}/api/v1/compatibility?compressorId=fixture-compressor-000000&toolId=fixture-tool-000000`);
  assert.equal(response.status, 200);
  assert.equal((await response.json()).calculationVersion, repository.metadata.calculationVersion);
  const p95 = values => +values.sort((a, b) => a - b)[Math.ceil(values.length * .95) - 1].toFixed(3);
  const peakMiB = process.resourceUsage().maxRSS / 1024;
  assert.ok(peakMiB < 256, `Service memory ${peakMiB.toFixed(1)} MiB exceeded 256 MiB`);
  console.log(JSON.stringify({ references: repository.metadata.count, startupMs: +startupMs.toFixed(2), searchP95Ms: p95(queries), decisionP95Ms: p95(decisions), peakMiB: +peakMiB.toFixed(2), cache: repository.cacheStats(), httpVerified: true }));
 } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); repository.close(); }
} else if (mode === '--build') {
 const count = Number(sizeText), half = count / 2;
 const source = JSON.parse(await readFile('dist/data/catalog.json', 'utf8'));
 const compressor = source.compressors.find(item => item.dutyCycle !== undefined), tool = source.tools.find(item => item.demandModel === 'fixed-flow');
 function* products(base, type) {
  for (let i = 0; i < half; i++) {
   const suffix = String(i).padStart(6, '0');
   yield { ...base, id: `fixture-${type}-${suffix}`, slug: `fixture-${type}-${suffix}`, brand: 'Synthetic benchmark fixture', model: `Fixture ${suffix}`, label: `Fixture ${suffix}`, mpn: `fixture-${type}-${suffix}`, ean: undefined, gtin: undefined, distributorSkus: [], identifierAliases: [] };
  }
 }
 const start = performance.now();
 writeCatalogDatabase(path, { catalogVersion: createHash('sha256').update(`synthetic-fixture-${count}`).digest('hex'), verifiedAt: '2026-09-27', compressors: products(compressor, 'compressor'), tools: products(tool, 'tool') });
 console.log(JSON.stringify({ databaseBuildMs: +(performance.now() - start).toFixed(2), databaseBytes: (await stat(path)).size }));
} else {
 const directory = await mkdtemp(join(tmpdir(), 'compatair-scale-'));
 const rows = [];
 try {
  for (const count of [10_000, 25_000, 50_000, 100_000]) {
   const database = join(directory, `synthetic-${count}.sqlite`);
   const run = args => {
    const child = spawnSync(process.execPath, args, { encoding: 'utf8', timeout: 180_000, maxBuffer: 1_048_576 });
    if (child.status !== 0) throw new Error(child.stderr || child.stdout || 'Benchmark child failed');
    return JSON.parse(child.stdout.trim());
   };
   const build = run([process.argv[1], '--build', database, String(count)]);
   const measurement = run(['--max-old-space-size=128', '--max-semi-space-size=4', process.argv[1], '--measure', database]);
   rows.push({ ...build, ...measurement });
   console.log(JSON.stringify(rows.at(-1)));
   await rm(database);
  }
  const report = { schemaVersion: '1.0.0', measuredAt: new Date().toISOString(), environment: { platform: process.platform, arch: process.arch, node: process.version }, fixture: 'Synthetic variants of two public records. Measures indexed storage/search/decision service only; not editorial quality, a 100k-page HTML build or production traffic.', measurements: rows };
  await writeFile('docs/catalog-scale-measurements.json', JSON.stringify(report, null, 2) + '\n');
 } finally { await rm(directory, { recursive: true, force: true }); }
}
