import { createAgentFidelityBenchmark } from '../domain/agent-fidelity-benchmark';
import { createCatalogSnapshot, createVerdictSnapshot } from '../domain/snapshots';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { toolTaxonomy } from './taxonomy';

const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
const verdicts = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });

export const agentFidelityBenchmark = createAgentFidelityBenchmark({
	compressors, tools, pairs: verdicts.pairs, catalogVersion: catalog.catalogVersion,
	verdictVersion: verdicts.verdictVersion, observedAt: CATALOG_VERIFIED_AT,
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
