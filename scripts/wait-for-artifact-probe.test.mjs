import { describe, expect, it, vi } from 'vitest';
import { waitForArtifactProbe } from './wait-for-artifact-probe.mjs';

const context = {
	repository: 'example/repository',
	runId: '301',
	attempt: '2',
	sha: 'a'.repeat(40),
	artifactId: '107',
	digest: 'b'.repeat(64),
	token: 'test-token',
};
const artifact = {
	id: 107,
	name: 'compatair-artifact-probe-301-2',
	expired: false,
	digest: `sha256:${context.digest}`,
	workflow_run: { id: 301, head_sha: context.sha },
};
const listing = (...artifacts) => Response.json({ artifacts });
const ready = () => new Response(null, { status: 302, headers: { location: 'https://downloads.example/probe.zip' } });
const pause = () => vi.fn().mockResolvedValue(undefined);

describe('production artifact probe availability', () => {
	it('waits for the exact artifact to be listed and downloadable after upload', async () => {
		const wait = pause();
		const request = vi.fn()
			.mockResolvedValueOnce(listing({ ...artifact, id: 106, name: 'compatair-artifact-probe-301-1' }))
			.mockResolvedValueOnce(listing(artifact))
			.mockResolvedValueOnce(new Response(null, { status: 404 }))
			.mockResolvedValueOnce(listing(artifact))
			.mockResolvedValueOnce(ready());
		await expect(waitForArtifactProbe(context, { request, wait })).resolves.toBeUndefined();
		expect(wait.mock.calls).toEqual([[1_000], [2_000]]);
		expect(request.mock.calls.map(([url]) => url)).toEqual([
			'https://api.github.com/repos/example/repository/actions/runs/301/artifacts?per_page=100',
			'https://api.github.com/repos/example/repository/actions/runs/301/artifacts?per_page=100',
			'https://api.github.com/repos/example/repository/actions/artifacts/107/zip',
			'https://api.github.com/repos/example/repository/actions/runs/301/artifacts?per_page=100',
			'https://api.github.com/repos/example/repository/actions/artifacts/107/zip',
		]);
		for (const [, options] of request.mock.calls) expect(options.redirect).toBe('manual');
	});

	it('fails after a bounded wait when the probe never becomes visible', async () => {
		const wait = pause();
		const request = vi.fn(async () => listing());
		await expect(waitForArtifactProbe(context, { request, wait })).rejects.toThrow('sept tentatives');
		expect(request).toHaveBeenCalledTimes(7);
		expect(wait.mock.calls).toEqual([[1_000], [2_000], [4_000], [8_000], [12_000], [16_000]]);
	});

	it.each([
		{ digest: 'sha256:' + 'c'.repeat(64) },
		{ name: 'compatair-artifact-probe-301-1' },
		{ expired: true },
		{ workflow_run: { id: 302, head_sha: context.sha } },
		{ workflow_run: { id: 301, head_sha: 'c'.repeat(40) } },
	])('fails closed on conflicting metadata: %j', async override => {
		const wait = pause();
		const request = vi.fn(async () => listing({ ...artifact, ...override }));
		await expect(waitForArtifactProbe(context, { request, wait })).rejects.toThrow('incohérente');
		expect(request).toHaveBeenCalledTimes(1);
		expect(wait).not.toHaveBeenCalled();
	});

	it('fails immediately on denied access or an unsafe archive redirect', async () => {
		const wait = pause();
		const request = vi.fn().mockResolvedValueOnce(new Response(null, { status: 403 }));
		await expect(waitForArtifactProbe(context, { request, wait })).rejects.toThrow('HTTP 403');
		request.mockResolvedValueOnce(listing(artifact))
			.mockResolvedValueOnce(new Response(null, { status: 302, headers: { location: 'http://downloads.example/probe.zip' } }));
		await expect(waitForArtifactProbe(context, { request, wait })).rejects.toThrow('HTTP 302');
		expect(wait).not.toHaveBeenCalled();
	});
});
