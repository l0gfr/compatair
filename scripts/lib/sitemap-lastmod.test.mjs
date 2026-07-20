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

	it('conserve une date pour une nouvelle surface de confiance avant son premier commit', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/confiance.astro');
			expect(files).toContain('src/components/InstitutionalHero.astro');
			expect(files).toContain('src/layouts/BaseLayout.astro');
			return '2026-07-19T15:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/confiance/')).toBe('2026-07-19T15:00:00+00:00');
	});

	it('relie la recette terrain au Passeport avant son premier commit', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/mise-en-service.astro');
			expect(files).toContain('src/pages/passeport.astro');
			expect(files).toContain('src/components/PassportViewer.astro');
			expect(files).toContain('src/domain/passport.ts');
			return '2026-07-19T20:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/mise-en-service/')).toBe('2026-07-19T20:00:00+00:00');
	});

	it('relie le suivi périodique à la recette et au Passeport', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/suivi-exploitation.astro');
			expect(files).toContain('src/pages/mise-en-service.astro');
			expect(files).toContain('src/components/CommissioningViewer.astro');
			expect(files).toContain('src/pages/passeport.astro');
			expect(files).toContain('src/components/PassportViewer.astro');
			expect(files).toContain('src/domain/commissioning.ts');
			return '2026-07-20T08:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/suivi-exploitation/')).toBe('2026-07-20T08:00:00+00:00');
	});

	it('relie le diagnostic d’intervention au suivi et à ses exports', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/diagnostic-intervention.astro');
			expect(files).toContain('src/pages/suivi-exploitation.astro');
			expect(files).toContain('src/components/OperationMonitoringViewer.astro');
			expect(files).toContain('src/domain/operation-monitoring.ts');
			expect(files).toContain('src/domain/intervention.ts');
			expect(files).toContain('src/domain/passport-pdf.ts');
			return '2026-07-20T12:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/diagnostic-intervention/')).toBe('2026-07-20T12:00:00+00:00');
	});

	it('relie la maintenance préventive aux mesures, interventions et exports', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/maintenance-preventive.astro');
			expect(files).toContain('src/pages/diagnostic-intervention.astro');
			expect(files).toContain('src/components/InterventionViewer.astro');
			expect(files).toContain('src/pages/suivi-exploitation.astro');
			expect(files).toContain('src/components/OperationMonitoringViewer.astro');
			expect(files).toContain('src/domain/operation-monitoring.ts');
			expect(files).toContain('src/domain/intervention.ts');
			expect(files).toContain('src/domain/preventive-maintenance.ts');
			expect(files).toContain('src/domain/passport-pdf.ts');
			return '2026-07-20T16:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/maintenance-preventive/')).toBe('2026-07-20T16:00:00+00:00');
	});

	it('associe une page guide à son contenu éditorial', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => dates.get(files.join(',')) });
		expect(resolver('https://compatair.fr/guides/exemple/')).toBe('2026-07-11T09:00:00+00:00');
	});

	it('relie les hubs de guides à leur navigation et au corpus éditorial', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/guides/index.astro');
			expect(files).toContain('src/components/HubSignalVisual.astro');
			expect(files).toContain('src/components/GuideDirectory.astro');
			expect(files).toContain('src/components/DirectoryBrowser.astro');
			expect(files.some((file) => file.startsWith('src/content/guides/'))).toBe(true);
			return '2026-07-19T17:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/guides/')).toBe('2026-07-19T17:00:00+00:00');
	});

	it('associe une fiche compresseur à sa fiche source et au catalogue', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => dates.get(files.join(',')) });
		expect(resolver('https://compatair.fr/compresseurs/exemple/')).toBe('2026-07-12T10:00:00+00:00');
	});

	it('relie les pages de répertoire paginées à leur composant et au catalogue', () => {
		const resolver = createSitemapLastmodResolver({ gitDate: (files) => {
			expect(files).toContain('src/pages/preuves/page/[page].astro');
			expect(files).toContain('src/components/EvidenceHistoryDirectory.astro');
			expect(files).toContain('src/data/catalog.ts');
			return '2026-07-17T10:00:00+00:00';
		} });
		expect(resolver('https://compatair.fr/preuves/page/2/')).toBe('2026-07-17T10:00:00+00:00');
	});
});
