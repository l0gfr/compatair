import { z } from 'zod';
import type { Compressor, ToolProfile } from './catalog';

export type CompatibilityVerdict = 'continuous' | 'intermittent' | 'incompatible' | 'insufficient_data';

export type CompatibilityResult = {
	verdict: CompatibilityVerdict;
	confidence: 'high' | 'medium' | 'low';
	limitingFactor?: 'flow' | 'pressure' | 'tank' | 'duty_cycle' | 'data';
	requiredFadLpm: number;
	averageDemandLpm: number;
	availableFadLpm?: number;
	estimatedWorkSeconds?: number;
	marginPercent?: number;
	warnings: string[];
	calculationVersion: '0.2.0';
};

const inputSchema = z.object({
	hoseLengthM: z.number().min(0).max(100).default(10),
	hoseInnerDiameterMm: z.number().min(4).max(25).default(9),
	safetyMargin: z.number().min(.1).max(.5).default(.25),
});

export function interpolateFad(compressor: Compressor, pressureBar: number): number | undefined {
	const curve = [...compressor.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (curve.length === 0) return undefined;
	if (curve.length === 1) {
		return pressureBar <= curve[0].pressureBar ? curve[0].litersPerMinute : undefined;
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

function hoseLossFactor(lengthM: number, diameterMm: number): number {
	if (lengthM <= 10 && diameterMm >= 9) return 1;
	const lengthPenalty = Math.max(0, lengthM - 10) * .006;
	const diameterPenalty = Math.max(0, 9 - diameterMm) * .04;
	return Math.max(.7, 1 - lengthPenalty - diameterPenalty);
}

export function evaluateCompatibility(
	compressor: Compressor,
	tool: ToolProfile,
	input: { hoseLengthM?: number; hoseInnerDiameterMm?: number; safetyMargin?: number } = {},
): CompatibilityResult {
	const options = inputSchema.parse(input);
	const warnings: string[] = [];
	const peakDemand = tool.airflowLpm.typical;
	const averageDemandLpm = peakDemand * tool.dutyFactor;
	const requiredFadLpm = peakDemand * (1 + options.safetyMargin);

	if (compressor.maxPressureBar < tool.workingPressureBar.typical) {
		return { verdict: 'incompatible', confidence: 'high', limitingFactor: 'pressure', requiredFadLpm, averageDemandLpm, warnings: ['Pression maximale inférieure à la pression de travail de l’outil.'], calculationVersion: '0.2.0' };
	}

	const documentedFad = interpolateFad(compressor, tool.workingPressureBar.typical);
	if (documentedFad === undefined || ['C', 'D'].includes(compressor.confidence)) {
		return { verdict: 'insufficient_data', confidence: 'low', limitingFactor: 'data', requiredFadLpm, averageDemandLpm, warnings: ['Débit restitué non documenté à la pression de travail. Le débit aspiré n’est pas utilisé comme substitut.'], calculationVersion: '0.2.0' };
	}

	const hoseFactor = hoseLossFactor(options.hoseLengthM, options.hoseInnerDiameterMm);
	const availableFadLpm = documentedFad * hoseFactor;
	if (hoseFactor < 1) warnings.push('Débit disponible corrigé pour un flexible long ou de faible diamètre.');
	const dutyCapacity = compressor.dutyCycle ? availableFadLpm * compressor.dutyCycle : availableFadLpm;
	const marginPercent = ((availableFadLpm - peakDemand) / peakDemand) * 100;

	if (availableFadLpm >= peakDemand && dutyCapacity >= averageDemandLpm) {
		if (availableFadLpm < requiredFadLpm) warnings.push('Le débit nominal est couvert, mais la marge recommandée de 25 % n’est pas atteinte.');
		return { verdict: 'continuous', confidence: compressor.confidence === 'A' && tool.confidence === 'A' ? 'high' : 'medium', requiredFadLpm, averageDemandLpm, availableFadLpm, marginPercent, warnings, calculationVersion: '0.2.0' };
	}

	if (availableFadLpm >= averageDemandLpm && compressor.tankLiters > 0) {
		const deficit = Math.max(1, peakDemand - availableFadLpm);
		const usablePressureRangeBar = Math.max(1, compressor.maxPressureBar - tool.workingPressureBar.typical);
		const estimatedWorkSeconds = (compressor.tankLiters * usablePressureRangeBar / deficit) * 60;
		if (compressor.dutyCycle && dutyCapacity < averageDemandLpm) warnings.push('Le cycle maximal du compresseur limite la durée d’utilisation.');
		return { verdict: 'intermittent', confidence: 'medium', limitingFactor: dutyCapacity < averageDemandLpm ? 'duty_cycle' : 'tank', requiredFadLpm, averageDemandLpm, availableFadLpm, estimatedWorkSeconds, marginPercent, warnings, calculationVersion: '0.2.0' };
	}

	return { verdict: 'incompatible', confidence: 'high', limitingFactor: 'flow', requiredFadLpm, averageDemandLpm, availableFadLpm, marginPercent, warnings: [...warnings, 'Le débit disponible ne couvre pas le besoin moyen de l’outil.'], calculationVersion: '0.2.0' };
}
