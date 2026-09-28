import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createCompatAirServer } from './mcp-server.mjs';
import { evaluateCompatibility } from './air-compatibility.mjs';
import { explainDecisionDataGap } from '../src/domain/decision-resolution';

// Catalog HTTP accepts exact IDs, not custom regulation configurations.
const base = { id: 'fixture-c', slug: 'fixture-c', brand: 'Fixture', model: 'C', confidence: 'A', maxPressureBar: 10, tankLiters: 50, fadCurve: [{ pressureBar: 6.3, litersPerMinute: 200 }], evidence: [], dutyCycle: 1 };
const compressors = [base, { ...base, id: 'fixture-cycle', dutyCycle: undefined }, { ...base, id: 'fixture-deficit', fadCurve: [{ pressureBar: 6.3, litersPerMinute: 60 }] }];
const tool = { id: 'fixture-tool', slug: 'fixture-tool', label: 'Fixture', confidence: 'A', demandModel: 'fixed-flow', airflowBasis: 'continuous', airflowLpm: { typical: 100 }, workingPressureBar: { typical: 6.3 }, evidence: [] };

describe('V3 real loopback HTTP boundary', () => {
	const pairs = compressors.map(compressor => ({ compressorId: compressor.id, toolId: tool.id, ...evaluateCompatibility(compressor as never, tool as never) }));
	const server = createCompatAirServer({ catalog: { catalogVersion: 'synthetic-v3-fixture', verifiedAt: '2026-09-28', compressors, tools: [tool] }, verdictSnapshot: { verdictVersion: 'fixture', calculationVersion: '1.4.3', pairs }, allowedOrigins: new Set() });
	let url: string;
	beforeAll(async () => {
		await new Promise<void>((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
		url = `http://127.0.0.1:${(server.address() as { port: number }).port}/api/v1/compatibility`;
	});
	afterAll(async () => { server.closeAllConnections(); await new Promise<void>(resolve => server.close(() => resolve())); });
	it.each(compressors)('preserves engine limits in HTTP for $id', async compressor => {
		const response = await fetch(`${url}?compressorId=${compressor.id}&toolId=${tool.id}`);
		expect(response.status).toBe(200);
		const body = await response.json();
		const expected = evaluateCompatibility(compressor as never, tool as never);
		for (const field of ['verdict', 'confidence', 'limitingFactor', 'warnings'] as const) expect(body.engine_evaluation[field]).toEqual(expected[field]);
		expect(body.limitations).toEqual(expected.warnings);
		if (compressor.id === 'fixture-cycle') expect(explainDecisionDataGap(undefined, 6.3, { verdict: expected.verdict, warnings: expected.warnings })?.code).toBe('missing_duty_cycle');
	});
	it.each(['cutInPressureBar=9&cutOutPressureBar=8', 'cutInPressureBar=4&cutOutPressureBar=8', 'cutInPressureBar=7', 'supplyPressureBar=5', 'burstSeconds=30'])('rejects unsupported custom inputs rather than silently ignoring them: %s', async extra => {
		const response = await fetch(`${url}?compressorId=fixture-c&toolId=fixture-tool&${extra}`);
		expect(response.status).toBe(400);
		expect(await response.json()).toEqual({ error: 'invalid_query' });
	});
});
