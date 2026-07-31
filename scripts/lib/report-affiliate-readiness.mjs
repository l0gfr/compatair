import { parseDelimited } from './import-manomano.mjs';
import { buildAcquisitionReport } from './report-acquisition.mjs';
import { reportProductFunnel } from './report-product-funnel.mjs';

const COMMERCIAL_PRIORITY_PATHS = [
	'/guides/compresseur-pour-agrafeuse-cloueuse-pneumatique/',
	'/guides/debit-restitue-fad-vs-debit-aspire/',
	'/compresseurs/parkside-psko-248-b1/',
	'/guides/compresseur-pour-gonfler-pneus/',
	'/compresseurs/abac-atf-s-3-50/',
	'/compresseurs/kaeser-eurocomp-epc-840-g/',
	'/guides/mesurer-temps-charge-vide-compresseur/',
	'/guides/comparatif-compresseurs-debit-restitue/',
	'/guides/soufflette-garage-securite-bruit-consommation/',
	'/guides/diametre-longueur-flexible-air-comprime/',
];

function finiteNumber(value, label) {
	const parsed = Number(value);
	if (!Number.isFinite(parsed) || parsed < 0) throw new Error(`Valeur GSC invalide pour ${label}.`);
	return parsed;
}

function parseGscPages(csv) {
	return parseDelimited(csv).map(({ row }) => ({
		path: row.path,
		clicks: finiteNumber(row.clicks, 'clicks'),
		impressions: finiteNumber(row.impressions, 'impressions'),
		ctrPct: finiteNumber(row.ctr_pct, 'ctr_pct'),
		position: finiteNumber(row.position, 'position'),
		metadataChangedAfterPeriod: row.metadata_changed_after_period.toLowerCase() === 'true',
	})).filter((row) => row.path.startsWith('/'));
}

function parseGscDates(csv, periodStart, periodEnd) {
	return parseDelimited(csv).map(({ row }) => ({
		date: row.date,
		clicks: finiteNumber(row.clicks, 'date clicks'),
		impressions: finiteNumber(row.impressions, 'date impressions'),
		ctrPct: row.ctr_pct ? finiteNumber(row.ctr_pct, 'date ctr_pct') : null,
		position: row.position ? finiteNumber(row.position, 'date position') : null,
	})).filter((row) => /^\d{4}-\d{2}-\d{2}$/.test(row.date) && row.date >= periodStart && row.date <= periodEnd).sort((left, right) => left.date.localeCompare(right.date));
}

function identifierTypes(product) {
	return [
		...(product.ean ? ['ean'] : []),
		...(product.gtin ? ['gtin'] : []),
		...(product.mpn ? ['mpn'] : []),
		...((product.distributorSkus ?? []).length ? ['distributor_sku'] : []),
	];
}

function confidenceRank(value) { return ({ A: 0, B: 1, C: 2, D: 3 })[value] ?? 4; }

function compareCandidates(left, right) {
	const leftObserved = Number(left.search.impressions > 0);
	const rightObserved = Number(right.search.impressions > 0);
	return rightObserved - leftObserved
		|| right.search.clicks - left.search.clicks
		|| right.search.impressions - left.search.impressions
		|| (left.search.position || Number.POSITIVE_INFINITY) - (right.search.position || Number.POSITIVE_INFINITY)
		|| right.identity.exactIdentifierTypes.length - left.identity.exactIdentifierTypes.length
		|| right.technicalEvidence.fadPointCount - left.technicalEvidence.fadPointCount
		|| confidenceRank(left.technicalEvidence.confidence) - confidenceRank(right.technicalEvidence.confidence)
		|| left.name.localeCompare(right.name, 'fr');
}

function summarizeAcquisition(aggregate) {
	if (!aggregate) return null;
	const report = buildAcquisitionReport(aggregate);
	return {
		sourceUpdatedAt: report.sourceUpdatedAt,
		views: report.segments.reduce((sum, row) => sum + row.views, 0),
		calculatorIntents: report.segments.reduce((sum, row) => sum + row.calculator_intents, 0),
		merchantInterests: report.segments.reduce((sum, row) => sum + row.merchant_interests, 0),
		segments: report.segments,
	};
}

export function buildAffiliateReadinessReport({ catalog, offers, gscPagesCsv, gscDatesCsv, gscPeriodStart, gscPeriodEnd, acquisitionAggregate, funnelAggregate, indexationSummary, generatedAt, limit = 30 }) {
	if (!catalog || !Array.isArray(catalog.compressors)) throw new Error('Catalogue de compresseurs invalide.');
	if (!offers || !Array.isArray(offers.offers)) throw new Error('Snapshot d’offres invalide.');
	if (!/^\d{4}-\d{2}-\d{2}$/.test(gscPeriodStart) || !/^\d{4}-\d{2}-\d{2}$/.test(gscPeriodEnd) || gscPeriodStart > gscPeriodEnd) throw new Error('Fenêtre GSC invalide.');
	if (!Number.isSafeInteger(limit) || limit < 20 || limit > 30) throw new Error('La shortlist doit contenir entre 20 et 30 références.');
	if (!Number.isFinite(Date.parse(generatedAt))) throw new Error('Date de génération invalide.');

	const gscPages = parseGscPages(gscPagesCsv);
	const gscDates = parseGscDates(gscDatesCsv, gscPeriodStart, gscPeriodEnd);
	if (!gscDates.length) throw new Error('Aucune date GSC dans la fenêtre demandée.');
	const gscByPath = new Map(gscPages.map((row) => [row.path, row]));
	const offersByProduct = new Map();
	for (const offer of offers.offers) offersByProduct.set(offer.productId, (offersByProduct.get(offer.productId) ?? 0) + 1);
	const eligible = catalog.compressors.filter((product) => product.status === 'active' && identifierTypes(product).length > 0);
	const candidates = eligible.map((product) => {
		const path = `/compresseurs/${product.slug}/`;
		const search = gscByPath.get(path) ?? { clicks: 0, impressions: 0, ctrPct: 0, position: 0, metadataChangedAfterPeriod: false };
		const exactTypes = identifierTypes(product);
		const activeOfferCount = offersByProduct.get(product.id) ?? 0;
		return {
			productId: product.id,
			slug: product.slug,
			name: `${product.brand} ${product.model}`,
			path,
			evidenceTier: search.impressions > 0 ? 'observed_search_and_catalog_ready' : 'catalog_ready_no_search_signal',
			identity: { exactIdentifierTypes: exactTypes, mpn: product.mpn ?? null, eanOrGtin: product.ean ?? product.gtin ?? null, distributorSkuCount: (product.distributorSkus ?? []).length },
			technicalEvidence: { confidence: product.confidence, fadPointCount: (product.fadCurve ?? []).length, status: product.status },
			search: { clicks: search.clicks, impressions: search.impressions, ctrPct: search.ctrPct, position: search.position || null, metadataChangedAfterPeriod: search.metadataChangedAfterPeriod, periodStart: gscPeriodStart, periodEnd: gscPeriodEnd },
			merchant: { activeOfferCount, availability: activeOfferCount > 0 ? 'verified_in_offer_snapshot' : 'not_verified' },
			rankBasis: search.impressions > 0
				? ['signal GSC observé', 'identifiant exact disponible', 'preuve technique du catalogue']
				: ['identifiant exact disponible', 'preuve technique du catalogue', 'aucun signal GSC observé dans la fenêtre'],
		};
	}).sort(compareCandidates).slice(0, limit).map((candidate, index) => ({ rank: index + 1, ...candidate }));

	const acquisition = summarizeAcquisition(acquisitionAggregate);
	const funnel = funnelAggregate ? reportProductFunnel(funnelAggregate) : null;
	const missingInputs = [
		...(!acquisition ? ['acquisition_aggregates'] : []),
		...(!funnel ? ['product_funnel_aggregates'] : []),
		...(!indexationSummary ? ['gsc_indexation'] : []),
	];
	const gscPageDimensionTotals = gscPages.reduce((totals, row) => ({ clicks: totals.clicks + row.clicks, impressions: totals.impressions + row.impressions }), { clicks: 0, impressions: 0 });
	const gscTotals = gscDates.reduce((totals, row) => ({ clicks: totals.clicks + row.clicks, impressions: totals.impressions + row.impressions }), { clicks: 0, impressions: 0 });
	const gscAggregationMismatch = gscTotals.clicks !== gscPageDimensionTotals.clicks || gscTotals.impressions !== gscPageDimensionTotals.impressions;
	return {
		schemaVersion: '1.0.0',
		generatedAt,
		status: missingInputs.length ? 'partial' : 'complete',
		window: { gscPeriodStart, gscPeriodEnd },
		sourceStatus: {
			catalog: { status: 'available', catalogVersion: catalog.catalogVersion ?? null },
			offers: { status: 'available' },
			gscPages: { status: 'available', rows: gscPages.length },
			gscDates: { status: 'available', rows: gscDates.length },
			acquisitionAggregates: { status: acquisition ? 'available' : 'unavailable' },
			productFunnelAggregates: { status: funnel ? 'available' : 'unavailable' },
			gscIndexation: { status: indexationSummary ? 'available' : 'unavailable' },
		},
		accessIssues: missingInputs.map((source) => `${source} absent : le rapport ne remplace pas cette mesure par une estimation.`),
		dataQualityWarnings: gscAggregationMismatch ? [`Les agrégats GSC ne sont pas additifs : la dimension date totalise ${gscTotals.impressions} impressions et ${gscTotals.clicks} clics, contre ${gscPageDimensionTotals.impressions} et ${gscPageDimensionTotals.clicks} pour la somme par page. Les totaux officiels du rapport utilisent la dimension date ; les pages servent uniquement au classement relatif.`] : [],
		summary: {
			compressors: catalog.compressors.length,
			exactMatchableCompressors: eligible.length,
			activeOffers: offers.offers.length,
			gscClicks: gscTotals.clicks,
			gscImpressions: gscTotals.impressions,
			gscPageDimensionClicks: gscPageDimensionTotals.clicks,
			gscPageDimensionImpressions: gscPageDimensionTotals.impressions,
			observedSearchCompressors: candidates.filter((candidate) => candidate.search.impressions > 0).length,
			shortlistedCompressors: candidates.length,
		},
		measurement: { acquisition, funnel, indexation: indexationSummary ?? null },
		dailySearch: gscDates,
		priorityPages: COMMERCIAL_PRIORITY_PATHS.map((path, index) => ({ rank: index + 1, path, search: gscByPath.get(path) ?? null, optimization: path.startsWith('/compresseurs/') ? ['CTA calculateur mesuré', 'intérêt marchand anonyme', 'identifiants exacts visibles'] : ['CTA calculateur mesuré', 'maillage vers les fiches ou outils pertinents'] })),
		methodology: {
			eligibility: 'Compresseur actif avec au moins un EAN, GTIN, MPN ou SKU distributeur exact.',
			ranking: 'Tri lexicographique : présence GSC, clics, impressions, position, largeur des identifiants exacts, points FAD, grade de preuve, nom.',
			availability: 'La disponibilité marchande reste non vérifiée sans offre datée dans le snapshot ; la shortlist ne constitue pas un catalogue vendable.',
		},
		limitations: ['La fenêtre GSC est courte et ne mesure pas la saisonnalité.', 'Une impression ou une intention ne prouve pas une vente.', 'Les références sans signal GSC complètent la shortlist uniquement grâce à leur capacité d’appariement et leurs preuves techniques.', 'Aucun marchand alternatif ni taux de commission n’est affirmé sans flux accepté et vérifié.'],
		candidates,
	};
}
