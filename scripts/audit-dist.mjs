import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';

const root = resolve('dist'); const errors = []; const htmlFiles = [];
async function walk(directory) { for (const name of await readdir(directory)) { const file = join(directory, name); const info = await stat(file); if (info.isDirectory()) await walk(file); else if (name.endsWith('.html')) htmlFiles.push(file); } }
await walk(root);
const titles = new Map(); const descriptions = new Map(); const sitePaths = new Set(htmlFiles.map((file) => { const rel = relative(root, file); return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`; }));
for (const file of htmlFiles) {
	const html = await readFile(file, 'utf8'); const label = relative(root, file);
	const title = html.match(/<title>([^<]+)<\/title>/)?.[1]; const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
	if (!title) errors.push(`${label}: title absent`); else if (titles.has(title)) errors.push(`${label}: title dupliqué avec ${titles.get(title)}`); else titles.set(title, label);
	if (!description) errors.push(`${label}: description absente`); else if (descriptions.has(description)) errors.push(`${label}: description dupliquée avec ${descriptions.get(description)}`); else descriptions.set(description, label);
	if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) errors.push(`${label}: un H1 exactement est requis`);
	if (!/<link rel="canonical" href="https:\/\/compatair\.fr\//.test(html)) errors.push(`${label}: canonical absent ou invalide`);
	for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(match[1]); } catch { errors.push(`${label}: JSON-LD invalide`); } }
	for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) { const value = match[1].split(/[?#]/)[0]; if (!value || value.startsWith('//') || value.startsWith('/_assets/') || value.startsWith('/images/') || value === '/favicon.svg' || value === '/favicon.ico') continue; const local = value.endsWith('/') ? value : value.match(/\.[a-z0-9]+$/i) ? value : `${value}/`; if (!sitePaths.has(local) && !['/robots.txt', '/sitemap-index.xml', '/.well-known/security.txt'].includes(value)) errors.push(`${label}: lien interne introuvable ${value}`); }
	for (const match of html.matchAll(/<img\s+([^>]+)>/g)) { if (!/\salt="[^"]*"/.test(` ${match[1]}`)) errors.push(`${label}: image sans alt`); if (!/\swidth="\d+"/.test(` ${match[1]}`) || !/\sheight="\d+"/.test(` ${match[1]}`)) errors.push(`${label}: dimensions image absentes`); }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Audit HTML réussi : ${htmlFiles.length} pages, titres et descriptions uniques, liens internes valides.`);
