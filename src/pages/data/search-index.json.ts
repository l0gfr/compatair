import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { compressors, tools } from '../../data/catalog';
import { glossaryTerms } from '../../data/glossary';
import { toolSearchText } from '../../domain/tool-demand';

export const prerender = true;

export const GET: APIRoute = async () => {
	const guides = await getCollection('guides');
	const items = [
		...compressors.map((item) => ({ title: `${item.brand} ${item.model}`, type: 'Compresseur', url: `/compresseurs/${item.slug}/`, keywords: `${item.tankLiters} litres ${item.maxPressureBar} bar ${item.mpn ?? ''}` })),
		...tools.map((item) => ({ title: item.label, type: 'Outil', url: `/outils-pneumatiques/${item.slug}/`, keywords: toolSearchText(item) })),
		...guides.map((item) => ({ title: item.data.title, type: 'Guide', url: `/guides/${item.id}/`, keywords: `${item.data.description} ${item.data.category}` })),
		...glossaryTerms.map((item) => ({ title: item.term, type: 'Glossaire', url: `/glossaire/#${item.slug}`, keywords: item.definition })),
	];
	return new Response(JSON.stringify(items), {
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
	});
};
