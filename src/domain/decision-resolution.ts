import type { SourceQualityGrade } from './source-quality';
import type { SizingResult } from './sizing';

export type DecisionCompressor = {
	id: string;
	confidence: SourceQualityGrade;
	fadCurve: Array<{ pressureBar: number; litersPerMinute: number }>;
	phase?: 'single-phase' | 'three-phase';
	mobility?: 'portable' | 'mobile' | 'fixed';
};

export type DecisionCandidate<T extends DecisionCompressor = DecisionCompressor> = {
	compressor: T;
	result: SizingResult;
	availableFadLpm?: number;
	marginCovered: boolean;
	lowestVerifiedPriceEur?: number;
};

export type DecisionContext = {
	powerSupply: 'single-phase-230v' | 'any';
	mobility: 'portable' | 'portable-or-mobile' | 'any';
	maximumBudgetEur?: number;
};

export type DecisionResolutionStatus =
	| 'need_sized'
	| 'selected_verified'
	| 'verified_alternatives'
	| 'measurement_required'
	| 'no_verified_solution';

export type DecisionDataGap = {
	code: 'source_quality' | 'missing_fad' | 'pressure_outside_curve' | 'missing_receiver_cycle' | 'missing_custom_fad' | 'unknown';
	title: string;
	detail: string;
};

const confidenceRank: Record<SourceQualityGrade, number> = { A: 0, B: 1, C: 2, D: 3 };
const verdictRank: Record<SizingResult['verdict'], number> = { continuous: 0, intermittent: 1, incompatible: 2, insufficient_data: 3 };

export function isVerifiedDecisionCandidate<T extends DecisionCompressor>(candidate: DecisionCandidate<T>) {
	return (candidate.result.verdict === 'continuous' || candidate.result.verdict === 'intermittent')
		&& (candidate.compressor.confidence === 'A' || candidate.compressor.confidence === 'B')
		&& candidate.availableFadLpm !== undefined
		&& candidate.result.confidence !== 'low';
}

export function rankDecisionCandidates<T extends DecisionCompressor>(candidates: DecisionCandidate<T>[]) {
	return [...candidates].sort((a, b) => verdictRank[a.result.verdict] - verdictRank[b.result.verdict]
		|| Number(b.marginCovered) - Number(a.marginCovered)
		|| confidenceRank[a.compressor.confidence] - confidenceRank[b.compressor.confidence]
		|| Math.abs((a.availableFadLpm ?? Number.POSITIVE_INFINITY) - a.result.recommendedFadLpm)
			- Math.abs((b.availableFadLpm ?? Number.POSITIVE_INFINITY) - b.result.recommendedFadLpm)
		|| a.compressor.id.localeCompare(b.compressor.id, 'fr'));
}

export function filterDecisionCandidatesByContext<T extends DecisionCompressor>(
	candidates: DecisionCandidate<T>[],
	context: DecisionContext,
) {
	return candidates.filter((candidate) => {
		if (!isVerifiedDecisionCandidate(candidate)) return false;
		if (context.powerSupply === 'single-phase-230v' && candidate.compressor.phase !== 'single-phase') return false;
		if (context.mobility === 'portable' && candidate.compressor.mobility !== 'portable') return false;
		if (context.mobility === 'portable-or-mobile' && candidate.compressor.mobility !== 'portable' && candidate.compressor.mobility !== 'mobile') return false;
		if (context.maximumBudgetEur !== undefined && (candidate.lowestVerifiedPriceEur === undefined || candidate.lowestVerifiedPriceEur > context.maximumBudgetEur)) return false;
		return true;
	}).sort((a, b) => Number(b.lowestVerifiedPriceEur !== undefined) - Number(a.lowestVerifiedPriceEur !== undefined));
}

export function createDecisionResolution<T extends DecisionCompressor>(input: {
	hasSelectedCompressor: boolean;
	selectedResult: SizingResult;
	candidates: DecisionCandidate<T>[];
}) {
	const rankedCandidates = rankDecisionCandidates(input.candidates);
	const verifiedCandidates = rankedCandidates.filter(isVerifiedDecisionCandidate);
	let status: DecisionResolutionStatus;
	if (!input.hasSelectedCompressor) status = verifiedCandidates.length ? 'need_sized' : 'no_verified_solution';
	else if (input.selectedResult.verdict === 'continuous' || input.selectedResult.verdict === 'intermittent') status = 'selected_verified';
	else if (verifiedCandidates.length) status = 'verified_alternatives';
	else status = input.selectedResult.verdict === 'insufficient_data' ? 'measurement_required' : 'no_verified_solution';
	return { status, rankedCandidates, verifiedCandidates };
}

export function explainDecisionDataGap(
	compressor: DecisionCompressor | undefined,
	requiredPressureBar: number,
	result: Pick<SizingResult, 'verdict' | 'warnings'>,
): DecisionDataGap | undefined {
	if (result.verdict !== 'insufficient_data') return undefined;
	if (!compressor) return {
		code: 'missing_custom_fad',
		title: 'Débit restitué à renseigner',
		detail: `Pour vérifier ce compresseur personnalisé, indiquez son débit réellement restitué à ${requiredPressureBar.toLocaleString('fr-FR')} bar. Le débit aspiré ne peut pas le remplacer.`,
	};
	if (compressor.fadCurve.length === 0) return {
		code: 'missing_fad',
		title: `FAD manquant à ${requiredPressureBar.toLocaleString('fr-FR')} bar`,
		detail: 'La documentation disponible ne publie aucun débit réellement restitué exploitable. CompatAir ne le déduit ni du débit aspiré, ni de la puissance moteur.',
	};
	if (compressor.confidence === 'C' || compressor.confidence === 'D') return {
		code: 'source_quality',
		title: 'Source trop faible pour valider ce modèle',
		detail: 'Les caractéristiques présentes ne reposent pas sur une source assez complète pour produire un verdict. Elles restent visibles, mais ne deviennent pas une recommandation.',
	};
	const maximumDocumentedPressure = Math.max(...compressor.fadCurve.map((point) => point.pressureBar));
	if (requiredPressureBar > maximumDocumentedPressure) return {
		code: 'pressure_outside_curve',
		title: `Courbe FAD absente à ${requiredPressureBar.toLocaleString('fr-FR')} bar`,
		detail: `Le dernier point documenté se situe à ${maximumDocumentedPressure.toLocaleString('fr-FR')} bar. CompatAir n’extrapole pas le débit au-delà de cette pression.`,
	};
	if (result.warnings.some((warning) => warning.includes('pressions de coupure') || warning.includes('fonctionnement intermittent'))) return {
		code: 'missing_receiver_cycle',
		title: 'Réserve intermittente non calculable',
		detail: 'Le débit continu ne couvre pas la pointe. Les pressions de réenclenchement et d’arrêt sont nécessaires pour prouver ce que la cuve peut réellement soutenir.',
	};
	return {
		code: 'unknown',
		title: 'Une donnée technique manque encore',
		detail: result.warnings.at(-1) ?? 'La configuration ne peut pas être conclue avec les données actuellement publiées.',
	};
}
