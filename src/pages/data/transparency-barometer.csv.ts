import type { APIRoute } from 'astro';
import { CATALOG_VERIFIED_AT, compressors } from '../../data/catalog';
import { encodeCsv } from '../../domain/csv';
import { createTransparencyBarometer } from '../../domain/transparency-barometer';

export const prerender = true;

export const GET: APIRoute = () => {
	const barometer = createTransparencyBarometer(compressors, CATALOG_VERIFIED_AT);
	const rows = [
		['edition', 'published_at', 'brand', 'status', 'rank', 'sample_size', 'score', 'coverage_score', 'observed_low_percent', 'observed_high_percent', ...barometer.criteria.map((criterion) => criterion.id)],
		...barometer.brands.map((row) => [
			barometer.edition, barometer.publishedAt, row.brand, row.status, row.rank, row.sampleSize, row.score, row.coverageScore,
			row.observedCompletenessRange.low, row.observedCompletenessRange.high, ...barometer.criteria.map((criterion) => row.criteria[criterion.id]),
		]),
	];
	return new Response(encodeCsv(rows), {
		headers: {
			'Content-Type': 'text/csv; charset=utf-8',
			'Content-Disposition': `inline; filename="barometre-compatair-${barometer.edition}.csv"`,
			'Cache-Control': 'public, max-age=300',
		},
	});
};
