import { createHash } from 'node:crypto';
import type { Compressor, ToolProfile } from './catalog';
import { buildNormalizedCatalog } from './catalog-normalization';
import { sourceRoleForEvidence } from './catalog-normalization';
import { createCatalogQualityReport, createCatalogScope } from './data-governance';
import { evaluateCompatibility, type CompatibilityVerdict } from './compatibility';
import type { FadResolutionBasis } from './compatibility';
import { CALCULATION_VERSION } from './sizing';
import { VerdictCalculationCache, productFingerprint, type CalculationRow, type VerdictCacheOptions } from './verdict-cache';

declare const __COMPATAIR_VERDICT_CACHE__: VerdictCacheOptions | undefined;

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
export type PairCalculation = Omit<VerdictSnapshotPair, 'id' | 'compressorId' | 'toolId'>;

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

// The source catalog is immutable during a build; all pages reuse this snapshot.
let cached: { input: VerdictSnapshotInput; snapshot: VerdictSnapshot } | undefined;
const cacheReports = new WeakMap<VerdictSnapshot, ReturnType<VerdictCalculationCache['finish']> & { durationMs: number }>();
export function verdictCacheReport(snapshot: VerdictSnapshot) { return cacheReports.get(snapshot); }

// Store one integer per cell; materialize product identities only when accessed.
// Array methods and serialization preserve the historical tool-major order.
function matrixPairs(compressorIds: string[], toolIds: string[], rows: CalculationRow[]): VerdictSnapshotPair[] {
	const length = compressorIds.length * toolIds.length;
	const at = (index: number) => {
		const row = Math.floor(index / compressorIds.length), column = index % compressorIds.length;
		return new SharedVerdictPair(compressorIds[column], toolIds[row], rows[row].values[rows[row].indexes[column]]);
	};
	const numericIndex = (key: PropertyKey) => typeof key === 'string' && /^(0|[1-9]\d*)$/.test(key) && Number(key) < length ? Number(key) : undefined;
	return new Proxy<VerdictSnapshotPair[]>([], {
		get(array, key, receiver) {
			if (key === 'length') return length;
			const index = numericIndex(key);
			return index === undefined ? Reflect.get(array, key, receiver) : at(index);
		},
		has: (array, key) => numericIndex(key) !== undefined || Reflect.has(array, key),
		set() { throw new Error('verdict_snapshot_immutable'); },
		deleteProperty() { throw new Error('verdict_snapshot_immutable'); },
	});
}

export function createVerdictSnapshot(input: VerdictSnapshotInput, cacheOptions?: VerdictCacheOptions | false): VerdictSnapshot {
	if (cacheOptions === undefined && cached && cached.input.compressors === input.compressors && cached.input.tools === input.tools
		&& cached.input.catalogVersion === input.catalogVersion && cached.input.verifiedAt === input.verifiedAt) return cached.snapshot;
	const startedAt = performance.now();
	const options = cacheOptions ?? (typeof __COMPATAIR_VERDICT_CACHE__ === 'undefined' ? undefined : __COMPATAIR_VERDICT_CACHE__);
	const compressorHashes = input.compressors.map(productFingerprint);
	const fixedTools = input.tools.filter((tool) => tool.demandModel === 'fixed-flow');
	const toolHashes = fixedTools.map(productFingerprint);
	const disk = options ? new VerdictCalculationCache(options, compressorHashes) : undefined;
	const calculations = new Map<string, PairCalculation>();
	const summary: Record<CompatibilityVerdict, number> = { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 };
	const rows = fixedTools.map((tool, toolIndex) => {
		const previous = disk?.row(toolHashes[toolIndex]);
		let unchanged = previous !== undefined && previous.indexes.length === input.compressors.length;
		const row: CalculationRow = { values: [], indexes: new Uint32Array(input.compressors.length) };
		const rowValues = new Map<string, number>();
		input.compressors.forEach((compressor, column) => {
			const previousColumn = disk?.previousIndex(compressorHashes[column]);
			let calculation = previous && previousColumn !== undefined ? previous.values[previous.indexes[previousColumn]] : undefined;
			unchanged &&= previousColumn === column;
			if (calculation) { if (disk) disk.stats.reused++; }
			else {
				if (disk) disk.stats.calculated++;
				const result = evaluateCompatibility(compressor, tool);
				calculation = {
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
			}
			summary[calculation.verdict]++;
			const key = JSON.stringify(calculation);
			let index = rowValues.get(key);
			if (index === undefined) {
				let shared = calculations.get(key);
				if (!shared) {
					shared = calculation;
					if (calculations.size >= 10_000) calculations.clear();
					calculations.set(key, shared);
				}
				index = row.values.length;
				row.values.push(shared); rowValues.set(key, index);
			}
			row.indexes[column] = index;
		});
		disk?.store(toolHashes[toolIndex], row, unchanged);
		return row;
	});
	const pairs = matrixPairs(input.compressors.map(item => item.id), fixedTools.map(item => item.id), rows);
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
	const { pairs: _pairs, ...metadata } = data;
	const outputKey = version({ metadata, compressorHashes, toolHashes });
	let verdictVersion = disk?.version(outputKey);
	if (!verdictVersion) {
		const digest = createHash('sha256');
		for (const chunk of verdictJsonChunks(data)) digest.update(chunk);
		verdictVersion = digest.digest('hex');
	}
	const snapshot = { verdictVersion, ...data };
	if (disk) {
		const report = { ...disk.finish({ key: outputKey, digest: verdictVersion }), durationMs: Math.round(performance.now() - startedAt) };
		cacheReports.set(snapshot, report);
		if (cacheOptions === undefined) console.info(`[verdict-cache] ${JSON.stringify(report)}`);
	}
	if (cacheOptions === undefined) cached = { input, snapshot };
	return snapshot;
}
