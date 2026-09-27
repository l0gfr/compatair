import type { APIRoute } from 'astro';
import { verdictPublication } from '../../data/verdict-publication';
export const prerender = true;

export const GET: APIRoute = async () => {
	return new Response(JSON.stringify(verdictPublication), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
