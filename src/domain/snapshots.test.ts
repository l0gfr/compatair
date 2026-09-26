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
		const compressorById = new Map(compressors.map((item) => [item.id, item]));
		const toolById = new Map(tools.map((item) => [item.id, item]));
		for (const pair of verdicts.pairs) {
			const compressor = compressorById.get(pair.compressorId)!;
			const tool = toolById.get(pair.toolId)!;
			expect(pair.verdict, pair.id).toBe(evaluateCompatibility(compressor, tool).verdict);
		}
		// Tous les couples restent vérifiés ; réserver le temps nécessaire au runner CI.
	}, 60_000);

	it('accounts for every pair in the summary', () => {
		expect(Object.values(verdicts.summary).reduce((total, value) => total + value, 0)).toBe(verdicts.pairs.length);
		expect(verdicts.summary).toEqual({ continuous: 364_496, intermittent: 0, incompatible: 435_680, insufficient_data: 120_530 });
		expect(verdicts.conclusive).toEqual({ count: 800_176, percentage: 86.9 });
		expect(verdicts.scope).toMatchObject({ explorable_combination_count: 927_453, fixed_verdict_count: 920_706, parametric_combination_count: 6_747 });
		expect(verdicts.verdictVersion).toMatch(/^[a-f0-9]{64}$/);
	});
});
