import type { APIRoute } from 'astro';
import specification from '../../../contracts/ucp/openapi.json';

export const prerender = true;
export const GET: APIRoute = () => new Response(`${JSON.stringify(specification, null, 2)}\n`, {
	headers: { 'Content-Type': 'application/vnd.oai.openapi+json;version=3.1; charset=utf-8', 'Cache-Control': 'public, max-age=3600', 'X-Content-Type-Options': 'nosniff' },
});
