import { EventEmitter } from 'node:events';
import { describe, expect, it } from 'vitest';
import { sourceUrl, sourceInventory, requestSource, followSource, checkSource, healthSummary } from './source-link-health.mjs';

describe('source link health', () => {
	it('versions a deduplicated inventory independently of ordering, including provenance changes', () => {
		const a = { url: 'https://example.com/source#page=2', reference: { evidenceId: 'a', retrievedAt: '2026-09-25' } };
		const b = { url: 'https://example.com/other', reference: { evidenceId: 'b' } };
		expect(sourceInventory([a, b, a])).toEqual(sourceInventory([b, a]));
		expect(sourceInventory([a]).version).not.toBe(sourceInventory([{ ...a, reference: { ...a.reference, retrievedAt: '2026-09-26' } }]).version);
	});
	it.each(['file:///etc/passwd', 'http://example.com/', 'https://user:secret@example.com/', 'https://127.0.0.1/', 'https://[::1]/', 'https://example.com:8443/', 'https://metadata.internal/', 'invalid'])('refuses unsafe URL %s', (url) => {
		expect(() => sourceUrl(url)).toThrow('unsafe_url');
	});
	it('rejects a mixed public/private DNS answer without issuing a request', async () => {
		let sent = false;
		await expect(requestSource('https://example.com/', 'HEAD', { resolveHost: async () => [{ address: '1.1.1.1', family: 4 }, { address: '169.254.169.254', family: 4 }], send: () => { sent = true; } })).rejects.toThrow('unsafe_address');
		expect(sent).toBe(false);
	});
	it('pins the public address while keeping TLS identity and discards the response body', async () => {
		let options;
		let discarded = false;
		const result = await requestSource('https://example.com/source.pdf', 'GET', {
			resolveHost: async () => [{ address: '1.1.1.1', family: 4 }],
			send: (input, callback) => {
				options = input;
				const req = new EventEmitter();
				req.end = () => queueMicrotask(() => callback({ statusCode: 200, headers: {}, destroy: () => { discarded = true; } }));
				return req;
			},
		});
		expect(options).toMatchObject({ hostname: '1.1.1.1', servername: 'example.com', method: 'GET', path: '/source.pdf', headers: { Host: 'example.com' } });
		expect(options.rejectUnauthorized).not.toBe(false);
		expect(result.status).toBe(200);
		expect(discarded).toBe(true);
	});
	it('revalidates redirects and limits loops', async () => {
		let calls = 0;
		await expect(followSource('https://example.com/', 'HEAD', async () => { calls += 1; return { status: 302, location: 'http://169.254.169.254/latest/' }; })).rejects.toThrow('unsafe_url');
		expect(calls).toBe(1);
		await expect(followSource('https://example.com/', 'HEAD', async () => ({ status: 301, location: '/' }))).rejects.toThrow('redirect_loop');
	});
	it('falls back to GET when HEAD is unsupported or misleading', async () => {
		for (const status of [404, 405, 410, 501]) {
			const methods = [];
			const result = await checkSource('https://example.com/', { probe: async (_, method) => { methods.push(method); return { status: method === 'HEAD' ? status : 200 }; } });
			expect(result.state).toBe('reachable');
			expect(methods).toEqual(['HEAD', 'GET']);
		}
	});
	it('confirms a dead link twice with GET and preserves a recovery', async () => {
		const methods = [];
		const result = await checkSource('https://example.com/', { probe: async (_, method) => { methods.push(method); return { status: 404 }; }, wait: async () => {} });
		expect(result.state).toBe('broken');
		expect(methods).toEqual(['HEAD', 'GET', 'GET']);
		let count = 0;
		expect((await checkSource('https://example.com/', { probe: async () => ({ status: ++count < 3 ? 404 : 200 }), wait: async () => {} })).state).toBe('reachable');
	});
	it('does not classify access denial, throttling or a network failure as a dead source', async () => {
		for (const status of [401, 403, 429]) expect((await checkSource('https://example.com/', { probe: async () => ({ status }) })).state).toBe('unverified');
		expect((await checkSource('https://example.com/', { probe: async () => { throw new Error('ETIMEDOUT'); } })).state).toBe('unverified');
		expect((await checkSource('https://example.com/', { probe: async () => { throw new Error('unsafe_address'); } })).state).toBe('unsafe');
	});
	it('keeps conflicting error responses inconclusive', async () => {
		for (const statuses of [[500, 404], [404, 404, 500]]) {
			let index = 0;
			expect((await checkSource('https://example.com/', { probe: async () => ({ status: statuses[index++] }), wait: async () => {} })).state).toBe('unverified');
		}
	});
	it('counts confirmed anomalies separately and fails an entirely inconclusive audit', () => {
		expect(healthSummary([{ state: 'reachable' }, { state: 'unverified' }])).toMatchObject({ anomalies: 0, auditUnavailable: false, unverified: 1 });
		expect(healthSummary([{ state: 'unverified' }])).toMatchObject({ anomalies: 0, auditUnavailable: true });
		expect(healthSummary([{ state: 'broken' }, { state: 'unsafe' }]).anomalies).toBe(2);
		expect(healthSummary([]).auditUnavailable).toBe(true);
	});
});
