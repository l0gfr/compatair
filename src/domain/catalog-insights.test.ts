import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { compressors, tools } from '../data/catalog';
import { getCatalogMetrics, getFadDocumentationSummary, getToolVerdictSummaries } from './catalog-insights';

describe('catalog insights', () => {
	it('derives catalog volumes instead of duplicating constants', () => {
		const metrics = getCatalogMetrics(compressors, tools);
		expect(metrics.compressorCount).toBe(compressors.length);
		expect(metrics.toolCount).toBe(tools.length);
		expect(metrics.toolCount).toBe(86);
		expect(metrics.compatibilityPageCount).toBeGreaterThan(0);
	});

	it('accounts for every compressor in the FAD documentation summary', () => {
		const summary = getFadDocumentationSummary(compressors);
		expect(summary.multiplePoints + summary.singlePoint + summary.withoutPoint).toBe(compressors.length);
	});

	it('produces verdictable pairs for every new fixed-flow tool', () => {
		const ids = new Set(['metabo-db-10', 'metabo-dg-25-set', 'metabo-dmh-30-set', 'metabo-dssw-500', 'metabo-dsx-150', 'metabo-dw-125', 'metabo-dbf-457', 'metabo-fsp-600-lvlp', 'chicago-pneumatic-cp7269p', 'chicago-pneumatic-cp7722', 'chicago-pneumatic-cp7741', 'chicago-pneumatic-cp7762', 'chicago-pneumatic-cp5000', 'einhell-tc-pw-610-compact', 'einhell-tc-pr-68', 'chicago-pneumatic-cp7776', 'chicago-pneumatic-cp7630', 'chicago-pneumatic-cp7748', 'chicago-pneumatic-cp875', 'chicago-pneumatic-cp3030-420r', 'chicago-pneumatic-cp3000-420f', 'chicago-pneumatic-cp826', 'chicago-pneumatic-cp7115', 'chicago-pneumatic-cp7120', 'chicago-pneumatic-cp9779', 'chicago-pneumatic-cp9780', 'chicago-pneumatic-cp881', 'chicago-pneumatic-cp785']);
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
