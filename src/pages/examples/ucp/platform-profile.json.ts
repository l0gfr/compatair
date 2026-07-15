import type { APIRoute } from 'astro';
import { samplePlatformProfile } from '../../../../server/ucp-core.mjs';

export const prerender = true;
export const GET: APIRoute = () => new Response(`${JSON.stringify(samplePlatformProfile, null, 2)}\n`, {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600', 'X-Content-Type-Options': 'nosniff' },
});
