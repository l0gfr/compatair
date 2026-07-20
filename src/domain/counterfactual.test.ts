import { describe, expect, it } from 'vitest';
import { createCounterfactualRecommendation, shouldEvaluateCounterfactual, type CounterfactualMachine } from './counterfactual';

const machine = (id: string, points: Array<[number, number]>, maxPressureBar = 10): CounterfactualMachine => ({
	id, label: id, maxPressureBar, fadCurve: points.map(([pressureBar, litersPerMinute]) => ({ pressureBar, litersPerMinute })),
});

describe('counterfactual recommendation', () => {
	it('is only evaluated after a compressor has been selected', () => {
		expect(shouldEvaluateCounterfactual(undefined)).toBe(false);
		expect(shouldEvaluateCounterfactual('')).toBe(false);
		expect(shouldEvaluateCounterfactual('einhell-tc-ac-240-50-10-of')).toBe(true);
	});

	it('proves that switching simultaneous tools to successive use is sufficient', () => {
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'a', flowLpm: 60, pressureBar: 6 }, { id: 'b', flowLpm: 60, pressureBar: 6 }], mode: 'simultaneous' },
			selectedMachine: machine('selected', [[6, 100]]), machines: [],
		});
		expect(report.recommendation).toMatchObject({ kind: 'simultaneity', beforeValue: 'simultaneous', afterValue: 'successive', result: { verdict: 'continuous' } });
	});

	it('finds the smallest measured leak reduction that changes the verdict', () => {
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 90, pressureBar: 6 }], measuredLeakLpm: 20 },
			selectedMachine: machine('selected', [[6, 100]]), machines: [],
		});
		expect(report.recommendation).toMatchObject({ kind: 'leak', beforeValue: 20, afterValue: 10, unit: 'L/min', result: { verdict: 'continuous' } });
	});

	it('uses a measured pressure drop without inventing a hose curve', () => {
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 90, pressureBar: 6 }], measuredPressureDropBar: 1 },
			selectedMachine: machine('selected', [[6, 100], [7, 80]]), machines: [],
		});
		expect(report.recommendation).toMatchObject({ kind: 'flexible', beforeValue: 1, afterValue: 0.5, unit: 'bar', result: { verdict: 'continuous' } });
	});

	it('never recommends raising a pressure setting beyond the machine rating', () => {
		const possible = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 80, pressureBar: 6.3 }], supplyPressureBar: 6 },
			selectedMachine: machine('selected', [[6.3, 100]], 8), machines: [],
		});
		expect(possible.recommendation).toMatchObject({ kind: 'pressure', afterValue: 6.3, result: { verdict: 'continuous' } });
		const impossible = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 80, pressureBar: 6.3 }], supplyPressureBar: 6 },
			selectedMachine: machine('selected', [[6, 100]], 6), machines: [],
		});
		expect(impossible.recommendation).toBeUndefined();
	});

	it('reduces only one explicit per-action cadence', () => {
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ model: 'per-action', id: 'riveter', litersPerAction: 1, actionsPerMinute: 120, pressureBar: 6 }] },
			selectedMachine: machine('selected', [[6, 100]]), machines: [],
		});
		expect(report.recommendation).toMatchObject({ kind: 'cadence', demandId: 'riveter', afterValue: 100, unit: 'actions/min', result: { verdict: 'continuous' } });
	});

	it('selects the closest documented machine when no smaller operational change is proven', () => {
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 90, pressureBar: 6 }] },
			selectedMachine: machine('small', [[6, 50]]),
			machines: [machine('small', [[6, 50]]), machine('closest', [[6, 95]], 7), machine('oversized', [[6, 300]], 10)],
		});
		expect(report.recommendation).toMatchObject({ kind: 'machine', machineId: 'closest', result: { verdict: 'continuous' } });
	});

	it('does not recommend a machine whose critical data has low documentary confidence', () => {
		const lowConfidence = { ...machine('uncertain', [[6, 100]]), confidence: 'C' as const };
		const report = createCounterfactualRecommendation({
			configuration: { demands: [{ id: 'tool', flowLpm: 90, pressureBar: 6 }] },
			selectedMachine: machine('small', [[6, 50]]), machines: [lowConfidence],
		});
		expect(report.recommendation).toBeUndefined();
	});
});
