import { describe, expect, it } from 'vitest';
import { directoryPageHref, paginate, paginationItems } from './pagination';

describe('static directory pagination', () => {
	it('returns stable slices and human ranges', () => {
		const result = paginate(Array.from({ length: 41 }, (_, index) => index + 1), 2, 20);
		expect(result.items).toEqual(Array.from({ length: 20 }, (_, index) => index + 21));
		expect(result).toMatchObject({ totalItems: 41, totalPages: 3, firstItem: 21, lastItem: 40 });
	});

	it('builds a compact page window with explicit gaps', () => {
		expect(paginationItems(5, 10)).toEqual([
			{ type: 'page', page: 1 },
			{ type: 'ellipsis', key: '1-4' },
			{ type: 'page', page: 4 },
			{ type: 'page', page: 5 },
			{ type: 'page', page: 6 },
			{ type: 'ellipsis', key: '6-10' },
			{ type: 'page', page: 10 },
		]);
	});

	it('keeps the first page canonical and rejects impossible pages', () => {
		expect(directoryPageHref('/preuves/', 1)).toBe('/preuves/');
		expect(directoryPageHref('/preuves/', 3)).toBe('/preuves/page/3/');
		expect(() => paginate([1], 2)).toThrow('dépasse');
	});
});
