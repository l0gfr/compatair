import { describe, expect, it } from 'vitest';
import { aggregateMcpTelemetry, buildPublicMcpUsageReport, callerFingerprint, classifyMcpClient, classifyMcpOutcome, extractMcpDemand, truncateNetworkAddress } from './mcp-telemetry.mjs';

const empty = { schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, weeks: [], actors: [] };
const actor = 'a'.repeat(64);
const catalog = {
	compressors: [{ id: 'compressor-a', brand: 'Atlas', model: 'A' }],
	tools: [{ id: 'tool-a', label: 'Clé A' }, { id: 'tool-b', label: 'Ponceuse B' }],
};

describe('MCP privacy-safe telemetry', () => {
	it('classifies only closed client families and truncates network addresses', () => {
		expect(classifyMcpClient({ name: 'Claude Code', version: '1.2.3' })).toBe('claude');
		expect(classifyMcpClient({ name: 'Alice private connector' })).toBe('other');
		expect(classifyMcpClient(undefined)).toBe('undeclared');
		expect(truncateNetworkAddress('192.0.2.42')).toBe('192.0.2.0/24');
		expect(truncateNetworkAddress('2001:db8:1234:abcd::42')).toBe('2001:db8:1234:abcd::/64');
		expect(callerFingerprint(Buffer.alloc(32, 1), '192.0.2.42', 'Agent/1.2.3')).toMatch(/^[a-f0-9]{64}$/);
		expect(callerFingerprint(Buffer.alloc(32, 1), '192.0.2.99', 'Agent/9.8.7')).toBe(callerFingerprint(Buffer.alloc(32, 1), '192.0.2.42', 'Agent/1.2.3'));
	});

	it('classifies tool outcomes without treating incompatibility as an execution error', () => {
		expect(classifyMcpOutcome({ result: { structuredContent: { verdict: 'incompatible' }, isError: false } })).toBe('success');
		expect(classifyMcpOutcome({ result: { structuredContent: { verdict: 'insufficient_data' }, isError: false } })).toBe('insufficient_data');
		expect(classifyMcpOutcome({ error: { code: -32602 } })).toBe('error');
	});

	it('extracts only catalog-backed products and compatibility pairs', () => {
		expect(extractMcpDemand('build_complete_air_system', { compressorId: 'compressor-a', toolIds: ['tool-a', 'unknown'] }, {}, catalog)).toEqual({
			products: [{ type: 'compressor', id: 'compressor-a' }, { type: 'tool', id: 'tool-a' }],
			compatibilities: [{ compressorId: 'compressor-a', toolId: 'tool-a' }],
		});
		expect(extractMcpDemand('identify_product', { query: 'private text' }, { matches: [{ type: 'tool', id: 'tool-b', match_confidence: 'exact' }] }, catalog).products).toEqual([{ type: 'tool', id: 'tool-b' }]);
	});

	it('counts initializations, tool outcomes, demand and attributed canonical follows', () => {
		let state: any = aggregateMcpTelemetry(empty, { type: 'initialize', actorId: actor, clientFamily: 'claude' }, new Date('2026-07-13T12:00:00Z'));
		state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: actor, toolName: 'check_compatibility', outcome: 'insufficient_data', canonicalIssued: true, products: [{ type: 'compressor', id: 'compressor-a' }, { type: 'tool', id: 'tool-a' }], compatibilities: [{ compressorId: 'compressor-a', toolId: 'tool-a' }] }, new Date('2026-07-13T12:01:00Z'));
		state = aggregateMcpTelemetry(state, { type: 'canonical_follow', actorId: actor, toolName: 'check_compatibility' }, new Date('2026-07-14T12:00:00Z'));
		expect(state.totalEvents).toBe(3);
		expect(state.weeks[0]).toMatchObject({ initializations: 1, calls: 1, clientInfoDeclared: 1, outcomes: { success: 0, insufficient_data: 1, error: 0 }, canonicalFollows: 1 });
		expect(state.actors[0].days).toEqual(['2026-07-13', '2026-07-14']);
	});

	it('withholds small public cohorts and publishes recurring estimates only past the threshold', () => {
		let state: any = empty;
		for (let index = 0; index < 5; index++) {
			const id = index.toString(16).padStart(64, '0');
			state = aggregateMcpTelemetry(state, { type: 'initialize', actorId: id, clientFamily: 'claude' }, new Date('2026-07-13T12:00:00Z'));
			state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: id, toolName: 'check_compatibility', outcome: 'success', canonicalIssued: true, products: [{ type: 'tool', id: 'tool-a' }], compatibilities: [] }, new Date('2026-07-13T12:01:00Z'));
			state = aggregateMcpTelemetry(state, { type: 'initialize', actorId: id, clientFamily: 'claude' }, new Date('2026-07-14T12:00:00Z'));
			state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: id, toolName: 'check_compatibility', outcome: 'success', canonicalIssued: true, products: [{ type: 'tool', id: 'tool-a' }], compatibilities: [] }, new Date('2026-07-14T12:01:00Z'));
		}
		const report = buildPublicMcpUsageReport(state, catalog);
		expect(report.totals).toMatchObject({ initializations: 10, tool_calls: 10, estimated_callers: 5, recurrent_callers: 5, recurrent_integrations: 5 });
		expect(report.clients).toEqual([{ family: 'claude', initializations: 10 }]);
		expect(report.products).toEqual([{ type: 'tool', id: 'tool-a', requests: 10, label: 'Clé A' }]);
	});
});
