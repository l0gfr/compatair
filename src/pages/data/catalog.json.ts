import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { compressors, tools } from '../../data/catalog';
import { toolTaxonomy } from '../../data/taxonomy';

export const prerender = true;
export const GET: APIRoute = () => {
	const data = { schemaVersion: '1.0.0', verifiedAt: '2026-07-13', toolTaxonomy, compressors, tools };
	const catalogVersion = createHash('sha256').update(JSON.stringify(data)).digest('hex');
	return new Response(JSON.stringify({ catalogVersion, ...data }), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
