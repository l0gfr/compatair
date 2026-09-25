import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { cpCatalogNumber, createCpPdfToolDraft } from './cp-pdf-catalog-import.mjs';
import { tools } from '../../src/data/catalog';
const snapshot = JSON.parse(await readFile(new URL('../../src/data/imports/chicago-pneumatic-industrial-2026-08-reviewed-2026-09-25.json', import.meta.url)));

describe('CP industrial catalog reviewed import', () => {
	it('rejects ambiguous numbers and missing or zero consumption', () => {
		for (const raw of ['0', '-', '12 000', '1,2', '6.3 bar', undefined]) expect(() => cpCatalogNumber(raw)).toThrow();
		expect(cpCatalogNumber('12,000')).toBe(12_000);
		expect(cpCatalogNumber('7.6')).toBe(7.6);
		for (const value of ['0', '-']) expect(() => createCpPdfToolDraft(snapshot, { ...snapshot.rows[0], loadedAirLs: value })).toThrow();
	});
	it('rejects changed sources, units and pressure notes', () => {
		for (const patch of [{ sourceUrl: 'https://example.org/catalog.pdf' }, { sourceSha256: '' }, { edition: 'unknown' }]) expect(() => createCpPdfToolDraft({ ...snapshot, ...patch }, snapshot.rows[0])).toThrow();
		for (const patch of [{ workingPressureBar: '7' }, { hoseInnerMm: '13' }, { page: 1 }, { model: 'CP100 Kit' }, { sourceNote: '' }, { loadedAirLs: '999' }]) expect(() => createCpPdfToolDraft(snapshot, { ...snapshot.rows[0], ...patch })).toThrow();
	});
	it('retains 250 distinct MPNs and exact conversion from the loaded column', () => {
		expect(snapshot.rows).toHaveLength(250);
		expect(new Set(snapshot.rows.map(r => r.mpn)).size).toBe(250);
		for (const row of snapshot.rows) {
			const draft = createCpPdfToolDraft(snapshot, row);
			const actual = tools.find(t => t.id === draft.id);
			expect(actual, row.model).toMatchObject({ model: row.model, mpn: row.mpn, categoryId: row.categoryId, specifications: draft.specifications, workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: draft.airflowLpm });
			expect(actual.airflowLpm.typical).toBe(Number((cpCatalogNumber(row.loadedAirLs) * 60).toFixed(3)));
			expect(actual.evidence[0].sourceUrl).toBe(`${snapshot.sourceUrl}#page=${row.page}`);
			expect(actual.recommendedHose).toEqual({ innerDiameterMm: 10 });
		}
	});
	it('keeps free-speed consumption separate even when it exceeds load', () => {
		const row = snapshot.rows.find(r => r.model === 'CP3510');
		const p = createCpPdfToolDraft(snapshot, row);
		expect(p.airflowLpm.typical).toBe(456);
		expect(p.specifications).toContainEqual(expect.objectContaining({ label: 'Consommation à vide, distincte du débit en charge', value: '552 L/min' }));
		expect(p.editorial.limitations.join(' ')).toContain('dépasse le seuil en charge');
		expect(() => createCpPdfToolDraft(snapshot, { ...row, loadedAirLs: row.freeAirLs })).toThrow();
	});
	it('does not confuse impact rate, speed, or bundled versions', () => {
		const p = createCpPdfToolDraft(snapshot, snapshot.rows.find(r => r.model === 'CP9542'));
		expect(p.specifications[0].value).toBe('8 900 tr/min');
		expect(p.airflowLpm.typical).toBe(366);
		for (const model of ['CP7202D', 'CP3000-600CR', 'CP3000-600CR 3mm', 'CP5080-3260D12K', 'CP5080-4200H18K', 'CP8232-QC', 'CP7763-6', 'CP9790C']) expect(snapshot.rows.some(r => r.model === model)).toBe(false);
	});
	it('preserves meaningful dimensions and distinguishes sanding movements', () => {
		const p = createCpPdfToolDraft(snapshot, snapshot.rows.find(r => r.model === 'CP5506-R6'));
		expect(p.categoryId).toBe('ponceuse-vibrante');
		expect(p.specifications).toContainEqual(expect.objectContaining({ label: 'Dimension du plateau', value: '170 x 93 mm' }));
		expect(snapshot.rows.find(r => r.model === 'CP5303-R5').categoryId).toBe('ponceuse-vibrante');
	});
});
