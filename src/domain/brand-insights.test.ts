import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { createBrandInsights } from './brand-insights';

describe('createBrandInsights', () => {
	it('counts unknown tanks separately from machines explicitly without a receiver', () => {
		const base = compressors[0];
		const insights = createBrandInsights([{ ...base, tankLiters: undefined }, { ...base, tankLiters: 0 }, { ...base, tankLiters: 50 }], []);
		expect(insights.tankDistribution).toEqual([{ label: 'Sans cuve', count: 1 }, { label: '50 à 99 L', count: 1 }, { label: 'Non documentée', count: 1 }]);
		expect(insights.gaps.join(' ')).toContain('1 compresseur(s) sans volume de cuve documenté');
	});
	it('calcule des métriques factuelles sans juger la qualité des machines', () => {
		const brand = 'KAESER';
		const brandCompressors = compressors.filter((item) => item.brand === brand);
		const brandTools = tools.filter((item) => item.brand === brand);
		const insights = createBrandInsights(brandCompressors, brandTools);

		expect(insights.fad.total).toBe(brandCompressors.length);
		expect(insights.tankDistribution.reduce((total, item) => total + item.count, 0)).toBe(brandCompressors.length);
		expect(insights.phases.singlePhase + insights.phases.threePhase + insights.phases.unknown).toBe(brandCompressors.length);
		expect(insights.latestVerifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
	});
});
