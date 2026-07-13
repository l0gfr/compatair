import { merchantSchema, offerSchema, assertAllowedOfferUrl, isFreshOffer, type Merchant, type Offer } from '../domain/offers';
import snapshot from './offers.snapshot.json';

export const merchants: Merchant[] = [
	merchantSchema.parse({ id: 'amazon-fr', name: 'Amazon.fr', allowedHosts: ['amazon.fr'] }),
	merchantSchema.parse({ id: 'manomano-fr', name: 'ManoMano.fr', allowedHosts: ['manomano.fr', 'awin1.com'], trackingAdvertiserId: '17547' }),
];

// Aucune offre n’est publiée avant réception et validation d’un flux partenaire autorisé.
const rawOffers = snapshot.offers as Offer[];
export const offers = rawOffers.map((item) => {
	const offer = offerSchema.parse(item);
	assertAllowedOfferUrl(offer, merchants);
	return offer;
});
export const activeOffers = offers.filter((offer) => isFreshOffer(offer));
