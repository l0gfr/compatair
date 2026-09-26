import { describe, expect, it } from 'vitest';
import { inflationFreeAirLiters, perActionAverageFlow, sizeAirDemand, sizeConfiguration, usableTankAir } from './sizing';
import { barToPsi, cfmToLitersPerMinute, litersPerMinuteToCfm, litersPerSecondToLitersPerMinute, psiToBar } from './units';
import { compressors, tools } from '../data/catalog';
import { evaluateCompatibility, interpolateFad, resolveAvailableFad } from './compatibility';

describe('unit conversions', () => {
	it('round-trips pressure', () => {
		expect(psiToBar(barToPsi(6))).toBeCloseTo(6, 10);
	});

	it('round-trips airflow', () => {
		expect(cfmToLitersPerMinute(litersPerMinuteToCfm(250))).toBeCloseTo(250, 10);
	});

	it('publishes decimal airflow conversions without binary floating-point noise', () => {
		expect(litersPerSecondToLitersPerMinute(8.3)).toBe(498);
		expect(litersPerSecondToLitersPerMinute(2.8)).toBe(168);
	});
});

describe('compatibility engine', () => {
	it('interpolates a documented FAD curve', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-240-50-10-of');
		expect(compressor).toBeDefined();
		expect(interpolateFad(compressor!, 5.5)).toBeCloseTo(91.5, 1);
	});

	it('does not substitute intake flow for missing FAD', () => {
		const compressor = compressors.find((item) => item.id === 'abac-pole-position-os20p');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		expect(evaluateCompatibility(compressor!, tool!).verdict).toBe('insufficient_data');
	});

	it('uses a higher-pressure FAD point only as an explicit conservative bound', () => {
		const compressor = compressors.find((item) => item.id === 'abac-atf-s-3-24');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('continuous');
		expect(result.availableFadLpm).toBe(150);
		expect(result.availableFadBasis).toBe('higher-pressure-bound');
		expect(result.availableFadReferencePressureBar).toBe(10);
		expect(result.warnings.at(-1)).toContain('Borne conservatrice');
	});

	it('does not turn a conservative bound below nominal demand into compatibility', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-basic-250-50-w');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('incompatible');
		expect(result.availableFadLpm).toBe(95);
		expect(result.availableFadBasis).toBe('higher-pressure-bound');
	});

	it('keeps the new Metabo industrial point bound to its documented pressure', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-mega-580-200-d');
		expect(compressor).toBeDefined();
		expect(interpolateFad(compressor!, 8.8)).toBe(360);
		expect(interpolateFad(compressor!, 7)).toBeUndefined();
		expect(resolveAvailableFad(compressor!, 7)).toMatchObject({ litersPerMinute: 360, basis: 'higher-pressure-bound', referencePressureBar: 8.8 });
	});

	it('keeps each ABAC industrial FAD bound to its documented pressure', () => {
		const atfS = compressors.find((item) => item.id === 'abac-atf-s-4-100');
		expect(atfS).toBeDefined();
		expect(interpolateFad(atfS!, 10)).toBe(170);
		expect(interpolateFad(atfS!, 7)).toBeUndefined();

		const expectedAtSevenBar = new Map([
			['abac-atl-5-5-270', 504],
			['abac-atf-5-5-270d', 492],
			['abac-atl-7-5-270', 702],
		]);
		for (const [id, fad] of expectedAtSevenBar) {
			const compressor = compressors.find((item) => item.id === id);
			expect(compressor).toBeDefined();
			expect(interpolateFad(compressor!, 7)).toBe(fad);
			expect(interpolateFad(compressor!, 10)).toBeUndefined();
		}
	});

	it('exposes exact 7 bar verdicts for the sourced 100 litre profiles', () => {
		const expectedAtSevenBar = new Map([
			['atlas-copco-ab25e100', 172],
			['atlas-copco-ab30e100', 305],
			['atlas-copco-ab40e100t', 340],
		]);
		for (const [id, fad] of expectedAtSevenBar) {
			const compressor = compressors.find((item) => item.id === id);
			expect(compressor).toBeDefined();
			expect(compressor!.tankLiters).toBe(100);
			expect(interpolateFad(compressor!, 7)).toBe(fad);
			expect(interpolateFad(compressor!, 6.3)).toBeUndefined();
			expect(resolveAvailableFad(compressor!, 6.3)).toMatchObject({ litersPerMinute: fad, basis: 'higher-pressure-bound', referencePressureBar: 7 });
		}
	});

	it('uses an 8 bar compressor point as a visible lower bound for a 6.2 bar ratchet', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-mega-400-50-w');
		const tool = tools.find((item) => item.id === 'metabo-drs-68-set');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('continuous');
		expect(result.availableFadBasis).toBe('higher-pressure-bound');
		expect(result.availableFadReferencePressureBar).toBe(8);
	});

	it('rejects the new air screwdriver when a comparable curve is below its demand', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-te-ac-430-50-10');
		const tool = tools.find((item) => item.id === 'metabo-ds-14');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('incompatible');
		expect(result.availableFadLpm).toBeCloseTo(202.67, 2);
	});

	it('exposes the expanded sourced catalog', () => {
		expect(compressors).toHaveLength(239);
		expect(tools).toHaveLength(1261);
	});

	it('keeps the new ABAC Tech flows bound to the documented 7 bar point', () => {
		const lubricated = compressors.find((item) => item.id === 'abac-atl-10-10-pp');
		const oilFree = compressors.find((item) => item.id === 'abac-atf-10-10-bm');
		expect(lubricated).toBeDefined();
		expect(oilFree).toBeDefined();
		expect(lubricated!.intakeFlowLpm).toBeUndefined();
		expect(interpolateFad(lubricated!, 7)).toBe(942);
		expect(interpolateFad(lubricated!, 10)).toBeUndefined();
		expect(interpolateFad(oilFree!, 7)).toBe(930);
		expect(interpolateFad(oilFree!, 10)).toBeUndefined();
	});

	it('preserves the Chicago Pneumatic load flow and 6.3 bar scope', () => {
		const impact = tools.find((item) => item.id === 'chicago-pneumatic-cp6763-d18d');
		const drill = tools.find((item) => item.id === 'chicago-pneumatic-cp785qc');
		expect(impact?.demandModel).toBe('fixed-flow');
		expect(drill?.demandModel).toBe('fixed-flow');
		if (impact?.demandModel !== 'fixed-flow' || drill?.demandModel !== 'fixed-flow') throw new Error('Profils Chicago Pneumatic fixes attendus.');
		expect(impact.workingPressureBar).toEqual({ min: 6.3, typical: 6.3, max: 6.3 });
		expect(impact.airflowLpm).toEqual({ min: 1158, typical: 1158, max: 1158 });
		expect(drill.airflowLpm).toEqual({ min: 360, typical: 360, max: 360 });
	});

	it('validates a new multipoint profile only from its interpolated FAD', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-420-50-10-v');
		const tool = tools.find((item) => item.id === 'einhell-tc-pp-220');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('continuous');
		expect(result.availableFadLpm).toBeCloseTo(161.67, 2);
		expect(result.warnings).toEqual([]);
	});

	it('keeps the margin warning for a new profile that only covers nominal flow', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-tc-ac-270-50-8');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('continuous');
		expect(result.availableFadLpm).toBeCloseTo(105.83, 2);
		expect(result.warnings[0]).toContain('marge recommandée de 25 %');
	});

	it('rejects a continuous tool when average flow is unavailable', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-te-ac-135-24-silent-plus');
		const tool = tools.find((item) => item.id === 'metabo-ssp-1000');
		expect(evaluateCompatibility(compressor!, tool!).verdict).toBe('incompatible');
	});

	it('never degrades the verdict when documented flow increases', () => {
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150')!;
		const low = compressors.find((item) => item.id === 'einhell-te-ac-135-24-silent-plus')!;
		const high = compressors.find((item) => item.id === 'einhell-te-ac-430-90-10')!;
		const rank = { insufficient_data: 0, incompatible: 1, intermittent: 1, continuous: 2 };
		expect(rank[evaluateCompatibility(high, tool).verdict]).toBeGreaterThanOrEqual(rank[evaluateCompatibility(low, tool).verdict]);
	});
});

describe('air demand sizing', () => {
	it('applies the explicit CompatAir safety margin', () => {
		expect(sizeAirDemand({ toolFlowLpm: 200, safetyMargin: 0.25 })).toEqual({
			peakFlowLpm: 200,
			recommendedFadLpm: 250,
			calculationVersion: '1.3.0',
		});
	});

	it('refuses physically invalid input', () => {
		expect(() => sizeAirDemand({ toolFlowLpm: -1 })).toThrow();
	});

	it('aggregates simultaneous tools and their explicit duty factors', () => {
		const result = sizeConfiguration({
			demands: [
				{ id: 'a', flowLpm: 100, pressureBar: 6, quantity: 2, dutyFactor: .5 },
				{ id: 'b', flowLpm: 80, pressureBar: 7, quantity: 1, dutyFactor: .25 },
			],
			mode: 'simultaneous',
		});
		expect(result.peakFlowLpm).toBe(280);
		expect(result.averageFlowLpm).toBe(120);
		expect(result.requiredPressureBar).toBe(7);
		expect(result.recommendedFadLpm).toBe(350);
	});

	it('adds only explicitly measured leakage and pressure drop', () => {
		const result = sizeConfiguration({
			demands: [{ id: 'tool', flowLpm: 100, pressureBar: 6 }],
			measuredLeakLpm: 15,
			measuredPressureDropBar: .7,
			supplyPressureBar: 6.5,
			compressor: { maxPressureBar: 8, availableFadLpm: 150 },
		});
		expect(result).toMatchObject({ peakFlowLpm: 115, averageFlowLpm: 115, toolPressureBar: 6, requiredPressureBar: 6.7, measuredLeakLpm: 15, measuredPressureDropBar: .7, availablePressureBar: 6.5, verdict: 'incompatible', limitingFactor: 'pressure' });
	});

	it('rejects a measured drop that pushes total required pressure beyond the supported range', () => {
		expect(() => sizeConfiguration({ demands: [{ id: 'tool', flowLpm: 100, pressureBar: 30 }], measuredPressureDropBar: 25 })).toThrow('limite de calcul de 50 bar');
	});

	it('returns intermittent only when tank cut-in and cut-out are explicit', () => {
		const result = sizeConfiguration({
			demands: [{ id: 'tool', flowLpm: 200, pressureBar: 6, dutyFactor: .5 }],
			compressor: { maxPressureBar: 8, availableFadLpm: 150, tankLiters: 50, cutInPressureBar: 6, cutOutPressureBar: 8 },
		});
		expect(result.verdict).toBe('intermittent');
		expect(result.usableTankAirLiters).toBe(100);
		expect(result.estimatedWorkMinutes).toBe(2);
	});

	it('uses only the pressure interval as free-air reserve', () => {
		expect(usableTankAir(50, 6, 8)).toBe(100);
	});

	it('converts documented air per action and explicit cadence to an average flow', () => {
		expect(perActionAverageFlow(0.66, 30, 2)).toBeCloseTo(39.6, 10);
		const result = sizeConfiguration({
			demands: [{
				model: 'per-action', id: 'stapler', litersPerAction: 0.66,
				actionsPerMinute: 30, pressureBar: 6.3, quantity: 2,
			}],
		});
		expect(result.peakFlowLpm).toBeCloseTo(39.6, 10);
		expect(result.averageFlowLpm).toBeCloseTo(39.6, 10);
		expect(result.flowBasis).toBe('derived-average');
	});

	it('converts a gauge-pressure increase to equivalent free air at one standard atmosphere', () => {
		expect(inflationFreeAirLiters(50, 0, 2)).toBeCloseTo(98.6923, 4);
		const result = sizeConfiguration({
			demands: [{
				model: 'inflation', id: 'inflator', volumeLiters: 50,
				initialPressureBar: 0, targetPressureBar: 2, targetMinutes: 2,
			}],
		});
		expect(result.peakFlowLpm).toBeCloseTo(49.34616, 5);
		expect(result.requiredPressureBar).toBe(2);
		expect(result.flowBasis).toBe('derived-average');
	});

	it('rejects an inflation target that does not exceed the initial pressure', () => {
		expect(() => sizeConfiguration({
			demands: [{
				model: 'inflation', id: 'inflator', volumeLiters: 10,
				initialPressureBar: 2.5, targetPressureBar: 2, targetMinutes: 1,
			}],
		})).toThrow();
	});
});
