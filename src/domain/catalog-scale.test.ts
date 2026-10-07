import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { selectBenchmarkPairs } from './agent-fidelity-benchmark';
import type { VerdictSnapshotPair } from './snapshots';
import { validatePublishedDecision } from './proof-graph';
import { CALCULATION_VERSION } from './sizing';

describe('bounded catalog operations', () => {
	it.each([[131, 7, 200, 0], [130, 0, 0, 0], [1, 1, 1, 1]])('keeps the exact stable benchmark selection for class sizes %s', (...sizes) => {
		const classes = ['continuous', 'intermittent', 'incompatible', 'insufficient_data'] as const;
		const pairs = sizes.flatMap((size, group) => Array.from({ length: size }, (_, index): VerdictSnapshotPair => ({ id: `pair-${group}-${index}`, compressorId: 'c', toolId: `t-${index}`, verdict: classes[group], confidence: 'high', warnings: [] })));
		const sha = (value: string) => createHash('sha256').update(value).digest('hex');
		const sorted = classes.map(verdict => pairs.filter(pair => pair.verdict === verdict).sort((a, b) => sha(a.id).localeCompare(sha(b.id))));
		const expected = [];
		for (let row = 0; row < Math.max(...sizes); row++) for (const group of sorted) if (group[row] && expected.length < 100) expected.push(group[row]);
		expect(selectBenchmarkPairs(pairs)).toEqual(expected);
	});

	const expected = { catalogVersion: 'a'.repeat(64), compressorId: 'c', toolId: 't' };
	const decision = { catalogVersion: expected.catalogVersion, verdictVersion: 'b'.repeat(64), calculationVersion: CALCULATION_VERSION, input: { compressorId: 'c', toolId: 't' }, engine_evaluation: { compressorId: 'c', toolId: 't', verdict: 'insufficient_data', confidence: 'low', limitingFactor: 'data' } };
	it('accepts an explicitly unavailable flow without inventing a value', () => {
		expect(validatePublishedDecision(decision, expected).engine_evaluation).not.toHaveProperty('availableFadLpm');
	});
	it.each([
		{ catalogVersion: 'c'.repeat(64) }, { verdictVersion: 'unavailable' }, { calculationVersion: 'next' },
		{ input: { compressorId: 'other', toolId: 't' } },
		{ engine_evaluation: { ...decision.engine_evaluation, toolId: 'other' } },
		{ engine_evaluation: { ...decision.engine_evaluation, availableFadLpm: -1 } },
		{ engine_evaluation: null },
	])('rejects a stale, mismatched or invalid published decision: %s', patch => {
		expect(() => validatePublishedDecision({ ...decision, ...patch }, expected)).toThrow();
	});
});
