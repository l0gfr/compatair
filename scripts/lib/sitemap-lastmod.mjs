import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
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
	const guideContentSources = existsSync(resolve(root, 'src/content/guides'))
		? readdirSync(resolve(root, 'src/content/guides')).filter((file) => file.endsWith('.md')).map((file) => `src/content/guides/${file}`)
		: [];
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
		if (pathname === '/confiance/') {
			sources.add('src/components/InstitutionalHero.astro');
			sources.add('src/layouts/BaseLayout.astro');
		}
		if (pathname === '/compatibilite-versions/') {
			sources.add('src/pages/mcp-documentation.astro');
			sources.add('src/data/mcp-documentation.ts');
			sources.add('package.json');
		}
		if (pathname === '/mise-en-service/') {
			sources.add('src/pages/passeport.astro');
			sources.add('src/components/PassportViewer.astro');
			sources.add('src/domain/passport.ts');
		}
		if (pathname === '/suivi-exploitation/') {
			sources.add('src/pages/mise-en-service.astro');
			sources.add('src/components/CommissioningViewer.astro');
			sources.add('src/pages/passeport.astro');
			sources.add('src/components/PassportViewer.astro');
			sources.add('src/domain/commissioning.ts');
			sources.add('src/domain/passport.ts');
		}
		if (pathname === '/diagnostic-intervention/') {
			sources.add('src/pages/suivi-exploitation.astro');
			sources.add('src/components/OperationMonitoringViewer.astro');
			sources.add('src/domain/operation-monitoring.ts');
			sources.add('src/domain/intervention.ts');
			sources.add('src/domain/passport-pdf.ts');
		}
		if (pathname === '/maintenance-preventive/') {
			sources.add('src/pages/diagnostic-intervention.astro');
			sources.add('src/components/InterventionViewer.astro');
			sources.add('src/pages/suivi-exploitation.astro');
			sources.add('src/components/OperationMonitoringViewer.astro');
			sources.add('src/domain/operation-monitoring.ts');
			sources.add('src/domain/intervention.ts');
			sources.add('src/domain/preventive-maintenance.ts');
			sources.add('src/domain/passport-pdf.ts');
		}
		if (['/guides/', '/guides/particuliers/', '/guides/professionnels/'].includes(pathname)) {
			sources.add('src/components/HubSignalVisual.astro');
			sources.add('src/components/GuideDirectory.astro');
			sources.add('src/components/DirectoryBrowser.astro');
			for (const source of guideContentSources) sources.add(source);
		}
		if (pathname.startsWith('/guides/dossiers/')) {
			sources.add('src/components/GuideSeriesCallout.astro');
			for (const source of guideContentSources) sources.add(source);
		}
		if (['/glossaire/', '/recherche/'].includes(pathname)) sources.add('src/components/HubSignalVisual.astro');

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
		if (/^\/preuves\/page\/\d+\/$/.test(pathname)) {
			sources.add('src/pages/preuves/page/[page].astro');
			sources.add('src/components/EvidenceHistoryDirectory.astro');
			sources.add('src/data/evidence-history-directory.ts');
		}
		if (/^\/sources-fiabilite\/page\/\d+\/$/.test(pathname)) {
			sources.add('src/pages/sources-fiabilite/page/[page].astro');
			sources.add('src/components/SourceReliabilityDirectory.astro');
			sources.add('src/data/source-directory.ts');
		}
		if (pathname.startsWith('/marques/')) sources.add('src/pages/marques/[brand].astro');
		if (pathname.startsWith('/guides/metiers/')) {
			sources.add('src/pages/guides/metiers/[metier].astro');
			for (const source of guideContentSources) sources.add(source);
		}
		if (catalogDrivenPaths.has(pathname) || pathname === '/sources-fiabilite/' || pathname.startsWith('/preuves/page/') || pathname.startsWith('/sources-fiabilite/page/') || pathname.startsWith('/comparatifs/') || pathname.startsWith('/marques/')) {
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
