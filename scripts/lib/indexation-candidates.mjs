import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'yaml';
import { loadCatalogProducts } from './catalog-tooling.mjs';
import { editorialText, productCandidate } from './indexation-planner.mjs';

export async function collectIndexationCandidates(root) {
	const candidates = [];
	for (const kind of ['compressors', 'tools']) {
		const { products } = await loadCatalogProducts(root, kind);
		for (const { product } of products) {
			const candidate = productCandidate(product, kind);
			candidates.push(candidate);
			if (kind === 'tools') candidates.push({
				...candidate, path: `/quel-compresseur-pour/${product.slug}/`, family: 'usages',
				blockedReason: 'shared-product-answer',
			});
		}
	}
	async function readGuides(directory, prefix = '') {
		for (const file of await readdir(directory, { withFileTypes: true })) {
			if (file.isDirectory()) { await readGuides(join(directory, file.name), `${prefix}${file.name}/`); continue; }
			if (!file.isFile() || !file.name.endsWith('.md')) continue;
			const raw = await readFile(join(directory, file.name), 'utf8');
			const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
			if (!match) throw new Error(`Guide sans métadonnées : ${prefix}${file.name}`);
			const data = parse(match[1]);
			const sourced = Array.isArray(data.sources) && data.sources.length && data.sources.every((source) => {
				try { return new URL(source).protocol === 'https:'; } catch { return false; }
			});
			candidates.push({
				path: `/guides/${prefix}${file.name.slice(0, -3)}/`, family: 'guides',
				topic: `${data.category}:${data.metiers?.[0] ?? data.audiences?.[0] ?? 'general'}`,
				text: editorialText(match[2]), identities: [],
				blockedReason: sourced ? undefined : 'missing-editorial-source',
			});
		}
	}
	await readGuides(join(root, 'src/content/guides'));
	return candidates;
}
