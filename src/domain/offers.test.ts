import { describe, expect, it } from 'vitest';
import { assertAllowedOfferUrl, isFreshOffer, merchantSchema, offerSchema } from './offers';

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

	it('refuse les identifiants annonceur ambigus', () => {
		const offer = offerSchema.parse({ ...base, url: 'https://www.awin1.com/pclick.php?p=1&m=17547&awinmid=999' });
		expect(() => assertAllowedOfferUrl(offer, [merchant])).toThrow('Annonceur Awin non autorisé');
		const duplicated = offerSchema.parse({ ...base, url: 'https://www.awin1.com/pclick.php?p=1&m=17547&m=17547' });
		expect(() => assertAllowedOfferUrl(duplicated, [merchant])).toThrow('Annonceur Awin non autorisé');
	});

	it('borne la destination finale des liens profonds Awin au marchand', () => {
		const allowed = offerSchema.parse({ ...base, url: 'https://www.awin1.com/cread.php?awinmid=17547&awinaffid=42&ued=https%3A%2F%2Fwww.manomano.fr%2Fp%2F42' });
		expect(assertAllowedOfferUrl(allowed, [merchant])).toBe(true);
		const rejected = offerSchema.parse({ ...base, url: 'https://www.awin1.com/cread.php?awinmid=17547&awinaffid=42&ued=https%3A%2F%2Funauthorized.example%2F' });
		expect(() => assertAllowedOfferUrl(rejected, [merchant])).toThrow('Destination Awin non autorisée');
	});

	it('retire une offre après 48 heures sans renouvellement', () => {
		const offer = offerSchema.parse({ ...base, url: 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547' });
		expect(isFreshOffer(offer, new Date('2026-07-15T20:00:00.000Z'))).toBe(true);
		expect(isFreshOffer(offer, new Date('2026-07-15T20:00:00.001Z'))).toBe(false);
	});

	it('refuse une date de collecte située artificiellement dans le futur', () => {
		const offer = offerSchema.parse({ ...base, collectedAt: '2026-07-15T21:00:00.000Z', url: 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547' });
		expect(isFreshOffer(offer, new Date('2026-07-15T20:00:00.000Z'))).toBe(false);
	});

	it('refuse les URL non HTTPS et les montants hors contrat', () => {
		expect(() => offerSchema.parse({ ...base, url: 'http://www.awin1.com/pclick.php?p=1&m=17547' })).toThrow();
		expect(() => offerSchema.parse({ ...base, priceEur: Number.MAX_VALUE, url: 'https://www.awin1.com/pclick.php?p=1&m=17547' })).toThrow();
	});
});
