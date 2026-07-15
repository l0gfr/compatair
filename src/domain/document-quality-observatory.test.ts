import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { documentQualityLedger } from '../data/document-quality-ledger';
import { referenceRegistry } from '../data/reference-registry';
import { assertDocumentQualityIntegrity, createDocumentQualityObservatory } from './document-quality-observatory';

describe('document quality observatory', () => {
	const observatory = createDocumentQualityObservatory(compressors, tools, documentQualityLedger, referenceRegistry, CATALOG_VERIFIED_AT);

	it('publishes the four metrics without fabricating a legacy correction delay', () => {
		expect(observatory.schemaVersion).toBe('1.0.0');
		expect(observatory.observatoryVersion).toMatch(/^[a-f0-9]{64}$/);
		expect(observatory.metrics.correctionLeadTime).toMatchObject({ status: 'insufficient_data', medianDays: null, measuredCount: 0, excludedLegacyCount: 5 });
		expect(observatory.metrics.multiPressureFad.eligibleCount).toBe(compressors.length);
		expect(observatory.metrics.multiPressureFad.availableCount).toBe(compressors.filter((item) => item.fadCurve.length >= 2).length);
		expect(observatory.metrics.referenceStability).toMatchObject({ status: 'baseline', changeCount: 0, missingBaselineCount: 0 });
		expect(observatory.metrics.contradictionResponses).toMatchObject({ answeredCount: 4, totalCount: 4, responseRate: 100 });
	});

	it('requires a current MPN observation and valid contradiction sources', () => {
		expect(assertDocumentQualityIntegrity(compressors, tools, documentQualityLedger, referenceRegistry)).toBe(true);
		const product = compressors.find((item) => item.mpn)!;
		const changedCompressors = compressors.map((item) => item.id === product.id ? { ...item, mpn: `${item.mpn}-changed` } : item);
		expect(() => assertDocumentQualityIntegrity(changedCompressors, tools, documentQualityLedger, referenceRegistry)).toThrow(`MPN courant différent du registre : ${product.id}`);
	});

	it('measures future corrections from their documented opening date', () => {
		const ledger = {
			...documentQualityLedger,
			corrections: [...documentQualityLedger.corrections, { id: 'measured-example', title: 'Exemple mesuré', openedAt: '2026-07-15', resolvedAt: '2026-07-17', summary: 'Cycle daté.', impact: 'Mesure testée.' }],
		};
		const measured = createDocumentQualityObservatory(compressors, tools, ledger, referenceRegistry, '2026-07-17');
		expect(measured.metrics.correctionLeadTime).toMatchObject({ status: 'measured', medianDays: 2, measuredCount: 1 });
	});
});
