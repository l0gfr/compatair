import type { PassportConfiguration } from './passport';
import { compatibilityFadLabel, resolveAvailableFad, type FadResolution } from './compatibility';
import { sizeConfiguration, type SizingInput, type SizingResult } from './sizing';

export type ContextualComparisonCompressor = {
	id: string;
	brand: string;
	model: string;
	maxPressureBar: number;
	fadCurve: Array<{ pressureBar: number; litersPerMinute: number }>;
	tankLiters: number;
	dutyCycle?: number;
	confidence: 'A' | 'B' | 'C' | 'D';
};

export type ContextualComparisonEvaluation = {
	base: SizingResult;
	result: SizingResult;
	availableFad?: FadResolution;
	nominalMarginLpm?: number;
	nominalMarginPercent?: number;
	reserveGapLpm?: number;
	reserveCovered?: boolean;
	effectiveAverageCapacityLpm?: number;
	primaryReserve: string;
};

function sizingInputFromConfiguration(configuration: PassportConfiguration): SizingInput {
	return {
		demands: configuration.demands,
		mode: configuration.mode,
		safetyMargin: configuration.safetyMargin,
		sessionMinutes: configuration.sessionMinutes,
		hoseLengthMeters: configuration.hoseLengthMeters,
		hoseInnerDiameterMm: configuration.hoseInnerDiameterMm,
		measuredLeakLpm: configuration.measuredLeakLpm,
		measuredPressureDropBar: configuration.measuredPressureDropBar,
		supplyPressureBar: configuration.supplyPressureBar,
	};
}

function primaryReserve(
	compressor: ContextualComparisonCompressor,
	result: SizingResult,
	availableFad: FadResolution | undefined,
	reserveGapLpm: number | undefined,
) {
	if (compressor.confidence === 'C') return 'La source est insuffisante pour soutenir seule un verdict positif.';
	if (compressor.confidence === 'D') return 'La donnée n’est pas confirmée par le fabricant.';
	if (!availableFad) return `Le débit restitué n’est pas vérifiable à ${result.requiredPressureBar.toLocaleString('fr-FR')} bar.`;
	if (result.limitingFactor === 'pressure') return 'La pression disponible est inférieure à la pression demandée.';
	if (result.limitingFactor === 'duty_cycle') return 'Le cycle de service publié limite la capacité moyenne disponible.';
	if (result.verdict === 'incompatible') return 'Le débit disponible ne couvre pas le besoin déclaré.';
	if (result.verdict === 'intermittent') return 'La pointe dépend de la réserve de cuve et des pauses réellement observées.';
	if (result.verdict === 'insufficient_data') return result.warnings.at(-1) ?? 'Les données disponibles ne permettent pas de conclure.';
	if (reserveGapLpm !== undefined && reserveGapLpm < 0) return 'Le besoin nominal est couvert, mais pas toute la réserve de débit demandée.';
	if (result.flowBasis === 'derived-average') return 'Le besoin est une moyenne calculée ; la pointe instantanée reste à contrôler au poste.';
	if (compressor.dutyCycle === undefined) return 'Le cycle de service n’est pas publié ; la tenue sur la durée doit être confirmée.';
	return 'Aucune réserve technique principale dans le scénario déclaré ; la mesure au poste reste nécessaire.';
}

export function evaluateContextualCompressor(
	configuration: PassportConfiguration,
	compressor: ContextualComparisonCompressor,
): ContextualComparisonEvaluation {
	const sizingInput = sizingInputFromConfiguration(configuration);
	const base = sizeConfiguration(sizingInput);
	const availableFad = resolveAvailableFad(compressor, base.requiredPressureBar);
	const result = sizeConfiguration({
		...sizingInput,
		compressor: {
			maxPressureBar: compressor.maxPressureBar,
			availableFadLpm: availableFad?.litersPerMinute,
			tankLiters: compressor.tankLiters,
			dutyCycle: compressor.dutyCycle,
		},
	});
	const nominalMarginLpm = availableFad ? availableFad.litersPerMinute - base.peakFlowLpm : undefined;
	const nominalMarginPercent = nominalMarginLpm === undefined ? undefined : nominalMarginLpm / base.peakFlowLpm * 100;
	const reserveGapLpm = availableFad ? availableFad.litersPerMinute - base.recommendedFadLpm : undefined;
	return {
		base,
		result,
		availableFad,
		nominalMarginLpm,
		nominalMarginPercent,
		reserveGapLpm,
		reserveCovered: reserveGapLpm === undefined ? undefined : reserveGapLpm >= 0,
		effectiveAverageCapacityLpm: availableFad ? availableFad.litersPerMinute * (compressor.dutyCycle ?? 1) : undefined,
		primaryReserve: primaryReserve(compressor, result, availableFad, reserveGapLpm),
	};
}

export function contextualVerdictLabel(result: SizingResult) {
	if (result.verdict === 'continuous') return result.flowBasis === 'documented-continuous' ? 'Compatible en continu' : 'Besoin moyen couvert';
	if (result.verdict === 'intermittent') return 'Compatible par intermittence';
	if (result.verdict === 'incompatible') return 'Incompatible';
	return 'Données insuffisantes';
}

export function contextualFadLabel(evaluation: ContextualComparisonEvaluation) {
	return compatibilityFadLabel({
		availableFadLpm: evaluation.availableFad?.litersPerMinute,
		availableFadBasis: evaluation.availableFad?.basis,
		availableFadReferencePressureBar: evaluation.availableFad?.referencePressureBar,
	}, evaluation.base.requiredPressureBar);
}
