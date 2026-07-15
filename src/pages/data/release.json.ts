import type { APIRoute } from 'astro';
import { createReleaseMetadata } from '../../domain/release';

export const prerender = true;

const releaseEnvironmentKey = 'COMPATAIR_RELEASE_SHA';
const githubEnvironmentKey = 'GITHUB_SHA';
const releaseSha = process.env[releaseEnvironmentKey] ?? process.env[githubEnvironmentKey];

export const GET: APIRoute = () => new Response(JSON.stringify(createReleaseMetadata(releaseSha)), {
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
		'Cache-Control': 'no-store',
	},
});
