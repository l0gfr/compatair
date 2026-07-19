import { createHash } from 'node:crypto';
import { lstat, readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';
import { readImageDimensions } from '../src/domain/image-dimensions.ts';
import { parseJavaScriptModuleSpecifiers } from './lib/javascript-module-graph.mjs';

const root = resolve('dist');
const siteOrigin = 'https://compatair.fr';
const errors = [];
const warnings = [];
const htmlFiles = [];
const artifactPaths = new Set();
const productImageDimensionsBySource = new Map();
const maximumDocumentTitleLength = 60;
const maximumInitialPageScriptBytesGzip = 50 * 1024;
const maximumPassportInitialScriptBytesGzip = 45 * 1024;
const maximumOnDemandPageScriptBytesGzip = 57 * 1024;
const maximumRuntimeCatalogBytesGzip = 32 * 1024;
const maximumSearchIndexBytesGzip = 64 * 1024;
const maximumEditorialProductInternalLinksBeforeWarning = 100;
const maximumEditorialProductInternalLinks = 120;
const maximumStaticCompatibilityResultsBySection = new Map([
	['compresseurs', 8],
	['outils-pneumatiques', 5],
	['quel-compresseur-pour', 6],
]);
const maximumHtmlArtifactBytes = 64 * 1024 * 1024;
const maximumTotalArtifactBytes = 96 * 1024 * 1024;
// Les pages produits réutilisent des cartes de catalogue afin que le temps de build ne croisse pas avec chaque référence.
const maximumSocialImageCount = 80;
const forbiddenPublicWording = [
	'CompatAir Engine',
	'actif statistique',
	'Registre append-only',
	'Ce qui peut financer le catalogue',
	'contrat public',
	'corpus de convenance',
	'taux de complétion',
	'au moment du build',
	'marge interne',
];
const publicContactEmail = 'contact@l0g.fr';
const deprecatedPublicContactEmail = ['admin', 'toonux.com'].join('@');
const requiredPublicContactPages = new Set([
	'affiliation/index.html',
	'contact/index.html',
	'securite/index.html',
	'confidentialite/index.html',
	'mentions-legales/index.html',
]);
const glossaryLinkRequirements = new Map([
	['index.html', ['/glossaire/#fad', '/glossaire/#debit-aspire', '/glossaire/#interpolation']],
	['calculateur/index.html', ['/glossaire/#fad']],
	['methodologie/index.html', ['/glossaire/#debit-restitue', '/glossaire/#debit-aspire', '/glossaire/#interpolation', '/glossaire/#fad']],
	['sources-fiabilite/index.html', ['/glossaire/#debit-restitue', '/glossaire/#debit-aspire', '/glossaire/#interpolation']],
]);
const datasetDistributionRequirements = new Map([
	['barometre-transparence/index.html', ['/data/transparency-barometer.json', '/data/transparency-barometer.csv']],
	['observatoire-qualite-documentaire/index.html', ['/data/document-quality-observatory.json', '/data/document-quality-observatory.csv']],
]);
const tradeGuidePaths = ['garage-automobile', 'carrosserie-peinture', 'menuiserie-agencement', 'maintenance-industrielle'];
const compressorIdentityPages = new Map();
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
	return [value, ...Object.values(value).flatMap(jsonLdNodes)];
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
		for (const match of child.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
			const location = match[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
			const lastmod = match[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
			if (!location) { errors.push(`${basename(childPath)}: entrée sans URL`); continue; }
			const value = decodeXml(location);
			const modifiedAt = lastmod ? Date.parse(lastmod) : Number.NaN;
			if (!Number.isFinite(modifiedAt)) errors.push(`${basename(childPath)}: lastmod absent ou invalide pour ${value}`);
			else if (modifiedAt > Date.now() + 5 * 60 * 1000) errors.push(`${basename(childPath)}: lastmod futur pour ${value}`);
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
	if (!robots.includes('Disallow: /go/')) errors.push('robots.txt: exclusion des redirections marchandes absente');
}

const securityTxtPath = '/.well-known/security.txt';
if (!artifactPaths.has(securityTxtPath)) errors.push(`${securityTxtPath}: canal de signalement absent`);
else {
	const securityTxt = await readFile(join(root, securityTxtPath), 'utf8');
	if (!securityTxt.includes('Contact: mailto:contact@l0g.fr')) errors.push(`${securityTxtPath}: contact de sécurité absent ou incorrect`);
	if (!securityTxt.includes(`Canonical: ${siteOrigin}${securityTxtPath}`)) errors.push(`${securityTxtPath}: URL canonique absente`);
	if (!securityTxt.includes(`Policy: ${siteOrigin}/securite/`)) errors.push(`${securityTxtPath}: politique de divulgation absente`);
	const expires = securityTxt.match(/^Expires:\s*(.+)$/m)?.[1];
	const expiresAt = expires ? Date.parse(expires) : Number.NaN;
	if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) errors.push(`${securityTxtPath}: expiration absente ou dépassée`);
	else if (expiresAt > Date.now() + 366 * 24 * 60 * 60 * 1000) errors.push(`${securityTxtPath}: expiration supérieure à un an`);
}

const titles = new Map();
const descriptions = new Map();
const publishedOfferIds = new Set();
if (!artifactPaths.has('/data/offers.json')) errors.push('data: snapshot des offres absent');
else {
	try {
		const offerSnapshot = JSON.parse(await readFile(join(root, '/data/offers.json'), 'utf8'));
		if (!Array.isArray(offerSnapshot.offers)) errors.push('data/offers.json: liste des offres invalide');
		else for (const offer of offerSnapshot.offers) {
			if (!/^[a-z0-9-]{1,100}$/.test(offer.id ?? '')) errors.push(`data/offers.json: identifiant d’offre invalide ${offer.id ?? 'absent'}`);
			else if (publishedOfferIds.has(offer.id)) errors.push(`data/offers.json: identifiant d’offre dupliqué ${offer.id}`);
			else publishedOfferIds.add(offer.id);
		}
	} catch { errors.push('data/offers.json: JSON invalide'); }
}
const sitePaths = new Set(htmlFiles.map((file) => {
	const rel = relative(root, file);
	return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`;
}));
const indexablePaths = new Set([...sitemapUrls].map((url) => new URL(url).pathname));
const incomingIndexableLinks = new Map([...indexablePaths].map((path) => [path, 0]));
const generatedCompatibilityPages = [...sitePaths].filter((path) => path.startsWith('/compatibilite/'));
if (generatedCompatibilityPages.length > 0) errors.push(`compatibilité: ${generatedCompatibilityPages.length} pages de couples générées, génération quadratique interdite`);
const generatedAffiliateRedirectPages = [...sitePaths].filter((path) => path.startsWith('/go/'));
if (generatedAffiliateRedirectPages.length > 0) errors.push(`affiliation: ${generatedAffiliateRedirectPages.length} redirections statiques générées, frontière serveur obligatoire`);
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

const machineDataPaths = [
	'/data/agent-knowledge.json', '/data/agent-knowledge.ndjson', '/data/agent-knowledge-manifest.json',
	'/data/catalog.ndjson', '/data/evidence-history.ndjson', '/data/citations.ndjson',
	'/data/changefeed.json', '/data/changefeed.ndjson', '/data/freshness.json', '/data/integrity.json', '/data/catalog-dcat.jsonld',
	'/openapi/compatair-2026-07-15.json', '/openapi/ucp-2026-07-15.json', '/openrpc/ucp-2026-07-15.json',
	'/schemas/ucp-compatibility-2026-07-15.json', '/.well-known/ucp', '/llms.txt', '/llms-full.txt',
];
for (const path of machineDataPaths) if (!artifactPaths.has(path)) errors.push(`${path}: surface machine obligatoire absente`);

if (artifactPaths.has('/data/agent-knowledge.json') && artifactPaths.has('/data/agent-knowledge.ndjson') && artifactPaths.has('/data/agent-knowledge-manifest.json')) {
	try {
		const knowledge = JSON.parse(await readFile(join(root, '/data/agent-knowledge.json'), 'utf8'));
		const ndjson = (await readFile(join(root, '/data/agent-knowledge.ndjson'), 'utf8')).trim().split('\n').filter(Boolean).map((line) => JSON.parse(line));
		const manifest = JSON.parse(await readFile(join(root, '/data/agent-knowledge-manifest.json'), 'utf8'));
		if (!Array.isArray(knowledge) || knowledge.length === 0 || ndjson.length !== knowledge.length || manifest.records !== knowledge.length) errors.push('agent-knowledge: nombres de documents incohérents');
		if (knowledge.some((item) => !item.id || !item.url || !item.content_sha256 || !['fr', 'en'].includes(item.locale))) errors.push('agent-knowledge: document sans identité, URL, langue ou empreinte');
		if (!manifest.languages?.fr || !manifest.languages?.en || !['complete_machine_translation', 'incomplete'].includes(manifest.languages.en.status)) errors.push('agent-knowledge: couverture linguistique non publiée');
		if ((manifest.languages.en.human_reviewed_guides ?? 0) > manifest.languages.en.full_text_guides) errors.push('agent-knowledge: couverture revue supérieure aux traductions publiées');
	} catch { errors.push('agent-knowledge: JSON ou NDJSON invalide'); }
}

if (artifactPaths.has('/data/integrity.json')) {
	try {
		const integrity = JSON.parse(await readFile(join(root, '/data/integrity.json'), 'utf8'));
		if (integrity.algorithm !== 'sha-256' || !Array.isArray(integrity.artifacts) || integrity.artifacts.length < 10) errors.push('data/integrity.json: manifeste incomplet');
		for (const entry of integrity.artifacts ?? []) {
			if (!artifactPaths.has(entry.path)) { errors.push(`data/integrity.json: artefact absent ${entry.path}`); continue; }
			const bytes = await readFile(join(root, entry.path));
			if (entry.bytes !== bytes.byteLength || entry.sha256 !== createHash('sha256').update(bytes).digest('hex')) errors.push(`data/integrity.json: empreinte incohérente ${entry.path}`);
		}
	} catch { errors.push('data/integrity.json: JSON invalide'); }
}

if (artifactPaths.has('/data/changefeed.json') && artifactPaths.has('/data/changefeed.ndjson')) {
	try {
		const changefeed = JSON.parse(await readFile(join(root, '/data/changefeed.json'), 'utf8'));
		const lines = (await readFile(join(root, '/data/changefeed.ndjson'), 'utf8')).trim().split('\n').filter(Boolean).map((line) => JSON.parse(line));
		if (!Array.isArray(changefeed.events) || lines.length !== changefeed.events.length || changefeed.events.some((event) => !event.id || !event.version || !event.observed_at || !event.canonical_url)) errors.push('changefeed: événements incomplets ou distributions incohérentes');
	} catch { errors.push('changefeed: JSON ou NDJSON invalide'); }
}

if (artifactPaths.has('/.well-known/ucp')) {
	try {
		const profile = JSON.parse(await readFile(join(root, '/.well-known/ucp'), 'utf8'));
		const capability = profile.ucp?.capabilities?.['fr.compatair.air.compatibility']?.[0];
		const transports = profile.ucp?.services?.['fr.compatair.air'] ?? [];
		if (profile.ucp?.version !== '2026-04-08' || capability?.version !== '2026-07-15') errors.push('.well-known/ucp: version ou capability invalide');
		if (!transports.some((item) => item.transport === 'rest') || !transports.some((item) => item.transport === 'mcp')) errors.push('.well-known/ucp: bindings REST ou MCP absents');
		if (capability?.config?.read_only !== true || capability?.config?.accepts_pii !== false || capability?.config?.accepts_payment !== false || capability?.config?.mutates_commerce_state !== false) errors.push('.well-known/ucp: frontière de sécurité non déclarée');
	} catch { errors.push('.well-known/ucp: JSON invalide'); }
}

for (const path of ['/ucp/index.html', '/en/ucp/index.html']) {
	if (!artifactPaths.has(path)) errors.push(`${path}: documentation UCP absente`);
	else {
		const html = await readFile(join(root, path), 'utf8');
		for (const marker of ['fr.compatair.air.compatibility', '/.well-known/ucp', 'canonical_url', '/data/integrity.json', '/data/changefeed.json']) if (!html.includes(marker)) errors.push(`${path}: élément documentaire UCP absent ${marker}`);
	}
}

if (!artifactPaths.has('/data/release.json')) errors.push('data/release.json: preuve de release absente');
else {
	try {
		const release = JSON.parse(await readFile(join(root, '/data/release.json'), 'utf8'));
		if (release.schemaVersion !== '1.0.0') errors.push('data/release.json: schemaVersion invalide');
		if (release.gitSha !== 'development' && !/^[0-9a-f]{40}$/.test(release.gitSha ?? '')) errors.push('data/release.json: SHA Git invalide');
		if (process.env.GITHUB_ACTIONS === 'true' && release.gitSha !== process.env.GITHUB_SHA) errors.push(`data/release.json: SHA ${release.gitSha ?? 'absent'} différent du SHA GitHub ${process.env.GITHUB_SHA ?? 'absent'}`);
	} catch {
		errors.push('data/release.json: JSON invalide');
	}
}

const csvArtifacts = new Map([
	['/data/transparency-barometer.csv', ['edition', 'published_at', 'brand', 'status', 'rank', 'sample_size']],
	['/data/document-quality-observatory.csv', ['published_at', 'metric', 'status', 'value', 'numerator', 'denominator', 'definition']],
]);
for (const [path, requiredColumns] of csvArtifacts) {
	if (!artifactPaths.has(path)) { errors.push(`${path}: export CSV absent`); continue; }
	const csv = await readFile(join(root, path), 'utf8');
	const header = csv.split(/\r?\n/, 1)[0];
	for (const column of requiredColumns) if (!header.includes(`"${column}"`)) errors.push(`${path}: colonne obligatoire absente ${column}`);
	if (!csv.endsWith('\r\n')) errors.push(`${path}: fin de ligne CSV CRLF absente`);
}

if (!artifactPaths.has('/calculateur/index.html')) errors.push('recommandation contrefactuelle: calculateur rendu absent');
else {
	const calculatorHtml = await readFile(join(root, '/calculateur/index.html'), 'utf8');
	for (const marker of ['data-counterfactual', 'data-counterfactual-result', 'data-counterfactual-boundary', 'data-decision-answer-first', 'Une référence brute est acceptée', 'Trois compresseurs compatibles les plus proches du besoin', 'name="measuredPressureDrop"', 'name="measuredLeak"', 'name="supplyPressure"']) {
		if (!calculatorHtml.includes(marker)) errors.push(`recommandation contrefactuelle: marqueur absent ${marker}`);
	}
}

if (!artifactPaths.has('/scanner/index.html')) errors.push('parcours de décision: scanner rendu absent');
else {
	const scannerHtml = await readFile(join(root, '/scanner/index.html'), 'utf8');
	for (const marker of ['data-decision-visual="identify"', 'Numéro indiqué sur l’étiquette', 'Correspondance exacte par référence fabricant', 'Comparer les trois compresseurs compatibles']) {
		if (!scannerHtml.includes(marker)) errors.push(`parcours de décision scanner: marqueur absent ${marker}`);
	}
}

if (!artifactPaths.has('/comparateur/index.html')) errors.push('parcours de décision: comparateur rendu absent');
else {
	const comparisonHtml = await readFile(join(root, '/comparateur/index.html'), 'utf8');
	for (const marker of ['data-decision-visual="compare"', 'data-compare-search', 'data-compare-selected', 'Comparer n’est pas classer', 'La référence brute est acceptée']) {
		if (!comparisonHtml.includes(marker)) errors.push(`parcours de décision comparateur: marqueur absent ${marker}`);
	}
}

if (!artifactPaths.has('/index.html')) errors.push('poste de contrôle: accueil rendu absent');
else {
	const homeHtml = await readFile(join(root, '/index.html'), 'utf8');
	for (const marker of ['data-home-command-center', '/calculateur/', '/radar-contradictions/', '/graphe-preuve/', '/scanner/', '/observatoire-qualite-documentaire/', 'Ce que CompatAir vérifie']) {
		if (!homeHtml.includes(marker)) errors.push(`poste de contrôle: accès ou marqueur absent ${marker}`);
	}
}

if (!artifactPaths.has('/data/transparency-barometer.json') || !artifactPaths.has('/barometre-transparence/index.html')) errors.push('baromètre: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/transparency-barometer.json'), 'utf8'));
	const html = await readFile(join(root, '/barometre-transparence/index.html'), 'utf8');
	const unpublishedMessage = 'Classement non publié à ce stade';
	for (const marker of ['barometer-score-model', 'barometer-summary', 'DEUX MESURES SÉPARÉES', 'Une note de documentation, pas un palmarès de machines']) {
		if (!html.includes(marker)) errors.push(`baromètre: explication visuelle absente ${marker}`);
	}
	if (snapshot.rankingPublished && html.includes(unpublishedMessage)) errors.push('baromètre: le rendu affirme que le classement n’est pas publié alors que le snapshot publie des rangs officiels');
	if (!snapshot.rankingPublished && !html.includes(unpublishedMessage)) errors.push('baromètre: l’avertissement de classement non publié manque alors que le snapshot est provisoire');
	for (const brand of snapshot.brands ?? []) {
		if (brand.status === 'official' && !html.includes(`<span class="barometer-rank">#${brand.rank}</span>`)) errors.push(`baromètre: rang officiel rendu absent pour ${brand.brand}`);
		if (brand.status !== 'official' && !html.includes(`<span class="barometer-rank">Provisoire</span>`)) errors.push(`baromètre: statut provisoire rendu absent pour ${brand.brand}`);
	}
}

for (const tradeGuidePath of tradeGuidePaths) {
	const artifactPath = `/guides/metiers/${tradeGuidePath}/index.html`;
	if (!artifactPaths.has(artifactPath)) { errors.push(`guide métier: page absente ${tradeGuidePath}`); continue; }
	const html = await readFile(join(root, artifactPath), 'utf8');
	for (const marker of [`data-trade-guide="${tradeGuidePath}"`, 'trade-instrument', 'trade-process', 'trade-check-grid', 'Limite publiée', 'Dossiers techniques']) {
		if (!html.includes(marker)) errors.push(`guide métier ${tradeGuidePath}: structure longue absente ${marker}`);
	}
	if (['garage-automobile', 'carrosserie-peinture'].includes(tradeGuidePath)) {
		for (const marker of [`data-trade-longform="${tradeGuidePath}"`, 'trade-scenario-grid', 'trade-air-map', 'trade-evidence-table-wrap', 'trade-field-timeline', 'trade-source-grid', 'Sources primaires']) {
			if (!html.includes(marker)) errors.push(`guide métier ${tradeGuidePath}: dossier approfondi absent ${marker}`);
		}
		if ((html.match(/href="\/calculateur\/#outil=/g) ?? []).length < 3) errors.push(`guide métier ${tradeGuidePath}: trois scénarios préremplis requis`);
		if ((html.match(/rel="noopener"/g) ?? []).length < 4) errors.push(`guide métier ${tradeGuidePath}: quatre sources primaires reliées requises`);
	}
}

if (!artifactPaths.has('/data/document-quality-observatory.json') || !artifactPaths.has('/observatoire-qualite-documentaire/index.html')) errors.push('observatoire documentaire: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/document-quality-observatory.json'), 'utf8'));
	const html = await readFile(join(root, '/observatoire-qualite-documentaire/index.html'), 'utf8');
	const { correctionLeadTime, multiPressureFad, referenceStability, contradictionResponses } = snapshot.metrics ?? {};
	const program = snapshot.measurementProgram;
	if (!correctionLeadTime || !multiPressureFad || !referenceStability || !contradictionResponses) errors.push('observatoire documentaire: quatre métriques obligatoires absentes');
	else {
		if ((correctionLeadTime.status === 'insufficient_data') !== html.includes('Non mesurable')) errors.push('observatoire documentaire: état du délai de correction incohérent entre le JSON et la page');
		if (!html.includes(`${multiPressureFad.availableCount} compresseurs sur ${multiPressureFad.eligibleCount}`)) errors.push('observatoire documentaire: dénominateur FAD absent du rendu');
		if (!html.includes(`${referenceStability.monitoredCount} MPN sous surveillance`)) errors.push('observatoire documentaire: périmètre de stabilité absent du rendu');
		if (!html.includes(`${contradictionResponses.answeredCount} réponses publiées sur ${contradictionResponses.totalCount}`)) errors.push('observatoire documentaire: taux de réponse absent du rendu');
	}
	if (!program?.baseline || !program?.trend || !program?.targets || !Array.isArray(program.history)) errors.push('observatoire documentaire: baseline, tendance, objectifs ou historique mensuel absents');
	else {
		if (program.history[0]?.kind !== 'baseline' || program.baseline.period !== program.history[0]?.period) errors.push('observatoire documentaire: ligne de base incohérente');
		if (program.history.length < 2 && program.trend.status !== 'insufficient_data') errors.push('observatoire documentaire: tendance revendiquée avec moins de deux périodes');
		if (!html.includes('data-observatory-program') || !html.includes('Ligne de base') || !html.includes('Objectifs internes')) errors.push('observatoire documentaire: programme de mesure absent du rendu');
	}
	for (const marker of ['data-observatory-visual', 'data-observatory-answer', 'Quatre mesures, sans note globale artificielle']) if (!html.includes(marker)) errors.push(`observatoire documentaire: hiérarchie visuelle absente ${marker}`);
}

if (!artifactPaths.has('/data/contradiction-radar.json') || !artifactPaths.has('/radar-contradictions/index.html')) errors.push('radar des contradictions: snapshot ou page rendue absent');
else {
	const snapshot = JSON.parse(await readFile(join(root, '/data/contradiction-radar.json'), 'utf8'));
	const html = await readFile(join(root, '/radar-contradictions/index.html'), 'utf8');
	const expectedChannels = ['manual', 'manufacturer', 'merchant', 'measured'];
	if (JSON.stringify(snapshot.channels) !== JSON.stringify(expectedChannels)) errors.push('radar des contradictions: quatre canaux obligatoires absents ou réordonnés');
	if (snapshot.summary?.totalCount !== snapshot.records?.length) errors.push('radar des contradictions: résumé incohérent');
	if (!html.includes('Aucune valeur versée dans ce canal.')) errors.push('radar des contradictions: état de canal vide absent du rendu');
	for (const marker of ['data-radar-visual', 'data-contradiction-radar', 'Chaque affirmation reste attachée à sa source']) if (!html.includes(marker)) errors.push(`radar des contradictions: hiérarchie visuelle absente ${marker}`);
	for (const record of snapshot.records ?? []) {
		if (!html.includes(record.subject)) errors.push(`radar des contradictions: entrée absente du rendu ${record.id}`);
		if ((record.claims?.length ?? 0) < 2) errors.push(`radar des contradictions: moins de deux affirmations ${record.id}`);
		for (const claim of record.claims ?? []) if (!html.includes(claim.value) || claim.evidence?.id !== claim.evidenceId) errors.push(`radar des contradictions: affirmation ou preuve incohérente ${record.id}/${claim.id}`);
		if (record.decision?.outcome === 'retain_claim' && !record.claims.some((claim) => claim.id === record.decision.selectedClaimId)) errors.push(`radar des contradictions: décision sans affirmation ${record.id}`);
		if (record.decision?.outcome !== 'retain_claim' && record.decision?.selectedClaimId !== null) errors.push(`radar des contradictions: fusion silencieuse possible ${record.id}`);
	}
}

const evidenceDirectoryHtml = artifactPaths.has('/preuves/index.html') ? await readFile(join(root, '/preuves/index.html'), 'utf8') : '';
for (const marker of ['data-evidence-visual', 'data-evidence-register', 'Un point de départ déclaré']) if (!evidenceDirectoryHtml.includes(marker)) errors.push(`historique des preuves: structure publique absente ${marker}`);

const sourceDirectoryHtml = artifactPaths.has('/sources-fiabilite/index.html') ? await readFile(join(root, '/sources-fiabilite/index.html'), 'utf8') : '';
for (const marker of ['data-source-confidence-visual', 'data-source-register', 'Une lettre technique, un libellé humain']) if (!sourceDirectoryHtml.includes(marker)) errors.push(`sources et fiabilité: structure publique absente ${marker}`);

for (const path of ['/methodologie/index.html', '/gouvernance-editoriale/index.html', '/affiliation/index.html', '/corrections/index.html', '/contact/index.html', '/confidentialite/index.html', '/cookies/index.html', '/securite/index.html']) {
	if (!artifactPaths.has(path)) errors.push(`page institutionnelle: page absente ${path}`);
	else if (!(await readFile(join(root, path), 'utf8')).includes('institutional-map')) errors.push(`page institutionnelle: harmonisation visuelle absente ${path}`);
}

if (!artifactPaths.has('/confiance/index.html')) errors.push('centre de confiance: page rendue absente');
else {
	const html = await readFile(join(root, '/confiance/index.html'), 'utf8');
	for (const marker of ['data-trust-center', 'trust-chain-map', 'trust-proof-grid', 'trust-technical-stack', 'contact@l0g.fr']) if (!html.includes(marker)) errors.push(`centre de confiance: marqueur absent ${marker}`);
}

for (const path of ['/api/index.html', '/mcp-documentation/index.html', '/ucp/index.html', '/agents/index.html', '/recu-compatibilite/index.html', '/impact-compatibilite/index.html', '/graphe-preuve/index.html']) {
	if (!artifactPaths.has(path)) errors.push(`surface technique: page absente ${path}`);
	else if (!(await readFile(join(root, path), 'utf8')).includes('data-technical-surface-nav')) errors.push(`surface technique: navigation commune absente ${path}`);
}

if (!artifactPaths.has('/graphe-preuve/index.html')) errors.push('graphe de preuve: page rendue absente');
else {
	const html = await readFile(join(root, '/graphe-preuve/index.html'), 'utf8');
	for (const marker of ['data-proof-graph', 'data-graph-layer="verdict"', 'data-graph-layer="calculation"', 'data-graph-layer="field"', 'data-graph-layer="evidence"', 'data-graph-layer="version"', 'data-simulation-form']) if (!html.includes(marker)) errors.push(`graphe de preuve: marqueur absent ${marker}`);
	if (!html.includes('/data/catalog.json') || !html.includes('/data/verdicts.json')) errors.push('graphe de preuve: snapshots publics non reliés');
}

const editorialHubs = new Map([
	['/guides/particuliers/index.html', 'particulier'],
	['/guides/professionnels/index.html', 'professionnel'],
	['/guides/metiers/garage-automobile/index.html', 'garage-automobile'],
	['/guides/metiers/carrosserie-peinture/index.html', 'carrosserie-peinture'],
	['/guides/metiers/menuiserie-agencement/index.html', 'menuiserie-agencement'],
	['/guides/metiers/maintenance-industrielle/index.html', 'maintenance-industrielle'],
]);
for (const [path, marker] of editorialHubs) {
	if (!artifactPaths.has(path)) errors.push(`parcours éditorial: page rendue absente ${path}`);
	else if (!(await readFile(join(root, path), 'utf8')).includes(`data-editorial-hub="${marker}"`)) errors.push(`parcours éditorial: marqueur absent ${path}`);
}

const discoveryHubs = new Map([
	['/guides/index.html', ['data-discovery-hub="guides"', 'data-hub-signal="guides"', 'data-guide-directory', 'data-directory-pagination']],
	['/guides/particuliers/index.html', ['data-hub-signal="guides"', 'data-guide-directory', 'data-directory-pagination']],
	['/guides/professionnels/index.html', ['data-hub-signal="guides"', 'data-guide-directory', 'data-directory-pagination']],
	['/comparatifs/index.html', ['data-discovery-hub="comparatifs"', 'comparison-summary']],
	['/marques/index.html', ['data-discovery-hub="marques"', 'data-directory-pagination']],
	['/glossaire/index.html', ['data-discovery-hub="glossaire"', 'data-glossary-hub', 'data-glossary-search']],
	['/recherche/index.html', ['data-discovery-hub="recherche"', 'data-search-hub', 'data-search-more']],
]);
for (const [path, markers] of discoveryHubs) {
	if (!artifactPaths.has(path)) errors.push(`hub de découverte: page rendue absente ${path}`);
	else {
		const html = await readFile(join(root, path), 'utf8');
		for (const marker of markers) if (!html.includes(marker)) errors.push(`hub de découverte ${path}: marqueur absent ${marker}`);
	}
}

const decisionDirectoryPages = new Map([
	['/compresseurs/index.html', ['data-filter-search', 'data-pagination']],
	['/outils-pneumatiques/index.html', ['data-directory-browser', 'data-directory-pagination']],
	['/marques/index.html', ['data-directory-browser', 'data-directory-pagination']],
	['/comparatifs/compresseurs-debit-restitue/index.html', ['data-comparison-directory', 'data-directory-pagination']],
]);
for (const [path, markers] of decisionDirectoryPages) {
	if (!artifactPaths.has(path)) errors.push(`catalogue décisionnel: page rendue absente ${path}`);
	else {
		const html = await readFile(join(root, path), 'utf8');
		for (const marker of markers) if (!html.includes(marker)) errors.push(`catalogue décisionnel ${path}: marqueur absent ${marker}`);
	}
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
	const isGuideArticle = /^guides\/[^/]+\/index\.html$/.test(label) && !['guides/particuliers/index.html', 'guides/professionnels/index.html'].includes(label);
	const isEditorialProductPage = /^(compresseurs|outils-pneumatiques|quel-compresseur-pour)\/[^/]+\/index\.html$/.test(label);
	const staticCompatibilityLimit = maximumStaticCompatibilityResultsBySection.get(label.split('/')[0]);
	for (const match of html.matchAll(/<[^>]*data-static-compatibility-results[^>]*data-result-count="(\d+)"[^>]*>/g)) {
		const resultCount = Number(match[1]);
		if (staticCompatibilityLimit !== undefined && resultCount > staticCompatibilityLimit) errors.push(`${label}: ${resultCount} résultats de compatibilité statiques, plafond ${staticCompatibilityLimit} dépassé`);
	}
	if (label.startsWith('compresseurs/') && label !== 'compresseurs/index.html') {
		const brand = decodeXml(html.match(/data-product-brand="([^"]*)"/)?.[1] ?? '');
		const model = decodeXml(html.match(/data-product-model="([^"]*)"/)?.[1] ?? '');
		const mpn = decodeXml(html.match(/data-product-mpn="([^"]*)"/)?.[1] ?? '');
		const h1 = decodeXml(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').trim() ?? '');
		if (!brand || !model || !h1) errors.push(`${label}: identité produit rendue incomplète`);
		else {
			const identityKey = `${brand.toLocaleLowerCase('fr-FR')}\u0000${model.toLocaleLowerCase('fr-FR')}`;
			const siblings = compressorIdentityPages.get(identityKey) ?? [];
			for (const sibling of siblings) {
				if (sibling.h1 === h1) errors.push(`${label}: H1 identique à ${sibling.label} pour ${brand} ${model}${mpn && sibling.mpn && mpn !== sibling.mpn ? ' malgré des MPN distincts' : ' sans variante rendue distincte'}`);
			}
			siblings.push({ label, h1, mpn });
			compressorIdentityPages.set(identityKey, siblings);
		}
	}
	if (/^(compresseurs|outils-pneumatiques)\/[^/]+\/index\.html$/.test(label)) {
		if (!html.includes('data-product-answer')) errors.push(`${label}: synthèse produit answer-first absente`);
		if (!html.includes('data-product-decision-hero')) errors.push(`${label}: héros décisionnel produit absent`);
		if (!html.includes('data-product-decision')) errors.push(`${label}: réponse produit immédiate absente`);
	}
	if (/^compresseurs\/[^/]+\/index\.html$/.test(label) && !html.includes('data-static-compatibility-results')) errors.push(`${label}: compteur de résultats statiques requis par le smoke live absent`);
	if (/^quel-compresseur-pour\/[^/]+\/index\.html$/.test(label) && !html.includes('data-use-decision-page')) errors.push(`${label}: page d’usage décisionnelle absente`);
	if (html.includes('data-search-index=')) errors.push(`${label}: index de recherche dupliqué dans le HTML`);
	if (html.includes('href="/compatibilite/')) errors.push(`${label}: lien vers une page de couple statique interdite`);
	if (html.includes(deprecatedPublicContactEmail)) errors.push(`${label}: ancienne adresse de contact publique interdite`);
	if (requiredPublicContactPages.has(label) && !html.includes(publicContactEmail)) errors.push(`${label}: adresse de contact publique absente ou incorrecte`);
	for (const wording of forbiddenPublicWording) if (html.includes(wording)) errors.push(`${label}: formulation interne interdite « ${wording} »`);
	for (const href of glossaryLinkRequirements.get(label) ?? []) if (!html.includes(`href="${href}"`)) errors.push(`${label}: lien de glossaire requis absent ${href}`);
	if (isCompatibilityDetail && !noindex) errors.push(`${label}: un couple produit-outil doit rester noindex`);
	if (isEditorialProductPage && titleSource !== 'editorial') errors.push(`${label}: titre SEO éditorial requis`);
	if (isGuideArticle) {
		const reviewStatus = html.match(/data-review-status="([^"]+)"/)?.[1];
		if (!['internal', 'external'].includes(reviewStatus)) errors.push(`${label}: statut de revue éditoriale absent ou invalide`);
		if (reviewStatus === 'internal' && !html.includes('sans validation professionnelle externe')) errors.push(`${label}: limite de revue externe absente`);
		if (!html.includes('href="/gouvernance-editoriale/"')) errors.push(`${label}: lien vers le protocole de gouvernance éditoriale absent`);
	}
	if (label === 'professionnels/index.html') {
		if (!html.includes('data-pro-value-network')) errors.push(`${label}: schéma de valeur fabricants-distributeurs absent`);
		if (!html.includes('data-pro-collaboration')) errors.push(`${label}: parcours de collaboration professionnelle absent`);
		if (!html.includes('Il ne choisit pas le verdict')) errors.push(`${label}: frontière d’indépendance professionnelle absente`);
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
	const requiredDatasetDistributions = datasetDistributionRequirements.get(label);
	if (requiredDatasetDistributions) {
		const dataset = structuredNodes.find((node) => node['@type'] === 'Dataset');
		if (!dataset) errors.push(`${label}: données structurées Dataset absentes`);
		else {
			const distributions = Array.isArray(dataset.distribution) ? dataset.distribution : [];
			for (const path of requiredDatasetDistributions) if (!distributions.some((item) => item['@type'] === 'DataDownload' && item.contentUrl === `${siteOrigin}${path}`)) errors.push(`${label}: distribution Dataset absente ${path}`);
		}
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
			for (const property of ['headline', 'description', 'image', 'datePublished', 'dateModified', 'mainEntityOfPage', 'author', 'publisher']) if (!article[property]) errors.push(`${label}: propriété Article absente ${property}`);
			if (isGuideArticle && html.includes('data-review-status="external"') && !article.reviewedBy?.name) errors.push(`${label}: relecteur externe absent des données Article`);
		}
	}
	for (const product of structuredNodes.filter((node) => node['@type'] === 'Product')) {
		if (!product.offers && !product.review && !product.aggregateRating) errors.push(`${label}: Product non éligible sans offre, avis ou note agrégée`);
	}
	for (const offer of structuredNodes.filter((node) => node['@type'] === 'Offer')) {
		if (offer.price === undefined || !offer.priceCurrency) errors.push(`${label}: Offer sans prix ou devise`);
	}

	const sourcePath = label === 'index.html' ? '/' : `/${label.replace(/index\.html$/, '')}`;
	let internalLinkCount = 0;
	for (const match of html.matchAll(/<a\s+[^>]*href="([^"]+)"/g)) {
		let target;
		try { target = new URL(decodeXml(match[1]), siteOrigin); } catch { continue; }
		if (target.origin !== siteOrigin) continue;
		internalLinkCount += 1;
		if (['/calculateur/', '/graphe-preuve/'].includes(target.pathname) && target.search) errors.push(`${label}: lien de préremplissage bloqué par robots.txt ${match[1]}`);
		if (!noindex && indexablePaths.has(sourcePath) && target.pathname !== sourcePath && incomingIndexableLinks.has(target.pathname)) incomingIndexableLinks.set(target.pathname, incomingIndexableLinks.get(target.pathname) + 1);
	}
	if (isEditorialProductPage && internalLinkCount > maximumEditorialProductInternalLinks) errors.push(`${label}: ${internalLinkCount} liens internes, plafond ${maximumEditorialProductInternalLinks} dépassé`);
	else if (isEditorialProductPage && internalLinkCount > maximumEditorialProductInternalLinksBeforeWarning) warnings.push(`${label}: ${internalLinkCount} liens internes, seuil d’alerte ${maximumEditorialProductInternalLinksBeforeWarning} dépassé`);

	for (const match of html.matchAll(/<a\s+([^>]*href="(\/go\/[^"]+)"[^>]*)>/g)) {
		const attributes = match[1];
		const target = match[2];
		const offerId = target.match(/^\/go\/([a-z0-9-]{1,100})\/?$/)?.[1];
		if (!offerId || !publishedOfferIds.has(offerId)) errors.push(`${label}: redirection marchande absente du snapshot actif ${target}`);
		const relTokens = new Set((attributes.match(/\brel="([^"]+)"/)?.[1] ?? '').split(/\s+/).filter(Boolean));
		for (const required of ['sponsored', 'nofollow', 'noopener']) if (!relTokens.has(required)) errors.push(`${label}: lien marchand ${target} sans rel=${required}`);
	}
	for (const match of html.matchAll(/(?:href|src)="(\/[^\"]*)"/g)) {
		const value = match[1].split(/[?#]/)[0];
		if (!value || value.startsWith('//') || value.startsWith('/_assets/') || value.startsWith('/images/') || value === '/favicon.svg' || value === '/favicon.ico') continue;
		if (value.startsWith('/go/')) continue;
		const local = value.endsWith('/') ? value : value.match(/\.[a-z0-9]+$/i) ? value : `${value}/`;
		if (!sitePaths.has(local) && !artifactPaths.has(value) && !['/robots.txt', '/sitemap-index.xml', '/.well-known/security.txt'].includes(value)) errors.push(`${label}: lien interne introuvable ${value}`);
	}
	for (const match of html.matchAll(/<img\s+([^>]+)>/g)) {
		const attributes = ` ${match[1]}`;
		if (!/\salt="[^"]*"/.test(attributes)) errors.push(`${label}: image sans alt`);
		if (!/\swidth="\d+"/.test(attributes) || !/\sheight="\d+"/.test(attributes)) errors.push(`${label}: dimensions image absentes`);
		const source = attributes.match(/\ssrc="([^"]+)"/)?.[1];
		if (source?.startsWith('/images/products/')) {
			if (!artifactPaths.has(source)) errors.push(`${label}: image produit absente de l’artifact ${source}`);
			else {
				let dimensions = productImageDimensionsBySource.get(source);
				if (!dimensions) {
					dimensions = readImageDimensions(await readFile(join(root, source)));
					if (dimensions) productImageDimensionsBySource.set(source, dimensions);
				}
				if (!dimensions) errors.push(`${label}: dimensions du fichier produit illisibles ${source}`);
				else {
					const renderedWidth = Number(attributes.match(/\swidth="(\d+)"/)?.[1]);
					const renderedHeight = Number(attributes.match(/\sheight="(\d+)"/)?.[1]);
					if (renderedWidth !== dimensions.width || renderedHeight !== dimensions.height) errors.push(`${label}: dimensions HTML ${renderedWidth}x${renderedHeight} différentes du fichier ${source} (${dimensions.width}x${dimensions.height})`);
				}
			}
		}
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

for (const [path, incoming] of incomingIndexableLinks) if (incoming === 0) errors.push(`maillage interne: page indexable sans lien entrant HTML ${path}`);

for (const sitemapUrl of sitemapUrls) {
	const pathname = new URL(sitemapUrl).pathname;
	if (pathname.startsWith('/compatibilite/')) errors.push(`sitemap: couple produit-outil indexable interdit ${sitemapUrl}`);
	if (pathname.startsWith('/go/')) errors.push(`sitemap: redirection marchande indexable interdite ${sitemapUrl}`);
	if (!sitePaths.has(pathname)) errors.push(`sitemap: URL sans page HTML ${sitemapUrl}`);
}

if (warnings.length) console.warn(`Alertes SEO non bloquantes :\n${warnings.join('\n')}`);
if (errors.length) {
	console.error(errors.join('\n'));
	process.exit(1);
}
const conclusiveCoverage = fixedFlowCompatibilityPairs ? (conclusiveCompatibilityPairs / fixedFlowCompatibilityPairs * 100).toFixed(1).replace('.', ',') : '0,0';
console.log(`Audit réussi : ${htmlFiles.length} pages, ${sitemapUrls.size} URL canoniques, ${verifiedCompatibilityPairs} couples conservés dans le snapshot sans page HTML quadratique, couverture conclusive ${conclusiveCoverage} % (${conclusiveCompatibilityPairs}/${fixedFlowCompatibilityPairs} couples à débit fixe), ${socialImageCount} cartes sociales et titres ≤ ${maximumDocumentTitleLength} caractères. Artifact ${Math.ceil(totalArtifactBytes / 1024 / 1024)} Mo dont ${Math.ceil(htmlArtifactBytes / 1024 / 1024)} Mo de HTML, sous les budgets de ${maximumTotalArtifactBytes / 1024 / 1024} et ${maximumHtmlArtifactBytes / 1024 / 1024} Mo ; index de recherche ${Math.ceil(searchIndexBytesGzip / 1024)} Ko gzip. JavaScript initial ≤ ${maximumInitialPageScriptBytesGzip / 1024} Ko gzip (maximum ${Math.ceil(largestInitialPageScriptBudget.bytes / 1024)} Ko sur ${largestInitialPageScriptBudget.label}, Passeport ${Math.ceil(passportInitialScriptBudget.bytes / 1024)} Ko sous son budget de ${maximumPassportInitialScriptBytesGzip / 1024} Ko) ; total à la demande ≤ ${maximumOnDemandPageScriptBytesGzip / 1024} Ko (Calculateur ${Math.ceil(calculatorOnDemandScriptBudget.bytes / 1024)} Ko, Passeport ${Math.ceil(passportOnDemandScriptBudget.bytes / 1024)} Ko, maximum global ${Math.ceil(largestOnDemandPageScriptBudget.bytes / 1024)} Ko sur ${largestOnDemandPageScriptBudget.label}) ; catalogue d’exécution ${Math.ceil(runtimeCatalogBytesGzip / 1024)} Ko sous son budget de ${maximumRuntimeCatalogBytesGzip / 1024} Ko. Widget immuable et SRI vérifiés.`);
