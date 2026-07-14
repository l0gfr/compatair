import { z } from 'zod';

function isHttpsUrl(value: string) { try { return new URL(value).protocol === 'https:'; } catch { return false; } }
const httpsUrlSchema = z.url().max(4_096).refine(isHttpsUrl, 'URL HTTPS obligatoire');
const MAXIMUM_CLOCK_SKEW_MS = 5 * 60 * 1_000;

export const merchantSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	name: z.string().min(1).max(160),
	allowedHosts: z.array(z.string().regex(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)(?:\.(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?))+$/)).min(1).max(20),
	trackingAdvertiserId: z.string().min(1).optional(),
});

export const offerSchema = z.object({
	id: z.string().regex(/^[a-z0-9-]+$/),
	productId: z.string().regex(/^[a-z0-9-]{1,160}$/),
	merchantId: z.string().regex(/^[a-z0-9-]{1,160}$/),
	merchantProductId: z.string().min(1).max(500),
	productName: z.string().min(1).max(500),
	imageUrl: httpsUrlSchema,
	url: httpsUrlSchema,
	priceEur: z.number().nonnegative().max(1_000_000),
	shippingEur: z.number().nonnegative().max(1_000_000).optional(),
	availability: z.enum(['in_stock', 'out_of_stock', 'preorder', 'unknown']),
	collectedAt: z.iso.datetime(),
	sourceId: z.string().min(1).max(500),
	sourceChecksum: z.string().regex(/^[a-f0-9]{64}$/),
	identifiers: z.object({ ean: z.string().regex(/^\d{8,14}$/).optional(), gtin: z.string().regex(/^\d{8,14}$/).optional(), mpn: z.string().min(1).max(200).optional() }),
});

export type Merchant = z.infer<typeof merchantSchema>;
export type Offer = z.infer<typeof offerSchema>;

export function isFreshOffer(offer: Offer, now = new Date(), maximumAgeHours = 48) {
	const age = now.getTime() - new Date(offer.collectedAt).getTime();
	return age >= -MAXIMUM_CLOCK_SKEW_MS && age <= maximumAgeHours * 3_600_000;
}

export function assertAllowedOfferUrl(offer: Offer, merchants: Merchant[]) {
	const merchant = merchants.find((item) => item.id === offer.merchantId);
	if (!merchant) throw new Error(`Marchand inconnu : ${offer.merchantId}`);
	const url = new URL(offer.url);
	const host = url.hostname.toLowerCase();
	if (!merchant.allowedHosts.some((allowed) => host === allowed || host.endsWith(`.${allowed}`))) throw new Error(`Domaine marchand non autorisé : ${host}`);
	if (merchant.trackingAdvertiserId && (host === 'awin1.com' || host.endsWith('.awin1.com'))) {
		if (!['/pclick.php', '/cread.php'].includes(url.pathname)) throw new Error(`Chemin Awin non autorisé : ${url.pathname}`);
		const advertiserId = url.searchParams.get('m') ?? url.searchParams.get('awinmid');
		if (advertiserId !== merchant.trackingAdvertiserId) throw new Error(`Annonceur Awin non autorisé : ${advertiserId ?? 'absent'}`);
	}
	return true;
}
