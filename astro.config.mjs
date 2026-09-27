// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { streamedVerdictBuild } from './scripts/lib/streamed-verdict-build.mjs';
const verdictStage = fileURLToPath(new URL('./.astro/verdicts.build.json', import.meta.url));
import { createSitemapSerializer } from './scripts/lib/sitemap-lastmod.mjs';
import { isIndexablePath, canonicalPathFor } from './scripts/lib/indexation-build.mjs';
import { verdictCacheConfig } from './scripts/lib/verdict-cache-config.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://compatair.fr',
	output: 'static',
	experimental: { incrementalBuild: true },
	integrations: [streamedVerdictBuild(verdictStage), sitemap({
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
		define: { __COMPATAIR_VERDICT_STAGE__: JSON.stringify(verdictStage) },
		plugins: [{
			name: 'compatair-build-calculation-cache',
			// Development HMR may replace the engine without restarting the config.
			// Only a fresh production build may persist calculations under this key.
			apply: 'build',
			config() {
				return { define: { __COMPATAIR_VERDICT_CACHE__: JSON.stringify(verdictCacheConfig(fileURLToPath(new URL('.', import.meta.url)))) } };
			},
		}],
		build: {
			// Inline small stylesheets to avoid a blocking request; keep scripts and images external.
			assetsInlineLimit: (filePath, content) => filePath.endsWith('.css') && content.length < 4096,
		},
	},
});
