import { describe, expect, it } from 'vitest';
import { glossarySources, glossaryTerms } from './glossary';

describe('glossary', () => {
	it('keeps every slug unique and linked to a declared source', () => {
		expect(new Set(glossaryTerms.map((term) => term.slug)).size).toBe(glossaryTerms.length);
		for (const term of glossaryTerms) expect(glossarySources[term.source]).toBeDefined();
	});

	it('documents the concepts introduced by the audience and profession guides', () => {
		const slugs = new Set(glossaryTerms.map((term) => term.slug));
		for (const slug of ['boucle-reseau', 'consommation-en-charge', 'ligne-base', 'pression-dynamique', 'volume-par-action']) expect(slugs.has(slug)).toBe(true);
	});
});
