import { describe, expect, it } from 'vitest';
import { mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { clientAddress, isMainModule, parseOfferId } from './mcp-server.mjs';

describe('MCP HTTP boundary helpers', () => {
	it('rejects malformed and non-canonical affiliate identifiers without throwing', () => {
		expect(parseOfferId('/go/%')).toBeUndefined();
		expect(parseOfferId('/go/../../etc/passwd')).toBeUndefined();
		expect(parseOfferId('/go/valid-offer-1')).toBe('valid-offer-1');
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
