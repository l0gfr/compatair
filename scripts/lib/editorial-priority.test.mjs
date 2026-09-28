import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { editorialPriority } from './editorial-priority.mjs';

describe('transparent editorial queue priority', () => {
	const panel = { queries: [{ id: 'q1', query: 'Mecafer Fifty débit restitué', editorialPriority: 'P1' }] };
	it('matches a specific question without claiming observed demand', () => {
		const result = editorialPriority({ path: '/guides/mecafer-fifty-debit-restitue/' }, panel);
		expect(result).toMatchObject({ score: 3, queryIds: ['q1'] });
		expect(result.basis).toContain('not measured');
	});
	it('does not prioritize a generic keyword overlap', () => {
		expect(editorialPriority({ path: '/guides/compresseur-air/' }, panel).score).toBe(0);
	});
	it('recognizes every exact query in the frozen editorial panel', () => {
		const frozen = JSON.parse(readFileSync(new URL('../../config/seo-query-panel.json', import.meta.url), 'utf8'));
		for (const query of frozen.queries) expect(editorialPriority({ value: { question: query.query } }, { queries: [query] }).queryIds, query.query).toContain(query.id);
	});
	it.each([
		['flexible air comprimé diamètre 8 mm débit', 'flexible air comprimé diamètre 18 mm débit'],
		['compresseur pression 7 bar', 'compresseur pression 3 bar'],
		['flexible air comprimé diamètre 18 mm débit', 'flexible air comprimé diamètre 28 mm débit'],
		['flexible 8 mm pression 10 bar', 'flexible 10 mm pression 8 bar'],
		['Mecafer Fifty débit restitué', 'Metabo Fifty débit restitué'],
		['Einhell TC-AC 240/50/10 OF débit', 'Einhell TC-AC 240/24/10 OF débit'],
		['compresseur pression 6,3 bar', 'compresseur pression 6,8 bar'],
		['compresseur sans huile', 'compresseur avec huile'],
		['compresseur avec huile', 'compresseur sans huile'],
	])('does not conflate %s with %s', (query, question) => {
		expect(editorialPriority({ value: { question } }, { queries: [{ id: 'q', query, editorialPriority: 'P1' }] }).score).toBe(0);
	});
	it('allows comparative pages containing both documented quantities', () => {
		expect(editorialPriority({ value: { question: 'Flexible air comprimé : diamètre 8 mm ou 18 mm, quel débit ?' } }, { queries: [{ id: 'q', query: 'flexible air comprimé diamètre 8 mm débit', editorialPriority: 'P1' }] }).score).toBe(3);
	});
	it('handles decimal commas and excludes a query consisting only of generic terms', () => {
		expect(editorialPriority({ value: { question: 'pression 6.3 bar' } }, { queries: [{ id: 'q', query: 'pression 6,3 bar', editorialPriority: 'P1' }] }).score).toBe(3);
		expect(editorialPriority({ path: '/compresseurs/' }, { queries: [{ id: 'q', query: 'quel compresseur', editorialPriority: 'P1' }] }).score).toBe(0);
	});
});
