import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { compressors, tools } from '../data/catalog';
import { getCatalogMetrics, getFadDocumentationSummary, getToolVerdictSummaries } from './catalog-insights';

describe('catalog insights', () => {
	it('derives catalog volumes instead of duplicating constants', () => {
		const metrics = getCatalogMetrics(compressors, tools);
		expect(metrics.compressorCount).toBe(compressors.length);
		expect(metrics.toolCount).toBe(tools.length);
		expect(metrics.toolCount).toBe(20);
		expect(metrics.compatibilityPageCount).toBeGreaterThan(0);
	});

	it('accounts for every compressor in the FAD documentation summary', () => {
		const summary = getFadDocumentationSummary(compressors);
		expect(summary.multiplePoints + summary.singlePoint + summary.withoutPoint).toBe(compressors.length);
	});

	it('produces verdictable pairs for every new fixed-flow tool', () => {
		const ids = new Set(['metabo-db-10', 'metabo-dg-25-set', 'metabo-dmh-30-set', 'metabo-dssw-500', 'metabo-dsx-150', 'metabo-dw-125', 'metabo-dbf-457', 'metabo-fsp-600-lvlp']);
		const summaries = getToolVerdictSummaries(compressors, tools).filter(({ tool }) => ids.has(tool.id));
		expect(summaries).toHaveLength(ids.size);
		for (const summary of summaries) expect(summary.verdictable).toBeGreaterThan(0);
	});

	it('keeps the editorial comparison free of catalog totals that can drift', () => {
		const guide = readFileSync(new URL('../content/guides/comparatif-compresseurs-debit-restitue.md', import.meta.url), 'utf8');
		expect(guide).not.toMatch(/comparatif de \d+ compresseurs/i);
		expect(guide).not.toMatch(/\d+ (compresseurs|références) actuellement documentés/i);
	});
});
