// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	integrations: [sitemap({
		entryLimit: 25,
		filter: (page) => {
			const pathname = new URL(page).pathname;
			return !pathname.startsWith('/compatibilite/') && !['/410/', '/comparateur/', '/offres/', '/recherche/', '/securite/'].includes(pathname);
		},
	})],
	build: {
		assets: '_assets',
	},
	vite: {
		build: { assetsInlineLimit: 0 },
	},
});
