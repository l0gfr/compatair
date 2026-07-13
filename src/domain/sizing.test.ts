import { describe, expect, it } from 'vitest';
import { sizeAirDemand } from './sizing';
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
		const rank = { insufficient_data: 0, incompatible: 1, continuous: 2 };
		expect(rank[evaluateCompatibility(high, tool).verdict]).toBeGreaterThanOrEqual(rank[evaluateCompatibility(low, tool).verdict]);
	});
});

describe('air demand sizing', () => {
	it('applies the explicit CompatAir safety margin', () => {
		expect(sizeAirDemand({ toolFlowLpm: 200, safetyMargin: 0.25 })).toEqual({
			peakFlowLpm: 200,
			recommendedFadLpm: 250,
			calculationVersion: '0.2.0',
		});
	});

	it('refuses physically invalid input', () => {
		expect(() => sizeAirDemand({ toolFlowLpm: -1 })).toThrow();
	});
});
