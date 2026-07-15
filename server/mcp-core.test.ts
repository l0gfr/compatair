import { describe, expect, it } from 'vitest';
import { createMcpCore } from './mcp-core.mjs';
import { compressors, tools } from '../src/data/catalog';
const catalog = { catalogVersion: 'test', schemaVersion: '1.0.0', verifiedAt: '2026-07-13', compressors, tools };
const core = createMcpCore(catalog);
describe('MCP core', () => {
	it('negotiates the protocol and capabilities', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18' } }); expect(response.result.protocolVersion).toBe('2025-06-18'); expect(response.result.capabilities.tools).toBeDefined(); });
	it('lists the nine read-only tools', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 2, method: 'tools/list' }); expect(response.result.tools).toHaveLength(9); expect(response.result.tools.every((tool: any) => tool.annotations.readOnlyHint)).toBe(true); });
	it('preserves insufficient_data for an undocumented FAD', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: 'abac-pole-position-os20p', toolId: 'einhell-tc-pe-150' } } }); expect(response.result.structuredContent.compatibility.verdict).toBe('insufficient_data'); });
	it('does not return fabricated offers', () => { const response: any = core.handle({ jsonrpc: '2.0', id: 4, method: 'tools/call', params: { name: 'find_offers', arguments: { productId: 'x' } } }); expect(response.result.structuredContent.offers).toEqual([]); });
	it('applies the HTTP offer activity policy before returning MCP offers', () => {
		const filteredCore = createMcpCore(catalog, { snapshotVersion: 'test', offers: [{ id: 'active', productId: 'x' }, { id: 'rejected', productId: 'x' }] }, { isOfferActive: (offer: { id: string }) => offer.id === 'active' });
		const response: any = filteredCore.handle({ jsonrpc: '2.0', id: 41, method: 'tools/call', params: { name: 'find_offers', arguments: { productId: 'x' } } });
		expect(response.result.structuredContent.offers).toEqual([{ id: 'active', productId: 'x' }]);
	});
	it('sizes a per-action demand only from an explicit cadence', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 5, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ model: 'per-action', litersPerAction: .66, actionsPerMinute: 30, pressureBar: 6.3 }] } } });
		expect(response.result.structuredContent.engineVersion).toBe('1.2.0');
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
		expect(response.result.structuredContent.error).toBe('Arguments invalides.');
	});
	it('rejects unexpected properties and non-finite-equivalent input shapes', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 9, method: 'tools/call', params: { name: 'search_compressors', arguments: { query: 'test', constructor: 'unexpected' } } });
		expect(response.result.isError).toBe(true);
	});
	it('includes only explicit measured leak and pressure drop in sizing', () => {
		const response: any = core.handle({ jsonrpc: '2.0', id: 10, method: 'tools/call', params: { name: 'size_compressor', arguments: { demands: [{ flowLpm: 100, pressureBar: 6 }], measuredLeakLpm: 15, measuredPressureDropBar: .7 } } });
		expect(response.result.structuredContent.sizing).toMatchObject({ peakFlowLpm: 115, averageFlowLpm: 115, toolPressureBar: 6, requiredPressureBar: 6.7, measuredLeakLpm: 15, measuredPressureDropBar: .7 });
	});
});
