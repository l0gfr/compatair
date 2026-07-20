import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { compressors, tools } from '../../data/catalog';
import { glossaryTerms } from '../../data/glossary';
import { compressorDisplayName } from '../../domain/product-display';
import { toolSearchText } from '../../domain/tool-demand';
import { guideAudiences, guideMetiers, guideSeries } from '../../domain/editorial-taxonomy';

export const prerender = true;

export const GET: APIRoute = async () => {
	const guides = await getCollection('guides');
	const guideKeywords = (item: (typeof guides)[number]) => [
		item.data.description,
		item.data.category,
		...item.data.audiences.map((audience) => guideAudiences[audience].label),
		...item.data.metiers.map((metier) => guideMetiers[metier].label),
		...(item.data.series ? [guideSeries[item.data.series].title] : []),
		...[...(item.body ?? '').matchAll(/^#{2,3}\s+(.+)$/gm)].map((match) => match[1]),
	].join(' ');
	const items = [
		...compressors.map((item) => ({ title: compressorDisplayName(item), type: 'Compresseur', url: `/compresseurs/${item.slug}/`, keywords: `${item.tankLiters} litres ${item.maxPressureBar} bar ${item.mpn ?? ''}` })),
		...tools.map((item) => ({ title: item.label, type: 'Outil', url: `/outils-pneumatiques/${item.slug}/`, keywords: toolSearchText(item) })),
		...guides.map((item) => ({ title: item.data.title, type: 'Guide', url: `/guides/${item.id}/`, keywords: guideKeywords(item) })),
		...glossaryTerms.map((item) => ({ title: item.term, type: 'Glossaire', url: `/glossaire/#${item.slug}`, keywords: item.definition })),
	];
	return new Response(JSON.stringify(items), {
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
	});
};
