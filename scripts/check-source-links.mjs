import { readFile, readdir, writeFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { sourceInventory, checkSource, healthSummary } from './lib/source-link-health.mjs';

const catalog = JSON.parse(await readFile('dist/data/catalog.json', 'utf8'));
const entries = [...catalog.compressors, ...catalog.tools].flatMap((product) => product.evidence.map((evidence) => ({ url: evidence.sourceUrl, reference: { productId: product.id, evidenceId: evidence.id, retrievedAt: evidence.retrievedAt } })));
for (const filename of (await readdir('src/content/guides')).filter((name) => name.endsWith('.md')).sort()) {
	const text = await readFile(`src/content/guides/${filename}`, 'utf8');
	const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!frontmatter) throw new Error(`Frontmatter manquant : ${filename}`);
	const guide = parse(frontmatter[1]);
	for (const url of guide.sources ?? []) entries.push({ url, reference: { guide: filename } });
}
// These are controlled Astro output attributes, not arbitrary HTML supplied by a visitor.
for (const product of catalog.compressors) {
	const html = await readFile(`dist/compresseurs/${product.slug}/index.html`, 'utf8');
	for (const match of html.matchAll(/<a\b[^>]*data-direct-purchase-link[^>]*>/g)) {
		const url = match[0].match(/\bhref="([^"]+)"/)?.[1]?.replaceAll('&amp;', '&');
		if (!url) throw new Error(`Lien marchand sans URL : ${product.id}`);
		entries.push({ url, reference: { productId: product.id, role: 'direct-purchase' } });
	}
}
const inventory = sourceInventory(entries);
// One worker per hostname prevents concurrent probes hammering one manufacturer's site.
const groups = new Map();
for (const source of inventory.sources) {
	const hostname = new URL(source.url).hostname;
	groups.set(hostname, [...(groups.get(hostname) ?? []), source]);
}
const queue = [...groups.values()];
const results = [];
let cursor = 0;
await Promise.all(Array.from({ length: Math.min(4, queue.length) }, async () => {
	while (cursor < queue.length) {
		const group = queue[cursor++];
		for (const source of group) {
			results.push({ ...source, ...await checkSource(source.url) });
			if (results.length % 50 === 0) console.log(`Sources contrôlées : ${results.length}/${inventory.sources.length}`);
			await new Promise((resolve) => setTimeout(resolve, 150));
		}
	}
}));
results.sort((a, b) => a.url.localeCompare(b.url));
const summary = healthSummary(results);
const report = { schemaVersion: '1.0.0', checkedAt: new Date().toISOString(), sourceVersion: inventory.version, catalogVersion: catalog.catalogVersion, summary, results };
await writeFile('source-health-report.json', `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(summary));
if (summary.anomalies || summary.auditUnavailable) {
	console.error(`Anomalies de sources : ${summary.anomalies}. Audit indisponible : ${summary.auditUnavailable}. Voir source-health-report.json pour les URL et références concernées.`);
	process.exitCode = 1;
}
