import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility, compatibilityWithoutCompressor } from '../../server/air-compatibility.mjs';
import { parseCatalogProductSource } from './catalog-tooling.mjs';

const root = new URL('../../', import.meta.url);
const report = JSON.parse(readFileSync(new URL('docs/editorial/indexation-review-2026-10-31-supplement.json', root), 'utf8'));
const pages = report.pages.filter(page => page.decision === 'approved' && page.kind !== 'guide');
const products = pages.map(page => ({ page, product: (page.kind === 'tool' ? toolProfileSchema : compressorSchema).parse(parseCatalogProductSource(page.kind === 'tool' ? 'tools' : 'compressors', readFileSync(new URL(page.file, root), 'utf8'))) }));
const compressors = products.filter(entry => entry.page.kind === 'compressor').map(entry => entry.product);
const tools = products.filter(entry => entry.page.kind === 'tool').map(entry => entry.product);
const runtime = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog(compressors, tools, '2026-10-31', 'a'.repeat(64)))));

// Deliberately hypothetical test supply: a generous known supply cannot turn an
// average, free-speed or unqualified tool consumption into a qualified demand.
const supply = { ...compressors[0], id: 'supplement-test-supply', maxPressureBar: 30, maxPressureBasis: 'explicit-maximum-working-pressure', fadCurve: [{ pressureBar: 0, litersPerMinute: 100_000 }, { pressureBar: 30, litersPerMinute: 100_000 }], dutyCycle: 1, confidence: 'A' };
const demand = { ...tools.find(tool => tool.demandModel === 'fixed-flow' && tool.airflowBasis === undefined), id: 'supplement-test-demand', workingPressureBar: { min: 1, typical: 1, max: 1 }, airflowLpm: { min: 1, typical: 1, max: 1 } };

describe('technical qualification of the explicitly approved supplementary cohort', () => {
	it('retains the reviewed product counts and a real document for every admission', () => {
		expect(compressors).toHaveLength(51);
		expect(tools).toHaveLength(180);
		for (const { page } of products) {
			expect(page.sourceReadings.some(source => source.usedForAdmission && source.httpStatus === 200 && source.complete && /^[a-f0-9]{64}$/.test(source.bodySha256))).toBe(true);
		}
	});
	it('preserves every engine input and verdict through the actual runtime projection', () => {
		for (const tool of tools) {
			const projected = runtime.tools.find(entry => entry.id === tool.id);
			for (const field of ['demandModel', 'workingPressureBar', 'airflowLpm', 'airflowBasis', 'airPerActionLiters', 'demandExplanation']) expect(projected[field], `${tool.id}:${field}`).toEqual(tool[field]);
			expect(evaluateCompatibility(supply, projected)).toEqual(evaluateCompatibility(supply, tool));
			const independent = compatibilityWithoutCompressor(tool);
			if (independent) expect(evaluateCompatibility(supply, projected).verdict, tool.id).toBe('insufficient_data');
			else expect(evaluateCompatibility(supply, projected).verdict, tool.id).toBe('continuous');
		}
		for (const compressor of compressors) {
			const projected = runtime.compressors.find(entry => entry.id === compressor.id);
			for (const field of ['fadCurve', 'dutyCycle', 'tankLiters', 'maxPressureBar', 'maxPressureBasis']) expect(projected[field], `${compressor.id}:${field}`).toEqual(compressor[field]);
			expect(evaluateCompatibility(projected, demand)).toEqual(evaluateCompatibility(compressor, demand));
			if (!compressor.fadCurve.length || compressor.dutyCycle === undefined) expect(evaluateCompatibility(projected, demand).verdict, compressor.id).toBe('insufficient_data');
		}
	});
	it('keeps the explicit Gentilin and Bambi points, rates and distinctions', () => {
		const clinic = compressors.filter(entry => entry.brand === 'Gentilin');
		expect(clinic).toHaveLength(2);
		for (const entry of clinic) {
			expect(entry.fadCurve).toEqual([{ pressureBar: 5, litersPerMinute: 120 }, { pressureBar: 8, litersPerMinute: 80 }]);
			expect(entry.dutyCycle).toBe(1);
		}
		const bambi = compressors.filter(entry => entry.brand === 'Bambi');
		expect(bambi.map(entry => entry.tankLiters).sort((a, b) => a - b)).toEqual([4, 50]);
		for (const entry of bambi) { expect(entry.dutyCycle).toBe(.6); expect(entry.fadCurve).toHaveLength(8); }
	});
});
