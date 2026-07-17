import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const catalogSources = [
	'src/data/catalog.ts',
	'src/data/products/compressors.ts',
	'src/data/products/tools.ts',
];

const catalogDrivenPaths = new Set([
	'/', '/barometre-transparence/', '/calculateur/', '/comparatifs/',
	'/compresseurs/', '/graphe-preuve/', '/impact-compatibilite/', '/marques/',
	'/observatoire-qualite-documentaire/', '/outils-pneumatiques/', '/passeport/',
	'/preuves/', '/radar-contradictions/', '/scanner/',
]);

function routeSource(pathname, root) {
	if (pathname === '/') return 'src/pages/index.astro';
	const stem = pathname.replace(/^\//, '').replace(/\/$/, '');
	for (const candidate of [`src/pages/${stem}.astro`, `src/pages/${stem}/index.astro`]) {
		if (existsSync(resolve(root, candidate))) return candidate;
	}
	return undefined;
}

function latest(values) {
	return values.filter(Boolean).sort().at(-1);
}

export function createSitemapLastmodResolver({ root = process.cwd(), gitDate } = {}) {
	const cache = new Map();
	const resolveGitDate = gitDate ?? ((files) => {
		const existing = files.filter((file) => existsSync(resolve(root, file)));
		if (!existing.length) return undefined;
		try {
			return execFileSync('git', ['log', '-1', '--format=%cI', '--', ...existing], {
				cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
			}).trim() || undefined;
		} catch {
			return undefined;
		}
	});

	return (pageUrl) => {
		const pathname = new URL(pageUrl).pathname;
		if (cache.has(pathname)) return cache.get(pathname);
		const sources = new Set();
		const staticSource = routeSource(pathname, root);
		if (staticSource) sources.add(staticSource);

		let match = pathname.match(/^\/guides\/([^/]+)\/$/);
		if (match && !['metiers', 'particuliers', 'professionnels'].includes(match[1])) {
			sources.add('src/pages/guides/[...slug].astro');
			sources.add(`src/content/guides/${match[1]}.md`);
		}
		match = pathname.match(/^\/compresseurs\/([^/]+)\/$/);
		if (match) {
			sources.add('src/pages/compresseurs/[slug].astro');
			sources.add(`src/data/products/compressors/${match[1]}.ts`);
			sources.add('src/data/catalog.ts');
		}
		match = pathname.match(/^\/outils-pneumatiques\/([^/]+)\/$/);
		if (match) {
			sources.add('src/pages/outils-pneumatiques/[slug].astro');
			sources.add(`src/data/products/tools/${match[1]}.ts`);
			sources.add('src/data/catalog.ts');
		}
		match = pathname.match(/^\/quel-compresseur-pour\/([^/]+)\/$/);
		if (match) {
			sources.add('src/pages/quel-compresseur-pour/[slug].astro');
			sources.add(`src/data/products/tools/${match[1]}.ts`);
			sources.add('src/data/catalog.ts');
		}
		if (pathname.startsWith('/marques/')) sources.add('src/pages/marques/[brand].astro');
		if (pathname.startsWith('/guides/metiers/')) sources.add('src/pages/guides/metiers/[metier].astro');
		if (catalogDrivenPaths.has(pathname) || pathname.startsWith('/comparatifs/') || pathname.startsWith('/marques/')) {
			for (const source of catalogSources) sources.add(source);
		}

		const lastmod = latest([resolveGitDate([...sources])]);
		cache.set(pathname, lastmod);
		return lastmod;
	};
}

export function createSitemapSerializer(options) {
	const lastmodFor = createSitemapLastmodResolver(options);
	return (item) => ({ ...item, lastmod: lastmodFor(item.url) });
}
