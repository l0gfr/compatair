import { z } from 'zod';

// Snapshot validation belongs to the Passport consumer. The sizing core only
// imports this type, avoiding schema construction on other sizing surfaces.
export const burstScenarioSchema = z.object({
	model: z.literal('isothermal-first-burst'), control: z.literal('start-stop'), initialState: z.literal('stopped'),
	referencePressureBar: z.literal(1), initialPressureBar: z.number().positive().max(50),
	cutInPressureBar: z.number().nonnegative().max(50), usefulPressureBar: z.number().positive().max(50),
	startDelaySeconds: z.literal(0), constantFadLpm: z.number().positive().max(100_000), demandLpm: z.number().positive().max(4_010_000),
	stoppedMinutes: z.number().nonnegative(), loadedMinutes: z.number().nonnegative(),
});

export type BurstScenario = z.infer<typeof burstScenarioSchema>;
