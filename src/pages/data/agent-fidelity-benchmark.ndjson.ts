import type { APIRoute } from 'astro';
import { agentFidelityBenchmark } from '../../data/agent-fidelity';

export const prerender = true;
export const GET: APIRoute = () => new Response(`${agentFidelityBenchmark.scenarios.map((item) => JSON.stringify(item)).join('\n')}\n`, { headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
