import { z } from 'zod';

export const sizingInputSchema = z.object({
	toolFlowLpm: z.number().positive().max(10_000),
	dutyFactor: z.number().min(0).max(1),
	safetyMargin: z.number().min(0).max(1).default(0.25),
});

export type SizingInput = z.input<typeof sizingInputSchema>;

export type SizingResult = {
	peakFlowLpm: number;
	averageFlowLpm: number;
	recommendedFadLpm: number;
	calculationVersion: '0.1.0';
};

export function sizeAirDemand(input: SizingInput): SizingResult {
	const value = sizingInputSchema.parse(input);
	return {
		peakFlowLpm: value.toolFlowLpm,
		averageFlowLpm: value.toolFlowLpm * value.dutyFactor,
		recommendedFadLpm: value.toolFlowLpm * (1 + value.safetyMargin),
		calculationVersion: '0.1.0',
	};
}
