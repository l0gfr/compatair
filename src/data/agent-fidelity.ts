import { createAgentFidelityBenchmark } from '../domain/agent-fidelity-benchmark';
import { decisionVersion, evaluatePair } from '../../server/verdict-publication.mjs';
import panel from '../../config/agent-benchmark-panel.json';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { publicationCatalog as catalog } from './verdict-publication';

const pairs = panel.pairs.map(({ compressor_id, tool_id }) => {
	const compressor = compressors.find(item => item.id === compressor_id), tool = tools.find(item => item.id === tool_id);
	if (!compressor || !tool || tool.demandModel !== 'fixed-flow') throw new Error('Le panel agent doit être révisé explicitement après un retrait de produit.');
	return evaluatePair(compressor, tool);
});

export const agentFidelityBenchmark = createAgentFidelityBenchmark({
	compressors, tools, pairs, catalogVersion: catalog.catalogVersion, selection: 'pinned-panel',
	verdictVersion: decisionVersion(catalog.catalogVersion), observedAt: CATALOG_VERIFIED_AT,
});

export const agentFidelityLeaderboard = {
	schemaVersion: '1.0.0', benchmarkId: agentFidelityBenchmark.benchmarkId, benchmarkVersion: agentFidelityBenchmark.benchmarkVersion,
	status: 'awaiting_reproducible_submissions', generatedAt: CATALOG_VERIFIED_AT,
	entries: [],
	policy: {
		minimumScenarioCoverage: 1,
		requiredEvidence: ['complete response NDJSON', 'model identifier', 'integration identifier and version', 'execution date', 'evaluator version'],
		noSelfReportedScores: true,
	},
};
