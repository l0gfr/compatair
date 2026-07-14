import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import { buildNormalizedCatalog } from './catalog-normalization';
import { evaluateCompatibility, type CompatibilityVerdict } from './compatibility';
import { CALCULATION_VERSION } from './sizing';

function version(value: unknown) {
	return createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

export function createCatalogSnapshot(input: {
	compressors: Compressor[];
	tools: ToolProfile[];
	toolTaxonomy: unknown;
	verifiedAt: string;
}) {
	const data = {
		schemaVersion: '2.0.0',
		verifiedAt: input.verifiedAt,
		toolTaxonomy: input.toolTaxonomy,
		compressors: input.compressors,
		tools: input.tools,
		normalized: buildNormalizedCatalog(input.compressors, input.tools),
	};
	return { catalogVersion: version(data), ...data };
}

export type VerdictSnapshotPair = {
	id: string;
	compressorId: string;
	toolId: string;
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm?: number;
	availableFadLpm?: number;
	marginPercent?: number;
};

export function createVerdictSnapshot(input: {
	compressors: Compressor[];
	tools: ToolProfile[];
	catalogVersion: string;
	verifiedAt: string;
}) {
	const pairs: VerdictSnapshotPair[] = input.tools
		.filter((tool) => tool.demandModel === 'fixed-flow')
		.flatMap((tool) => input.compressors.map((compressor) => {
			const result = evaluateCompatibility(compressor, tool);
			return {
				id: `${compressor.id}--${tool.id}`,
				compressorId: compressor.id,
				toolId: tool.id,
				verdict: result.verdict,
				confidence: result.confidence,
				...(result.limitingFactor ? { limitingFactor: result.limitingFactor } : {}),
				...(result.requiredFadLpm !== undefined ? { requiredFadLpm: result.requiredFadLpm } : {}),
				...(result.availableFadLpm !== undefined ? { availableFadLpm: result.availableFadLpm } : {}),
				...(result.marginPercent !== undefined ? { marginPercent: result.marginPercent } : {}),
			};
		}));
	const summary = pairs.reduce<Record<CompatibilityVerdict, number>>((counts, pair) => {
		counts[pair.verdict] += 1;
		return counts;
	}, { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 });
	const data = {
		schemaVersion: '1.0.0',
		verifiedAt: input.verifiedAt,
		catalogVersion: input.catalogVersion,
		calculationVersion: CALCULATION_VERSION,
		summary,
		pairs,
	};
	return { verdictVersion: version(data), ...data };
}
