import {
	datasetDistributionPaths,
	detailPagePolicies,
	extractH1,
	extractSitemapLocations,
	verifyDetailPage,
	verifyReleasePayload,
} from './lib/live-seo-verification.mjs';

const origin = new URL(process.env.COMPATAIR_SITE_ORIGIN ?? 'https://compatair.fr').origin;
const expectedSha = process.env.COMPATAIR_EXPECTED_RELEASE_SHA;
if (!/^[0-9a-f]{40}$/.test(expectedSha ?? '')) throw new Error('COMPATAIR_EXPECTED_RELEASE_SHA doit contenir un SHA Git complet.');

async function fetchText(pathname, attempts = 3) {
	let lastError;
	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		try {
			const response = await fetch(new URL(pathname, origin), {
				headers: { 'Cache-Control': 'no-cache' },
				signal: AbortSignal.timeout(20_000),
			});
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			return await response.text();
		} catch (error) {
			lastError = error;
			if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
		}
	}
	throw new Error(`${pathname}: ${lastError instanceof Error ? lastError.message : 'requête impossible'}`);
}

async function mapConcurrent(values, concurrency, run) {
	const results = new Array(values.length);
	let cursor = 0;
	async function worker() {
		while (cursor < values.length) {
			const index = cursor;
			cursor += 1;
			results[index] = await run(values[index], index);
		}
	}
	await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, worker));
	return results;
}

const release = JSON.parse(await fetchText('/data/release.json'));
verifyReleasePayload(release, expectedSha);

const csvRequirements = new Map([
	['/data/transparency-barometer.csv', ['edition', 'published_at', 'brand', 'status', 'rank', 'sample_size']],
	['/data/document-quality-observatory.csv', ['published_at', 'metric', 'status', 'value', 'numerator', 'denominator', 'definition']],
]);
for (const [pathname, columns] of csvRequirements) {
	const header = (await fetchText(pathname)).split(/\r?\n/, 1)[0];
	for (const column of columns) if (!header.includes(`"${column}"`)) throw new Error(`${pathname}: colonne absente ${column}`);
}

const datasetRequirements = new Map([
	['/barometre-transparence/', ['/data/transparency-barometer.json', '/data/transparency-barometer.csv']],
	['/observatoire-qualite-documentaire/', ['/data/document-quality-observatory.json', '/data/document-quality-observatory.csv']],
]);
for (const [pathname, distributions] of datasetRequirements) {
	const published = new Set(datasetDistributionPaths(await fetchText(pathname)));
	for (const distribution of distributions) if (!published.has(distribution)) throw new Error(`${pathname}: distribution Dataset absente ${distribution}`);
}

const horizontalH1 = extractH1(await fetchText('/compresseurs/kaeser-eurocomp-epc-840-250/'));
const verticalH1 = extractH1(await fetchText('/compresseurs/kaeser-eurocomp-epc-840-250-vertical/'));
if (!horizontalH1.includes('cuve horizontale')) throw new Error('KAESER horizontal: variante absente du H1');
if (!verticalH1.includes('cuve verticale')) throw new Error('KAESER vertical: variante absente du H1');
if (horizontalH1 === verticalH1) throw new Error('KAESER: H1 horizontal et vertical identiques');

const sitemapIndex = await fetchText('/sitemap-index.xml');
const sitemapUrls = extractSitemapLocations(sitemapIndex);
if (!sitemapUrls.length) throw new Error('sitemap-index.xml: aucun sitemap enfant');
const pageUrls = new Set();
for (const sitemapUrl of sitemapUrls) for (const pageUrl of extractSitemapLocations(await fetchText(new URL(sitemapUrl).pathname))) pageUrls.add(pageUrl);
const detailPaths = [...pageUrls]
	.map((url) => new URL(url).pathname)
	.filter((pathname) => detailPagePolicies.some((policy) => policy.pattern.test(pathname)));
if (!detailPaths.length) throw new Error('sitemap: aucune page détail à vérifier');

const checked = await mapConcurrent(detailPaths, 10, async (pathname) => verifyDetailPage(pathname, await fetchText(pathname), origin));
const maximumObservedLinks = Math.max(...checked.map((item) => item?.internalLinks ?? 0));
const maximumObservedResults = Math.max(...checked.map((item) => item?.staticResults ?? 0));
console.log(`Surface SEO live vérifiée pour ${release.gitSha} : ${detailPaths.length} pages détail, ${maximumObservedLinks} liens internes maximum et ${maximumObservedResults} résultats statiques maximum.`);
