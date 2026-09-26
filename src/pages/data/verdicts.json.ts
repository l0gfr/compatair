import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../../data/catalog';
import { toolTaxonomy } from '../../data/taxonomy';
import { createCatalogSnapshot, createVerdictSnapshot, verdictJsonChunks } from '../../domain/snapshots';

export const prerender = true;

export const GET: APIRoute = () => {
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const snapshot = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });
	const chunks = verdictJsonChunks(snapshot);
	const encoder = new TextEncoder();
	const body = new ReadableStream({
		pull(controller) {
			const next = chunks.next();
			if (next.done) controller.close();
			else controller.enqueue(encoder.encode(next.value));
		},
		cancel() { chunks.return(undefined); },
	});
	return new Response(body, { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
