import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import { buildNormalizedCatalog } from './catalog-normalization';
import { sourceRoleForEvidence } from './catalog-normalization';
import { createCatalogQualityReport, createCatalogScope } from './data-governance';
import { evaluateCompatibility, type CompatibilityVerdict } from './compatibility';
import type { FadResolutionBasis } from './compatibility';
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
	const publishProduct = <T extends Compressor | ToolProfile>(product: T) => ({
		...product,
		evidence: product.evidence.map((evidence) => ({ ...evidence, sourceRole: sourceRoleForEvidence(evidence) })),
	});
	const data = {
		schemaVersion: '2.1.0',
		verifiedAt: input.verifiedAt,
		toolTaxonomy: input.toolTaxonomy,
		compressors: input.compressors.map(publishProduct),
		tools: input.tools.map(publishProduct),
		scope: createCatalogScope(input.compressors, input.tools),
		quality: createCatalogQualityReport(input.compressors, input.tools, input.verifiedAt),
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
	availableFadBasis?: FadResolutionBasis;
	availableFadReferencePressureBar?: number;
	marginPercent?: number;
	warnings: string[];
};

type VerdictSnapshotInput = {
	compressors: Compressor[];
	tools: ToolProfile[];
	catalogVersion: string;
	verifiedAt: string;
};
export type VerdictSnapshot = {
	verdictVersion: string;
	schemaVersion: string;
	verifiedAt: string;
	catalogVersion: string;
	calculationVersion: typeof CALCULATION_VERSION;
	scope: ReturnType<typeof createCatalogScope>;
	summary: Record<CompatibilityVerdict, number>;
	conclusive: { count: number; percentage: number };
	pairs: VerdictSnapshotPair[];
};
type PairCalculation = Omit<VerdictSnapshotPair, 'id' | 'compressorId' | 'toolId'>;

// Keep the full public record while sharing repeated calculations in memory.
// In particular, never retain a second copy of each compound pair identifier.
class SharedVerdictPair implements VerdictSnapshotPair {
	constructor(public compressorId: string, public toolId: string, private calculation: PairCalculation) {}
	get id() { return `${this.compressorId}--${this.toolId}`; }
	get verdict() { return this.calculation.verdict; }
	get confidence() { return this.calculation.confidence; }
	get limitingFactor() { return this.calculation.limitingFactor; }
	get requiredFadLpm() { return this.calculation.requiredFadLpm; }
	get availableFadLpm() { return this.calculation.availableFadLpm; }
	get availableFadBasis() { return this.calculation.availableFadBasis; }
	get availableFadReferencePressureBar() { return this.calculation.availableFadReferencePressureBar; }
	get marginPercent() { return this.calculation.marginPercent; }
	get warnings() { return this.calculation.warnings; }
	toJSON() { return { id: this.id, compressorId: this.compressorId, toolId: this.toolId, ...this.calculation }; }
}

// Identical field order and bytes to JSON.stringify, without its single-string limit.
export function* verdictJsonChunks(snapshot: Omit<VerdictSnapshot, 'verdictVersion'> | VerdictSnapshot): Generator<string> {
	const { pairs, ...metadata } = snapshot;
	yield `${JSON.stringify(metadata).slice(0, -1)},"pairs":[`;
	let chunk = '';
	for (let index = 0; index < pairs.length; index++) {
		chunk += `${index ? ',' : ''}${JSON.stringify(pairs[index])}`;
		if (chunk.length >= 64 * 1024) { yield chunk; chunk = ''; }
	}
	yield `${chunk}]}`;
}

// The source catalog is immutable during a build; all pages reuse this exact snapshot.
let cached: { input: VerdictSnapshotInput; snapshot: VerdictSnapshot } | undefined;
export function createVerdictSnapshot(input: VerdictSnapshotInput): VerdictSnapshot {
	if (cached && cached.input.compressors === input.compressors && cached.input.tools === input.tools
		&& cached.input.catalogVersion === input.catalogVersion && cached.input.verifiedAt === input.verifiedAt) return cached.snapshot;
	const calculations = new Map<string, PairCalculation>();
	const pairs: VerdictSnapshotPair[] = input.tools
		.filter((tool) => tool.demandModel === 'fixed-flow')
		.flatMap((tool) => input.compressors.map((compressor) => {
			const result = evaluateCompatibility(compressor, tool);
			const calculation: PairCalculation = {
				verdict: result.verdict,
				confidence: result.confidence,
				...(result.limitingFactor ? { limitingFactor: result.limitingFactor } : {}),
				...(result.requiredFadLpm !== undefined ? { requiredFadLpm: result.requiredFadLpm } : {}),
				...(result.availableFadLpm !== undefined ? { availableFadLpm: result.availableFadLpm } : {}),
				...(result.availableFadBasis ? { availableFadBasis: result.availableFadBasis } : {}),
				...(result.availableFadReferencePressureBar !== undefined ? { availableFadReferencePressureBar: result.availableFadReferencePressureBar } : {}),
				...(result.marginPercent !== undefined ? { marginPercent: result.marginPercent } : {}),
				warnings: result.warnings,
			};
			const key = JSON.stringify(calculation);
			let shared = calculations.get(key);
			if (!shared) {
				shared = calculation;
				if (calculations.size >= 10_000) calculations.clear();
				calculations.set(key, shared);
			}
			return new SharedVerdictPair(compressor.id, tool.id, shared);
		}));
	const summary = pairs.reduce<Record<CompatibilityVerdict, number>>((counts, pair) => {
		counts[pair.verdict] += 1;
		return counts;
	}, { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 });
	const data = {
		schemaVersion: '1.1.0',
		verifiedAt: input.verifiedAt,
		catalogVersion: input.catalogVersion,
		calculationVersion: CALCULATION_VERSION,
		scope: createCatalogScope(input.compressors, input.tools),
		summary,
		conclusive: {
			count: pairs.length - summary.insufficient_data,
			percentage: pairs.length ? Number(((pairs.length - summary.insufficient_data) / pairs.length * 100).toFixed(1)) : 0,
		},
		pairs,
	};
	const digest = createHash('sha256');
	for (const chunk of verdictJsonChunks(data)) digest.update(chunk);
	const snapshot = { verdictVersion: digest.digest('hex'), ...data };
	cached = { input, snapshot };
	return snapshot;
}
