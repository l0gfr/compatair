import { describe, expect, it } from 'vitest';
import { createCounterfactualRecommendation, shouldEvaluateCounterfactual, type CounterfactualMachine } from './counterfactual';
import { sizeConfiguration, sizingInputSchema, type SizingInput } from './sizing';
import { passportConfigurationSchema } from './passport';
import v4 from '../../tests/fixtures/audit-v4/extensions.json';

const machine = (id: string, points: Array<[number, number]>, maxPressureBar = 10): CounterfactualMachine => ({
	id, label: id, maxPressureBar, dutyCycle: 1, fadCurve: points.map(([pressureBar, litersPerMinute]) => ({ pressureBar, litersPerMinute })),
});

describe('counterfactual recommendation', () => {
	it.each(v4.projections)('V4 $id: current retains every compressor constraint', fixture => {
		const configuration = sizingInputSchema.parse(fixture.input);
		const selectedMachine = { ...configuration.compressor!, id: 'custom', label: 'Synthetic', documentedFadPressureBar: 6.3 };
		const report = createCounterfactualRecommendation({ configuration, selectedMachine, machines: [] });
		expect(report.current).toEqual(sizeConfiguration(configuration));
		expect(report.current.verdict).toBe(fixture.expectedVerdict);
		const custom = passportConfigurationSchema.parse({ demands: configuration.demands, selectedCompressor: 'custom', custom: configuration.compressor }).custom;
		expect(custom.cutInPressureBar).toBe(selectedMachine.cutInPressureBar);
		expect(custom.cutOutPressureBar).toBe(selectedMachine.cutOutPressureBar);
	});
	it('V4 does not promise that pressure 5 → 6.3 fixes unchanged regulation 4 / 8', () => {
		const configuration = sizingInputSchema.parse(v4.projections.find(item => item.id === 'C03')!.input);
		const selectedMachine = { ...configuration.compressor!, id: 'custom', label: 'Synthetic', documentedFadPressureBar: 6.3 };
		const report = createCounterfactualRecommendation({ configuration: { ...configuration, supplyPressureBar: 5 }, selectedMachine, machines: [] });
		expect(report.current).toEqual(sizeConfiguration({ ...configuration, supplyPressureBar: 5 }));
		expect(report.status).toBe('no_verified_change');
		expect(report.recommendation).toBeUndefined();
		expect(sizeConfiguration({ ...configuration, supplyPressureBar: 6.3 })).toMatchObject({ verdict: 'insufficient_data', limitingFactor: 'pressure' });
	});
	it.each(['pressure', 'leak', 'simultaneity', 'cadence', 'flexible', 'machine'])('V4 replays the single %s change with all other constraints intact', kind => {
		const compressor = { maxPressureBar: 10, availableFadLpm: 100, dutyCycle: 1, tankLiters: 50, cutInPressureBar: 7, cutOutPressureBar: 8 };
		let configuration: SizingInput = { demands: [{ id: 'tool', flowLpm: 90, pressureBar: 6.3 }], compressor };
		if (kind === 'pressure') configuration.supplyPressureBar = 5;
		if (kind === 'leak') configuration.measuredLeakLpm = 20;
		if (kind === 'simultaneity') { configuration.mode = 'simultaneous'; configuration.demands = [{ id: 'a', flowLpm: 60, pressureBar: 6.3 }, { id: 'b', flowLpm: 60, pressureBar: 6.3 }]; }
		if (kind === 'cadence') configuration.demands = [{ model: 'per-action', id: 'tool', litersPerAction: 1, actionsPerMinute: 120, pressureBar: 6.3 }];
		if (kind === 'flexible') configuration.measuredPressureDropBar = 1;
		if (kind === 'machine') configuration.compressor = { ...compressor, availableFadLpm: 50 };
		const selectedMachine = { ...configuration.compressor!, id: 'custom', label: 'Synthetic', documentedFadPressureBar: 6.3,
			...(kind === 'flexible' ? { fadCurve: [{ pressureBar: 6.3, litersPerMinute: 100 }, { pressureBar: 7.3, litersPerMinute: 80 }] } : {}) };
		const replacement = { ...compressor, id: 'replacement', label: 'Replacement', documentedFadPressureBar: 6.3 };
		const report = createCounterfactualRecommendation({ configuration, selectedMachine, machines: kind === 'machine' ? [replacement, { ...replacement, id: 'bad-regulation', cutInPressureBar: 4 }] : [] });
		const candidate = report.recommendation!;
		expect(candidate.kind).toBe(kind);
		const replay = structuredClone(configuration);
		if (kind === 'machine') replay.compressor = compressor;
		else if (kind === 'cadence') replay.demands = [{ ...replay.demands[0], actionsPerMinute: Number(candidate.afterValue) } as SizingInput['demands'][number]];
		else Object.assign(replay, { [candidate.changedField]: candidate.afterValue });
		if (kind === 'flexible') replay.compressor = { ...compressor, availableFadLpm: 100 - 20 * Number(candidate.afterValue), availableFadBasis: 'interpolated' };
		expect(sizeConfiguration(replay)).toEqual(candidate.result);
		expect(replay.compressor).toMatchObject({ cutInPressureBar: 7, cutOutPressureBar: 8, dutyCycle: 1, tankLiters: 50, maxPressureBar: 10 });
	});
	it('V4 keeps partial regulation invalid and a higher-pressure FAD bound inconclusive', () => {
		const configuration = { demands: [{ id: 'tool', flowLpm: 100, pressureBar: 6.3 }] };
		const selectedMachine = { id: 'custom', label: 'Synthetic', maxPressureBar: 10, availableFadLpm: 90, availableFadBasis: 'higher-pressure-bound' as const, documentedFadPressureBar: 6.3, dutyCycle: 1 };
		expect(createCounterfactualRecommendation({ configuration, selectedMachine, machines: [] }).current).toEqual(sizeConfiguration({ ...configuration, compressor: selectedMachine }));
		expect(() => createCounterfactualRecommendation({ configuration, selectedMachine: { ...selectedMachine, cutInPressureBar: 9, cutOutPressureBar: 8 }, machines: [] })).toThrow();
	});
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
	it('V4 identifies the exact cadence row when the same tool occurs twice', () => {
		const configuration: SizingInput = { demands: [
			{ model: 'per-action', id: 'same-tool', litersPerAction: 1, actionsPerMinute: 20, pressureBar: 6.3 },
			{ model: 'per-action', id: 'same-tool', litersPerAction: 1, actionsPerMinute: 200, pressureBar: 6.3, quantity: 2 },
		] };
		const compressor = { maxPressureBar: 8, availableFadLpm: 100, dutyCycle: 1, cutInPressureBar: 7, cutOutPressureBar: 8 };
		const report = createCounterfactualRecommendation({ configuration, selectedMachine: { ...compressor, id: 'custom', label: 'Synthetic', documentedFadPressureBar: 6.3 }, machines: [] });
		const candidate = report.recommendation!;
		expect(candidate).toMatchObject({ kind: 'cadence', demandId: 'same-tool', demandIndex: 1, changedField: 'demands.1.actionsPerMinute' });
		const demands = configuration.demands.map((demand, index) => index === candidate.demandIndex ? { ...demand, actionsPerMinute: Number(candidate.afterValue) } : demand);
		expect(sizeConfiguration({ ...configuration, demands, compressor })).toEqual(candidate.result);
		expect(demands[0]).toEqual(configuration.demands[0]);
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
