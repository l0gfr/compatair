import { describe, expect, it } from 'vitest';
import type { PassportReport } from './passport';
import { appendOperationCheck, createOperationLog, type OperationCheck } from './operation-monitoring';
import { appendIntervention, assessIntervention, createInterventionLog, diagnosticStepsForAssessment, parseInterventionLogJson } from './intervention';

const report = {
	passportId: 'd'.repeat(64),
	result: { requiredPressureBar: 6.3, toolPressureBar: 6.3 },
	configuration: { commissioning: {
		version: '1.0.0', observedOn: '2026-07-19', sourcePressureBar: 7, toolPressureBar: 6.5,
		measuredLeakLpm: 2, representativeUseObserved: true, manufacturerInstructionsLocated: true,
		fittingStandard: 'unknown', filtration: 'unknown', siteLocationChecked: true,
	} },
} as PassportReport;

function check(id: string, observedOn: string, overrides: Record<string, unknown> = {}): OperationCheck {
	return {
		id, observedOn, recordedAt: `${observedOn}T10:00:00.000Z`, sourcePressureBar: 7, toolPressureBar: 6.5,
		measuredLeakLpm: 2, representativeUseObserved: true, configurationUnchanged: true, maintenanceAction: 'none', ...overrides,
	} as OperationCheck;
}

function operationLog(counterOverrides: Record<string, unknown>) {
	let log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
	log = appendOperationCheck(log, check('source', '2026-08-01', { toolPressureBar: 6, measuredLeakLpm: 12 }), '2026-08-01T12:00:00.000Z');
	log = appendOperationCheck(log, check('counter', '2026-08-03', counterOverrides), '2026-08-03T12:00:00.000Z');
	return log;
}

function intervention(overrides: Record<string, unknown> = {}) {
	return {
		id: 'intervention-1', sourceCheckId: 'source', counterCheckId: 'counter', performedOn: '2026-08-02', recordedAt: '2026-08-03T12:00:00.000Z',
		category: 'hose_or_fitting', actionDescription: 'Raccord défectueux remplacé après isolement du tronçon.',
		diagnostics: [
			{ id: 'repeat-load', status: 'checked_no_anomaly' },
			{ id: 'section-loss', status: 'anomaly_measured', note: 'Perte localisée au raccord.' },
		],
		...overrides,
	};
}

describe('CompatAir intervention workflow', () => {
	it('orders diagnostic steps from the measured signal families', () => {
		const log = operationLog({ toolPressureBar: 6, measuredLeakLpm: 12 });
		const source = log.entries.find((entry) => entry.id === 'source')!;
		const assessment = assessIntervention(report, log, intervention()).sourceAssessment;
		expect(diagnosticStepsForAssessment(assessment).map((step) => step.id)).toEqual(['repeat-load', 'source-control', 'section-loss', 'leak-localization', 'point-of-use']);
		expect(source.toolPressureBar).toBe(6);
	});

	it('closes an intervention only when the comparable counter-measure is stable', () => {
		const assessment = assessIntervention(report, operationLog({ toolPressureBar: 6.5, measuredLeakLpm: 2 }), intervention());
		expect(assessment.outcome).toBe('resolved');
		expect(assessment.remainingSignals).toHaveLength(0);
		expect(assessment.diagnostic.anomalyCount).toBe(1);
	});

	it('reports a measured improvement while a signal remains open', () => {
		const assessment = assessIntervention(report, operationLog({ toolPressureBar: 6.2, measuredLeakLpm: 8 }), intervention());
		expect(assessment.outcome).toBe('improved');
		expect(assessment.improvedSignals).toContain('required-pressure');
		expect(assessment.remainingSignals.length).toBeGreaterThan(0);
	});

	it('keeps the deviation open when the counter-measure does not improve it', () => {
		const assessment = assessIntervention(report, operationLog({ toolPressureBar: 6, measuredLeakLpm: 12 }), intervention());
		expect(assessment.outcome).toBe('not_resolved');
		expect(assessment.improvedSignals).toHaveLength(0);
	});

	it('refuses closure when the counter-measure is not comparable', () => {
		const assessment = assessIntervention(report, operationLog({ configurationUnchanged: false, measuredLeakLpm: undefined }), intervention());
		expect(assessment.outcome).toBe('insufficient_data');
		expect(assessment.actions.join(' ')).toContain('nouvelle recette initiale');
	});

	it('rejects a stable source control and temporal inconsistencies', () => {
		const stableLog = operationLog({ toolPressureBar: 6.5, measuredLeakLpm: 2 });
		const sourceIndex = stableLog.entries.findIndex((entry) => entry.id === 'source');
		stableLog.entries[sourceIndex] = check('source', '2026-08-01');
		expect(() => assessIntervention(report, stableLog, intervention())).toThrow('dégradation mesurée');
		expect(() => assessIntervention(report, operationLog({}), intervention({ performedOn: '2026-08-04' }))).toThrow('contre-mesure ne peut pas précéder');
	});

	it('round-trips the local intervention log', () => {
		let log = createInterventionLog(report, '2026-08-01T10:00:00.000Z');
		log = appendIntervention(log, intervention(), '2026-08-03T12:00:00.000Z');
		expect(parseInterventionLogJson(JSON.stringify(log)).success).toBe(true);
		expect(parseInterventionLogJson('{').success).toBe(false);
	});
});
