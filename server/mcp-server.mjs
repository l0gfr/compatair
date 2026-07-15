import { createServer } from 'node:http';
import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createMcpCore, ENGINE_VERSION, PROTOCOL_VERSION } from './mcp-core.mjs';
import { createDemandAggregateStore, DEMAND_EVENT_SCHEMA_VERSION, validateDemandEvent } from './demand-aggregates.mjs';
import { createProductFunnelAggregateStore, PRODUCT_FUNNEL_SCHEMA_VERSION, validateProductFunnelEvent } from './product-funnel-aggregates.mjs';

const BODY_LIMIT = 65_536;
const REQUEST_LIMIT = 120;
const RATE_WINDOW_MS = 60_000;
const MAX_RATE_ENTRIES = 10_000;

function json(response, status, value, headers = {}, options = {}) {
	const payload = JSON.stringify(value);
	const securityHeaders = options.omitContentTypeOptions ? {} : { 'X-Content-Type-Options': 'nosniff' };
	response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload), 'Cache-Control': 'no-store', ...securityHeaders, ...headers });
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

export function resolveVerdictSnapshotPath(catalogPath, configuredPath) {
	return configuredPath || resolve(dirname(catalogPath), 'verdicts.json');
}

export function resolveProductFunnelAggregatePath(demandAggregatePath, configuredPath) {
	return configuredPath || (demandAggregatePath ? resolve(dirname(demandAggregatePath), 'product-funnel-aggregates.json') : undefined);
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

/**
 * @param {{ catalog: any, verdictSnapshot?: { pairs?: any[], verdictVersion?: string, calculationVersion?: string }, offerSnapshot?: any, allowedOrigins: Set<string>, demandAggregatePath?: string, productFunnelAggregatePath?: string, proxyManagesApiHeaders?: boolean }} options
 */
export function createCompatAirServer({ catalog, verdictSnapshot = { pairs: [], verdictVersion: 'unavailable' }, offerSnapshot = { offers: [], snapshotVersion: 'empty' }, allowedOrigins, demandAggregatePath = undefined, productFunnelAggregatePath = undefined, proxyManagesApiHeaders = false }) {
	const core = createMcpCore(catalog, offerSnapshot);
	const compressorMap = new Map((catalog.compressors ?? []).map((item) => [item.id, item]));
	const toolMap = new Map((catalog.tools ?? []).map((item) => [item.id, item]));
	const verdictMap = new Map((verdictSnapshot.pairs ?? []).map((item) => [`${item.compressorId}--${item.toolId}`, item]));
	const allow = createRateLimiter();
	const counters = { rpc: 0, errors: 0, tools: Object.create(null), affiliateClicks: Object.create(null) };
	const demandStore = createDemandAggregateStore({ filePath: demandAggregatePath, catalog });
	const productFunnelStore = createProductFunnelAggregateStore({ filePath: productFunnelAggregatePath });

	async function handle(request, response) {
		response.setTimeout(10_000);
		if (!request.url || request.url.length > 2_048) return json(response, 414, { error: 'uri_too_long' });
		let url;
		try { url = new URL(request.url, 'http://localhost'); } catch { return json(response, 400, { error: 'invalid_request_target' }); }

		if (url.pathname === '/health' && request.method === 'GET') return json(response, 200, { status: 'ok', catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION, verdictVersion: verdictSnapshot.verdictVersion, demandAggregation: { enabled: demandStore.enabled, schemaVersion: DEMAND_EVENT_SCHEMA_VERSION }, productFunnelAggregation: { enabled: productFunnelStore.enabled, schemaVersion: PRODUCT_FUNNEL_SCHEMA_VERSION } });

		if (url.pathname === '/api/v1/compatibility') {
			const corsHeaders = {
				...(proxyManagesApiHeaders ? {} : { 'Access-Control-Allow-Origin': '*', 'Cross-Origin-Resource-Policy': 'cross-origin' }),
				'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Accept', Vary: 'Origin',
			};
			const apiJson = (status, value, headers = {}) => json(response, status, value, headers, { omitContentTypeOptions: proxyManagesApiHeaders });
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'GET') return apiJson(405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'GET, OPTIONS' });
			if (!allow(`api:${clientAddress(request)}`)) return apiJson(429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			const keys = [...url.searchParams.keys()];
			if (keys.some((key) => !['compressorId', 'toolId'].includes(key)) || ['compressorId', 'toolId'].some((key) => url.searchParams.getAll(key).length > 1)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const compressorId = url.searchParams.get('compressorId') ?? '';
			const toolId = url.searchParams.get('toolId') ?? '';
			if (!/^[a-z0-9-]{1,160}$/.test(compressorId) || !/^[a-z0-9-]{1,160}$/.test(toolId)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const compressor = compressorMap.get(compressorId);
			const tool = toolMap.get(toolId);
			if (!compressor || !tool) return apiJson(404, { error: 'product_not_found' }, corsHeaders);
			const snapshotPair = verdictMap.get(`${compressorId}--${toolId}`);
			if (tool.demandModel === 'fixed-flow' && !snapshotPair) return apiJson(503, { error: 'verdict_snapshot_unavailable' }, { ...corsHeaders, 'Retry-After': '60' });
			const evaluation = snapshotPair ?? { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data' };
			const detailsUrl = `https://compatair.fr/calculateur/?outil=${encodeURIComponent(tool.id)}&compresseur=${encodeURIComponent(compressor.id)}`;
			const proofUrl = `https://compatair.fr/graphe-preuve/?compresseur=${encodeURIComponent(compressor.id)}&outil=${encodeURIComponent(tool.id)}`;
			return apiJson(200, {
				schemaVersion: '1.0.0', catalogVersion: catalog.catalogVersion, catalogVerifiedAt: catalog.verifiedAt, verdictVersion: verdictSnapshot.verdictVersion, calculationVersion: verdictSnapshot.calculationVersion,
				input: { compressorId, toolId },
				compressor: { id: compressor.id, brand: compressor.brand, model: compressor.model, slug: compressor.slug },
				tool: { id: tool.id, brand: tool.brand, model: tool.model, label: tool.label, slug: tool.slug },
				compatibility: evaluation,
				sources: [...(compressor.evidence ?? []), ...(tool.evidence ?? [])].map((source) => ({ id: source.id, label: source.sourceLabel, url: source.sourceUrl, retrievedAt: source.retrievedAt, confidence: source.confidence })),
				detailsUrl,
				proofUrl,
			}, { ...corsHeaders, 'Cache-Control': 'public, max-age=300' });
		}

		if (url.pathname === '/events') {
			if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
			if (!isAllowedOrigin(request, allowedOrigins, true)) return json(response, 403, { error: 'origin_forbidden' });
			if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' });
			if (!allow(`events:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
			try {
				const event = await readJsonBody(request);
				const demand = validateDemandEvent(event, catalog);
				const productFunnel = validateProductFunnelEvent(event);
				if (demand) await demandStore.record(demand);
				else if (productFunnel) await productFunnelStore.record(productFunnel);
				else return json(response, 400, { error: 'invalid_event' });
				response.writeHead(204, { 'Cache-Control': 'no-store' });
				return response.end();
			} catch (error) { return json(response, error instanceof Error && error.message === 'BODY_TOO_LARGE' ? 413 : 400, { error: 'invalid_event' }); }
		}

		if (url.pathname.startsWith('/go/')) {
			if (request.method !== 'GET') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'GET' });
			if (!allow(`go:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
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
	const verdictsPath = resolveVerdictSnapshotPath(catalogPath, process.env.COMPAT_AIR_VERDICTS);
	const allowedOrigins = new Set((process.env.MCP_ALLOWED_ORIGINS ?? 'https://compatair.fr,https://www.compatair.fr').split(',').map((item) => item.trim()).filter(Boolean));
	const demandAggregatePath = process.env.COMPAT_AIR_DEMAND_AGGREGATES || undefined;
	const productFunnelAggregatePath = resolveProductFunnelAggregatePath(demandAggregatePath, process.env.COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES || undefined);
	const proxyManagesApiHeaders = process.env.COMPAT_AIR_PROXY_MANAGES_API_HEADERS === '1';
	const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
	const verdictSnapshot = JSON.parse(await readFile(verdictsPath, 'utf8'));
	if (verdictSnapshot.catalogVersion !== catalog.catalogVersion || !Array.isArray(verdictSnapshot.pairs)) throw new Error('Le snapshot de verdicts ne correspond pas au catalogue.');
	let offerSnapshot = { offers: [], snapshotVersion: 'empty' };
	try { offerSnapshot = JSON.parse(await readFile(offersPath, 'utf8')); } catch {}
	const server = createCompatAirServer({ catalog, verdictSnapshot, offerSnapshot, allowedOrigins, demandAggregatePath, productFunnelAggregatePath, proxyManagesApiHeaders });
	server.on('error', (error) => { console.error(error); process.exitCode = 1; });
	server.listen(port, host, () => console.error(`CompatAir MCP listening on http://${host}:${port}`));
}

const isMain = isMainModule(process.argv[1], import.meta.url);
if (isMain) await start();
