import type { Compressor, ToolProfile } from './catalog';
import { CALCULATION_VERSION, sizeConfiguration } from './sizing';

export type CompatibilityVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';
export type FadResolutionBasis = 'exact' | 'interpolated' | 'higher-pressure-bound';

export type FadResolution = {
	litersPerMinute: number;
	basis: FadResolutionBasis;
	referencePressureBar?: number;
};

export type CompatibilityResult = {
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm?: number;
	averageDemandLpm?: number;
	availableFadLpm?: number;
	availableFadBasis?: FadResolutionBasis;
	availableFadReferencePressureBar?: number;
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

export function resolveAvailableFad(compressor: Pick<Compressor, 'fadCurve'>, pressureBar: number): FadResolution | undefined {
	const curve = [...compressor.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (curve.length === 0) return undefined;
	const exact = curve.find((point) => point.pressureBar === pressureBar);
	if (exact) return { litersPerMinute: exact.litersPerMinute, basis: 'exact', referencePressureBar: exact.pressureBar };
	const interpolated = interpolateFad(compressor, pressureBar);
	if (interpolated !== undefined) return { litersPerMinute: interpolated, basis: 'interpolated' };
	const lowestHigherPressurePoint = curve.find((point) => point.pressureBar > pressureBar);
	if (!lowestHigherPressurePoint) return undefined;
	return {
		litersPerMinute: lowestHigherPressurePoint.litersPerMinute,
		basis: 'higher-pressure-bound',
		referencePressureBar: lowestHigherPressurePoint.pressureBar,
	};
}

export function compatibilityFadLabel(result: Pick<CompatibilityResult, 'availableFadLpm' | 'availableFadBasis' | 'availableFadReferencePressureBar'>, requestedPressureBar: number): string {
	if (result.availableFadLpm === undefined) return `Débit non vérifiable à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	const flow = Math.round(result.availableFadLpm).toLocaleString('fr-FR');
	if (result.availableFadBasis === 'higher-pressure-bound') return `${flow} L/min mesurés à ${result.availableFadReferencePressureBar?.toLocaleString('fr-FR')} bar, borne conservatrice pour ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	if (result.availableFadBasis === 'interpolated') return `${flow} L/min interpolés à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
	return `${flow} L/min documentés à ${requestedPressureBar.toLocaleString('fr-FR')} bar`;
}

export function evaluateCompatibility(
	compressor: Compressor,
	tool: ToolProfile,
	input: { safetyMargin?: number } = {},
): CompatibilityResult {
	const safetyMargin = input.safetyMargin ?? .25;
	if (tool.demandModel !== 'fixed-flow') {
		const warning = tool.demandModel === 'per-action'
			? `La source de l’outil ${tool.label} publie ${tool.airPerActionLiters.toLocaleString('fr-FR')} litre d’air par ${tool.actionLabel}. Une cadence réelle de cet outil est nécessaire pour calculer un débit par minute.`
			: tool.demandExplanation;
		return { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data', warnings: [warning], calculationVersion: CALCULATION_VERSION };
	}
	const fadResolution = resolveAvailableFad(compressor, tool.workingPressureBar.typical);
	const usableResolution = ['C', 'D'].includes(compressor.confidence) ? undefined : fadResolution;
	const usableFad = usableResolution?.litersPerMinute;
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
		...(usableResolution ? { availableFadBasis: usableResolution.basis } : {}),
		...(usableResolution?.referencePressureBar !== undefined ? { availableFadReferencePressureBar: usableResolution.referencePressureBar } : {}),
		warnings: [
			...sizing.warnings,
			...(usableResolution?.basis === 'higher-pressure-bound'
				? [`Borne conservatrice : ${usableResolution.litersPerMinute.toLocaleString('fr-FR')} L/min mesurés à ${usableResolution.referencePressureBar?.toLocaleString('fr-FR')} bar sont retenus pour le besoin à ${tool.workingPressureBar.typical.toLocaleString('fr-FR')} bar ; aucun point de courbe n’est inventé.`]
				: []),
		],
		calculationVersion: sizing.calculationVersion,
	};
}
