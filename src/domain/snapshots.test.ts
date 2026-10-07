import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { toolTaxonomy } from '../data/taxonomy';
import { assertNormalizedCatalogIntegrity, isValidTradeItem } from './catalog-normalization';
import { evaluateCompatibility } from './compatibility';
import { createCatalogSnapshot, createVerdictSnapshot } from './snapshots';

describe('immutable catalog and verdict snapshots', () => {
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const selectedCompressors = compressors.filter(item => ['einhell-te-ac-430-90-10', 'metabo-basic-250-50-w', 'einhell-tc-ac-240-50-10-of'].includes(item.id));
	const selectedTools = tools.filter(item => ['einhell-tc-pw-340', 'metabo-dsx-150', 'metabo-fsp-600-lvlp', 'metabo-dkng-40-50'].includes(item.id));
	const verdicts = createVerdictSnapshot({ compressors: selectedCompressors, tools: selectedTools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });

	it('publishes unknown tank volumes as absent values and reports their coverage gap', () => {
		const unknown = { ...compressors[0], id: 'tank-unknown', tankLiters: undefined, fieldSources: { ...compressors[0].fieldSources, tankLiters: [] } };
		const withoutReceiver = { ...compressors[0], id: 'no-receiver', tankLiters: 0 };
		const snapshot = createCatalogSnapshot({ compressors: [unknown, withoutReceiver], tools: [], toolTaxonomy: [], verifiedAt: CATALOG_VERIFIED_AT });
		const serialized = JSON.parse(JSON.stringify(snapshot));
		expect(serialized.compressors[0]).not.toHaveProperty('tankLiters');
		expect(serialized.compressors[1].tankLiters).toBe(0);
		const tankCoverage = snapshot.quality.field_coverage.find(field => field.field === 'tankLiters');
		expect(tankCoverage).toBeDefined();
		expect(tankCoverage!.populated_count).toBe(1);
	});

	it('normalizes identifiers and critical provenance without duplicates', () => {
		expect(assertNormalizedCatalogIntegrity(compressors, tools)).toBe(true);
		expect(catalog.normalized.products).toHaveLength(compressors.length + tools.length);
		expect(catalog.normalized.products.find((item) => item.id === 'metabo-fsp-600-lvlp')?.identity.normalizedMpn).toBe('601578000');
	});

	it('rejects a per-action volume without its own documentary evidence', () => {
		const tool = tools.find(item => item.id === 'agrafeuse-cloueuse-paslode-f325r-513000')!;
		expect(tool.demandModel).toBe('per-action');
		expect(assertNormalizedCatalogIntegrity([], [tool])).toBe(true);
		for (const missingSource of [undefined, []]) {
			const fieldSources = { ...tool.fieldSources };
			if (missingSource === undefined) delete fieldSources.airPerActionLiters;
			else fieldSources.airPerActionLiters = missingSource;
			expect(() => assertNormalizedCatalogIntegrity([], [{ ...tool, fieldSources }])).toThrow('airPerActionLiters');
		}
		expect(() => assertNormalizedCatalogIntegrity([], [{ ...tool, fieldSources: { ...tool.fieldSources, airPerActionLiters: ['unobserved-volume-source'] } }])).toThrow('preuve inconnue');
	});

	it('validates GTIN check digits instead of accepting numeric-looking identifiers', () => {
		expect(isValidTradeItem('4007430246202')).toBe(true);
		expect(isValidTradeItem('4007430246203')).toBe(false);
	});

	it('publishes every fixed-flow pair exactly once', () => {
		const fixedTools = selectedTools.filter((tool) => tool.demandModel === 'fixed-flow');
		expect(verdicts.pairs).toHaveLength(selectedCompressors.length * fixedTools.length);
		// Verify the complete Cartesian order without retaining millions of IDs.
		expect(new Set(compressors.map((item) => item.id)).size).toBe(compressors.length);
		expect(new Set(fixedTools.map((item) => item.id)).size).toBe(fixedTools.length);
		for (let index = 0; index < verdicts.pairs.length; index++) {
			const pair = verdicts.pairs[index];
			if (pair.compressorId !== selectedCompressors[index % selectedCompressors.length].id
				|| pair.toolId !== fixedTools[Math.floor(index / selectedCompressors.length)].id) throw new Error(`Couple désordonné ou dupliqué : ${index}`);
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
		// Exhaustively verify the fixture matrix; production decisions are on demand.
	}, 120_000);

	it('accounts for every pair in the summary', () => {
		expect(Object.values(verdicts.summary).reduce((total, value) => total + value, 0)).toBe(verdicts.pairs.length);
		const count = verdicts.pairs.length - verdicts.summary.insufficient_data;
		expect(verdicts.conclusive).toEqual({ count, percentage: Number((count / verdicts.pairs.length * 100).toFixed(1)) });
		expect(verdicts.scope.explorable_combination_count).toBe(selectedCompressors.length * selectedTools.length);
		expect(verdicts.verdictVersion).toMatch(/^[a-f0-9]{64}$/);
	});
});
