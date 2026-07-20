import { describe, expect, it } from 'vitest';
import { outputSchemas } from './mcp-output-schemas.mjs';
import { createMcpCore } from './mcp-core.mjs';
import { compressors, tools } from '../src/data/catalog';

function inspect(schema: any, path = '$') {
	if (!schema || typeof schema !== 'object' || Array.isArray(schema)) return [];
	const errors: string[] = [];
	const objectType = schema.type === 'object' || (Array.isArray(schema.type) && schema.type.includes('object'));
	if (objectType && schema.additionalProperties !== false && !(schema.additionalProperties && typeof schema.additionalProperties === 'object')) errors.push(`${path} is an open object`);
	for (const [key, value] of Object.entries(schema)) {
		if (key === 'additionalProperties' && value === false) continue;
		if (Array.isArray(value)) value.forEach((item, index) => errors.push(...inspect(item, `${path}.${key}[${index}]`)));
		else errors.push(...inspect(value, `${path}.${key}`));
	}
	return errors;
}

function validate(schema: any, value: any, path = '$'): string[] {
	if (!schema || typeof schema !== 'object') return [];
	if (schema.oneOf) {
		const matches = schema.oneOf.map((candidate: any) => validate(candidate, value, path)).filter((errors: string[]) => errors.length === 0);
		return matches.length === 1 ? [] : [`${path} matches ${matches.length} oneOf branches`];
	}
	if (Object.hasOwn(schema, 'const') && value !== schema.const) return [`${path} != const`];
	if (schema.enum && !schema.enum.includes(value)) return [`${path} is outside enum`];
	const types = Array.isArray(schema.type) ? schema.type : schema.type ? [schema.type] : [];
	if (types.length) {
		const actual = value === null ? 'null' : Array.isArray(value) ? 'array' : Number.isInteger(value) ? 'integer' : typeof value;
		const accepted = types.includes(actual) || (actual === 'integer' && types.includes('number'));
		if (!accepted) return [`${path} has type ${actual}, expected ${types.join('|')}`];
	}
	if (Array.isArray(value)) return value.flatMap((item, index) => validate(schema.items, item, `${path}[${index}]`));
	if (value && typeof value === 'object') {
		const errors: string[] = [];
		for (const key of schema.required ?? []) if (!Object.hasOwn(value, key) || value[key] === undefined) errors.push(`${path}.${key} is required`);
		for (const [key, item] of Object.entries(value)) {
			if (item === undefined) { errors.push(`${path}.${key} is undefined`); continue; }
			if (schema.properties?.[key]) errors.push(...validate(schema.properties[key], item, `${path}.${key}`));
			else if (schema.additionalProperties === false) errors.push(`${path}.${key} is not declared`);
			else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') errors.push(...validate(schema.additionalProperties, item, `${path}.${key}`));
		}
		return errors;
	}
	return [];
}

describe('MCP tool-specific output schemas', () => {
	it('publishes one closed schema per tool without additionalProperties=true', () => {
		expect(Object.keys(outputSchemas)).toHaveLength(20);
		expect(new Set(Object.values(outputSchemas)).size).toBe(20);
		for (const [name, schema] of Object.entries(outputSchemas)) expect(inspect(schema), name).toEqual([]);
	});

	it('strictly types the decision-critical nested structures', () => {
		for (const name of ['check_compatibility', 'build_complete_air_system', 'explain_compatibility_verdict', 'get_compatibility_evidence', 'evaluate_air_compatibility']) {
			const properties: any = (outputSchemas as Record<string, any>)[name].properties;
			expect(properties.air_supply_verdict.additionalProperties, name).toBe(false);
			expect(properties.overall_system_verdict.additionalProperties, name).toBe(false);
			expect(properties.compatibility_receipt.additionalProperties, name).toBe(false);
		}
		expect(outputSchemas.evaluate_air_compatibility.properties.mandatory_accessories.additionalProperties).toBe(false);
		expect(outputSchemas.evaluate_air_compatibility.properties.airgraph.additionalProperties).toBe(false);
		expect(outputSchemas.find_compatible_alternatives.properties.alternatives.items.additionalProperties).toBe(false);
	});

	it('accepts the real structured output of every tool without undeclared fields', () => {
		const fixedFlowTool = tools.find((item) => item.demandModel === 'fixed-flow')!;
		const firstCompressor = compressors[0]!;
		const secondCompressor = compressors[1]!;
		const catalog = { catalogVersion: 'contract-test', schemaVersion: '2.0.0', verifiedAt: '2026-07-15', compressors, tools };
		const options = {
			knowledgeItems: [{ id: 'guide:test:fr', type: 'Guide', locale: 'fr', title: 'Débit FAD', description: 'Guide test', url: 'https://compatair.fr/guides/test/', keywords: 'débit FAD', observed_at: '2026-07-15', source_urls: ['https://manufacturer.example/manual'], content_sha256: 'a'.repeat(64), translation: { status: 'source' } }],
			isOfferActive: () => true,
		};
		const profiles = ['core', 'extended', 'legacy'].map((profile) => createMcpCore(catalog, { snapshotVersion: 'offers-test', offers: [{ id: 'offer-a', productId: firstCompressor.id, url: 'https://merchant.example/unsafe' }] }, { ...options, profile: profile as 'core'|'extended'|'legacy' }));
		const call = (name: string, args: unknown) => profiles.find((candidate) => candidate.handle({ jsonrpc: '2.0', id: 'list', method: 'tools/list' })!.result.tools.some((tool: any) => tool.name === name))!.handle({ jsonrpc: '2.0', id: name, method: 'tools/call', params: { name, arguments: args } });
		const calls: Record<string, unknown> = {
			orient_decision: { goal: 'evaluate' },
			search_tools: {}, get_tool_requirements: { id: fixedFlowTool.id }, search_compressors: {}, get_compressor_specs: { id: firstCompressor.id },
			size_compressor: { demands: [{ flowLpm: 100, pressureBar: 6 }] }, check_compatibility: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id },
			compare_compressors: { ids: [firstCompressor.id, secondCompressor.id] }, find_accessories: { toolId: fixedFlowTool.id }, find_offers: { productId: firstCompressor.id },
			identify_product: { reference: `ca:tool:${fixedFlowTool.id}` }, build_complete_air_system: { toolIds: [fixedFlowTool.id], compressorId: firstCompressor.id },
			explain_compatibility_verdict: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id }, find_compatible_alternatives: { compressorId: firstCompressor.id, toolIds: [fixedFlowTool.id] },
			compare_complete_systems: { systems: [{ compressorId: firstCompressor.id, toolIds: [fixedFlowTool.id] }, { compressorId: secondCompressor.id, toolIds: [fixedFlowTool.id] }] },
			get_compatibility_evidence: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id }, search_knowledge: { query: 'fad' },
			get_current_offers: { productIds: [firstCompressor.id] }, get_changefeed: {},
			evaluate_air_compatibility: { meta: { 'ucp-agent': { profile: 'https://compatair.fr/examples/ucp/platform-profile.json' } }, ucp: { version: '2026-04-08' }, intent: 'will_it_work', configuration: { compressor: { id: firstCompressor.id }, tools: [{ id: fixedFlowTool.id }], mode: 'successive' } },
		};
		for (const [name, args] of Object.entries(calls)) {
			const response: any = call(name, args);
			expect(response.result.isError, name).not.toBe(true);
			expect(validate((outputSchemas as Record<string, any>)[name], response.result.structuredContent), name).toEqual([]);
		}
	});
});
