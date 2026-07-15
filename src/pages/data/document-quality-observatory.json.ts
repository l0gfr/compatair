import type { APIRoute } from 'astro';
import { documentQualityObservatory } from '../../data/document-quality-observatory';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(documentQualityObservatory), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
});
