import type { APIRoute } from 'astro';
import keyRegistry from '../../../config/publication-signing-keys.json';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(keyRegistry), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
});
