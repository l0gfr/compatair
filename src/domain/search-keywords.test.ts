import { describe, expect, it } from 'vitest';
import { compactSearchKeywords } from './search-keywords';

const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const matches = (title: string, keywords: string, query: string) => normalize(query).trim().split(/\s+/).every((token) => normalize(`${title} ${keywords}`).includes(token));

describe('compact search keywords', () => {
	it('retains technical, accented and partial queries while removing redundant words', () => {
		const title = 'Agrafeuse-cloueuse Einhell TC-PN 50';
		const keywords = 'Agrafeuse-cloueuse Einhell TC-PN 50 Agrafeuse et cloueuse 0,66 L par tir 6.3 à 8.3 bar, point de référence 6.3 bar';
		const compact = compactSearchKeywords(title, keywords);
		expect(compact.length).toBeLessThan(keywords.length);
		for (const query of ['einhell tc-pn', 'agrafeuse-cloueuse', 'clou 0,66', 'référence 6.3', 'reference 8.3', 'point bar', 'inconnu', 'débit 120']) {
			expect(matches(title, compact, query), query).toBe(matches(title, keywords, query));
		}
	});
	it('keeps every keyword token discoverable alongside the unchanged editorial title', () => {
		const title = 'Point de rosée : comparer les mesures';
		const keywords = 'Pression relative pression absolue ROSÉE rosee Séchage\n−0,6 bar 0.40 MPa';
		const compact = compactSearchKeywords(title, keywords);
		for (const token of normalize(keywords).split(/\s+/)) expect(matches(title, compact, token), token).toBe(true);
		expect(compact).toContain('relative');
		expect(compact).toContain('absolue');
		expect(compact).not.toMatch(/rosée|rosee/i);
	});
	it('handles empty and entirely redundant keywords without inventing terms', () => {
		expect(compactSearchKeywords('Air', ' \t\n')).toBe('');
		expect(compactSearchKeywords('Débit d’air', 'débit DÉBIT d’air')).toBe('');
		expect(compactSearchKeywords('', 'FAD fad')).toBe('FAD');
	});
});
