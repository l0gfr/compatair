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
			return !pathname.startsWith('/compatibilite/') && !pathname.startsWith('/go/') && !['/410/', '/comparateur/', '/offres/', '/recherche/', '/securite/'].includes(pathname);
		},
	})],
	build: {
		assets: '_assets',
	},
	vite: {
		build: { assetsInlineLimit: 0 },
	},
});
