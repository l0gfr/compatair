import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { toolTaxonomy, toolUsageForCategory } from '../data/taxonomy';
import { compressorSchema, toolProfileSchema } from './catalog';

describe('catalog schemas', () => {
	it('keeps an unknown tank distinct from an explicit zero and rejects invalid volumes', () => {
		const base = compressors[0];
		const { tankLiters: _tank, ...withoutTank } = base;
		expect(compressorSchema.parse(withoutTank).tankLiters).toBeUndefined();
		expect(compressorSchema.parse({ ...base, tankLiters: 0 }).tankLiters).toBe(0);
		for (const tankLiters of [null, -1, NaN, Infinity, '50']) {
			expect(() => compressorSchema.parse({ ...base, tankLiters })).toThrow();
		}
	});
	it('accepts a paint gun without assigning an undocumented HVLP or LVLP technology', () => {
		const base = tools.find(item => item.demandModel === 'variable-volume')!;
		const gun = toolProfileSchema.parse({ ...base, categoryId: 'pistolet-peinture', workingPressureBar: { min: 1.5, max: 2.5 } });
		expect(gun.categoryId).toBe('pistolet-peinture');
		expect(gun.workingPressureBar).toEqual({ min: 1.5, max: 2.5 });
		expect(toolUsageForCategory(gun.categoryId).id).toBe('peinture');
	});
	it('allows unknown pressure only for an explicitly incomplete demand and rejects invalid documented bounds', () => {
		const base = tools.find(item => item.demandModel === 'variable-volume')!;
		expect(toolProfileSchema.parse({ ...base, workingPressureBar: {} }).workingPressureBar).toEqual({});
		for (const workingPressureBar of [{ max: -1 }, { typical: Infinity }, { min: 7, typical: 6 }, { typical: 6, max: 5 }]) {
			expect(() => toolProfileSchema.parse({ ...base, workingPressureBar })).toThrow();
		}
		const fixed = tools.find(item => item.demandModel === 'fixed-flow')!;
		expect(() => toolProfileSchema.parse({ ...fixed, workingPressureBar: {} })).toThrow();
	});
	it('accepts explicitly unknown lubrication without fabricating a source', () => {
		const product = compressorSchema.parse({ ...compressors[0], oilType: 'unknown' });
		expect(product.oilType).toBe('unknown');
		expect(() => compressorSchema.parse({ ...product, oilType: 'maybe-oil' })).toThrow();
	});
	it('rejects a FAD point above the documented pressure ceiling', () => {
		const compressor = compressors[0];
		expect(() => compressorSchema.parse({
			...compressor,
			fadCurve: [{ pressureBar: compressor.maxPressureBar + 1, litersPerMinute: 1 }],
		})).toThrow('La pression FAD ne peut pas dépasser le plafond de pression documenté.');
	});

	it('rejects inverted nominal pressure and airflow ranges', () => {
		const tool = tools.find((item) => item.demandModel === 'fixed-flow');
		expect(tool).toBeDefined();
		expect(() => toolProfileSchema.parse({
			...tool,
			workingPressureBar: { min: 7, typical: 6, max: 5 },
			airflowLpm: { min: 300, typical: 200, max: 100 },
		})).toThrow();
	});

	it('rejects floating-point noise in a published airflow value', () => {
		const tool = tools.find((item) => item.demandModel === 'fixed-flow');
		expect(tool).toBeDefined();
		expect(() => toolProfileSchema.parse({
			...tool,
			airflowLpm: { min: 498, typical: 498.00000000000006, max: 499 },
		})).toThrow('Le débit publié ne peut pas contenir plus de trois décimales.');
		expect(() => toolProfileSchema.parse({
			...tool,
			airflowLpm: { min: 0.0001, typical: 0.0001, max: 0.0001 },
		})).toThrow('Le débit publié ne peut pas contenir plus de trois décimales.');
	});

	it('binds every tool to one controlled taxonomy entry', () => {
		const categoryIds = new Set(toolTaxonomy.map((category) => category.id));
		expect(categoryIds.size).toBe(toolTaxonomy.length);
		for (const tool of tools) expect(categoryIds.has(tool.categoryId)).toBe(true);
	});
});
