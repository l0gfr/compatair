import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evidenceHistory } from '../data/evidence-history';
import { assertEvidenceHistoryIntegrity, assertHistoryExtends, compareEvidenceHistoryEvents, evidenceFingerprint, evidenceHistoryKindPriority, historyFingerprint, historyForProduct, type EvidenceHistoryEvent } from './evidence-history';

function historyWith(events: EvidenceHistoryEvent[]) {
	const unsigned = { schemaVersion: '1.0.0' as const, startedAt: evidenceHistory.startedAt, events };
	return { ...unsigned, historyVersion: historyFingerprint(unsigned) };
}

function eventFor(productId: string, snapshot: EvidenceHistoryEvent['snapshot'], id: string, occurredAt: string): EvidenceHistoryEvent {
	return { ...evidenceHistory.events[0], id, productId, evidenceId: snapshot.id, productType: 'compressor', occurredAt, snapshot, fingerprint: evidenceFingerprint(productId, snapshot) };
}

describe('public evidence history', () => {
	it('covers every current proof with a matching immutable snapshot', () => {
		expect(assertEvidenceHistoryIntegrity(evidenceHistory, compressors, tools)).toBe(true);
		expect(evidenceHistory.events.length).toBeGreaterThanOrEqual(compressors.flatMap((item) => item.evidence).length + tools.flatMap((item) => item.evidence).length);
	});

	it('selects the newest date and same-day identifier independently of input order', () => {
		const current = { ...compressors[0].evidence[0], notes: 'Current test snapshot' };
		const product = { ...compressors[0], evidence: [current] };
		const old = { ...current, notes: 'Previous test snapshot' };
		const events = [
			eventFor(product.id, current, 'current:z', '2026-10-01'),
			eventFor(product.id, old, 'old:z', '2026-09-30'),
			eventFor(product.id, old, 'current:a', '2026-10-01'),
		];
		expect(assertEvidenceHistoryIntegrity(historyWith(events), [product], [])).toBe(true);
	});

	it('keeps a shared evidence identifier separate for each product', () => {
		const first = { ...compressors[0], id: 'first-product', evidence: [{ ...compressors[0].evidence[0], id: 'shared-proof', notes: 'First product' }] };
		const second = { ...first, id: 'second-product', evidence: [{ ...first.evidence[0], notes: 'Second product' }] };
		const events = [eventFor(first.id, first.evidence[0], 'first', '2026-10-01'), eventFor(second.id, second.evidence[0], 'second', '2026-10-01')];
		expect(assertEvidenceHistoryIntegrity(historyWith(events), [first, second], [])).toBe(true);
	});

	it.each(['historical-fingerprint', 'duplicate-id', 'missing-proof', 'wrong-type', 'latest-snapshot', 'global-version'] as const)('rejects %s after indexing the complete history', (mutation) => {
		const current = { ...compressors[0].evidence[0], notes: 'Current test snapshot' };
		const product = { ...compressors[0], evidence: [current] };
		const old = { ...current, notes: 'Previous test snapshot' };
		const historical = eventFor(product.id, old, 'old', '2026-09-30');
		const latest = eventFor(product.id, current, 'latest', '2026-10-01');
		const events = [historical, latest];
		if (mutation === 'historical-fingerprint') historical.fingerprint = '0'.repeat(64);
		if (mutation === 'duplicate-id') historical.id = latest.id;
		if (mutation === 'missing-proof') events.length = 0;
		if (mutation === 'wrong-type') latest.productType = 'tool';
		if (mutation === 'latest-snapshot') {
			latest.snapshot = old;
			latest.fingerprint = evidenceFingerprint(product.id, old);
		}
		const history = historyWith(events);
		if (mutation === 'global-version') history.historyVersion = '0'.repeat(64);
		expect(() => assertEvidenceHistoryIntegrity(history, [product], [])).toThrow();
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
