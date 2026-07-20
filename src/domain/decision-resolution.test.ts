import { describe, expect, it } from 'vitest';
import type { SizingResult } from './sizing';
import { createDecisionResolution, explainDecisionDataGap, isVerifiedDecisionCandidate, rankDecisionCandidates } from './decision-resolution';

const result = (verdict: SizingResult['verdict'], recommendedFadLpm = 125): SizingResult => ({
	verdict,
	peakFlowLpm: 100,
	averageFlowLpm: 100,
	recommendedFadLpm,
	requiredPressureBar: 6,
	confidence: verdict === 'insufficient_data' ? 'low' : 'high',
	hypotheses: [],
	warnings: [],
	flowBasis: 'documented-continuous',
	calculationVersion: '1.3.0',
});

const candidate = (id: string, availableFadLpm: number | undefined, confidence: 'A' | 'B' | 'C' | 'D' = 'A', verdict: SizingResult['verdict'] = 'continuous') => ({
	compressor: { id, confidence, fadCurve: availableFadLpm === undefined ? [] : [{ pressureBar: 6, litersPerMinute: availableFadLpm }] },
	result: result(verdict),
	availableFadLpm,
	marginCovered: availableFadLpm !== undefined && availableFadLpm >= 125,
});

describe('résolution décisionnelle sans donnée inventée', () => {
	it('présente un besoin calculé comme une issue utile lorsque des machines vérifiées existent', () => {
		const resolution = createDecisionResolution({
			hasSelectedCompressor: false,
			selectedResult: result('insufficient_data'),
			candidates: [candidate('verified', 130), candidate('unknown', undefined, 'A', 'insufficient_data')],
		});
		expect(resolution.status).toBe('need_sized');
		expect(resolution.verifiedCandidates.map(({ compressor }) => compressor.id)).toEqual(['verified']);
	});

	it('ne transforme jamais une source C ou un FAD absent en recommandation', () => {
		expect(isVerifiedDecisionCandidate(candidate('weak-source', 140, 'C'))).toBe(false);
		expect(isVerifiedDecisionCandidate(candidate('missing-fad', undefined, 'A', 'continuous'))).toBe(false);
	});

	it('classe qualité documentaire avant proximité du débit', () => {
		const ranked = rankDecisionCandidates([candidate('closer-b', 126, 'B'), candidate('farther-a', 135, 'A')]);
		expect(ranked.map(({ compressor }) => compressor.id)).toEqual(['farther-a', 'closer-b']);
	});

	it('conserve le modèle choisi comme indéterminé mais trouve des alternatives vérifiées', () => {
		const resolution = createDecisionResolution({
			hasSelectedCompressor: true,
			selectedResult: result('insufficient_data'),
			candidates: [candidate('alternative', 130)],
		});
		expect(resolution.status).toBe('verified_alternatives');
		expect(resolution.verifiedCandidates).toHaveLength(1);
	});

	it('nomme le FAD manquant sans utiliser le débit aspiré', () => {
		const gap = explainDecisionDataGap({ id: 'undocumented', confidence: 'C', fadCurve: [] }, 6, result('insufficient_data'));
		expect(gap).toMatchObject({ code: 'missing_fad', title: 'FAD manquant à 6 bar' });
		expect(gap?.detail).toContain('débit aspiré');
	});

	it('refuse toute extrapolation au-delà du dernier point de courbe', () => {
		const gap = explainDecisionDataGap({ id: 'short-curve', confidence: 'A', fadCurve: [{ pressureBar: 5, litersPerMinute: 150 }] }, 7, result('insufficient_data'));
		expect(gap).toMatchObject({ code: 'pressure_outside_curve' });
		expect(gap?.detail).toContain('n’extrapole pas');
	});
});
