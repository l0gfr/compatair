import { createHash } from 'node:crypto';
import { activeOffers } from './offers';
import { matchingPurchaseLinks } from './direct-purchase-inventory';

type KeyProduct = { id: string; ean?: string; demandModel?: string; airflowBasis?: string };
type IndexationInputs = { indexable: boolean; canonical: string; answerGroup: unknown };

export function renderPageCacheKey(path: string, data: unknown, navigationVersion: string, indexation: IndexationInputs, now = new Date()) {
 const inputs = data && typeof data === 'object' ? data as { product?: KeyProduct; tool?: unknown } : {};
 const product = inputs.product;
 const compressor = path.startsWith('/compresseurs/') && product;
 const selectable = product?.demandModel === 'fixed-flow' && product.airflowBasis === undefined;
 const ranksOffers = ((path.startsWith('/outils-pneumatiques/') || path.startsWith('/quel-compresseur-pour/')) && selectable)
  || (path.startsWith('/guides/') && Boolean(inputs.tool));
 // Match the exact state used by the templates. A day alone changes no HTML;
 // the footer year, actual offer availability and expiring direct links do.
 const commerce = compressor ? { offers: activeOffers.filter(offer => offer.productId === compressor.id), links: matchingPurchaseLinks(compressor, now) }
  : ranksOffers ? { availableProductIds: [...new Set(activeOffers.map(offer => offer.productId))].sort() } : undefined;
 return createHash('sha256').update(JSON.stringify({ runtime: process.versions.node, data, navigationVersion, ...indexation, year: now.getFullYear(), commerce })).digest('hex');
}
