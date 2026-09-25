import { createServer } from 'node:http';
import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readVerdictSnapshot, verdictIndex } from './verdict-snapshot.mjs';
import { createMcpCore, ENGINE_VERSION, MCP_SERVER_VERSION, METHOD_VERSION, PROTOCOL_VERSION, verifyCompatibilityReceipt } from './mcp-core.mjs';
import { createDemandAggregateStore, DEMAND_EVENT_SCHEMA_VERSION, isValidCalculationVersion, validateDemandEvent } from './demand-aggregates.mjs';
import { createProductFunnelAggregateStore, PRODUCT_FUNNEL_SCHEMA_VERSION, validateProductFunnelEvent } from './product-funnel-aggregates.mjs';
import { ACQUISITION_SCHEMA_VERSION, createAcquisitionAggregateStore, validateAcquisitionEvent } from './acquisition-aggregates.mjs';
import { classifyMcpClient, classifyMcpErrorCode, classifyMcpOutcomes, classifyMcpTrafficHint, createMcpTelemetryStore, extractMcpDemand, MCP_TELEMETRY_EVENT_SCHEMA_VERSION, MCP_TELEMETRY_SCHEMA_VERSION } from './mcp-telemetry.mjs';
import { authorizeUcpRequest, createUcpError, createUcpToolArguments, fetchPublicUcpProfile, ucpErrorStatus, validateUcpEvaluationRequest } from './ucp-core.mjs';

const BODY_LIMIT = 65_536;
const REQUEST_LIMIT = 120;
const RATE_WINDOW_MS = 60_000;
const MAX_RATE_ENTRIES = 10_000;
const MAXIMUM_OFFER_AGE_MS = 48 * 60 * 60 * 1_000;
const MAXIMUM_OFFER_CLOCK_SKEW_MS = 5 * 60 * 1_000;

function normalizeMpn(value) { return String(value ?? '').normalize('NFKC').toUpperCase().replace(/[^A-Z0-9]/g, ''); }
function normalizeDistributorSku(value) { return String(value ?? '').normalize('NFKC').trim().toUpperCase().replace(/\s+/g, ' '); }
function sourceRole(source) {
	if (['primary', 'independent_corroboration', 'secondary'].includes(source?.sourceRole)) return source.sourceRole;
	if (source?.sourceType === 'manufacturer' || source?.sourceType === 'manual') return 'primary';
	if (source?.sourceType === 'measured') return 'independent_corroboration';
	return 'secondary';
}
function productIdentifiers(product, normalized) {
	return {
		...(product.mpn ? { mpn: product.mpn, normalized_mpn: normalized?.identity?.normalizedMpn ?? normalizeMpn(product.mpn) } : {}),
		...(product.ean ? { ean: product.ean } : {}),
		...(product.gtin ? { gtin: product.gtin } : {}),
		distributor_skus: (product.distributorSkus ?? []).map((identifier) => ({ distributor_id: identifier.distributorId, sku: identifier.sku, normalized_sku: normalizeDistributorSku(identifier.sku) })),
	};
}

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
	if (url.protocol !== 'https:' || url.username || url.password) return undefined;
	const host = url.hostname.toLowerCase();
	if (offer.merchantId === 'amazon-fr') return host === 'amazon.fr' || host.endsWith('.amazon.fr') ? url.toString() : undefined;
	if (offer.merchantId !== 'manomano-fr') return undefined;
	if (host === 'manomano.fr' || host.endsWith('.manomano.fr')) return url.toString();
	if (!(host === 'awin1.com' || host.endsWith('.awin1.com'))) return undefined;
	if (!['/pclick.php', '/cread.php'].includes(url.pathname)) return undefined;
	if (url.pathname === '/pclick.php') {
		if (url.searchParams.has('awinmid') || url.searchParams.getAll('m').length !== 1) return undefined;
		return url.searchParams.get('m') === '17547' ? url.toString() : undefined;
	}
	if (url.searchParams.has('m') || url.searchParams.getAll('awinmid').length !== 1 || url.searchParams.get('awinmid') !== '17547') return undefined;
	const destinations = url.searchParams.getAll('ued');
	if (destinations.length !== 1) return undefined;
	let destination; try { destination = new URL(destinations[0]); } catch { return undefined; }
	if (destination.protocol !== 'https:' || destination.username || destination.password) return undefined;
	const destinationHost = destination.hostname.toLowerCase();
	return destinationHost === 'manomano.fr' || destinationHost.endsWith('.manomano.fr') ? url.toString() : undefined;
}

export function isFreshOfferSnapshot(offer, now = Date.now()) {
	const collectedAt = typeof offer?.collectedAt === 'string' ? Date.parse(offer.collectedAt) : Number.NaN;
	if (!Number.isFinite(now) || !Number.isFinite(collectedAt)) return false;
	const age = now - collectedAt;
	return age >= -MAXIMUM_OFFER_CLOCK_SKEW_MS && age <= MAXIMUM_OFFER_AGE_MS;
}

export function isMainModule(entryPath, moduleUrl) {
	if (!entryPath) return false;
	try { return realpathSync(entryPath) === realpathSync(fileURLToPath(moduleUrl)); } catch { return false; }
}

export function resolveVerdictSnapshotPath(catalogPath, configuredPath) {
	return configuredPath || resolve(dirname(catalogPath), 'verdicts.json');
}

export function resolveKnowledgeSnapshotPath(catalogPath, configuredPath) {
	return configuredPath || resolve(dirname(catalogPath), 'agent-knowledge.json');
}

export function resolveChangefeedSnapshotPath(catalogPath, configuredPath) {
	return configuredPath || resolve(dirname(catalogPath), 'changefeed.json');
}

export function resolveProductFunnelAggregatePath(demandAggregatePath, configuredPath) {
	return configuredPath || (demandAggregatePath ? resolve(dirname(demandAggregatePath), 'product-funnel-aggregates.json') : undefined);
}

export function resolveAcquisitionAggregatePath(demandAggregatePath, configuredPath) {
	return configuredPath || (demandAggregatePath ? resolve(dirname(demandAggregatePath), 'acquisition-aggregates.json') : undefined);
}

export function resolveMcpTelemetryPath(demandAggregatePath, configuredPath) {
	return configuredPath || (demandAggregatePath ? resolve(dirname(demandAggregatePath), 'mcp-telemetry.json') : undefined);
}

export function canonicalFollowUrl(canonicalUrl, toolName) {
	if (typeof canonicalUrl !== 'string' || typeof toolName !== 'string' || !/^[a-z0-9_]{1,80}$/.test(toolName)) return undefined;
	let url;
	try { url = new URL(canonicalUrl); } catch { return undefined; }
	if (url.origin !== 'https://compatair.fr') return undefined;
	url.searchParams.set('via', 'mcp');
	url.searchParams.set('tool', toolName);
	return url.toString();
}

function acquisitionOutcome(structuredContent) {
	if (!structuredContent || structuredContent.error) return 'error';
	if (structuredContent.verdict === 'insufficient_data') return 'insufficient_data';
	if (structuredContent.verdict === 'incompatible') return 'incompatible';
	return structuredContent.verdict === 'compatible' || structuredContent.verdict === 'compatible_with_limits' ? 'success' : 'unknown';
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
 * @param {{ catalog: any, verdictSnapshot?: { pairs?: any[], verdictVersion?: string, calculationVersion?: string }, offerSnapshot?: any, knowledgeItems?: any[], changefeedEvents?: any[], allowedOrigins: Set<string>, demandAggregatePath?: string, productFunnelAggregatePath?: string, acquisitionAggregatePath?: string, mcpTelemetryPath?: string, mcpTelemetrySecretPath?: string, mcpTelemetrySecret?: string, proxyManagesApiHeaders?: boolean, now?: () => number, fetchUcpProfile?: (url: URL) => Promise<any>, recordAffiliateClick?: (offerId: string) => void, recordToolCall?: (toolName: string) => void }} options
 */
export function createCompatAirServer({ catalog, verdictSnapshot = { pairs: [], verdictVersion: 'unavailable', calculationVersion: ENGINE_VERSION }, offerSnapshot = { offers: [], snapshotVersion: 'empty' }, knowledgeItems = [], changefeedEvents = [], allowedOrigins, demandAggregatePath = undefined, productFunnelAggregatePath = undefined, acquisitionAggregatePath = undefined, mcpTelemetryPath = undefined, mcpTelemetrySecretPath = undefined, mcpTelemetrySecret = undefined, proxyManagesApiHeaders = false, now = Date.now, fetchUcpProfile = fetchPublicUcpProfile, recordAffiliateClick = () => {}, recordToolCall = () => {} }) {
	const coreOptions = { isOfferActive: (offer) => isFreshOfferSnapshot(offer, now()) && allowedOfferRedirect(offer) !== undefined, verdictSnapshot, knowledgeItems, changefeedEvents, now };
	const mcpProfiles = {
		core: createMcpCore(catalog, offerSnapshot, { ...coreOptions, profile: 'core' }),
		extended: createMcpCore(catalog, offerSnapshot, { ...coreOptions, profile: 'extended' }),
		legacy: createMcpCore(catalog, offerSnapshot, { ...coreOptions, profile: 'legacy' }),
	};
	const authoritativeCalculationVersion = isValidCalculationVersion(verdictSnapshot.calculationVersion) ? verdictSnapshot.calculationVersion : ENGINE_VERSION;
	const compressorMap = new Map((catalog.compressors ?? []).map((item) => [item.id, item]));
	const toolMap = new Map((catalog.tools ?? []).map((item) => [item.id, item]));
	const compressorBySlug = new Map((catalog.compressors ?? []).map((item) => [item.slug, item]));
	const toolBySlug = new Map((catalog.tools ?? []).map((item) => [item.slug, item]));
	const normalizedProductMap = new Map((catalog.normalized?.products ?? []).map((item) => [item.id, item]));
	const verdictMap = verdictIndex(verdictSnapshot);
	const allow = createRateLimiter();
	const counters = { rpc: 0, errors: 0 };
	const demandStore = createDemandAggregateStore({ filePath: demandAggregatePath, catalog });
	const productFunnelStore = createProductFunnelAggregateStore({ filePath: productFunnelAggregatePath });
	const acquisitionStore = createAcquisitionAggregateStore({ filePath: acquisitionAggregatePath });
	const telemetryStore = createMcpTelemetryStore({ filePath: mcpTelemetryPath, secretFilePath: mcpTelemetrySecretPath, configuredSecret: mcpTelemetrySecret, catalog });
	const mcpProfileMetrics = Object.fromEntries(Object.entries(mcpProfiles).map(([profile, profileCore]) => {
		const listed = profileCore.handle({ jsonrpc: '2.0', id: 'health-tools-list', method: 'tools/list', params: {} });
		return [profile, { endpoint: `/mcp${profile === 'core' ? '' : `/${profile}`}`, tools: listed?.result?.tools?.length ?? 0, manifestBytes: Buffer.byteLength(JSON.stringify(listed)) }];
	}));
	const knownToolNames = new Set(Object.values(mcpProfiles).flatMap((profileCore) => profileCore.handle({ jsonrpc: '2.0', id: 'telemetry-tools', method: 'tools/list', params: {} })?.result?.tools?.map((tool) => tool.name) ?? []));
	function callPublicTool(name, args) {
		const profileCore = Object.values(mcpProfiles).find((candidate) => candidate.handle({ jsonrpc: '2.0', id: 'profile-lookup', method: 'tools/list', params: {} })?.result?.tools?.some((tool) => tool.name === name));
		const response = profileCore?.handle({ jsonrpc: '2.0', id: 'http-api', method: 'tools/call', params: { name, arguments: args } });
		return response?.result;
	}
	function resolveProductLocator(locator) {
		const { expectedType, ...value } = locator;
		let argumentsValue;
		if (value.id) argumentsValue = { query: value.id, limit: 10 };
		else if (value.compatair_id) argumentsValue = { query: value.compatair_id, limit: 10 };
		else if (value.ean) argumentsValue = { ean: value.ean, limit: 10 };
		else if (value.mpn || value.reference) argumentsValue = { reference: value.mpn ?? value.reference, limit: 10 };
		else if (value.url) argumentsValue = { url: value.url, limit: 10 };
		else if (value.name) argumentsValue = { query: value.name, limit: 10 };
		else return undefined;
		const called = callPublicTool('identify_product', argumentsValue);
		const exact = called?.structuredContent?.matches?.filter((item) => item.type === expectedType && item.match_confidence === 'exact') ?? [];
		return exact.length === 1 ? exact[0].id : undefined;
	}
	function resolveUcpProducts(validated) {
		const compressorId = validated.compressor ? resolveProductLocator(validated.compressor) : undefined;
		if (validated.compressor && !compressorId) return undefined;
		const toolIds = [];
		for (const { locator, quantity } of validated.tools) {
			const toolId = resolveProductLocator(locator);
			if (!toolId) return undefined;
			for (let index = 0; index < quantity; index++) toolIds.push(toolId);
		}
		return { compressorId, toolIds };
	}
	function publicApiHeaders(methods = 'GET, OPTIONS') {
		return {
			...(proxyManagesApiHeaders ? {} : { 'Access-Control-Allow-Origin': '*', 'Cross-Origin-Resource-Policy': 'cross-origin' }),
			'Access-Control-Allow-Methods': methods, 'Access-Control-Allow-Headers': 'Accept', Vary: 'Origin',
		};
	}
	async function recordAcquisition(event) {
		try { await acquisitionStore.record(event); }
		catch { counters.errors++; }
	}
	async function telemetryActorId(request) {
		return telemetryStore.actorId(clientAddress(request), request.headers['user-agent']);
	}
	async function recordTelemetry(event) {
		try { await telemetryStore.record(event); }
		catch { counters.errors++; }
	}

	async function handle(request, response) {
		response.setTimeout(10_000);
		if (!request.url || request.url.length > 2_048) return json(response, 414, { error: 'uri_too_long' });
		let url;
		try { url = new URL(request.url, 'http://localhost'); } catch { return json(response, 400, { error: 'invalid_request_target' }); }

		if (url.pathname === '/health' && request.method === 'GET') return json(response, 200, { status: 'ok', mcpServerVersion: MCP_SERVER_VERSION, protocolVersion: PROTOCOL_VERSION, methodVersion: METHOD_VERSION, catalogVersion: catalog.catalogVersion, engineVersion: ENGINE_VERSION, verdictVersion: verdictSnapshot.verdictVersion, knowledgeItems: knowledgeItems.length, changefeedEvents: changefeedEvents.length, mcpProfiles: mcpProfileMetrics, ucp: { readOnlyCompatibility: true }, demandAggregation: { enabled: demandStore.enabled, schemaVersion: DEMAND_EVENT_SCHEMA_VERSION }, productFunnelAggregation: { enabled: productFunnelStore.enabled, schemaVersion: PRODUCT_FUNNEL_SCHEMA_VERSION }, acquisitionAggregation: { enabled: acquisitionStore.enabled, schemaVersion: ACQUISITION_SCHEMA_VERSION }, mcpTelemetry: { enabled: telemetryStore.enabled, schemaVersion: MCP_TELEMETRY_SCHEMA_VERSION } });

		if (url.pathname === '/data/mcp-usage.json') {
			if (!['GET', 'HEAD'].includes(request.method ?? '')) return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'GET, HEAD' });
			const report = await telemetryStore.publicReport();
			if (request.method === 'HEAD') { response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' }); return response.end(); }
			return json(response, 200, report, { 'Cache-Control': 'public, max-age=300' });
		}

		if (url.pathname === '/compatibilite' || url.pathname.startsWith('/compatibilite/')) {
			if (!['GET', 'HEAD'].includes(request.method ?? '')) return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'GET, HEAD' });
			const match = url.pathname.match(/^\/compatibilite\/([a-z0-9-]{1,160})--([a-z0-9-]{1,160})\/?$/);
			const compressor = match ? compressorBySlug.get(match[1]) : undefined;
			const tool = match ? toolBySlug.get(match[2]) : undefined;
			if (!compressor || !tool) return json(response, 410, { error: 'compatibility_page_removed', replacement: '/calculateur/' }, { 'X-Robots-Tag': 'noindex, nofollow' });
			const location = `/calculateur/#outil=${encodeURIComponent(tool.id)}&compresseur=${encodeURIComponent(compressor.id)}`;
			response.writeHead(301, { Location: location, 'Cache-Control': 'public, max-age=86400', 'X-Robots-Tag': 'noindex, nofollow', 'X-Content-Type-Options': 'nosniff' });
			return response.end();
		}

		if (url.pathname === '/api/v1/compatibility') {
			const corsHeaders = publicApiHeaders();
			const apiJson = (status, value, headers = {}) => json(response, status, value, headers, { omitContentTypeOptions: proxyManagesApiHeaders });
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'GET') return apiJson(405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'GET, OPTIONS' });
			if (!allow(`api:${clientAddress(request)}`)) return apiJson(429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			const keys = [...url.searchParams.keys()];
			if (keys.some((key) => !['compressorId', 'toolId', 'channel'].includes(key)) || ['compressorId', 'toolId', 'channel'].some((key) => url.searchParams.getAll(key).length > 1)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const compressorId = url.searchParams.get('compressorId') ?? '';
			const toolId = url.searchParams.get('toolId') ?? '';
			const acquisitionChannel = url.searchParams.get('channel') === 'widget' ? 'widget' : 'api';
			if (url.searchParams.has('channel') && acquisitionChannel !== 'widget') return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			if (!/^[a-z0-9-]{1,160}$/.test(compressorId) || !/^[a-z0-9-]{1,160}$/.test(toolId)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const compressor = compressorMap.get(compressorId);
			const tool = toolMap.get(toolId);
			if (!compressor || !tool) return apiJson(404, { error: 'product_not_found' }, corsHeaders);
			const snapshotPair = verdictMap.get(compressorId, toolId);
			if (tool.demandModel === 'fixed-flow' && !snapshotPair) return apiJson(503, { error: 'verdict_snapshot_unavailable' }, { ...corsHeaders, 'Retry-After': '60' });
			const evaluation = snapshotPair ?? { verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data' };
			const detailsUrl = `https://compatair.fr/calculateur/?outil=${encodeURIComponent(tool.id)}&compresseur=${encodeURIComponent(compressor.id)}`;
			const proofUrl = `https://compatair.fr/graphe-preuve/?compresseur=${encodeURIComponent(compressor.id)}&outil=${encodeURIComponent(tool.id)}`;
			const sources = [...(compressor.evidence ?? []), ...(tool.evidence ?? [])].map((source) => ({ id: source.id, label: source.sourceLabel, url: source.sourceUrl, sourceType: source.sourceType, sourceRole: sourceRole(source), retrievedAt: source.retrievedAt, confidence: source.confidence }));
			const limitations = Array.isArray(evaluation.warnings) ? evaluation.warnings : [];
			const decision = callPublicTool('check_compatibility', { compressorId, toolId })?.structuredContent;
			if (!decision || decision.error) return apiJson(503, { error: 'compatibility_decision_unavailable' }, { ...corsHeaders, 'Retry-After': '60' });
			await recordAcquisition({ channel: acquisitionChannel, template: 'compatibility', action: 'decision_request', outcome: acquisitionOutcome(decision) });
			return apiJson(200, {
				verdict: decision.verdict, verdict_scope: decision.verdict_scope, verdict_schema_version: decision.verdict_schema_version, canonical_url: detailsUrl,
				product_urls: [`https://compatair.fr/compresseurs/${compressor.slug}/`, `https://compatair.fr/outils-pneumatiques/${tool.slug}/`],
				source_urls: [...new Set(sources.map((source) => source.url))], method_version: METHOD_VERSION,
				catalog_version: catalog.catalogVersion, observed_at: catalog.verifiedAt ?? new Date(0).toISOString().slice(0, 10),
				limitations, next_actions: [proofUrl],
				schemaVersion: '2.0.0', catalogVersion: catalog.catalogVersion, catalogVerifiedAt: catalog.verifiedAt, verdictVersion: verdictSnapshot.verdictVersion, calculationVersion: authoritativeCalculationVersion,
				input: { compressorId, toolId },
				compressor: { id: compressor.id, brand: compressor.brand, model: compressor.model, slug: compressor.slug, identifiers: productIdentifiers(compressor, normalizedProductMap.get(compressor.id)) },
				tool: { id: tool.id, brand: tool.brand, model: tool.model, label: tool.label, slug: tool.slug, identifiers: productIdentifiers(tool, normalizedProductMap.get(tool.id)) },
				compatibility: decision.compatibility,
				overall_system_verdict: decision.overall_system_verdict,
				air_supply_verdict: decision.air_supply_verdict,
				compatibility_receipt: decision.compatibility_receipt,
				engine_evaluation: evaluation,
				sources,
				detailsUrl,
				proofUrl,
			}, { ...corsHeaders, 'Cache-Control': 'public, max-age=300', Link: `<${detailsUrl}>; rel="canonical", <${proofUrl}>; rel="describedby", <https://compatair.fr/openapi/compatair-2026-07-15.json>; rel="service-desc"` });
		}

		if (url.pathname === '/api/v1/compatibility/receipts/verify') {
			const corsHeaders = publicApiHeaders('POST, OPTIONS');
			corsHeaders['Access-Control-Allow-Headers'] = 'Accept, Content-Type';
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'POST, OPTIONS' });
			if (!isAllowedOrigin(request, allowedOrigins)) return json(response, 403, { error: 'origin_forbidden' }, corsHeaders);
			if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' }, corsHeaders);
			if (!allow(`receipt:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			try {
				const verification = verifyCompatibilityReceipt(await readJsonBody(request));
				return json(response, verification.valid ? 200 : 422, verification, { ...corsHeaders, 'Cache-Control': 'no-store' });
			} catch (error) { return json(response, error instanceof Error && error.message === 'BODY_TOO_LARGE' ? 413 : 400, { error: 'invalid_receipt' }, corsHeaders); }
		}

		if (url.pathname === '/api/v1/search') {
			const corsHeaders = publicApiHeaders();
			const apiJson = (status, value, headers = {}) => json(response, status, value, headers, { omitContentTypeOptions: proxyManagesApiHeaders });
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'GET') return apiJson(405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'GET, OPTIONS' });
			if (!allow(`search:${clientAddress(request)}`)) return apiJson(429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			const permitted = ['q', 'type', 'locale', 'cursor', 'limit'];
			if ([...url.searchParams.keys()].some((key) => !permitted.includes(key)) || permitted.some((key) => url.searchParams.getAll(key).length > 1)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const query = url.searchParams.get('q') ?? '';
			const type = url.searchParams.get('type') || undefined;
			const locale = url.searchParams.get('locale') || undefined;
			const cursor = url.searchParams.get('cursor') || undefined;
			const limitRaw = url.searchParams.get('limit');
			const limit = limitRaw === null ? 10 : Number(limitRaw);
			const called = callPublicTool('search_knowledge', { query, ...(type ? { type } : {}), ...(locale ? { locale } : {}), ...(cursor ? { cursor } : {}), limit });
			if (!called || called.isError) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			return apiJson(200, called.structuredContent, { ...corsHeaders, 'Cache-Control': 'public, max-age=60' });
		}

		if (url.pathname === '/api/v1/evidence') {
			const corsHeaders = publicApiHeaders();
			const apiJson = (status, value, headers = {}) => json(response, status, value, headers, { omitContentTypeOptions: proxyManagesApiHeaders });
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'GET') return apiJson(405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'GET, OPTIONS' });
			if (!allow(`evidence:${clientAddress(request)}`)) return apiJson(429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			const permitted = ['compressorId', 'toolId'];
			if ([...url.searchParams.keys()].some((key) => !permitted.includes(key)) || permitted.some((key) => url.searchParams.getAll(key).length !== 1)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const called = callPublicTool('get_compatibility_evidence', { compressorId: url.searchParams.get('compressorId') ?? '', toolId: url.searchParams.get('toolId') ?? '' });
			if (!called) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			if (called.isError) return apiJson(404, { error: 'product_not_found', ...called.structuredContent }, corsHeaders);
			return apiJson(200, called.structuredContent, { ...corsHeaders, 'Cache-Control': 'public, max-age=300' });
		}

		if (url.pathname === '/api/v1/changefeed') {
			const corsHeaders = publicApiHeaders();
			const apiJson = (status, value, headers = {}) => json(response, status, value, headers, { omitContentTypeOptions: proxyManagesApiHeaders });
			if (request.method === 'OPTIONS') { response.writeHead(204, { ...corsHeaders, 'Cache-Control': 'public, max-age=86400' }); return response.end(); }
			if (request.method !== 'GET') return apiJson(405, { error: 'method_not_allowed' }, { ...corsHeaders, Allow: 'GET, OPTIONS' });
			if (!allow(`changefeed:${clientAddress(request)}`)) return apiJson(429, { error: 'rate_limited' }, { ...corsHeaders, 'Retry-After': '60' });
			const permitted = ['since', 'cursor', 'limit'];
			if ([...url.searchParams.keys()].some((key) => !permitted.includes(key)) || permitted.some((key) => url.searchParams.getAll(key).length > 1)) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			const since = url.searchParams.get('since') || undefined;
			const cursor = url.searchParams.get('cursor') || undefined;
			const limitRaw = url.searchParams.get('limit');
			const limit = limitRaw === null ? 20 : Number(limitRaw);
			const called = callPublicTool('get_changefeed', { ...(since ? { since } : {}), ...(cursor ? { cursor } : {}), limit });
			if (!called || called.isError) return apiJson(400, { error: 'invalid_query' }, corsHeaders);
			return apiJson(200, called.structuredContent, { ...corsHeaders, 'Cache-Control': 'public, max-age=60' });
		}

		if (url.pathname === '/api/ucp/v1/compatibility/evaluate') {
			if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
			if (!isAllowedOrigin(request, allowedOrigins)) return json(response, 403, createUcpError('profile_not_trusted'));
			if (!isJsonContentType(request)) return json(response, 415, createUcpError('content_type_unsupported'));
			if (!allow(`ucp:${clientAddress(request)}`)) return json(response, 429, createUcpError('rate_limited'), { 'Retry-After': '60' });
			try {
				const body = await readJsonBody(request);
				const validated = validateUcpEvaluationRequest(body);
				if (!validated) return json(response, 400, createUcpError('invalid_request'));
				const authorized = await authorizeUcpRequest(request, body, fetchUcpProfile);
				const resolved = resolveUcpProducts(validated);
				if (!resolved) return json(response, 404, createUcpError('product_unresolved'));
				const called = callPublicTool('evaluate_air_compatibility', createUcpToolArguments(validated, resolved, authorized.profileUrl));
				if (!called) return json(response, 500, { error: 'internal_error' });
				if (called.isError) return json(response, 404, called.structuredContent);
				await recordAcquisition({ channel: 'ucp', template: 'compatibility', action: 'decision_request', outcome: acquisitionOutcome(called.structuredContent) });
				const canonicalUrl = called.structuredContent?.canonical_url;
				const link = typeof canonicalUrl === 'string' && canonicalUrl.startsWith('https://compatair.fr/')
					? `<${canonicalUrl}>; rel="canonical", <https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json>; rel="describedby"`
					: '<https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json>; rel="describedby"';
				return json(response, 200, called.structuredContent, { 'Cache-Control': 'no-store', Link: link });
			} catch (error) {
				if (error instanceof Error && error.message === 'BODY_TOO_LARGE') return json(response, 413, createUcpError('body_too_large'));
				const code = error instanceof Error ? error.message : 'invalid_request';
				return json(response, ucpErrorStatus(code), createUcpError(code));
			}
		}

		if (url.pathname === '/events') {
			if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
			if (!isAllowedOrigin(request, allowedOrigins, true)) return json(response, 403, { error: 'origin_forbidden' });
			if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' });
			if (!allow(`events:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
			try {
				const event = await readJsonBody(request);
				if (event?.event === 'mcp_canonical_follow' && event.schemaVersion === MCP_TELEMETRY_EVENT_SCHEMA_VERSION && typeof event.tool === 'string' && knownToolNames.has(event.tool) && Object.keys(event).length === 3) {
					await recordTelemetry({ type: 'canonical_follow', actorId: await telemetryActorId(request), toolName: event.tool });
					response.writeHead(204, { 'Cache-Control': 'no-store' });
					return response.end();
				}
				const demand = validateDemandEvent(event, catalog, authoritativeCalculationVersion);
				const productFunnel = validateProductFunnelEvent(event);
				const acquisition = validateAcquisitionEvent(event);
				if (demand) await demandStore.record(demand);
				else if (productFunnel) await productFunnelStore.record(productFunnel);
				else if (acquisition) await acquisitionStore.record(acquisition);
				else return json(response, 400, { error: 'invalid_event' });
				response.writeHead(204, { 'Cache-Control': 'no-store' });
				return response.end();
			} catch (error) { return json(response, error instanceof Error && error.message === 'BODY_TOO_LARGE' ? 413 : 400, { error: 'invalid_event' }); }
		}

		if (url.pathname.startsWith('/go/')) {
			if (!['GET', 'HEAD'].includes(request.method ?? '')) return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'GET, HEAD' });
			if (!allow(`go:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
			const offerId = parseOfferId(url.pathname);
			if (!offerId) return json(response, 404, { error: 'offer_not_found' });
			const offer = (offerSnapshot.offers ?? []).find((item) => item.id === offerId);
			const redirect = isFreshOfferSnapshot(offer, now()) ? allowedOfferRedirect(offer) : undefined;
			if (!redirect) return json(response, 404, { error: 'offer_not_found' });
			if (request.method === 'GET') {
				recordAffiliateClick(offerId);
			}
			response.writeHead(302, { Location: redirect, 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'X-Robots-Tag': 'noindex, nofollow', 'X-Content-Type-Options': 'nosniff' });
			return response.end();
		}

		const mcpProfile = url.pathname === '/mcp' ? 'core' : url.pathname === '/mcp/extended' ? 'extended' : url.pathname === '/mcp/legacy' ? 'legacy' : undefined;
		if (!mcpProfile) return json(response, 404, { error: 'not_found' });
		if (!isAllowedOrigin(request, allowedOrigins)) return json(response, 403, { error: 'origin_forbidden' });
		if (request.method !== 'POST') return json(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
		const accept = request.headers.accept ?? '';
		if (typeof accept !== 'string' || !accept.includes('application/json') || !accept.includes('text/event-stream')) return json(response, 406, { error: 'accept_must_include_json_and_event_stream' });
		if (!isJsonContentType(request)) return json(response, 415, { error: 'content_type_must_be_json' });
		const protocol = request.headers['mcp-protocol-version'];
		if (protocol && ![PROTOCOL_VERSION, '2025-06-18', '2025-03-26'].includes(protocol)) return json(response, 400, { error: 'unsupported_protocol_version' });
		if (!allow(`mcp:${mcpProfile}:${clientAddress(request)}`)) return json(response, 429, { error: 'rate_limited' }, { 'Retry-After': '60' });
		try {
			const message = await readJsonBody(request);
			const idIsValid = message?.id === undefined || message.id === null || (typeof message.id === 'string' && message.id.length <= 128) || (typeof message.id === 'number' && Number.isFinite(message.id));
			if (!message || typeof message !== 'object' || Array.isArray(message) || message.jsonrpc !== '2.0' || typeof message.method !== 'string' || message.method.length > 128 || !idIsValid) return json(response, 400, { jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Requête JSON-RPC invalide.' } });
			if (message.method === 'tools/call' && message.params?.name === 'evaluate_air_compatibility' && message.params?.arguments?.meta?.['ucp-agent']) {
				const profileUrl = message.params?.arguments?.meta?.['ucp-agent']?.profile;
				const syntheticRequest = { headers: { 'ucp-agent': typeof profileUrl === 'string' ? `profile="${profileUrl}"` : undefined } };
				try { await authorizeUcpRequest(syntheticRequest, message.params?.arguments, fetchUcpProfile); }
				catch (error) {
					const code = error instanceof Error ? error.message : 'invalid_request';
					return json(response, ucpErrorStatus(code), { jsonrpc: '2.0', id: message.id ?? null, error: { code: -32001, message: 'UCP discovery failed', data: createUcpError(code) } });
				}
			}
			counters.rpc++;
			const result = mcpProfiles[mcpProfile].handle(message);
			if (message.method === 'initialize' && result && !result.error) {
				await recordTelemetry({ type: 'initialize', actorId: await telemetryActorId(request), clientFamily: classifyMcpClient(message.params?.clientInfo) });
			}
			if (message.method === 'tools/call' && typeof message.params?.name === 'string' && result) {
				const toolName = knownToolNames.has(message.params.name) ? message.params.name : 'unknown';
				const structuredContent = result.result?.structuredContent;
				const followUrl = canonicalFollowUrl(structuredContent?.canonical_url, toolName);
				if (followUrl && result.result) {
					result.result.structuredContent = { ...structuredContent, canonical_follow_url: followUrl };
					result.result.content = [{ type: 'text', text: JSON.stringify(result.result.structuredContent) }];
				}
				const demand = extractMcpDemand(toolName, message.params?.arguments, result.result?.structuredContent, catalog);
				const outcomes = classifyMcpOutcomes(result);
				await recordTelemetry({
					type: 'tool_call', actorId: await telemetryActorId(request), toolName,
					outcome: outcomes === 'error' ? 'error' : outcomes.primary,
					errorCode: classifyMcpErrorCode(result),
					scopedOutcomes: outcomes === 'error' ? {} : { air_supply: outcomes.air_supply, complete_air_system: outcomes.complete_air_system },
					trafficHint: classifyMcpTrafficHint(request.headers['user-agent']),
					requestHash: await telemetryStore.requestHash(toolName, message.params?.arguments), profile: mcpProfile,
					canonicalIssued: Boolean(followUrl), ...demand,
				});
				if (!result.error) {
					recordToolCall(message.params.name);
					await recordAcquisition({ channel: 'mcp', template: message.params.name === 'evaluate_air_compatibility' ? 'compatibility' : 'other', action: 'decision_request', outcome: acquisitionOutcome(result.result?.structuredContent) });
				}
			}
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
	const knowledgePath = resolveKnowledgeSnapshotPath(catalogPath, process.env.COMPAT_AIR_KNOWLEDGE);
	const changefeedPath = resolveChangefeedSnapshotPath(catalogPath, process.env.COMPAT_AIR_CHANGEFEED);
	const allowedOrigins = new Set((process.env.MCP_ALLOWED_ORIGINS ?? 'https://compatair.fr,https://www.compatair.fr').split(',').map((item) => item.trim()).filter(Boolean));
	const demandAggregatePath = process.env.COMPAT_AIR_DEMAND_AGGREGATES || undefined;
	const productFunnelAggregatePath = resolveProductFunnelAggregatePath(demandAggregatePath, process.env.COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES || undefined);
	const acquisitionAggregatePath = resolveAcquisitionAggregatePath(demandAggregatePath, process.env.COMPAT_AIR_ACQUISITION_AGGREGATES || undefined);
	const mcpTelemetryPath = resolveMcpTelemetryPath(demandAggregatePath, process.env.COMPAT_AIR_MCP_TELEMETRY || undefined);
	const mcpTelemetrySecretPath = process.env.COMPAT_AIR_MCP_TELEMETRY_SECRET_FILE || (mcpTelemetryPath ? resolve(dirname(mcpTelemetryPath), '.mcp-telemetry-secret') : undefined);
	const proxyManagesApiHeaders = process.env.COMPAT_AIR_PROXY_MANAGES_API_HEADERS === '1';
	const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
	const verdictSnapshot = await readVerdictSnapshot(verdictsPath);
	if (verdictSnapshot.catalogVersion !== catalog.catalogVersion || !Array.isArray(verdictSnapshot.pairs) || !isValidCalculationVersion(verdictSnapshot.calculationVersion)) throw new Error('Le snapshot de verdicts ne correspond pas au catalogue.');
	let offerSnapshot = { offers: [], snapshotVersion: 'empty' };
	try { offerSnapshot = JSON.parse(await readFile(offersPath, 'utf8')); } catch {}
	let knowledgeItems = [];
	try { const value = JSON.parse(await readFile(knowledgePath, 'utf8')); if (Array.isArray(value)) knowledgeItems = value.slice(0, 10_000); } catch {}
	let changefeedEvents = [];
	try { const value = JSON.parse(await readFile(changefeedPath, 'utf8')); if (Array.isArray(value?.events)) changefeedEvents = value.events.slice(0, 10_000); } catch {}
	const server = createCompatAirServer({ catalog, verdictSnapshot, offerSnapshot, knowledgeItems, changefeedEvents, allowedOrigins, demandAggregatePath, productFunnelAggregatePath, acquisitionAggregatePath, mcpTelemetryPath, mcpTelemetrySecretPath, proxyManagesApiHeaders });
	server.on('error', (error) => { console.error(error); process.exitCode = 1; });
	server.listen(port, host, () => console.error(`CompatAir MCP listening on http://${host}:${port}`));
}

const isMain = isMainModule(process.argv[1], import.meta.url);
if (isMain) await start();
