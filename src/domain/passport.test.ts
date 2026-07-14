import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { createPassportReport, decodePassportConfiguration, encodePassportConfiguration, PASSPORT_SCHEMA_VERSION } from './passport';

const configuration = {
	demands: [{ model: 'fixed-flow' as const, id: 'einhell-tc-pe-150', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }],
	mode: 'successive' as const, safetyMargin: 0.25, sessionMinutes: 30,
	hoseLengthMeters: 10, hoseInnerDiameterMm: 9, networkDistanceMeters: 14,
	fittingStandard: 'euro-7.2' as const, fittingCount: 4, filtration: 'particle' as const,
	usageProfile: 'sustained' as const, selectedCompressor: 'einhell-tc-ac-240-50-10-of', custom: {},
};

describe('CompatAir passport', () => {
	it('round-trips a bounded URL payload', () => {
		const encoded = encodePassportConfiguration(configuration);
		expect(encoded).toMatch(/^[A-Za-z0-9_-]+$/);
		expect(decodePassportConfiguration(encoded)).toEqual(configuration);
		expect(decodePassportConfiguration(`${encoded}!`)).toBeUndefined();
	});

	it('builds a versioned report from the public sizing engine and evidence', async () => {
		const report = await createPassportReport(configuration, compressors, tools, CATALOG_VERIFIED_AT, '2026-07-14T10:00:00.000Z');
		expect(report.schemaVersion).toBe(PASSPORT_SCHEMA_VERSION);
		expect(report.passportId).toMatch(/^[a-f0-9]{64}$/);
		expect(report.result.calculationVersion).toBe('1.1.0');
		expect(report.sources.length).toBeGreaterThanOrEqual(2);
		expect(report.warnings.join(' ')).toContain('ne sont pas soustraites');
	});
});
