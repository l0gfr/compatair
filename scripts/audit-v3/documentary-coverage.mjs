import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { evaluateCompatibility, resolveAvailableFad } from '../../server/air-compatibility.mjs';
import { CALCULATION_VERSION } from '../../server/air-sizing.mjs';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const conclusive = result => result.verdict !== 'insufficient_data';
const order = ['missing_fad', 'missing_cycle', 'pressure_coverage', 'source_quality', 'average_only'];
export function documented(product, field) {
	const sources = new Map((product.evidence ?? []).map(source => [source.id, source]));
	const ids = product.fieldSources?.[field] ?? [];
	return product[field] !== undefined && (field !== 'fadCurve' || product.fadCurve.length > 0)
		&& ids.length > 0 && ids.every(id => {
			const source = sources.get(id);
			try { return Boolean(source?.retrievedAt) && new URL(source.sourceUrl).protocol === 'https:'; } catch { return false; }
		});
}
const cube = () => Object.fromEntries(Array.from({ length: 8 }, (_, i) => [i.toString(2).padStart(3, '0'), 0]));
const key = (...flags) => flags.map(Number).join('');

export function marginalCompletion(gapSets, fields = order) {
	const completed = new Set();
	let cumulative = 0;
	return fields.map(field => {
		completed.add(field);
		const total = Object.entries(gapSets).filter(([gaps]) => gaps.split('+').every(gap => completed.has(gap))).reduce((sum, [, count]) => sum + count, 0);
		const marginal = total - cumulative;
		cumulative = total;
		return { field, newlyDocumentablePairs: marginal, cumulativeDocumentablePairs: total };
	});
}

export function auditCoverage(catalog, registry, afterCatalog) {
	for (const snapshot of [catalog, afterCatalog].filter(Boolean)) for (const kind of ['compressors', 'tools']) {
		assert.equal(new Set(snapshot[kind].map(product => product.id)).size, snapshot[kind].length, `Duplicate ${kind} IDs`);
	}
	assert.equal(new Set(registry.intentions.map(intent => intent.id)).size, registry.intentions.length, 'Duplicate intention IDs');
	const fixed = catalog.tools.filter(tool => tool.demandModel === 'fixed-flow');
	const routes = new Map([...catalog.compressors.map(p => [`/compresseurs/${p.slug}/`, p.id]), ...catalog.tools.flatMap(p => [[`/outils-pneumatiques/${p.slug}/`, p.id], [`/quel-compresseur-pour/${p.slug}/`, p.id]])]);
	const intentionRows = registry.intentions.map(intent => {
		const related = intent.association.routes.flatMap(route => [route, ...(registry.pages[route]?.nextSteps ?? [])]);
		return { id: intent.id, query: intent.query, routes: intent.association.routes, productIds: [...new Set(related.map(route => routes.get(route)).filter(Boolean))].sort(), unknownPairs: 0, marginalUnknownPairs: 0, gapSets: {} };
	});
	const intentsByProduct = new Map();
	for (const row of intentionRows) for (const id of row.productIds) {
		if (!intentsByProduct.has(id)) intentsByProduct.set(id, []);
		intentsByProduct.get(id).push(row);
	}
	const presence = cube(), pairCube = cube(), pressures = new Map(), gaps = {}, counts = {};
	const products = catalog.compressors.map(product => {
		const flags = { fad: documented(product, 'fadCurve'), cycle: documented(product, 'dutyCycle'), maxPressure: documented(product, 'maxPressureBar') };
		presence[key(flags.fad, flags.cycle, flags.maxPressure)]++;
		return { id: product.id, ...flags, missingFields: Object.entries(flags).filter(([, present]) => !present).map(([field]) => field), sources: Object.fromEntries(['fadCurve', 'dutyCycle', 'maxPressureBar'].map(field => [field, (product.fieldSources?.[field] ?? []).map(id => product.evidence.find(source => source.id === id)).filter(Boolean).map(source => ({ id: source.id, url: source.sourceUrl, retrievedAt: source.retrievedAt }))])) };
	});
	const afterCompressors = new Map(afterCatalog?.compressors.map(p => [p.id, p]) ?? []), afterTools = new Map(afterCatalog?.tools.filter(t => t.demandModel === 'fixed-flow').map(p => [p.id, p]) ?? []);
	const measuredGain = { status: afterCatalog ? 'compared' : 'not-executed-no-after-catalog', commonPairs: 0, excludedRemovedOrChangedModelPairs: 0, gainedConclusivePairs: 0, lostConclusivePairs: 0, net: null };
	let linkedUnknownUnion = 0;
	for (const [index, compressor] of catalog.compressors.entries()) {
		const facts = products[index];
		for (const tool of fixed) {
			const pressure = tool.workingPressureBar.typical;
			const usablePressure = facts.maxPressure && facts.fad && ['A', 'B'].includes(compressor.confidence) && documented(tool, 'workingPressureBar') && compressor.maxPressureBar >= pressure && resolveAvailableFad(compressor, pressure) !== undefined;
			const cell = key(facts.fad, facts.cycle, usablePressure);
			pairCube[cell]++;
			if (!pressures.has(pressure)) pressures.set(pressure, { pressureBar: pressure, tools: fixed.filter(t => t.workingPressureBar.typical === pressure).length, cells: cube() });
			pressures.get(pressure).cells[cell]++;
			const result = evaluateCompatibility(compressor, tool);
			counts[result.verdict] = (counts[result.verdict] ?? 0) + 1;
			if (!conclusive(result)) {
				const missing = [];
				if (!facts.fad) missing.push('missing_fad');
				if (!facts.cycle) missing.push('missing_cycle');
				if (!facts.maxPressure || !documented(tool, 'workingPressureBar') || (facts.fad && !resolveAvailableFad(compressor, pressure)) || result.warnings.some(warning => warning.includes('La borne de FAD ne suffit pas'))) missing.push('pressure_coverage');
				if (!['A', 'B'].includes(compressor.confidence)) missing.push('source_quality');
				if (tool.airflowBasis === 'average') missing.push('average_only');
				const gapKey = missing.sort().join('+') || 'other_engine_limit';
				gaps[gapKey] = (gaps[gapKey] ?? 0) + 1;
				const linked = [...new Set([...(intentsByProduct.get(compressor.id) ?? []), ...(intentsByProduct.get(tool.id) ?? [])])].sort((a, b) => a.id.localeCompare(b.id));
				for (const row of linked) { row.unknownPairs++; row.gapSets[gapKey] = (row.gapSets[gapKey] ?? 0) + 1; }
				if (linked.length) { linkedUnknownUnion++; linked[0].marginalUnknownPairs++; }
			}
			if (afterCatalog) {
				const nextCompressor = afterCompressors.get(compressor.id), nextTool = afterTools.get(tool.id);
				if (!nextCompressor || !nextTool) { measuredGain.excludedRemovedOrChangedModelPairs++; continue; }
				measuredGain.commonPairs++;
				const next = evaluateCompatibility(nextCompressor, nextTool);
				if (!conclusive(result) && conclusive(next)) measuredGain.gainedConclusivePairs++;
				if (conclusive(result) && !conclusive(next)) measuredGain.lostConclusivePairs++;
			}
		}
	}
	if (afterCatalog) measuredGain.net = measuredGain.gainedConclusivePairs - measuredGain.lostConclusivePairs;
	assert.equal(Object.values(pairCube).reduce((a, b) => a + b, 0), catalog.compressors.length * fixed.length);
	assert.equal(intentionRows.reduce((sum, row) => sum + row.marginalUnknownPairs, 0), linkedUnknownUnion);
	return { denominator: { compressors: catalog.compressors.length, fixedFlowTools: fixed.length, pairs: catalog.compressors.length * fixed.length }, documentedPresenceCube: presence, pressureUsablePairCube: pairCube, byPressure: [...pressures.values()].sort((a, b) => a.pressureBar - b.pressureBar), counts, unknownGapSets: gaps, documentaryOpportunity: marginalCompletion(gaps), measuredGain: afterCatalog ? measuredGain : { status: measuredGain.status, commonPairs: null, excludedRemovedOrChangedModelPairs: null, gainedConclusivePairs: null, lostConclusivePairs: null, net: null }, intentions: intentionRows, linkedUnknownUnion, products };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	const [snapshot, registryFile, output, afterFile] = process.argv.slice(2);
	assert.ok(snapshot && registryFile && output, 'Usage: documentary-coverage.mjs catalog.json intention-registry.json report.json [after-catalog.json]');
	const readCatalog = async file => {
		const bytes = await readFile(file), value = JSON.parse(bytes);
		const { catalogVersion, ...content } = value;
		assert.equal(sha(JSON.stringify(content)), catalogVersion, 'Invalid catalog hash');
		return { value, fileSha256: sha(bytes), catalogVersion };
	};
	const before = await readCatalog(snapshot), after = afterFile ? await readCatalog(afterFile) : undefined;
	const registryBytes = await readFile(registryFile);
	assert.deepEqual(JSON.parse(registryBytes).intentions.map(intent => intent.id), Array.from({ length: 100 }, (_, index) => `q${String(index + 1).padStart(3, '0')}`), 'Original ordered intention IDs required');
	const report = { schemaVersion: 1, measuredAt: new Date().toISOString(), calculationVersion: CALCULATION_VERSION, catalog: { catalogVersion: before.catalogVersion, fileSha256: before.fileSha256 }, afterCatalog: after ? { catalogVersion: after.catalogVersion, fileSha256: after.fileSha256 } : null, intentionRegistrySha256: sha(registryBytes), definitions: {
		presenceCube: 'FAD documented x duty cycle documented x maximum pressure documented; compressors, cells ordered F,C,P (1=yes,0=no).',
		pressureUsablePairCube: 'FAD documented x cycle documented x usable pressure; fixed pairs. Usable pressure requires sourced tool pressure, sourced compressor maximum covering it, grade A/B and exact/interpolated/conservative FAD resolution. It does not establish sufficient flow or endurance.',
		documented: 'Non-missing value with nonempty fieldSources, all referencing HTTPS evidence entries with retrieval dates. Linkage audit, not a new external source verification.',
		marginal: 'Opportunity only: previously unknown pairs whose listed gaps would all be addressed, in the displayed field order. Unknown values remain unknown; no verdict is simulated.',
		intentionMarginal: 'Unknown pairs associated to exact products in linked pages or their direct next-step links; each pair allocated once to the first original query ID. Broad guide topics do not silently target the whole catalog.',
	}, ...auditCoverage(before.value, JSON.parse(registryBytes), after?.value), limits: ['Documentary opportunity is not a promise of conclusive verdicts.', 'Measured gain needs an actual after-catalog; no averages or invented cycles are substituted.', 'Historical MCP cohorts are neither changed nor cross-tabulated from missing joint data.'] };
	await writeFile(output, JSON.stringify(report, null, 2) + '\n');
	console.log(JSON.stringify({ denominator: report.denominator, presence: report.documentedPresenceCube, pairCube: report.pressureUsablePairCube, opportunities: report.documentaryOpportunity, measuredGain: report.measuredGain }));
}
