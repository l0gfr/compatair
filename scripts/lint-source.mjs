import { lstat, readFile, readdir } from 'node:fs/promises';
import { basename, extname, relative, resolve } from 'node:path';
import { parseDocument } from 'yaml';
import { walkRegularSourceFiles } from './lib/source-tree.mjs';
const roots = ['src', 'server', 'scripts', 'deploy', '.github', '.githooks', 'docs', 'public', 'config']; const extensions = new Set(['.ts', '.astro', '.mjs', '.js', '.md', '.json', '.yml', '.yaml', '.sh']); const errors = [];
async function lintFile(file) {
	const name = basename(file);
	const label = relative(resolve('.'), resolve(file)).replaceAll('\\', '/');
	if (label.startsWith('src/pages/go/')) errors.push(`${label}: les redirections marchandes doivent rester exclusivement servies par le proxy Node`);
	if (!extensions.has(extname(name))) return;
	const text = await readFile(file, 'utf8');
	if (text.includes(String.fromCodePoint(0x2014))) errors.push(`${label}: tiret cadratin interdit`);
	if (text.includes(['pull', 'request', 'target'].join('_'))) errors.push(`${label}: événement de pull request privilégié interdit`);
	if (extname(name) === '.json') {
		try { JSON.parse(text); } catch (error) { errors.push(`${label}: JSON invalide (${error instanceof Error ? error.message : 'erreur inconnue'})`); }
	}
	if (['.ts', '.astro', '.mjs', '.js'].includes(extname(name))) {
		for (const pattern of [/\.innerHTML\s*=/, /\.outerHTML\s*=/, /insertAdjacentHTML\s*\(/, /document\.write\s*\(/, /\beval\s*\(/, /new\s+Function\s*\(/]) if (pattern.test(text)) errors.push(`${label}: puits DOM ou exécution dynamique interdit (${pattern.source})`);
		const htmlSinkCount = [...text.matchAll(/\bset:html\s*=/g)].length;
		const guardedHtmlSinkCount = [...text.matchAll(/\bset:html\s*=\s*\{\s*serializeJsonLd\([^{}]*\)\s*\}/g)].length;
		if (guardedHtmlSinkCount !== htmlSinkCount) errors.push(`${label}: set:html autorisé uniquement avec serializeJsonLd`);
	}
	if (name.endsWith('.astro')) for (const match of text.matchAll(/<a\s+([^>]*target="_blank"[^>]*)>/g)) if (!/rel="[^"]*noopener/.test(match[1])) errors.push(`${label}: target=_blank sans noopener`);
	if (file.includes('.github/workflows/')) {
		if (text.includes('\t')) errors.push(`${label}: tabulation interdite dans un workflow YAML`);
		const workflow = parseDocument(text, { prettyErrors: true, uniqueKeys: true });
		for (const error of workflow.errors) errors.push(`${label}: YAML invalide (${error.message.split('\n')[0]})`);
		for (const match of text.matchAll(/^\s*uses:\s*([^\s#]+)/gm)) if (!/@[0-9a-f]{40}$/.test(match[1])) errors.push(`${label}: Action non épinglée sur SHA complet (${match[1]})`);
	}
}
for (const root of roots) await walkRegularSourceFiles(root, {
	onFile: lintFile,
	onUnsafeEntry: (file, kind) => errors.push(`${relative(resolve('.'), resolve(file))}: entrée source interdite (${kind === 'symbolic-link' ? 'lien symbolique' : 'fichier non régulier'})`),
});
for (const name of await readdir('.')) {
	const info = await lstat(name);
	if (info.isDirectory()) continue;
	if (info.isSymbolicLink()) errors.push(`${name}: entrée racine interdite (lien symbolique)`);
	else if (info.isFile()) await lintFile(name);
	else errors.push(`${name}: entrée racine interdite (fichier non régulier)`);
}
const agentsInstructions = await readFile('AGENTS.md', 'utf8');
const claudeInstructions = await readFile('CLAUDE.md', 'utf8');
if (claudeInstructions !== agentsInstructions) errors.push('CLAUDE.md: le fichier régulier doit rester identique à AGENTS.md');
const publicWordingFiles = [
	'src/layouts/BaseLayout.astro',
	'src/pages/index.astro',
	'src/pages/calculateur.astro',
	'src/components/Calculator.astro',
	'src/pages/compresseurs/index.astro',
	'src/pages/outils-pneumatiques/index.astro',
	'src/pages/guides/index.astro',
	'src/pages/scanner.astro',
];
const forbiddenPublicPhrases = [
	'Catalogue pilote',
	'Taxonomie initiale',
	'Ce qui peut financer le catalogue',
	'Méthode de calcul v',
	'Verdict moteur',
	'Code de contrôle',
	'Passeport CompatAir',
];
for (const file of publicWordingFiles) {
	const text = await readFile(file, 'utf8');
	for (const phrase of forbiddenPublicPhrases) if (text.includes(phrase)) errors.push(`${file}: vocabulaire public trop interne (${phrase})`);
}
const publicContactEmail = 'contact@l0g.fr';
const deprecatedPublicContactEmail = ['admin', 'toonux.com'].join('@');
const contactSurfaceFiles = [
	'src/layouts/BaseLayout.astro',
	'src/pages/contact.astro',
	'src/pages/securite.astro',
	'src/pages/confidentialite.astro',
	'src/pages/mentions-legales.astro',
	'public/.well-known/security.txt',
	'contracts/mcp/SECURITY.md',
	'contracts/ucp/SECURITY.md',
];
for (const file of contactSurfaceFiles) {
	const text = await readFile(file, 'utf8');
	if (!text.includes(publicContactEmail)) errors.push(`${file}: adresse de contact publique absente ou incorrecte`);
	if (text.includes(deprecatedPublicContactEmail)) errors.push(`${file}: ancienne adresse de contact publique interdite`);
}
const baseLayout = await readFile('src/layouts/BaseLayout.astro', 'utf8');
for (const fontPreload of ['manropeLatinWghtUrl', 'newsreaderLatinWghtUrl']) {
	if (!baseLayout.includes(`rel="preload" href={${fontPreload}} as="font"`)) errors.push(`src/layouts/BaseLayout.astro: préchargement de police manquant (${fontPreload})`);
}
const globalStyles = await readFile('src/styles/global.css', 'utf8');
if (!globalStyles.includes('--accent-ink: #092218;')) errors.push('src/styles/global.css: couleur de texte sombre dédiée au fond fluo absente');
for (const match of globalStyles.matchAll(/([^{}]+)\{([^{}]+)\}/g)) {
	const selector = match[1].trim().replaceAll(/\s+/g, ' ');
	const declarations = match[2];
	if (/background(?:-color)?\s*:\s*var\(--accent\)\s*;/.test(declarations) && /color\s*:\s*(?:white|#fff(?:fff)?)\s*;/.test(declarations)) {
		errors.push(`src/styles/global.css: texte clair interdit sur fond fluo (${selector})`);
	}
}
const instrumentHeaderRule = globalStyles.match(/\.home-command-center > header,[\s\S]*?\.product-decision-instrument > header \{([\s\S]*?)\}/)?.[1] ?? '';
for (const match of instrumentHeaderRule.matchAll(/inset\s+([0-9]*\.?[0-9]+)rem\s+/g)) {
	if (Number(match[1]) > .75) errors.push('src/styles/global.css: bande fluo d’instrument trop large, elle passerait derrière le libellé');
}
const scannerPage = await readFile('src/pages/scanner.astro', 'utf8');
if (!scannerPage.includes('data-compatair-surface="scanner"')) errors.push('src/pages/scanner.astro: marqueur de vérification stable manquant');
const deployWorkflow = await readFile('.github/workflows/deploy-production.yml', 'utf8');
const ciWorkflow = await readFile('.github/workflows/ci.yml', 'utf8');
if (!deployWorkflow.includes('node scripts/smoke-live-http.mjs')) errors.push('.github/workflows/deploy-production.yml: smoke HTTP live Node absent');
if (deployWorkflow.includes(`grep -Fq 'Scanner et vérifier'`)) errors.push('.github/workflows/deploy-production.yml: contrôle de production couplé au wording public du scanner');
if (!deployWorkflow.includes('COMPATAIR_RELEASE_SHA: ${{ github.sha }}')) errors.push('.github/workflows/deploy-production.yml: injection du SHA de release absente');
if (!deployWorkflow.includes('COMPATAIR_EXPECTED_RELEASE_SHA: ${{ github.sha }}')) errors.push('.github/workflows/deploy-production.yml: SHA attendu absent de la vérification live');
if (!deployWorkflow.includes('node scripts/verify-live-seo.mjs')) errors.push('.github/workflows/deploy-production.yml: vérification SEO live absente');
if (!deployWorkflow.includes('pnpm indexnow:submit')) errors.push('.github/workflows/deploy-production.yml: notification IndexNow absente');
if (/curl[^\n]*\|\s*grep\s+-Fq/.test(deployWorkflow)) errors.push('.github/workflows/deploy-production.yml: curl ne doit pas être pipé vers grep -q avec retry-all-errors');
if (deployWorkflow.includes('IGNORECASE')) errors.push('.github/workflows/deploy-production.yml: IGNORECASE n’est pas portable avec awk sur les runners Ubuntu');
for (const [file, workflow] of [['.github/workflows/ci.yml', ciWorkflow], ['.github/workflows/deploy-production.yml', deployWorkflow]]) {
	if (!workflow.includes('CHROME_PATH=$chrome_path')) errors.push(`${file}: navigateur Chrome non identifié explicitement`);
	if (!workflow.includes('pnpm lighthouse:summary')) errors.push(`${file}: résumé Lighthouse absent`);
	if (!workflow.includes('.lighthouseci/reports/')) errors.push(`${file}: artefact Lighthouse absent`);
}
if (!deployWorkflow.includes('pnpm crux:report')) errors.push('.github/workflows/deploy-production.yml: statut Core Web Vitals terrain absent');
const prePushHook = await readFile('.githooks/pre-push', 'utf8');
if (!prePushHook.includes('resolve_node_for_major')) errors.push('.githooks/pre-push: résolution automatique du runtime Node manquante');
if (!prePushHook.includes('pnpm validate:main')) errors.push('.githooks/pre-push: validation principale manquante');
const packageManifest = JSON.parse(await readFile('package.json', 'utf8'));
if (!packageManifest.scripts?.['archive:verify']?.includes('verify-source-archive.sh')) errors.push('package.json: contrôle de structure ZIP absent');
if (!packageManifest.scripts?.['validate:main']?.includes('archive:verify')) errors.push('package.json: contrôle de structure ZIP absent de validate:main');
if (packageManifest.scripts?.['lighthouse:production'] !== 'lhci autorun') errors.push('package.json: Lighthouse production doit conserver la configuration centrale sans surcharge du nombre de runs');
const lighthouseConfig = JSON.parse(await readFile('lighthouserc.json', 'utf8'));
const lighthouseRuns = lighthouseConfig.ci?.collect?.numberOfRuns;
if (!Number.isInteger(lighthouseRuns) || lighthouseRuns < 3 || lighthouseRuns % 2 === 0) errors.push('lighthouserc.json: la médiane Lighthouse exige un nombre impair d’au moins trois runs');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Contrôles source et workflows réussis.');
