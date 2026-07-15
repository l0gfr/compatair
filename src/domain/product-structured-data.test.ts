import { describe, expect, it } from 'vitest';
import { merchantSchema, offerSchema } from './offers';
import { offerJsonLd } from './product-structured-data';

const merchant = merchantSchema.parse({ id: 'merchant-test', name: 'Marchand test', allowedHosts: ['example.com'] });
const offer = offerSchema.parse({
	id: 'offer-test', productId: 'product-test', merchantId: merchant.id, merchantProductId: 'reference-test', productName: 'Produit test',
	imageUrl: 'https://example.com/product.jpg', url: 'https://example.com/product', priceEur: 129.9, availability: 'in_stock',
	collectedAt: '2026-07-15T08:00:00.000Z', sourceId: 'feed-test', sourceChecksum: 'a'.repeat(64), identifiers: { mpn: 'TEST-1' },
});

describe('product structured data', () => {
	it('maps only a sourced offer to the Product fields required by search engines', () => {
		expect(offerJsonLd(offer, [merchant], 'https://compatair.fr/compresseurs/product-test/')).toEqual({
			'@type': 'Offer', url: 'https://compatair.fr/compresseurs/product-test/', price: 129.9, priceCurrency: 'EUR',
			availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Marchand test' },
		});
	});

	it('does not invent an availability when the feed says unknown', () => {
		expect(offerJsonLd({ ...offer, availability: 'unknown' }, [merchant], 'https://compatair.fr/compresseurs/product-test/')).not.toHaveProperty('availability');
	});
});
