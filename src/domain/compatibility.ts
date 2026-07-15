import type { Compressor, ToolProfile } from './catalog';
import { CALCULATION_VERSION, sizeConfiguration } from './sizing';

export type CompatibilityVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';

export type CompatibilityResult = {
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm?: number;
	averageDemandLpm?: number;
	availableFadLpm?: number;
	marginPercent?: number;
	warnings: string[];
	calculationVersion: typeof CALCULATION_VERSION;
};

export function interpolateFad(compressor: Pick<Compressor, 'fadCurve'>, pressureBar: number): number | undefined {
	const curve = [...compressor.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (curve.length === 0) return undefined;
	if (curve.length === 1) {
		return pressureBar === curve[0].pressureBar ? curve[0].litersPerMinute : undefined;
	}
	if (pressureBar < curve[0].pressureBar || pressureBar > curve[curve.length - 1].pressureBar) return undefined;
	const exact = curve.find((point) => point.pressureBar === pressureBar);
	if (exact) return exact.litersPerMinute;
	const upperIndex = curve.findIndex((point) => point.pressureBar > pressureBar);
	const lower = curve[upperIndex - 1];
	const upper = curve[upperIndex];
	const ratio = (pressureBar - lower.pressureBar) / (upper.pressureBar - lower.pressureBar);
	return lower.litersPerMinute + ratio * (upper.litersPerMinute - lower.litersPerMinute);
}

export function evaluateCompatibility(
	compressor: Compressor,
	tool: ToolProfile,
	input: { safetyMargin?: number } = {},
): CompatibilityResult {
	const safetyMargin = input.safetyMargin ?? .25;
	if (tool.demandModel !== 'fixed-flow') {
		const warning = tool.demandModel === 'per-action'
			? `La source publie ${tool.airPerActionLiters} litre par ${tool.actionLabel}. Un rythme d’actions par minute est nécessaire pour calculer un débit.`
			: tool.demandExplanation;
		return { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data', warnings: [warning], calculationVersion: CALCULATION_VERSION };
	}
	const documentedFad = interpolateFad(compressor, tool.workingPressureBar.typical);
	const usableFad = ['C', 'D'].includes(compressor.confidence) ? undefined : documentedFad;
	const sizing = sizeConfiguration({
		demands: [{
			id: tool.id,
			flowLpm: tool.airflowLpm.typical,
			pressureBar: tool.workingPressureBar.typical,
			dutyFactor: 1,
		}],
		safetyMargin,
		compressor: {
			maxPressureBar: compressor.maxPressureBar,
			availableFadLpm: usableFad,
			tankLiters: compressor.tankLiters,
			dutyCycle: compressor.dutyCycle,
		},
	});
	const documentaryConfidence = compressor.confidence === 'A' && tool.confidence === 'A'
		? sizing.confidence
		: sizing.confidence === 'high' ? 'medium' : sizing.confidence;

	return {
		verdict: sizing.verdict,
		confidence: documentaryConfidence,
		limitingFactor: sizing.limitingFactor,
		requiredFadLpm: sizing.recommendedFadLpm,
		averageDemandLpm: sizing.averageFlowLpm,
		availableFadLpm: usableFad,
		marginPercent: usableFad === undefined ? undefined : ((usableFad - sizing.peakFlowLpm) / sizing.peakFlowLpm) * 100,
		warnings: sizing.warnings,
		calculationVersion: sizing.calculationVersion,
	};
}
