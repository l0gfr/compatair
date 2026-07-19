import { describe, expect, it } from 'vitest';
import type { PassportReport } from './passport';
import { createPassportPdf } from './passport-pdf';

describe('CompatAir passport PDF', () => {
	it('emits a self-contained versioned PDF with multiple sections', () => {
		const report = {
			schemaVersion: '1.0.0', calculationVersion: '1.3.0', catalogVerifiedAt: '2026-07-14', passportId: 'a'.repeat(64), generatedAt: '2026-07-14T10:00:00.000Z',
			configuration: { demands: [{ model: 'fixed-flow', id: 'tool', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }], mode: 'successive', safetyMargin: .25, sessionMinutes: 30, hoseLengthMeters: 10, hoseInnerDiameterMm: 9, networkDistanceMeters: 14, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', usageProfile: 'sustained', selectedCompressor: 'compressor', custom: {} },
			result: { verdict: 'continuous', peakFlowLpm: 100, averageFlowLpm: 100, recommendedFadLpm: 125, requiredPressureBar: 6.3, usefulPressureBar: 6.3, confidence: 'high', hypotheses: [], warnings: [], flowBasis: 'documented-continuous', calculationVersion: '1.3.0' },
			compressorLabel: 'Compresseur test', toolLabels: ['Outil test'], availableFadLpm: 140, nominalMarginPercent: 40, compatAirMarginCovered: true,
			sources: [{ id: 'source', productId: 'tool', productLabel: 'Outil test', label: 'Notice officielle', url: 'https://example.com/manual.pdf', retrievedAt: '2026-07-14', confidence: 'A' }],
			warnings: ['Mesurer la pression en charge.'], missingData: [], possibleUpgrades: ['Conserver le suivi.'],
			installationPlan: { version: '1.0.0', primaryReserve: 'Mesurer la pression en charge.', items: [{ id: 'loaded-pressure-test', phase: 'before-commissioning', status: 'site-measurement', completed: false, title: 'Pression mesurée en charge au poste', summary: 'Mesure absente.', action: 'Mesurer au raccord de l’outil.', sourceRefs: [] }], counts: { sourceConfirmed: 0, siteMeasurements: 1, siteCompleted: 0, undocumented: 0 } },
		} satisfies PassportReport;
		const pdf = createPassportPdf(report, 'https://compatair.fr/passeport/#passport=fixture');
		const text = new TextDecoder('latin1').decode(pdf);
		expect(text.startsWith('%PDF-1.4')).toBe(true);
		expect(text).toContain('PASSEPORT COMPATAIR');
		expect(text).toContain("Plan d'installation et de mise en service");
		expect(text).toContain('/Type /Page');
		expect(text.endsWith('%%EOF\n')).toBe(true);
		expect(pdf.length).toBeGreaterThan(2_000);
	});

	it('labels a commissioning receipt and keeps its non-certifying boundary', () => {
		const report = {
			schemaVersion: '1.0.0', calculationVersion: '1.3.0', catalogVerifiedAt: '2026-07-19', passportId: 'b'.repeat(64), generatedAt: '2026-07-19T10:00:00.000Z',
			configuration: { demands: [{ model: 'fixed-flow', id: 'tool', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }], mode: 'successive', safetyMargin: .25, sessionMinutes: 30, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', usageProfile: 'sustained', selectedCompressor: 'compressor', custom: {}, commissioning: { version: '1.0.0', observedOn: '2026-07-19', sourcePressureBar: 7, toolPressureBar: 6.5, measuredLeakLpm: 0, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', siteLocationChecked: true, manufacturerInstructionsLocated: true, representativeUseObserved: true } },
			result: { verdict: 'continuous', peakFlowLpm: 100, averageFlowLpm: 100, recommendedFadLpm: 125, requiredPressureBar: 6.8, toolPressureBar: 6.3, confidence: 'high', hypotheses: [], warnings: [], flowBasis: 'documented-continuous', calculationVersion: '1.3.0' },
			compressorLabel: 'Compresseur test', toolLabels: ['Outil test'], availableFadLpm: 140, nominalMarginPercent: 40, compatAirMarginCovered: true,
			sources: [], warnings: [], missingData: [], possibleUpgrades: [],
			installationPlan: { version: '1.0.0', primaryReserve: 'Mesures renseignées.', items: [{ id: 'loaded-pressure-test', phase: 'before-commissioning', status: 'site-measurement', completed: true, title: 'Pression mesurée en charge au poste', summary: 'Mesure présente.', action: 'Conserver le relevé.', sourceRefs: [] }], counts: { sourceConfirmed: 0, siteMeasurements: 1, siteCompleted: 1, undocumented: 0 } },
		} satisfies PassportReport;
		const assessment = { version: '1.0.0' as const, verdict: 'ready' as const, primaryFinding: 'Les mesures couvrent le besoin.', checks: [{ id: 'loaded-pressure', label: 'Pressions mesurées', completed: true, value: '6,5 bar', action: 'Conserver le relevé.' }], counts: { completed: 1, total: 1 }, actions: ['Conserver le reçu.'], guides: [], comparison: { requiredToolPressureBar: 6.3, sourcePressureBar: 7, toolPressureBar: 6.5, pressureDropBar: .5, recommendedFadLpm: 125, availableFadLpm: 140, measuredLeakLpm: 0, nominalMarginPercent: 40 } };
		const text = new TextDecoder('latin1').decode(createPassportPdf(report, 'https://compatair.fr/passeport/#passport=fixture', { commissioningAssessment: assessment }));
		expect(text).toContain('RECU DE RECETTE TERRAIN');
		expect(text).toContain('Réponse de recette');
		expect(text).toContain('ni une réception réglementaire');
	});

	it('exports a local operation log with its baseline, checks and maintenance boundary', () => {
		const report = {
			schemaVersion: '1.0.0', calculationVersion: '1.3.0', catalogVerifiedAt: '2026-07-19', passportId: 'c'.repeat(64), generatedAt: '2026-07-19T10:00:00.000Z',
			configuration: { demands: [{ model: 'fixed-flow', id: 'tool', flowLpm: 100, pressureBar: 6.3, quantity: 1, dutyFactor: 1 }], mode: 'successive', safetyMargin: .25, sessionMinutes: 30, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', usageProfile: 'sustained', selectedCompressor: 'compressor', custom: {}, commissioning: { version: '1.0.0', observedOn: '2026-07-19', sourcePressureBar: 7, toolPressureBar: 6.5, measuredLeakLpm: 0, fittingStandard: 'euro-7.2', fittingCount: 4, filtration: 'particle', siteLocationChecked: true, manufacturerInstructionsLocated: true, representativeUseObserved: true } },
			result: { verdict: 'continuous', peakFlowLpm: 100, averageFlowLpm: 100, recommendedFadLpm: 125, requiredPressureBar: 6.8, toolPressureBar: 6.3, confidence: 'high', hypotheses: [], warnings: [], flowBasis: 'documented-continuous', calculationVersion: '1.3.0' },
			compressorLabel: 'Compresseur test', toolLabels: ['Outil test'], availableFadLpm: 140, nominalMarginPercent: 40, compatAirMarginCovered: true,
			sources: [], warnings: [], missingData: [], possibleUpgrades: [],
			installationPlan: { version: '1.0.0', primaryReserve: 'Mesures renseignées.', items: [], counts: { sourceConfirmed: 0, siteMeasurements: 0, siteCompleted: 0, undocumented: 0 } },
		} satisfies PassportReport;
		const operationLog = {
			version: '1.0.0' as const, passportId: report.passportId, baselineObservedOn: '2026-07-19', createdAt: '2026-07-19T10:00:00.000Z', updatedAt: '2026-08-19T10:00:00.000Z',
			entries: [{ id: 'check-1', observedOn: '2026-08-19', recordedAt: '2026-08-19T10:00:00.000Z', sourcePressureBar: 7, toolPressureBar: 6.5, measuredLeakLpm: 0, operatingHours: 120, representativeUseObserved: true, configurationUnchanged: true, maintenanceAction: 'drain' as const }],
		};
		const text = new TextDecoder('latin1').decode(createPassportPdf(report, 'https://compatair.fr/suivi-exploitation/#passport=fixture', { operationLog }));
		expect(text).toContain("CARNET D'EXPLOITATION");
		expect(text).toContain("Carnet d'exploitation");
		expect(text).toContain('Purge ou vidange déclarée');
		expect(text).toContain('Échéance constructeur non documentée');
		expect(text).toContain("ne certifie ni l'état du matériel");
	});
});
