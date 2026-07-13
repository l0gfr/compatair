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
});
