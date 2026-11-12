import { describe, expect, it } from 'vitest';
import { evidenceHistoryDirectory, evidenceHistoryProductHref } from './evidence-history-directory';
import { sourceConfidencePriority, sourceDirectory, sourceTypePriority } from './source-directory';
import { evidenceHistoryKindPriority, historyForProduct, type EvidenceHistory } from '../domain/evidence-history';

import { compressors, tools } from './catalog';
import { evidenceHistory } from './evidence-history';
import { directoryPageHref, DIRECTORY_PAGE_SIZE } from '../domain/pagination';

// Keep the legacy filter/sort oracle, but restrict its input to the matching
// product. A stable sort and binary search are independent of the production
// Map index and avoid rescanning the entire history once per product.
function legacyHistoryLookup(history: EvidenceHistory) {
	const sorted = [...history.events].sort((a, b) => a.productId < b.productId ? -1 : a.productId > b.productId ? 1 : 0);
	return (productId: string) => {
		let start = 0, end = sorted.length;
		while (start < end) {
			const middle = Math.floor((start + end) / 2);
			if (sorted[middle].productId < productId) start = middle + 1;
			else end = middle;
		}
		end = start;
		while (end < sorted.length && sorted[end].productId === productId) end++;
		return historyForProduct({ ...history, events: sorted.slice(start, end) }, productId);
	};
}

describe('public evidence directories', () => {
	it('matches the complete legacy scan for interleaved histories, ties and missing products', () => {
		const event = evidenceHistory.events[0];
		const history: EvidenceHistory = { ...evidenceHistory, events: [
			{ ...event, productId: 'b', id: 'b:old', occurredAt: '2026-01-01' },
			{ ...event, productId: 'a', id: 'a:tie', occurredAt: '2026-02-01', kind: 'verified', summary: 'first tie' },
			{ ...event, productId: 'c', id: 'c:only', occurredAt: '2026-01-01' },
			{ ...event, productId: 'a', id: 'a:withdrawn', occurredAt: '2026-02-01', kind: 'withdrawn' },
			{ ...event, productId: 'b', id: 'b:new', occurredAt: '2026-03-01' },
			{ ...event, productId: 'a', id: 'a:z', occurredAt: '2026-02-01', kind: 'verified' },
			{ ...event, productId: 'a', id: 'a:tie', occurredAt: '2026-02-01', kind: 'verified', summary: 'second tie' },
		] };
		const before = JSON.stringify(history);
		const lookup = legacyHistoryLookup(history);
		for (const productId of ['', 'a', 'aa', 'b', 'c', 'z']) {
			expect(lookup(productId)).toEqual(historyForProduct(history, productId));
			lookup(productId).pop();
			expect(lookup(productId)).toEqual(historyForProduct(history, productId));
		}
		expect(JSON.stringify(history)).toBe(before);
		expect(legacyHistoryLookup({ ...history, events: [] })('a')).toEqual([]);
	});

	it('ranks product histories by signal, recency and name without duplicates', () => {
		expect(new Set(evidenceHistoryDirectory.map((entry) => entry.product.id)).size).toBe(evidenceHistoryDirectory.length);
		for (let index = 1; index < evidenceHistoryDirectory.length; index += 1) {
			const previous = evidenceHistoryDirectory[index - 1];
			const current = evidenceHistoryDirectory[index];
			expect(evidenceHistoryKindPriority[previous.significantEvent.kind]).toBeLessThanOrEqual(evidenceHistoryKindPriority[current.significantEvent.kind]);
		}
		expect(evidenceHistoryProductHref(evidenceHistoryDirectory[0].product.id)).toContain(`#${evidenceHistoryDirectory[0].product.id}`);
		expect(evidenceHistoryProductHref(evidenceHistoryDirectory.at(-1)!.product.id)).toMatch(/^\/preuves\/page\/\d+\/#/);
	});

	// Compare every product, event, field and URL against the legacy construction.
	it('preserves every directory value and URL of the former filter/sort construction', () => {
		const products = [
			...compressors.map(product => ({ product, type: 'compressor' as const, href: `/compresseurs/${product.slug}/` })),
			...tools.map(product => ({ product, type: 'tool' as const, href: `/outils-pneumatiques/${product.slug}/` })),
		];
		const before = JSON.stringify(evidenceHistory.events);
		const historyLookup = legacyHistoryLookup(evidenceHistory);
		const reference = products.map(({ product, type, href }) => {
			const events = historyLookup(product.id);
			const significantEvent = [...events].sort((a, b) => evidenceHistoryKindPriority[a.kind] - evidenceHistoryKindPriority[b.kind]
				|| b.occurredAt.localeCompare(a.occurredAt) || b.id.localeCompare(a.id))[0];
			return { product, type, href, events, significantEvent, latestAt: events[0].occurredAt };
		}).sort((a, b) => evidenceHistoryKindPriority[a.significantEvent.kind] - evidenceHistoryKindPriority[b.significantEvent.kind]
			|| b.latestAt.localeCompare(a.latestAt)
			|| a.product.brand.localeCompare(b.product.brand, 'fr-FR', { sensitivity: 'base' })
			|| a.product.model.localeCompare(b.product.model, 'fr-FR', { sensitivity: 'base' })
			|| a.product.id.localeCompare(b.product.id));
		expect(evidenceHistoryDirectory).toEqual(reference);
		for (const [index, entry] of reference.entries()) {
			const page = Math.floor(index / DIRECTORY_PAGE_SIZE) + 1;
			expect(evidenceHistoryProductHref(entry.product.id)).toBe(`${directoryPageHref('/preuves/', page)}#${entry.product.id}`);
		}
		expect(JSON.stringify(evidenceHistory.events)).toBe(before);
		expect(() => evidenceHistoryProductHref('missing-history-product')).toThrow('Produit absent du répertoire des preuves : missing-history-product.');
	}, 45_000);

	it('deduplicates sources and ranks confidence before source type', () => {
		expect(new Set(sourceDirectory.map((source) => source.id)).size).toBe(sourceDirectory.length);
		for (let index = 1; index < sourceDirectory.length; index += 1) {
			const previous = sourceDirectory[index - 1];
			const current = sourceDirectory[index];
			const previousConfidence = sourceConfidencePriority[previous.confidence];
			const currentConfidence = sourceConfidencePriority[current.confidence];
			expect(previousConfidence).toBeLessThanOrEqual(currentConfidence);
			if (previousConfidence === currentConfidence) expect(sourceTypePriority[previous.sourceType]).toBeLessThanOrEqual(sourceTypePriority[current.sourceType]);
		}
	});
});
