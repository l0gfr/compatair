import type { APIRoute } from 'astro';
import { compatibilityImpactFeed } from '../../data/compatibility-impact';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(compatibilityImpactFeed), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
