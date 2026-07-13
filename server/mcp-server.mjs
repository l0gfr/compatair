import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createMcpCore, PROTOCOL_VERSION } from './mcp-core.mjs';

const host = process.env.MCP_HOST ?? '127.0.0.1'; const port = Number(process.env.MCP_PORT ?? 8787);
const catalogPath = process.env.COMPAT_AIR_CATALOG ?? new URL('../dist/data/catalog.json', import.meta.url).pathname;
const offersPath = process.env.COMPAT_AIR_OFFERS ?? new URL('../dist/data/offers.json', import.meta.url).pathname;
const allowedOrigins = new Set((process.env.MCP_ALLOWED_ORIGINS ?? 'https://compatair.fr,https://www.compatair.fr').split(',').map((item) => item.trim()));
const catalog = JSON.parse(await readFile(catalogPath, 'utf8')); let offerSnapshot = { offers: [], snapshotVersion: 'empty' }; try { offerSnapshot = JSON.parse(await readFile(offersPath, 'utf8')); } catch {}
const core = createMcpCore(catalog, offerSnapshot); const requests = new Map(); const counters = { startedAt: new Date().toISOString(), rpc: 0, errors: 0, tools: {}, events: { calculator_used: 0 }, affiliateClicks: {} };

function json(response, status, value, headers = {}) { const body = JSON.stringify(value); response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body), 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers }); response.end(body); }
function allow(ip) { const now = Date.now(), entry = requests.get(ip); if (!entry || now - entry.since > 60_000) { requests.set(ip, { since: now, count: 1 }); return true; } entry.count++; return entry.count <= 120; }
async function body(request) { const chunks = []; let size = 0; for await (const chunk of request) { size += chunk.length; if (size > 65_536) throw new Error('BODY_TOO_LARGE'); chunks.push(chunk); } return JSON.parse(Buffer.concat(chunks).toString('utf8')); }

const server = createServer(async (request, response) => {
	response.setTimeout(10_000);
	const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);
	if (url.pathname === '/health' && request.method === 'GET') return json(response, 200, { status: 'ok', catalogVersion: catalog.catalogVersion, engineVersion: '1.0.0', ...counters });
	if (url.pathname === '/events' && request.method === 'POST') {
		const origin = request.headers.origin; if (origin && !allowedOrigins.has(origin)) return json(response, 403, { error: 'origin_forbidden' });
		if (!allow(request.socket.remoteAddress ?? 'unknown')) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
		try { const event = await body(request); if (event?.event !== 'calculator_used') return json(response, 400, { error: 'invalid_event' }); counters.events.calculator_used++; response.writeHead(204, { 'Cache-Control': 'no-store' }); return response.end(); } catch { return json(response, 400, { error: 'invalid_event' }); }
	}
	if (url.pathname.startsWith('/go/') && request.method === 'GET') {
		const offerId = decodeURIComponent(url.pathname.slice(4)); const offer = (offerSnapshot.offers ?? []).find((item) => item.id === offerId);
		if (!offer || !String(offer.url).startsWith('https://')) return json(response, 404, { error: 'offer_not_found' });
		counters.affiliateClicks[offerId] = (counters.affiliateClicks[offerId] ?? 0) + 1;
		response.writeHead(302, { Location: offer.url, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer' }); return response.end();
	}
	if (url.pathname !== '/mcp') return json(response, 404, { error: 'not_found' });
	const origin = request.headers.origin; if (origin && !allowedOrigins.has(origin)) return json(response, 403, { error: 'origin_forbidden' });
	const ip = request.socket.remoteAddress ?? 'unknown'; if (!allow(ip)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
	if (request.method === 'GET' || request.method === 'DELETE') { response.writeHead(405, { Allow: 'POST', 'Cache-Control': 'no-store' }); return response.end(); }
	if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
	const accept = request.headers.accept ?? ''; if (!accept.includes('application/json') || !accept.includes('text/event-stream')) return json(response, 406, { error: 'accept_must_include_json_and_event_stream' });
	if (!String(request.headers['content-type'] ?? '').toLowerCase().startsWith('application/json')) return json(response, 415, { error: 'content_type_must_be_json' });
	const protocol = request.headers['mcp-protocol-version']; if (protocol && protocol !== PROTOCOL_VERSION && protocol !== '2025-03-26') return json(response, 400, { error: 'unsupported_protocol_version' });
	try {
		const message = await body(request); if (Array.isArray(message) || message?.jsonrpc !== '2.0' || typeof message.method !== 'string') return json(response, 400, { jsonrpc: '2.0', id: message?.id ?? null, error: { code: -32600, message: 'Requête JSON-RPC invalide.' } });
		counters.rpc++; if (message.method === 'tools/call') counters.tools[message.params?.name] = (counters.tools[message.params?.name] ?? 0) + 1;
		const result = core.handle(message); if (result === null || message.id === undefined) { response.writeHead(202, { 'Cache-Control': 'no-store' }); return response.end(); }
		if (result.error) counters.errors++; return json(response, 200, result);
	} catch (error) { counters.errors++; if (error.message === 'BODY_TOO_LARGE') return json(response, 413, { error: 'body_too_large' }); return json(response, 400, { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'JSON invalide.' } }); }
});
server.requestTimeout = 10_000; server.headersTimeout = 12_000; server.listen(port, host, () => console.error(`CompatAir MCP listening on http://${host}:${port}`));
