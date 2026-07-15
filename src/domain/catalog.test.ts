import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { toolTaxonomy } from '../data/taxonomy';
import { compressorSchema, toolProfileSchema } from './catalog';

describe('catalog schemas', () => {
	it('rejects a FAD point above the compressor maximum pressure', () => {
		const compressor = compressors[0];
		expect(() => compressorSchema.parse({
			...compressor,
			fadCurve: [{ pressureBar: compressor.maxPressureBar + 1, litersPerMinute: 1 }],
		})).toThrow('La pression FAD ne peut pas dépasser la pression maximale.');
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
