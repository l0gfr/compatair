import { calculateSizing, CALCULATION_VERSION } from './air-sizing.mjs';

export function interpolateFad(compressor, pressureBar) {
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

/** @returns {import("../src/domain/compatibility").FadResolution | undefined} */
export function resolveAvailableFad(compressor, pressureBar) {
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

/** A missing qualified demand is independent of every compressor in the catalog.
 * @param {import("../src/domain/catalog").ToolProfile} tool
 * @returns {import("../src/domain/compatibility").CompatibilityResult | undefined} */
export function compatibilityWithoutCompressor(tool) {
	if (tool.demandModel !== 'fixed-flow' || tool.airflowBasis !== undefined) {
		const warning = tool.demandModel === 'fixed-flow'
			? tool.airflowBasis === 'average' ? 'Débit moyen seul : cycle et débit en charge requis.' : tool.airflowBasis === 'free-speed' ? 'Débit à vide seul : consommation maximale ou en charge requise.' : 'Régime de consommation non documenté : débit maximal ou en charge requis.'
			: tool.demandModel === 'per-action'
			? `La source de l’outil ${tool.label} publie ${tool.airPerActionLiters.toLocaleString('fr-FR')} litre d’air par ${tool.actionLabel}. Indiquez votre cadence réelle pour calculer le débit par minute.`
			: tool.demandExplanation;
		return { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data', warnings: [warning], calculationVersion: CALCULATION_VERSION };
	}
}

/** @param {import("../src/domain/catalog").Compressor} compressor
 * @param {import("../src/domain/catalog").ToolProfile} tool
 * @param {{safetyMargin?: number}} input
 * @returns {import("../src/domain/compatibility").CompatibilityResult} */
export function evaluateCompatibility(compressor, tool, input = {}) {
	const independent = compatibilityWithoutCompressor(tool);
	if (independent) return independent;
	if (tool.demandModel !== 'fixed-flow') throw new Error('Unsupported qualified demand model');
	const safetyMargin = input.safetyMargin ?? .25;
	const fadResolution = resolveAvailableFad(compressor, tool.workingPressureBar.typical);
	const usableResolution = ['C', 'D'].includes(compressor.confidence) ? undefined : fadResolution;
	const usableFad = usableResolution?.litersPerMinute;
	const sizing = calculateSizing({
		mode: 'successive', sessionMinutes: 30,
		demands: [{
			id: tool.id, model: 'fixed-flow', quantity: 1,
			flowLpm: tool.airflowLpm.typical,
			pressureBar: tool.workingPressureBar.typical,
			dutyFactor: 1,
		}],
		safetyMargin,
		compressor: {
			maxPressureBar: compressor.maxPressureBar, maxPressureBasis: compressor.maxPressureBasis,
			availableFadLpm: usableFad,
			availableFadBasis: usableResolution?.basis,
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
				? [`Borne conservatrice : ${usableResolution.litersPerMinute.toLocaleString('fr-FR')} L/min à ${usableResolution.referencePressureBar?.toLocaleString('fr-FR')} bar pour un besoin à ${tool.workingPressureBar.typical.toLocaleString('fr-FR')} bar.`]
				: []),
		],
		calculationVersion: sizing.calculationVersion,
	};
}
