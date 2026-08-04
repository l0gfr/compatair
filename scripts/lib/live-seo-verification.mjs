import { decodeXmlEntities, extractH1Text } from './markup-text.mjs';

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
