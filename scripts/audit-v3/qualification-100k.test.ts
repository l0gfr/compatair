import { describe, expect, it } from 'vitest';
import { distribution, fixturePlan, fixtureProducts, quantile } from './qualification-100k.mjs';

describe('bounded empirical qualification corpus', () => {
	const catalog = {
		compressors: [{ id: 'a', confidence: 'A', fadCurve: [], maxPressureBar: 8 }, { id: 'b', confidence: 'B', dutyCycle: .5, fadCurve: [{ pressureBar: 7, litersPerMinute: 80 }], maxPressureBar: 10 }],
		tools: [{ id: 'c', confidence: 'A', demandModel: 'per-action' }, { id: 'd', confidence: 'C', demandModel: 'fixed-flow', airflowBasis: 'average' }],
	};
	it('retains every profile and missing value, with proportional kind quotas', () => {
		const plan = fixturePlan(catalog, 12);
		expect(plan).toEqual({ original: 4, target: 12, compressors: 6, tools: 6 });
		const products = [...fixtureProducts(catalog, 'compressors', 6)];
		expect(new Set(products.map(p => p.id)).size).toBe(6);
		expect(products.filter(p => p.dutyCycle === undefined)).toHaveLength(3);
		expect(products.filter(p => p.fadCurve.length === 0)).toHaveLength(3);
		expect(Object.values(distribution(catalog, plan))).toEqual(Array(4).fill({ source: 1, fixture: 3 }));
		expect(catalog.compressors[0]).not.toHaveProperty('dutyCycle');
	});
	it('refuses a smaller corpus that would erase rare profiles or an unbounded target', () => {
		expect(() => fixturePlan(catalog, 3)).toThrow();
		expect(() => fixturePlan(catalog, 100001)).toThrow();
		expect(() => fixturePlan(catalog, 4.5)).toThrow();
	});
	it('uses nearest-rank quantiles and keeps unavailable measurements null', () => {
		expect(quantile([], .99)).toBeNull();
		expect(quantile(Array.from({ length: 100 }, (_, i) => i + 1), .95)).toBe(95);
		expect(quantile(Array.from({ length: 100 }, (_, i) => i + 1), .99)).toBe(99);
	});
});
