import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../../data/catalog';
import { createRuntimeCatalog } from '../../domain/runtime-catalog';
import { publicationCatalog } from '../../data/verdict-publication';

export const prerender = true;
export const GET: APIRoute = () => {
	const { catalogVersion } = publicationCatalog;
	return new Response(JSON.stringify(createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion)), {
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
	});
};
