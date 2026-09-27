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
		// Verify the complete Cartesian order without retaining millions of IDs.
		expect(new Set(compressors.map((item) => item.id)).size).toBe(compressors.length);
		expect(new Set(fixedTools.map((item) => item.id)).size).toBe(fixedTools.length);
		for (let index = 0; index < verdicts.pairs.length; index++) {
			const pair = verdicts.pairs[index];
			if (pair.compressorId !== compressors[index % compressors.length].id
				|| pair.toolId !== fixedTools[Math.floor(index / compressors.length)].id) throw new Error(`Couple désordonné ou dupliqué : ${index}`);
		}
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
	}, 120_000);

	it('accounts for every pair in the summary', () => {
		expect(Object.values(verdicts.summary).reduce((total, value) => total + value, 0)).toBe(verdicts.pairs.length);
		expect(verdicts.summary).toEqual({ continuous: 78_120, intermittent: 0, incompatible: 379_107, insufficient_data: 4_143_279 });
		expect(verdicts.conclusive).toEqual({ count: 457_227, percentage: 9.9 });
		expect(verdicts.scope).toMatchObject({ explorable_combination_count: 4_616_353, fixed_verdict_count: 4_600_506, parametric_combination_count: 15_847 });
		expect(verdicts.verdictVersion).toMatch(/^[a-f0-9]{64}$/);
	});
});
