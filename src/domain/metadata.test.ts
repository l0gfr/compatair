import { describe, expect, it } from 'vitest';
import { fitDocumentTitle, MAX_DOCUMENT_TITLE_LENGTH, resolveDocumentTitle } from './metadata';

describe('document metadata', () => {
	it('keeps concise titles unchanged', () => {
		expect(fitDocumentTitle('Méthode | CompatAir')).toBe('Méthode | CompatAir');
	});

	it('shortens long titles without dropping the site name', () => {
		const title = fitDocumentTitle('Installer un réseau d’air comprimé dans un atelier : pression, diamètre, condensats et raccords | CompatAir');
		expect(title.length).toBeLessThanOrEqual(MAX_DOCUMENT_TITLE_LENGTH);
		expect(title).toMatch(/… \| CompatAir$/);
	});

	it('keeps an explicit editorial title intact and rejects an oversized one', () => {
		expect(resolveDocumentTitle('Fallback', 'Titre éditorial | CompatAir')).toEqual({ title: 'Titre éditorial | CompatAir', source: 'editorial' });
		expect(() => resolveDocumentTitle('Fallback', 'x'.repeat(61))).toThrow('dépasse');
	});
});
