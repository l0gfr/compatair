import { describe, expect, it } from 'vitest';
import { resolveExactCatalogSearch, type CatalogSearchCandidate } from './catalog-search';

const candidates: CatalogSearchCandidate[] = [
	{
		id: 'einhell-tc-pp-220',
		value: 'Einhell TC-PP 220 · MPN 4138540 · EAN 4006825641400',
		identifiers: ['einhell-tc-pp-220', '4138540', '4006825641400'],
	},
	{
		id: 'another-tool',
		value: 'Autre outil · MPN ABC-123',
		identifiers: ['another-tool', 'ABC-123'],
	},
];

describe('exact catalog search', () => {
	it('resolves a raw MPN, EAN, CompatAir id or complete suggestion', () => {
		expect(resolveExactCatalogSearch('4138540', candidates)).toBe('einhell-tc-pp-220');
		expect(resolveExactCatalogSearch('4006825641400', candidates)).toBe('einhell-tc-pp-220');
		expect(resolveExactCatalogSearch('einhell-tc-pp-220', candidates)).toBe('einhell-tc-pp-220');
		expect(resolveExactCatalogSearch(candidates[0].value, candidates)).toBe('einhell-tc-pp-220');
	});

	it('does not turn a partial or ambiguous identifier into a selection', () => {
		expect(resolveExactCatalogSearch('TC-PP 220', candidates)).toBeUndefined();
		expect(resolveExactCatalogSearch('4138540', [...candidates, { id: 'duplicate', value: 'Doublon', identifiers: ['4138540'] }])).toBeUndefined();
	});
});
