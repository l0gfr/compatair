import type { Compressor, ToolProfile } from './catalog';
import { CALCULATION_VERSION } from './sizing';

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

export function interpolateFad(compressor: Compressor, pressureBar: number): number | undefined {
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
	const warnings: string[] = [];
	if (tool.demandModel !== 'fixed-flow') {
		const warning = tool.demandModel === 'per-action'
			? `La source publie ${tool.airPerActionLiters} litre par ${tool.actionLabel}. Un rythme d’actions par minute est nécessaire pour calculer un débit.`
			: tool.demandExplanation;
		return { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data', warnings: [warning], calculationVersion: CALCULATION_VERSION };
	}
	const peakDemand = tool.airflowLpm.typical;
	const averageDemandLpm = peakDemand;
	const requiredFadLpm = peakDemand * (1 + safetyMargin);

	if (compressor.maxPressureBar < tool.workingPressureBar.typical) {
		return { verdict: 'incompatible', confidence: 'high', limitingFactor: 'pressure', requiredFadLpm, averageDemandLpm, warnings: ['Pression maximale inférieure à la pression de travail de l’outil.'], calculationVersion: CALCULATION_VERSION };
	}

	const documentedFad = interpolateFad(compressor, tool.workingPressureBar.typical);
	if (documentedFad === undefined || ['C', 'D'].includes(compressor.confidence)) {
		return { verdict: 'insufficient_data', confidence: 'low', limitingFactor: 'data', requiredFadLpm, averageDemandLpm, warnings: ['Débit restitué non documenté à la pression de travail. Le débit aspiré n’est pas utilisé comme substitut.'], calculationVersion: CALCULATION_VERSION };
	}

	const availableFadLpm = documentedFad;
	const marginPercent = ((availableFadLpm - peakDemand) / peakDemand) * 100;

	if (availableFadLpm >= peakDemand) {
		if (availableFadLpm < requiredFadLpm) warnings.push('Le débit nominal est couvert, mais la marge recommandée de 25 % n’est pas atteinte.');
		return { verdict: 'continuous', confidence: compressor.confidence === 'A' && tool.confidence === 'A' ? 'high' : 'medium', requiredFadLpm, averageDemandLpm, availableFadLpm, marginPercent, warnings, calculationVersion: CALCULATION_VERSION };
	}

	return { verdict: 'incompatible', confidence: compressor.confidence === 'A' && tool.confidence === 'A' ? 'high' : 'medium', limitingFactor: 'flow', requiredFadLpm, averageDemandLpm, availableFadLpm, marginPercent, warnings: [...warnings, 'Le débit restitué documenté ne couvre pas la consommation nominale publiée de l’outil. Une autonomie intermittente ne peut pas être calculée sans profil d’usage et pression de réenclenchement documentés.'], calculationVersion: CALCULATION_VERSION };
}
