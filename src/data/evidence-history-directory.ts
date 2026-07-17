import { evidenceHistory } from './evidence-history';
import { compressors, tools } from './catalog';
import { directoryPageHref, DIRECTORY_PAGE_SIZE } from '../domain/pagination';
import { evidenceHistoryKindPriority, historyForProduct, type EvidenceHistoryEvent } from '../domain/evidence-history';

const products = [
	...compressors.map((product) => ({ product, type: 'compressor' as const, href: `/compresseurs/${product.slug}/` })),
	...tools.map((product) => ({ product, type: 'tool' as const, href: `/outils-pneumatiques/${product.slug}/` })),
];

function significantEvent(events: EvidenceHistoryEvent[]) {
	return [...events].sort((a, b) => evidenceHistoryKindPriority[a.kind] - evidenceHistoryKindPriority[b.kind]
		|| b.occurredAt.localeCompare(a.occurredAt)
		|| b.id.localeCompare(a.id))[0];
}

export const evidenceHistoryDirectory = products.map(({ product, type, href }) => {
	const events = historyForProduct(evidenceHistory, product.id);
	if (events.length === 0) throw new Error(`Historique public absent pour ${product.id}.`);
	return { product, type, href, events, significantEvent: significantEvent(events), latestAt: events[0].occurredAt };
}).sort((a, b) => evidenceHistoryKindPriority[a.significantEvent.kind] - evidenceHistoryKindPriority[b.significantEvent.kind]
	|| b.latestAt.localeCompare(a.latestAt)
	|| a.product.brand.localeCompare(b.product.brand, 'fr-FR', { sensitivity: 'base' })
	|| a.product.model.localeCompare(b.product.model, 'fr-FR', { sensitivity: 'base' })
	|| a.product.id.localeCompare(b.product.id));

export const evidenceHistoryDirectoryTotalPages = Math.ceil(evidenceHistoryDirectory.length / DIRECTORY_PAGE_SIZE);

export function evidenceHistoryProductHref(productId: string) {
	const index = evidenceHistoryDirectory.findIndex((entry) => entry.product.id === productId);
	if (index < 0) throw new Error(`Produit absent du répertoire des preuves : ${productId}.`);
	const page = Math.floor(index / DIRECTORY_PAGE_SIZE) + 1;
	return `${directoryPageHref('/preuves/', page)}#${productId}`;
}
