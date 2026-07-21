import { z } from 'zod';

export const confidenceSchema = z.enum(['A', 'B', 'C', 'D']);
export const sourceRoleSchema = z.enum(['primary', 'independent_corroboration', 'secondary']);
function isHttpsUrl(value: string) { try { return new URL(value).protocol === 'https:'; } catch { return false; } }
export const httpsUrlSchema = z.url().max(4_096).refine(isHttpsUrl, 'URL HTTPS obligatoire');
const productIdSchema = z.string().regex(/^[a-z0-9-]{1,160}$/);

export const evidenceSchema = z.object({
	id: z.string().min(1),
	sourceUrl: httpsUrlSchema,
	sourceLabel: z.string().min(1),
	sourceType: z.enum(['manufacturer', 'manual', 'merchant', 'measured']),
	sourceRole: sourceRoleSchema.optional(),
	retrievedAt: z.iso.date(),
	confidence: confidenceSchema,
	notes: z.string().optional(),
});

const productImageSchema = z.object({
	src: z.string().regex(/^\/images\/products\/[a-z0-9][a-z0-9._-]*\.(?:avif|gif|jpe?g|png|webp)$/),
	alt: z.string().min(1),
	sourceUrl: httpsUrlSchema,
	sourceLabel: z.string().min(1),
});

const editorialSchema = z.object({
	overview: z.string().min(1),
	verifiedFacts: z.array(z.string().min(1)).min(2),
	limitations: z.array(z.string().min(1)).min(1),
});

const additionalSpecificationSchema = z.object({
	label: z.string().min(1),
	value: z.string().min(1),
	evidenceIds: z.array(z.string().min(1)).min(1),
});

const distributorSkuSchema = z.object({
	distributorId: z.string().regex(/^[a-z0-9-]{1,120}$/),
	sku: z.string().min(1).max(160),
	evidenceIds: z.array(z.string().min(1)).min(1),
});

export const compressorSchema = z.object({
	id: productIdSchema,
	slug: z.string().regex(/^[a-z0-9-]+$/),
	brand: z.string().min(1),
	model: z.string().min(1),
	mpn: z.string().optional(),
	ean: z.string().regex(/^\d{8,14}$/).optional(),
	gtin: z.string().regex(/^\d{8,14}$/).optional(),
	distributorSkus: z.array(distributorSkuSchema).default([]),
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
	specifications: z.array(additionalSpecificationSchema).default([]),
	evidence: z.array(evidenceSchema).min(1),
	fieldSources: z.record(z.string(), z.array(z.string())).default({}),
	notes: z.array(z.string()).default([]),
}).superRefine((compressor, context) => {
	const pressures = new Set<number>();
	for (const [index, point] of compressor.fadCurve.entries()) {
		if (point.pressureBar > compressor.maxPressureBar) context.addIssue({ code: 'custom', path: ['fadCurve', index, 'pressureBar'], message: 'La pression FAD ne peut pas dépasser la pression maximale.' });
		if (pressures.has(point.pressureBar)) context.addIssue({ code: 'custom', path: ['fadCurve', index, 'pressureBar'], message: 'Chaque pression FAD doit être unique.' });
		pressures.add(point.pressureBar);
	}
});

const toolBaseSchema = z.object({
	id: productIdSchema,
	slug: z.string().regex(/^[a-z0-9-]+$/),
	categoryId: z.enum([
		'agrafeuse-cloueuse', 'burineur', 'cisaille', 'cle-a-chocs', 'cle-a-cliquet', 'derouilleur-a-aiguilles',
		'gonflage', 'lime-bande', 'meuleuse', 'perceuse', 'pistolet-cartouche',
		'pistolet-peinture-hvlp', 'pistolet-peinture-lvlp', 'polisseuse', 'ponceuse-bande',
		'ponceuse-orbitale', 'riveteuse', 'sableuse', 'scie', 'soufflette', 'tronconneuse',
		'grignoteuse', 'visseuse',
	]),
	category: z.string().min(1),
	label: z.string().min(1),
	brand: z.string().min(1),
	model: z.string().min(1),
	mpn: z.string().optional(),
	ean: z.string().regex(/^\d{8,14}$/).optional(),
	gtin: z.string().regex(/^\d{8,14}$/).optional(),
	distributorSkus: z.array(distributorSkuSchema).default([]),
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
	specifications: z.array(additionalSpecificationSchema).default([]),
	evidence: z.array(evidenceSchema).min(1),
	fieldSources: z.record(z.string(), z.array(z.string())).default({}),
	notes: z.array(z.string()).default([]),
});

const fixedFlowDemandSchema = z.object({
	demandModel: z.literal('fixed-flow'),
	workingPressureBar: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
	airflowLpm: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
}).superRefine((demand, context) => {
	if (demand.workingPressureBar.min > demand.workingPressureBar.typical || demand.workingPressureBar.typical > demand.workingPressureBar.max) context.addIssue({ code: 'custom', path: ['workingPressureBar'], message: 'La pression doit respecter min ≤ nominale ≤ max.' });
	if (demand.airflowLpm.min > demand.airflowLpm.typical || demand.airflowLpm.typical > demand.airflowLpm.max) context.addIssue({ code: 'custom', path: ['airflowLpm'], message: 'Le débit doit respecter min ≤ nominal ≤ max.' });
	for (const [key, value] of Object.entries(demand.airflowLpm)) {
		if (Number(value.toFixed(3)) !== value) context.addIssue({ code: 'custom', path: ['airflowLpm', key], message: 'Le débit publié ne peut pas contenir plus de trois décimales.' });
	}
});

const perActionDemandSchema = z.object({
	demandModel: z.literal('per-action'),
	workingPressureBar: z.object({ min: z.number().positive(), typical: z.number().positive(), max: z.number().positive() }),
	airPerActionLiters: z.number().positive(),
	actionLabel: z.string().min(1),
}).superRefine((demand, context) => {
	if (demand.workingPressureBar.min > demand.workingPressureBar.typical || demand.workingPressureBar.typical > demand.workingPressureBar.max) context.addIssue({ code: 'custom', path: ['workingPressureBar'], message: 'La pression doit respecter min ≤ nominale ≤ max.' });
});

const variableVolumeDemandSchema = z.object({
	demandModel: z.literal('variable-volume'),
	workingPressureBar: z.object({ min: z.number().positive().optional(), typical: z.number().positive().optional(), max: z.number().positive() }),
	demandExplanation: z.string().min(1),
}).superRefine((demand, context) => {
	const { min, typical, max } = demand.workingPressureBar;
	if ((min !== undefined && min > max) || (typical !== undefined && typical > max) || (min !== undefined && typical !== undefined && min > typical)) context.addIssue({ code: 'custom', path: ['workingPressureBar'], message: 'La pression doit respecter min ≤ nominale ≤ max.' });
});

export const toolProfileSchema = toolBaseSchema.and(z.discriminatedUnion('demandModel', [
	fixedFlowDemandSchema,
	perActionDemandSchema,
	variableVolumeDemandSchema,
]));

export type Compressor = z.infer<typeof compressorSchema>;
export type ToolProfile = z.infer<typeof toolProfileSchema>;
