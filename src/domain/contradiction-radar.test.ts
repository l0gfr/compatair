import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { contradictionRadar } from '../data/contradiction-radar';
import { documentQualityLedger } from '../data/document-quality-ledger';
import { referenceRegistry } from '../data/reference-registry';
import { createContradictionRadar } from './contradiction-radar';
import { assertDocumentQualityIntegrity } from './document-quality-observatory';

describe('contradiction radar', () => {
	it('keeps claims separated by source channel and publishes explicit empty coverage', () => {
		expect(contradictionRadar.radarVersion).toMatch(/^[a-f0-9]{64}$/);
		expect(contradictionRadar.summary).toMatchObject({ totalCount: 6, answeredCount: 6, openCount: 0, withheldCount: 1 });
		expect(contradictionRadar.summary.coverageByChannel).toMatchObject({ manual: 3, manufacturer: 6, merchant: 1, measured: 0 });
		for (const record of contradictionRadar.records) expect(new Set(record.claims.map((claim) => claim.normalizedValue)).size).toBeGreaterThan(1);
	});

	it('resolves every claim to its exact evidence snapshot', () => {
		const radar = createContradictionRadar(compressors, tools, documentQualityLedger, CATALOG_VERIFIED_AT);
		for (const record of radar.records) for (const claim of record.claims) {
			expect(claim.evidence.id).toBe(claim.evidenceId);
			expect(claim.evidence.sourceUrl).toMatch(/^https:\/\//);
		}
	});

	it('rejects a false contradiction and a silent selected value', () => {
		const first = documentQualityLedger.contradictions[0];
		const falseConflict = {
			...documentQualityLedger,
			contradictions: [{ ...first, claims: first.claims.map((claim) => ({ ...claim, normalizedValue: 90 })) }, ...documentQualityLedger.contradictions.slice(1)],
		};
		expect(() => assertDocumentQualityIntegrity(compressors, tools, falseConflict, referenceRegistry)).toThrow('Valeurs non contradictoires');
		const unknownSelection = {
			...documentQualityLedger,
			contradictions: [{ ...first, decision: { outcome: 'retain_claim' as const, selectedClaimId: 'unknown-claim' } }, ...documentQualityLedger.contradictions.slice(1)],
		};
		expect(() => assertDocumentQualityIntegrity(compressors, tools, unknownSelection, referenceRegistry)).toThrow('Valeur retenue inconnue');
	});
});
