import type { APIRoute } from 'astro';
import { getIndexationPlan } from '../../../scripts/lib/indexation-build.mjs';

export const prerender = true;

export const GET: APIRoute = () => new Response(JSON.stringify(getIndexationPlan().manifest), {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
});
