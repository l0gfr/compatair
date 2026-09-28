import { describe, expect, it } from 'vitest';
import { auditCoverage, documented, marginalCompletion } from './documentary-coverage.mjs';

describe('documentary intersections and distinct marginal gains', () => {
	it('requires field linkage, retains absent cycles and rejects an aspirated-flow substitute', () => {
		const p = { dutyCycle: undefined, fadCurve: [], intakeLpm: 200, evidence: [{ id: 'e', sourceUrl: 'https://example.test/', retrievedAt: '2026-09-28' }], fieldSources: { dutyCycle: ['e'], fadCurve: ['e'] } };
		expect(documented(p, 'dutyCycle')).toBe(false);
		expect(documented(p, 'fadCurve')).toBe(false);
		expect(documented({ ...p, dutyCycle: 1 }, 'dutyCycle')).toBe(true);
		expect(documented({ ...p, dutyCycle: 1, fieldSources: { dutyCycle: ['missing'] } }, 'dutyCycle')).toBe(false);
	});
	it('counts a joint gap once, only after all of its fields are addressed', () => {
		expect(marginalCompletion({ missing_fad: 4, 'missing_cycle+missing_fad': 7, missing_cycle: 3 }, ['missing_fad', 'missing_cycle'])).toEqual([
			{ field: 'missing_fad', newlyDocumentablePairs: 4, cumulativeDocumentablePairs: 4 },
			{ field: 'missing_cycle', newlyDocumentablePairs: 10, cumulativeDocumentablePairs: 14 },
		]);
	});
	it('deduplicates overlapping intentions and measures only real before/after verdict changes', () => {
		const evidence = [{ id: 'e', sourceUrl: 'https://example.test/', retrievedAt: '2026-09-28' }];
		const c = { id: 'c', slug: 'c', confidence: 'A', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }], fieldSources: { maxPressureBar: ['e'], fadCurve: ['e'], dutyCycle: ['e'] }, evidence };
		const tool = { id: 't', slug: 't', confidence: 'A', demandModel: 'fixed-flow', airflowLpm: { typical: 100 }, workingPressureBar: { typical: 6 }, fieldSources: { workingPressureBar: ['e'] }, evidence };
		const before = { compressors: [c], tools: [tool] }, after = { ...before, compressors: [{ ...c, dutyCycle: 1 }] };
		const registry = { pages: {}, intentions: ['q001', 'q002'].map(id => ({ id, query: id, association: { routes: ['/compresseurs/c/'] } })) };
		const result = auditCoverage(before, registry, after);
		expect(result.pressureUsablePairCube['101']).toBe(1);
		expect(result.intentions.map((q: { marginalUnknownPairs: number }) => q.marginalUnknownPairs)).toEqual([1, 0]);
		expect(result.measuredGain).toMatchObject({ gainedConclusivePairs: 1, lostConclusivePairs: 0, net: 1 });
		expect(c).not.toHaveProperty('dutyCycle');
		expect(() => auditCoverage({ ...before, compressors: [c, c] }, registry)).toThrow(/Duplicate/);
		expect(() => auditCoverage(before, { ...registry, intentions: [registry.intentions[0], registry.intentions[0]] })).toThrow(/Duplicate/);
	});
});
