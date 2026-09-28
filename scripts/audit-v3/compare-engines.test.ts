import { describe, expect, it } from 'vitest';
import { comparePairs } from './compare-engines.mjs';

describe('offline exhaustive comparison', () => {
	it('counts the union of changed pairs once, but each changed dimension separately', () => {
		const catalog = { compressors: [{ id: 'c1' }, { id: 'c2' }], tools: [{ id: 't1', demandModel: 'fixed-flow' }, { id: 't2', demandModel: 'per-action' }] };
		const before = () => ({ verdict: 'continuous', confidence: 'high', warnings: [] });
		const after = (c: { id: string }) => c.id === 'c1' ? { verdict: 'insufficient_data', confidence: 'low', limitingFactor: 'pressure', warnings: ['limit'] } : before();
		const report = comparePairs(catalog, before, after);
		expect(report.denominator).toMatchObject({ pairs: 2, fixedFlowTools: 1, excludedParametricTools: 1 });
		expect(report.changedPairs).toBe(1);
		expect(report.differences).toEqual({ verdict: 1, confidence: 1, limitingFactor: 1, warnings: 1 });
		expect(report.resultDigests[0]).not.toBe(report.resultDigests[1]);
	});
	it('detects warning order changes and has stable digests for identical engines', () => {
		const catalog = { compressors: [{ id: 'c' }], tools: [{ id: 't', demandModel: 'fixed-flow' }] };
		const a = () => ({ verdict: 'continuous', warnings: ['a', 'b'] });
		const b = () => ({ verdict: 'continuous', warnings: ['b', 'a'] });
		expect(comparePairs(catalog, a, b).differences.warnings).toBe(1);
		const same = comparePairs(catalog, a, a);
		expect(same.resultDigests[0]).toBe(same.resultDigests[1]);
		expect(same.changedPairs).toBe(0);
		const absentVsNull = comparePairs(catalog, a, () => ({ ...a(), limitingFactor: null }));
		expect(absentVsNull.differences.limitingFactor).toBe(1);
		expect(absentVsNull.resultDigests[0]).not.toBe(absentVsNull.resultDigests[1]);
	});
});
