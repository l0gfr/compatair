import type { APIRoute } from 'astro';
import { buildMachinePublication } from '../../data/machine-publication';

export const prerender = true;
export const GET: APIRoute = async () => new Response(JSON.stringify((await buildMachinePublication()).integrity), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' },
});
