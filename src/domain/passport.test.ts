import { describe, expect, it } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { createPassportEnvelope, createPassportReport, decodePassportConfiguration, decodePassportEnvelope, encodePassportConfiguration, encodePassportEnvelope, PASSPORT_ENVELOPE_SCHEMA_VERSION, PASSPORT_SCHEMA_VERSION, reportFromPassportEnvelope } from './passport';

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
		expect(report.result.calculationVersion).toBe('1.3.0');
		expect(report.sources.length).toBeGreaterThanOrEqual(2);
		expect(report.warnings.join(' ')).toContain('ne sont pas soustraites');
	});

	it('keeps the original report immutable when the current catalog changes', async () => {
		const envelope = await createPassportEnvelope(configuration, compressors, tools, CATALOG_VERIFIED_AT, '2026-07-14T10:00:00.000Z');
		const encoded = encodePassportEnvelope(envelope);
		const decoded = decodePassportEnvelope(encoded)!;
		const original = await reportFromPassportEnvelope(decoded);
		const changedCompressors = structuredClone(compressors);
		changedCompressors.find((item) => item.id === configuration.selectedCompressor)!.fadCurve = [{ pressureBar: 6.3, litersPerMinute: 1_000 }];
		const recalculated = await createPassportReport(configuration, changedCompressors, tools, '2027-01-01', '2027-01-01T00:00:00.000Z');
		expect(original.schemaVersion).toBe(PASSPORT_ENVELOPE_SCHEMA_VERSION);
		expect(original.generatedAt).toBe('2026-07-14T10:00:00.000Z');
		expect(original.catalogVerifiedAt).toBe(CATALOG_VERIFIED_AT);
		expect(original.passportId).toBe(envelope.reportDigest);
		expect(recalculated.result).not.toEqual(original.result);
	});

	it('keeps the original report readable after a catalog reference is removed', async () => {
		const envelope = await createPassportEnvelope(configuration, compressors, tools, CATALOG_VERIFIED_AT, '2026-07-14T10:00:00.000Z');
		const reducedCompressors = compressors.filter((item) => item.id !== configuration.selectedCompressor);
		await expect(createPassportReport(configuration, reducedCompressors, tools, '2027-01-01')).rejects.toThrow('n’existe pas');
		await expect(reportFromPassportEnvelope(envelope)).resolves.toMatchObject({
			passportId: envelope.reportDigest,
			compressorLabel: envelope.inputSnapshot.compressorLabel,
			result: envelope.resultSnapshot,
		});
	});

	it('rejects a modified report snapshot', async () => {
		const envelope = await createPassportEnvelope(configuration, compressors, tools, CATALOG_VERIFIED_AT, '2026-07-14T10:00:00.000Z');
		const modified = { ...envelope, inputSnapshot: { ...envelope.inputSnapshot, compressorLabel: 'Valeur falsifiée' } };
		await expect(reportFromPassportEnvelope(modified)).rejects.toThrow('empreinte');
	});
});
