import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join, relative, resolve } from 'node:path';
const roots = ['src', 'server', 'scripts', 'deploy', '.github', 'docs']; const extensions = new Set(['.ts', '.astro', '.mjs', '.js', '.md', '.yml', '.yaml', '.sh']); const errors = [];
async function walk(directory) { for (const name of await readdir(directory)) { const file = join(directory, name); const info = await stat(file); if (info.isDirectory()) await walk(file); else if (extensions.has(extname(name))) { const text = await readFile(file, 'utf8'); const label = relative(resolve('.'), resolve(file)); if (text.includes(String.fromCodePoint(0x2014))) errors.push(`${label}: tiret cadratin interdit`); if (text.includes(['pull', 'request', 'target'].join('_'))) errors.push(`${label}: événement de pull request privilégié interdit`); if (['.ts', '.astro', '.mjs', '.js'].includes(extname(name))) { for (const pattern of [/\.innerHTML\s*=/, /\.outerHTML\s*=/, /insertAdjacentHTML\s*\(/, /document\.write\s*\(/, /\beval\s*\(/, /new\s+Function\s*\(/]) if (pattern.test(text)) errors.push(`${label}: puits DOM ou exécution dynamique interdit (${pattern.source})`); for (const match of text.matchAll(/set:html=\{([^}]+)\}/g)) if (!/^JSON\.stringify\(/.test(match[1].trim())) errors.push(`${label}: set:html autorisé uniquement avec JSON.stringify`); } if (name.endsWith('.astro')) for (const match of text.matchAll(/<a\s+([^>]*target="_blank"[^>]*)>/g)) if (!/rel="[^"]*noopener/.test(match[1])) errors.push(`${label}: target=_blank sans noopener`); if (file.includes('.github/workflows/')) for (const match of text.matchAll(/^\s*uses:\s*([^\s#]+)/gm)) if (!/@[0-9a-f]{40}$/.test(match[1])) errors.push(`${label}: Action non épinglée sur SHA complet (${match[1]})`); } } }
for (const root of roots) await walk(root);
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
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Contrôles source et workflows réussis.');
