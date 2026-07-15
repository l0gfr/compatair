import type { APIRoute } from 'astro';
import { documentQualityObservatory as observatory } from '../../data/document-quality-observatory';
import { encodeCsv } from '../../domain/csv';

export const prerender = true;

export const GET: APIRoute = () => {
	const correction = observatory.metrics.correctionLeadTime;
	const fad = observatory.metrics.multiPressureFad;
	const references = observatory.metrics.referenceStability;
	const contradictions = observatory.metrics.contradictionResponses;
	const rows = [
		['published_at', 'metric', 'status', 'value', 'numerator', 'denominator', 'definition'],
		[observatory.publishedAt, 'correction_lead_time_days', correction.status, correction.medianDays, correction.measuredCount, correction.measuredCount + correction.excludedLegacyCount, correction.definition],
		[observatory.publishedAt, 'multi_pressure_fad_percent', fad.status, fad.percentage, fad.availableCount, fad.eligibleCount, fad.definition],
		[observatory.publishedAt, 'reference_change_count', references.status, references.changeCount, references.stableCount, references.monitoredCount, references.definition],
		[observatory.publishedAt, 'contradiction_response_percent', contradictions.status, contradictions.responseRate, contradictions.answeredCount, contradictions.totalCount, contradictions.definition],
	];
	return new Response(encodeCsv(rows), {
		headers: {
			'Content-Type': 'text/csv; charset=utf-8',
			'Content-Disposition': 'inline; filename="observatoire-qualite-documentaire.csv"',
			'Cache-Control': 'public, max-age=300',
		},
	});
};
