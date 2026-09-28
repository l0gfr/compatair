import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { editorialPriority } from './editorial-priority.mjs';
const v4 = JSON.parse(readFileSync(new URL('../../tests/fixtures/audit-v4/extensions.json', import.meta.url), 'utf8'));

describe('transparent editorial queue priority', () => {
	it.each(v4.lexical)('V4 $id preserves ordered identities', item => {
		expect(editorialPriority({ value: { question: item.candidate } }, { queries: [{ id: item.id, query: item.query, editorialPriority: 'P1' }] }).queryIds.includes(item.id)).toBe(item.expected);
	});
	it.each([
		['Einhell TE-AC 430/90/10 débit restitué', '/guides/einhell-te-ac-430-90-10-debit-restitue/'],
		['Metabo Basic 250-24 W débit effectif', 'Metabo Basic 250-24 W ou Basic 24-250 W : débit effectif'],
		['clé à chocs 1/2', 'clé à chocs 1/2 ou 3/4'],
	])('retains an ordered reference in a slug or a legitimate comparison: %s', (query, question) => {
		expect(editorialPriority({ value: { question } }, { queries: [{ id: 'q', query, editorialPriority: 'P1' }] }).score).toBe(3);
	});
	it('does not assemble an ordered identity across different surfaces', () => {
		expect(editorialPriority({ value: { question: 'Einhell TE-AC 430', label: '90/10 débit restitué' } }, { queries: [{ id: 'q', query: 'Einhell TE-AC 430/90/10 débit restitué', editorialPriority: 'P1' }] }).score).toBe(0);
	});
	it.each([
		['Einhell TE-AC 430/10/90', 'Einhell TE-AC 430/90/10'],
		['Metabo Basic 24-250 W', 'Metabo Basic 250-24 W'],
		['clé à chocs 2/1', 'clé à chocs 1/2'],
	])('also rejects the reverse permutation: %s', (query, question) => {
		expect(editorialPriority({ value: { question } }, { queries: [{ id: 'q', query, editorialPriority: 'P1' }] }).score).toBe(0);
	});
	it('keeps a distinct alias explicitly carried by the upstream label', () => {
		// Synthetic alias already exposed by an upstream, source-linked surface.
		// This lexical selector cannot create or corroborate aliases by itself.
		const candidate = { path: '/guides/fixture-430-90-10/', value: { question: 'Fixture 430/90/10', label: 'Fixture, référence historique 42/17' } };
		expect(editorialPriority(candidate, { queries: [{ id: 'alias', query: 'Fixture 42/17', editorialPriority: 'P1' }] }).queryIds).toEqual(['alias']);
	});
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
