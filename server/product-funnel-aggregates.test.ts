import { readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { aggregateProductFunnel, createProductFunnelAggregateStore, validateProductFunnelEvent } from './product-funnel-aggregates.mjs';

const event = { event: 'calculator_funnel_aggregate', schemaVersion: '1.0.0', step: 'started' };

describe('anonymous product funnel aggregates', () => {
	it('accepts only the closed funnel step', () => {
		expect(validateProductFunnelEvent(event)).toEqual({ step: 'started' });
		expect(validateProductFunnelEvent({ ...event, entryPoint: 'guide' })).toBeUndefined();
		expect(validateProductFunnelEvent({ ...event, referrer: 'https://example.com/search?q=secret' })).toBeUndefined();
	});

	it('stores counters without raw events or navigation values', () => {
		const state = aggregateProductFunnel({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 } }, { step: 'started' }, new Date('2026-07-14T10:00:00Z'));
		expect(state).toMatchObject({ totalEvents: 1, calculator: { started: 1, completed: 0 } });
		expect(state).not.toHaveProperty('events');
	});

	it('persists atomically with private file permissions', async () => {
		const filePath = join(tmpdir(), `compatair-product-funnel-${process.pid}-${Date.now()}.json`);
		try {
			const store = createProductFunnelAggregateStore({ filePath, clock: () => new Date('2026-07-14T10:00:00Z') });
			await store.record(validateProductFunnelEvent(event)!);
			const persisted = JSON.parse(await readFile(filePath, 'utf8'));
			expect(persisted.calculator.started).toBe(1);
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
