import { describe, expect, it } from 'vitest';
import { productSeoDescriptions } from './product-seo-titles';

const reportedShortDescriptionProductIds = [
	'revolution-air-superboxy-2l',
	'einhell-te-ac-135-24-silent-plus',
	'einhell-tc-ac-200-24-8-of',
	'atlas-copco-lz-10-10-bm',
	'atlas-copco-lz-15-10-bm',
	'mecafer-fifty-50l-2hp',
	'einhell-tc-ac-190-of-set',
	'kaeser-eurocomp-epc-550-2-g',
	'kaeser-eurocomp-epc-1000-2-g',
	'einhell-pressito-18-25-hybrid',
	'atlas-copco-ab30e100',
	'atlas-copco-ab25e100',
	'kaeser-eurocomp-epc-440-g',
] as const;

describe('product SEO descriptions', () => {
	it.each(reportedShortDescriptionProductIds)('keeps %s within the targeted search-result length', (productId) => {
		const description = productSeoDescriptions[productId];
		expect(description).toBeDefined();
		expect(description!.length).toBeGreaterThanOrEqual(150);
		expect(description!.length).toBeLessThanOrEqual(160);
	});

	it('keeps the targeted descriptions unique', () => {
		const descriptions = reportedShortDescriptionProductIds.map((productId) => productSeoDescriptions[productId]);
		expect(new Set(descriptions).size).toBe(descriptions.length);
	});
});
