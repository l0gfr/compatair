import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { assertDecisionPageValue, compressorFlowAnswer, explainCompatibility } from './decision-dossier';
import { documentQualityObservatory, documentQualityHistory } from '../data/document-quality-observatory';
import { evaluateCompatibility } from './compatibility';
import { decisionComparisons, resolveDecisionComparison } from '../data/decision-comparisons';
import { directPurchaseLinks, directPurchaseLinkSchema, purchaseLinksForProduct } from '../data/direct-purchase-links';

describe('pages de décision sourcées', () => {
	it('reconcilie la photographie mensuelle avec les mesures courantes', () => {
		const metrics = documentQualityObservatory.metrics;
		expect(documentQualityHistory.snapshots.at(-1)!.metrics).toEqual({
			correctionMedianDays: metrics.correctionLeadTime.medianDays,
			measurableCorrectionCount: metrics.correctionLeadTime.measuredCount,
			multiPressureFadPercentage: metrics.multiPressureFad.percentage,
			referenceBaselineCoveragePercent: Math.round((metrics.referenceStability.monitoredCount - metrics.referenceStability.missingBaselineCount) / metrics.referenceStability.monitoredCount * 100),
			referenceChangeCount: metrics.referenceStability.changeCount,
			contradictionResponseRate: metrics.contradictionResponses.responseRate,
		});
	});

	it('exige un dossier et des preuves résolues pour chaque référence du catalogue', () => {
		for (const product of [...compressors, ...tools]) expect(assertDecisionPageValue(product).length).toBeGreaterThan(0);
	});
	it('bloque une génération avec une source de débit absente ou orpheline', () => {
		const product = compressors[0];
		expect(() => assertDecisionPageValue({ ...product, fieldSources: {} })).toThrow(/sans preuve/);
		expect(() => assertDecisionPageValue({ ...product, evidence: [] })).toThrow(/Preuve absente/);
	});
	it('conserve les chiffres des cinq cas demandés et leur portée', () => {
		const cp = tools.find((item) => item.id === 'chicago-pneumatic-cp7732c')!;
		const dsx = tools.find((item) => item.id === 'metabo-dsx-150')!;
		expect(cp.demandModel === 'fixed-flow' && cp.airflowLpm.typical).toBe(612);
		expect(dsx.demandModel === 'fixed-flow' && dsx.airflowLpm.typical).toBe(550);
		const key = tools.find((item) => item.id === 'einhell-tc-pw-340')!;
		for (const id of ['einhell-tc-ac-240-50-10-of', 'mecafer-fifty-50l-2hp', 'scheppach-hc51v']) {
			const compressor = compressors.find((item) => item.id === id)!;
			for (const tool of [cp, dsx, key]) {
				const result = evaluateCompatibility(compressor, tool);
				expect(result.verdict).toBe('incompatible');
				expect(explainCompatibility(compressor, tool, result)).toContain('interpolés');
			}
			expect(compressorFlowAnswer(compressor)).toContain('L/min');
		}
	});
	it('ne transforme pas une pression non couverte en verdict favorable', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-basic-250-50-w')!;
		const tool = tools.find((item) => item.id === 'metabo-ssp-1000')!;
		const result = evaluateCompatibility(compressor, tool);
		expect(result.verdict).toBe('insufficient_data');
		expect(explainCompatibility(compressor, tool, result)).toContain('Aucun verdict favorable');
	});
	it('ne présente pas la réserve recommandée comme le seuil obligatoire du moteur', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-420-50-10-v')!;
		const tool = tools.find((item) => item.id === 'einhell-tc-pw-340')!;
		const result = evaluateCompatibility(compressor, tool);
		expect(result.verdict).toBe('continuous');
		expect(explainCompatibility(compressor, tool, result)).toContain('mais pas le repère');
		expect(explainCompatibility(compressor, tool, result)).toContain('cycle de service du compresseur n’est pas documenté');
	});
	it('borne les comparatifs à des questions éditoriales avec des différences techniques', () => {
		expect(new Set(decisionComparisons.map((page) => page.slug)).size).toBe(decisionComparisons.length);
		for (const page of decisionComparisons) {
			expect(page.title.length).toBeLessThanOrEqual(60);
			const comparison = resolveDecisionComparison(page);
			expect(comparison.rows.length * comparison.selectedTools.length).toBeLessThanOrEqual(8);
		}
		expect(() => resolveDecisionComparison({ ...decisionComparisons[0], compressorIds: ['inconnu'] })).toThrow();
		expect(() => resolveDecisionComparison({ ...decisionComparisons[0], compressorIds: [compressors[0].id, compressors[0].id] })).toThrow();
	});
});

describe('liens directs sans affiliation', () => {
	it('apparie tous les liens à un EAN du catalogue, sans prix ni stock inventés', () => {
		for (const link of directPurchaseLinks) {
			expect(compressors.find((item) => item.id === link.productId)?.ean).toBe(link.ean);
			expect(link).not.toHaveProperty('price');
			expect(link).not.toHaveProperty('availability');
		}
	});
	it.each(['https://www.fnac.com.evil.test/p', 'http://www.fnac.com/p', 'https://user:pass@www.fnac.com/p', 'https://www.fnac.com:8080/p', 'https://www.fnac.com/p?redirect=https://evil.test', 'javascript:alert(1)'])('refuse %s', (url) => {
		expect(directPurchaseLinkSchema.safeParse({ ...directPurchaseLinks[0], url }).success).toBe(false);
	});
	it('retire les liens trop anciens, futurs ou sans produit exact', () => {
		expect(purchaseLinksForProduct(directPurchaseLinks[0].productId, new Date('2026-09-25T12:00:00Z'))).toHaveLength(2);
		expect(purchaseLinksForProduct(directPurchaseLinks[0].productId, new Date('2027-01-01'))).toHaveLength(0);
		expect(purchaseLinksForProduct(directPurchaseLinks[0].productId, new Date('2026-09-24'))).toHaveLength(0);
		expect(purchaseLinksForProduct('inconnu')).toHaveLength(0);
	});
});
