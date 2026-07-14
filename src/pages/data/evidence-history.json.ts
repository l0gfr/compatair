import type { APIRoute } from 'astro';
import { evidenceHistory } from '../../data/evidence-history';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(evidenceHistory), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
});
