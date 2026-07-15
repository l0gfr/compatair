import type { APIRoute } from 'astro';
import { buildMachinePublication } from '../../data/machine-publication';

export const prerender = true;
export const GET: APIRoute = async () => {
	const publication = await buildMachinePublication();
	return new Response(publication.bytes.get('/data/catalog-dcat.jsonld'), { headers: { 'Content-Type': 'application/ld+json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' } });
};
