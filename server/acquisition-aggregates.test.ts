import { describe, expect, it } from 'vitest';
import { aggregateAcquisition, createAcquisitionAggregateStore, validateAcquisitionEvent } from './acquisition-aggregates.mjs';
import { buildAcquisitionReport } from '../scripts/lib/report-acquisition.mjs';

const empty = { schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, buckets: [] };

describe('privacy-safe acquisition aggregation', () => {
	it('accepts only closed, low-cardinality browser events', () => {
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' })).toEqual({ channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' });
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'guide', action: 'calculator_intent', outcome: 'unknown' })).toEqual({ channel: 'organic', template: 'guide', action: 'calculator_intent', outcome: 'unknown' });
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'direct', template: 'compressor', action: 'merchant_interest', outcome: 'unknown' })).toEqual({ channel: 'direct', template: 'compressor', action: 'merchant_interest', outcome: 'unknown' });
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'mcp', template: 'mcp_docs', action: 'view', outcome: 'unknown' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'calculator', action: 'calculator_intent', outcome: 'unknown' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'guide', action: 'merchant_interest', outcome: 'unknown' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'agent_referral', template: 'compatibility', action: 'citation_acknowledged', outcome: 'success' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'guide', action: 'view', outcome: 'unknown', referrer: 'https://example.test/private' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'compressor', action: 'merchant_interest', outcome: 'unknown', productId: 'private-product' })).toBeUndefined();
	});

	it('separates channels and does not infer citation retention', () => {
		let state: any = aggregateAcquisition(empty, { channel: 'mcp', template: 'compatibility', action: 'decision_request', outcome: 'insufficient_data' }, new Date('2026-07-15T12:00:00Z'));
		state = aggregateAcquisition(state, { channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' }, new Date('2026-07-15T12:01:00Z'));
		state = aggregateAcquisition(state, { channel: 'organic', template: 'compressor', action: 'view', outcome: 'unknown' }, new Date('2026-07-15T12:02:00Z'));
		state = aggregateAcquisition(state, { channel: 'organic', template: 'compressor', action: 'calculator_intent', outcome: 'unknown' }, new Date('2026-07-15T12:03:00Z'));
		state = aggregateAcquisition(state, { channel: 'organic', template: 'compressor', action: 'merchant_interest', outcome: 'unknown' }, new Date('2026-07-15T12:04:00Z'));
		const report = buildAcquisitionReport(state);
		expect(report.segments).toEqual(expect.arrayContaining([
			expect.objectContaining({ channel: 'mcp', decision_requests: 1, insufficient_data_rate: 1, citation_acknowledged: 0, citation_acknowledgement_rate: 0 }),
			expect.objectContaining({ channel: 'agent_referral', views: 1 }),
			expect.objectContaining({ channel: 'organic', template: 'compressor', views: 1, calculator_intents: 1, calculator_intent_rate: 1, merchant_interests: 1, merchant_interest_rate: 1 }),
		]));
	});

	it('preserves every event when concurrent writes are coalesced', async () => {
		const store = createAcquisitionAggregateStore({ clock: () => new Date('2026-07-15T12:00:00Z') });
		await Promise.all(Array.from({ length: 25 }, () => store.record({ channel: 'api', template: 'compatibility', action: 'decision_request', outcome: 'success' })));
		expect(await store.snapshot()).toMatchObject({ totalEvents: 25, buckets: [{ channel: 'api', template: 'compatibility', action: 'decision_request', outcome: 'success', count: 25 }] });
	});
});
