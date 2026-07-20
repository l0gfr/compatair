import { createMcpCore } from '../server/mcp-core.mjs';

const MAX_CORE_BYTES = 50_000;
const catalog = { catalogVersion: 'manifest-budget', verifiedAt: '2026-07-20', compressors: [], tools: [] };
const measurements = {};

for (const profile of ['core', 'extended', 'legacy']) {
	const server = createMcpCore(catalog, undefined, { profile });
	const response = server.handle({ jsonrpc: '2.0', id: 'manifest-budget', method: 'tools/list', params: {} });
	const bytes = Buffer.byteLength(JSON.stringify(response));
	measurements[profile] = { tools: response.result.tools.length, bytes };
}

if (measurements.core.tools < 5 || measurements.core.tools > 7) throw new Error(`decision_core_tool_count_out_of_range:${measurements.core.tools}`);
if (measurements.core.bytes >= MAX_CORE_BYTES) throw new Error(`decision_core_manifest_budget_exceeded:${measurements.core.bytes}`);

console.log(JSON.stringify({ schemaVersion: '1.0.0', maximumCoreBytes: MAX_CORE_BYTES, measurements }, null, 2));
