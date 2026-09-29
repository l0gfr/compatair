import { describe, expect, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validateAssociations, linkHtmlEvidence, requestedFields, capturePublicPages } from './intention-registry.mjs';
import panel from '../../config/seo-query-panel.json';
import mapping from '../../config/seo-intention-routes.json';

describe('frozen intention registry', () => {
	it('maps each original ID exactly once without synthesizing observations', () => {
		expect(() => validateAssociations(panel, mapping.associations)).not.toThrow();
		expect(panel.queries.every(q => q.observations.length === 0)).toBe(true);
		expect(() => validateAssociations(panel, [...mapping.associations.slice(1), mapping.associations[1]])).toThrow();
		expect(() => validateAssociations(panel, mapping.associations.map((q, i) => i ? q : { ...q, routes: ['/../../etc/'] }))).toThrow();
	});
	it('parses declarations, retains duplicates and missing pages without executing scripts', () => {
		const root = mkdtempSync(join(tmpdir(), 'seo-metadata-'));
		try {
			mkdirSync(join(root, 'example'));
			writeFileSync(join(root, 'example/index.html'), '<meta name="robots" content="noindex,follow"><link rel="canonical" href="https://example.test/?a=1&amp;b=2"><link rel="canonical" href="https://duplicate.test/"><p>Visible <strong>126 L/min à 7 bar</strong> <a href="https://source.test/doc">source</a></p><p hidden>Invisible</p><script>throw Error("must not run")</script>');
			const data = JSON.parse(execFileSync('python3', ['scripts/audit-v3/read-html-metadata.py', root], { input: '["/example/","/missing/"]', encoding: 'utf8' }));
			expect(data['/example/']).toMatchObject({ status: 'read', robots: ['noindex,follow'], canonicals: ['https://example.test/?a=1&b=2', 'https://duplicate.test/'] });
			expect(data['/missing/'].robots).toEqual([]);
			expect(data['/example/'].blocks).toMatchObject([{ tag: 'p', text: 'Visible 126 L/min à 7 bar source', links: ['https://source.test/doc'] }]);
			expect(data['/example/'].htmlSha256).toMatch(/^[0-9a-f]{64}$/);
			expect(JSON.stringify(data['/example/'].blocks)).not.toContain('Invisible');
			expect(JSON.stringify(data['/example/'].blocks)).not.toContain('must not run');
		} finally { rmSync(root, { recursive: true, force: true }); }
	});
	it('keeps missing requested facts missing and distinguishes visible values from corroboration', () => {
		const page = { identity: { mpn: '123' }, facts: [{ field: 'fadCurve', value: [{ pressureBar: 7, litersPerMinute: 100 }], sources: [{ url: 'https://source.test/doc' }] }] };
		const html = { status: 'read', links: ['https://source.test/doc'], blocks: [{ tag: 'dd', ordinal: 1, text: '2100 L/min à 7 bar', links: [] }] };
		const wrong = linkHtmlEvidence({ id: 'q001', query: 'débit restitué' }, page, html);
		expect(wrong.claims[0].status).toBe('declared-value-not-located-in-html');
		const correct = linkHtmlEvidence({ id: 'q001', query: 'débit restitué' }, page, { ...html, blocks: [{ ...html.blocks[0], text: '100 L/min à 7 bar' }] });
		expect(correct.claims[0].status).toBe('declared-value-found-in-html');
		expect(correct.answerCoverage).toBe('field-presence-only-not-a-complete-answer-certification');
		expect(linkHtmlEvidence({ id: 'q006', query: 'consommation outils' }, page, html).claims[1]).toMatchObject({ field: 'dutyCycle', value: null, status: 'absent-from-declared-facts' });
		expect(requestedFields('q015')).toContain('airPerActionLiters');
		expect(requestedFields('q021')).toEqual([]);
	});
	it('captures public HTTP evidence separately and detects release changes', async () => {
		let marker = 0;
		const calls: string[] = [];
		const request: typeof fetch = async (input, options) => {
			const url = input instanceof Request ? input.url : String(input);
			calls.push(url);
			expect(options?.redirect).toBe('manual');
			if (new URL(url).pathname === '/data/release.json') return new Response(JSON.stringify({ gitSha: String(++marker).repeat(40) }), { headers: { 'content-type': 'application/json' } });
			return new Response('<h1>Title</h1><p>Source <a href="https://external.test/never-fetch">document</a></p>', { headers: { 'content-type': 'text/html', 'x-robots-tag': 'noindex' } });
		};
		const result = await capturePublicPages(['/example/'], request);
		expect(result.releaseStable).toBe(false);
		const page = result.pages['/example/'];
		if (page.status !== 'read') throw new Error(page.error);
		expect(page.http.xRobotsTag).toBe('noindex');
		expect(page.blocks).toHaveLength(2);
		expect(calls.map(url => new URL(url).origin + new URL(url).pathname)).toEqual(['https://compatair.fr/data/release.json', 'https://compatair.fr/example/', 'https://compatair.fr/data/release.json']);
		expect(calls.every(url => new URL(url).searchParams.has('audit-intentions'))).toBe(true);
	});
	it('rejects a development public marker and records redirect failures without following them', async () => {
		await expect(capturePublicPages([], async () => new Response('{"gitSha":"development"}', { headers: { 'content-type': 'application/json' } }))).rejects.toThrow('never development');
		const request: typeof fetch = async input => {
			const url = input instanceof Request ? input.url : String(input);
			return new URL(url).pathname.endsWith('.json') ? new Response(JSON.stringify({ gitSha: 'a'.repeat(40) }), { headers: { 'content-type': 'application/json' } }) : new Response('', { status: 302, headers: { location: 'http://127.0.0.1/private' } });
		};
		const result = await capturePublicPages(['/example/'], request);
		expect(result.pages['/example/']).toMatchObject({ status: 'unavailable' });
		const page = result.pages['/example/'];
		if (page.status !== 'unavailable') throw new Error('Expected a failed public capture');
		expect(page.error).toContain('redirects are not followed');
	});

});
