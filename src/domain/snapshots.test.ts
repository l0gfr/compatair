import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { toolTaxonomy } from '../data/taxonomy';
import { assertNormalizedCatalogIntegrity, isValidTradeItem } from './catalog-normalization';
import { evaluateCompatibility } from './compatibility';
import { createCatalogSnapshot, createVerdictSnapshot } from './snapshots';

describe('immutable catalog and verdict snapshots', () => {
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const verdicts = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });

	it('normalizes identifiers and critical provenance without duplicates', () => {
		expect(assertNormalizedCatalogIntegrity(compressors, tools)).toBe(true);
		expect(catalog.normalized.products).toHaveLength(compressors.length + tools.length);
		expect(catalog.normalized.products.find((item) => item.id === 'metabo-fsp-600-lvlp')?.identity.normalizedMpn).toBe('601578000');
	});

	it('validates GTIN check digits instead of accepting numeric-looking identifiers', () => {
		expect(isValidTradeItem('4007430246202')).toBe(true);
		expect(isValidTradeItem('4007430246203')).toBe(false);
	});

	it('publishes every fixed-flow pair exactly once', () => {
		const fixedTools = tools.filter((tool) => tool.demandModel === 'fixed-flow');
		expect(verdicts.pairs).toHaveLength(compressors.length * fixedTools.length);
		expect(new Set(verdicts.pairs.map((pair) => pair.id)).size).toBe(verdicts.pairs.length);
	});

	it('binds every snapshot verdict to the deterministic engine output', () => {
		for (const pair of verdicts.pairs) {
			const compressor = compressors.find((item) => item.id === pair.compressorId)!;
			const tool = tools.find((item) => item.id === pair.toolId)!;
			expect(pair.verdict).toBe(evaluateCompatibility(compressor, tool).verdict);
		}
	});

	it('accounts for every pair in the summary', () => {
		expect(Object.values(verdicts.summary).reduce((total, value) => total + value, 0)).toBe(verdicts.pairs.length);
		expect(verdicts.verdictVersion).toMatch(/^[a-f0-9]{64}$/);
	});
});
