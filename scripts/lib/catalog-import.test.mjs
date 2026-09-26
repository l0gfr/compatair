import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { createCpToolDraft, sourceQuantity } from './cp-catalog-import.mjs';
import { createSchneiderDraft, germanQuantity } from './schneider-catalog-import.mjs';
import { compressors, tools } from '../../src/data/catalog';
import { evaluateCompatibility } from '../../src/domain/compatibility';
const cp = JSON.parse(await readFile(new URL('../../src/data/imports/chicago-pneumatic-2026-09-25.json', import.meta.url)));
const schneider = JSON.parse(await readFile(new URL('../../src/data/imports/schneider-2025-reviewed-2026-09-25.json', import.meta.url)));

describe('reviewed manufacturer imports', () => {
	it('rejects zero, missing, ambiguous and mismatched flow units', () => {
		for (const raw of ['0 l/s', '-1 l/s', '32 1/sNl', '25 L/min', '9,5 l/s', undefined, 'NaN l/s']) expect(() => sourceQuantity(raw, 'l/s')).toThrow();
		expect(sourceQuantity('8.3 l/s','l/s')).toBe(8.3);
	});
	it('does not replace missing loaded consumption with free-speed consumption', () => {
		const r = structuredClone(cp[0]);
		r.attributes.AirConsumptionAtLoad_unit_SI.value = '0 l/s';
		r.attributes.FreeSpeedAirConsumption_unit_SI = { value: '25 l/s' };
		expect(() => createCpToolDraft(r)).toThrow();
	});
	it('requires an exact manufacturer reference and excludes kits', () => {
		for (const patch of [{sourceUrl:'https://example.com/test'}, {sourceUrl:`${cp[0].sourceUrl}?tracking=1`}, {sku:'invalid'}, {model:'CP123 Kit'}, {categoryId:'unknown'}, {sourceSha256:''}]) expect(() => createCpToolDraft({...cp[0],...patch})).toThrow();
	});
	it('keeps the exact load conversion for all 101 new tools', () => {
		expect(cp).toHaveLength(101);
		for (const r of cp) {
			const draft = createCpToolDraft(r);
			const actual = tools.find(t => t.id === draft.id);
			expect(actual, r.model).toMatchObject({ mpn: r.sku, categoryId: r.categoryId, airflowLpm: draft.airflowLpm, workingPressureBar: draft.workingPressureBar, recommendedHose: draft.recommendedHose });
			expect(actual.airflowLpm.typical).toBe(Number((Number(r.attributes.AirConsumptionAtLoad_unit_SI.value.split(' ')[0]) * 60).toFixed(3)));
		}
	});
	it('parses German thousands and decimal separators without mixing them', () => {
		expect(germanQuantity('1.070')).toBe(1070);
		expect(germanQuantity('5,5')).toBe(5.5);
		for (const raw of ['1.07','5.5','1,2,3','0','-1','10 bar']) expect(() => germanQuantity(raw)).toThrow();
	});
	it('keeps the 99 table rows, explicit pressure conditions and distinct equipment', () => {
		expect(schneider.rows).toHaveLength(99);
		for (const r of schneider.rows) {
			const draft = createSchneiderDraft(schneider,r);
			expect(compressors.find(c => c.id === draft.id), r.model).toMatchObject({mpn:r.mpn, tankLiters:draft.tankLiters, fadCurve:draft.fadCurve, maxPressureBar:draft.maxPressureBar, powerKw:draft.powerKw, weightKg:draft.weightKg});
		}
		const standard = compressors.find(c=>c.mpn==='1121580537');
		expect(standard).toMatchObject({tankLiters:90,maxPressureBar:10,fadCurve:[{pressureBar:9,litersPerMinute:520}]});
		expect(compressors.find(c=>c.mpn==='1121560024')).toMatchObject({tankLiters:180});
		expect(compressors.find(c=>c.mpn==='1129741354')).toMatchObject({tankLiters:24,fadCurve:[]});
		expect(compressors.find(c=>c.mpn==='DGKH362000')).toMatchObject({powerKw:4.4,fadCurve:[{pressureBar:5,litersPerMinute:500}]});
	});
	it('fails closed for missing pressure and for a tool above the documented FAD pressure', () => {
		const tool = tools.find(t=>t.id===createCpToolDraft(cp[0]).id);
		for (const mpn of ['1129741354','DGKH362000']) expect(evaluateCompatibility(compressors.find(c=>c.mpn===mpn),tool).verdict).toBe('insufficient_data');
	});
	it('rejects a shifted column, unreviewed page, or pressure basis', () => {
		const r = schneider.rows[0];
		for (const patch of [{rawColumns:r.rawColumns.slice(1)}, {flowBasis:'max-pressure'}, {page:1}, {oilEvidence:undefined}]) expect(()=>createSchneiderDraft(schneider,{...r,...patch})).toThrow();
	});
	it('has no duplicate brand and manufacturer reference in the 2000 products', () => {
		const products=[...compressors,...tools];
		expect(products).toHaveLength(2000);
		const keys=products.filter(p=>p.mpn).map(p=>`${p.brand.toLowerCase()}|${p.mpn.toLowerCase()}`);
		expect(new Set(keys).size).toBe(keys.length);
	});
});
