import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evidenceHistory } from '../data/evidence-history';
import { assertEvidenceHistoryIntegrity, historyForProduct } from './evidence-history';

describe('public evidence history', () => {
	it('covers every current proof with a matching immutable snapshot', () => {
		expect(assertEvidenceHistoryIntegrity(evidenceHistory, compressors, tools)).toBe(true);
		expect(evidenceHistory.events).toHaveLength(compressors.flatMap((item) => item.evidence).length + tools.flatMap((item) => item.evidence).length);
	});

	it('returns a reverse chronological product timeline', () => {
		const events = historyForProduct(evidenceHistory, 'einhell-tc-ac-240-50-10-of');
		expect(events.length).toBeGreaterThan(0);
		expect(events[0].kind).toBe('baseline');
	});
});
