import { readFile } from 'node:fs/promises';
import { basename, extname, relative, resolve } from 'node:path';
import { parseDocument } from 'yaml';
import { walkRegularSourceFiles } from './lib/source-tree.mjs';
const roots = ['src', 'server', 'scripts', 'deploy', '.github', '.githooks', 'docs']; const extensions = new Set(['.ts', '.astro', '.mjs', '.js', '.md', '.yml', '.yaml', '.sh']); const errors = [];
async function lintFile(file) {
	const name = basename(file);
	const label = relative(resolve('.'), resolve(file)).replaceAll('\\', '/');
	if (label.startsWith('src/pages/go/')) errors.push(`${label}: les redirections marchandes doivent rester exclusivement servies par le proxy Node`);
	if (!extensions.has(extname(name))) return;
	const text = await readFile(file, 'utf8');
	if (text.includes(String.fromCodePoint(0x2014))) errors.push(`${label}: tiret cadratin interdit`);
	if (text.includes(['pull', 'request', 'target'].join('_'))) errors.push(`${label}: événement de pull request privilégié interdit`);
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
const baseLayout = await readFile('src/layouts/BaseLayout.astro', 'utf8');
for (const fontPreload of ['manropeLatinWghtUrl', 'newsreaderLatinWghtUrl']) {
	if (!baseLayout.includes(`rel="preload" href={${fontPreload}} as="font"`)) errors.push(`src/layouts/BaseLayout.astro: préchargement de police manquant (${fontPreload})`);
}
const scannerPage = await readFile('src/pages/scanner.astro', 'utf8');
if (!scannerPage.includes('data-compatair-surface="scanner"')) errors.push('src/pages/scanner.astro: marqueur de vérification stable manquant');
const deployWorkflow = await readFile('.github/workflows/deploy-production.yml', 'utf8');
if (!deployWorkflow.includes(`grep -Fq 'data-compatair-surface="scanner"'`)) errors.push('.github/workflows/deploy-production.yml: le contrôle du scanner doit utiliser son marqueur stable');
if (deployWorkflow.includes(`grep -Fq 'Scanner et vérifier'`)) errors.push('.github/workflows/deploy-production.yml: contrôle de production couplé au wording public du scanner');
if (!deployWorkflow.includes('COMPATAIR_RELEASE_SHA: ${{ github.sha }}')) errors.push('.github/workflows/deploy-production.yml: injection du SHA de release absente');
if (!deployWorkflow.includes('COMPATAIR_EXPECTED_RELEASE_SHA: ${{ github.sha }}')) errors.push('.github/workflows/deploy-production.yml: SHA attendu absent de la vérification live');
if (!deployWorkflow.includes('node scripts/verify-live-seo.mjs')) errors.push('.github/workflows/deploy-production.yml: vérification SEO live absente');
const prePushHook = await readFile('.githooks/pre-push', 'utf8');
if (!prePushHook.includes('resolve_node_for_major')) errors.push('.githooks/pre-push: résolution automatique du runtime Node manquante');
if (!prePushHook.includes('pnpm validate:main')) errors.push('.githooks/pre-push: validation principale manquante');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Contrôles source et workflows réussis.');
