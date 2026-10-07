import { z } from 'zod';
import type { BurstScenario } from './burst-scenario';

import { calculateSizing, compressorPressureIssues, CALCULATION_VERSION, STANDARD_ATMOSPHERE_BAR } from '../../server/air-sizing.mjs';
export { CALCULATION_VERSION, STANDARD_ATMOSPHERE_BAR, compressorPressureIssues };

const fixedFlowDemandSchema = z.object({
	model: z.literal('fixed-flow').default('fixed-flow'),
	id: z.string().min(1),
	flowLpm: z.number().positive().max(10_000),
	pressureBar: z.number().positive().max(50),
	quantity: z.number().int().min(1).max(20).default(1),
	dutyFactor: z.number().min(0.01).max(1).default(1),
});

const perActionDemandSchema = z.object({
	model: z.literal('per-action'),
	id: z.string().min(1),
	litersPerAction: z.number().positive().max(1_000),
	actionsPerMinute: z.number().positive().max(10_000),
	pressureBar: z.number().positive().max(50),
	quantity: z.number().int().min(1).max(20).default(1),
});

const inflationDemandSchema = z.object({
	model: z.literal('inflation'),
	id: z.string().min(1),
	volumeLiters: z.number().positive().max(100_000),
	initialPressureBar: z.number().nonnegative().max(50),
	targetPressureBar: z.number().positive().max(50),
	targetMinutes: z.number().positive().max(1_440),
	quantity: z.number().int().min(1).max(20).default(1),
}).refine((value) => value.targetPressureBar > value.initialPressureBar, {
	message: 'La pression cible doit être supérieure à la pression initiale.',
	path: ['targetPressureBar'],
});

const demandSchema = z.union([fixedFlowDemandSchema, perActionDemandSchema, inflationDemandSchema]);

export const compressorInputSchema = z.object({
	maxPressureBar: z.number().positive().max(50),
	maxPressureBasis: z.enum(['explicit-maximum-working-pressure', 'selected-working-pressure-ceiling']).optional(),
	// Match the documented industrial FAD range already accepted by the catalogue.
	availableFadLpm: z.number().positive().max(100_000).optional(),
	availableFadBasis: z.enum(['exact', 'interpolated', 'higher-pressure-bound']).optional(),
	tankLiters: z.number().nonnegative().max(20_000).optional(),
	cutInPressureBar: z.number().nonnegative().max(50).optional(),
	cutOutPressureBar: z.number().positive().max(50).optional(),
	dutyCycle: z.number().min(0.01).max(1).optional(),
}).superRefine((value, context) => {
	for (const issue of compressorPressureIssues(value)) context.addIssue({ code: 'custom', message: issue.message, path: [issue.field] });
});

export const sizingInputSchema = z.object({
	demands: z.array(demandSchema).min(1).max(20),
	mode: z.enum(['simultaneous', 'successive']).default('successive'),
	safetyMargin: z.number().min(0).max(1).default(0.25),
	sessionMinutes: z.number().positive().max(1_440).default(30),
	hoseLengthMeters: z.number().nonnegative().max(500).optional(),
	hoseInnerDiameterMm: z.number().positive().max(100).optional(),
	measuredLeakLpm: z.number().nonnegative().max(10_000).optional(),
	measuredPressureDropBar: z.number().nonnegative().max(50).optional(),
	supplyPressureBar: z.number().positive().max(50).optional(),
	compressor: compressorInputSchema.optional(),
});

export type SizingInput = z.input<typeof sizingInputSchema>;
export type NormalizedSizingInput = z.output<typeof sizingInputSchema>;
export type SizingVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';
export type FlowBasis = 'documented-continuous' | 'derived-average';

export type SizingResult = {
	verdict: SizingVerdict;
	peakFlowLpm: number;
	averageFlowLpm: number;
	recommendedFadLpm: number;
	recommendedTankLiters?: number;
	requiredPressureBar: number;
	toolPressureBar?: number;
	measuredLeakLpm?: number;
	measuredPressureDropBar?: number;
	availablePressureBar?: number;
	usefulPressureBar?: number;
	usableTankAirLiters?: number;
	estimatedWorkMinutes?: number;
	estimatedRecoveryMinutes?: number;
	burstScenario?: BurstScenario;
	limitingFactor?: 'flow' | 'pressure' | 'duty_cycle' | 'data';
	confidence: 'high' | 'medium' | 'low';
	hypotheses: string[];
	warnings: string[];
	flowBasis: FlowBasis;
	calculationVersion: typeof CALCULATION_VERSION;
};

export function perActionAverageFlow(litersPerAction: number, actionsPerMinute: number, quantity = 1): number {
	return z.number().positive().max(1_000).parse(litersPerAction)
		* z.number().positive().max(10_000).parse(actionsPerMinute)
		* z.number().int().min(1).max(20).parse(quantity);
}

/**
 * Equivalent free-air volume under an ideal-gas, constant-temperature and fixed-volume model.
 * Input pressures are gauge pressures. Their difference is converted at one standard atmosphere.
 */
export function inflationFreeAirLiters(volumeLiters: number, initialGaugeBar: number, targetGaugeBar: number, quantity = 1): number {
	const value = z.object({
		volumeLiters: z.number().positive().max(100_000),
		initialPressureBar: z.number().nonnegative().max(50),
		targetPressureBar: z.number().positive().max(50),
		quantity: z.number().int().min(1).max(20),
	}).refine((item) => item.targetPressureBar > item.initialPressureBar).parse({
		volumeLiters, initialPressureBar: initialGaugeBar, targetPressureBar: targetGaugeBar, quantity,
	});
	return value.volumeLiters * value.quantity * (value.targetPressureBar - value.initialPressureBar) / STANDARD_ATMOSPHERE_BAR;
}

/**
 * Free-air reserve from receiver volume and two gauge pressures.
 * The calculation follows the ideal-gas pressure ratio at unchanged temperature.
 */
export function usableTankAir(tankLiters: number, cutInBar: number, cutOutBar: number): number {
	if (tankLiters < 0 || cutInBar < 0 || cutOutBar <= cutInBar) return 0;
	return tankLiters * (cutOutBar - cutInBar);
}

export function sizeConfiguration(input: SizingInput): SizingResult {
	return calculateSizing(sizingInputSchema.parse(input));
}

/** Backward-compatible single-demand helper used by existing integrations. */
export function sizeAirDemand(input: { toolFlowLpm: number; safetyMargin?: number }) {
	const safetyMargin = input.safetyMargin ?? 0.25;
	const value = z.object({ toolFlowLpm: z.number().positive().max(10_000), safetyMargin: z.number().min(0).max(1) }).parse({ ...input, safetyMargin });
	return {
		peakFlowLpm: value.toolFlowLpm,
		recommendedFadLpm: value.toolFlowLpm * (1 + value.safetyMargin),
		calculationVersion: CALCULATION_VERSION,
	};
}
