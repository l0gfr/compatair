import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors } from '../data/catalog';
import { createTransparencyBarometer, transparencyCriteria } from './transparency-barometer';

describe('manufacturer documentation transparency barometer', () => {
	const barometer = createTransparencyBarometer(compressors, CATALOG_VERIFIED_AT);

	it('scores every compressor brand from the same six criteria', () => {
		expect(barometer.criteria).toHaveLength(6);
		expect(barometer.brands).toHaveLength(new Set(compressors.map((item) => item.brand)).size);
		for (const row of barometer.brands) {
			expect(Object.keys(row.criteria)).toEqual(transparencyCriteria.map((criterion) => criterion.id));
			expect(row.score).toBeGreaterThanOrEqual(0);
			expect(row.score).toBeLessThanOrEqual(100);
		}
	});

	it('ranks deterministically and accounts for the full sample', () => {
		expect(barometer.brands.map((row) => row.rank)).toEqual(barometer.brands.map((_, index) => index + 1));
		expect(barometer.brands.reduce((total, row) => total + row.sampleSize, 0)).toBe(compressors.length);
		expect(barometer.barometerVersion).toMatch(/^[a-f0-9]{64}$/);
	});
});
