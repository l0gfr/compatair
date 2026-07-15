import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { compatibilityImpactFeed } from '../data/compatibility-impact';

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
});
