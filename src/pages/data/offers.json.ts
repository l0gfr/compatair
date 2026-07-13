import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { activeOffers, merchants } from '../../data/offers';

export const prerender = true;
export const GET: APIRoute = () => {
	const data = { schemaVersion: '1.1.0', offers: activeOffers, merchants: merchants.map(({ id, name }) => ({ id, name })) };
	const snapshotVersion = createHash('sha256').update(JSON.stringify(data)).digest('hex');
	return new Response(JSON.stringify({ snapshotVersion, ...data }), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300' } });
};
