import { describe, expect, it } from 'vitest';
import { createSitemapLastmodResolver } from './sitemap-lastmod.mjs';

const dates = new Map([
	['src/pages/contact.astro', '2026-07-10T08:00:00+00:00'],
	['src/pages/guides/[...slug].astro,src/content/guides/exemple.md', '2026-07-11T09:00:00+00:00'],
	['src/pages/compresseurs/[slug].astro,src/data/products/compressors/exemple.ts,src/data/catalog.ts', '2026-07-12T10:00:00+00:00'],
]);

describe('sitemap lastmod', () => {
	it('associe une route statique à son fichier source', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => dates.get(files.join(',')) });
		expect(resolver('https://compatair.fr/contact/')).toBe('2026-07-10T08:00:00+00:00');
	});

	it('associe une page guide à son contenu éditorial', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => dates.get(files.join(',')) });
		expect(resolver('https://compatair.fr/guides/exemple/')).toBe('2026-07-11T09:00:00+00:00');
	});

	it('associe une fiche compresseur à sa fiche source et au catalogue', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => dates.get(files.join(',')) });
		expect(resolver('https://compatair.fr/compresseurs/exemple/')).toBe('2026-07-12T10:00:00+00:00');
	});
});
