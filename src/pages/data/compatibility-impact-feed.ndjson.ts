import type { APIRoute } from 'astro';
import { compatibilityImpactFeed } from '../../data/compatibility-impact';

export const prerender = true;
export const GET: APIRoute = () => new Response(`${compatibilityImpactFeed.events.map((item) => JSON.stringify(item)).join('\n')}\n`, { headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
