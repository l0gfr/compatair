import { describe, expect, it } from 'vitest';
import {
	countInternalLinks,
	datasetDistributionPaths,
	extractH1,
	extractStaticResultCount,
	verifyDetailPage,
	verifyReleasePayload,
	verifySnapshotRange,
} from './live-seo-verification.mjs';

describe('vérification SEO de la surface live', () => {
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
