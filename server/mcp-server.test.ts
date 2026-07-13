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
