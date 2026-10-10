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
		expect(message).toContain('source historique');
		expect(message).toContain('Document constructeur rétabli');
		expect(message).toContain('10/10/2026');
		expect(message).toContain('HTTP 200');
		expect(message).toContain('HTTP 404');
		expect(message).toContain('02/10/2026');
		expect(message).toContain('30/09/2026');
		expect(message).toContain(sourceAvailabilityForUrl(documentUrl)!.archive.sha256);
		expect(message).toContain('Aucun téléchargement public');
		expect(message).not.toMatch(/https?:\/\/|\/tmp\/|file:/);
	});
	it('preserves the incident and records the verified recovery of the exact archived bytes', () => {
		const observation = sourceAvailabilityForUrl(documentUrl)!;
		expect(observation.httpStatus).toBe(404);
		expect(observation.recovery).toEqual({ observedAt: '2026-10-10', httpStatus: 200, method: 'GET', sha256: observation.archive.sha256, bytes: observation.archive.bytes });
	});
});
