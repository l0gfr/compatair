import { describe, expect, it } from 'vitest';
import { brandDirectory, brandDirectoryTotalPages, BRAND_DIRECTORY_PAGE_SIZE } from './brand-directory';
import { compressors, tools } from './catalog';
import { brandSlug } from '../domain/brand';
import { directoryPageHref, paginate, paginationItems } from '../domain/pagination';

describe('paginated manufacturer directory', () => {
	it('preserves every actual manufacturer, its counts and its existing URL exactly once', () => {
		const expectedBrands = [...new Set([...compressors.map(item => item.brand), ...tools.map(item => item.brand)])]
			.sort((left, right) => left.localeCompare(right, 'fr'));
		const collected = Array.from({ length: brandDirectoryTotalPages }, (_, index) => paginate(brandDirectory, index + 1, BRAND_DIRECTORY_PAGE_SIZE))
			.flatMap(page => page.items);
		expect(collected.map(item => item.brand)).toEqual(expectedBrands);
		expect(new Set(collected.map(item => item.slug)).size).toBe(expectedBrands.length);
		for (const item of collected) {
			const brandCompressors = compressors.filter(product => product.brand === item.brand);
			const brandTools = tools.filter(product => product.brand === item.brand);
			expect(item).toEqual({
				brand: item.brand,
				slug: brandSlug(item.brand),
				compressors: brandCompressors.length,
				tools: brandTools.length,
				documentedFad: brandCompressors.filter(product => product.fadCurve.length > 0).length,
				total: brandCompressors.length + brandTools.length,
			});
		}
	});

	it('bounds pages and their pagination window as the manufacturer corpus grows', () => {
		for (const total of [0, 1, 47, 48, 49, 96, 97, 10_000]) {
			const corpus = Array.from({ length: total }, (_, index) => index);
			const totalPages = Math.max(1, Math.ceil(total / BRAND_DIRECTORY_PAGE_SIZE));
			const pages = Array.from({ length: totalPages }, (_, index) => paginate(corpus, index + 1, BRAND_DIRECTORY_PAGE_SIZE));
			expect(pages.flatMap(page => page.items)).toEqual(corpus);
			for (const page of pages) {
				expect(page.items.length).toBeLessThanOrEqual(BRAND_DIRECTORY_PAGE_SIZE);
				expect(paginationItems(page.page, page.totalPages).filter(item => item.type === 'page').length).toBeLessThanOrEqual(5);
			}
			expect(() => paginate(corpus, totalPages + 1, BRAND_DIRECTORY_PAGE_SIZE)).toThrow('dépasse');
		}
		expect(() => paginate(brandDirectory, 0, BRAND_DIRECTORY_PAGE_SIZE)).toThrow('entier positif');
		expect(() => paginate(brandDirectory, 1.5, BRAND_DIRECTORY_PAGE_SIZE)).toThrow('entier positif');
	});

	it('keeps the first URL and a contiguous page transition without duplicate manufacturers', () => {
		const first = paginate(brandDirectory, 1, BRAND_DIRECTORY_PAGE_SIZE);
		expect(directoryPageHref('/marques/', first.page)).toBe('/marques/');
		expect(first.firstItem).toBe(1);
		if (brandDirectoryTotalPages > 1) {
			const second = paginate(brandDirectory, 2, BRAND_DIRECTORY_PAGE_SIZE);
			expect(directoryPageHref('/marques/', second.page)).toBe('/marques/page/2/');
			expect(second.firstItem).toBe(first.lastItem + 1);
			expect(second.items.some(item => first.items.some(previous => previous.slug === item.slug))).toBe(false);
		}
	});
});
