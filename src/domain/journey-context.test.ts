import { describe, expect, it } from 'vitest';
import {
	JOURNEY_CONTEXT_MAX_AGE_MS,
	journeyContextDetail,
	journeyContextTitle,
	mergeJourneyContext,
	parseJourneyContext,
} from './journey-context';

const now = Date.parse('2026-07-20T18:00:00.000Z');

describe('journey context', () => {
	it('keeps only bounded local technical context', () => {
		const snapshot = mergeJourneyContext(undefined, {
			stage: 'identified', reference: '4138540',
			product: { id: 'einhell-tc-pp-220', label: 'Einhell TC-PP 220', type: 'tool' },
			needLabel: '128 L/min à 6,3 bar', continueHref: '/calculateur/#outil=einhell-tc-pp-220',
		}, new Date(now).toISOString());
		expect(snapshot).toMatchObject({ stage: 'identified', reference: '4138540', continueHref: '/calculateur/#outil=einhell-tc-pp-220' });
		expect(parseJourneyContext(JSON.stringify(snapshot), now)).toEqual(snapshot);
	});

	it('rejects stale, external or malformed state', () => {
		const stale = JSON.stringify({ schemaVersion: '1.0.0', stage: 'identified', updatedAt: new Date(now - JOURNEY_CONTEXT_MAX_AGE_MS - 1).toISOString(), continueHref: '/scanner/' });
		expect(parseJourneyContext(stale, now)).toBeUndefined();
		expect(mergeJourneyContext(undefined, { stage: 'identified', continueHref: 'https://example.com/' }, new Date(now).toISOString())?.continueHref).toBeUndefined();
		expect(parseJourneyContext('{', now)).toBeUndefined();
	});

	it('clears obsolete selection when a new step replaces it', () => {
		const first = mergeJourneyContext(undefined, { stage: 'compared', compressorIds: ['a', 'b'], retainedCompressorId: 'a' }, new Date(now).toISOString());
		const next = mergeJourneyContext(first, { stage: 'identified', compressorIds: null, retainedCompressorId: null }, new Date(now + 1_000).toISOString());
		expect(next).toMatchObject({ stage: 'identified' });
		expect(next?.compressorIds).toBeUndefined();
		expect(next?.retainedCompressorId).toBeUndefined();
	});

	it('produces a compact human summary', () => {
		const snapshot = mergeJourneyContext(undefined, { stage: 'sized', product: { id: 'tool', label: 'Outil test', type: 'tool' }, needLabel: '160 L/min recommandés', compressorIds: ['a', 'b', 'c'] }, new Date(now).toISOString())!;
		expect(journeyContextTitle(snapshot)).toBe('Besoin dimensionné pour Outil test');
		expect(journeyContextDetail(snapshot)).toBe('160 L/min recommandés · 3 solutions prêtes à comparer');
	});
});
