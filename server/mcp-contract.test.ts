import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { createMcpCore } from './mcp-core.mjs';

const manifest = JSON.parse(readFileSync(new URL('../server.json', import.meta.url), 'utf8'));
const resultSchema = JSON.parse(readFileSync(new URL('../contracts/mcp/schemas/result.schema.json', import.meta.url), 'utf8'));
const llms = readFileSync(new URL('../public/llms.txt', import.meta.url), 'utf8');
const llmsFull = readFileSync(new URL('../public/llms-full.txt', import.meta.url), 'utf8');

describe('MCP public publication contract', () => {
	it('declares the public Streamable HTTP remote with the current registry schema', () => {
		expect(manifest).toMatchObject({
			$schema: 'https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json',
			name: 'io.github.bluetouff/compatair', version: '3.0.0',
			remotes: [{ type: 'streamable-http', url: 'https://compatair.fr/mcp' }],
		});
		expect(manifest).not.toHaveProperty('packages');
	});

	it('keeps the manifest version aligned with MCP initialize', () => {
		const core = createMcpCore({ catalogVersion: 'test', verifiedAt: '2026-07-15', compressors: [], tools: [] });
		const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-11-25' } });
		expect(response.result.serverInfo.version).toBe(manifest.version);
	});

	it('publishes the mandatory envelope and agent interpretation rules', () => {
		expect(resultSchema.required).toEqual(expect.arrayContaining(['verdict', 'verdict_scope', 'verdict_schema_version', 'canonical_url', 'source_urls', 'limitations', 'next_actions']));
		expect(llms).toContain('https://compatair.fr/mcp');
		expect(llms).toContain('canonical_url');
		expect(llmsFull).toContain('identify_product');
		expect(llmsFull).toContain('get_changefeed');
		expect(llmsFull).toContain('evaluate_air_compatibility');
		expect(llmsFull).toContain('fr.compatair.air.compatibility');
		expect(llms).toContain('https://compatair.fr/.well-known/ucp');
		expect(llmsFull).toContain('Never present intake displacement as delivered free air');
	});
});
