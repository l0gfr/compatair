import type { APIRoute } from 'astro';
import { buildMachinePublication } from '../../data/machine-publication';

export const prerender = true;
export const GET: APIRoute = async () => {
	const publication = await buildMachinePublication();
	return new Response(publication.bytes.get('/data/agent-knowledge.ndjson'), { headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' } });
};
