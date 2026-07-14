import { describe, expect, it } from 'vitest';
import { inflationFreeAirLiters, perActionAverageFlow, sizeAirDemand, sizeConfiguration, usableTankAir } from './sizing';
import { barToPsi, cfmToLitersPerMinute, litersPerMinuteToCfm, psiToBar } from './units';
import { compressors, tools } from '../data/catalog';
import { evaluateCompatibility, interpolateFad } from './compatibility';

describe('unit conversions', () => {
	it('round-trips pressure', () => {
		expect(psiToBar(barToPsi(6))).toBeCloseTo(6, 10);
	});

	it('round-trips airflow', () => {
		expect(cfmToLitersPerMinute(litersPerMinuteToCfm(250))).toBeCloseTo(250, 10);
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

	it('does not reuse a single FAD point at another pressure', () => {
		const compressor = compressors.find((item) => item.id === 'abac-atf-s-3-24');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		expect(evaluateCompatibility(compressor!, tool!).verdict).toBe('insufficient_data');
	});

	it('keeps the new Metabo single-point profiles strict at 6.3 bar', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-basic-250-50-w');
		const tool = tools.find((item) => item.id === 'einhell-tc-pe-150');
		expect(evaluateCompatibility(compressor!, tool!).verdict).toBe('insufficient_data');
	});

	it('keeps the new Metabo industrial point bound to its documented pressure', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-mega-580-200-d');
		expect(compressor).toBeDefined();
		expect(interpolateFad(compressor!, 8.8)).toBe(360);
		expect(interpolateFad(compressor!, 7)).toBeUndefined();
	});

	it('keeps the new ABAC triphase FAD values bound to 10 bar', () => {
		const expectedAtTenBar = new Map([
			['abac-atf-s-4-100', 170],
			['abac-atl-5-5-270', 504],
			['abac-atf-5-5-270d', 492],
		]);
		for (const [id, fad] of expectedAtTenBar) {
			const compressor = compressors.find((item) => item.id === id);
			expect(compressor).toBeDefined();
			expect(interpolateFad(compressor!, 10)).toBe(fad);
			expect(interpolateFad(compressor!, 7)).toBeUndefined();
		}
	});

	it('does not reuse an 8 bar compressor point for a 6.2 bar ratchet', () => {
		const compressor = compressors.find((item) => item.id === 'metabo-mega-400-50-w');
		const tool = tools.find((item) => item.id === 'metabo-drs-68-set');
		expect(evaluateCompatibility(compressor!, tool!).verdict).toBe('insufficient_data');
	});

	it('rejects the new air screwdriver when a comparable curve is below its demand', () => {
		const compressor = compressors.find((item) => item.id === 'einhell-te-ac-430-50-10');
		const tool = tools.find((item) => item.id === 'metabo-ds-14');
		const result = evaluateCompatibility(compressor!, tool!);
		expect(result.verdict).toBe('incompatible');
		expect(result.availableFadLpm).toBeCloseTo(202.67, 2);
	});

	it('exposes the expanded sourced catalog', () => {
		expect(compressors).toHaveLength(35);
		expect(tools).toHaveLength(12);
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
			calculationVersion: '1.1.0',
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
