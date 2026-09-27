import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'yaml';
import { loadCatalogProducts } from './catalog-tooling.mjs';
import { editorialText, productCandidate } from './indexation-planner.mjs';
import { editorialPriority } from './editorial-priority.mjs';
import { assessGuideValue, assessProductValue } from './page-value.mjs';

export async function collectIndexationCandidates(root) {
	const candidates = [];
	for (const kind of ['compressors', 'tools']) {
		const { products } = await loadCatalogProducts(root, kind);
		for (const { product } of products) {
			const value = assessProductValue(product, kind === 'compressors' ? 'compressor' : 'tool');
			const candidate = { ...productCandidate(product, kind), value };
			candidate.blockedReason ??= value.reasons[0];
			candidates.push(candidate);
			if (kind === 'tools') candidates.push({
				...candidate, path: `/quel-compresseur-pour/${product.slug}/`, family: 'usages',
				value: { ...value, kind: 'usage', question: `Quel compresseur pour ${product.brand} ${product.model} ?`, contribution: { demandModel: product.demandModel, workingPressureBar: product.workingPressureBar, publishedFlow: product.airflowLpm, publishedAirPerAction: product.airPerActionLiters, reserve: '25% editorial sizing assumption; not a manufacturer rating', scenario: 'one exact tool, published demand, all documented compressors' } },
				blockedReason: candidate.blockedReason,
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
			const value = assessGuideValue(data, match[2]);
			candidates.push({
				value,
				path: `/guides/${prefix}${file.name.slice(0, -3)}/`, family: 'guides',
				topic: `${data.category}:${data.metiers?.[0] ?? data.audiences?.[0] ?? 'general'}`,
				text: editorialText(match[2]), identities: [],
				blockedReason: !sourced ? 'missing-editorial-source' : value.reasons[0],
			});
		}
	}
	await readGuides(join(root, 'src/content/guides'));
	const panel = JSON.parse(await readFile(join(root, 'config/seo-query-panel.json'), 'utf8'));
	return candidates.map(candidate => ({ ...candidate, priority: editorialPriority(candidate, panel) }));
}
