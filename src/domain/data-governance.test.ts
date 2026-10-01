import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { createCatalogQualityReport, createCatalogScope, evaluateFreshness, freshnessPolicy } from './data-governance';
import { sourceRoleForEvidence } from './catalog-normalization';

describe('public catalog data governance', () => {
	it('counts distinct evidence entries even when they cite the same document', () => {
		const evidence = { ...compressors[0].evidence[0], id: 'shared-proof', sourceUrl: 'https://example.com/catalog.pdf#page=2', sourceType: 'manufacturer' as const, sourceRole: 'primary' as const };
		const report = createCatalogQualityReport([
			{ ...compressors[0], evidence: [evidence, { ...evidence, id: 'other-field-proof', sourceUrl: 'https://example.com/catalog.pdf#page=3' }] },
			{ ...compressors[1], evidence: [evidence] },
		], [], CATALOG_VERIFIED_AT);
		expect(report.source_roles.counting_unit).toBe('distinct_evidence_id');
		expect(report.source_roles.evidence_entry_counts.primary).toBe(2);
		expect(report.source_roles.document_counts_deprecated).toContain('Alias');
	});
	it('publishes the exact explored, fixed and parametric grains without conflating them', () => {
		expect(createCatalogScope(compressors, tools)).toEqual({
			compressor_count: 2219,
			tool_count: 9087,
			explorable_combination_count: 20_164_053,
			fixed_flow_tool_count: 7675,
			fixed_verdict_count: 17_030_825,
			parametric_tool_count: 1412,
			parametric_combination_count: 3_133_228,
			parametric_inputs: ['action_rate', 'volume_and_target_time'],
		});
	});

	it('measures every field with explicit denominators and separate source roles', () => {
		const report = createCatalogQualityReport(compressors, tools, CATALOG_VERIFIED_AT);
		expect(report.field_coverage.length).toBeGreaterThan(20);
		for (const row of report.field_coverage) {
			expect(row.populated_count).toBeLessThanOrEqual(row.eligible_count);
			expect(row.explicitly_sourced_count).toBeLessThanOrEqual(row.populated_count);
			expect(row.primary_source_count).toBeLessThanOrEqual(row.populated_count);
			expect(row.independently_corroborated_count).toBeLessThanOrEqual(row.populated_count);
		}
		const distributorSku = report.field_coverage.find((row) => row.field === 'distributorSku')!;
		expect(distributorSku).toMatchObject({ eligible_count: 11306, populated_count: 2, explicitly_sourced_count: 2, primary_source_count: 0, independently_corroborated_count: 0 });
	});

	it('does not confuse primary, independent and secondary evidence', () => {
		const base = { id: 'source', sourceUrl: 'https://example.com', sourceLabel: 'Source', retrievedAt: CATALOG_VERIFIED_AT, confidence: 'A' as const };
		expect(sourceRoleForEvidence({ ...base, sourceType: 'manufacturer' })).toBe('primary');
		expect(sourceRoleForEvidence({ ...base, sourceType: 'measured' })).toBe('independent_corroboration');
		expect(sourceRoleForEvidence({ ...base, sourceType: 'merchant' })).toBe('secondary');
		expect(sourceRoleForEvidence({ ...base, sourceType: 'manufacturer', sourceRole: 'secondary' })).toBe('secondary');
	});

	it('turns a freshness SLA breach into stale and an unavailable feed into unavailable', () => {
		expect(evaluateFreshness({ policy: freshnessPolicy('technical_catalog'), path: '/data/catalog.json', observedAt: '2026-01-01', evaluatedAt: '2026-04-02' }).status).toBe('stale');
		expect(evaluateFreshness({ policy: freshnessPolicy('commercial_offers'), path: '/data/offers.json', observedAt: CATALOG_VERIFIED_AT, evaluatedAt: CATALOG_VERIFIED_AT, available: false }).status).toBe('unavailable');
	});
});
