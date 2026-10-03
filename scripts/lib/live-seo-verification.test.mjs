import { describe, expect, it, vi } from 'vitest';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import {
	readBoundedResponse,
	createVerificationBudget,
	fetchVerificationText,
	mapVerificationConcurrent,
	liveSeoDeadlineMs,
	readSnapshotProbe,
	verifySnapshotManifest,
	countInternalLinks,
	datasetDistributionPaths,
	extractH1,
	extractStaticResultCount,
	verifyDetailPage,
	verifyReleasePayload,
	verifySnapshotRange,
	verifyIndexationPage,
} from './live-seo-verification.mjs';

describe('bounded exhaustive SEO verification', () => {
	it('aborts at the declared180 s deadline and clears its timer', () => {
		vi.useFakeTimers();
		const budget = createVerificationBudget();
		try {
			expect(liveSeoDeadlineMs).toBe(180_000);
			expect(vi.getTimerCount()).toBe(1);
			vi.advanceTimersByTime(179_999); expect(budget.signal.aborted).toBe(false);
			vi.advanceTimersByTime(1); expect(budget.signal.aborted).toBe(true);
			expect(budget.signal.reason.message).toContain('délai global');
		} finally { budget.dispose(); expect(vi.getTimerCount()).toBe(0); vi.useRealTimers(); }
	});
	it('keeps the signal active through a stalled Response.text body and makes no further attempt after global abort', async () => {
		const budget = createVerificationBudget(25);
		let calls = 0, bodyAborted = false;
		const fetchImpl = async (_url, { signal }) => {
			calls += 1;
			return new Response(new ReadableStream({ start(controller) {
				signal.addEventListener('abort', () => { bodyAborted = true; controller.error(signal.reason); }, { once: true });
			} }));
		};
		try {
			await expect(fetchVerificationText('/stall/', 'https://compatair.fr', budget, { fetchImpl })).rejects.toThrow('délai global');
			expect(calls).toBe(1); expect(bodyAborted).toBe(true);
		} finally { budget.dispose(); }
	});
	it('also cancels a retry wait when the global deadline expires', async () => {
		const budget = createVerificationBudget(25); let calls = 0;
		try {
			await expect(fetchVerificationText('/error/', 'https://compatair.fr', budget, { fetchImpl: async () => { calls += 1; throw new Error('fixture'); } })).rejects.toThrow('délai global');
			expect(calls).toBe(1);
		} finally { budget.dispose(); }
	});
	it('preserves bounded per-request retries without extending or aborting the total budget', async () => {
		const budget = createVerificationBudget(500); let calls = 0;
		const fetchImpl = async (_url, { signal }) => {
			calls += 1;
			return new Response(new ReadableStream({ start(controller) { signal.addEventListener('abort', () => controller.error(signal.reason), { once: true }); } }));
		};
		try {
			await expect(fetchVerificationText('/request-stall/', 'https://compatair.fr', budget, { fetchImpl, attempts: 2, requestTimeoutMs: 5, retryDelayMs: 1 })).rejects.toThrow('/request-stall/');
			expect(calls).toBe(2); expect(budget.signal.aborted).toBe(false);
		} finally { budget.dispose(); }
	});
	it('clears request and global timers after success', async () => {
		vi.useFakeTimers(); const budget = createVerificationBudget();
		try {
			expect(await fetchVerificationText('/ok/', 'https://compatair.fr', budget, { fetchImpl: async () => new Response('exact') })).toBe('exact');
			expect(vi.getTimerCount()).toBe(1);
		} finally { budget.dispose(); expect(vi.getTimerCount()).toBe(0); vi.useRealTimers(); }
	});
	it('checks every path while preserving concurrency10 and result ordering', async () => {
		const budget = createVerificationBudget(500), values = Array.from({ length: 100 }, (_, i) => i);
		let active = 0, maximum = 0, completed = 0;
		try {
			const result = await mapVerificationConcurrent(values, 10, async value => {
				active += 1; maximum = Math.max(maximum, active); await Promise.resolve(); active -= 1; completed += 1; return value * 2;
			}, budget);
			expect(result).toEqual(values.map(value => value * 2)); expect(completed).toBe(100); expect(maximum).toBe(10);
		} finally { budget.dispose(); }
	});
	it('starts no new worker path after a terminal assertion aborts the shared budget', async () => {
		const budget = createVerificationBudget(500), started = [];
		try {
			await expect(mapVerificationConcurrent(Array.from({ length: 100 }, (_, i) => i), 10, async value => {
				started.push(value); if (value === 0) throw new Error('invalid canonical fixture'); return value;
			}, budget)).rejects.toThrow('invalid canonical fixture');
			await Promise.resolve(); expect(started).toEqual(Array.from({ length: 10 }, (_, i) => i)); expect(budget.signal.aborted).toBe(true);
		} finally { budget.dispose(); }
	});
	it('starts no further paths after the global deadline aborts ten active body reads', async () => {
		const budget = createVerificationBudget(25), started = [];
		const fetchImpl = async (_url, { signal }) => new Response(new ReadableStream({ start(controller) {
			signal.addEventListener('abort', () => controller.error(signal.reason), { once: true });
		} }));
		try {
			await expect(mapVerificationConcurrent(Array.from({ length: 100 }, (_, i) => i), 10, async value => {
				started.push(value); return fetchVerificationText(`/stall/${value}/`, 'https://compatair.fr', budget, { fetchImpl });
			}, budget)).rejects.toThrow('délai global');
			await Promise.resolve(); expect(started).toEqual(Array.from({ length: 10 }, (_, i) => i));
		} finally { budget.dispose(); }
	});
	it('a real CLI assertion failure exits nonzero and disposes the180 s timer without network', async () => {
		const root = await mkdtemp(join(tmpdir(), 'compatair-seo-cli-failure-'));
		try {
			const preload = join(root, 'fixture.mjs');
			await writeFile(preload, `globalThis.fetch = async () => new Response(JSON.stringify({schemaVersion:'1.0.0',gitSha:'${'b'.repeat(40)}'}));\n`);
			const result = spawnSync(process.execPath, ['--import', preload, fileURLToPath(new URL('../verify-live-seo.mjs', import.meta.url))], {
				env: { ...process.env, COMPATAIR_EXPECTED_RELEASE_SHA: 'a'.repeat(40) }, encoding: 'utf8', timeout: 3_000,
			});
			expect(result.error).toBeUndefined(); expect(result.status).toBe(1); expect(result.stderr).toContain('différent');
		} finally { await rm(root, { recursive: true, force: true }); }
	});
});

describe('vérification SEO de la surface live', () => {
	it('lit un préfixe borné tout en vérifiant le SHA-256 du fichier local complet', async () => {
		const root = await mkdtemp(join(tmpdir(), 'compatair-snapshot-probe-'));
		try {
			const path = join(root, 'catalog.json');
			const body = Buffer.from('é'.repeat(80_000));
			await writeFile(path, body);
			const probe = await readSnapshotProbe(path);
			expect(probe.prefix).toEqual(body.subarray(0, 65_536));
			expect(probe.sizeBytes).toBe(body.length);
			expect(probe.sha256).toBe(createHash('sha256').update(body).digest('hex'));
			await writeFile(path, '');
			await expect(readSnapshotProbe(path)).rejects.toThrow('vide');
			await expect(readSnapshotProbe(join(root, 'missing'))).rejects.toThrow();
		} finally { await rm(root, { recursive: true, force: true }); }
	});
	it('refuse un manifeste absent, dupliqué ou différent des octets locaux', () => {
		const probe = { pathname: '/data/catalog.json', sizeBytes: 160_000, sha256: 'a'.repeat(64) };
		const entry = { path: probe.pathname, sizeBytes: probe.sizeBytes, sha256: probe.sha256, signature: Buffer.alloc(64).toString('base64') };
		expect(() => verifySnapshotManifest({ files: [entry] }, [probe])).not.toThrow();
		for (const files of [[], [entry, entry], [{ ...entry, sizeBytes: 160_001 }], [{ ...entry, sha256: 'b'.repeat(64) }], [{ ...entry, signature: '' }]]) expect(() => verifySnapshotManifest({ files }, [probe])).toThrow('signature différente');
		expect(() => verifySnapshotManifest({}, [probe])).toThrow();
	});
	it('annule immédiatement une réponse qui ignore la plage et déclare le catalogue entier', async () => {
		let cancelled = false;
		const stream = new ReadableStream({ cancel() { cancelled = true; } });
		await expect(readBoundedResponse(new Response(stream, { headers: { 'Content-Length': '50000000' } }), 65_536)).rejects.toThrow('dépasse');
		expect(cancelled).toBe(true);
	});
	it('borne aussi une réponse sans Content-Length et conserve les octets exacts', async () => {
		const bytes = Buffer.from('débit');
		expect(await readBoundedResponse(new Response(bytes), bytes.length)).toEqual(bytes);
		let cancelled = false;
		const stream = new ReadableStream({ pull(controller) { controller.enqueue(new Uint8Array(40_000)); }, cancel() { cancelled = true; } });
		await expect(readBoundedResponse(new Response(stream), 65_536)).rejects.toThrow('dépasse');
		expect(cancelled).toBe(true);
		await expect(readBoundedResponse(new Response(bytes), 0)).rejects.toThrow('plafond');
		await expect(readBoundedResponse(new Response(null), 10)).rejects.toThrow('sans corps');
	});
	it('vérifie les admissions et attentes dans les robots, canoniques et sitemaps', () => {
		const origin = 'https://compatair.fr';
		const path = '/guides/exemple/';
		const url = `${origin}${path}`;
		const html = (robots) => `<meta name="robots" content="${robots}"><link rel="canonical" href="${url}">`;
		expect(() => verifyIndexationPage(path, html('index,follow'), true, new Set([url]), origin)).not.toThrow();
		expect(() => verifyIndexationPage(path, html('noindex,follow'), false, new Set(), origin)).not.toThrow();
		expect(() => verifyIndexationPage(path, html('index,follow'), false, new Set(), origin)).toThrow('robots');
		expect(() => verifyIndexationPage(path, html('noindex,follow'), false, new Set([url]), origin)).toThrow('sitemap');
		expect(() => verifyIndexationPage(path, html('index,follow').replace(url, `${origin}/`), true, new Set([url]), origin)).toThrow('canonique');
	});
	it('vérifie les octets et la taille du snapshot sans décoder une séquence UTF-8 coupée', () => {
		const prefix = Buffer.from('débit').subarray(0, 2);
		expect(() => verifySnapshotRange({ status: 206, contentRange: 'bytes 0-1/12345', contentType: 'application/json; charset=utf-8', bytes: prefix }, prefix, 12345)).not.toThrow();
	});
	it('refuse une plage ignorée, déplacée ou une taille provenant d’une autre release', () => {
		const prefix = Buffer.from('{"version":');
		const response = { status: 206, contentRange: `bytes 0-${prefix.length - 1}/12345`, contentType: 'application/json', bytes: prefix };
		for (const patch of [{ status: 200 }, { contentRange: 'bytes 1-11/12345' }, { contentRange: `bytes 0-${prefix.length - 1}/54321` }, { contentType: 'text/html' }]) expect(() => verifySnapshotRange({ ...response, ...patch }, prefix, 12345)).toThrow();
	});
	it('refuse des octets modifiés ou tronqués même avec des en-têtes corrects', () => {
		const prefix = Buffer.from('{"version":');
		for (const bytes of [Buffer.from('{"versiOn":'), prefix.subarray(0, -1)]) expect(() => verifySnapshotRange({ status: 206, contentRange: `bytes 0-${prefix.length - 1}/12345`, contentType: 'application/json', bytes }, prefix, 12345)).toThrow('octets différents');
	});
	it('lit les marqueurs de rendu sans dépendre du texte adjacent', () => {
		const html = '<h1 data-label=">">KAESER <span title=">">EPC</span> à cuve verticale</h1><div data-static-compatibility-results data-result-count="8"></div>';
		expect(extractH1(html)).toBe('KAESER EPC à cuve verticale');
		expect(extractStaticResultCount(html)).toBe(8);
	});

	it('décode les entités XML une seule fois', () => {
		expect(extractH1('<h1>&amp;lt;air&amp;gt; &amp; fiable</h1>')).toBe('&lt;air&gt; & fiable');
	});

	it('compte uniquement les liens internes', () => {
		const html = '<a href="/a/">A</a><a href="https://compatair.fr/b/">B</a><a href="https://example.com/">C</a>';
		expect(countInternalLinks(html, 'https://compatair.fr')).toBe(2);
	});

	it('extrait les distributions Dataset JSON et CSV', () => {
		const html = '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Dataset","distribution":[{"@type":"DataDownload","contentUrl":"https://compatair.fr/data/a.json"},{"@type":"DataDownload","contentUrl":"https://compatair.fr/data/a.csv"}]}</script>';
		expect(datasetDistributionPaths(html)).toEqual(['/data/a.json', '/data/a.csv']);
	});

	it('compare la release au SHA attendu', () => {
		const sha = 'a'.repeat(40);
		expect(() => verifyReleasePayload({ schemaVersion: '1.0.0', gitSha: sha }, sha)).not.toThrow();
		expect(() => verifyReleasePayload({ schemaVersion: '1.0.0', gitSha: 'b'.repeat(40) }, sha)).toThrow('différent');
	});

	it('applique les plafonds propres à chaque type de page', () => {
		const links = '<a href="/calculateur/">Calculateur</a>'.repeat(20);
		expect(verifyDetailPage('/compresseurs/test/', `${links}<div data-static-compatibility-results data-result-count="8"></div>`, 'https://compatair.fr')).toEqual({ internalLinks: 20, staticResults: 8 });
		expect(() => verifyDetailPage('/outils-pneumatiques/test/', `<div data-static-compatibility-results data-result-count="6"></div>`, 'https://compatair.fr')).toThrow('plafond 5');
		expect(() => verifyDetailPage('/quel-compresseur-pour/test/', `<div data-static-compatibility-results data-result-count="26"></div>`, 'https://compatair.fr')).toThrow('plafond 25');
	});
});
