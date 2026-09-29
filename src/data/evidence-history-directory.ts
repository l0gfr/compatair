import { evidenceHistory } from './evidence-history';
import { compressors, tools } from './catalog';
import { directoryPageHref, DIRECTORY_PAGE_SIZE } from '../domain/pagination';
import { compareEvidenceHistoryEvents, evidenceHistoryKindPriority, type EvidenceHistoryEvent } from '../domain/evidence-history';

const products = [
	...compressors.map((product) => ({ product, type: 'compressor' as const, href: `/compresseurs/${product.slug}/` })),
	...tools.map((product) => ({ product, type: 'tool' as const, href: `/outils-pneumatiques/${product.slug}/` })),
];

function significantEvent(events: EvidenceHistoryEvent[]) {
	return [...events].sort((a, b) => evidenceHistoryKindPriority[a.kind] - evidenceHistoryKindPriority[b.kind]
		|| b.occurredAt.localeCompare(a.occurredAt)
		|| b.id.localeCompare(a.id))[0];
}

export const evidenceHistoryDirectory = (() => {
	const eventsByProduct = new Map<string, EvidenceHistoryEvent[]>();
	for (const event of evidenceHistory.events) {
		const events = eventsByProduct.get(event.productId);
		if (events) events.push(event);
		else eventsByProduct.set(event.productId, [event]);
	}
	return products.map(({ product, type, href }) => {
		// Preserve the former filter's input order and independent arrays before sorting.
		const events = [...(eventsByProduct.get(product.id) ?? [])].sort(compareEvidenceHistoryEvents);
		if (events.length === 0) throw new Error(`Historique public absent pour ${product.id}.`);
		return { product, type, href, events, significantEvent: significantEvent(events), latestAt: events[0].occurredAt };
	}).sort((a, b) => evidenceHistoryKindPriority[a.significantEvent.kind] - evidenceHistoryKindPriority[b.significantEvent.kind]
		|| b.latestAt.localeCompare(a.latestAt)
		|| a.product.brand.localeCompare(b.product.brand, 'fr-FR', { sensitivity: 'base' })
		|| a.product.model.localeCompare(b.product.model, 'fr-FR', { sensitivity: 'base' })
		|| a.product.id.localeCompare(b.product.id));
})();

export const evidenceHistoryDirectoryTotalPages = Math.ceil(evidenceHistoryDirectory.length / DIRECTORY_PAGE_SIZE);

const productHistoryHrefs = new Map<string, string>();
for (const [index, entry] of evidenceHistoryDirectory.entries()) {
	// findIndex selected the first occurrence, even if an invalid duplicate slipped in.
	if (productHistoryHrefs.has(entry.product.id)) continue;
	const page = Math.floor(index / DIRECTORY_PAGE_SIZE) + 1;
	productHistoryHrefs.set(entry.product.id, `${directoryPageHref('/preuves/', page)}#${entry.product.id}`);
}

export function evidenceHistoryProductHref(productId: string) {
	const href = productHistoryHrefs.get(productId);
	if (href === undefined) throw new Error(`Produit absent du répertoire des preuves : ${productId}.`);
	return href;
}
