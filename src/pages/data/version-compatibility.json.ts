import type { APIRoute } from 'astro';
import { versionCompatibility } from '../../data/version-compatibility';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(versionCompatibility), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
