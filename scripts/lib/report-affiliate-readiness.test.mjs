import { describe, expect, it } from 'vitest';
import { buildAffiliateReadinessReport } from './report-affiliate-readiness.mjs';

const catalog = {
	catalogVersion: 'test',
	compressors: [
		{ id: 'observed', slug: 'observed', brand: 'A', model: 'Observed', status: 'active', mpn: 'MPN-1', distributorSkus: [], confidence: 'B', fadCurve: [{ pressureBar: 6, litersPerMinute: 100 }] },
		{ id: 'ready', slug: 'ready', brand: 'B', model: 'Ready', status: 'active', ean: '12345678', distributorSkus: [], confidence: 'A', fadCurve: [{ pressureBar: 6, litersPerMinute: 120 }] },
		{ id: 'unmatchable', slug: 'unmatchable', brand: 'C', model: 'Unmatchable', status: 'active', distributorSkus: [], confidence: 'A', fadCurve: [] },
	],
};
const gscPagesCsv = 'url,clicks,impressions,ctr_pct,position,path,family,metadata_changed_after_period\nhttps://compatair.fr/compresseurs/observed/,2,8,25,4,/compresseurs/observed/,Compresseurs,False\n';
const gscDatesCsv = 'date,clicks,impressions,ctr_pct,position\n2026-07-14,2,8,25,4\n';

describe('affiliate readiness report', () => {
	it('ranks observed, exactly matchable products without inventing missing measures', () => {
		const report = buildAffiliateReadinessReport({ catalog, offers: { offers: [] }, gscPagesCsv, gscDatesCsv, gscPeriodStart: '2026-07-14', gscPeriodEnd: '2026-07-28', generatedAt: '2026-07-31T12:00:00.000Z', limit: 20 });
		expect(report.status).toBe('partial');
		expect(report.summary).toMatchObject({ compressors: 3, exactMatchableCompressors: 2, activeOffers: 0, gscClicks: 2, gscImpressions: 8 });
		expect(report.candidates).toHaveLength(2);
		expect(report.candidates[0]).toMatchObject({ productId: 'observed', evidenceTier: 'observed_search_and_catalog_ready', merchant: { activeOfferCount: 0, availability: 'not_verified' } });
		expect(report.candidates[1]).toMatchObject({ productId: 'ready', evidenceTier: 'catalog_ready_no_search_signal' });
		expect(report.accessIssues).toHaveLength(3);
	});

	it('rejects a shortlist bound outside 20 to 30', () => {
		expect(() => buildAffiliateReadinessReport({ catalog, offers: { offers: [] }, gscPagesCsv, gscDatesCsv, gscPeriodStart: '2026-07-14', gscPeriodEnd: '2026-07-28', generatedAt: '2026-07-31T12:00:00.000Z', limit: 10 })).toThrow('entre 20 et 30');
	});
});
