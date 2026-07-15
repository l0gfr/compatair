import type { Merchant, Offer } from './offers';

const availabilityUrls = {
	in_stock: 'https://schema.org/InStock',
	out_of_stock: 'https://schema.org/OutOfStock',
	preorder: 'https://schema.org/PreOrder',
} as const;

export function offerJsonLd(offer: Offer, merchants: Merchant[], pageUrl: string) {
	const merchant = merchants.find((item) => item.id === offer.merchantId);
	if (!merchant) throw new Error(`Marchand inconnu : ${offer.merchantId}`);
	return {
		'@type': 'Offer',
		url: pageUrl,
		price: offer.priceEur,
		priceCurrency: 'EUR',
		...(offer.availability === 'unknown' ? {} : { availability: availabilityUrls[offer.availability] }),
		seller: { '@type': 'Organization', name: merchant.name },
	};
}
