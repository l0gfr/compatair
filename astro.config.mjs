// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createSitemapSerializer } from './scripts/lib/sitemap-lastmod.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	integrations: [sitemap({
		entryLimit: 5_000,
		serialize: createSitemapSerializer(),
		filter: (page) => {
			const pathname = new URL(page).pathname;
			return !pathname.startsWith('/compatibilite/')
				&& !pathname.startsWith('/go/')
				&& !pathname.startsWith('/preuves/page/')
				&& !pathname.startsWith('/sources-fiabilite/page/')
				&& !['/410/', '/comparateur/', '/offres/', '/recherche/', '/securite/'].includes(pathname);
		},
	})],
	build: {
		assets: '_assets',
	},
	vite: {
		build: {
			// Inline small stylesheets to avoid a blocking request; keep scripts and images external.
			assetsInlineLimit: (filePath, content) => filePath.endsWith('.css') && content.length < 4096,
		},
	},
});
