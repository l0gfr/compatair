import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { documentQualityLedger } from '../data/document-quality-ledger';
import { referenceRegistry } from '../data/reference-registry';
import { documentQualityHistory } from '../data/document-quality-observatory';
import { assertDocumentQualityIntegrity, createDocumentQualityObservatory, documentQualityHistorySchema } from './document-quality-observatory';

describe('document quality observatory', () => {
	const observatory = createDocumentQualityObservatory(compressors, tools, documentQualityLedger, referenceRegistry, CATALOG_VERIFIED_AT, documentQualityHistory);

	it('publishes the four metrics without fabricating a delay for legacy corrections', () => {
		expect(observatory.schemaVersion).toBe('1.0.0');
		expect(observatory.observatoryVersion).toMatch(/^[a-f0-9]{64}$/);
		expect(observatory.metrics.correctionLeadTime).toMatchObject({ status: 'measured', medianDays: 0, measuredCount: 1, excludedLegacyCount: 5 });
		expect(observatory.metrics.multiPressureFad.eligibleCount).toBe(compressors.length);
		expect(observatory.metrics.multiPressureFad.availableCount).toBe(compressors.filter((item) => item.fadCurve.length >= 2).length);
		expect(observatory.metrics.referenceStability).toMatchObject({ status: 'measured', changeCount: 0, missingBaselineCount: 0 });
		expect(observatory.metrics.contradictionResponses).toMatchObject({ answeredCount: 6, totalCount: 6, responseRate: 100 });
		expect(observatory.measurementProgram).toMatchObject({ baseline: { period: '2026-07', kind: 'baseline' }, trend: { status: 'measured', periodCount: 3, fromPeriod: '2026-08', toPeriod: '2026-09' }, targets: { multiPressureFad: { status: 'pending_trend', targetPercent: null }, referenceBaselineCoverage: { targetPercent: 100 }, contradictionResponses: { targetPercent: 100 } } });
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
		const measured = createDocumentQualityObservatory(compressors, tools, ledger, referenceRegistry, CATALOG_VERIFIED_AT, documentQualityHistory);
		expect(measured.metrics.correctionLeadTime).toMatchObject({ status: 'measured', medianDays: 1, measuredCount: 2 });
	});

	it('requires immutable monthly periods in chronological order', () => {
		expect(() => documentQualityHistorySchema.parse({ ...documentQualityHistory, snapshots: [...documentQualityHistory.snapshots, { ...documentQualityHistory.snapshots[0], kind: 'monthly' }] })).toThrow();
		expect(() => createDocumentQualityObservatory(compressors, tools, documentQualityLedger, referenceRegistry, '2026-10-01', documentQualityHistory)).toThrow('Snapshot mensuel documentaire manquant pour 2026-10');
	});
});
