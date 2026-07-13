// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	integrations: [sitemap({
		entryLimit: 25,
		filter: (page) => !['/410/', '/comparateur/', '/offres/', '/recherche/', '/securite/'].some((path) => new URL(page).pathname === path),
	})],
	build: {
		assets: '_assets',
	},
	vite: {
		build: { assetsInlineLimit: 0 },
	},
});
