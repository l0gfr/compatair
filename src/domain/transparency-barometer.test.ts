import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors } from '../data/catalog';
import { createTransparencyBarometer, transparencyCriteria } from './transparency-barometer';

describe('manufacturer documentation transparency barometer', () => {
	const barometer = createTransparencyBarometer(compressors, CATALOG_VERIFIED_AT);

	it('separates manufacturer transparency from CompatAir coverage', () => {
		expect(barometer.criteria).toHaveLength(6);
		expect(barometer.brands).toHaveLength(new Set(compressors.map((item) => item.brand)).size);
		for (const row of barometer.brands) {
			expect(Object.keys(row.criteria)).toEqual(transparencyCriteria.map((criterion) => criterion.id));
			expect(row.score).toBeGreaterThanOrEqual(0);
			expect(row.score).toBeLessThanOrEqual(100);
			expect(row.coverageScore).toBeGreaterThanOrEqual(0);
			expect(row.references).toHaveLength(row.sampleSize);
			expect(row.observedCompletenessRange.low).toBe(Math.min(row.criteria.multiPressureFad, row.criteria.dutyCycle, row.criteria.officialSource, row.criteria.acousticValue));
			expect(row.observedCompletenessRange.high).toBe(Math.max(row.criteria.multiPressureFad, row.criteria.dutyCycle, row.criteria.officialSource, row.criteria.acousticValue));
		}
	});

	it('only assigns an official rank to samples of at least ten references', () => {
		for (const row of barometer.brands) if (row.rank !== null) expect(row.sampleSize).toBeGreaterThanOrEqual(10);
		expect(barometer.brands.filter((row) => row.rank !== null).map((row) => row.rank)).toEqual(barometer.brands.filter((row) => row.rank !== null).map((_, index) => index + 1));
		expect(barometer.rankingPublished).toBe(false);
		expect(barometer.brands.reduce((total, row) => total + row.sampleSize, 0)).toBe(compressors.length);
		expect(barometer.barometerVersion).toMatch(/^[a-f0-9]{64}$/);
		expect(barometer.schemaVersion).toBe('3.0.0');
		expect(barometer.limitations.join(' ')).toContain('ne constituent pas un échantillon aléatoire');
	});
});
