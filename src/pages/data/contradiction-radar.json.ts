import type { APIRoute } from 'astro';
import { contradictionRadar } from '../../data/contradiction-radar';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(contradictionRadar), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
});
