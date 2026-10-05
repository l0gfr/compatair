import { createCompatibilityImpactFeed } from '../domain/compatibility-impact';
import { decisionVersion } from '../../server/verdict-publication.mjs';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { evidenceHistory } from './evidence-history';
import { activeOffers } from './offers';
import { publicationCatalog as catalog } from './verdict-publication';

const merchantByProduct = new Map<string, string[]>();
for (const offer of activeOffers) merchantByProduct.set(offer.productId, [...new Set([...(merchantByProduct.get(offer.productId) ?? []), offer.merchantId])]);

export const compatibilityImpactFeed = createCompatibilityImpactFeed({
	events: evidenceHistory.events, compressors, tools, catalogVersion: catalog.catalogVersion,
	verdictVersion: decisionVersion(catalog.catalogVersion), observedAt: CATALOG_VERIFIED_AT, merchantByProduct,
});
