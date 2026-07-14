import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evidenceHistory } from '../data/evidence-history';
import { assertEvidenceHistoryIntegrity, assertHistoryExtends, historyForProduct } from './evidence-history';

describe('public evidence history', () => {
	it('covers every current proof with a matching immutable snapshot', () => {
		expect(assertEvidenceHistoryIntegrity(evidenceHistory, compressors, tools)).toBe(true);
		expect(evidenceHistory.events.length).toBeGreaterThanOrEqual(compressors.flatMap((item) => item.evidence).length + tools.flatMap((item) => item.evidence).length);
	});

	it('accepts additions but rejects deletion or mutation of a published event', () => {
		const added = { ...evidenceHistory, events: [...evidenceHistory.events, { ...evidenceHistory.events[0], id: `${evidenceHistory.events[0].id}:next` }] };
		expect(assertHistoryExtends(evidenceHistory, added)).toBe(true);
		expect(() => assertHistoryExtends(evidenceHistory, { ...evidenceHistory, events: evidenceHistory.events.slice(1) })).toThrow('supprimé');
		expect(() => assertHistoryExtends(evidenceHistory, { ...evidenceHistory, events: [{ ...evidenceHistory.events[0], summary: 'Texte modifié' }, ...evidenceHistory.events.slice(1)] })).toThrow('modifié');
	});

	it('returns a reverse chronological product timeline', () => {
		const events = historyForProduct(evidenceHistory, 'einhell-tc-ac-240-50-10-of');
		expect(events.length).toBeGreaterThan(0);
		expect(events[0].kind).toBe('baseline');
	});
});
