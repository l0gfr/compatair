import { readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { aggregateProductFunnel, createProductFunnelAggregateStore, normalizeProductFunnelAggregate, validateProductFunnelEvent } from './product-funnel-aggregates.mjs';

const startedEvent = { event: 'calculator_funnel_aggregate', schemaVersion: '2.0.0', step: 'started' };
const displayedEvent = { event: 'calculator_funnel_aggregate', schemaVersion: '2.0.0', step: 'recommendation_displayed', family: 'machine' };

describe('anonymous product funnel aggregates', () => {
	it('accepts only closed steps and recommendation families', () => {
		expect(validateProductFunnelEvent(startedEvent)).toEqual({ step: 'started' });
		expect(validateProductFunnelEvent(displayedEvent)).toEqual({ step: 'recommendation_displayed', family: 'machine' });
		expect(validateProductFunnelEvent({ ...displayedEvent, family: 'custom-value' })).toBeUndefined();
		expect(validateProductFunnelEvent({ ...startedEvent, family: 'machine' })).toBeUndefined();
		expect(validateProductFunnelEvent({ ...startedEvent, entryPoint: 'guide' })).toBeUndefined();
		expect(validateProductFunnelEvent({ ...startedEvent, referrer: 'https://example.com/search?q=secret' })).toBeUndefined();
	});

	it('stores global and per-family counters without raw events', () => {
		const legacy = { schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 } };
		const started = aggregateProductFunnel(legacy, { step: 'started' }, new Date('2026-07-14T10:00:00Z'));
		const displayed = aggregateProductFunnel(started, { step: 'recommendation_displayed', family: 'machine' }, new Date('2026-07-14T10:01:00Z'));
		expect(displayed).toMatchObject({ schemaVersion: '2.0.0', totalEvents: 2, calculator: { started: 1, completed: 0 }, counterfactual: { displayed: 1, byFamily: { machine: { displayed: 1 } } } });
		expect(displayed).not.toHaveProperty('events');
	});

	it('migrates the previous two-counter schema', () => {
		expect(normalizeProductFunnelAggregate({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 3, calculator: { started: 2, completed: 1 } })).toMatchObject({ schemaVersion: '2.0.0', totalEvents: 3, counterfactual: { displayed: 0, selected: 0, recalculated: 0 } });
	});

	it('persists atomically with private file permissions', async () => {
		const filePath = join(tmpdir(), `compatair-product-funnel-${process.pid}-${Date.now()}.json`);
		try {
			const store = createProductFunnelAggregateStore({ filePath, clock: () => new Date('2026-07-14T10:00:00Z') });
			await store.record(validateProductFunnelEvent(displayedEvent)!);
			const persisted = JSON.parse(await readFile(filePath, 'utf8'));
			expect(persisted.counterfactual.byFamily.machine.displayed).toBe(1);
			expect((await stat(filePath)).mode & 0o777).toBe(0o600);
		} finally { await rm(filePath, { force: true }); }
	});

	it('rejects a persisted aggregate containing undeclared data', async () => {
		const filePath = join(tmpdir(), `compatair-product-funnel-tainted-${process.pid}-${Date.now()}.json`);
		try {
			await writeFile(filePath, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 }, events: [] }));
			const store = createProductFunnelAggregateStore({ filePath });
			await expect(store.snapshot()).rejects.toThrow('product_funnel_aggregate_schema_mismatch');
		} finally { await rm(filePath, { force: true }); }
	});
});
