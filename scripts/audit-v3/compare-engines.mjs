import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const fields = ['verdict', 'confidence', 'limitingFactor', 'warnings'];

export function comparePairs(catalog, before, after) {
	const fixed = catalog.tools.filter(tool => tool.demandModel === 'fixed-flow');
	const counts = { before: {}, after: {} }, differences = Object.fromEntries(fields.map(field => [field, 0]));
	const transitions = {}, samples = [], digests = [createHash('sha256'), createHash('sha256')];
	let examined = 0, changedPairs = 0;
	for (const compressor of catalog.compressors) for (const tool of fixed) {
		const results = [before(compressor, tool), after(compressor, tool)];
		const changedFields = fields.filter(field => JSON.stringify(results[0][field]) !== JSON.stringify(results[1][field]));
		for (const field of changedFields) differences[field]++;
		if (changedFields.length) {
			changedPairs++;
			if (samples.length < 20) samples.push({ compressorId: compressor.id, toolId: tool.id, changedFields, before: results[0], after: results[1] });
		}
		results.forEach((result, index) => {
			const bucket = index ? counts.after : counts.before;
			bucket[result.verdict] = (bucket[result.verdict] ?? 0) + 1;
			digests[index].update(JSON.stringify([compressor.id, tool.id, ...fields.map(field => result[field] === undefined ? ['undefined'] : ['value', result[field]])]) + '\n');
		});
		const transition = `${results[0].verdict}->${results[1].verdict}`;
		transitions[transition] = (transitions[transition] ?? 0) + 1;
		examined++;
	}
	assert.equal(examined, catalog.compressors.length * fixed.length);
	return { denominator: { compressors: catalog.compressors.length, fixedFlowTools: fixed.length, excludedParametricTools: catalog.tools.length - fixed.length, pairs: examined, includesAverageOnlyFixedFlow: true }, counts, differences, changedPairs, transitions, resultDigests: digests.map(hash => hash.digest('hex')), samples, sampleLimit: 20 };
}

export async function compareEngines({ root, snapshot, beforeCommit, afterCommit }) {
	for (const commit of [beforeCommit, afterCommit]) assert.match(commit, /^[a-f0-9]{40}$/, 'An exact local Git commit is required');
	const bytes = await readFile(snapshot), catalog = JSON.parse(bytes);
	const { catalogVersion, ...content } = catalog;
	assert.equal(sha256(JSON.stringify(content)), catalogVersion, 'Catalog semantic hash mismatch');
	for (const kind of ['compressors', 'tools']) assert.equal(new Set(catalog[kind].map(item => item.id)).size, catalog[kind].length, `Duplicate ${kind} IDs`);
	const directory = await mkdtemp(join(tmpdir(), 'compatair-engine-audit-'));
	const engines = [], evaluators = [];
	try {
		for (const [index, commit] of [beforeCommit, afterCommit].entries()) {
			const modules = {};
			for (const name of ['air-sizing', 'air-compatibility']) {
				// Only the two fixed paths from this project's local Git history are executed.
				const source = execFileSync('git', ['-C', root, 'show', `${commit}:server/${name}.mjs`]);
				modules[`server/${name}.mjs`] = sha256(source);
				const code = name === 'air-compatibility' ? source.toString().replace("'./air-sizing.mjs'", `'./${index}-air-sizing.mjs'`) : source;
				await writeFile(join(directory, `${index}-${name}.mjs`), code);
			}
			const sizing = await import(pathToFileURL(join(directory, `${index}-air-sizing.mjs`)).href);
			const engine = await import(pathToFileURL(join(directory, `${index}-air-compatibility.mjs`)).href);
			engines.push({ commit, calculationVersion: sizing.CALCULATION_VERSION, modules });
			evaluators.push(engine.evaluateCompatibility);
		}
		const start = performance.now();
		const result = comparePairs(catalog, ...evaluators);
		return { schemaVersion: 1, measuredAt: new Date().toISOString(), runtime: { node: process.version, platform: process.platform, arch: process.arch }, engines, catalog: { catalogVersion, fileSha256: sha256(bytes), bytes: bytes.length, verifiedAt: catalog.verifiedAt }, scenario: { safetyMargin: 0.25, mode: 'successive', quantity: 1, dutyFactor: 1, sessionMinutes: 30, warningComparison: 'ordered exact strings', source: 'server/air-compatibility.mjs at each pinned commit' }, ...result, elapsedSeconds: (performance.now() - start) / 1000, limitations: ['Same fixed catalog for both engines; no claim about earlier catalog populations.', 'Aggregate offline comparison; no Cartesian matrix is retained or served.', 'No certification of custom scenarios, HTTP, rendering or external source accuracy.'] };
	} finally { await rm(directory, { recursive: true, force: true }); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	const [snapshot, beforeCommit, afterCommit, output] = process.argv.slice(2);
	assert.ok(snapshot && beforeCommit && afterCommit && output, 'Usage: node scripts/audit-v3/compare-engines.mjs catalog.json BEFORE_SHA AFTER_SHA report.json');
	const result = await compareEngines({ root: process.cwd(), snapshot, beforeCommit, afterCommit });
	await writeFile(output, JSON.stringify(result, null, 2) + '\n');
	console.log(JSON.stringify({ pairs: result.denominator.pairs, differences: result.differences, output }));
}
