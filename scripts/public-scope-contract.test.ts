import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../src/data/catalog';
import { createCatalogScope } from '../src/domain/data-governance';
import archive from '../config/legacy-verdict-archive.json';

const scope = createCatalogScope(compressors, tools);
const perActionToolCount = tools.filter((tool) => tool.demandModel === 'per-action').length;
const inflationToolCount = tools.filter((tool) => tool.demandModel === 'variable-volume' && tool.categoryId === 'gonflage').length;
const incompleteToolCount = tools.filter((tool) => tool.demandModel === 'variable-volume' && tool.categoryId !== 'gonflage').length;
const verdicts = archive.metadata;
const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const en = (value: number) => value.toLocaleString('en-US');
const fr = (value: number) => en(value).replaceAll(',', ' ');

describe('public catalog scope copy', () => {
	it('keeps agent discovery files aligned with the generated catalog and verdict snapshots', () => {
		expect(perActionToolCount + inflationToolCount + incompleteToolCount).toBe(scope.parametric_tool_count);
		expect(read('public/llms.txt')).toContain(
			`Dataset scope: ${scope.compressor_count} compressors × ${scope.tool_count} tools = ${en(scope.explorable_combination_count)} explorable combinations. The on-demand manifest describes ${en(scope.fixed_verdict_count)} calculable pairs for ${scope.fixed_flow_tool_count} fixed-flow tools. The remaining ${en(scope.parametric_combination_count)} combinations belong to the non-fixed contract bucket: ${perActionToolCount} per-action tools, ${inflationToolCount} inflation tools and ${incompleteToolCount} incomplete records that need manufacturer data`,
		);
		expect(read('public/llms-full.txt')).toContain(
			`The catalog has ${scope.compressor_count} compressors and ${scope.tool_count} tools: ${en(scope.explorable_combination_count)} explorable combinations. This is not a claim of ${en(scope.explorable_combination_count)} precomputed verdicts. The on-demand manifest describes ${en(scope.fixed_verdict_count)} calculable pairs for ${scope.fixed_flow_tool_count} fixed-flow tools; ${en(scope.parametric_combination_count)} combinations across ${scope.parametric_tool_count} non-fixed tools include ${perActionToolCount} per-action tools, ${inflationToolCount} inflation tools and ${incompleteToolCount} incomplete records; user inputs cannot replace missing manufacturer data. The archive published on 2026-09-27 reports ${en(verdicts.summary.continuous)} continuous, ${en(verdicts.summary.incompatible)} incompatible and ${en(verdicts.summary.insufficient_data)} insufficient-data pairs, or ${verdicts.conclusive.percentage.toFixed(1)}% conclusive.`,
		);
	});

	it('keeps repository documentation aligned with the same catalog scope', () => {
		const expectedScope = `${fr(scope.explorable_combination_count)} combinaisons explorables`;
		const expectedFixed = `${fr(scope.fixed_verdict_count)} couples fixes calculables`;
		const expectedParametric = `${fr(scope.parametric_combination_count)} combinaisons de profils non fixes`;
		for (const path of ['docs/DEVELOPMENT.md', 'docs/DATA_ASSET.md', 'docs/SEO_PROGRAMMATIQUE.md', 'docs/FEATURE_MATRIX.md']) {
			const content = read(path);
			expect(content, path).toContain(expectedScope);
			expect(content, path).toContain(expectedFixed);
			expect(content, path).toContain(expectedParametric);
		}
	});
});
