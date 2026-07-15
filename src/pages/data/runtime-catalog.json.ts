import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../../data/catalog';
import { toolTaxonomy } from '../../data/taxonomy';
import { createRuntimeCatalog } from '../../domain/runtime-catalog';
import { createCatalogSnapshot } from '../../domain/snapshots';

export const prerender = true;
export const GET: APIRoute = () => {
	const { catalogVersion } = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	return new Response(JSON.stringify(createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion)), {
		headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' },
	});
};
