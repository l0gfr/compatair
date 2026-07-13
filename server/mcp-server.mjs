import { createServer } from 'node:http';
import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createMcpCore, ENGINE_VERSION, PROTOCOL_VERSION } from './mcp-core.mjs';

const BODY_LIMIT = 65_536;
const REQUEST_LIMIT = 120;
const RATE_WINDOW_MS = 60_000;
const MAX_RATE_ENTRIES = 10_000;

function json(response, status, value, headers = {}) {
	const payload = JSON.stringify(value);
	response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload), 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers });
	response.end(payload);
}

function isLoopback(address) { return address === '127.0.0.1' || address === '::1' || address === '::ffff:127.0.0.1'; }

export function clientAddress(request) {
	const remote = request.socket.remoteAddress ?? 'unknown';
	if (!isLoopback(remote)) return remote;
	const forwarded = request.headers['x-forwarded-for'];
	if (typeof forwarded !== 'string') return remote;
	const candidate = forwarded.split(',').at(-1)?.trim();
	return candidate && candidate.length <= 64 && /^[0-9a-f:.]+$/i.test(candidate) ? candidate : remote;
}

export function parseOfferId(pathname) {
	if (!pathname.startsWith('/go/')) return undefined;
	let value;
	try { value = decodeURIComponent(pathname.slice(4)); } catch { return undefined; }
	return /^[a-z0-9-]{1,100}$/.test(value) ? value : undefined;
}

export function allowedOfferRedirect(offer) {
	if (!offer || typeof offer.url !== 'string') return undefined;
	let url; try { url = new URL(offer.url); } catch { return undefined; }
	if (url.protocol !== 'https:') return undefined;
	const host = url.hostname.toLowerCase();
	if (offer.merchantId === 'amazon-fr') return host === 'amazon.fr' || host.endsWith('.amazon.fr') ? url.toString() : undefined;
	if (offer.merchantId !== 'manomano-fr') return undefined;
	if (host === 'manomano.fr' || host.endsWith('.manomano.fr')) return url.toString();
	if (!(host === 'awin1.com' || host.endsWith('.awin1.com'))) return undefined;
	if (!['/pclick.php', '/cread.php'].includes(url.pathname)) return undefined;
	return (url.searchParams.get('m') ?? url.searchParams.get('awinmid')) === '17547' ? url.toString() : undefined;
}

export function isMainModule(entryPath, moduleUrl) {
	if (!entryPath) return false;
	try { return realpathSync(entryPath) === realpathSync(fileURLToPath(moduleUrl)); } catch { return false; }
}

function createRateLimiter() {
	const requests = new Map();
	return (key) => {
		const now = Date.now();
		const entry = requests.get(key);
		if (!entry || now - entry.since > RATE_WINDOW_MS) {
			if (requests.size >= MAX_RATE_ENTRIES) {
				for (const [storedKey, stored] of requests) if (now - stored.since > RATE_WINDOW_MS) requests.delete(storedKey);
				if (requests.size >= MAX_RATE_ENTRIES) requests.delete(requests.keys().next().value);
			}
			requests.set(key, { since: now, count: 1 });
			return true;
		}
		entry.count++;
		return entry.count <= REQUEST_LIMIT;
	};
}

async function readJsonBody(request) {
	const chunks = [];
	let size = 0;
	for await (const chunk of request) {
		size += chunk.length;
		if (size > BODY_LIMIT) throw new Error('BODY_TOO_LARGE');
		chunks.push(chunk);
	}
	return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

function isAllowedOrigin(request, allowedOrigins, required = false) {
	const origin = request.headers.origin;
	if (origin === undefined) return !required;
	return typeof origin === 'string' && allowedOrigins.has(origin);
}

function isJsonContentType(request) {
	const value = String(request.headers['content-type'] ?? '').toLowerCase();
	return /^application\/json(?:\s*;|$)/.test(value);
}

export function createCompatAirServer({ catalog, offerSnapshot = { offers: [], snapshotVersion: 'empty' }, allowedOrigins }) {
	const core = createMcpCore(catalog, offerSnapshot);
	const allow = createRateLimiter();
	const counters = { rpc: 0, errors: 0, tools: Object.create(null), events: { calculator_used: 0 }, affiliateClicks: Object.create(null) };

	async function handle(request, response) {
		response.setTimeout(10_000);
		if (!request.url || request.url.length > 2_048) return json(response, 414, { error: 'uri_too_long' });
		let url;
		try { url = new URL(request.url, 'http://localhost'); } catch { return json(response, 400, { error: 'invalid_request_target' }); }

		if (url.pathname === '/health' && request.method === 'GET') return json(response, 200, { status: 'ok', catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION });

		if (url.pathname === '/events') {
			if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
			if (!isAllowedOrigin(request, allowedOrigins, true)) return json(response, 403, { error: 'origin_forbidden' });
			if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' });
			if (!allow(`events:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
			try {
				const event = await readJsonBody(request);
				if (!event || typeof event !== 'object' || Array.isArray(event) || Object.keys(event).length !== 1 || event.event !== 'calculator_used') return json(response, 400, { error: 'invalid_event' });
				counters.events.calculator_used++;
				response.writeHead(204, { 'Cache-Control': 'no-store' });
				return response.end();
			} catch (error) { return json(response, error instanceof Error && error.message === 'BODY_TOO_LARGE' ? 413 : 400, { error: 'invalid_event' }); }
		}

		if (url.pathname.startsWith('/go/')) {
			if (request.method !== 'GET') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'GET' });
			const offerId = parseOfferId(url.pathname);
			if (!offerId) return json(response, 404, { error: 'offer_not_found' });
			const offer = (offerSnapshot.offers ?? []).find((item) => item.id === offerId);
			const redirect = allowedOfferRedirect(offer);
			if (!redirect) return json(response, 404, { error: 'offer_not_found' });
			counters.affiliateClicks[offerId] = (counters.affiliateClicks[offerId] ?? 0) + 1;
			response.writeHead(302, { Location: redirect, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Content-Type-Options': 'nosniff' });
			return response.end();
		}

		if (url.pathname !== '/mcp') return json(response, 404, { error: 'not_found' });
		if (!isAllowedOrigin(request, allowedOrigins)) return json(response, 403, { error: 'origin_forbidden' });
		if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
		const accept = request.headers.accept ?? '';
		if (typeof accept !== 'string' || !accept.includes('application/json') || !accept.includes('text/event-stream')) return json(response, 406, { error: 'accept_must_include_json_and_event_stream' });
		if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' });
		const protocol = request.headers['mcp-protocol-version'];
		if (protocol && protocol !== PROTOCOL_VERSION && protocol !== '2025-03-26') return json(response, 400, { error: 'unsupported_protocol_version' });
		if (!allow(`mcp:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
		try {
			const message = await readJsonBody(request);
			const idIsValid = message?.id === undefined || message.id === null || (typeof message.id === 'string' && message.id.length <= 128) || (typeof message.id === 'number' && Number.isFinite(message.id));
			if (!message || typeof message !== 'object' || Array.isArray(message) || message.jsonrpc !== '2.0' || typeof message.method !== 'string' || message.method.length > 128 || !idIsValid) return json(response, 400, { jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Requête JSON-RPC invalide.' } });
			counters.rpc++;
			if (message.method === 'tools/call' && typeof message.params?.name === 'string') counters.tools[message.params.name] = (counters.tools[message.params.name] ?? 0) + 1;
			const result = core.handle(message);
			if (result === null || message.id === undefined) { response.writeHead(202, { 'Cache-Control': 'no-store' }); return response.end(); }
			if (result.error) counters.errors++;
			return json(response, 200, result);
		} catch (error) {
			counters.errors++;
			if (error instanceof Error && error.message === 'BODY_TOO_LARGE') return json(response, 413, { error: 'body_too_large' });
			return json(response, 400, { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'JSON invalide.' } });
		}
	}

	const server = createServer((request, response) => {
		void handle(request, response).catch(() => {
			counters.errors++;
			if (!response.headersSent) json(response, 500, { error: 'internal_error' });
			else response.destroy();
		});
	});
	server.requestTimeout = 10_000;
	server.headersTimeout = 12_000;
	server.keepAliveTimeout = 5_000;
	server.maxRequestsPerSocket = 100;
	return server;
}

async function start() {
	const host = process.env.MCP_HOST ?? '127.0.0.1';
	const port = Number(process.env.MCP_PORT ?? 8787);
	if (!Number.isInteger(port) || port < 1 || port > 65_535) throw new Error('MCP_PORT invalide.');
	const catalogPath = process.env.COMPAT_AIR_CATALOG ?? new URL('../dist/data/catalog.json', import.meta.url).pathname;
	const offersPath = process.env.COMPAT_AIR_OFFERS ?? new URL('../dist/data/offers.json', import.meta.url).pathname;
	const allowedOrigins = new Set((process.env.MCP_ALLOWED_ORIGINS ?? 'https://compatair.fr,https://www.compatair.fr').split(',').map((item) => item.trim()).filter(Boolean));
	const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
	let offerSnapshot = { offers: [], snapshotVersion: 'empty' };
	try { offerSnapshot = JSON.parse(await readFile(offersPath, 'utf8')); } catch {}
	const server = createCompatAirServer({ catalog, offerSnapshot, allowedOrigins });
	server.on('error', (error) => { console.error(error); process.exitCode = 1; });
	server.listen(port, host, () => console.error(`CompatAir MCP listening on http://${host}:${port}`));
}

const isMain = isMainModule(process.argv[1], import.meta.url);
if (isMain) await start();
