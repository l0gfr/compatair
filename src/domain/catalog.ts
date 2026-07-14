import { z } from 'zod';

export const confidenceSchema = z.enum(['A', 'B', 'C', 'D']);

export const evidenceSchema = z.object({
	id: z.string().min(1),
	sourceUrl: z.url(),
	sourceLabel: z.string().min(1),
	sourceType: z.enum(['manufacturer', 'manual', 'merchant', 'measured']),
	retrievedAt: z.iso.date(),
	confidence: confidenceSchema,
	notes: z.string().optional(),
});

const productImageSchema = z.object({
	src: z.string().startsWith('/images/products/'),
	alt: z.string().min(1),
	sourceUrl: z.url(),
	sourceLabel: z.string().min(1),
});

const editorialSchema = z.object({
	overview: z.string().min(1),
	verifiedFacts: z.array(z.string().min(1)).min(2),
	limitations: z.array(z.string().min(1)).min(1),
});

export const compressorSchema = z.object({
	id: z.string().min(1),
	slug: z.string().regex(/^[a-z0-9-]+$/),
	brand: z.string().min(1),
	model: z.string().min(1),
	mpn: z.string().optional(),
	ean: z.string().regex(/^\d{8,14}$/).optional(),
	gtin: z.string().regex(/^\d{8,14}$/).optional(),
	identifierAliases: z.array(z.object({
		type: z.enum(['mpn', 'ean', 'gtin', 'legacy_mpn']),
		value: z.string().min(1),
		evidenceIds: z.array(z.string().min(1)).min(1),
	})).default([]),
	variant: z.object({
		familyId: z.string().regex(/^[a-z0-9-]+$/),
		label: z.string().min(1),
		distinguishingAttributes: z.record(z.string(), z.string()).default({}),
	}).optional(),
	tankLiters: z.number().nonnegative(),
	maxPressureBar: z.number().positive(),
	fadCurve: z.array(z.object({ pressureBar: z.number().nonnegative(), litersPerMinute: z.number().positive() })),
	intakeFlowLpm: z.number().positive().optional(),
	dutyCycle: z.number().positive().max(1).optional(),
	oilType: z.enum(['oil', 'oil-free']),
	noiseDb: z.number().positive().optional(),
	powerKw: z.number().positive().optional(),
	weightKg: z.number().positive().optional(),
	mobility: z.enum(['portable', 'mobile', 'fixed']).optional(),
	voltage: z.string().min(1).optional(),
	phase: z.enum(['single-phase', 'three-phase']).optional(),
	confidence: confidenceSchema,
	status: z.enum(['active', 'discontinued', 'unknown']),
	image: productImageSchema,
	editorial: editorialSchema,
	evidence: z.array(evidenceSchema).min(1),
	fieldSources: z.record(z.string(), z.array(z.string())).default({}),
	notes: z.array(z.string()).default([]),
});

const toolBaseSchema = z.object({
	id: z.string().min(1),
	slug: z.string().regex(/^[a-z0-9-]+$/),
	category: z.string().min(1),
	label: z.string().min(1),
	brand: z.string().min(1),
	model: z.string().min(1),
	mpn: z.string().optional(),
	ean: z.string().regex(/^\d{8,14}$/).optional(),
	identifierAliases: z.array(z.object({
		type: z.enum(['mpn', 'ean', 'gtin', 'legacy_mpn']),
		value: z.string().min(1),
		evidenceIds: z.array(z.string().min(1)).min(1),
	})).default([]),
	variant: z.object({
		familyId: z.string().regex(/^[a-z0-9-]+$/),
		label: z.string().min(1),
		distinguishingAttributes: z.record(z.string(), z.string()).default({}),
	}).optional(),
	connectorSize: z.string().optional(),
	usagePattern: z.enum(['burst', 'intermittent', 'continuous']).optional(),
	dutyFactor: z.number().min(0.01).max(1).optional(),
	filtrationRequirement: z.string().min(1).optional(),
	lubricationRequirement: z.string().min(1).optional(),
	recommendedHose: z.object({ innerDiameterMm: z.number().positive().optional(), maximumLengthMeters: z.number().positive().optional() }).optional(),
	minimumCompressorPowerKw: z.number().positive().optional(),
	confidence: confidenceSchema,
	image: productImageSchema,
	editorial: editorialSchema,
	evidence: z.array(evidenceSchema).min(1),
	fieldSources: z.record(z.string(), z.array(z.string())).default({}),
	notes: z.array(z.string()).default([]),
});

const fixedFlowDemandSchema = z.object({
	demandModel: z.literal('fixed-flow'),
	workingPressureBar: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
	airflowLpm: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
});

const perActionDemandSchema = z.object({
	demandModel: z.literal('per-action'),
	workingPressureBar: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
	airPerActionLiters: z.number().positive(),
	actionLabel: z.string().min(1),
});

const variableVolumeDemandSchema = z.object({
	demandModel: z.literal('variable-volume'),
	workingPressureBar: z.object({ min: z.number().positive().optional(), typical: z.number().positive().optional(), max: z.number().positive() }),
	demandExplanation: z.string().min(1),
});

export const toolProfileSchema = toolBaseSchema.and(z.discriminatedUnion('demandModel', [
	fixedFlowDemandSchema,
	perActionDemandSchema,
	variableVolumeDemandSchema,
]));

export type Compressor = z.infer<typeof compressorSchema>;
export type ToolProfile = z.infer<typeof toolProfileSchema>;
