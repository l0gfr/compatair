import { describe, expect, it } from 'vitest';
import { createMcpCore } from './mcp-core.mjs';
import { compressors, tools } from '../src/data/catalog';
const catalog = { catalogVersion: 'test', schemaVersion: '1.0.0', verifiedAt: '2026-07-13', compressors, tools };
function createTestCore(catalogValue: any, offers?: any, options: any = {}) {
	const profiles = ['core', 'extended', 'legacy'].map((profile) => createMcpCore(catalogValue, offers, { ...options, profile }));
	return {
		profiles,
		handle(message: any) {
			if (message.method !== 'tools/call') return profiles[0].handle(message);
			return profiles.find((candidate) => candidate.handle({ jsonrpc: '2.0', id: 'list', method: 'tools/list' })?.result.tools.some((tool: any) => tool.name === message.params?.name))?.handle(message);
		},
	};
}
const core = createTestCore(catalog);
describe('MCP core', () => {
	it('negotiates the current protocol and capabilities', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-11-25' } }); expect(response.result.protocolVersion).toBe('2025-11-25'); expect(response.result.serverInfo.version).toBe('3.0.0'); expect(response.result.capabilities.tools).toBeDefined(); });
	it('negotiates a supported legacy protocol without lying to the client', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 15, method: 'initialize', params: { protocolVersion: '2025-06-18' } }); expect(response.result.protocolVersion).toBe('2025-06-18'); });
	it('lists a compact decision core and separates extended and legacy tools', () => {
		const [decisionCore, extended, legacy] = core.profiles.map((profile: any) => profile.handle({ jsonrpc: '2.0', id: 2, method: 'tools/list' }).result.tools);
		expect(decisionCore).toHaveLength(7);
		expect(decisionCore.map((tool: any) => tool.name)).toEqual(['orient_decision', 'evaluate_air_compatibility', 'identify_product', 'build_complete_air_system', 'find_compatible_alternatives', 'search_knowledge', 'get_current_offers']);
		expect(decisionCore.find((tool: any) => tool.name === 'build_complete_air_system').description).toContain('real network pressure loss is verified');
		expect(extended).toHaveLength(4);
		expect(legacy).toHaveLength(9);
		expect([...decisionCore, ...extended, ...legacy].every((tool: any) => tool.annotations.readOnlyHint && tool.outputSchema.required.includes('canonical_url'))).toBe(true);
		expect(legacy.find((tool: any) => tool.name === 'check_compatibility')._meta['fr.compatair/successor']).toBe('evaluate_air_compatibility');
	});
	it('keeps exhaustive contracts and profile discovery in MCP resources', () => {
		const profile: any = core.handle({ jsonrpc: '2.0', id: 21, method: 'resources/read', params: { uri: 'compatair://tools/core-profile' } });
		const profileValue = JSON.parse(profile.result.contents[0].text);
		expect(profileValue).toMatchObject({ profile: 'decision-core', endpoints: { core: 'https://compatair.fr/mcp', extended: 'https://compatair.fr/mcp/extended', legacy: 'https://compatair.fr/mcp/legacy' } });
		expect(profileValue.tools).toHaveLength(7);
		const schemas: any = core.handle({ jsonrpc: '2.0', id: 22, method: 'resources/read', params: { uri: 'compatair://responses/schema' } });
		expect(Object.keys(JSON.parse(schemas.result.contents[0].text).outputSchemas)).toHaveLength(20);
	});
	it('preserves insufficient_data for an undocumented FAD', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: 'abac-pole-position-os20p', toolId: 'einhell-tc-pe-150' } } }); expect(response.result.structuredContent.compatibility).toMatchObject({ schema_version: '2.0.0', scope: 'air_supply', verdict: 'insufficient_data' }); });
	it('does not return fabricated offers', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 4, method: 'tools/call', params: { name: 'find_offers', arguments: { productId: 'x' } } }); expect(response.result.structuredContent.offers).toEqual([]); });
	it('applies the HTTP offer activity policy before returning MCP offers', () => {
		const filteredCore = createTestCore(catalog, { snapshotVersion: 'test', offers: [{ id: 'active', productId: 'x' }, { id: 'rejected', productId: 'x' }] }, { isOfferActive: (offer: { id: string }) => offer.id === 'active' });
		const response: any = filteredCore.handle({ jsonrpc: '2.0', id: 41, method: 'tools/call', params: { name: 'find_offers', arguments: { productId: 'x' } } });
		expect(response.result.structuredContent.offers).toEqual([{ id: 'active', productId: 'x', url: 'https://compatair.fr/go/active' }]);
	});
	it('sizes a per-action demand only from an explicit cadence', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 5, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ model: 'per-action', litersPerAction: .66, actionsPerMinute: 30, pressureBar: 6.3 }] } } });
		expect(response.result.structuredContent.engineVersion).toBe('1.3.0');
		expect(response.result.structuredContent.sizing.peakFlowLpm).toBeCloseTo(19.8, 10);
		expect(response.result.structuredContent.sizing.flowBasis).toBe('derived-average');
	});
	it('sizes inflation from explicit volume, pressures and time', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 6, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ model: 'inflation', volumeLiters: 40, initialPressureBar: 0, targetPressureBar: 2.5, targetMinutes: 1 }] } } });
		expect(response.result.structuredContent.sizing.peakFlowLpm).toBeCloseTo(98.6923, 4);
		expect(response.result.structuredContent.sizing.requiredPressureBar).toBe(2.5);
	});
	it('rejects an inflation target below the initial pressure', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 7, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ model: 'inflation', volumeLiters: 40, initialPressureBar: 3, targetPressureBar: 2.5, targetMinutes: 1 }] } } });
		expect(response.result.isError).toBe(true);
	});
	it('enforces the advertised limits instead of trusting the JSON schema alone', () => {
		const tooManyDemands = Array.from({ length: 21 }, () => ({ flowLpm: 100, pressureBar: 6 }));
		const response: any = core.handle({ jsonrpc: '2.0', id: 8, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: tooManyDemands, safetyMargin: -1 } } });
		expect(response.result.isError).toBe(true);
		expect(response.result.structuredContent.error).toEqual({ code: 'invalid_arguments', message: 'Arguments invalides.', scope: 'request', retryable: false });
	});
	it('rejects unexpected properties and non-finite-equivalent input shapes', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 9, method: 'tools/call', params: { name: 'search_compressors', arguments: { query: 'test', constructor: 'unexpected' } } });
		expect(response.result.isError).toBe(true);
	});
	it('includes only explicit measured leak and pressure drop in sizing', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 10, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ flowLpm: 100, pressureBar: 6 }], measuredLeakLpm: 15, measuredPressureDropBar: .7 } } });
		expect(response.result.structuredContent.sizing).toMatchObject({ peakFlowLpm: 115, averageFlowLpm: 115, toolPressureBar: 6, requiredPressureBar: 6.7, measuredLeakLpm: 15, measuredPressureDropBar: .7 });
	});
	it('returns the mandatory traffic and evidence envelope for every tool result', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 11, method: 'tools/call', params: { name: 'get_tool_requirements', arguments: { id: 'einhell-tc-pe-150' } } });
		expect(response.result.structuredContent).toMatchObject({
			canonical_url: expect.stringMatching(/^https:\/\/compatair\.fr\/outils-pneumatiques\//),
			method_version: '2026.07', catalog_version: 'test', observed_at: '2026-07-13', limitations: [],
		});
		expect(response.result.structuredContent.source_urls.length).toBeGreaterThan(0);
	});
	it('materializes the mandatory envelope on every profiled tool execution', () => {
		const fixedFlowTool = tools.find((item) => item.demandModel === 'fixed-flow')!;
		const firstCompressor = compressors[0]!;
		const secondCompressor = compressors[1]!;
		const calls: Record<string, unknown> = {
			orient_decision: { goal: 'evaluate' },
			search_tools: {}, get_tool_requirements: { id: fixedFlowTool.id }, search_compressors: {}, get_compressor_specs: { id: firstCompressor.id },
			size_compressor: { demands: [{ flowLpm: 100, pressureBar: 6 }] }, check_compatibility: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id },
			compare_compressors: { ids: [firstCompressor.id, secondCompressor.id] }, find_accessories: { toolId: fixedFlowTool.id }, find_offers: { productId: firstCompressor.id },
			identify_product: { reference: `ca:tool:${fixedFlowTool.id}` }, build_complete_air_system: { toolIds: [fixedFlowTool.id], compressorId: firstCompressor.id },
			explain_compatibility_verdict: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id }, find_compatible_alternatives: { compressorId: firstCompressor.id, toolIds: [fixedFlowTool.id] },
			compare_complete_systems: { systems: [{ compressorId: firstCompressor.id, toolIds: [fixedFlowTool.id] }, { compressorId: secondCompressor.id, toolIds: [fixedFlowTool.id] }] },
			get_compatibility_evidence: { compressorId: firstCompressor.id, toolId: fixedFlowTool.id }, search_knowledge: { query: 'débit' },
			get_current_offers: { productIds: [firstCompressor.id] }, get_changefeed: {},
			evaluate_air_compatibility: {
				meta: { 'ucp-agent': { profile: 'https://compatair.fr/examples/ucp/platform-profile.json' } },
				ucp: { version: '2026-04-08' }, intent: 'will_it_work',
				configuration: { compressor: { id: firstCompressor.id }, tools: [{ id: fixedFlowTool.id }], mode: 'successive' },
			},
		};
		const required = ['verdict', 'canonical_url', 'product_urls', 'source_urls', 'method_version', 'catalog_version', 'observed_at', 'limitations', 'next_actions'];
		for (const [name, args] of Object.entries(calls)) {
			const response: any = core.handle({ jsonrpc: '2.0', id: name, method: 'tools/call', params: { name, arguments: args } });
			expect(response.result?.structuredContent, name).toBeDefined();
			for (const field of required) expect(response.result.structuredContent, `${name}:${field}`).toHaveProperty(field);
			expect(response.result.structuredContent.canonical_url, name).toMatch(/^https:\/\/compatair\.fr\//);
		}
		expect(Object.keys(calls)).toHaveLength(20);
	});
	it('identifies an exact EAN without fetching the supplied URL', () => {
		const product = tools.find((item) => item.ean)!;
		const response: any = core.handle({ jsonrpc: '2.0', id: 12, method: 'tools/call', params: { name: 'identify_product', arguments: { ean: product.ean } } });
		expect(response.result.structuredContent.matches).toContainEqual(expect.objectContaining({ id: product.id, match_confidence: 'exact', compat_air_id: `ca:tool:${product.id}` }));
	});
	it('identifies a full stable CompatAir ID', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 16, method: 'tools/call', params: { name: 'identify_product', arguments: { reference: 'ca:tool:einhell-tc-pe-150' } } });
		expect(response.result.structuredContent.matches).toContainEqual(expect.objectContaining({ id: 'einhell-tc-pe-150', match_confidence: 'exact' }));
	});
	it('identifies an evidenced distributor SKU exactly', () => {
		const product = compressors.find((item) => item.distributorSkus.length)!;
		const response: any = core.handle({ jsonrpc: '2.0', id: 17, method: 'tools/call', params: { name: 'identify_product', arguments: { reference: product.distributorSkus[0].sku } } });
		expect(response.result.structuredContent.matches).toContainEqual(expect.objectContaining({ id: product.id, match_confidence: 'exact', distributor_skus: expect.arrayContaining([expect.objectContaining({ sku: product.distributorSkus[0].sku })]) }));
	});
	it('builds only documented AirGraph nodes and keeps missing network components explicit', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 13, method: 'tools/call', params: { name: 'build_complete_air_system', arguments: { toolIds: ['einhell-tc-pe-150'], mode: 'successive', limit: 2 } } });
		expect(response.result.structuredContent.configuration_id).toMatch(/^ca:configuration:[a-f0-9]{24}$/);
		expect(response.result.structuredContent.airgraph.nodes.some((node: any) => node.id === 'ca:tool:einhell-tc-pe-150')).toBe(true);
		expect(response.result.structuredContent.airgraph.nodes.some((node: any) => node.type === 'tank_volume')).toBe(true);
		expect(response.result.structuredContent.verdict).toBe('insufficient_data');
		expect(response.result.structuredContent).toMatchObject({ verdict_scope: 'complete_air_system', overall_system_verdict: { scope: 'complete_air_system', verdict: 'insufficient_data' }, air_supply_verdict: { scope: 'air_supply' } });
		expect(response.result.structuredContent.compatibility_receipt).toMatchObject({ schema_version: '1.0.0', configuration_id: response.result.structuredContent.configuration_id, integrity: { algorithm: 'sha-256' } });
		expect(response.result.structuredContent.limitations.every((item: unknown) => typeof item === 'string')).toBe(true);
	});
	it('does not propose a compressor substitution when the current air chain already covers the demand', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 18, method: 'tools/call', params: { name: 'find_compatible_alternatives', arguments: { compressorId: 'kaeser-eurocomp-epc-840-100', toolIds: ['einhell-tc-pe-150'], mode: 'successive' } } });
		expect(response.result.structuredContent.current.verdict).toBe('continuous');
		expect(response.result.structuredContent.alternatives).toEqual([]);
		expect(response.result.structuredContent.next_actions).toEqual([]);
	});
	it('drops non-CompatAir knowledge URLs even when the local index is compromised', () => {
		const isolated = createMcpCore(catalog, undefined, { knowledgeItems: [{ title: 'Danger', type: 'Guide', url: 'https://attacker.example/phish', keywords: 'danger' }] });
		const response: any = isolated.handle({ jsonrpc: '2.0', id: 17, method: 'tools/call', params: { name: 'search_knowledge', arguments: { query: 'danger' } } });
		expect(response.result.structuredContent.items).toEqual([]);
		expect(response.result.structuredContent.canonical_url).toBe('https://compatair.fr/recherche/');
	});
	it('uses the published verdict snapshot as the default compatibility authority', () => {
		const snapshotCore = createTestCore(catalog, undefined, { verdictSnapshot: { pairs: [{ compressorId: 'abac-pole-position-os20p', toolId: 'einhell-tc-pe-150', verdict: 'incompatible', limitingFactor: 'flow', calculationVersion: '1.2.0' }] } });
		const response: any = snapshotCore.handle({ jsonrpc: '2.0', id: 14, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: 'abac-pole-position-os20p', toolId: 'einhell-tc-pe-150' } } });
		expect(response.result.structuredContent.compatibility).toMatchObject({ scope: 'air_supply', verdict: 'incompatible', limiting_factor: 'flow' });
	});
	it('never exposes an unscoped nested verdict in UCP', () => {
		const firstCompressor = compressors[0]!;
		const fixedFlowTool = tools.find((item) => item.demandModel === 'fixed-flow')!;
		const response: any = core.handle({ jsonrpc: '2.0', id: 20, method: 'tools/call', params: { name: 'evaluate_air_compatibility', arguments: { meta: { 'ucp-agent': { profile: 'https://compatair.fr/examples/ucp/platform-profile.json' } }, ucp: { version: '2026-04-08' }, configuration: { compressor: { id: firstCompressor.id }, tools: [{ id: fixedFlowTool.id }] } } } });
		expect(response.result.structuredContent).toMatchObject({ verdict_scope: 'complete_air_system', verdict_schema_version: '2.0.0', compatibility: { scope: 'air_supply', schema_version: '2.0.0' }, air_supply_verdict: { scope: 'air_supply' }, overall_system_verdict: { scope: 'complete_air_system' } });
		expect(['continuous', 'intermittent']).not.toContain(response.result.structuredContent.compatibility.verdict);
	});
});
