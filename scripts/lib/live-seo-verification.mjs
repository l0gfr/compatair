import { decodeXmlEntities, extractH1Text } from './markup-text.mjs';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { setTimeout as wait } from 'node:timers/promises';

export const liveSeoDeadlineMs = 180_000;

export function createVerificationBudget(timeoutMs = liveSeoDeadlineMs) {
	if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1) throw new Error('Délai global SEO invalide');
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(new Error(`Surface SEO live : délai global de ${timeoutMs} ms dépassé`)), timeoutMs);
	return { signal: controller.signal, abort: reason => controller.abort(reason), dispose: () => clearTimeout(timer) };
}

export async function fetchVerificationText(pathname, origin, budget, { attempts = 3, fetchImpl = fetch, requestTimeoutMs = 20_000, retryDelayMs = 1_000 } = {}) {
	let lastError;
	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		budget.signal.throwIfAborted();
		const request = new AbortController();
		const timer = setTimeout(() => request.abort(new Error('Délai de requête SEO dépassé')), requestTimeoutMs);
		try {
			const response = await fetchImpl(new URL(pathname, origin), {
				headers: { 'Cache-Control': 'no-cache' },
				signal: AbortSignal.any([budget.signal, request.signal]),
			});
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			// The fetch signal remains active while response.text() consumes its body.
			const text = await response.text();
			budget.signal.throwIfAborted();
			return text;
		} catch (error) {
			budget.signal.throwIfAborted();
			lastError = error;
		} finally { clearTimeout(timer); }
		if (attempt < attempts) {
			try { await wait(attempt * retryDelayMs, undefined, { signal: budget.signal }); }
			catch (error) { budget.signal.throwIfAborted(); throw error; }
		}
	}
	throw new Error(`${pathname}: ${lastError instanceof Error ? lastError.message : 'requête impossible'}`);
}

export async function mapVerificationConcurrent(values, concurrency, run, budget) {
	const results = new Array(values.length);
	let cursor = 0;
	async function worker() {
		while (cursor < values.length) {
			budget.signal.throwIfAborted();
			const index = cursor++;
			try { results[index] = await run(values[index], index); }
			catch (error) { budget.abort(error); throw error; }
		}
	}
	await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker));
	return results;
}

export async function readSnapshotProbe(location) {
	const hash = createHash('sha256');
	const prefix = Buffer.alloc(65_536);
	let prefixBytes = 0, sizeBytes = 0;
	for await (const chunk of createReadStream(location, { highWaterMark: 65_536 })) {
		hash.update(chunk);
		sizeBytes += chunk.length;
		if (!Number.isSafeInteger(sizeBytes)) throw new Error('snapshot: taille locale non représentable');
		const count = Math.min(chunk.length, prefix.length - prefixBytes);
		if (count) { chunk.copy(prefix, prefixBytes, 0, count); prefixBytes += count; }
	}
	if (!sizeBytes) throw new Error('snapshot: fichier local vide');
	return { prefix: prefix.subarray(0, prefixBytes), sizeBytes, sha256: hash.digest('hex') };
}

export function verifySnapshotManifest(manifest, probes) {
	for (const probe of probes) {
		const entries = manifest.files?.filter(entry => entry.path === probe.pathname);
		if (entries?.length !== 1 || entries[0].sizeBytes !== probe.sizeBytes || entries[0].sha256 !== probe.sha256 || Buffer.from(entries[0].signature ?? '', 'base64').length !== 64) throw new Error(`${probe.pathname}: signature différente de l’artefact local`);
	}
}

export async function readBoundedResponse(response, maximumBytes) {
	if (!Number.isSafeInteger(maximumBytes) || maximumBytes < 1) throw new Error('snapshot: plafond de lecture invalide');
	const declared = response.headers.get('content-length');
	if (declared !== null && (!/^\d+$/.test(declared) || Number(declared) > maximumBytes)) {
		await response.body?.cancel();
		throw new Error('snapshot: réponse dépasse la plage demandée');
	}
	if (!response.body) throw new Error('snapshot: réponse sans corps');
	const reader = response.body.getReader();
	const chunks = [];
	let length = 0;
	try {
		while (true) {
			const { value, done } = await reader.read();
			if (done) break;
			length += value.length;
			if (length > maximumBytes) {
				await reader.cancel();
				throw new Error('snapshot: réponse dépasse la plage demandée');
			}
			chunks.push(Buffer.from(value));
		}
	} finally { reader.releaseLock(); }
	return Buffer.concat(chunks, length);
}

export const detailPagePolicies = [
	{ pattern: /^\/compresseurs\/[^/]+\/$/, maximumStaticResults: 8, requireStaticResults: true },
	{ pattern: /^\/outils-pneumatiques\/[^/]+\/$/, maximumStaticResults: 5, requireStaticResults: false },
	{ pattern: /^\/quel-compresseur-pour\/[^/]+\/$/, maximumStaticResults: 25, requireStaticResults: false },
];

export const maximumInternalLinks = 120;

export function decodeXml(value) {
	return decodeXmlEntities(value);
}

export function extractSitemapLocations(xml) {
	return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeXml(match[1]));
}

export function extractH1(html) {
	return decodeXml(extractH1Text(html)).replace(/\s+/g, ' ').trim();
}

export function extractStaticResultCount(html) {
	const value = html.match(/data-static-compatibility-results[^>]*data-result-count="(\d+)"/)?.[1];
	return value === undefined ? undefined : Number(value);
}

export function countInternalLinks(html, origin) {
	let count = 0;
	for (const match of html.matchAll(/<a\s+[^>]*href="([^"]+)"/g)) {
		try {
			if (new URL(decodeXml(match[1]), origin).origin === origin) count += 1;
		} catch {
			// Les autres contrôles de rendu signalent séparément les URL invalides.
		}
	}
	return count;
}

function jsonLdNodes(value) {
	if (Array.isArray(value)) return value.flatMap(jsonLdNodes);
	if (!value || typeof value !== 'object') return [];
	return [value, ...Object.values(value).flatMap(jsonLdNodes)];
}

export function datasetDistributionPaths(html) {
	const nodes = [];
	for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
		nodes.push(...jsonLdNodes(JSON.parse(match[1])));
	}
	const dataset = nodes.find((node) => node['@type'] === 'Dataset');
	if (!dataset || !Array.isArray(dataset.distribution)) return [];
	return dataset.distribution
		.filter((item) => item?.['@type'] === 'DataDownload' && typeof item.contentUrl === 'string')
		.map((item) => new URL(item.contentUrl).pathname);
}

export function verifyReleasePayload(payload, expectedSha) {
	if (payload?.schemaVersion !== '1.0.0') throw new Error('release.json: schemaVersion invalide');
	if (payload?.gitSha !== expectedSha) throw new Error(`release.json: SHA ${payload?.gitSha ?? 'absent'} différent de ${expectedSha}`);
}

export function verifyIndexationPage(pathname, html, indexable, sitemapUrls, origin, canonicalPath = pathname) {
	const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1]?.split(',').map((rule) => rule.trim());
	const pageUrl = new URL(pathname, origin).href;
	const expectedCanonical = new URL(canonicalPath, origin).href;
	const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
	if (indexable && canonicalPath !== pathname) throw new Error(`${pathname}: une admission exige sa canonique propre`);
	if (!robots || (indexable ? !robots.includes('index') || robots.includes('noindex') : !robots.includes('noindex'))) throw new Error(`${pathname}: directive robots inattendue`);
	if (canonical !== expectedCanonical) throw new Error(`${pathname}: canonique différente de l’URL attendue`);
	if (sitemapUrls.has(pageUrl) !== indexable) throw new Error(`${pathname}: présence dans le sitemap contraire à la politique`);
}

export function verifyEditorialHoldPage(pathname, html, sitemapUrls, origin, canonicalPath = pathname) {
	verifyIndexationPage(pathname, html, false, sitemapUrls, origin, canonicalPath);
	const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1]?.split(',').map((rule) => rule.trim()) ?? [];
	if (!robots.includes('follow') || robots.includes('index') || robots.includes('nofollow')) throw new Error(`${pathname}: protection éditoriale noindex,follow requise`);
}

export function verifySnapshotRange({ status, contentRange, contentType, bytes }, expectedPrefix, totalBytes) {
	if (status !== 206) throw new Error('snapshot: réponse partielle 206 requise');
	if (contentType?.split(';')[0].trim() !== 'application/json') throw new Error('snapshot: type JSON requis');
	if (!expectedPrefix.length || totalBytes < expectedPrefix.length || contentRange !== `bytes 0-${expectedPrefix.length - 1}/${totalBytes}`) throw new Error('snapshot: plage ou taille différente de la release');
	if (!Buffer.from(bytes).equals(expectedPrefix)) throw new Error('snapshot: octets différents de la release');
}

export function verifyDetailPage(pathname, html, origin) {
	const policy = detailPagePolicies.find((item) => item.pattern.test(pathname));
	if (!policy) return undefined;
	const internalLinks = countInternalLinks(html, origin);
	if (internalLinks > maximumInternalLinks) throw new Error(`${pathname}: ${internalLinks} liens internes, plafond ${maximumInternalLinks} dépassé`);
	const staticResults = extractStaticResultCount(html);
	if (policy.requireStaticResults && staticResults === undefined) throw new Error(`${pathname}: compteur de résultats statiques absent`);
	if (staticResults !== undefined && staticResults > policy.maximumStaticResults) throw new Error(`${pathname}: ${staticResults} résultats statiques, plafond ${policy.maximumStaticResults} dépassé`);
	return { internalLinks, staticResults };
}
