import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { sourceAvailabilityObservations, sourceAvailabilityForUrl, sourceAvailabilityMessage } from './source-availability';

const documentUrl = 'https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf';

describe('confirmed source availability observations', () => {
	it('records exactly the confirmed incident, independently of historical consultation', () => {
		expect(sourceAvailabilityObservations).toHaveLength(1);
		expect(sourceAvailabilityForUrl(documentUrl)).toMatchObject({
			observedAt: '2026-10-02', httpStatus: 404, method: 'GET',
			archive: { retrievedAt: '2026-09-30', retainedForTraceability: true, publicDownload: false },
		});
	});

	it('retains the exact URL, hash, byte count and consultation from both versioned source snapshots', () => {
		const observation = sourceAvailabilityForUrl(documentUrl)!;
		for (const name of ['documented-expansion-2026-09-30.json', 'documented-expansion-2026-09-30-d.json']) {
			const snapshot = JSON.parse(readFileSync(new URL(`./imports/${name}`, import.meta.url), 'utf8')) as { sources: { id: string; url: string; sha256: string; bytes: number; observedAt: string }[] };
			const historical = snapshot.sources.find((source) => source.id === observation.archive.sourceId)!;
			expect(historical).toBeDefined();
			expect(observation.sourceUrl).toBe(historical.url);
			expect(observation.archive).toMatchObject({ sha256: historical.sha256, bytes: historical.bytes, retrievedAt: historical.observedAt });
		}
	});

	it.each(['#page=9', '#page=30', '#technical-data'])('annotates a citation to the same document with fragment %s', (fragment) => {
		expect(sourceAvailabilityForUrl(documentUrl + fragment)).toBe(sourceAvailabilityForUrl(documentUrl));
	});

	it.each([
		'https://www.almig.de/en/services/downloads',
		documentUrl + '?download=1',
		documentUrl.replace('www.almig.de', 'www.almig.com'),
		documentUrl.replace('20260706', '20260707'),
		'https://www.cp.com/example.pdf',
		'javascript:alert(1)',
		'',
	])('does not classify an unknown or different URL: %s', (url) => {
		expect(sourceAvailabilityForUrl(url)).toBeUndefined();
		expect(sourceAvailabilityMessage(url)).toBeUndefined();
	});

	it('labels a dated observation and a private traceability copy without publishing a replacement link', () => {
		const message = sourceAvailabilityMessage(documentUrl)!;
		expect(message).toContain('Source historique');
		expect(message).toContain('HTTP 404');
		expect(message).toContain('02/10/2026');
		expect(message).toContain('30/09/2026');
		expect(message).toContain(sourceAvailabilityForUrl(documentUrl)!.archive.sha256);
		expect(message).toContain('Aucun téléchargement public');
		expect(message).not.toMatch(/https?:\/\/|\/tmp\/|file:/);
	});
});
