import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../../src/data/catalog';
import { TOOL_PROFILE_NAMES } from '../../server/mcp-output-schemas.mjs';
import { evaluateMcpAgentSelection } from './evaluate-mcp-agent-selection.mjs';

const benchmark = JSON.parse(readFileSync(new URL('../../benchmarks/mcp-agent-selection-50.json', import.meta.url), 'utf8'));

function referenceSubmissions(model: string, tokenizer: string) {
	return benchmark.cases.map((testCase: any) => ({
		model, client: 'contract-fixture', tokenizer, case_id: testCase.case_id,
		selected_profile: testCase.expected.profile, selected_tool: testCase.expected.tool, arguments: testCase.expected.arguments,
		result: testCase.calculable ? { status: 'success' } : { status: 'insufficient_data', reason_code: 'source_data_missing' },
		manifest_tokens: tokenizer === 'tokenizer-a' ? 3100 : 3350,
	}));
}

describe('MCP agent-selection benchmark', () => {
	it('contains 50 unique, catalog-backed and profile-valid cases', () => {
		expect(new Set(benchmark.cases.map((testCase: any) => testCase.case_id)).size).toBe(50);
		expect(benchmark.cases.filter((testCase: any) => testCase.calculable)).toHaveLength(44);
		expect(benchmark.cases.filter((testCase: any) => !testCase.calculable)).toHaveLength(6);
		const compressorIds = new Set(compressors.map((item) => item.id));
		const toolIds = new Set(tools.map((item) => item.id));
		for (const testCase of benchmark.cases) {
			expect(TOOL_PROFILE_NAMES[testCase.expected.profile as keyof typeof TOOL_PROFILE_NAMES], testCase.case_id).toContain(testCase.expected.tool);
			const argumentsValue = testCase.expected.arguments;
			if (argumentsValue.compressorId) expect(compressorIds, testCase.case_id).toContain(argumentsValue.compressorId);
			for (const toolId of argumentsValue.toolIds ?? []) expect(toolIds, testCase.case_id).toContain(toolId);
			for (const productId of argumentsValue.productIds ?? []) expect(compressorIds.has(productId) || toolIds.has(productId), testCase.case_id).toBe(true);
			for (const system of argumentsValue.systems ?? []) {
				expect(compressorIds, testCase.case_id).toContain(system.compressorId);
				for (const toolId of system.toolIds) expect(toolIds, testCase.case_id).toContain(toolId);
			}
		}
	});

	it('requires two complete model-client-tokenizer profiles and 80% calculable success', () => {
		const report = evaluateMcpAgentSelection(benchmark, [...referenceSubmissions('model-a', 'tokenizer-a'), ...referenceSubmissions('model-b', 'tokenizer-b')]);
		expect(report).toMatchObject({ modelCount: 2, requiredModelCount: 2, eligible: true });
		expect(report.models.every((model: any) => model.calculable_task_success_rate === 1 && model.contract_misunderstood_insufficient_data === 0)).toBe(true);
	});

	it('rejects insufficient_data caused by a misunderstood contract', () => {
		const submissions = [...referenceSubmissions('model-a', 'tokenizer-a'), ...referenceSubmissions('model-b', 'tokenizer-b')];
		submissions[0] = { ...submissions[0], result: { status: 'insufficient_data', reason_code: 'contract_misunderstood' } };
		const report = evaluateMcpAgentSelection(benchmark, submissions);
		expect(report.eligible).toBe(false);
		expect(report.models[0].contract_misunderstood_insufficient_data).toBe(1);
	});
});
