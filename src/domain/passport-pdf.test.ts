import { describe, expect, it } from 'vitest';
import type { PassportReport } from './passport';
import { createPassportPdf } from './passport-pdf';

describe('CompatAir passport PDF', () => {
	it('emits a self-contained versioned PDF with multiple sections', () => {
		const report = {
			schemaVersion: '1.0.0', calculationVersion: '1.2.0', catalogVerifiedAt: '2026-07-14', passportId: 'a'.repeat(64), generatedAt: '2026-07-14T10:00:00.000Z',
			configuration: { demands: [{ model: 'fixed-flow', id: 'tool', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }], mode: 'successive', safetyMargin: .25, sessionMinutes: 30, hoseLengthMeters: 10, hoseInnerDiameterMm: 9, networkDistanceMeters: 14, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', usageProfile: 'sustained', selectedCompressor: 'compressor', custom: {} },
			result: { verdict: 'continuous', peakFlowLpm: 100, averageFlowLpm: 100, recommendedFadLpm: 125, requiredPressureBar: 6.3, usefulPressureBar: 6.3, confidence: 'high', hypotheses: [], warnings: [], flowBasis: 'documented-continuous', calculationVersion: '1.2.0' },
			compressorLabel: 'Compresseur test', toolLabels: ['Outil test'], availableFadLpm: 140, nominalMarginPercent: 40, compatAirMarginCovered: true,
			sources: [{ id: 'source', productId: 'tool', productLabel: 'Outil test', label: 'Notice officielle', url: 'https://example.com/manual.pdf', retrievedAt: '2026-07-14', confidence: 'A' }],
			warnings: ['Mesurer la pression en charge.'], missingData: [], possibleUpgrades: ['Conserver le suivi.'],
		} satisfies PassportReport;
		const pdf = createPassportPdf(report, 'https://compatair.fr/passeport/#passport=fixture');
		const text = new TextDecoder('latin1').decode(pdf);
		expect(text.startsWith('%PDF-1.4')).toBe(true);
		expect(text).toContain('PASSEPORT COMPATAIR');
		expect(text).toContain('/Type /Page');
		expect(text.endsWith('%%EOF\n')).toBe(true);
		expect(pdf.length).toBeGreaterThan(2_000);
	});
});
