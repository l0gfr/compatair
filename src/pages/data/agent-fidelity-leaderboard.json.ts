import type { APIRoute } from 'astro';
import { agentFidelityLeaderboard } from '../../data/agent-fidelity';

export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify(agentFidelityLeaderboard), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
