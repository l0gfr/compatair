import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createCompatAirServer } from '../server/mcp-server.mjs';
import { openCatalogRepository, repositoryCatalog, calculationSnapshotMetadata } from '../server/catalog-repository.mjs';

const startedAt = performance.now();
const repository = openCatalogRepository('dist/_server/catalog.sqlite');
const catalog = repositoryCatalog(repository);
const verdictSnapshot = calculationSnapshotMetadata(repository);
const offerSnapshot = JSON.parse(await readFile('dist/data/offers.json', 'utf8'));
const knowledgeItems = JSON.parse(await readFile('dist/data/agent-knowledge.json', 'utf8'));
const changefeedEvents = JSON.parse(await readFile('dist/data/changefeed.json', 'utf8')).events;
const server = createCompatAirServer({ catalog, verdictSnapshot, offerSnapshot, knowledgeItems, changefeedEvents, allowedOrigins: new Set() });
try {
 await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
 const origin = `http://127.0.0.1:${server.address().port}`;
 const health = await (await fetch(`${origin}/health`)).json();
 assert.equal(health.status, 'ok'); assert.equal(health.verdictVersion, verdictSnapshot.verdictVersion);
 const compressor = repository.iterate('compressor').next().value;
 const tool = repository.iterate('tool').next().value;
 const response = await fetch(`${origin}/api/v1/compatibility?${new URLSearchParams({ compressorId: compressor.id, toolId: tool.id })}`);
 assert.equal(response.status, 200);
 const evaluation = (await response.json()).engine_evaluation;
 const expected = JSON.parse(JSON.stringify(repository.evaluate(compressor.id, tool.id)));
 delete expected.averageDemandLpm;
 assert.deepEqual(evaluation, expected);
 const contract = JSON.parse(await readFile('contracts/api/openapi.json', 'utf8'));
 assert.ok(Object.keys(evaluation).every(key => Object.hasOwn(contract.components.schemas.EngineEvaluation.properties, key)), 'The HTTP response must preserve the declared REST contract');
 const search = await fetch(`${origin}/api/v1/search/catalog?q=${encodeURIComponent(compressor.id)}`);
 assert.equal(search.status, 200); assert.ok((await search.json()).items.some(item => item.id === compressor.id));
 const peakMiB = process.resourceUsage().maxRSS / 1024;
 assert.ok(peakMiB < 256, `MCP startup exceeded the 256 MiB service budget: ${peakMiB.toFixed(1)} MiB`);
 assert.equal(catalog.compressors.length + catalog.tools.length, 0, 'Startup must not preload the product corpus');
 assert.equal(verdictSnapshot.pairs.length, 0, 'Startup must not preload the pair matrix');
 console.log(`MCP indexed startup verified: ${repository.metadata.count} references, exact on-demand decisions and HTTP search in ${((performance.now() - startedAt) / 1000).toFixed(2)} s, peak ${peakMiB.toFixed(1)} MiB < 256 MiB.`);
} finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); repository.close(); }
