import { describe, expect, it } from 'vitest';
import { compressorInputSchema, sizeConfiguration } from './sizing';
import { burstScenarioSchema } from './burst-scenario';
import { createPassportEnvelope, decodePassportEnvelope, encodePassportEnvelope, reportFromPassportEnvelope } from './passport';

const tool = { id: 'synthetic-range-tool', brand: 'Synthetic', model: 'Range fixture', label: 'Synthetic range fixture', evidence: [], fieldSources: {} };
const demands = [{ model: 'fixed-flow' as const, id: tool.id, flowLpm: 100, pressureBar: 7 }];

describe('industrial FAD throughout sizing and passport publication', () => {
	it.each([20_001, 56_830, 100_000])('accepts %i L/min without inventing tank reserve', (availableFadLpm) => {
		const result = sizeConfiguration({ demands, compressor: { maxPressureBar: 13, availableFadLpm, dutyCycle: 1 } });
		expect(result.verdict).toBe('continuous');
		expect(result.usableTankAirLiters).toBeUndefined();
		expect(result.estimatedWorkMinutes).toBeUndefined();
		expect(result.burstScenario).toBeUndefined();
	});

	it.each([0, -1, 100_001, Number.NaN, Number.POSITIVE_INFINITY])('rejects invalid or out-of-range FAD %s', (availableFadLpm) => {
		expect(compressorInputSchema.safeParse({ maxPressureBar: 13, availableFadLpm }).success).toBe(false);
		expect(burstScenarioSchema.shape.constantFadLpm.safeParse(availableFadLpm).success).toBe(false);
	});

	it('round-trips an industrial capacity and its computed burst through a signed passport', async () => {
		const envelope = await createPassportEnvelope({
			demands: [{ ...demands[0], flowLpm: 10_000, quantity: 10, dutyFactor: .3 }],
			selectedCompressor: 'custom',
			custom: { maxPressureBar: 13, availableFadLpm: 56_830, dutyCycle: 1, tankLiters: 5_000, cutInPressureBar: 8, cutOutPressureBar: 10 },
		}, [], [tool], 'synthetic-catalog-range', '2026-10-04T12:00:00.000Z');
		expect(envelope.inputSnapshot.availableFadLpm).toBe(56_830);
		expect(envelope.resultSnapshot.burstScenario?.constantFadLpm).toBe(56_830);
		expect(envelope.resultSnapshot.estimatedWorkMinutes).toBeGreaterThan(0);
		const decoded = decodePassportEnvelope(encodePassportEnvelope(envelope));
		expect(decoded).toBeDefined();
		const report = await reportFromPassportEnvelope(decoded!);
		expect(report.availableFadLpm).toBe(56_830);
		expect(report.result).toEqual(envelope.resultSnapshot);
	});
});
