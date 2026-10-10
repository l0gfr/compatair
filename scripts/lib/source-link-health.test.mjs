import { EventEmitter } from 'node:events';
import { describe, expect, it } from 'vitest';
import { sourceUrl, sourceInventory, sourceCheckSelection, requestSource, followSource, checkSource, annotateKnownSourceFailure, healthSummary, sourceHealthSummaryMarkdown } from './source-link-health.mjs';

describe('source link health', () => {
	it('limits diagnostics to one exact inventory URL and labels partial success', () => {
		const inventory = sourceInventory([{ url: 'https://example.com/source', reference: { evidenceId: 'a' } }]);
		expect(sourceCheckSelection(inventory).scope).toEqual({ kind: 'inventory' });
		const selected = sourceCheckSelection(inventory, ['--url', 'https://example.com/source#page=2']);
		expect(selected.sources).toHaveLength(1);
		expect(selected.scope).toEqual({ kind: 'single-url', url: 'https://example.com/source' });
		for (const args of [['--host', 'example.com'], ['--url'], ['--url', 'https://example.com/other'], ['--url', 'https://example.com/source?different=1'], ['--url', 'http://localhost/'], ['--url', 'https://example.com/source', '--url', 'https://example.com/source']]) expect(() => sourceCheckSelection(inventory, args)).toThrow();
		const results = [{ url: selected.scope.url, state: 'reachable', status: 200, references: [] }];
		expect(sourceHealthSummaryMarkdown({ checkedAt: new Date().toISOString(), scope: selected.scope, summary: healthSummary(results), results })).toContain('Un succès ne valide pas l’inventaire complet');
	});
	it('publishes bounded actionable evidence without allowing Markdown injection', () => {
		const results = Array.from({ length: 40 }, (_, index) => ({ url: `https://example.com/${index}`, state: 'unavailable', status: 502, references: [{ productId: 'sample', evidenceId: '```<script>' }] }));
		const summary = sourceHealthSummaryMarkdown({ checkedAt: '2026-09-28T00:00:00Z', summary: healthSummary(results), results });
		expect(summary).toContain('30 résultats affichés sur 40');
		expect(summary).toContain('"status": 502');
		expect(summary).toContain('"productId": "sample"');
		expect(summary).not.toContain('<script>');
		expect(summary.match(/```/g)).toHaveLength(2);
	});
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
		for (const status of [400, 401, 403, 405, 429, 451, 468]) expect((await checkSource('https://example.com/', { probe: async () => ({ status }) })).state).toBe('unverified');
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
	it('keeps a recently reviewed historical 404 visible while alerting only on a change', () => {
		const url = 'https://example.com/archived.pdf';
		const observation = { sourceUrl: url, observedAt: '2026-10-02', httpStatus: 404, method: 'GET', archive: { retrievedAt: '2026-09-30', sha256: 'a'.repeat(64), bytes: 4383400, retainedForTraceability: true, publicDownload: false } };
		const result = { url, finalUrl: url, state: 'broken', status: 404, references: [] };
		const now = new Date('2026-10-03T00:00:00Z');
		const acknowledged = annotateKnownSourceFailure(result, [observation], now);
		expect(acknowledged).toMatchObject({ state: 'broken', status: 404, acknowledged: true, archiveSha256: observation.archive.sha256 });
		expect(healthSummary([acknowledged])).toMatchObject({ broken: 1, acknowledged: 1, anomalies: 0 });
		for (const changed of [{ state: 'broken', status: 410 }, { state: 'unavailable', status: 503 }, { state: 'unsafe', reason: 'unsafe_address' }, { finalUrl: `${url}?new`, state: 'broken', status: 404 }]) {
			const checked = annotateKnownSourceFailure({ ...result, ...changed }, [observation], now);
			expect(checked.acknowledged).toBeUndefined();
			expect(healthSummary([checked]).anomalies).toBe(1);
		}
		const restored = annotateKnownSourceFailure({ ...result, state: 'reachable', status: 200 }, [observation], now);
		expect(healthSummary([restored])).toMatchObject({ reachable: 1, recovered: 1, anomalies: 1 });
		expect(healthSummary([annotateKnownSourceFailure({ ...result, finalUrl: 'https://example.com/moved.pdf', state: 'reachable', status: 200 }, [observation], new Date('2026-11-02'))])).toMatchObject({ recovered: 1, anomalies: 1 });
		for (const time of ['2026-10-01', '2026-11-02']) expect(annotateKnownSourceFailure(result, [observation], new Date(time)).acknowledged).toBeUndefined();
		for (const archive of [{ sha256: 'wrong' }, { bytes: 0 }, { retainedForTraceability: false }, { publicDownload: true }, { retrievedAt: '2026-10-04' }]) expect(annotateKnownSourceFailure(result, [{ ...observation, archive: { ...observation.archive, ...archive } }], now).acknowledged).toBeUndefined();
		for (const invalidDate of ['2026-02-30', '2026-9-30', '2026-09-30T00:00:00Z', 'invalid']) {
			expect(annotateKnownSourceFailure(result, [{ ...observation, observedAt: invalidDate }], now).acknowledged).toBeUndefined();
			expect(annotateKnownSourceFailure(result, [{ ...observation, archive: { ...observation.archive, retrievedAt: invalidDate } }], now).acknowledged).toBeUndefined();
		}
	});
	it('accepts a documented exact recovery and raises every new failure or changed document', () => {
		const url = 'https://example.com/archived.pdf';
		const observation = { sourceUrl: url, observedAt: '2026-10-02', httpStatus: 404, method: 'GET', archive: { retrievedAt: '2026-09-30', sha256: 'a'.repeat(64), bytes: 100, retainedForTraceability: true, publicDownload: false }, recovery: { observedAt: '2026-10-10', httpStatus: 200, method: 'GET', sha256: 'a'.repeat(64), bytes: 100 } };
		const reachable = { url, finalUrl: url, state: 'reachable', status: 200 };
		const now = new Date('2026-10-10T08:00:00Z');
		const checked = annotateKnownSourceFailure(reachable, [observation], now);
		expect(checked.reviewedRecovery).toBe(true);
		expect(healthSummary([checked])).toMatchObject({ reviewedRecoveries: 1, recovered: 0, anomalies: 0 });
		for (const change of [{ state: 'broken', status: 404 }, { state: 'broken', status: 410 }, { state: 'unsafe', reason: 'unsafe_address' }, { state: 'unavailable', status: 503 }, { finalUrl: `${url}?changed=1` }, { status: 204 }]) {
			const result = annotateKnownSourceFailure({ ...reachable, ...change }, [observation], now);
			expect(result.acknowledged).toBeUndefined();
			expect(result.reviewedRecovery).toBeUndefined();
			expect(healthSummary([result]).anomalies).toBe(1);
		}
		for (const invalid of [{ observedAt: '2026-10-11' }, { observedAt: '2026-02-30' }, { observedAt: '2026-10-01' }, { sha256: 'b'.repeat(64) }, { bytes: 101 }, { method: 'HEAD' }, { httpStatus: 201 }]) {
			const result = annotateKnownSourceFailure(reachable, [{ ...observation, recovery: { ...observation.recovery, ...invalid } }], now);
			expect(healthSummary([result]).anomalies).toBe(1);
		}
	});
});
