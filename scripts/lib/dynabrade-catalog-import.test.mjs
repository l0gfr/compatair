import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { tools, compressors } from '../../src/data/catalog';
import { toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createDynabradeToolDraft, dynabradeFlow, dynabradeMetric } from './dynabrade-catalog-import.mjs';
const snapshot = JSON.parse(await readFile(new URL('../../src/data/imports/dynabrade-reviewed-2026-09-26.json', import.meta.url)));

describe('Dynabrade manufacturer tables', () => {
	it('keeps 500 individual MPNs and 1500 total products, with no duplicate technical profile', () => {
		expect(snapshot.rows).toHaveLength(500);
		expect(new Set(snapshot.rows.map(r => r.model)).size).toBe(500);
		expect(tools.length + compressors.length).toBeGreaterThanOrEqual(1500);
		const keys = snapshot.rows.map(r => {
			const p = createDynabradeToolDraft(snapshot, r);
			return JSON.stringify([p.categoryId, p.airflowLpm, p.connectorSize, p.specifications.map(s => [s.label, s.value])]);
		});
		expect(new Set(keys).size).toBe(500);
	});
	it('reproduces every published product from its versioned row and source page', () => {
		for (const row of snapshot.rows) {
			const expected = toolProfileSchema.parse(createDynabradeToolDraft(snapshot, row));
			const actual = tools.find(t => t.id === expected.id);
			expect(actual, row.model).toEqual({ ...expected, category: toolCategoryLabel(expected.categoryId) });
			expect(actual.workingPressureBar).toEqual({ min: 6.2, typical: 6.2, max: 6.2 });
			expect(actual.evidence[0].sourceUrl).toMatch(new RegExp(`#page=${row.page}$`));
			expect(actual.recommendedHose?.maximumLengthMeters).toBeUndefined();
		}
	});
	it('rejects missing values, mixed units and contradictions rather than inventing flow', () => {
		for (const raw of ['', '0 (0)', '-1 (30)', '30 l/s', '35 (850)', '34 (906)', '25 (793)']) expect(() => dynabradeFlow(raw)).toThrow();
		expect(dynabradeFlow('26 (736)')).toBe(736);
		expect(dynabradeFlow('19 (538)')).toBe(538);
		expect(() => dynabradeMetric('2.3 (0.7)', .45359237, 'kg')).toThrow();
		expect(() => dynabradeMetric('7 (289)', 25.4, 'mm')).toThrow();
	});
	it('requires individual source identity, the actual raw cell, pressure and flow basis', () => {
		const row = snapshot.rows.find(r => r.page === 64);
		expect(row).toBeDefined();
		for (const patch of [{ model: 'KIT-52216' }, { page: 1 }, { tableId: 'other' }, { pressure: '90 (8)' }, { airflowBasis: 'published' }, { reviewedFlow: '20 (566)' }, { pageFacts: [] }]) expect(() => createDynabradeToolDraft(snapshot, { ...row, ...patch })).toThrow();
		const changed = structuredClone(row), index = changed.rawValues.indexOf(row.reviewedFlow);
		expect(index).toBeGreaterThan(0);
		changed.rawValues[index] = '20 (566)';
		changed.fields['Maximum Air Flow SCFM (L/Min)'] = '20 (566)';
		changed.reviewedFlow = '20 (566)';
		expect(() => createDynabradeToolDraft(snapshot, changed)).toThrow('Cellule différente');
		expect(() => createDynabradeToolDraft({ ...snapshot, sourceUrl: 'https://example.org/catalog.pdf' }, row)).toThrow();
	});
	it('keeps published flow distinct from maximum flow and does not invent loaded measurements', () => {
		const published = snapshot.rows.find(r => r.page === 151);
		const maximum = snapshot.rows.find(r => r.page === 155);
		expect(createDynabradeToolDraft(snapshot, published).editorial.overview).toContain('consommation publiée de 510 L/min');
		expect(createDynabradeToolDraft(snapshot, maximum).editorial.overview).toContain('consommation maximale publiée de 538 L/min');
		for (const row of snapshot.rows) expect(createDynabradeToolDraft(snapshot, row).editorial.overview).not.toContain('en charge');
	});
	it('leaves contradictory secondary specifications out and explains the omission', () => {
		const row = snapshot.rows.find(r => r.model === '52276');
		expect(row).toBeDefined();
		const p = createDynabradeToolDraft(snapshot, row);
		expect(p.specifications.some(s => s.label === 'Masse')).toBe(false);
		expect(p.editorial.limitations.join(' ')).toContain('Masse non retenue');
		for (const model of ['15360', '56759', '52405', '52280']) expect(snapshot.rows.some(r => r.model === model)).toBe(false);
	});
});
