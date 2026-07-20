import { createHash } from 'node:crypto';
import type { CollectionEntry } from 'astro:content';
import type { Compressor, ToolProfile } from './catalog';
import { guideAudiences, guideMetiers, guideSeries } from './editorial-taxonomy';

type GlossaryEntry = { term: string; slug: string; definition: string };

export type AgentKnowledgeItem = {
	id: string;
	type: 'Guide' | 'Glossaire' | 'Compresseur' | 'Outil';
	locale: 'fr' | 'en';
	title: string;
	description: string;
	url: string;
	keywords: string;
	observed_at: string;
	source_urls: string[];
	content_sha256: string;
	body_markdown?: string;
	translation?: { status: 'source' | 'machine_translated_unreviewed' | 'human_reviewed'; source_locale?: 'fr'; source_id?: string };
};

function hash(value: string) {
	return createHash('sha256').update(value).digest('hex');
}

function unique(values: string[]) {
	return [...new Set(values)];
}

export function createAgentKnowledge(input: {
	guides: CollectionEntry<'guides'>[];
	compressors: Compressor[];
	tools: ToolProfile[];
	glossary: GlossaryEntry[];
	observedAt: string;
	englishGuides?: Array<{ sourceId: string; title: string; description: string; bodyMarkdown: string; sourceUrls: string[]; translationStatus: 'machine_translated_unreviewed' | 'human_reviewed' }>;
}) {
	const frenchGuides: AgentKnowledgeItem[] = input.guides.map((guide) => {
		const body = (guide.body ?? '').trim();
		const keywords = [
			guide.data.category,
			...guide.data.audiences.map((audience) => guideAudiences[audience].label),
			...guide.data.metiers.map((metier) => guideMetiers[metier].label),
			...(guide.data.series ? [guideSeries[guide.data.series].title] : []),
		].join(' ');
		return {
			id: `guide:${guide.id}:fr`, type: 'Guide', locale: 'fr', title: guide.data.title, description: guide.data.description,
			url: `https://compatair.fr/guides/${guide.id}/`, keywords,
			observed_at: (guide.data.updatedDate ?? guide.data.pubDate).toISOString().slice(0, 10), source_urls: unique(guide.data.sources),
			content_sha256: hash(body), body_markdown: body, translation: { status: 'source' },
		};
	});
	const englishGuides: AgentKnowledgeItem[] = (input.englishGuides ?? []).map((guide) => ({
		id: `guide:${guide.sourceId}:en`, type: 'Guide', locale: 'en', title: guide.title, description: guide.description,
		url: `https://compatair.fr/guides/${guide.sourceId}/`, keywords: 'compressed air pneumatic tool compatibility guide', observed_at: input.observedAt,
		source_urls: unique(guide.sourceUrls), content_sha256: hash(guide.bodyMarkdown), body_markdown: guide.bodyMarkdown,
		translation: { status: guide.translationStatus, source_locale: 'fr', source_id: `guide:${guide.sourceId}:fr` },
	}));
	const products: AgentKnowledgeItem[] = [
		...input.compressors.map((item): AgentKnowledgeItem => {
			const description = `${item.brand} ${item.model}; ${item.tankLiters} L; ${item.maxPressureBar} bar; FAD curve source-linked.`;
			return { id: `compressor:${item.id}:fr`, type: 'Compresseur', locale: 'fr', title: `${item.brand} ${item.model}`, description, url: `https://compatair.fr/compresseurs/${item.slug}/`, keywords: `${item.mpn ?? ''} ${item.ean ?? ''} ${item.tankLiters} litres ${item.maxPressureBar} bar`, observed_at: input.observedAt, source_urls: unique(item.evidence.map((evidence) => evidence.sourceUrl)), content_sha256: hash(description), translation: { status: 'source' } };
		}),
		...input.tools.map((item): AgentKnowledgeItem => {
			const pressure = item.workingPressureBar.typical ?? item.workingPressureBar.max;
			const demand = item.demandModel === 'fixed-flow'
				? `${item.airflowLpm.typical} L/min`
				: item.demandModel === 'per-action'
					? `${item.airPerActionLiters} L/${item.actionLabel}`
					: item.demandExplanation;
			const description = `${item.label}; ${pressure} bar; ${demand}.`;
			return { id: `tool:${item.id}:fr`, type: 'Outil', locale: 'fr', title: item.label, description, url: `https://compatair.fr/outils-pneumatiques/${item.slug}/`, keywords: `${item.brand} ${item.model} ${item.mpn ?? ''} ${item.ean ?? ''} ${item.category}`, observed_at: input.observedAt, source_urls: unique(item.evidence.map((evidence) => evidence.sourceUrl)), content_sha256: hash(description), translation: { status: 'source' } };
		}),
	];
	const glossary: AgentKnowledgeItem[] = input.glossary.map((item) => ({
		id: `glossary:${item.slug}:fr`, type: 'Glossaire', locale: 'fr', title: item.term, description: item.definition,
		url: `https://compatair.fr/glossaire/#${item.slug}`, keywords: item.definition, observed_at: input.observedAt, source_urls: [], content_sha256: hash(item.definition), translation: { status: 'source' },
	}));
	return [...frenchGuides, ...englishGuides, ...products, ...glossary].sort((left, right) => left.id.localeCompare(right.id));
}

export function agentKnowledgeVersion(items: AgentKnowledgeItem[]) {
	return hash(JSON.stringify(items.map(({ id, content_sha256, observed_at }) => ({ id, content_sha256, observed_at }))));
}

export function toNdjson(items: unknown[]) {
	return `${items.map((item) => JSON.stringify(item)).join('\n')}\n`;
}
