import { describe, expect, it, vi } from 'vitest';
import { fetchGitHubAdvisories } from './github-advisory-client.mjs';

function jsonResponse(body: unknown, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'content-type': 'application/json' },
	});
}

describe('GitHub Advisory Database client', () => {
	it('queries exact locked npm versions and normalizes matching advisories', async () => {
		const fetchMock = vi.fn(async (_input: string | URL | Request) => jsonResponse([{
			ghsa_id: 'GHSA-test-test-test',
			severity: 'medium',
			summary: 'Test advisory',
			html_url: 'https://github.com/advisories/GHSA-test-test-test',
			vulnerabilities: [{ package: { ecosystem: 'npm', name: 'alpha' }, vulnerable_version_range: '< 1.2.4', first_patched_version: '1.2.4' }],
		}]));
		const fetchImplementation = fetchMock as unknown as typeof fetch;

		await expect(fetchGitHubAdvisories([
			{ name: 'alpha', version: '1.2.3' },
			{ name: '@scope/beta', version: '4.5.6' },
		], { fetchImplementation, token: '' })).resolves.toEqual({
			alpha: [{
				severity: 'moderate',
				title: 'Test advisory',
				url: 'https://github.com/advisories/GHSA-test-test-test',
				ghsaId: 'GHSA-test-test-test',
				vulnerableVersionRanges: ['< 1.2.4'],
				firstPatchedVersions: ['1.2.4'],
				queriedVersions: ['1.2.3'],
			}],
		});

		const requested = new URL(String(fetchMock.mock.calls[0][0]));
		expect(requested.searchParams.get('ecosystem')).toBe('npm');
		expect(requested.searchParams.get('affects')).toBe('@scope/beta@4.5.6,alpha@1.2.3');
		expect(requested.searchParams.get('is_withdrawn')).toBe('false');
	});

	it('preserves an expanded advisory range instead of hiding it behind a package name', async () => {
		const fetchImplementation = vi.fn(async () => jsonResponse([{
			ghsa_id: 'GHSA-mrhx-c7xc-m3w5', severity: 'high', summary: 'Zod collection issue',
			html_url: 'https://github.com/advisories/GHSA-mrhx-c7xc-m3w5',
			vulnerabilities: [{ package: { ecosystem: 'npm', name: 'zod' }, vulnerable_version_range: '<= 4.6.7', first_patched_version: '4.6.8' }],
		}])) as unknown as typeof fetch;
		const response = await fetchGitHubAdvisories([{ name: 'zod', version: '3.25.76' }, { name: 'zod', version: '4.6.7' }], { fetchImplementation, token: '' });
		expect(response).toMatchObject({ zod: [{ vulnerableVersionRanges: ['<= 4.6.7'], firstPatchedVersions: ['4.6.8'], queriedVersions: ['3.25.76', '4.6.7'] }] });
	});

	it('fails closed on an HTTP error or malformed advisory', async () => {
		const unavailable = vi.fn(async () => jsonResponse({}, 503)) as unknown as typeof fetch;
		await expect(fetchGitHubAdvisories([{ name: 'alpha', version: '1.0.0' }], {
			fetchImplementation: unavailable,
			token: '',
			attempts: 1,
		})).rejects.toThrow('503');

		const malformed = vi.fn(async () => jsonResponse([{ ghsa_id: 'GHSA-test-test-test' }])) as unknown as typeof fetch;
		await expect(fetchGitHubAdvisories([{ name: 'alpha', version: '1.0.0' }], {
			fetchImplementation: malformed,
			token: '',
			attempts: 1,
		})).rejects.toThrow('malformé');
	});

	it('does not silently accept an advisory that matches no locked npm package', async () => {
		const fetchImplementation = vi.fn(async () => jsonResponse([{
			ghsa_id: 'GHSA-test-test-test',
			severity: 'high',
			summary: 'Unexpected package',
			html_url: 'https://github.com/advisories/GHSA-test-test-test',
			vulnerabilities: [{ package: { ecosystem: 'npm', name: 'other' } }],
		}])) as unknown as typeof fetch;
		await expect(fetchGitHubAdvisories([{ name: 'alpha', version: '1.0.0' }], {
			fetchImplementation,
			token: '',
			attempts: 1,
		})).rejects.toThrow('sans paquet npm correspondant');
	});
});
