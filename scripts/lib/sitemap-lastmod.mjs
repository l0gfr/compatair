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
	const histories = new Map();
	const merges = new Map();
	// Git hooks export repository-specific variables. Always resolve the explicit
	// root, including when a test or source-archive build uses another repository.
	const env = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_')));
	const git = args => execFileSync('git', args, { cwd: root, env, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] }).trimEnd();
	let head;
	try { head = git(['rev-parse', '--verify', 'HEAD']); } catch { /* A source archive has no Git date. */ }
	const exactDate = (revision, files) => {
		try { return git(['log', '-1', '--format=%cI', revision, '--', ...files]) || undefined; }
		catch { return undefined; }
	};
	// Git also accepts directories and glob pathspecs. A conservative prefix can
	// prove that none of their possible matches changed, without implementing Git's
	// matching rules. Magic, absolute and non-normalized pathspecs use Git directly.
	const pathScope = file => {
		if (file.startsWith(':') || file.startsWith('/') || file.split('/').some(part => !part || part === '.' || part === '..')) return undefined;
		const wildcard = file.search(/[?*\[\\]/);
		return wildcard < 0 ? { prefix: file, literal: true } : { prefix: file.slice(0, wildcard), literal: false };
	};
	const couldMatch = (scope, path) => scope.literal
		? path === scope.prefix || path.startsWith(`${scope.prefix}/`)
		: path.startsWith(scope.prefix);
	function linearHistory(revision) {
		if (histories.has(revision)) return histories.get(revision);
		let result;
		try {
			const merge = git(['rev-list', '--first-parent', '--merges', '-1', revision]);
			const range = merge ? `${merge}..${revision}` : revision;
			const history = git(['log', '--format=%x00%x00%x00%H%x00%cI', '--name-only', '--no-renames', '-z', range]);
			const recent = new Map(), directories = new Map(), commits = new Map();
			let rank = 0;
			// Three NULs delimit commits; a Git filename cannot contain NUL.
			for (const record of history.split(/\0{3,}/).filter(Boolean)) {
				const [commit, date, ...paths] = record.split('\0');
				if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit) || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(date)) throw new Error('Invalid Git history');
				const entry = { date, rank };
				commits.set(commit, entry);
				for (const raw of paths) {
					const path = raw.replace(/^\n/, '');
					if (!path) continue;
					if (!recent.has(path)) recent.set(path, entry);
					const parts = path.split('/');
					for (let length = 1; length <= parts.length; length++) {
						const prefix = parts.slice(0, length).join('/');
						if (!directories.has(prefix)) directories.set(prefix, entry);
					}
				}
				rank++;
			}
			result = { merge, range, recent, directories, commits, matches: new Map() };
		} catch { /* A failed or incomplete batch must not supply an approximate date. */ }
		histories.set(revision, result);
		return result;
	}
	function mergeParents(revision) {
		if (merges.has(revision)) return merges.get(revision);
		let result;
		try {
			const [commit, ...parents] = git(['rev-list', '--parents', '-n', '1', revision]).split(' ');
			if (commit !== revision || parents.length < 2 || parents.some(parent => !/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(parent))) throw new Error('Invalid Git parents');
			result = parents.map(parent => ({
				parent,
				matches: new Map(),
				// Include mode changes, deletions and both sides of renames. A merge
				// is TREESAME only if no potentially selected path differs.
				changed: git(['diff-tree', '--no-commit-id', '--name-only', '--no-renames', '-r', '-z', parent, revision, '--']).split('\0').filter(Boolean),
			}));
		} catch { /* Fall back to the original path-limited Git traversal. */ }
		merges.set(revision, result);
		return result;
	}
	function parentDiffers(revision, entry, files, scopes) {
		const affected = scopes.map((scope, index) => ({ scope, file: files[index] }))
			.filter(({ scope }) => entry.changed.some(path => couldMatch(scope, path)));
		if (affected.some(({ scope }) => scope.literal)) return true;
		for (const { file } of affected) {
			// A broad prefix cannot decide TREESAME. Ask Git for the exact
			// pathspec once per parent, shared by every page using this route.
			if (!entry.matches.has(file)) entry.matches.set(file, Boolean(git([
				'diff-tree', '--no-commit-id', '--name-only', '--no-renames', '-r', '-z', entry.parent, revision, '--', file,
			])));
			if (entry.matches.get(file)) return true;
		}
		return false;
	}
	function firstLinearMatch(history, file, scope) {
		if (history.matches.has(file)) return history.matches.get(file);
		let first = history.recent.get(file);
		const potential = scope.literal ? history.directories.get(file)
			: [...history.recent].find(([path]) => couldMatch(scope, path))?.[1];
		if (potential && (!first || potential.rank < first.rank)) {
			// Resolve ambiguous pathspecs once, not once per product page sharing
			// an Astro route such as [slug].astro. Ranks come from Git, not dates.
			const commit = git(['log', '-1', '--format=%H', history.range, '--', file]);
			if (commit && !history.commits.has(commit)) throw new Error('Git query escaped the linear history');
			first = history.commits.get(commit);
		}
		history.matches.set(file, first);
		return first;
	}
	function resolveAt(revision, files, scopes) {
		const history = linearHistory(revision);
		if (!history) return exactDate(revision, files);
		let first;
		try { first = files.map((file, index) => firstLinearMatch(history, file, scopes[index])).filter(Boolean).sort((a, b) => a.rank - b.rank)[0]; }
		catch { return exactDate(revision, files); }
		if (first) return first.date;
		if (!history.merge) return undefined;
		const parents = mergeParents(history.merge);
		if (parents) try {
			// Default Git history simplification follows the first TREESAME
			// parent. Mixed groups and manual resolutions retain Git's traversal.
			for (const entry of parents) {
				if (!parentDiffers(history.merge, entry, files, scopes)) return resolveAt(entry.parent, files, scopes);
			}
		} catch { /* An incomplete pathspec comparison requires the original traversal. */ }
		return exactDate(revision, files);
	}
	return files => {
		const existing = files.filter(file => existsSync(resolve(root, file)));
		if (!existing.length || !head) return undefined;
		const key = JSON.stringify([...existing].sort());
		if (cache.has(key)) return cache.get(key);
		const scopes = existing.map(pathScope);
		const date = scopes.every(Boolean) ? resolveAt(head, existing, scopes) : exactDate(head, existing);
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
			if (professional || personal) sources.add('src/components/HubSignalVisual.astro');
			sources.add('src/components/GuideDirectory.astro');
			sources.add('src/components/DirectoryBrowser.astro');
			for (const source of guideContentSources) sources.add(source);
		}
		if (pathname.startsWith('/guides/dossiers/')) {
			sources.add('src/components/GuideSeriesCallout.astro');
			for (const source of guideContentSources) sources.add(source);
		}
		if (pathname === '/recherche/') sources.add('src/components/HubSignalVisual.astro');

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
