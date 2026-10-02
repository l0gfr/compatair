import { describe, expect, it } from 'vitest';
import { evidenceHistoryDirectory, evidenceHistoryProductHref } from './evidence-history-directory';
import { sourceConfidencePriority, sourceDirectory, sourceTypePriority } from './source-directory';
import { evidenceHistoryKindPriority, historyForProduct } from '../domain/evidence-history';

import { compressors, tools } from './catalog';
import { evidenceHistory } from './evidence-history';
import { directoryPageHref, DIRECTORY_PAGE_SIZE } from '../domain/pagination';

describe('public evidence directories', () => {
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

	// This independent legacy oracle scans the complete history for every product.
	// Its deadline is separate from production performance budgets as the catalog grows.
	it('preserves every directory value and URL of the former filter/sort construction', () => {
		const products = [
			...compressors.map(product => ({ product, type: 'compressor' as const, href: `/compresseurs/${product.slug}/` })),
			...tools.map(product => ({ product, type: 'tool' as const, href: `/outils-pneumatiques/${product.slug}/` })),
		];
		const before = JSON.stringify(evidenceHistory.events);
		const reference = products.map(({ product, type, href }) => {
			const events = historyForProduct(evidenceHistory, product.id);
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
	}, 15_000);

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
