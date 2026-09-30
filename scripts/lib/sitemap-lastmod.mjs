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

export function createGitDateResolver(root) {
	const cache = new Map();
	let recent;
	// Git hooks export repository-specific variables. Always resolve the explicit
	// root, including when a test or source-archive build uses another repository.
	const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_')));
	const git = args => execFileSync('git', args, { cwd: root, env, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] }).trimEnd();
	return files => {
		const existing = files.filter(file => existsSync(resolve(root, file)));
		if (!existing.length) return undefined;
		const key = JSON.stringify([...existing].sort());
		if (cache.has(key)) return cache.get(key);
		if (!recent) {
			recent = new Map();
			try {
				// A linear prefix has the exact same first matching commit as
				// `git log -1 -- paths`. Older/merged history keeps the original
				// per-query traversal rather than approximating merge semantics.
				const merge = git(['rev-list', '--first-parent', '--merges', '-1', 'HEAD']);
				const range = merge ? `${merge}..HEAD` : 'HEAD';
				// Three NULs delimit commits; a Git filename cannot contain NUL.
				const history = git(['log', '--format=%x00%x00%x00%cI', '--name-only', '--no-renames', '-z', range]);
				let rank = 0;
				for (const record of history.split(/\0{3,}/).filter(Boolean)) {
					const [date, ...paths] = record.split('\0');
					if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(date)) throw new Error('Invalid Git date');
					for (const raw of paths) {
						const path = raw.replace(/^\n/, '');
						if (path && !recent.has(path)) recent.set(path, { date, rank });
					}
					rank++;
				}
			} catch { recent.clear(); }
		}
		const first = existing.map(file => recent.get(file)).filter(Boolean).sort((a, b) => a.rank - b.rank)[0];
		let date = first?.date;
		if (!date) {
			try { date = git(['log', '-1', '--format=%cI', '--', ...existing]) || undefined; }
			catch { /* A source archive without Git has no invented lastmod. */ }
		}
		cache.set(key, date);
		return date;
	};
}

export function createSitemapLastmodResolver({ root = process.cwd(), gitDate } = {}) {
	const cache = new Map();
	const guideContentSources = existsSync(resolve(root, 'src/content/guides'))
		? readdirSync(resolve(root, 'src/content/guides')).filter((file) => file.endsWith('.md')).map((file) => `src/content/guides/${file}`)
		: [];
	const resolveGitDate = gitDate ?? createGitDateResolver(root);

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
		if (['/guides/', '/guides/particuliers/', '/guides/professionnels/'].includes(pathname) || /^\/guides\/((professionnels|particuliers)\/)?page\/\d+\/$/.test(pathname)) {
			const professional = pathname.startsWith('/guides/professionnels/');
			const personal = pathname.startsWith('/guides/particuliers/');
			sources.add(`src/components/${professional ? 'GuideProfessionalLibraryPage' : personal ? 'GuidePersonalLibraryPage' : 'GuideLibraryPage'}.astro`);
			sources.add(`src/pages/guides/${professional ? 'professionnels/' : personal ? 'particuliers/' : ''}page/[page].astro`);
			sources.add('src/components/DirectoryPagination.astro');
			sources.add('src/domain/pagination.ts');
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
			if (pathname.startsWith('/outils-pneumatiques/usages/')) {
				sources.add('src/pages/outils-pneumatiques/usages/[usage].astro');
				sources.add('src/data/taxonomy.ts');
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
		if (pathname.startsWith('/comparatifs/')) {
			sources.add('src/pages/comparatifs/[slug].astro');
			sources.add('src/data/decision-comparisons.ts');
		}
		if (/^\/(compresseurs|quel-compresseur-pour)\/[^/]+\/$/.test(pathname)) {
			sources.add('src/domain/decision-dossier.ts');
			sources.add('src/components/ProductEvidenceDossier.astro');
			sources.add('src/data/document-quality-ledger.ts');
			sources.add('src/data/direct-purchase-links.ts');
		}
		if (pathname.startsWith('/marques/')) sources.add('src/pages/marques/[brand].astro');
		if (pathname.startsWith('/guides/metiers/')) {
			sources.add('src/pages/guides/metiers/[metier].astro');
			for (const source of guideContentSources) sources.add(source);
		}
			if (catalogDrivenPaths.has(pathname) || pathname === '/sources-fiabilite/' || pathname.startsWith('/preuves/page/') || pathname.startsWith('/sources-fiabilite/page/') || pathname.startsWith('/comparatifs/') || pathname.startsWith('/marques/') || pathname.startsWith('/outils-pneumatiques/usages/')) {
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
