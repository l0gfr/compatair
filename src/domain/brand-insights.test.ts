import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { createBrandInsights } from './brand-insights';

describe('createBrandInsights', () => {
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
