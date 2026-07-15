import { createCompatibilityImpactFeed } from '../domain/compatibility-impact';
import { createCatalogSnapshot, createVerdictSnapshot } from '../domain/snapshots';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { evidenceHistory } from './evidence-history';
import { activeOffers } from './offers';
import { toolTaxonomy } from './taxonomy';

const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
const verdicts = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });
const merchantByProduct = new Map<string, string[]>();
for (const offer of activeOffers) merchantByProduct.set(offer.productId, [...new Set([...(merchantByProduct.get(offer.productId) ?? []), offer.merchantId])]);

export const compatibilityImpactFeed = createCompatibilityImpactFeed({
	events: evidenceHistory.events, compressors, tools, pairs: verdicts.pairs, catalogVersion: catalog.catalogVersion,
	verdictVersion: verdicts.verdictVersion, observedAt: CATALOG_VERIFIED_AT, merchantByProduct,
});
