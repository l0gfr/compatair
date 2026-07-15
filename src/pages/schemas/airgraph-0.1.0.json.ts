import type { APIRoute } from 'astro';
import airGraphSchema from '../../../contracts/mcp/schemas/airgraph.schema.json';

export const prerender = true;

export const GET: APIRoute = () => new Response(`${JSON.stringify(airGraphSchema, null, 2)}\n`, {
	headers: {
		'Content-Type': 'application/schema+json; charset=utf-8',
		'Cache-Control': 'public, max-age=3600',
	},
});
