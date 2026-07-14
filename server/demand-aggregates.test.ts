import { describe, expect, it } from 'vitest';
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
});
