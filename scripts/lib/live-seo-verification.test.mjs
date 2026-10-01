import { describe, expect, it } from 'vitest';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import {
	readBoundedResponse,
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
