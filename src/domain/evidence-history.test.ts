import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evidenceHistory } from '../data/evidence-history';
import { assertEvidenceHistoryIntegrity, assertHistoryExtends, compareEvidenceHistoryEvents, evidenceHistoryKindPriority, historyForProduct } from './evidence-history';

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
		expect(events.at(-1)!.kind).toBe('baseline');
		expect(events[0].occurredAt).toBe('2026-09-25');
		expect(events.some((event) => event.kind === 'corrected')).toBe(true);
		expect(events.map((event) => event.occurredAt)).toEqual(events.map((event) => event.occurredAt).sort().reverse());
	});

	it('orders same-day events by public usefulness', () => {
		const sample = evidenceHistory.events[0];
		const events = [
			{ ...sample, id: 'baseline', kind: 'baseline' as const },
			{ ...sample, id: 'added', kind: 'added' as const },
			{ ...sample, id: 'corrected', kind: 'corrected' as const },
		].sort(compareEvidenceHistoryEvents);
		expect(events.map((event) => event.kind)).toEqual(['corrected', 'added', 'baseline']);
		expect(evidenceHistoryKindPriority.corrected).toBeLessThan(evidenceHistoryKindPriority.baseline);
	});
});
