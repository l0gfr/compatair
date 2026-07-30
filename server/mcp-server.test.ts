import { describe, expect, it } from 'vitest';
import { spawn } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { allowedOfferRedirect, canonicalFollowUrl, clientAddress, createCompatAirServer, isFreshOfferSnapshot, isMainModule, parseOfferId, resolveKnowledgeSnapshotPath, resolveProductFunnelAggregatePath, resolveVerdictSnapshotPath } from './mcp-server.mjs';

async function reservePort() {
	const server = createServer();
	await new Promise<void>((resolve, reject) => {
		server.once('error', reject);
		server.listen(0, '127.0.0.1', resolve);
	});
	const address = server.address();
	if (!address || typeof address === 'string') throw new Error('Port de test indisponible.');
	await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
	return address.port;
}

describe('MCP HTTP boundary helpers', () => {
	it('rejects malformed and non-canonical affiliate identifiers without throwing', () => {
		expect(parseOfferId('/go/%')).toBeUndefined();
		expect(parseOfferId('/go/../../etc/passwd')).toBeUndefined();
		expect(parseOfferId('/go/valid-offer-1')).toBe('valid-offer-1');
	});

	it('builds attributed follow URLs without changing the canonical contract', () => {
		expect(canonicalFollowUrl('https://compatair.fr/calculateur/?outil=a', 'check_compatibility')).toBe('https://compatair.fr/calculateur/?outil=a&via=mcp&tool=check_compatibility');
		expect(canonicalFollowUrl('https://example.test/private', 'check_compatibility')).toBeUndefined();
	});

	it('rejects a tampered redirect even when it uses HTTPS', () => {
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://evil.example/phishing' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=999' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=17547&m=17547' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=17547&awinmid=999' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/cread.php?awinmid=17547&ued=https%3A%2F%2Funauthorized.example%2F' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/cread.php?awinmid=17547&awinmid=17547&ued=https%3A%2F%2Fwww.manomano.fr%2F' })).toBeUndefined();
	});

	it('accepts an Awin deep link only when its final destination remains on ManoMano', () => {
		const target = 'https://www.awin1.com/cread.php?awinmid=17547&awinaffid=42&ued=https%3A%2F%2Fwww.manomano.fr%2Fp%2F42';
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: target })).toBe(target);
	});

	it('accepts an offer for at most 48 hours with five minutes of future clock tolerance', () => {
		const now = Date.parse('2026-07-15T20:00:00.000Z');
		expect(isFreshOfferSnapshot({ collectedAt: '2026-07-13T20:00:00.000Z' }, now)).toBe(true);
		expect(isFreshOfferSnapshot({ collectedAt: '2026-07-13T19:59:59.999Z' }, now)).toBe(false);
		expect(isFreshOfferSnapshot({ collectedAt: '2026-07-15T20:05:00.000Z' }, now)).toBe(true);
		expect(isFreshOfferSnapshot({ collectedAt: '2026-07-15T20:05:00.001Z' }, now)).toBe(false);
		expect(isFreshOfferSnapshot({ collectedAt: 'invalid' }, now)).toBe(false);
	});

	it('redirects a validated ManoMano offer through the HTTP route', async () => {
		const target = 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547';
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: target, collectedAt: '2026-07-15T19:00:00.000Z' }] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']), now: () => Date.parse('2026-07-15T20:00:00.000Z') });
		const result = await new Promise<{ status: number; headers: Record<string, string> }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {};
			const request = { url: '/go/offer-1', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end() { resolve({ status, headers }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(302);
		expect(result.headers.Location).toBe(target);
		expect(result.headers['Cache-Control']).toBe('no-store');
		expect(result.headers['Referrer-Policy']).toBe('no-referrer');
		expect(result.headers['X-Robots-Tag']).toBe('noindex, nofollow');
	});

	it('answers affiliate HEAD requests without recording a click', async () => {
		const target = 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547';
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: target, collectedAt: '2026-07-15T19:00:00.000Z' }] } as any;
		const recorded: string[] = [];
		const server = createCompatAirServer({
			catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot,
			allowedOrigins: new Set(['https://compatair.fr']), now: () => Date.parse('2026-07-15T20:00:00.000Z'),
			recordAffiliateClick: (offerId) => recorded.push(offerId),
		});
		const request = (method: 'HEAD' | 'GET') => new Promise<{ status: number; headers: Record<string, string> }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {};
			const incoming = { url: '/go/offer-1', method, headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end() { resolve({ status, headers }); }, destroy() {} };
			server.emit('request', incoming, response);
		});
		const head = await request('HEAD');
		expect(head).toMatchObject({ status: 302, headers: { Location: target } });
		expect(recorded).toEqual([]);
		expect((await request('GET')).status).toBe(302);
		expect(recorded).toEqual(['offer-1']);
	});

	it('fails closed when an affiliate offer has expired at runtime', async () => {
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=17547', collectedAt: '2026-07-13T19:59:59.999Z' }] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']), now: () => Date.parse('2026-07-15T20:00:00.000Z') });
		const result = await new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const request = { url: '/go/offer-1', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(404);
		expect(JSON.parse(result.body)).toEqual({ error: 'offer_not_found' });
	});

	it('keeps expired or policy-rejected offers out of MCP results', async () => {
		const now = Date.parse('2026-07-15T20:00:00.000Z');
		const offerSnapshot = { snapshotVersion: 'offers-test', offers: [
			{ id: 'active', productId: 'product-a', merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=17547', collectedAt: '2026-07-15T19:00:00.000Z' },
			{ id: 'expired', productId: 'product-a', merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=2&m=17547', collectedAt: '2026-07-13T19:59:59.999Z' },
			{ id: 'rejected', productId: 'product-a', merchantId: 'manomano-fr', url: 'https://www.awin1.com/cread.php?awinmid=17547&ued=https%3A%2F%2Funauthorized.example%2F', collectedAt: '2026-07-15T19:00:00.000Z' },
		] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']), now: () => now });
		const payload = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'find_offers', arguments: { productId: 'product-a' } } });
		const result = await new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const request = {
				url: '/mcp/legacy', method: 'POST', headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
				async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
			};
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(200);
		expect(JSON.parse(result.body).result.structuredContent.offers.map((offer: { id: string }) => offer.id)).toEqual(['active']);
		expect(JSON.parse(result.body).result.structuredContent.offers[0].url).toBe('https://compatair.fr/go/active');
	});

	it('implements stateless Streamable HTTP GET and Origin rejection exactly at the MCP boundary', async () => {
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', verifiedAt: '2026-07-15', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']) });
		const request = (method: 'GET' | 'POST', origin?: string) => new Promise<{ status: number; headers: Record<string, string>; body: string }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {}; let body = '';
			const incoming = {
				url: '/mcp', method, headers: { ...(origin ? { origin } : {}), accept: 'application/json, text/event-stream', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
				async *[Symbol.asyncIterator]() { yield Buffer.from('{"jsonrpc":"2.0","id":1,"method":"ping"}'); },
			};
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end(value = '') { body += value; resolve({ status, headers, body }); }, destroy() {} };
			server.emit('request', incoming, response);
		});
		const get = await request('GET');
		expect(get.status).toBe(405);
		expect(get.headers.Allow).toBe('POST');
		expect((await request('POST', 'https://attacker.example')).status).toBe(403);
		expect((await request('POST', 'https://compatair.fr')).status).toBe(200);
	});

	it('rate-limits repeated affiliate redirect requests', async () => {
		const target = 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547';
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: target, collectedAt: '2026-07-15T19:00:00.000Z' }] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']), now: () => Date.parse('2026-07-15T20:00:00.000Z') });
		let status = 0;
		for (let requestIndex = 0; requestIndex <= 120; requestIndex++) {
			status = await new Promise<number>((resolve) => {
				const request = { url: '/go/offer-1', method: 'GET', headers: {}, socket: { remoteAddress: '198.51.100.7' } };
				const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end() { resolve(status); }, destroy() {} };
				server.emit('request', request, response);
			});
		}
		expect(status).toBe(429);
	});

	it('persists only a validated aggregate calculator funnel event', async () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-funnel-http-'));
		const productFunnelAggregatePath = join(directory, 'product-funnel.json');
		try {
			const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']), productFunnelAggregatePath });
			const payload = JSON.stringify({ event: 'calculator_funnel_aggregate', schemaVersion: '2.0.0', step: 'recommendation_displayed', family: 'machine' });
			const status = await new Promise<number>((resolve) => {
				const request = {
					url: '/events', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
					async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
				};
				const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
				server.emit('request', request, response);
			});
			expect(status).toBe(204);
			expect(JSON.parse(readFileSync(productFunnelAggregatePath, 'utf8'))).toMatchObject({ schemaVersion: '2.0.0', totalEvents: 1, counterfactual: { displayed: 1, byFamily: { machine: { displayed: 1 } } } });
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('rejects a demand aggregate from a non-authoritative calculation version', async () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-demand-http-'));
		const demandAggregatePath = join(directory, 'demand.json');
		try {
			const catalog = { catalogVersion: 'test', compressors: [], tools: [{ id: 'tool-a', category: 'Test' }] } as any;
			const server = createCompatAirServer({ catalog, verdictSnapshot: { pairs: [], verdictVersion: 'test', calculationVersion: '1.2.0' }, allowedOrigins: new Set(['https://compatair.fr']), demandAggregatePath });
			const payload = JSON.stringify({ event: 'calculator_demand_aggregate', schemaVersion: '1.0.0', calculationVersion: '1.1.0', toolIds: ['tool-a'], mode: 'successive', flowBucket: '200-399', pressureBucket: '6-7.9', sessionBucket: '15-59', compressorSelection: 'none' });
			const status = await new Promise<number>((resolve) => {
				const request = {
					url: '/events', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
					async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
				};
				const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
				server.emit('request', request, response);
			});
			expect(status).toBe(400);
			expect(() => readFileSync(demandAggregatePath, 'utf8')).toThrow();
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('does not retain attacker-controlled MCP tool names in process memory', async () => {
		const recorded: string[] = [];
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']), recordToolCall: (name) => recorded.push(name) });
		const requestTool = (name: string) => new Promise<number>((resolve) => {
			const payload = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name, arguments: { productId: 'product-a' } } });
			const request = {
				url: name === 'find_offers' ? '/mcp/legacy' : '/mcp', method: 'POST', headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
				async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
			};
			const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
			server.emit('request', request, response);
		});
		expect(await requestTool('x'.repeat(1_000))).toBe(200);
		expect(await requestTool('find_offers')).toBe(200);
		expect(recorded).toEqual(['find_offers']);
	});

	it('persists MCP initialization, tool outcome and an explicit canonical follow', async () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-mcp-telemetry-http-'));
		const mcpTelemetryPath = join(directory, 'mcp-telemetry.json');
		try {
			const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']), mcpTelemetryPath, mcpTelemetrySecret: 'test-secret-with-at-least-sixteen-bytes' });
			const call = (request: any) => new Promise<{ status: number; body: string }>((resolve) => {
				let status = 0; let body = '';
				const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
				server.emit('request', request, response);
			});
			const mcp = (payload: unknown) => call({
				url: '/mcp', method: 'POST', headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json', 'user-agent': 'Claude Code/1.2.3' }, socket: { remoteAddress: '192.0.2.42' },
				async *[Symbol.asyncIterator]() { yield Buffer.from(JSON.stringify(payload)); },
			});
			expect((await mcp({ jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'Claude Code', version: '1.2.3' } } })).status).toBe(200);
			const toolCall = await mcp({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'identify_product', arguments: { query: 'absent' } } });
			const result = JSON.parse(toolCall.body).result.structuredContent;
			expect(result.verdict).toBe('insufficient_data');
			expect(result.canonical_follow_url).toContain('via=mcp&tool=identify_product');
			const followPayload = JSON.stringify({ event: 'mcp_canonical_follow', schemaVersion: '2.0.0', tool: 'identify_product' });
			expect((await call({ url: '/events', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json', 'user-agent': 'Claude Code/1.2.3' }, socket: { remoteAddress: '192.0.2.42' }, async *[Symbol.asyncIterator]() { yield Buffer.from(followPayload); } })).status).toBe(204);
			const report = await call({ url: '/data/mcp-usage.json', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } });
			expect(JSON.parse(report.body)).toMatchObject({
				schema_version: '2.1.0',
				totals: { initializations: 1, tool_calls: 1, insufficient_data: 1, canonical_follows: 1, estimated_callers: null },
				tool_outcome_breakdown: [{ traffic_class: 'plausible_session', tool: 'identify_product', outcome: 'insufficient_data', error_code: null, calls: 1 }],
				tools: [{ name: 'identify_product', calls: 1, insufficient_data: 1, canonical_issued: 1, canonical_follows: 1 }],
			});
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('serves the versioned compatibility API with CORS and source evidence', async () => {
		const catalog = {
			catalogVersion: 'catalog-test', verifiedAt: '2026-07-14',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', mpn: 'A-1', distributorSkus: [{ distributorId: 'merchant-a', sku: 'SKU 42', evidenceIds: ['source-c'] }], maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }], confidence: 'A', evidence: [{ id: 'source-c', sourceLabel: 'Source C', sourceUrl: 'https://example.com/c', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' }] }],
			tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'Outil B1', gtin: '12345670', distributorSkus: [], demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 100 }, confidence: 'A', evidence: [{ id: 'source-t', sourceLabel: 'Source T', sourceUrl: 'https://example.com/t', sourceType: 'measured', retrievedAt: '2026-07-14', confidence: 'A' }] }],
		} as any;
		const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: '1.2.0', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'continuous', confidence: 'high', requiredFadLpm: 125, availableFadLpm: 200 }] };
		const server = createCompatAirServer({ catalog, verdictSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
		const result = await new Promise<{ status: number; headers: Record<string, string>; body: string }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {}; let body = '';
			const request = { url: '/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end(value = '') { body += value; resolve({ status, headers, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(200);
		expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
		expect(JSON.parse(result.body)).toMatchObject({ schemaVersion: '2.0.0', verdict_scope: 'air_supply', verdictVersion: 'verdict-test', calculationVersion: '1.2.0', compressor: { identifiers: { mpn: 'A-1', normalized_mpn: 'A1', distributor_skus: [{ distributor_id: 'merchant-a', sku: 'SKU 42', normalized_sku: 'SKU 42' }] } }, tool: { identifiers: { gtin: '12345670', distributor_skus: [] } }, compatibility: { schema_version: '2.0.0', scope: 'air_supply', verdict: 'compatible', engine_verdict: 'continuous' }, overall_system_verdict: { scope: 'complete_air_system', verdict: 'insufficient_data' }, detailsUrl: 'https://compatair.fr/calculateur/?outil=tool-a&compresseur=compressor-a', proofUrl: 'https://compatair.fr/graphe-preuve/?compresseur=compressor-a&outil=tool-a' });
		expect(JSON.parse(result.body).sources).toEqual(expect.arrayContaining([expect.objectContaining({ id: 'source-c', sourceRole: 'primary' }), expect.objectContaining({ id: 'source-t', sourceRole: 'independent_corroboration' })]));
	});

	it('attributes only the closed official widget hint to the widget channel', async () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-widget-acquisition-'));
		const acquisitionAggregatePath = join(directory, 'acquisition.json');
		try {
			const catalog = {
				catalogVersion: 'catalog-test', verifiedAt: '2026-07-15',
				compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }], confidence: 'A', evidence: [] }],
				tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'B1', demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 100 }, confidence: 'A', evidence: [] }],
			} as any;
			const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: '1.2.0', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'continuous', confidence: 'high' }] };
			const server = createCompatAirServer({ catalog, verdictSnapshot, allowedOrigins: new Set(['https://compatair.fr']), acquisitionAggregatePath });
			const request = (channel: string) => new Promise<number>((resolve) => {
				const incoming = { url: `/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a&channel=${channel}`, method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
				const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
				server.emit('request', incoming, response);
			});
			expect(await request('attacker')).toBe(400);
			expect(await request('widget')).toBe(200);
			expect(JSON.parse(readFileSync(acquisitionAggregatePath, 'utf8')).buckets).toContainEqual(expect.objectContaining({ channel: 'widget', template: 'compatibility', action: 'decision_request', count: 1 }));
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('verifies a receipt without storing or dereferencing its URLs', async () => {
		const catalog = {
			catalogVersion: 'catalog-test', verifiedAt: '2026-07-14',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }], confidence: 'A', evidence: [] }],
			tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'B1', demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 100 }, confidence: 'A', evidence: [] }],
		} as any;
		const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: '1.2.0', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'continuous', confidence: 'high' }] };
		const server = createCompatAirServer({ catalog, verdictSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
		const call = (request: any) => new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		const decision = await call({ url: '/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } });
		const receipt = JSON.parse(decision.body).compatibility_receipt;
		const verified = await call({ url: '/api/v1/compatibility/receipts/verify', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' }, async *[Symbol.asyncIterator]() { yield Buffer.from(JSON.stringify(receipt)); } });
		expect(verified.status).toBe(200);
		expect(JSON.parse(verified.body)).toMatchObject({ valid: true, receipt_id: receipt.receipt_id });
		receipt.catalog_version = 'tampered';
		const rejected = await call({ url: '/api/v1/compatibility/receipts/verify', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' }, async *[Symbol.asyncIterator]() { yield Buffer.from(JSON.stringify(receipt)); } });
		expect(rejected.status).toBe(422);
		expect(JSON.parse(rejected.body)).toEqual({ valid: false, error: 'integrity_mismatch' });
	});

	it('answers a real UCP decision question through the hardened read-only boundary', async () => {
		const catalog = {
			catalogVersion: 'catalog-test', verifiedAt: '2026-07-15',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', tankLiters: 100, maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 300 }], confidence: 'A', evidence: [{ id: 'source-c', sourceLabel: 'Source C', sourceUrl: 'https://manufacturer.example/c', retrievedAt: '2026-07-15', confidence: 'A' }] }],
			tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'Tool B1', category: 'Test', demandModel: 'fixed-flow', workingPressureBar: { min: 6, typical: 6, max: 6 }, airflowLpm: { min: 100, typical: 100, max: 100 }, connectorSize: '1/4 inch', recommendedHose: { innerDiameterMm: 10, maximumLengthMeters: 5 }, filtrationRequirement: 'dry air', lubricationRequirement: 'oil', confidence: 'A', evidence: [{ id: 'source-t', sourceLabel: 'Source T', sourceUrl: 'https://manufacturer.example/t', retrievedAt: '2026-07-15', confidence: 'A' }] }],
		} as any;
		const platformProfile = { ucp: { version: '2026-04-08', capabilities: { 'fr.compatair.air.compatibility': [{ version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/', schema: 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json' }] } } };
		const server = createCompatAirServer({ catalog, allowedOrigins: new Set(['https://compatair.fr']), fetchUcpProfile: async () => platformProfile });
		const payload = JSON.stringify({ ucp: { version: '2026-04-08' }, intent: 'will_it_work', configuration: { compressor: { id: 'compressor-a' }, tools: [{ id: 'tool-a' }], mode: 'successive' }, requested_outputs: ['compatibility', 'attribution', 'evidence'] });
		const result = await new Promise<{ status: number; headers: Record<string, string>; body: string }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {}; let body = '';
			const request = {
				url: '/api/ucp/v1/compatibility/evaluate', method: 'POST',
				headers: { 'content-type': 'application/json', 'ucp-agent': 'profile="https://agent.example/.well-known/ucp"' }, socket: { remoteAddress: '127.0.0.1' },
				async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
			};
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end(value = '') { body += value; resolve({ status, headers, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(200);
		expect(result.headers['Cache-Control']).toBe('no-store');
		expect(JSON.parse(result.body)).toMatchObject({
			ucp: { version: '2026-04-08', capabilities: { 'fr.compatair.air.compatibility': [{ version: '2026-07-15' }] } },
			capability: 'fr.compatair.air.compatibility', intent: 'will_it_work',
			canonical_url: 'https://compatair.fr/calculateur/?outil=tool-a&compresseur=compressor-a',
			security: { access: 'anonymous_read_only', accepts_pii: false, accepts_payment: false, mutates_commerce_state: false },
			attribution: { provider: 'CompatAir', canonical_url: 'https://compatair.fr/calculateur/?outil=tool-a&compresseur=compressor-a' },
		});
		expect(JSON.parse(result.body).source_urls).toHaveLength(2);
	});

	it('rejects UCP checkout fields and unknown product locators without fetching product pages', async () => {
		const platformProfile = { ucp: { version: '2026-04-08', capabilities: { 'fr.compatair.air.compatibility': [{ version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/', schema: 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json' }] } } };
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']), fetchUcpProfile: async () => platformProfile });
		const request = (payload: unknown) => new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const incoming = { url: '/api/ucp/v1/compatibility/evaluate', method: 'POST', headers: { 'content-type': 'application/json', 'ucp-agent': 'profile="https://agent.example/profile"' }, socket: { remoteAddress: '127.0.0.1' }, async *[Symbol.asyncIterator]() { yield Buffer.from(JSON.stringify(payload)); } };
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', incoming, response);
		});
		const stateful = await request({ ucp: { version: '2026-04-08' }, intent: 'will_it_work', configuration: { compressor: { id: 'a' }, tools: [{ id: 'b' }] }, checkout: { payment: 'never' } });
		expect(stateful.status).toBe(400);
		expect(JSON.parse(stateful.body).messages[0].code).toBe('invalid_request');
		const unresolved = await request({ ucp: { version: '2026-04-08' }, intent: 'will_it_work', configuration: { compressor: { url: 'https://merchant.example/a' }, tools: [{ id: 'b' }] } });
		expect(unresolved.status).toBe(404);
		expect(JSON.parse(unresolved.body).messages[0].code).toBe('product_unresolved');
	});

	it('migrates an exact historical compatibility slug and rejects unknown legacy URLs', async () => {
		const catalog = {
			catalogVersion: 'catalog-test',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a' }],
			tools: [{ id: 'tool-a', slug: 'cle-a-chocs-tool-a' }],
		} as any;
		const server = createCompatAirServer({ catalog, allowedOrigins: new Set(['https://compatair.fr']) });
		const request = (url: string) => new Promise<{ status: number; headers: Record<string, string>; body: string }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {}; let body = '';
			const incoming = { url, method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end(value = '') { body += value; resolve({ status, headers, body }); }, destroy() {} };
			server.emit('request', incoming, response);
		});
		const migrated = await request('/compatibilite/compressor-a--cle-a-chocs-tool-a/');
		expect(migrated.status).toBe(301);
		expect(migrated.headers.Location).toBe('/calculateur/#outil=tool-a&compresseur=compressor-a');
		const migratedWithDiscardedTracking = await request('/compatibilite/compressor-a--cle-a-chocs-tool-a/?utm_source=cache');
		expect(migratedWithDiscardedTracking.headers.Location).toBe('/calculateur/#outil=tool-a&compresseur=compressor-a');
		const removed = await request('/compatibilite/compressor-a--outil-inconnu/');
		expect(removed.status).toBe(410);
		expect(JSON.parse(removed.body)).toMatchObject({ error: 'compatibility_page_removed', replacement: '/calculateur/' });
	});

	it('routes an insufficient-data API result to a prefilled calculator instead of a missing detail page', async () => {
		const catalog = {
			catalogVersion: 'catalog-test', verifiedAt: '2026-07-14',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', evidence: [] }],
			tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'Outil B1', demandModel: 'fixed-flow', evidence: [] }],
		} as any;
		const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: '1.2.0', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data' }] };
		const server = createCompatAirServer({ catalog, verdictSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
		const result = await new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const request = { url: '/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(200);
		expect(JSON.parse(result.body)).toMatchObject({ compatibility: { verdict: 'insufficient_data' }, detailsUrl: 'https://compatair.fr/calculateur/?outil=tool-a&compresseur=compressor-a' });
	});

	it('lets the production reverse proxy own API security and CORS headers', async () => {
		const server = createCompatAirServer({
			catalog: { catalogVersion: 'test', compressors: [], tools: [] },
			allowedOrigins: new Set(['https://compatair.fr']),
			proxyManagesApiHeaders: true,
		});
		const headers = await new Promise<Record<string, string>>((resolve) => {
			const request = { url: '/api/v1/compatibility?compressorId=a&toolId=b', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(_status: number, values: Record<string, string>) { resolve(values); }, end() {}, destroy() {} };
			server.emit('request', request, response);
		});
		expect(headers).not.toHaveProperty('Access-Control-Allow-Origin');
		expect(headers).not.toHaveProperty('Cross-Origin-Resource-Policy');
		expect(headers).not.toHaveProperty('X-Content-Type-Options');
		expect(headers).toMatchObject({
			'Access-Control-Allow-Methods': 'GET, OPTIONS',
			'Access-Control-Allow-Headers': 'Accept',
			Vary: 'Origin',
		});
	});

	it('fails closed when a fixed-flow verdict is absent from the authoritative snapshot', async () => {
		const catalog = { catalogVersion: 'test', compressors: [{ id: 'compressor-a' }], tools: [{ id: 'tool-a', demandModel: 'fixed-flow' }] } as any;
		const server = createCompatAirServer({ catalog, verdictSnapshot: { verdictVersion: 'empty', pairs: [] }, allowedOrigins: new Set(['https://compatair.fr']) });
		const result = await new Promise<{ status: number; body: string }>((resolve) => {
			let status = 0; let body = '';
			const request = { url: '/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number) { status = value; }, end(value = '') { body += value; resolve({ status, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(503);
		expect(JSON.parse(result.body)).toEqual({ error: 'verdict_snapshot_unavailable' });
	});

	it('rejects duplicate or unknown compatibility API arguments', async () => {
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, allowedOrigins: new Set(['https://compatair.fr']) });
		const status = await new Promise<number>((resolve) => {
			const request = { url: '/api/v1/compatibility?compressorId=a&compressorId=b&toolId=c', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
			server.emit('request', request, response);
		});
		expect(status).toBe(400);
	});

	it('uses only the proxy-appended address when the peer is loopback', () => {
		const request = { socket: { remoteAddress: '127.0.0.1' }, headers: { 'x-forwarded-for': '198.51.100.7, 203.0.113.9' } } as any;
		expect(clientAddress(request)).toBe('203.0.113.9');
	});

	it('ignores forwarded addresses from a non-loopback peer', () => {
		const request = { socket: { remoteAddress: '203.0.113.20' }, headers: { 'x-forwarded-for': '198.51.100.7' } } as any;
		expect(clientAddress(request)).toBe('203.0.113.20');
	});

	it('recognizes the entry module through the production release symlink', () => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-main-'));
		try {
			const releaseEntry = join(directory, 'release-server.mjs');
			const currentEntry = join(directory, 'current-server.mjs');
			writeFileSync(releaseEntry, '');
			symlinkSync(releaseEntry, currentEntry);
			expect(isMainModule(currentEntry, pathToFileURL(releaseEntry).href)).toBe(true);
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('resolves verdicts next to the configured production catalog', () => {
		expect(resolveVerdictSnapshotPath('/var/www/html/compatair/current/data/catalog.json')).toBe('/var/www/html/compatair/current/data/verdicts.json');
		expect(resolveVerdictSnapshotPath('/catalog.json', '/srv/verdicts.json')).toBe('/srv/verdicts.json');
	});

	it('resolves the bounded knowledge index next to the configured catalog', () => {
		expect(resolveKnowledgeSnapshotPath('/var/www/html/compatair/current/data/catalog.json')).toBe('/var/www/html/compatair/current/data/agent-knowledge.json');
		expect(resolveKnowledgeSnapshotPath('/catalog.json', '/srv/search.json')).toBe('/srv/search.json');
	});

	it('keeps funnel aggregation enabled with an older production unit', () => {
		expect(resolveProductFunnelAggregatePath('/var/lib/compatair/demand-aggregates.json')).toBe('/var/lib/compatair/product-funnel-aggregates.json');
		expect(resolveProductFunnelAggregatePath(undefined)).toBeUndefined();
		expect(resolveProductFunnelAggregatePath('/var/lib/compatair/demand-aggregates.json', '/srv/custom-funnel.json')).toBe('/srv/custom-funnel.json');
	});

	it('starts from the production release layout without a legacy verdict environment variable', async (context) => {
		const directory = mkdtempSync(join(tmpdir(), 'compatair-release-'));
		const release = join(directory, 'releases', 'a'.repeat(40));
		const current = join(directory, 'current');
		mkdirSync(join(release, '_server'), { recursive: true });
		mkdirSync(join(release, 'data'), { recursive: true });
		for (const file of readdirSync(join(process.cwd(), 'server')).filter((name) => name.endsWith('.mjs'))) copyFileSync(join(process.cwd(), 'server', file), join(release, '_server', file));
		writeFileSync(join(release, 'data', 'catalog.json'), JSON.stringify({ catalogVersion: 'catalog-test', compressors: [], tools: [] }));
		writeFileSync(join(release, 'data', 'verdicts.json'), JSON.stringify({ catalogVersion: 'catalog-test', verdictVersion: 'verdict-test', calculationVersion: '1.2.0', pairs: [] }));
		writeFileSync(join(release, 'data', 'offers.json'), JSON.stringify({ offers: [], snapshotVersion: 'empty' }));
		symlinkSync(release, current);
		let port: number;
		try {
			port = await reservePort();
		} catch (error) {
			rmSync(directory, { recursive: true, force: true });
			if (error && typeof error === 'object' && 'code' in error && error.code === 'EPERM') {
				context.skip();
				return;
			}
			throw error;
		}
		const child = spawn(process.execPath, [join(current, '_server', 'mcp-server.mjs')], {
			env: {
				...process.env,
				MCP_HOST: '127.0.0.1',
				MCP_PORT: String(port),
				COMPAT_AIR_CATALOG: join(current, 'data', 'catalog.json'),
				COMPAT_AIR_OFFERS: join(current, 'data', 'offers.json'),
				COMPAT_AIR_VERDICTS: '',
				COMPAT_AIR_DEMAND_AGGREGATES: '',
				COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES: '',
			},
			stdio: ['ignore', 'ignore', 'pipe'],
		});
		let stderr = '';
		child.stderr.on('data', (chunk) => { stderr += chunk.toString(); });
		try {
			let health;
			for (let attempt = 0; attempt < 50; attempt++) {
				if (child.exitCode !== null) throw new Error(`Le serveur MCP a quitté prématurément : ${stderr}`);
				try {
					const response = await fetch(`http://127.0.0.1:${port}/health`);
					if (response.ok) { health = await response.json(); break; }
				} catch {}
				await new Promise((resolve) => setTimeout(resolve, 50));
			}
			expect(health).toMatchObject({ status: 'ok', catalogVersion: 'catalog-test', verdictVersion: 'verdict-test' });
		} finally {
			if (child.exitCode === null) {
				const exited = new Promise<void>((resolve) => child.once('exit', () => resolve()));
				child.kill('SIGTERM');
				await exited;
			}
			rmSync(directory, { recursive: true, force: true });
		}
	});
});
