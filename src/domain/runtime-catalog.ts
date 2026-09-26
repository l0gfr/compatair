import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';

export const RUNTIME_CATALOG_SCHEMA_VERSION = '1.0.0' as const;

const runtimeEvidenceSchema = z.object({
	id: z.string().min(1).max(160),
	sourceUrl: z.url().max(4_096).refine((value) => {
		try { return new URL(value).protocol === 'https:'; } catch { return false; }
	}, 'URL HTTPS obligatoire'),
	sourceLabel: z.string().min(1).max(500),
	retrievedAt: z.iso.date(),
	confidence: z.enum(['A', 'B', 'C', 'D']),
});

const runtimeFieldSourcesSchema = z.record(z.string(), z.array(z.string().min(1).max(160)).max(20));

const runtimeCompressorSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]{1,160}$/),
	slug: z.string().regex(/^[a-z0-9-]+$/),
	brand: z.string().min(1).max(160),
	model: z.string().min(1).max(240),
	maxPressureBar: z.number().positive().max(50),
	fadCurve: z.array(z.object({ pressureBar: z.number().nonnegative().max(50), litersPerMinute: z.number().positive().max(20_000) })),
	tankLiters: z.number().nonnegative().max(20_000),
	dutyCycle: z.number().positive().max(1).optional(),
	voltage: z.string().min(1).max(160).optional(),
	phase: z.enum(['single-phase', 'three-phase']).optional(),
	powerKw: z.number().positive().max(10_000).optional(),
	noiseDb: z.number().positive().max(300).optional(),
	mobility: z.enum(['portable', 'mobile', 'fixed']).optional(),
	confidence: z.enum(['A', 'B', 'C', 'D']),
	evidence: z.array(runtimeEvidenceSchema).min(1),
	fieldSources: runtimeFieldSourcesSchema.default({}),
});

const runtimeToolBaseSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]{1,160}$/),
	label: z.string().min(1).max(240),
	brand: z.string().min(1).max(160),
	model: z.string().min(1).max(240),
	connectorSize: z.string().max(160).optional(),
	filtrationRequirement: z.string().max(500).optional(),
	lubricationRequirement: z.string().max(500).optional(),
	recommendedHose: z.object({ innerDiameterMm: z.number().positive().max(100).optional(), maximumLengthMeters: z.number().positive().max(500).optional() }).optional(),
	confidence: z.enum(['A', 'B', 'C', 'D']),
	evidence: z.array(runtimeEvidenceSchema).min(1),
	fieldSources: runtimeFieldSourcesSchema.default({}),
});

const workingPressureSchema = z.object({
	min: z.number().positive().max(50).optional(),
	typical: z.number().positive().max(50).optional(),
	max: z.number().positive().max(50),
});

const runtimeToolSchema = runtimeToolBaseSchema.and(z.discriminatedUnion('demandModel', [
	z.object({
		demandModel: z.literal('fixed-flow'),
		workingPressureBar: workingPressureSchema.required({ min: true, typical: true }),
		airflowLpm: z.object({ min: z.number().positive().max(20_000), typical: z.number().positive().max(20_000), max: z.number().positive().max(20_000) }),
	}),
	z.object({
		demandModel: z.literal('per-action'),
		workingPressureBar: workingPressureSchema.required({ min: true, typical: true }),
		airPerActionLiters: z.number().positive().max(1_000),
		actionLabel: z.string().min(1).max(160),
	}),
	z.object({
		demandModel: z.literal('variable-volume'),
		workingPressureBar: workingPressureSchema,
		demandExplanation: z.string().min(1).max(2_000),
	}),
]));

export const runtimeCatalogSchema = z.object({
	schemaVersion: z.literal(RUNTIME_CATALOG_SCHEMA_VERSION),
	catalogVersion: z.string().regex(/^[a-f0-9]{64}$/),
	catalogVerifiedAt: z.iso.date(),
	compressors: z.array(runtimeCompressorSchema).max(1_000),
	tools: z.array(runtimeToolSchema).max(2_000),
});

export type RuntimeCatalog = z.infer<typeof runtimeCatalogSchema>;
export type RuntimeCompressor = RuntimeCatalog['compressors'][number];
export type RuntimeToolProfile = RuntimeCatalog['tools'][number];

function projectEvidence(evidence: Compressor['evidence'][number]) {
	return {
		id: evidence.id,
		sourceUrl: evidence.sourceUrl,
		sourceLabel: evidence.sourceLabel,
		retrievedAt: evidence.retrievedAt,
		confidence: evidence.confidence,
	};
}

function projectFieldSources(fieldSources: Record<string, string[]>, fields: string[]) {
	return Object.fromEntries(fields.flatMap((field) => fieldSources[field]?.length ? [[field, fieldSources[field]]] : []));
}

const compressorRuntimeFields = ['fadCurve', 'maxPressureBar', 'voltage', 'phase', 'powerKw', 'noiseDb', 'mobility'];

function compressorRuntimeEvidence(item: Compressor) {
	const ids = new Set(Object.values(projectFieldSources(item.fieldSources, [...compressorRuntimeFields, 'tankLiters', 'dutyCycle'])).flat());
	// Les preuves de champs absents de ce payload restent dans le catalogue complet.
	// Les anciennes fiches sans attribution par champ conservent leurs sources.
	return (ids.size ? item.evidence.filter((evidence) => ids.has(evidence.id)) : item.evidence).map(projectEvidence);
}

export function createRuntimeCatalog(compressors: Compressor[], tools: ToolProfile[], catalogVerifiedAt: string, catalogVersion: string): RuntimeCatalog {
	return runtimeCatalogSchema.parse({
		schemaVersion: RUNTIME_CATALOG_SCHEMA_VERSION,
		catalogVersion,
		catalogVerifiedAt,
		compressors: compressors.map((item) => ({
			id: item.id,
			slug: item.slug,
			brand: item.brand,
			model: item.model,
			maxPressureBar: item.maxPressureBar,
			fadCurve: item.fadCurve,
			tankLiters: item.tankLiters,
			dutyCycle: item.dutyCycle,
			voltage: item.voltage,
			phase: item.phase,
			powerKw: item.powerKw,
			noiseDb: item.noiseDb,
			mobility: item.mobility,
			confidence: item.confidence,
			evidence: compressorRuntimeEvidence(item),
			fieldSources: projectFieldSources(item.fieldSources, compressorRuntimeFields),
		})),
		tools: tools.map((item) => ({
			id: item.id,
			label: item.label,
			brand: item.brand,
			model: item.model,
			connectorSize: item.connectorSize,
			filtrationRequirement: item.filtrationRequirement,
			lubricationRequirement: item.lubricationRequirement,
			recommendedHose: item.recommendedHose,
			confidence: item.confidence,
			evidence: item.evidence.map(projectEvidence),
			fieldSources: projectFieldSources(item.fieldSources, ['connectorSize', 'filtrationRequirement', 'lubricationRequirement', 'recommendedHose']),
			demandModel: item.demandModel,
			workingPressureBar: item.workingPressureBar,
			...(item.demandModel === 'fixed-flow' ? { airflowLpm: item.airflowLpm } : {}),
			...(item.demandModel === 'per-action' ? { airPerActionLiters: item.airPerActionLiters, actionLabel: item.actionLabel } : {}),
			...(item.demandModel === 'variable-volume' ? { demandExplanation: item.demandExplanation } : {}),
		})),
	});
}

export async function loadRuntimeCatalog(): Promise<RuntimeCatalog> {
	const response = await fetch('/data/runtime-catalog.json', { headers: { Accept: 'application/json' } });
	if (!response.ok) throw new Error('Le catalogue d’exécution CompatAir est indisponible.');
	return runtimeCatalogSchema.parse(await response.json());
}
