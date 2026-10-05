import type { APIRoute } from 'astro';
import { publicationCatalog } from '../../data/verdict-publication';

export const prerender = true;
export const GET: APIRoute = () => {
	return new Response(JSON.stringify(publicationCatalog), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
