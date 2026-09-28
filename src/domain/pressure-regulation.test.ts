import { describe, expect, it } from 'vitest';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { sizeConfiguration, sizingInputSchema } from './sizing';
import { passportConfigurationSchema } from './passport';

const input = {
	demands: [{ id: 'synthetic-tool', flowLpm: 100, pressureBar: 6.3 }],
	compressor: { maxPressureBar: 10, availableFadLpm: 200, availableFadBasis: 'exact' as const, tankLiters: 50, dutyCycle: 1, cutInPressureBar: 6.5, cutOutPressureBar: 8 },
};

describe('declared compressor pressure regulation', () => {
	it.each([4, 6.29])('does not guarantee continuous operation when restart is %s bar', (cutInPressureBar) => {
		const result = sizeConfiguration({ ...input, compressor: { ...input.compressor, cutInPressureBar } });
		expect(result).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'pressure', confidence: 'low' });
		expect(result.warnings.join(' ')).toContain('réenclenchement');
		expect(result.estimatedWorkMinutes).toBeUndefined();
	});
	it.each([6.3, 6.5])('accepts a declared restart covering the need at %s bar', (cutInPressureBar) => {
		expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, cutInPressureBar } }).verdict).toBe('continuous');
	});
	it('includes measured pressure losses in the regulation requirement', () => {
		expect(sizeConfiguration({ ...input, measuredPressureDropBar: .3 })).toMatchObject({ verdict: 'insufficient_data', requiredPressureBar: 6.6 });
	});
	it.each(['cutInPressureBar', 'cutOutPressureBar'] as const)('requires the other threshold when %s is missing', (field) => {
		expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, [field]: undefined } }).verdict).toBe('insufficient_data');
	});
	it('does not invent regulation for catalog records without declared thresholds', () => {
		expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, cutInPressureBar: undefined, cutOutPressureBar: undefined } }).verdict).toBe('continuous');
	});
	it('preserves definitive pressure and exact-flow deficits', () => {
		expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, cutInPressureBar: 4, cutOutPressureBar: 5 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
		expect(sizeConfiguration({ ...input, compressor: { ...input.compressor, cutInPressureBar: 4, availableFadLpm: 60 } })).toMatchObject({ verdict: 'incompatible', limitingFactor: 'flow' });
	});
	it.each([
		{ cutInPressureBar: 9, cutOutPressureBar: 8 },
		{ cutInPressureBar: 8, cutOutPressureBar: 8 },
		{ cutInPressureBar: 6.5, cutOutPressureBar: 11 },
		{ cutInPressureBar: 11, cutOutPressureBar: undefined },
	])('rejects invalid thresholds consistently: %j', (thresholds) => {
		const compressor = { ...input.compressor, ...thresholds };
		expect(() => sizeConfiguration({ ...input, compressor })).toThrow();
		expect(passportConfigurationSchema.safeParse({ demands: input.demands, selectedCompressor: 'custom', custom: compressor }).success).toBe(false);
		const normalized = sizingInputSchema.parse(input);
		expect(() => calculateSizing({ ...normalized, compressor })).toThrow();
	});
});
