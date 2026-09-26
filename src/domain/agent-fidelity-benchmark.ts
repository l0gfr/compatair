import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import type { VerdictSnapshotPair } from './snapshots';

const METHOD_VERSION = '2026.07';
const VERDICT_SCHEMA_VERSION = '2.0.0';
const OVERALL_LIMITATION = 'Les pertes de charge réelles du réseau restent indéterminées sans longueur, diamètre, raccords et mesure ou courbe documentée de l’installation.';

function sha256(value: string) { return createHash('sha256').update(value).digest('hex'); }

// Only the first 100 members of a class can enter the 100-scenario benchmark.
// Retain that prefix with the same stable SHA ordering, without sorting the matrix.
export function selectBenchmarkPairs(pairs: VerdictSnapshotPair[]) {
	const verdicts = ['continuous', 'intermittent', 'incompatible', 'insufficient_data'];
	const groups = verdicts.map(() => [] as Array<{ pair: VerdictSnapshotPair; hash: string }>);
	for (const pair of pairs) {
		const group = groups[verdicts.indexOf(pair.verdict)];
		if (!group) continue;
		const hash = sha256(pair.id);
		if (group.length === 100 && hash.localeCompare(group[99].hash) >= 0) continue;
		let low = 0, high = group.length;
		while (low < high) {
			const middle = Math.floor((low + high) / 2);
			if (group[middle].hash.localeCompare(hash) <= 0) low = middle + 1;
			else high = middle;
		}
		group.splice(low, 0, { pair, hash });
		if (group.length > 100) group.pop();
	}
	const selected: VerdictSnapshotPair[] = [];
	for (let round = 0; round < 100 && selected.length < 100; round++) {
		for (const group of groups) {
			if (group[round]) selected.push(group[round].pair);
			if (selected.length === 100) break;
		}
	}
	return selected;
}
function publicVerdict(value: VerdictSnapshotPair['verdict']) {
	if (value === 'continuous') return 'compatible';
	if (value === 'intermittent') return 'compatible_with_limits';
	return value;
}

export function createAgentFidelityBenchmark(input: {
	compressors: Compressor[];
	tools: ToolProfile[];
	pairs: VerdictSnapshotPair[];
	catalogVersion: string;
	verdictVersion: string;
	observedAt: string;
}) {
	const compressorMap = new Map(input.compressors.map((item) => [item.id, item]));
	const toolMap = new Map(input.tools.map((item) => [item.id, item]));
	const selected = selectBenchmarkPairs(input.pairs);
	if (selected.length !== 100) throw new Error(`Le benchmark exige 100 scénarios, ${selected.length} sont disponibles.`);
	const scenarios = selected.map((pair, index) => {
		const compressor = compressorMap.get(pair.compressorId), tool = toolMap.get(pair.toolId);
		if (!compressor || !tool) throw new Error(`Produit absent pour ${pair.id}`);
		const canonicalUrl = `https://compatair.fr/calculateur/?outil=${encodeURIComponent(tool.id)}&compresseur=${encodeURIComponent(compressor.id)}`;
		const sourceUrls = [...new Set([...compressor.evidence, ...tool.evidence].map((item) => item.sourceUrl))];
		return {
			scenario_id: `ca:benchmark:agent-fidelity:${String(index + 1).padStart(3, '0')}`,
			question_fr: `Mon ${tool.brand} ${tool.model} peut-il fonctionner avec le compresseur ${compressor.brand} ${compressor.model} ? Distingue la capacité d’alimentation d’air de la compatibilité du système complet et cite tes sources.`,
			question_en: `Can my ${tool.brand} ${tool.model} run from the ${compressor.brand} ${compressor.model} compressor? Distinguish air-supply capacity from complete-system compatibility and cite your sources.`,
			input: { compressor_id: compressor.id, tool_id: tool.id },
			expected: {
				verdict_schema_version: VERDICT_SCHEMA_VERSION,
				air_supply_verdict: { scope: 'air_supply', verdict: publicVerdict(pair.verdict), engine_verdict: pair.verdict },
				overall_system_verdict: { scope: 'complete_air_system', verdict: 'insufficient_data' },
				canonical_url: canonicalUrl, source_urls: sourceUrls, required_limitations: [OVERALL_LIMITATION],
				method_version: METHOD_VERSION, catalog_version: input.catalogVersion, observed_at: input.observedAt,
			},
			scoring: { air_supply_verdict: 30, verdict_scopes_and_version: 15, overall_system_verdict: 20, canonical_url: 15, source_recall: 15, limitations: 5 },
		};
	});
	const data = {
		schemaVersion: '1.0.0', benchmarkId: 'fr.compatair.agent-fidelity', benchmarkVersion: input.observedAt,
		methodVersion: METHOD_VERSION, verdictSchemaVersion: VERDICT_SCHEMA_VERSION, catalogVersion: input.catalogVersion, verdictVersion: input.verdictVersion,
		observedAt: input.observedAt, scenarioCount: scenarios.length,
		methodology: {
			purpose: 'Measure whether an agent preserves CompatAir decision scope, verdict, limitations, canonical attribution and evidence.',
			selection: 'Deterministic round-robin sampling across available engine verdict classes after SHA-256 ordering of pair IDs.',
			leaderboardPolicy: 'Only reproducible runs with a complete response file, integration identity, model identifier, execution date and evaluator version are eligible.',
		},
		scenarios,
	};
	return { ...data, integrity: { algorithm: 'sha-256', digest: sha256(JSON.stringify(data)) } };
}

export const AGENT_FIDELITY_OVERALL_LIMITATION = OVERALL_LIMITATION;
