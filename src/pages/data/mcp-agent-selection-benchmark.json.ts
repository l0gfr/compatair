import type { APIRoute } from 'astro';
import benchmark from '../../../benchmarks/mcp-agent-selection-50.json';

export const prerender = true;

export const GET: APIRoute = () => new Response(JSON.stringify(benchmark, null, 2), {
	status: 200,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'Cache-Control': 'public, max-age=3600',
	},
});
