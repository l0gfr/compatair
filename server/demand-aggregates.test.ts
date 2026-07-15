import { describe, expect, it } from 'vitest';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { aggregateDemand, createDemandAggregateStore, validateDemandEvent } from './demand-aggregates.mjs';

const catalog = { tools: [{ id: 'tool-a', category: 'Clé à chocs' }, { id: 'tool-b', category: 'Peinture' }] };
const event = {
	event: 'calculator_demand_aggregate', schemaVersion: '1.0.0', calculationVersion: '1.1.0',
	toolIds: ['tool-a'], mode: 'successive', flowBucket: '200-399', pressureBucket: '6-7.9', sessionBucket: '15-59', compressorSelection: 'none',
};

describe('anonymous demand aggregates', () => {
	it('accepts only bounded catalog dimensions', () => {
		expect(validateDemandEvent(event, catalog)).toBeDefined();
		expect(validateDemandEvent({ ...event, toolIds: ['unknown'] }, catalog)).toBeUndefined();
		expect(validateDemandEvent({ ...event, freeText: 'do not persist me' }, catalog)).toBeUndefined();
		expect(validateDemandEvent({ ...event, calculationVersion: `${'1'.repeat(5)}.1.0` }, catalog)).toBeUndefined();
		expect(validateDemandEvent(event, catalog, '1.2.0')).toBeUndefined();
		expect(validateDemandEvent(event, catalog, '1.1.0')).toBeDefined();
	});

	it('stores marginal counters and no raw contribution rows', () => {
		const validated = validateDemandEvent(event, catalog)!;
		const state = aggregateDemand({ schemaVersion: '1.0.0', updatedAt: null, totalContributions: 0, dimensions: { tools: {}, categories: {}, modes: {}, flowBuckets: {}, pressureBuckets: {}, sessionBuckets: {}, compressorSelections: {}, calculationVersions: {}, needProfiles: {} } }, validated, catalog, new Date('2026-07-14T08:00:00Z'));
		expect(state.totalContributions).toBe(1);
		expect(state.dimensions.tools['tool-a']).toBe(1);
		expect(state.dimensions.categories['Clé à chocs']).toBe(1);
		expect(JSON.stringify(state)).not.toContain('freeText');
		expect(state).not.toHaveProperty('events');
	});

	it('can operate in memory when persistence is not configured', async () => {
		const store = createDemandAggregateStore({ catalog, clock: () => new Date('2026-07-14T08:00:00Z') });
		await store.record(validateDemandEvent(event, catalog)!);
		expect((await store.snapshot()).totalContributions).toBe(1);
		expect(store.enabled).toBe(false);
	});

	it('fails closed when the persisted aggregate has an incomplete schema', async () => {
		const directory = await mkdtemp(join(tmpdir(), 'compatair-demand-invalid-'));
		const filePath = join(directory, 'aggregate.json');
		try {
			await writeFile(filePath, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalContributions: 0, dimensions: { tools: {} } }));
			const store = createDemandAggregateStore({ filePath, catalog });
			await expect(store.snapshot()).rejects.toThrow('aggregate_schema_mismatch');
		} finally { await rm(directory, { recursive: true, force: true }); }
	});
});
