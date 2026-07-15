import { describe, expect, it } from 'vitest';
import { spawn } from 'node:child_process';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { allowedOfferRedirect, clientAddress, createCompatAirServer, isMainModule, parseOfferId, resolveProductFunnelAggregatePath, resolveVerdictSnapshotPath } from './mcp-server.mjs';

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

	it('rejects a tampered redirect even when it uses HTTPS', () => {
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://evil.example/phishing' })).toBeUndefined();
		expect(allowedOfferRedirect({ merchantId: 'manomano-fr', url: 'https://www.awin1.com/pclick.php?p=1&m=999' })).toBeUndefined();
	});

	it('redirects a validated ManoMano offer through the HTTP route', async () => {
		const target = 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547';
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: target }] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
		const result = await new Promise<{ status: number; headers: Record<string, string> }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {};
			const request = { url: '/go/offer-1', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end() { resolve({ status, headers }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(302);
		expect(result.headers.Location).toBe(target);
		expect(result.headers['Referrer-Policy']).toBe('no-referrer');
	});

	it('rate-limits repeated affiliate redirect requests', async () => {
		const target = 'https://www.awin1.com/pclick.php?p=1&a=2&m=17547';
		const offerSnapshot = { offers: [{ id: 'offer-1', merchantId: 'manomano-fr', url: target }] } as any;
		const server = createCompatAirServer({ catalog: { catalogVersion: 'test', compressors: [], tools: [] }, offerSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
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
			const payload = JSON.stringify({ event: 'calculator_funnel_aggregate', schemaVersion: '1.0.0', step: 'completed' });
			const status = await new Promise<number>((resolve) => {
				const request = {
					url: '/events', method: 'POST', headers: { origin: 'https://compatair.fr', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' },
					async *[Symbol.asyncIterator]() { yield Buffer.from(payload); },
				};
				const response = { setTimeout() {}, writeHead(value: number) { resolve(value); }, end() {}, destroy() {} };
				server.emit('request', request, response);
			});
			expect(status).toBe(204);
			expect(JSON.parse(readFileSync(productFunnelAggregatePath, 'utf8'))).toMatchObject({ totalEvents: 1, calculator: { completed: 1 } });
		} finally { rmSync(directory, { recursive: true, force: true }); }
	});

	it('serves the versioned compatibility API with CORS and source evidence', async () => {
		const catalog = {
			catalogVersion: 'catalog-test', verifiedAt: '2026-07-14',
			compressors: [{ id: 'compressor-a', slug: 'compressor-a', brand: 'A', model: 'A1', maxPressureBar: 10, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }], confidence: 'A', evidence: [{ id: 'source-c', sourceLabel: 'Source C', sourceUrl: 'https://example.com/c', retrievedAt: '2026-07-14', confidence: 'A' }] }],
			tools: [{ id: 'tool-a', slug: 'tool-a', brand: 'B', model: 'B1', label: 'Outil B1', demandModel: 'fixed-flow', workingPressureBar: { typical: 6 }, airflowLpm: { typical: 100 }, confidence: 'A', evidence: [{ id: 'source-t', sourceLabel: 'Source T', sourceUrl: 'https://example.com/t', retrievedAt: '2026-07-14', confidence: 'A' }] }],
		} as any;
		const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: 'calculation-test', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'continuous', confidence: 'high', requiredFadLpm: 125, availableFadLpm: 200 }] };
		const server = createCompatAirServer({ catalog, verdictSnapshot, allowedOrigins: new Set(['https://compatair.fr']) });
		const result = await new Promise<{ status: number; headers: Record<string, string>; body: string }>((resolve) => {
			let status = 0; let headers: Record<string, string> = {}; let body = '';
			const request = { url: '/api/v1/compatibility?compressorId=compressor-a&toolId=tool-a', method: 'GET', headers: {}, socket: { remoteAddress: '127.0.0.1' } };
			const response = { setTimeout() {}, writeHead(value: number, values: Record<string, string>) { status = value; headers = values; }, end(value = '') { body += value; resolve({ status, headers, body }); }, destroy() {} };
			server.emit('request', request, response);
		});
		expect(result.status).toBe(200);
		expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
		expect(JSON.parse(result.body)).toMatchObject({ schemaVersion: '1.0.0', verdictVersion: 'verdict-test', calculationVersion: 'calculation-test', compatibility: { verdict: 'continuous' }, detailsUrl: 'https://compatair.fr/calculateur/?outil=tool-a&compresseur=compressor-a', proofUrl: 'https://compatair.fr/graphe-preuve/?compresseur=compressor-a&outil=tool-a' });
		expect(JSON.parse(result.body).sources).toHaveLength(2);
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
		expect(migrated.headers.Location).toBe('/calculateur/?outil=tool-a&compresseur=compressor-a');
		const migratedWithDiscardedTracking = await request('/compatibilite/compressor-a--cle-a-chocs-tool-a/?utm_source=cache');
		expect(migratedWithDiscardedTracking.headers.Location).toBe('/calculateur/?outil=tool-a&compresseur=compressor-a');
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
		const verdictSnapshot = { verdictVersion: 'verdict-test', calculationVersion: 'calculation-test', pairs: [{ id: 'compressor-a--tool-a', compressorId: 'compressor-a', toolId: 'tool-a', verdict: 'insufficient_data', confidence: 'high', limitingFactor: 'data' }] };
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
		for (const file of ['mcp-server.mjs', 'mcp-core.mjs', 'demand-aggregates.mjs', 'product-funnel-aggregates.mjs']) copyFileSync(join(process.cwd(), 'server', file), join(release, '_server', file));
		writeFileSync(join(release, 'data', 'catalog.json'), JSON.stringify({ catalogVersion: 'catalog-test', compressors: [], tools: [] }));
		writeFileSync(join(release, 'data', 'verdicts.json'), JSON.stringify({ catalogVersion: 'catalog-test', verdictVersion: 'verdict-test', calculationVersion: 'calculation-test', pairs: [] }));
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
			child.kill('SIGTERM');
			await new Promise<void>((resolve) => child.once('exit', () => resolve()));
			rmSync(directory, { recursive: true, force: true });
		}
	});
});
