import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { compatibilityImpactFeed } from '../data/compatibility-impact';
import { compressors, tools } from '../data/catalog';

describe('Compatibility Impact Feed', () => {
	it('publishes evidence changes without inventing a before/after verdict delta', () => {
		expect(compatibilityImpactFeed.events.length).toBeGreaterThan(0);
		for (const event of compatibilityImpactFeed.events) {
			expect(event.impact_assessment).toMatchObject({
				status: 'requires_recalculation',
				decision_delta: 'not_available_without_previous_verdict_snapshot',
				before_verdict_version: null,
			});
			expect(event.portfolio_keys.some((key) => key.startsWith('manufacturer:'))).toBe(true);
			expect(event.canonical_url).toMatch(/^https:\/\/compatair\.fr\//);
		}
	});

	it('binds the feed content to its integrity digest', () => {
		const { integrity, ...data } = compatibilityImpactFeed;
		expect(integrity.digest).toBe(createHash('sha256').update(JSON.stringify(data)).digest('hex'));
	});
	it('reports potential fixed-flow pairs without publishing an invented distribution', () => {
		expect(compatibilityImpactFeed.schemaVersion).toBe('2.0.0');
		const fixedCount = tools.filter(tool => tool.demandModel === 'fixed-flow').length;
		for (const event of compatibilityImpactFeed.events) {
			const expected = event.product_type === 'compressor' ? fixedCount
				: tools.find(tool => tool.id === event.product_id)?.demandModel === 'fixed-flow' ? compressors.length : 0;
			expect(event.impact_assessment).toMatchObject({ affected_pair_count: expected, current_verdict_distribution: null, distribution_status: 'not_materialized' });
		}
	});
});
