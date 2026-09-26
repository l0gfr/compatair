import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { tools, compressors } from '../../src/data/catalog';
import { toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createAtlasCopcoToolDraft, atlasFlow } from './atlas-copco-catalog-import.mjs';
import { createDesoutterToolDraft } from './desoutter-catalog-import.mjs';
const atlas = JSON.parse(await readFile(new URL('../../src/data/imports/atlas-copco-reviewed-2026-09-26.json', import.meta.url)));
const desoutter = JSON.parse(await readFile(new URL('../../src/data/imports/desoutter-reviewed-2026-09-26.json', import.meta.url)));

describe('500 individually sourced industrial tools', () => {
	it('keeps 2306 products and 500 distinct manufacturer references and technical profiles', () => {
		expect(atlas.rows).toHaveLength(397);
		expect(desoutter.rows).toHaveLength(103);
		expect(tools.length + compressors.length).toBe(2306);
		const profiles = [], ids = [];
		for (const [snapshot, factory] of [[atlas, createAtlasCopcoToolDraft], [desoutter, createDesoutterToolDraft]]) for (const row of snapshot.rows) {
			const p = factory(snapshot, row);
			ids.push(`${p.brand}:${p.mpn}`);
			profiles.push(JSON.stringify([p.brand, p.categoryId, p.airflowLpm, p.connectorSize, p.specifications.map(s => [s.label, s.value])]));
		}
		expect(new Set(ids).size).toBe(500);
		expect(new Set(profiles).size).toBe(500);
	});
	it('reproduces every published value from versioned manufacturer facts', () => {
		for (const [snapshot, factory] of [[atlas, createAtlasCopcoToolDraft], [desoutter, createDesoutterToolDraft]]) for (const row of snapshot.rows) {
			const expected = toolProfileSchema.parse(factory(snapshot, row));
			expect(tools.find(t => t.id === expected.id), row.mpn).toEqual({ ...expected, category: toolCategoryLabel(expected.categoryId) });
			expect(expected.workingPressureBar.typical).toBe(6.3);
			expect(expected.evidence).toHaveLength(2);
			expect(expected.fieldSources.workingPressureBar).toContain(expected.evidence[1].id);
		}
	});
	it('accounts for published rounding precision while rejecting incompatible units', () => {
		expect(atlasFlow({ metric: '9 l/s', imperial: '18 cfm' })).toBe(540);
		expect(atlasFlow({ metric: '9.5 l/s', imperial: '20 cfm' })).toBe(570);
		for (const value of [{ metric: '14.5 l/s', imperial: '31.8 cfm' }, { metric: '5.5 l/s', imperial: '9.1 cfm' }, { metric: '9 l/min', imperial: '18 cfm' }, { metric: '0 l/s', imperial: '0 cfm' }, { metric: '8 l/s' }]) expect(() => atlasFlow(value)).toThrow();
	});
	it('uses the highest documented phase, never a guessed duty cycle or maximum pressure for the flow', () => {
		const row = atlas.rows.find(r => r.model === 'LSF29 S250-HD');
		expect(row).toBeDefined();
		const p = createAtlasCopcoToolDraft(atlas, row);
		expect(p.airflowLpm.typical).toBe(1320);
		expect(p.specifications.find(s => s.label === 'Consommation à vide').value).toContain('540 L/min');
		const higherMaximum = atlas.rows.find(r => r.attributes.some(a => a.name === 'Max working pressure' && a.value.metric === '7 bar'));
		expect(createAtlasCopcoToolDraft(atlas, higherMaximum).workingPressureBar).toEqual({ min: 6.3, typical: 6.3, max: 7 });
		expect(createAtlasCopcoToolDraft(atlas, higherMaximum).editorial.limitations.join(' ')).toContain('Aucune consommation à 7 bar');
	});
	it('rejects a missing identity, flow or pressure condition', () => {
		const row = atlas.rows[0];
		for (const patch of [{ mpn: 'KIT-123' }, { sourceUrl: 'https://example.org/' }, { catalogIdentity: { page: 3, line: row.catalogIdentity.line } }, { attributes: row.attributes.filter(a => !a.name.startsWith('Air consumption')) }, { model: 'EP TEST-MT-L' }]) expect(() => createAtlasCopcoToolDraft(atlas, { ...row, ...patch })).toThrow();
		expect(() => createAtlasCopcoToolDraft({ ...atlas, catalog: { ...atlas.catalog, referencePressureBar: 7 } }, row)).toThrow();
		const impulse = atlas.rows.find(r => r.attributes.some(a => a.name === 'Nominal working pressure'));
		expect(() => createAtlasCopcoToolDraft(atlas, { ...impulse, attributes: impulse.attributes.filter(a => a.name !== 'Nominal working pressure') })).toThrow();
	});
	it('requires Desoutter individual airflow to agree with the catalog and distinguishes a five metre hose specification', () => {
		const row = desoutter.rows[0], p = createDesoutterToolDraft(desoutter, row);
		expect(p.recommendedHose.maximumLengthMeters).toBe(5);
		expect(p.editorial.overview).toContain('à vide');
		for (const patch of [{ mpn: 'KIT-123' }, { sourceUrl: 'https://example.org/' }, { catalogIdentity: { ...row.catalogIdentity, airflowLps: '7' } }, { attributes: { ...row.attributes, FreeSpeedAirConsumption_unit_SI: undefined } }]) expect(() => createDesoutterToolDraft(desoutter, { ...row, ...patch })).toThrow();
		expect(() => createDesoutterToolDraft({ ...desoutter, catalog: { ...desoutter.catalog, pressurePage: 1 } }, row)).toThrow();
		for (const r of atlas.rows) expect(createAtlasCopcoToolDraft(atlas, r).recommendedHose?.maximumLengthMeters).toBeUndefined();
	});
});
