import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { createMultiBrandCompressor, createMultiBrandTool } from './multi-brand-catalog-import.mjs';
import { compressors, tools } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { evaluateCompatibility, interpolateFad } from '../../src/domain/compatibility';

const snapshot = JSON.parse(await readFile(new URL('../../src/data/imports/multi-brand-reviewed-2026-09-26.json', import.meta.url)));
describe('reviewed multi-brand expansion', () => {
	it('reconstructs every new product from the versioned manufacturer facts', () => {
		expect(snapshot.rows).toHaveLength(280);
		expect(snapshot.toolRows).toHaveLength(26);
		expect(compressors).toHaveLength(519);
		expect(tools).toHaveLength(1787);
		for (const row of snapshot.rows) {
			const p = compressorSchema.parse(createMultiBrandCompressor(snapshot, row));
			expect(compressors.find(c => c.id === p.id), row.mpn).toEqual(p);
		}
		for (const row of snapshot.toolRows) {
			const p = toolProfileSchema.parse(createMultiBrandTool(snapshot, row));
			expect(tools.find(t => t.id === p.id), row.mpn).toEqual({ ...p, category: toolCategoryLabel(p.categoryId) });
		}
	});
	it('keeps tank capacity and pressure conditions separate from model names', () => {
		const maxair = compressors.find(c => c.mpn === '460820');
		expect(maxair).toMatchObject({ tankLiters: 17, maxPressureBar: 10.5, fadCurve: [{ pressureBar: 6, litersPerMinute: 200 }] });
		expect(compressors.find(c => c.mpn === 'AFN0035')).toMatchObject({ tankLiters: 24, fadCurve: [{ pressureBar: 6, litersPerMinute: 80 }] });
		expect(compressors.find(c => c.mpn === '4152040007')).toMatchObject({ powerKw: 4, maxPressureBar: 10, fadCurve: [{ pressureBar: 10, litersPerMinute: 511 }] });
		expect(compressors.find(c => c.mpn === 'V77JT60FNM501')).toMatchObject({ powerKw: 2.2, tankLiters: 200, fadCurve: [{ pressureBar: 10, litersPerMinute: 240 }] });
		expect(compressors.find(c => c.mpn === '461960')).toMatchObject({ powerKw: 2.2, fadCurve: [{ pressureBar: 6, litersPerMinute: 267 }] });
	});
	it('does not extrapolate a 6 bar point to validate a 6.3 bar tool', () => {
		const tool = tools.find(t => t.demandModel === 'fixed-flow' && t.workingPressureBar.typical === 6.3);
		for (const mpn of ['460820', 'AFN0035']) {
			const c = compressors.find(c => c.mpn === mpn);
			expect(interpolateFad(c, 6.3)).toBeUndefined();
			expect(evaluateCompatibility(c, tool).verdict).toBe('insufficient_data');
		}
	});
	it('retains real multipoint flow and treats shot consumption as parametric', () => {
		const c = compressors.find(c => c.mpn === '5906166901');
		expect(c.fadCurve).toHaveLength(7);
		expect(interpolateFad(c, 6.3)).toBeCloseTo(47, 3);
		const t = tools.find(t => t.mpn === 'BT1855-E');
		expect(t).toMatchObject({ demandModel: 'per-action', airPerActionLiters: 1.33, workingPressureBar: { min: 4.8, typical: 5.6, max: 8.3 } });
		expect(t.airflowLpm).toBeUndefined();
		const lacme = tools.find(t => t.mpn === '340360');
		expect(lacme.workingPressureBar).toEqual({ min: 6, typical: 7, max: 7 });
		expect(lacme.editorial.verifiedFacts.join(' ')).toContain('borne haute documentée');
	});
	it('rejects absent evidence, invalid units and physically inconsistent curves', () => {
		const row = snapshot.rows[0];
		for (const patch of [{ maxPressureBar: 0 }, { tankLiters: -1 }, { powerKw: '2.2 kW' }, { fadCurve: [] }, { fadCurve: [{ pressureBar: 99, litersPerMinute: 10 }] }, { fadCurve: [{ pressureBar: 2, litersPerMinute: 10 }, { pressureBar: 3, litersPerMinute: 20 }] }, { intakeFlowLpm: 1 }]) expect(() => createMultiBrandCompressor(snapshot, { ...row, ...patch })).toThrow();
		expect(() => createMultiBrandCompressor({ ...snapshot, sources: [] }, row)).toThrow();
		for (const url of ['http://finicompressors.com/x', 'https://evil.example/x', 'https://s3.eu-west-1.amazonaws.com/other-bucket/x', 'https://finicompressors.com/x?token=test']) {
			expect(() => createMultiBrandCompressor({ ...snapshot, sources: snapshot.sources.map(s => s.id === row.sourceId ? { ...s, url } : s) }, row)).toThrow();
		}
		const t = snapshot.toolRows[0];
		expect(() => createMultiBrandTool(snapshot, { ...t, airflowLpm: undefined })).toThrow();
		expect(() => createMultiBrandTool(snapshot, { ...t, workingPressureBar: { min: 6, typical: 8, max: 7 } })).toThrow();
	});
});
