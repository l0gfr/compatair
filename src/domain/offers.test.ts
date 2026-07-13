import { describe, expect, it } from 'vitest';
import { assertAllowedOfferUrl, merchantSchema, offerSchema } from './offers';

const merchant = merchantSchema.parse({ id: 'manomano-fr', name: 'ManoMano.fr', allowedHosts: ['manomano.fr', 'awin1.com'], trackingAdvertiserId: '17547' });
const base = {
	id: 'manomano-fr-a1', productId: 'product-a', merchantId: 'manomano-fr', merchantProductId: '42', productName: 'Compresseur',
	imageUrl: 'https://cdn.example.test/image.webp', priceEur: 99.9, availability: 'in_stock' as const, collectedAt: '2026-07-13T20:00:00.000Z',
	sourceId: 'awin:17547:feed.csv', sourceChecksum: 'a'.repeat(64), identifiers: { mpn: 'ABC-42' },
};

describe('sécurité des liens d’offre', () => {
	it('autorise le lien Awin du programme ManoMano FR', () => {
		const offer = offerSchema.parse({ ...base, url: 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547' });
		expect(assertAllowedOfferUrl(offer, [merchant])).toBe(true);
	});

	it('refuse un autre annonceur derrière le même domaine Awin', () => {
		const offer = offerSchema.parse({ ...base, url: 'https://www.awin1.com/pclick.php?p=1&a=2&m=999' });
		expect(() => assertAllowedOfferUrl(offer, [merchant])).toThrow('Annonceur Awin non autorisé');
	});
});
