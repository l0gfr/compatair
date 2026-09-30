import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { buildDocumentedExpansion } from './documented-expansion-2026-09-30.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/documented-expansion-2026-09-30.json', import.meta.url)));
const batch = buildDocumentedExpansion(snapshot);

describe('documented expansion, September 30', () => {
	it('keeps complete real identities and the requested counts', () => {
		expect(batch.compressors).toHaveLength(200);
		expect(batch.tools).toHaveLength(1000);
		expect(new Set([...batch.compressors, ...batch.tools].map(p => p.id)).size).toBe(1200);
		expect(batch.compressors.filter(p => p.brand === 'ALMiG').every(p => p.mpn === undefined)).toBe(true);
		for (const p of batch.compressors.filter(p => p.brand === 'ALMiG')) {
			expect(p.oilType).toBe('unknown');
			expect(p.fieldSources.oilType).toBeUndefined();
			expect(p.specifications.find(s => s.label === 'Technologie').value).not.toContain('lubrifiée');
		}
		expect(new Set(batch.tools.map(p => p.brand))).toEqual(new Set(['Top Cat', 'URYU', 'NPK']));
		expect(new Set(batch.tools.map(p => p.label)).size).toBe(1000);
		for (const p of [...batch.compressors, ...batch.tools]) {
			if (p.mpn) expect(p.fieldSources.mpn?.length).toBeGreaterThan(0);
			for (const e of p.evidence) expect(e.id).toMatch(/^[a-z0-9-]+$/);
		}
	});
	it('separates fixed-speed pressure variants and keeps VSD minima outside the FAD curve', () => {
		const p = batch.compressors.find(p => p.mpn === '310001');
		expect(p.fadCurve).toEqual([{ pressureBar: 10, litersPerMinute: 410 }]);
		const combi = batch.compressors.find(p => p.model === 'COMBI XP 18 500D');
		expect(combi.tankLiters).toBe(500);
		expect(combi.fadCurve).toEqual([{ pressureBar: 8, litersPerMinute: 3250 }, { pressureBar: 10, litersPerMinute: 2730 }, { pressureBar: 13, litersPerMinute: 1950 }]);
		expect(combi.specifications.find(s => s.label.includes('minimal')).value).toContain('580 L/min à 8 bar');
	});
	it('converts a documented maximum and never promotes an average into a continuous demand', () => {
		const top = batch.tools.find(p => p.model === '300D3mK;8250;D3/8');
		expect(top.airflowLpm.typical).toBe(708);
		expect(top.workingPressureBar.typical).toBe(6.2);
		const uryu = batch.tools.find(p => p.brand === 'URYU');
		expect(uryu.airflowBasis).toBe('average');
		const ample = batch.compressors.find(p => p.model === 'COMBI XP 22 500D');
		expect(evaluateCompatibility(ample, uryu).verdict).toBe('insufficient_data');
		expect(evaluateCompatibility(ample, top).verdict).toBe('continuous');
	});
	it('rejects changed pressure columns, unsupported units, average erasure and service outside the reviewed series', () => {
		for (const mutate of [s => { s.compressors[0].pressureBar = 15; }, s => { s.tools[0].flowUnit = 'cfm'; }, s => { s.tools.find(p => p.brand === 'URYU').flowBasis = 'maximum'; }, s => { s.compressors[0].model = 'RS-PRO 55.0'; }, s => { s.sources[0].sha256 = 'missing'; }]) {
			const changed = structuredClone(snapshot); mutate(changed);
			expect(() => buildDocumentedExpansion(changed)).toThrow();
		}
	});
});
