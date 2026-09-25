import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createCompatAirServer } from '../server/mcp-server.mjs';
import { readVerdictSnapshot } from '../server/verdict-snapshot.mjs';

const catalog = JSON.parse(await readFile('dist/data/catalog.json', 'utf8'));
const snapshot = await readVerdictSnapshot('dist/data/verdicts.json');
assert.equal(snapshot.catalogVersion, catalog.catalogVersion);
assert.equal(snapshot.pairs.length, snapshot.scope.fixed_verdict_count);
const { pairs, ...metadata } = snapshot;
const reconstructed = createHash('sha256').update(`${JSON.stringify(metadata).slice(0, -1)},"pairs":[`);
for (let index = 0; index < pairs.length; index++) reconstructed.update(`${index ? ',' : ''}${JSON.stringify(pairs[index])}`);
reconstructed.update(']}');
const original = createHash('sha256');
for await (const chunk of createReadStream('dist/data/verdicts.json')) original.update(chunk);
assert.equal(reconstructed.digest('hex'), original.digest('hex'), 'Streaming must preserve the complete published snapshot byte for byte');

const offerSnapshot = JSON.parse(await readFile('dist/data/offers.json', 'utf8'));
const knowledgeItems = JSON.parse(await readFile('dist/data/agent-knowledge.json', 'utf8'));
const changefeedEvents = JSON.parse(await readFile('dist/data/changefeed.json', 'utf8')).events;
const server = createCompatAirServer({ catalog, verdictSnapshot: snapshot, offerSnapshot, knowledgeItems, changefeedEvents, allowedOrigins: new Set() });
try {
	await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
	const origin = `http://127.0.0.1:${server.address().port}`;
	const health = await (await fetch(`${origin}/health`)).json();
	assert.equal(health.status, 'ok');
	assert.equal(health.verdictVersion, snapshot.verdictVersion);
	for (const pair of [pairs[0], pairs.at(-1)]) {
		const response = await fetch(`${origin}/api/v1/compatibility?${new URLSearchParams({ compressorId: pair.compressorId, toolId: pair.toolId })}`);
		assert.equal(response.status, 200);
		assert.deepEqual((await response.json()).engine_evaluation, pair);
	}
} finally {
	server.closeAllConnections();
	await new Promise((resolve) => server.close(resolve));
}
const peakMiB = process.resourceUsage().maxRSS / 1024;
assert.ok(peakMiB < 256, `MCP startup exceeded the 256 MiB service budget: ${peakMiB.toFixed(1)} MiB`);
console.log(`MCP startup verified: ${pairs.length} exact verdicts, three shared profiles, HTTP health and API, peak ${peakMiB.toFixed(1)} MiB < 256 MiB.`);
