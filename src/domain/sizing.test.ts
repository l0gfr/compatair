import { describe, expect, it } from 'vitest';
import { sizeAirDemand } from './sizing';
import { barToPsi, cfmToLitersPerMinute, litersPerMinuteToCfm, psiToBar } from './units';

describe('unit conversions', () => {
	it('round-trips pressure', () => {
		expect(psiToBar(barToPsi(6))).toBeCloseTo(6, 10);
	});

	it('round-trips airflow', () => {
		expect(cfmToLitersPerMinute(litersPerMinuteToCfm(250))).toBeCloseTo(250, 10);
	});
});

describe('air demand sizing', () => {
	it('applies duty factor only to average demand', () => {
		expect(sizeAirDemand({ toolFlowLpm: 200, dutyFactor: 0.5, safetyMargin: 0.25 })).toEqual({
			peakFlowLpm: 200,
			averageFlowLpm: 100,
			recommendedFadLpm: 250,
			calculationVersion: '0.1.0',
		});
	});

	it('refuses physically invalid input', () => {
		expect(() => sizeAirDemand({ toolFlowLpm: -1, dutyFactor: 0.5 })).toThrow();
	});
});
