import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../../data/catalog';
import { toolTaxonomy } from '../../data/taxonomy';
import { createCatalogSnapshot, createVerdictSnapshot, verdictJsonChunks } from '../../domain/snapshots';

import { writeVerdictStage } from '../../../scripts/lib/streamed-verdict-build.mjs';

declare const __COMPATAIR_VERDICT_STAGE__: string;
export const prerender = true;

export const GET: APIRoute = async () => {
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const snapshot = createVerdictSnapshot({ compressors, tools, catalogVersion: catalog.catalogVersion, verifiedAt: CATALOG_VERIFIED_AT });
	const chunks = verdictJsonChunks(snapshot);
	if (import.meta.env.PROD) {
		await writeVerdictStage(__COMPATAIR_VERDICT_STAGE__, chunks);
		return new Response('{}', { headers: { 'Content-Type': 'application/json' } });
	}
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
