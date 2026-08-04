import { describe, expect, it } from 'vitest';
import { aggregateMcpTelemetry, buildPublicMcpUsageReport, callerFingerprint, classifyMcpClient, classifyMcpErrorCode, classifyMcpOutcome, classifyMcpOutcomes, classifyMcpTrafficHint, createMcpTelemetryStore, extractMcpDemand, mcpRequestFingerprint, truncateNetworkAddress } from './mcp-telemetry.mjs';

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
		expect(callerFingerprint(Buffer.alloc(32, 1), '192.0.2.42', `Agent/${'1.'.repeat(100_000)}1`)).toMatch(/^[a-f0-9]{64}$/);
	});

	it('classifies tool outcomes without treating incompatibility as an execution error', () => {
		expect(classifyMcpOutcome({ result: { structuredContent: { verdict: 'incompatible' }, isError: false } })).toBe('success');
		expect(classifyMcpOutcome({ result: { structuredContent: { verdict: 'insufficient_data' }, isError: false } })).toBe('insufficient_data');
		expect(classifyMcpOutcome({ error: { code: -32602 } })).toBe('error');
		expect(classifyMcpOutcomes({ result: { structuredContent: { verdict: 'insufficient_data', air_supply_verdict: { verdict: 'compatible' }, overall_system_verdict: { verdict: 'insufficient_data' } }, isError: false } })).toEqual({ primary: 'insufficient_data', air_supply: 'success', complete_air_system: 'insufficient_data' });
		expect(classifyMcpErrorCode({ error: { code: -32602 } })).toBe('jsonrpc_-32602');
		expect(classifyMcpErrorCode({ result: { structuredContent: { error: { code: 'invalid_arguments' } }, isError: true } })).toBe('tool_invalid_arguments');
		expect(classifyMcpErrorCode({ result: { structuredContent: { verdict: 'compatible' }, isError: false } })).toBeNull();
		expect(classifyMcpTrafficHint('CompatAir deployment smoke')).toBe('smoke_ci');
		expect(classifyMcpTrafficHint('CompatAir MCP profile contract smoke')).toBe('smoke_ci');
		expect(classifyMcpTrafficHint('Mozilla/5.0')).toBeUndefined();
		expect(mcpRequestFingerprint(Buffer.alloc(32, 2), 'evaluate_air_compatibility', { b: 2, a: 1 })).toBe(mcpRequestFingerprint(Buffer.alloc(32, 2), 'evaluate_air_compatibility', { a: 1, b: 2 }));
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
		state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: actor, toolName: 'check_compatibility', outcome: 'insufficient_data', scopedOutcomes: { air_supply: 'success', complete_air_system: 'insufficient_data' }, profile: 'legacy', requestHash: 'b'.repeat(64), canonicalIssued: true, products: [{ type: 'compressor', id: 'compressor-a' }, { type: 'tool', id: 'tool-a' }], compatibilities: [{ compressorId: 'compressor-a', toolId: 'tool-a' }] }, new Date('2026-07-13T12:01:00Z'));
		state = aggregateMcpTelemetry(state, { type: 'canonical_follow', actorId: actor, toolName: 'check_compatibility' }, new Date('2026-07-14T12:00:00Z'));
		expect(state.totalEvents).toBe(3);
		expect(state.weeks[0]).toMatchObject({ initializations: 1, calls: 1, clientInfoDeclared: 1, outcomes: { success: 0, insufficient_data: 1, error: 0 }, traffic: { plausible_session: 1 }, scopedOutcomes: { air_supply: { success: 1 }, complete_air_system: { insufficient_data: 1 } }, canonicalFollows: 1 });
		expect(buildPublicMcpUsageReport(state, catalog).tool_outcome_breakdown).toEqual([
			{ traffic_class: 'plausible_session', tool: 'check_compatibility', outcome: 'insufficient_data', error_code: null, calls: 1 },
		]);
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
		expect(report.decision_usage).toEqual({ tool_calls: 10, share_of_all_calls: 1 });
		expect(report.products).toEqual([{ type: 'tool', id: 'tool-a', requests: 10, label: 'Clé A' }]);
	});

	it('separates deployment smoke and automatic retries from plausible decision usage', () => {
		let state: any = empty;
		state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: actor, toolName: 'evaluate_air_compatibility', outcome: 'insufficient_data', trafficHint: 'smoke_ci', requestHash: 'c'.repeat(64), products: [], compatibilities: [] }, new Date('2026-07-13T12:00:00Z'));
		state = aggregateMcpTelemetry(state, { type: 'tool_call', actorId: actor, toolName: 'evaluate_air_compatibility', outcome: 'insufficient_data', requestHash: 'c'.repeat(64), products: [], compatibilities: [] }, new Date('2026-07-13T12:00:10Z'));
		const report = buildPublicMcpUsageReport(state, catalog);
		expect(report.traffic_classes).toMatchObject({ smoke_ci: 1, automatic_retry: 1, plausible_session: 0 });
		expect(report.decision_usage.tool_calls).toBe(0);
		expect(report.tool_outcome_breakdown).toEqual([
			{ traffic_class: 'automatic_retry', tool: 'evaluate_air_compatibility', outcome: 'insufficient_data', error_code: null, calls: 1 },
			{ traffic_class: 'smoke_ci', tool: 'evaluate_air_compatibility', outcome: 'insufficient_data', error_code: null, calls: 1 },
		]);
	});

	it('keeps pre-2.1 calls explicitly unclassified instead of inferring a joint distribution', () => {
		const historical = {
			schemaVersion: '2.0.0', updatedAt: '2026-07-13T12:00:00.000Z', totalEvents: 1,
			weeks: [{
				week: '2026-07-13', initializations: 0, calls: 1, clientInfoDeclared: 0,
				outcomes: { success: 0, insufficient_data: 0, error: 1 },
				traffic: { smoke_ci: 0, automatic_retry: 0, probe: 0, plausible_session: 0, unknown: 1, historical_unclassified: 0 },
				scopedOutcomes: { air_supply: { success: 0, insufficient_data: 0, error: 0 }, complete_air_system: { success: 0, insufficient_data: 0, error: 0 } },
				canonicalFollows: 0, clients: [],
				tools: [{
					name: 'orient_decision', calls: 1, outcomes: { success: 0, insufficient_data: 0, error: 1 },
					traffic: { smoke_ci: 0, automatic_retry: 0, probe: 0, plausible_session: 0, unknown: 1, historical_unclassified: 0 },
					scopedOutcomes: { air_supply: { success: 0, insufficient_data: 0, error: 0 }, complete_air_system: { success: 0, insufficient_data: 0, error: 0 } },
					profiles: { core: 1 }, canonicalIssued: 0, canonicalFollows: 0,
				}],
				products: [], compatibilities: [],
			}],
			actors: [{
				id: actor, firstSeen: '2026-07-13T12:00:00.000Z', lastSeen: '2026-07-13T12:00:00.000Z',
				days: ['2026-07-13'], initializations: 0, calls: 1, clients: [],
				lastRequestHash: null, lastRequestAt: '2026-07-13T12:00:00.000Z', repeatedRequestCount: 1,
			}],
		};
		const report = buildPublicMcpUsageReport(historical, catalog);
		expect(report.schema_version).toBe('2.1.0');
		expect(report.tool_outcome_breakdown).toEqual([
			{ traffic_class: 'historical_unclassified', tool: 'orient_decision', outcome: 'unclassified', error_code: 'not_recorded', calls: 1 },
		]);
	});

	it('preserves every tool call when concurrent writes are coalesced', async () => {
		const store = createMcpTelemetryStore({ catalog, configuredSecret: 'test-secret-with-at-least-sixteen-bytes', clock: () => new Date('2026-07-15T12:00:00Z') });
		await Promise.all(Array.from({ length: 25 }, () => store.record({ type: 'tool_call', actorId: actor, toolName: 'check_compatibility', outcome: 'success', canonicalIssued: true, products: [], compatibilities: [] })));
		expect(await store.snapshot()).toMatchObject({ totalEvents: 25, weeks: [{ calls: 25, outcomes: { success: 25 } }], actors: [{ id: actor, calls: 25 }] });
	});
});
