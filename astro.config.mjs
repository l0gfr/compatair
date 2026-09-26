// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { createSitemapSerializer } from './scripts/lib/sitemap-lastmod.mjs';
import { isIndexablePath } from './scripts/lib/indexation-build.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	integrations: [sitemap({
		entryLimit: 5_000,
		serialize: createSitemapSerializer(),
		filter: (page) => isIndexablePath(new URL(page).pathname),
		chunks: {
			guides: (item) => new URL(item.url).pathname.startsWith('/guides/') ? item : undefined,
			compresseurs: (item) => new URL(item.url).pathname.startsWith('/compresseurs/') ? item : undefined,
			outils: (item) => new URL(item.url).pathname.startsWith('/outils-pneumatiques/') ? item : undefined,
			usages: (item) => new URL(item.url).pathname.startsWith('/quel-compresseur-pour/') ? item : undefined,
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
