import type { APIRoute } from 'astro';
import { agentFidelityBenchmark } from '../../data/agent-fidelity';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(agentFidelityBenchmark), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
