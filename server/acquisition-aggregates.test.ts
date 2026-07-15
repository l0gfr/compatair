import { describe, expect, it } from 'vitest';
import { aggregateAcquisition, validateAcquisitionEvent } from './acquisition-aggregates.mjs';
import { buildAcquisitionReport } from '../scripts/lib/report-acquisition.mjs';

const empty = { schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, buckets: [] };

describe('privacy-safe acquisition aggregation', () => {
	it('accepts only closed, low-cardinality browser events', () => {
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' })).toEqual({ channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' });
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'mcp', template: 'mcp_docs', action: 'view', outcome: 'unknown' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'agent_referral', template: 'compatibility', action: 'citation_acknowledged', outcome: 'success' })).toBeUndefined();
		expect(validateAcquisitionEvent({ event: 'acquisition_aggregate', schemaVersion: '1.0.0', channel: 'organic', template: 'guide', action: 'view', outcome: 'unknown', referrer: 'https://example.test/private' })).toBeUndefined();
	});

	it('separates channels and does not infer citation retention', () => {
		let state: any = aggregateAcquisition(empty, { channel: 'mcp', template: 'compatibility', action: 'decision_request', outcome: 'insufficient_data' }, new Date('2026-07-15T12:00:00Z'));
		state = aggregateAcquisition(state, { channel: 'agent_referral', template: 'mcp_docs', action: 'view', outcome: 'unknown' }, new Date('2026-07-15T12:01:00Z'));
		const report = buildAcquisitionReport(state);
		expect(report.segments).toEqual(expect.arrayContaining([
			expect.objectContaining({ channel: 'mcp', decision_requests: 1, insufficient_data_rate: 1, citation_acknowledged: 0, citation_acknowledgement_rate: 0 }),
			expect.objectContaining({ channel: 'agent_referral', views: 1 }),
		]));
	});
});
