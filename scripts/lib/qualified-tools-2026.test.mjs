import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildQualifiedTools } from './qualified-tools-2026.mjs';
import { compressors, tools } from '../../src/data/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/qualified-tools-2026-09-27.json', import.meta.url), 'utf8'));
describe('800 tools with usable, explicit air demand', () => {
	it('reproduces the imported records and provides a proven conclusive pair for every tool', () => {
		const built = buildQualifiedTools(snapshot).tools;
		expect(built).toHaveLength(800);
		for (const product of built) {
			expect(tools.find(tool => tool.id === product.id), product.id).toMatchObject({ ...product, category: toolCategoryLabel(product.categoryId) });
			expect(product.airflowBasis).toBeUndefined();
			expect(compressors.some(compressor => evaluateCompatibility(compressor, product).verdict === 'continuous'), product.id).toBe(true);
		}
	});
	it.each(['units', 'flow', 'pressure', 'average', 'source', 'identity'])('rejects an unsupported alteration: %s', change => {
		const copy = structuredClone(snapshot), row = copy.rows.find(item => item.brand === 'PFERD');
		if (change === 'units') { const raw = JSON.parse(row.rawLine); raw.fields['Consommation d’air, sous charge'] = '10 cfm'; row.rawLine = JSON.stringify(raw); }
		if (change === 'flow') row.airflowLpm *= 4;
		if (change === 'pressure') row.workingPressureBar.typical = 7;
		if (change === 'average') row.airflowBasis = 'average';
		if (change === 'source') copy.sources.find(source => source.id === row.sourceId).url = 'https://fr.pferd.com/fr/fiche?redirect=https://example.com';
		if (change === 'identity') row.mpn = 'unknown';
		expect(() => buildQualifiedTools(copy)).toThrow();
	});
	it('rejects crossed Sioux columns and uses the greater loaded or free-speed consumption', () => {
		const copy = structuredClone(snapshot), row = copy.rows[0], raw = JSON.parse(row.rawLine);
		raw.pairs[0].litersPerSecondColumn = 0; row.rawLine = JSON.stringify(raw);
		expect(() => buildQualifiedTools(copy)).toThrow();
		const pferd = buildQualifiedTools(snapshot).tools.find(tool => tool.mpn === '80105021');
		expect(pferd.airflowLpm.typical).toBe(270);
	});
	it('uses the PO family continuous-duty evidence without extending it to unrelated pistons', () => {
		const family = compressors.filter(compressor => compressor.brand === 'BOGE');
		expect(family).toHaveLength(18);
		for (const compressor of family) {
			expect(compressor.dutyCycle).toBe(1);
			expect(compressor.fieldSources.dutyCycle).toContain('boge-po-continuous-duty-20260927');
		}
		expect(compressors.some(compressor => compressor.brand === 'Schneider' && compressor.dutyCycle === undefined)).toBe(true);
	});
});
