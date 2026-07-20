import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'yaml';

const guidesDirectory = new URL('../src/content/guides/', import.meta.url);
const files = (await readdir(guidesDirectory)).filter((file) => file.endsWith('.md')).sort();
const failures = [];
let declaredSourceCount = 0;
let citedLinkCount = 0;

function canonicalUrl(value) {
	const url = new URL(value);
	url.hash = '';
	if (url.pathname !== '/') url.pathname = url.pathname.replace(/\/+$/, '');
	return url.toString();
}

for (const file of files) {
	const raw = await readFile(join(guidesDirectory.pathname, file), 'utf8');
	const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
	if (!match) {
		failures.push(`${file}: frontmatter absent ou illisible`);
		continue;
	}

	const data = parse(match[1]);
	const body = match[2];
	const sources = Array.isArray(data.sources) ? data.sources : [];
	declaredSourceCount += sources.length;

	const normalizedSources = [];
	for (const source of sources) {
		try {
			const normalized = canonicalUrl(source);
			if (!normalized.startsWith('https://')) failures.push(`${file}: source non HTTPS ${source}`);
			normalizedSources.push(normalized);
		} catch {
			failures.push(`${file}: URL de source invalide ${String(source)}`);
		}
	}

	if (new Set(normalizedSources).size !== normalizedSources.length) {
		failures.push(`${file}: source déclarée plusieurs fois`);
	}

	const citedLinks = [...body.matchAll(/\[[^\]]+\]\((https:\/\/[^)\s]+)\)/g)].map((item) => item[1]);
	citedLinkCount += citedLinks.length;
	for (const citedLink of citedLinks) {
		const normalized = canonicalUrl(citedLink);
		if (!normalizedSources.includes(normalized)) {
			failures.push(`${file}: lien externe non déclaré dans sources: ${citedLink}`);
		}
	}

	if (data.updatedDate && new Date(data.updatedDate) < new Date(data.pubDate)) {
		failures.push(`${file}: updatedDate antérieure à pubDate`);
	}
}

if (failures.length > 0) {
	console.error(`Audit éditorial en échec: ${failures.length} anomalie(s).`);
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(`Audit éditorial OK: ${files.length} guides, ${declaredSourceCount} sources déclarées, ${citedLinkCount} citations externes rattachées.`);
