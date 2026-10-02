import {
	datasetDistributionPaths,
	createVerificationBudget,
	fetchVerificationText,
	mapVerificationConcurrent,
	liveSeoDeadlineMs,
	detailPagePolicies,
	extractH1,
	extractSitemapLocations,
	verifyDetailPage,
	verifyReleasePayload,
	verifyIndexationPage,
} from './lib/live-seo-verification.mjs';

const origin = new URL(process.env.COMPATAIR_SITE_ORIGIN ?? 'https://compatair.fr').origin;
const expectedSha = process.env.COMPATAIR_EXPECTED_RELEASE_SHA;
if (!/^[0-9a-f]{40}$/.test(expectedSha ?? '')) throw new Error('COMPATAIR_EXPECTED_RELEASE_SHA doit contenir un SHA Git complet.');

const budget = createVerificationBudget();
const fetchText = pathname => fetchVerificationText(pathname, origin, budget);

async function verifyLiveSeo() {
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
	const indexation = JSON.parse(await fetchText('/data/indexation.json'));
	if (indexation.schemaVersion !== 1 || indexation.gitSha !== expectedSha || !Array.isArray(indexation.checks) || !indexation.checks.length || indexation.checks.length > 18) throw new Error('Historique SEO public absent ou incohérent.');
	for (const check of indexation.checks) {
		if (!/^\/(?:[a-z0-9-]+\/)+$/.test(check.path) || typeof check.indexable !== 'boolean') throw new Error('Sonde d’indexation invalide.');
		verifyIndexationPage(check.path, await fetchText(check.path), check.indexable, pageUrls, origin);
	}
	for (const [alias, target] of Object.entries(indexation.canonicalAliases ?? {}).slice(0, 5)) {
	 const html = await fetchText(alias);
	 if (!html.includes(`rel="canonical" href="${origin}${target}"`) || !html.includes('data-equivalent-answer') || pageUrls.has(`${origin}${alias}`) || !pageUrls.has(`${origin}${target}`)) throw new Error(`Regroupement canonique incomplet : ${alias}`);
	}
	const detailPaths = [...pageUrls]
		.map((url) => new URL(url).pathname)
		.filter((pathname) => detailPagePolicies.some((policy) => policy.pattern.test(pathname)));
	if (!detailPaths.length) throw new Error('sitemap: aucune page détail à vérifier');

	console.log(`Surface SEO live : ${detailPaths.length} pages détail, concurrence 10, délai global ${liveSeoDeadlineMs / 1000} s.`);
	let completed = 0;
	const checked = await mapVerificationConcurrent(detailPaths, 10, async (pathname) => {
		const html = await fetchText(pathname);
		verifyIndexationPage(pathname, html, true, pageUrls, origin);
		const result = verifyDetailPage(pathname, html, origin);
		completed += 1;
		if (completed % 250 === 0 || completed === detailPaths.length) console.log(`SEO détail : ${completed}/${detailPaths.length} pages vérifiées.`);
		return result;
	}, budget);
	const maximumObservedLinks = Math.max(...checked.map((item) => item?.internalLinks ?? 0));
	const maximumObservedResults = Math.max(...checked.map((item) => item?.staticResults ?? 0));
	console.log(`Surface SEO live vérifiée pour ${release.gitSha} : ${detailPaths.length} pages détail, ${maximumObservedLinks} liens internes maximum et ${maximumObservedResults} résultats statiques maximum.`);
}

try { await verifyLiveSeo(); }
catch (error) { budget.abort(error); throw error; }
finally { budget.dispose(); }
