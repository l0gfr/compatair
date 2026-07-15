import { createHash } from 'node:crypto';
import { lstat, readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { parseJavaScriptModuleSpecifiers } from './lib/javascript-module-graph.mjs';

const root = resolve('dist');
const siteOrigin = 'https://compatair.fr';
const errors = [];
const htmlFiles = [];
const artifactPaths = new Set();
const maximumDocumentTitleLength = 60;
const maximumInitialPageScriptBytesGzip = 50 * 1024;
const maximumPassportInitialScriptBytesGzip = 45 * 1024;
const maximumOnDemandPageScriptBytesGzip = 57 * 1024;
const maximumRuntimeCatalogBytesGzip = 32 * 1024;
const maximumSearchIndexBytesGzip = 64 * 1024;
const maximumHtmlArtifactBytes = 64 * 1024 * 1024;
const maximumTotalArtifactBytes = 96 * 1024 * 1024;
// Les pages produits réutilisent des cartes de catalogue afin que le temps de build ne croisse pas avec chaque référence.
const maximumSocialImageCount = 80;
const forbiddenPublicWording = [
	'CompatAir Engine',
	'actif statistique',
	'AirGraph',
	'Registre append-only',
	'Ce qui peut financer le catalogue',
	'contrat public',
	'corpus de convenance',
	'taux de complétion',
	'au moment du build',
	'marge interne',
];
const glossaryLinkRequirements = new Map([
	['index.html', ['/glossaire/#fad', '/glossaire/#debit-aspire', '/glossaire/#interpolation']],
	['calculateur/index.html', ['/glossaire/#fad']],
	['methodologie/index.html', ['/glossaire/#debit-restitue', '/glossaire/#debit-aspire', '/glossaire/#interpolation', '/glossaire/#fad']],
	['sources-fiabilite/index.html', ['/glossaire/#debit-restitue', '/glossaire/#debit-aspire', '/glossaire/#interpolation']],
]);
let largestInitialPageScriptBudget = { bytes: 0, label: '', modules: 0 };
let largestOnDemandPageScriptBudget = { bytes: 0, label: '', modules: 0 };
let calculatorOnDemandScriptBudget = { bytes: 0, modules: 0 };
let passportInitialScriptBudget = { bytes: 0, modules: 0 };
let passportOnDemandScriptBudget = { bytes: 0, modules: 0 };
let runtimeCatalogBytesGzip = 0;
let searchIndexBytesGzip = 0;
let totalArtifactBytes = 0;
let htmlArtifactBytes = 0;
let fixedFlowCompatibilityPairs = 0;
let conclusiveCompatibilityPairs = 0;
let publishedCatalogVersion = '';
const immutableAssetManifest = JSON.parse(await readFile(resolve('config/immutable-assets.json'), 'utf8'));

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
			totalArtifactBytes += info.size;
			if (name.endsWith('.html')) htmlArtifactBytes += info.size;
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

const socialImageCount = [...artifactPaths].filter((path) => /^\/social\/[^/]+\.png$/.test(path)).length;
if (socialImageCount > maximumSocialImageCount) errors.push(`social: ${socialImageCount} cartes générées, plafond ${maximumSocialImageCount} dépassé`);

const immutableWidgetPath = '/widget/v1.0.0/compatair-widget.js';
let immutableWidgetIntegrity = '';
if (!artifactPaths.has(immutableWidgetPath)) errors.push(`${immutableWidgetPath}: widget immuable absent`);
else {
	immutableWidgetIntegrity = `sha384-${createHash('sha384').update(await readFile(join(root, immutableWidgetPath))).digest('base64')}`;
	if (immutableAssetManifest.assets?.[immutableWidgetPath] !== immutableWidgetIntegrity) errors.push(`${immutableWidgetPath}: contenu différent de l’empreinte historique épinglée`);
}

async function scriptClosure(entryPaths, includeDynamicImports) {
	const modules = new Set();
	async function visit(scriptPath) {
		if (modules.has(scriptPath)) return;
		modules.add(scriptPath);
		if (!artifactPaths.has(scriptPath)) { errors.push(`${scriptPath}: module JavaScript introuvable`); return; }
		const source = await readFile(join(root, scriptPath), 'utf8');
		let imports;
		try { imports = parseJavaScriptModuleSpecifiers(source, scriptPath); }
		catch (error) { errors.push(error instanceof Error ? error.message : `${scriptPath}: JavaScript impossible à analyser`); return; }
		if (imports.unresolvedDynamicImports) errors.push(`${scriptPath}: ${imports.unresolvedDynamicImports} import(s) dynamique(s) non résoluble(s), graphe impossible à budgéter`);
		const specifiers = includeDynamicImports ? [...imports.staticImports, ...imports.dynamicImports] : imports.staticImports;
		for (const specifier of specifiers) {
			const imported = new URL(specifier, new URL(scriptPath, siteOrigin));
			if (imported.origin !== siteOrigin) { errors.push(`${scriptPath}: import JavaScript externe non budgété ${specifier}`); continue; }
			if (!imported.pathname.endsWith('.js')) { errors.push(`${scriptPath}: import non JavaScript impossible à budgéter ${specifier}`); continue; }
			await visit(imported.pathname);
		}
	}
	for (const entryPath of entryPaths) await visit(entryPath);
	let bytes = 0;
	for (const modulePath of modules) if (artifactPaths.has(modulePath)) bytes += gzipSync(await readFile(join(root, modulePath))).byteLength;
	return { bytes, modules: modules.size };
}

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
const generatedCompatibilityPages = [...sitePaths].filter((path) => path.startsWith('/compatibilite/'));
if (generatedCompatibilityPages.length > 0) errors.push(`compatibilité: ${generatedCompatibilityPages.length} pages de couples générées, génération quadratique interdite`);
if (htmlArtifactBytes > maximumHtmlArtifactBytes) errors.push(`artifact: HTML ${Math.ceil(htmlArtifactBytes / 1024 / 1024)} Mo, budget ${maximumHtmlArtifactBytes / 1024 / 1024} Mo dépassé`);
if (totalArtifactBytes > maximumTotalArtifactBytes) errors.push(`artifact: poids total ${Math.ceil(totalArtifactBytes / 1024 / 1024)} Mo, budget ${maximumTotalArtifactBytes / 1024 / 1024} Mo dépassé`);

let verifiedCompatibilityPairs = 0;
if (!artifactPaths.has('/data/catalog.json') || !artifactPaths.has('/data/verdicts.json')) errors.push('data: catalogue ou verdicts absents pour contrôler les URL de compatibilité');
else {
	const catalog = JSON.parse(await readFile(join(root, '/data/catalog.json'), 'utf8'));
	publishedCatalogVersion = catalog.catalogVersion ?? '';
	const verdicts = JSON.parse(await readFile(join(root, '/data/verdicts.json'), 'utf8'));
	fixedFlowCompatibilityPairs = verdicts.pairs?.length ?? 0;
	conclusiveCompatibilityPairs = (verdicts.pairs ?? []).filter((item) => item.verdict !== 'insufficient_data').length;
	const verdictMap = new Map((verdicts.pairs ?? []).map((item) => [`${item.compressorId}--${item.toolId}`, item]));
	for (const compressor of catalog.compressors ?? []) for (const tool of catalog.tools ?? []) {
		const pair = verdictMap.get(`${compressor.id}--${tool.id}`);
		if (tool.demandModel === 'fixed-flow' && !pair) errors.push(`verdicts: couple à débit fixe absent ${compressor.id}--${tool.id}`);
		verifiedCompatibilityPairs += 1;
	}
}

if (!artifactPaths.has('/data/runtime-catalog.json')) errors.push('data: catalogue d’exécution absent');
else {
	const runtimeCatalogBytes = await readFile(join(root, '/data/runtime-catalog.json'));
	const runtimeCatalog = JSON.parse(runtimeCatalogBytes);
	runtimeCatalogBytesGzip = gzipSync(runtimeCatalogBytes).byteLength;
	if (!publishedCatalogVersion || runtimeCatalog.catalogVersion !== publishedCatalogVersion) errors.push('data/runtime-catalog.json: version source différente du catalogue public');
	if (runtimeCatalogBytesGzip > maximumRuntimeCatalogBytesGzip) errors.push(`data/runtime-catalog.json: ${Math.ceil(runtimeCatalogBytesGzip / 1024)} Ko gzip, budget ${maximumRuntimeCatalogBytesGzip / 1024} Ko dépassé`);
}

if (!artifactPaths.has('/data/search-index.json')) errors.push('data: index de recherche externe absent');
else {
	const searchIndexBytes = await readFile(join(root, '/data/search-index.json'));
	const searchIndex = JSON.parse(searchIndexBytes);
	searchIndexBytesGzip = gzipSync(searchIndexBytes).byteLength;
	if (!Array.isArray(searchIndex) || searchIndex.some((item) => !item.title || !item.type || !item.url || typeof item.keywords !== 'string')) errors.push('data/search-index.json: structure invalide');
	if (searchIndexBytesGzip > maximumSearchIndexBytesGzip) errors.push(`data/search-index.json: ${Math.ceil(searchIndexBytesGzip / 1024)} Ko gzip, budget ${maximumSearchIndexBytesGzip / 1024} Ko dépassé`);
}

if (!artifactPaths.has('/data/transparency-barometer.json') || !artifactPaths.has('/barometre-transparence/index.html')) errors.push('baromètre: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/transparency-barometer.json'), 'utf8'));
	const html = await readFile(join(root, '/barometre-transparence/index.html'), 'utf8');
	const unpublishedMessage = 'Classement non publié à ce stade';
	if (snapshot.rankingPublished && html.includes(unpublishedMessage)) errors.push('baromètre: le rendu affirme que le classement n’est pas publié alors que le snapshot publie des rangs officiels');
	if (!snapshot.rankingPublished && !html.includes(unpublishedMessage)) errors.push('baromètre: l’avertissement de classement non publié manque alors que le snapshot est provisoire');
	for (const brand of snapshot.brands ?? []) {
		if (brand.status === 'official' && !html.includes(`<span class="barometer-rank">#${brand.rank}</span>`)) errors.push(`baromètre: rang officiel rendu absent pour ${brand.brand}`);
		if (brand.status !== 'official' && !html.includes(`<span class="barometer-rank">Provisoire</span>`)) errors.push(`baromètre: statut provisoire rendu absent pour ${brand.brand}`);
	}
}

if (!artifactPaths.has('/data/document-quality-observatory.json') || !artifactPaths.has('/observatoire-qualite-documentaire/index.html')) errors.push('observatoire documentaire: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/document-quality-observatory.json'), 'utf8'));
	const html = await readFile(join(root, '/observatoire-qualite-documentaire/index.html'), 'utf8');
	const { correctionLeadTime, multiPressureFad, referenceStability, contradictionResponses } = snapshot.metrics ?? {};
	if (!correctionLeadTime || !multiPressureFad || !referenceStability || !contradictionResponses) errors.push('observatoire documentaire: quatre métriques obligatoires absentes');
	else {
		if ((correctionLeadTime.status === 'insufficient_data') !== html.includes('Non mesurable')) errors.push('observatoire documentaire: état du délai de correction incohérent entre le JSON et la page');
		if (!html.includes(`${multiPressureFad.availableCount} compresseurs sur ${multiPressureFad.eligibleCount}`)) errors.push('observatoire documentaire: dénominateur FAD absent du rendu');
		if (!html.includes(`${referenceStability.monitoredCount} MPN sous surveillance`)) errors.push('observatoire documentaire: périmètre de stabilité absent du rendu');
		if (!html.includes(`${contradictionResponses.answeredCount} réponses publiées sur ${contradictionResponses.totalCount}`)) errors.push('observatoire documentaire: taux de réponse absent du rendu');
	}
}

if (!artifactPaths.has('/data/contradiction-radar.json') || !artifactPaths.has('/radar-contradictions/index.html')) errors.push('radar des contradictions: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/contradiction-radar.json'), 'utf8'));
	const html = await readFile(join(root, '/radar-contradictions/index.html'), 'utf8');
	const expectedChannels = ['manual', 'manufacturer', 'merchant', 'measured'];
	if (JSON.stringify(snapshot.channels) !== JSON.stringify(expectedChannels)) errors.push('radar des contradictions: quatre canaux obligatoires absents ou réordonnés');
	if (snapshot.summary?.totalCount !== snapshot.records?.length) errors.push('radar des contradictions: résumé incohérent');
	if (!html.includes('Aucune valeur versée dans ce canal.')) errors.push('radar des contradictions: état de canal vide absent du rendu');
	for (const record of snapshot.records ?? []) {
		if (!html.includes(record.subject)) errors.push(`radar des contradictions: entrée absente du rendu ${record.id}`);
		if ((record.claims?.length ?? 0) < 2) errors.push(`radar des contradictions: moins de deux affirmations ${record.id}`);
		for (const claim of record.claims ?? []) if (!html.includes(claim.value) || claim.evidence?.id !== claim.evidenceId) errors.push(`radar des contradictions: affirmation ou preuve incohérente ${record.id}/${claim.id}`);
		if (record.decision?.outcome === 'retain_claim' && !record.claims.some((claim) => claim.id === record.decision.selectedClaimId)) errors.push(`radar des contradictions: décision sans affirmation ${record.id}`);
		if (record.decision?.outcome !== 'retain_claim' && record.decision?.selectedClaimId !== null) errors.push(`radar des contradictions: fusion silencieuse possible ${record.id}`);
	}
}

if (!artifactPaths.has('/graphe-preuve/index.html')) errors.push('graphe de preuve: page rendue absente');
else {
	const html = await readFile(join(root, '/graphe-preuve/index.html'), 'utf8');
	for (const marker of ['data-proof-graph', 'data-graph-layer="verdict"', 'data-graph-layer="calculation"', 'data-graph-layer="field"', 'data-graph-layer="evidence"', 'data-graph-layer="version"', 'data-simulation-form']) if (!html.includes(marker)) errors.push(`graphe de preuve: marqueur absent ${marker}`);
	if (!html.includes('/data/catalog.json') || !html.includes('/data/verdicts.json')) errors.push('graphe de preuve: snapshots publics non reliés');
}

for (const file of htmlFiles) {
	const html = await readFile(file, 'utf8');
	const label = relative(root, file);
	const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
	const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
	const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
	const socialImage = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
	const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? '';
	const author = html.match(/<meta name="author" content="([^"]+)"/)?.[1];
	const titleSource = html.match(/<meta name="compatair:title-source" content="([^"]+)"/)?.[1];
	const noindex = robots.split(',').map((rule) => rule.trim()).includes('noindex');
	const isCompatibilityDetail = label.startsWith('compatibilite/');
	const isGuideArticle = /^guides\/[^/]+\/index\.html$/.test(label);
	const isEditorialProductPage = /^(compresseurs|outils-pneumatiques|quel-compresseur-pour)\/[^/]+\/index\.html$/.test(label);
	if (html.includes('data-search-index=')) errors.push(`${label}: index de recherche dupliqué dans le HTML`);
	if (html.includes('href="/compatibilite/')) errors.push(`${label}: lien vers une page de couple statique interdite`);
	if (html.includes('href="/gouvernance-editoriale/"')) errors.push(`${label}: la gouvernance éditoriale masquée ne doit pas être liée publiquement`);
	for (const wording of forbiddenPublicWording) if (html.includes(wording)) errors.push(`${label}: formulation interne interdite « ${wording} »`);
	for (const href of glossaryLinkRequirements.get(label) ?? []) if (!html.includes(`href="${href}"`)) errors.push(`${label}: lien de glossaire requis absent ${href}`);
	if (isCompatibilityDetail && !noindex) errors.push(`${label}: un couple produit-outil doit rester noindex`);
	if (isEditorialProductPage && titleSource !== 'editorial') errors.push(`${label}: titre SEO éditorial requis`);
	if (isGuideArticle) {
		const reviewStatus = html.match(/data-review-status="([^"]+)"/)?.[1];
		if (!['internal', 'external'].includes(reviewStatus)) errors.push(`${label}: statut de revue éditoriale absent ou invalide`);
		if (reviewStatus === 'internal' && !html.includes('sans validation professionnelle externe')) errors.push(`${label}: limite de revue externe absente`);
	}
	if (label === 'professionnels/index.html') {
		const widgetTag = html.match(/<script[^>]+src="\/widget\/v1\.0\.0\/compatair-widget\.js"[^>]*>/)?.[0];
		if (!widgetTag) errors.push(`${label}: widget immuable absent`);
		else {
			const integrity = widgetTag.match(/\sintegrity="([^"]+)"/)?.[1];
			if (!integrity || integrity !== immutableWidgetIntegrity) errors.push(`${label}: empreinte SRI du widget absente ou invalide`);
			if (!/\scrossorigin="anonymous"/.test(widgetTag)) errors.push(`${label}: crossorigin anonyme requis pour le widget SRI`);
		}
	}

	if (!title) errors.push(`${label}: title absent`);
	else {
		if (decodeXml(title).length > maximumDocumentTitleLength) errors.push(`${label}: title supérieur à ${maximumDocumentTitleLength} caractères`);
		if (titles.has(title)) errors.push(`${label}: title dupliqué avec ${titles.get(title)}`);
		else titles.set(title, label);
	}
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
	if (!label.startsWith('go/') && author !== 'CompatAir') errors.push(`${label}: auteur global absent ou incohérent`);
	if (!socialImage) errors.push(`${label}: image sociale absente`);
	else {
		try {
			const socialUrl = new URL(socialImage);
			if (socialUrl.origin !== siteOrigin || !socialUrl.pathname.endsWith('.png')) errors.push(`${label}: image sociale invalide ${socialImage}`);
			else if (!artifactPaths.has(socialUrl.pathname)) errors.push(`${label}: fichier d’image sociale absent ${socialUrl.pathname}`);
		} catch { errors.push(`${label}: image sociale invalide ${socialImage}`); }
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
		else {
			for (const property of ['headline', 'description', 'dateModified', 'mainEntityOfPage', 'author', 'publisher']) if (!article[property]) errors.push(`${label}: propriété Article absente ${property}`);
			if (isGuideArticle && html.includes('data-review-status="external"') && !article.reviewedBy?.name) errors.push(`${label}: relecteur externe absent des données Article`);
		}
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
	const pageScripts = new Set([...html.matchAll(/<script[^>]+src="(\/[^"]+\.js)"/g)].map((match) => match[1]));
	const initialScriptBudget = await scriptClosure(pageScripts, false);
	const onDemandScriptBudget = await scriptClosure(pageScripts, true);
	if (initialScriptBudget.bytes > largestInitialPageScriptBudget.bytes) largestInitialPageScriptBudget = { bytes: initialScriptBudget.bytes, label, modules: initialScriptBudget.modules };
	if (onDemandScriptBudget.bytes > largestOnDemandPageScriptBudget.bytes) largestOnDemandPageScriptBudget = { bytes: onDemandScriptBudget.bytes, label, modules: onDemandScriptBudget.modules };
	if (label === 'calculateur/index.html') calculatorOnDemandScriptBudget = onDemandScriptBudget;
	if (label === 'passeport/index.html') passportInitialScriptBudget = initialScriptBudget;
	if (label === 'passeport/index.html') passportOnDemandScriptBudget = onDemandScriptBudget;
	if (initialScriptBudget.bytes > maximumInitialPageScriptBytesGzip) errors.push(`${label}: chargement JavaScript initial ${Math.ceil(initialScriptBudget.bytes / 1024)} Ko gzip sur ${initialScriptBudget.modules} modules, budget ${maximumInitialPageScriptBytesGzip / 1024} Ko dépassé`);
	if (label === 'passeport/index.html' && initialScriptBudget.bytes > maximumPassportInitialScriptBytesGzip) errors.push(`${label}: chargement JavaScript initial ${Math.ceil(initialScriptBudget.bytes / 1024)} Ko gzip, budget Passeport ${maximumPassportInitialScriptBytesGzip / 1024} Ko dépassé`);
	if (onDemandScriptBudget.bytes > maximumOnDemandPageScriptBytesGzip) errors.push(`${label}: graphe JavaScript total à la demande ${Math.ceil(onDemandScriptBudget.bytes / 1024)} Ko gzip sur ${onDemandScriptBudget.modules} modules, budget ${maximumOnDemandPageScriptBytesGzip / 1024} Ko dépassé`);
}

for (const sitemapUrl of sitemapUrls) {
	const pathname = new URL(sitemapUrl).pathname;
	if (pathname.startsWith('/compatibilite/')) errors.push(`sitemap: couple produit-outil indexable interdit ${sitemapUrl}`);
	if (!sitePaths.has(pathname)) errors.push(`sitemap: URL sans page HTML ${sitemapUrl}`);
}

if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
const conclusiveCoverage = fixedFlowCompatibilityPairs ? (conclusiveCompatibilityPairs / fixedFlowCompatibilityPairs * 100).toFixed(1).replace('.', ',') : '0,0';
console.log(`Audit réussi : ${htmlFiles.length} pages, ${sitemapUrls.size} URL canoniques, ${verifiedCompatibilityPairs} couples conservés dans le snapshot sans page HTML quadratique, couverture conclusive ${conclusiveCoverage} % (${conclusiveCompatibilityPairs}/${fixedFlowCompatibilityPairs} couples à débit fixe), ${socialImageCount} cartes sociales et titres ≤ ${maximumDocumentTitleLength} caractères. Artifact ${Math.ceil(totalArtifactBytes / 1024 / 1024)} Mo dont ${Math.ceil(htmlArtifactBytes / 1024 / 1024)} Mo de HTML, sous les budgets de ${maximumTotalArtifactBytes / 1024 / 1024} et ${maximumHtmlArtifactBytes / 1024 / 1024} Mo ; index de recherche ${Math.ceil(searchIndexBytesGzip / 1024)} Ko gzip. JavaScript initial ≤ ${maximumInitialPageScriptBytesGzip / 1024} Ko gzip (maximum ${Math.ceil(largestInitialPageScriptBudget.bytes / 1024)} Ko sur ${largestInitialPageScriptBudget.label}, Passeport ${Math.ceil(passportInitialScriptBudget.bytes / 1024)} Ko sous son budget de ${maximumPassportInitialScriptBytesGzip / 1024} Ko) ; total à la demande ≤ ${maximumOnDemandPageScriptBytesGzip / 1024} Ko (Calculateur ${Math.ceil(calculatorOnDemandScriptBudget.bytes / 1024)} Ko, Passeport ${Math.ceil(passportOnDemandScriptBudget.bytes / 1024)} Ko, maximum global ${Math.ceil(largestOnDemandPageScriptBudget.bytes / 1024)} Ko sur ${largestOnDemandPageScriptBudget.label}) ; catalogue d’exécution ${Math.ceil(runtimeCatalogBytesGzip / 1024)} Ko sous son budget de ${maximumRuntimeCatalogBytesGzip / 1024} Ko. Widget immuable et SRI vérifiés.`);
