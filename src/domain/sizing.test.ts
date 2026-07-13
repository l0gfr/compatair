import { describe, expect, it } from 'vitest';
import { sizeAirDemand, sizeConfiguration, usableTankAir } from './sizing';
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
			calculationVersion: '1.0.0',
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
});
