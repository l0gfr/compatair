import { describe, expect, it } from 'vitest';
import type { PassportConfiguration } from './passport';
import { contextualFadLabel, contextualVerdictLabel, evaluateContextualCompressor, type ContextualComparisonCompressor } from './contextual-comparison';

const configuration: PassportConfiguration = {
	demands: [{ model: 'fixed-flow', id: 'tool', flowLpm: 200, pressureBar: 6, quantity: 1, dutyFactor: 1 }],
	mode: 'successive', safetyMargin: .25, sessionMinutes: 30,
	fittingStandard: 'unknown', filtration: 'unknown', usageProfile: 'mixed', selectedCompressor: '', custom: {},
};

function compressor(overrides: Partial<ContextualComparisonCompressor> = {}): ContextualComparisonCompressor {
	return {
		id: 'compressor', brand: 'Marque', model: 'Modèle', maxPressureBar: 10,
		fadCurve: [{ pressureBar: 6, litersPerMinute: 300 }], tankLiters: 50, confidence: 'A', ...overrides,
	};
}

describe('contextual compressor comparison', () => {
	it('compares every machine against the same need and requested reserve', () => {
		const evaluation = evaluateContextualCompressor(configuration, compressor());
		expect(evaluation.base.peakFlowLpm).toBe(200);
		expect(evaluation.base.recommendedFadLpm).toBe(250);
		expect(evaluation.result.verdict).toBe('continuous');
		expect(evaluation.nominalMarginLpm).toBe(100);
		expect(evaluation.nominalMarginPercent).toBe(50);
		expect(evaluation.reserveGapLpm).toBe(50);
		expect(evaluation.reserveCovered).toBe(true);
		expect(contextualVerdictLabel(evaluation.result)).toBe('Compatible en continu');
		expect(contextualFadLabel(evaluation)).toBe('300 L/min documentés à 6 bar');
		expect(evaluation.primaryReserve).toContain('cycle de service');
	});

	it('keeps a covered nominal need distinct from an uncovered safety reserve', () => {
		const evaluation = evaluateContextualCompressor(configuration, compressor({ fadCurve: [{ pressureBar: 6, litersPerMinute: 220 }] }));
		expect(evaluation.result.verdict).toBe('continuous');
		expect(evaluation.reserveCovered).toBe(false);
		expect(evaluation.reserveGapLpm).toBe(-30);
		expect(evaluation.primaryReserve).toContain('réserve de débit');
	});

	it('returns insufficient data instead of using intake flow when FAD is absent', () => {
		const evaluation = evaluateContextualCompressor(configuration, compressor({ fadCurve: [] }));
		expect(evaluation.result.verdict).toBe('insufficient_data');
		expect(evaluation.availableFad).toBeUndefined();
		expect(evaluation.nominalMarginPercent).toBeUndefined();
		expect(evaluation.primaryReserve).toContain('n’est pas vérifiable');
	});

	it('reports pressure and duty-cycle limits from the deterministic sizing engine', () => {
		const pressure = evaluateContextualCompressor(configuration, compressor({ maxPressureBar: 5 }));
		expect(pressure.result).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
		expect(pressure.primaryReserve).toContain('pression');

		const duty = evaluateContextualCompressor(configuration, compressor({ dutyCycle: .5 }));
		expect(duty.result).toMatchObject({ verdict: 'incompatible', limitingFactor: 'duty_cycle' });
		expect(duty.effectiveAverageCapacityLpm).toBe(150);
	});

	it('does not let an already selected compressor alter the shared comparison need', () => {
		const selected = { ...configuration, selectedCompressor: 'another-machine' };
		const evaluation = evaluateContextualCompressor(selected, compressor());
		expect(evaluation.base.verdict).toBe('insufficient_data');
		expect(evaluation.result.verdict).toBe('continuous');
	});
});
