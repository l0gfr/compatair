import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../src/data/catalog';
import { createCatalogScope } from '../src/domain/data-governance';
import { createVerdictSnapshot } from '../src/domain/snapshots';

const scope = createCatalogScope(compressors, tools);
const verdicts = createVerdictSnapshot({
	compressors,
	tools,
	catalogVersion: 'public-scope-contract',
	verifiedAt: CATALOG_VERIFIED_AT,
});
const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const en = (value: number) => value.toLocaleString('en-US');
const fr = (value: number) => en(value).replaceAll(',', ' ');

describe('public catalog scope copy', () => {
	it('keeps agent discovery files aligned with the generated catalog and verdict snapshots', () => {
		expect(read('public/llms.txt')).toContain(
			`Dataset scope: ${scope.compressor_count} compressors × ${scope.tool_count} tools = ${en(scope.explorable_combination_count)} explorable combinations. The published fixed snapshot contains ${en(scope.fixed_verdict_count)} audited verdicts for ${scope.fixed_flow_tool_count} fixed-flow tools. The remaining ${en(scope.parametric_combination_count)} combinations are parametric`,
		);
		expect(read('public/llms-full.txt')).toContain(
			`The catalog has ${scope.compressor_count} compressors and ${scope.tool_count} tools: ${en(scope.explorable_combination_count)} explorable combinations. This is not a claim of ${en(scope.explorable_combination_count)} precomputed verdicts. The fixed snapshot contains ${en(scope.fixed_verdict_count)} audited verdicts for ${scope.fixed_flow_tool_count} fixed-flow tools; ${en(scope.parametric_combination_count)} combinations across ${scope.parametric_tool_count} tools require action rate or volume and target time. The fixed mix is ${en(verdicts.summary.continuous)} continuous, ${en(verdicts.summary.incompatible)} incompatible and ${en(verdicts.summary.insufficient_data)} insufficient-data pairs, or ${verdicts.conclusive.percentage.toFixed(1)}% conclusive.`,
		);
	});

	it('keeps repository documentation aligned with the same catalog scope', () => {
		const expectedScope = `${fr(scope.explorable_combination_count)} combinaisons explorables`;
		const expectedFixed = `${fr(scope.fixed_verdict_count)} verdicts fixes`;
		const expectedParametric = `${fr(scope.parametric_combination_count)} combinaisons paramétriques`;
		for (const path of ['README.md', 'docs/DATA_ASSET.md', 'docs/SEO_PROGRAMMATIQUE.md', 'docs/FEATURE_MATRIX.md']) {
			const content = read(path);
			expect(content, path).toContain(expectedScope);
			expect(content, path).toContain(expectedFixed);
			expect(content, path).toContain(expectedParametric);
		}
	});
});
