import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors } from '../../data/catalog';
import { createTransparencyBarometer } from '../../domain/transparency-barometer';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(createTransparencyBarometer(compressors, CATALOG_VERIFIED_AT)), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
});
