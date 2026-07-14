import { lstat, readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';

const root = resolve('dist');
const siteOrigin = 'https://compatair.fr';
const errors = [];
const htmlFiles = [];
const artifactPaths = new Set();

async function walk(directory) {
	for (const name of await readdir(directory)) {
		const file = join(directory, name);
		const info = await lstat(file);
		const label = relative(root, file);
		if (info.isSymbolicLink()) errors.push(`${label}: lien symbolique interdit dans l’artifact`);
		else if (info.isDirectory()) await walk(file);
		else if (!info.isFile()) errors.push(`${label}: type de fichier spécial interdit dans l’artifact`);
		else {
			artifactPaths.add(`/${label}`);
			if (name.endsWith('.map')) errors.push(`${label}: source map publique interdite`);
			else if (name.endsWith('.html')) htmlFiles.push(file);
		}
	}
}

function decodeXml(value) {
	return value.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&apos;', "'");
}

function jsonLdNodes(value) {
	if (Array.isArray(value)) return value.flatMap(jsonLdNodes);
	if (!value || typeof value !== 'object') return [];
	return value['@graph'] ? [value, ...jsonLdNodes(value['@graph'])] : [value];
}

await walk(root);

const sitemapIndexPath = join(root, 'sitemap-index.xml');
if (!artifactPaths.has('/sitemap-index.xml')) errors.push('sitemap-index.xml: fichier absent');
const sitemapUrls = new Set();
if (artifactPaths.has('/sitemap-index.xml')) {
	const sitemapIndex = await readFile(sitemapIndexPath, 'utf8');
	const sitemapLocations = [...sitemapIndex.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeXml(match[1]));
	if (sitemapLocations.length === 0) errors.push('sitemap-index.xml: aucun sitemap enfant');
	for (const location of sitemapLocations) {
		let url;
		try { url = new URL(location); } catch { errors.push(`sitemap-index.xml: URL invalide ${location}`); continue; }
		if (url.origin !== siteOrigin) { errors.push(`sitemap-index.xml: origine externe ${location}`); continue; }
		const childPath = join(root, basename(url.pathname));
		if (!artifactPaths.has(`/${basename(url.pathname)}`)) { errors.push(`sitemap-index.xml: fichier enfant absent ${url.pathname}`); continue; }
		const child = await readFile(childPath, 'utf8');
		for (const match of child.matchAll(/<loc>([^<]+)<\/loc>/g)) {
			const value = decodeXml(match[1]);
			try {
				const pageUrl = new URL(value);
				if (pageUrl.origin !== siteOrigin) errors.push(`${basename(childPath)}: origine externe ${value}`);
				else if (pageUrl.search || pageUrl.hash) errors.push(`${basename(childPath)}: URL non canonique ${value}`);
				else if (sitemapUrls.has(value)) errors.push(`${basename(childPath)}: URL dupliquée ${value}`);
				else sitemapUrls.add(value);
			} catch { errors.push(`${basename(childPath)}: URL invalide ${value}`); }
		}
	}
}

const robotsPath = join(root, 'robots.txt');
if (!artifactPaths.has('/robots.txt')) errors.push('robots.txt: fichier absent');
else {
	const robots = await readFile(robotsPath, 'utf8');
	if (!robots.includes(`Sitemap: ${siteOrigin}/sitemap-index.xml`)) errors.push('robots.txt: déclaration du sitemap absente ou invalide');
}

const titles = new Map();
const descriptions = new Map();
const sitePaths = new Set(htmlFiles.map((file) => {
	const rel = relative(root, file);
	return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
}));

for (const file of htmlFiles) {
	const html = await readFile(file, 'utf8');
	const label = relative(root, file);
	const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
	const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
	const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
	const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';
	const noindex = robots.split(',').map((rule) => rule.trim()).includes('noindex');

	if (!title) errors.push(`${label}: title absent`);
	else if (titles.has(title)) errors.push(`${label}: title dupliqué avec ${titles.get(title)}`);
	else titles.set(title, label);
	if (!description) errors.push(`${label}: description absente`);
	else if (descriptions.has(description)) errors.push(`${label}: description dupliquée avec ${descriptions.get(description)}`);
	else descriptions.set(description, label);
	if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) errors.push(`${label}: un H1 exactement est requis`);
	if (!canonical) errors.push(`${label}: canonical absent`);
	else {
		try {
			const canonicalUrl = new URL(canonical);
			if (canonicalUrl.origin !== siteOrigin || canonicalUrl.search || canonicalUrl.hash) errors.push(`${label}: canonical invalide ${canonical}`);
			if (noindex && sitemapUrls.has(canonical)) errors.push(`${label}: page noindex présente dans le sitemap`);
			if (!noindex && !sitemapUrls.has(canonical)) errors.push(`${label}: page indexable absente du sitemap`);
		} catch { errors.push(`${label}: canonical invalide ${canonical}`); }
	}

	const structuredNodes = [];
	for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		try {
			const parsed = JSON.parse(match[1]);
			if (parsed['@context'] !== 'https://schema.org') errors.push(`${label}: contexte JSON-LD absent ou invalide`);
			structuredNodes.push(...jsonLdNodes(parsed));
		} catch { errors.push(`${label}: JSON-LD invalide`); }
	}
	const breadcrumb = structuredNodes.find((node) => node['@type'] === 'BreadcrumbList');
	if (breadcrumb) {
		const items = breadcrumb.itemListElement;
		if (!Array.isArray(items) || items.some((item, index) => item.position !== index + 1 || !item.name || !item.item?.startsWith(siteOrigin))) errors.push(`${label}: BreadcrumbList incomplet ou incohérent`);
	}
	if (html.includes('<meta property="og:type" content="article">')) {
		const article = structuredNodes.find((node) => ['Article', 'TechArticle', 'NewsArticle'].includes(node['@type']));
		if (!article) errors.push(`${label}: données Article absentes`);
		else for (const property of ['headline', 'description', 'dateModified', 'mainEntityOfPage', 'author', 'publisher']) if (!article[property]) errors.push(`${label}: propriété Article absente ${property}`);
	}

	for (const match of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
		const value = match[1].split(/[?#]/)[0];
		if (!value || value.startsWith('//') || value.startsWith('/_assets/') || value.startsWith('/images/') || value === '/favicon.svg' || value === '/favicon.ico') continue;
		const local = value.endsWith('/') ? value : value.match(/\.[a-z0-9]+$/i) ? value : `${value}/`;
		if (!sitePaths.has(local) && !artifactPaths.has(value) && !['/robots.txt', '/sitemap-index.xml', '/.well-known/security.txt'].includes(value)) errors.push(`${label}: lien interne introuvable ${value}`);
	}
	for (const match of html.matchAll(/<img\s+([^>]+)>/g)) {
		if (!/\salt="[^"]*"/.test(` ${match[1]}`)) errors.push(`${label}: image sans alt`);
		if (!/\swidth="\d+"/.test(` ${match[1]}`) || !/\sheight="\d+"/.test(` ${match[1]}`)) errors.push(`${label}: dimensions image absentes`);
	}
}

for (const sitemapUrl of sitemapUrls) {
	const pathname = new URL(sitemapUrl).pathname;
	if (!sitePaths.has(pathname)) errors.push(`sitemap: URL sans page HTML ${sitemapUrl}`);
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
console.log(`Audit SEO réussi : ${htmlFiles.length} pages, ${sitemapUrls.size} URL canoniques, indexabilité, JSON-LD, liens et images cohérents.`);
