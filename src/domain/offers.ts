import { z } from 'zod';

export const merchantSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	name: z.string().min(1),
	allowedHosts: z.array(z.string().min(1)).min(1),
});

export const offerSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	productId: z.string().min(1),
	merchantId: z.string().min(1),
	url: z.url().refine((value) => value.startsWith('https://'), 'HTTPS obligatoire'),
	priceEur: z.number().nonnegative(),
	shippingEur: z.number().nonnegative().optional(),
	availability: z.enum(['in_stock', 'out_of_stock', 'preorder', 'unknown']),
	collectedAt: z.iso.datetime(),
	sourceId: z.string().min(1),
	sourceChecksum: z.string().regex(/^[a-f0-9]{64}$/),
	identifiers: z.object({ ean: z.string().regex(/^\d{8,14}$/).optional(), gtin: z.string().regex(/^\d{8,14}$/).optional(), mpn: z.string().min(1).optional() }),
});

export type Merchant = z.infer<typeof merchantSchema>;
export type Offer = z.infer<typeof offerSchema>;

export function isFreshOffer(offer: Offer, now = new Date(), maximumAgeHours = 48) {
	return now.getTime() - new Date(offer.collectedAt).getTime() <= maximumAgeHours * 3_600_000;
}

export function assertAllowedOfferUrl(offer: Offer, merchants: Merchant[]) {
	const merchant = merchants.find((item) => item.id === offer.merchantId);
	if (!merchant) throw new Error(`Marchand inconnu : ${offer.merchantId}`);
	const host = new URL(offer.url).hostname.toLowerCase();
	if (!merchant.allowedHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`))) throw new Error(`Domaine marchand non autorisé : ${host}`);
	return true;
}
