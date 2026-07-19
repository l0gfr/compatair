import { describe, expect, it } from 'vitest';
import { tools } from '../data/catalog';
import { guideMetierIds } from './editorial-taxonomy';
import { getTradeScenarioPreset, tradeScenarioCalculatorHref, tradeScenarioPresets, type TradeScenarioPreset } from './trade-scenario-prefill';

describe('trade scenario prefill', () => {
	it('publishes three actionable presets for every profession', () => {
		const presets = Object.values(tradeScenarioPresets);
		expect(presets).toHaveLength(guideMetierIds.length * 3);
		for (const metierId of guideMetierIds) expect(presets.filter((preset) => preset.metierId === metierId)).toHaveLength(3);
	});

	it('uses known tools and complete inputs for their demand model', () => {
		for (const preset of Object.values(tradeScenarioPresets) as TradeScenarioPreset[]) {
			const tool = tools.find((candidate) => candidate.id === preset.toolId);
			expect(tool, preset.id).toBeDefined();
			expect(preset.sessionMinutes).toBeGreaterThanOrEqual(1);
			expect(preset.hoseLengthMeters).toBeGreaterThanOrEqual(0);
			expect(preset.hoseDiameterMm).toBeGreaterThanOrEqual(1);
			expect(preset.assumptions.length).toBeGreaterThanOrEqual(2);
			if (tool?.demandModel === 'fixed-flow') expect(preset.dutyFactor).toBeDefined();
			if (tool?.demandModel === 'per-action') expect(preset.actionsPerMinute).toBeGreaterThan(0);
			if (tool?.demandModel === 'variable-volume') {
				expect(preset.inflation?.volumeLiters).toBeGreaterThan(0);
				expect(preset.inflation?.targetPressureBar).toBeGreaterThan(preset.inflation?.initialPressureBar ?? Number.POSITIVE_INFINITY);
				expect(preset.inflation?.durationSeconds).toBeGreaterThan(0);
			}
		}
	});

	it('resolves only canonical identifiers and builds fragment-only URLs', () => {
		const preset = getTradeScenarioPreset('btp-clouage-mobile');
		expect(preset?.toolId).toBe('einhell-tc-pn-50');
		expect(getTradeScenarioPreset('unknown')).toBeUndefined();
		expect(tradeScenarioCalculatorHref('btp-clouage-mobile')).toBe('/calculateur/#scenario=btp-clouage-mobile');
	});
});
