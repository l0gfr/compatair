import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { assessCommissioning, commissioningRecordSchema, configurationFromCommissioning } from './commissioning';
import { createPassportEnvelope, createPassportReport, decodePassportEnvelope, encodePassportEnvelope, reportFromPassportEnvelope } from './passport';

const baseConfiguration = {
	demands: [{ model: 'fixed-flow' as const, id: 'einhell-tc-pe-150', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }],
	mode: 'successive' as const, safetyMargin: 0.25, sessionMinutes: 30,
	fittingStandard: 'unknown' as const, filtration: 'unknown' as const,
	usageProfile: 'sustained' as const, selectedCompressor: 'kaeser-eurocomp-epc-440-100', custom: {},
};

const completeRecord = {
	version: '1.0.0' as const, observedOn: '2026-07-19', sourcePressureBar: 7, toolPressureBar: 6.5,
	measuredLeakLpm: 0, hoseLengthMeters: 10, hoseInnerDiameterMm: 9, networkDistanceMeters: 14,
	fittingStandard: 'euro-7.2' as const, fittingCount: 4, filtration: 'particle' as const,
	siteLocationChecked: true, manufacturerInstructionsLocated: true, representativeUseObserved: true,
};

describe('CompatAir commissioning assessment', () => {
	it('derives the measured pressure drop and keeps the receipt in the Passport configuration', () => {
		const configuration = configurationFromCommissioning(baseConfiguration, completeRecord);
		expect(configuration.supplyPressureBar).toBe(7);
		expect(configuration.measuredPressureDropBar).toBe(0.5);
		expect(configuration.measuredLeakLpm).toBe(0);
		expect(configuration.commissioning).toEqual(completeRecord);
	});

	it('rejects an impossible pair of pressure measurements', () => {
		expect(() => commissioningRecordSchema.parse({ ...completeRecord, sourcePressureBar: 6, toolPressureBar: 7 })).toThrow('ne peut pas dépasser');
	});

	it('concludes only when essential measurements and checks are explicit', async () => {
		const configuration = configurationFromCommissioning(baseConfiguration, completeRecord);
		const report = await createPassportReport(configuration, compressors, tools, CATALOG_VERIFIED_AT);
		const assessment = assessCommissioning(report, completeRecord);
		expect(assessment.verdict).toBe('ready');
		expect(assessment.counts).toEqual({ completed: 9, total: 9 });
		expect(assessment.comparison.pressureDropBar).toBe(0.5);
		expect(assessment.checks.find((check) => check.id === 'installed-fittings')?.value).toContain('Euro 7,2 mm');
		expect(assessment.checks.find((check) => check.id === 'air-treatment')?.value).toBe('filtration particulaire');
	});

	it('returns insufficient data without the loaded test and leak measurement', async () => {
		const partialRecord = { ...completeRecord, sourcePressureBar: undefined, toolPressureBar: undefined, measuredLeakLpm: undefined, representativeUseObserved: false };
		const configuration = configurationFromCommissioning(baseConfiguration, partialRecord);
		const report = await createPassportReport(configuration, compressors, tools, CATALOG_VERIFIED_AT);
		const assessment = assessCommissioning(report, partialRecord);
		expect(assessment.verdict).toBe('insufficient_data');
		expect(assessment.actions.length).toBeGreaterThan(0);
	});

	it('requires correction when the measured pressure at the tool is below the published need', async () => {
		const failingRecord = { ...completeRecord, sourcePressureBar: 6.5, toolPressureBar: 5.5 };
		const configuration = configurationFromCommissioning(baseConfiguration, failingRecord);
		const report = await createPassportReport(configuration, compressors, tools, CATALOG_VERIFIED_AT);
		const assessment = assessCommissioning(report, failingRecord);
		expect(report.result).toMatchObject({ verdict: 'incompatible', limitingFactor: 'pressure' });
		expect(assessment.verdict).toBe('correction_required');
		expect(assessment.primaryFinding).toContain('pression mesurée au poste');
	});

	it('keeps an explicit reserve when a non-calculation control is missing', async () => {
		const record = { ...completeRecord, manufacturerInstructionsLocated: false };
		const configuration = configurationFromCommissioning(baseConfiguration, record);
		const report = await createPassportReport(configuration, compressors, tools, CATALOG_VERIFIED_AT);
		const assessment = assessCommissioning(report, record);
		expect(assessment.verdict).toBe('ready_with_reserve');
		expect(assessment.guides).toContainEqual(expect.objectContaining({ path: '/guides/entretien-compresseur-purge-condensats/' }));
	});

	it('keeps a commissioned Passport verifiable after URL serialization', async () => {
		const configuration = configurationFromCommissioning(baseConfiguration, completeRecord);
		const envelope = await createPassportEnvelope(configuration, compressors, tools, CATALOG_VERIFIED_AT, '2026-07-19T12:00:00.000Z');
		const decoded = decodePassportEnvelope(encodePassportEnvelope(envelope));
		expect(decoded).toBeDefined();
		await expect(reportFromPassportEnvelope(decoded!)).resolves.toMatchObject({
			configuration: { commissioning: completeRecord },
			passportId: envelope.reportDigest,
		});
	});
});
