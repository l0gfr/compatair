// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { createSitemapSerializer } from './scripts/lib/sitemap-lastmod.mjs';
import { isIndexablePath, canonicalPathFor } from './scripts/lib/indexation-build.mjs';
import { verdictCacheConfig } from './scripts/lib/verdict-cache-config.mjs';
import { catalogBuildInputs, reportPageCalculations } from './scripts/lib/catalog-build-inputs.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	experimental: { incrementalBuild: true },
	integrations: [{ name: 'compatair-calculation-report', hooks: { 'astro:build:done': () => reportPageCalculations(fileURLToPath(new URL('.', import.meta.url))) } }, sitemap({
		entryLimit: 5_000,
		serialize: createSitemapSerializer(),
		filter: (page) => { const path = new URL(page).pathname; return isIndexablePath(path) && canonicalPathFor(path) === path; },
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
		server: { proxy: { '/api/v1/search/': { target: 'http://127.0.0.1:8787' } } },
		plugins: [catalogBuildInputs(fileURLToPath(new URL('.', import.meta.url))), {
   name: 'compatair-page-calculations', apply: 'build',
   config() {
    const configuration = verdictCacheConfig(fileURLToPath(new URL('.', import.meta.url)));
    configuration.directory = fileURLToPath(new URL('.astro/page-calculations-v1', import.meta.url));
    return { define: { __COMPATAIR_PAGE_CALCULATIONS__: JSON.stringify(configuration) } };
   },
  }],
		build: {
			// Inline small stylesheets to avoid a blocking request; keep scripts and images external.
			assetsInlineLimit: (filePath, content) => filePath.endsWith('.css') && content.length < 4096,
		},
	},
});
