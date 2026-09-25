import { describe, expect, it } from 'vitest';
import { catalogOptionIdentifiers, compactCatalogOptionIdentifiers, catalogSearchIdentifiers, resolveExactCatalogSearch, type CatalogSearchCandidate } from './catalog-search';
import { compressors, tools } from '../data/catalog';
import { compressorDisplayName } from './product-display';

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
	it('preserves every identifier across the complete catalog when compacting HTML options', () => {
		for (const product of [...compressors, ...tools]) {
			const label = 'label' in product ? product.label : compressorDisplayName(product);
			const value = `${product.brand} ${product.model}${product.mpn ? ` · MPN ${product.mpn}` : ''}${product.ean ? ` · EAN ${product.ean}` : ''}`;
			const identifiers = catalogSearchIdentifiers(product.brand, product.model, [label, product.id, product.mpn, product.ean, product.gtin, ...product.distributorSkus.map((entry) => entry.sku), ...product.identifierAliases.map((entry) => entry.value)]);
			const compact = compactCatalogOptionIdentifiers(product.id, value, identifiers);
			expect(new Set(catalogOptionIdentifiers(product.id, value, compact)), product.id).toEqual(new Set(identifiers));
		}
	});

	it('retains model punctuation, alternate SKUs and ambiguity after expansion', () => {
		const value = 'Fabricant Modèle · Série II · MPN 123 · EAN 456';
		const identifiers = catalogOptionIdentifiers('machine', value, ['SKU-789']);
		expect(identifiers).toEqual(['machine', 'Fabricant Modèle · Série II', '123', '456', 'SKU-789']);
		const candidate = { id: 'machine', value, identifiers };
		expect(resolveExactCatalogSearch('SKU-789', [candidate])).toBe('machine');
		expect(resolveExactCatalogSearch('123', [candidate, { id: 'duplicate', value: 'Autre', identifiers: ['123'] }])).toBeUndefined();
	});

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

	it('accepts the exact brand and model without requiring the enriched browser suggestion', () => {
		const candidate: CatalogSearchCandidate = {
			id: 'einhell-tc-pw-340',
			value: 'Einhell TC-PW 340 · MPN 4138950 · EAN 4006825639995',
			identifiers: catalogSearchIdentifiers('Einhell', 'TC-PW 340', ['einhell-tc-pw-340', '4138950', '4006825639995']),
		};

		expect(resolveExactCatalogSearch('Einhell TC-PW 340', [candidate])).toBe('einhell-tc-pw-340');
	});
});
