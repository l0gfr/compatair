import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const root = process.cwd();
const config = JSON.parse(await readFile(join(root, 'config/indexnow.json'), 'utf8'));
const keyFile = join(root, 'public', `${config.key}.txt`);
if ((await readFile(keyFile, 'utf8')).trim() !== config.key) throw new Error('La clé IndexNow publique ne correspond pas à la configuration.');

function git(...args) {
	return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

function xml(value) {
	return value.replaceAll('&amp;', '&').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&quot;', '"').replaceAll('&apos;', "'");
}

async function sitemapEntries() {
	const index = await readFile(join(root, 'dist/sitemap-index.xml'), 'utf8');
	const children = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => basename(new URL(xml(match[1])).pathname));
	const entries = [];
	for (const child of children) {
		const body = await readFile(join(root, 'dist', child), 'utf8');
		for (const block of body.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
			const location = block[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
			const lastmod = block[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
			if (location && lastmod) entries.push({ url: xml(location), lastmod });
		}
	}
	return entries;
}

function deletedUrls(since) {
	const files = git('diff', '--diff-filter=D', '--name-only', `${since}..HEAD`).split('\n').filter(Boolean);
	const urls = [];
	for (const file of files) {
		let match = file.match(/^src\/content\/guides\/([^/]+)\.md$/);
		if (match) { urls.push(`https://${config.host}/guides/${match[1]}/`); continue; }
		match = file.match(/^src\/data\/products\/compressors\/([^/]+)\.ts$/);
		if (match) { urls.push(`https://${config.host}/compresseurs/${match[1]}/`); continue; }
		match = file.match(/^src\/data\/products\/tools\/([^/]+)\.ts$/);
		if (match) {
			urls.push(`https://${config.host}/outils-pneumatiques/${match[1]}/`);
			urls.push(`https://${config.host}/quel-compresseur-pour/${match[1]}/`);
			continue;
		}
		match = file.match(/^src\/pages\/(.+)\.astro$/);
		if (match && !match[1].includes('[') && !['404', '410', 'comparateur', 'offres', 'recherche', 'securite'].includes(match[1])) {
			const pathname = match[1] === 'index' ? '/' : `/${match[1].replace(/\/index$/, '')}/`;
			urls.push(`https://${config.host}${pathname}`);
		}
	}
	return urls;
}

let baseSha = process.env.INDEXNOW_BASE_SHA?.trim();
if (!baseSha || /^0+$/.test(baseSha)) baseSha = git('rev-parse', 'HEAD^');
const baseDate = Date.parse(git('show', '-s', '--format=%cI', baseSha));
if (!Number.isFinite(baseDate)) throw new Error(`Date Git de base invalide pour ${baseSha}.`);

const changed = (await sitemapEntries())
	.filter((entry) => Date.parse(entry.lastmod) > baseDate)
	.map((entry) => entry.url);
const urlList = [...new Set([...changed, ...deletedUrls(baseSha)])]
	.filter((url) => new URL(url).host === config.host)
	.sort();
if (!urlList.length) {
	console.log(`IndexNow : aucune URL modifiée depuis ${baseSha}.`);
	process.exit(0);
}

const payload = {
	host: config.host,
	key: config.key,
	keyLocation: `https://${config.host}/${config.key}.txt`,
	urlList,
};
if (process.env.INDEXNOW_DRY_RUN === '1') {
	console.log(JSON.stringify({ baseSha, count: urlList.length, ...payload }, null, 2));
	process.exit(0);
}

const keyResponse = await fetch(payload.keyLocation, { signal: AbortSignal.timeout(15_000) });
if (!keyResponse.ok || (await keyResponse.text()).trim() !== config.key) {
	throw new Error(`La clé IndexNow n'est pas encore vérifiable sur ${payload.keyLocation}.`);
}

const response = await fetch(config.endpoint, {
	method: 'POST',
	headers: { 'content-type': 'application/json; charset=utf-8' },
	body: JSON.stringify(payload),
	signal: AbortSignal.timeout(30_000),
});
if (![200, 202].includes(response.status)) throw new Error(`IndexNow a répondu HTTP ${response.status}: ${(await response.text()).slice(0, 500)}`);
console.log(`IndexNow : ${urlList.length} URL modifiée(s) soumise(s), réponse HTTP ${response.status}.`);
