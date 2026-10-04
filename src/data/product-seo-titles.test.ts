import { describe, expect, it } from 'vitest';
import { MAX_DOCUMENT_TITLE_LENGTH, resolveDocumentTitle } from '../domain/metadata';
import { productSeoDescriptions, toolUseSeoTitles } from './product-seo-titles';
import fascoBullseye from './products/tools/agrafeuse-cloueuse-fasco-f44ac-cn15w-ps65-bull-s-eye-11843';
import primaNylon from './products/tools/pistolet-peinture-asturomec-prima-buse-1-2-29612';
import profi from './products/tools/soufflette-asturomec-profi-50000';
import softWithHose from './products/tools/soufflette-asturomec-soft-50026';

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

describe('tool use SEO titles', () => {
	it('keeps every editorial title within the document limit without truncation', () => {
		for (const [productId, title] of Object.entries(toolUseSeoTitles)) {
			expect(title.length, productId).toBeLessThanOrEqual(MAX_DOCUMENT_TITLE_LENGTH);
			expect(resolveDocumentTitle('Fallback', title), productId).toEqual({ title, source: 'editorial' });
		}
	});

	it('keeps every tool use title unique across the catalog', () => {
		const firstProductByTitle = new Map<string, string>();
		for (const [productId, title] of Object.entries(toolUseSeoTitles)) {
			const firstProductId = firstProductByTitle.get(title.trim());
			expect(firstProductId, `${productId}: duplicate title with ${firstProductId}`).toBeUndefined();
			firstProductByTitle.set(title.trim(), productId);
		}
	});

	it('identifies the FASCO Bullseye through its observed reference in a short title', () => {
		const title = toolUseSeoTitles[fascoBullseye.id];
		expect(title).toContain(fascoBullseye.mpn);
		expect(title).toContain('F44AC CN15W-PS65');
		expect(title).not.toContain("'");
	});

	it('distinguishes PRIMA configurations by the documented godet without claiming an observed SKU', () => {
		expect(primaNylon).not.toHaveProperty('mpn');
		expect(primaNylon.specifications.find(item => item.label === 'Godet publié')?.value).toBe('nylon 680 cc');
		expect(toolUseSeoTitles[primaNylon.id]).toContain('godet 680 cc');
		expect(toolUseSeoTitles[primaNylon.id]).not.toContain(primaNylon.variant.distinguishingAttributes.sourceDefinedReference);
	});

	it('distinguishes PROFI tools through their observed reference', () => {
		expect(toolUseSeoTitles[profi.id]).toContain(profi.mpn);
		expect(toolUseSeoTitles[profi.id]).toContain(profi.model);
	});

	it('distinguishes the SOFT configuration with its documented four-metre hose', () => {
		expect(softWithHose.specifications.find(item => item.label === 'Raccordement')?.value).toContain('flexible spiralé polyuréthane 4 m');
		expect(toolUseSeoTitles[softWithHose.id]).toContain(softWithHose.mpn);
		expect(toolUseSeoTitles[softWithHose.id]).toContain('flexible 4 m');
	});
});
