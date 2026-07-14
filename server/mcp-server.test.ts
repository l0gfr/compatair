import { describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { allowedOfferRedirect, clientAddress, createCompatAirServer, isMainModule, parseOfferId } from './mcp-server.mjs';

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
		expect(JSON.parse(result.body)).toMatchObject({ schemaVersion: '1.0.0', verdictVersion: 'verdict-test', calculationVersion: 'calculation-test', compatibility: { verdict: 'continuous' } });
		expect(JSON.parse(result.body).sources).toHaveLength(2);
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
});
