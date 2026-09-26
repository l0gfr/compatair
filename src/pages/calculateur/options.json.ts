import type { APIRoute } from 'astro';
import { calculatorOptionsJson } from '../../data/calculator-options';

export const prerender = true;
export const GET: APIRoute = () => new Response(calculatorOptionsJson, {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' },
});
