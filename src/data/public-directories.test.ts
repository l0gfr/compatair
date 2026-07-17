import { describe, expect, it } from 'vitest';
import { evidenceHistoryDirectory, evidenceHistoryProductHref } from './evidence-history-directory';
import { sourceConfidencePriority, sourceDirectory, sourceTypePriority } from './source-directory';
import { evidenceHistoryKindPriority } from '../domain/evidence-history';

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
