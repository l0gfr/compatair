import { describe, expect, it } from 'vitest';
import { appendIntervention, createInterventionLog } from './intervention';
import { appendOperationCheck, createOperationLog, type OperationCheck } from './operation-monitoring';
import type { PassportReport } from './passport';
import {
	appendMaintenanceRecord,
	appendMaintenanceTask,
	assessPreventiveMaintenance,
	createMaintenanceLog,
	createMaintenancePortfolio,
	parseMaintenanceLogJson,
	upsertMaintenancePortfolioEntry,
} from './preventive-maintenance';

const report = {
	passportId: 'c'.repeat(64), compressorLabel: 'Compresseur de test', toolLabels: ['Clé de test'],
	result: { requiredPressureBar: 6.3, toolPressureBar: 6.3 },
	configuration: { commissioning: {
		version: '1.0.0', observedOn: '2026-07-01', sourcePressureBar: 7, toolPressureBar: 6.5,
		measuredLeakLpm: 2, representativeUseObserved: true, manufacturerInstructionsLocated: true,
		fittingStandard: 'unknown', filtration: 'unknown', siteLocationChecked: true,
	} },
} as PassportReport;

function check(id: string, observedOn: string, overrides: Record<string, unknown> = {}): OperationCheck {
	return {
		id, observedOn, recordedAt: `${observedOn}T10:00:00.000Z`, sourcePressureBar: 7, toolPressureBar: 6.5,
		measuredLeakLpm: 2, operatingHours: 100, representativeUseObserved: true, configurationUnchanged: true,
		maintenanceAction: 'none', ...overrides,
	} as OperationCheck;
}

function task(overrides: Record<string, unknown> = {}) {
	return {
		id: 'task-1', label: 'Contrôler le filtre', category: 'filter', scheduleSource: 'manufacturer',
		sourceReference: 'Notice modèle, rubrique entretien', dueOn: '2026-08-01', createdAt: '2026-07-01T12:00:00.000Z', active: true,
		...overrides,
	};
}

describe('CompatAir preventive maintenance', () => {
	it('classifies only explicit dated or hour-based deadlines', () => {
		let operation = createOperationLog(report, '2026-07-01T12:00:00.000Z');
		operation = appendOperationCheck(operation, check('stable', '2026-07-20', { operatingHours: 120 }));
		let maintenance = createMaintenanceLog(report, '2026-07-01T12:00:00.000Z');
		maintenance = appendMaintenanceTask(maintenance, task());
		maintenance = appendMaintenanceTask(maintenance, task({ id: 'hours', label: 'Vidanger selon le compteur', dueOn: undefined, dueOperatingHours: 100 }));
		const assessment = assessPreventiveMaintenance(report, operation, createInterventionLog(report), maintenance, '2026-08-02');
		expect(assessment.status).toBe('action_required');
		expect(assessment.counts.overdue).toBe(2);
		expect(assessment.recommendations.every((item) => !item.finding.includes('générique'))).toBe(true);
	});

	it('keeps a stable installation green when its declared schedule is still ahead', () => {
		let operation = createOperationLog(report);
		operation = appendOperationCheck(operation, check('stable', '2026-07-20'));
		let maintenance = createMaintenanceLog(report);
		maintenance = appendMaintenanceTask(maintenance, task({ dueOn: '2026-10-01' }));
		const assessment = assessPreventiveMaintenance(report, operation, createInterventionLog(report), maintenance, '2026-07-20');
		expect(assessment.status).toBe('stable');
		expect(assessment.counts.scheduled).toBe(1);
	});

	it('requires a plan instead of inventing manufacturer intervals', () => {
		let operation = createOperationLog(report);
		operation = appendOperationCheck(operation, check('stable', '2026-07-20'));
		const assessment = assessPreventiveMaintenance(report, operation, createInterventionLog(report), createMaintenanceLog(report), '2026-07-20');
		expect(assessment.status).toBe('insufficient_data');
		expect(assessment.recommendations).toContainEqual(expect.objectContaining({ id: 'missing-schedule', basis: 'data_gap' }));
	});

	it('detects a repeated measured signal without calling it a proven cause', () => {
		let operation = createOperationLog(report);
		operation = appendOperationCheck(operation, check('drift-1', '2026-07-10', { toolPressureBar: 6 }));
		operation = appendOperationCheck(operation, check('drift-2', '2026-07-20', { toolPressureBar: 6.1 }));
		let maintenance = createMaintenanceLog(report);
		maintenance = appendMaintenanceTask(maintenance, task({ dueOn: '2026-10-01' }));
		const assessment = assessPreventiveMaintenance(report, operation, createInterventionLog(report), maintenance, '2026-07-20');
		expect(assessment.recurringSignals.some((signal) => signal.id === 'pressure-drop' && signal.count === 2)).toBe(true);
		expect(assessment.recommendations.find((item) => item.id === 'recurrence-pressure-drop')?.action).toContain('avant de qualifier');
	});

	it('keeps an unresolved intervention visible as a priority', () => {
		let operation = createOperationLog(report);
		operation = appendOperationCheck(operation, check('source', '2026-07-10', { toolPressureBar: 6, measuredLeakLpm: 12 }));
		operation = appendOperationCheck(operation, check('counter', '2026-07-12', { toolPressureBar: 6.1, measuredLeakLpm: 10 }));
		let interventions = createInterventionLog(report);
		interventions = appendIntervention(interventions, {
			id: 'intervention', sourceCheckId: 'source', counterCheckId: 'counter', performedOn: '2026-07-11', recordedAt: '2026-07-12T11:00:00.000Z',
			category: 'hose_or_fitting', actionDescription: 'Raccord remplacé après localisation.', diagnostics: [{ id: 'section-loss', status: 'anomaly_measured' }],
		});
		let maintenance = createMaintenanceLog(report);
		maintenance = appendMaintenanceTask(maintenance, task({ dueOn: '2026-10-01' }));
		const assessment = assessPreventiveMaintenance(report, operation, interventions, maintenance, '2026-07-20');
		expect(assessment.openInterventions).toBe(1);
		expect(assessment.status).toBe('action_required');
	});

	it('records completion and moves only the selected explicit schedule', () => {
		let maintenance = appendMaintenanceTask(createMaintenanceLog(report), task());
		maintenance = appendMaintenanceRecord(maintenance, {
			record: {
				id: 'record', taskId: 'task-1', taskLabel: 'Contrôler le filtre', category: 'filter', performedOn: '2026-08-01',
				recordedAt: '2026-08-01T12:00:00.000Z', operatingHours: 150, result: 'completed', actionDescription: 'Filtre contrôlé et remplacé.',
			},
			nextDueOn: '2027-08-01', closeTask: false,
		});
		expect(maintenance.tasks[0].dueOn).toBe('2027-08-01');
		expect(maintenance.records).toHaveLength(1);
		expect(parseMaintenanceLogJson(JSON.stringify(maintenance)).success).toBe(true);
	});

	it('keeps a bounded local portfolio and refreshes an existing equipment', () => {
		let portfolio = createMaintenancePortfolio('2026-07-01T12:00:00.000Z');
		portfolio = upsertMaintenancePortfolioEntry(portfolio, {
			passportId: report.passportId, encodedPassport: 'encoded-one', alias: 'Atelier nord', addedAt: '2026-07-01T12:00:00.000Z', lastOpenedAt: '2026-07-01T12:00:00.000Z',
		});
		portfolio = upsertMaintenancePortfolioEntry(portfolio, {
			passportId: report.passportId, encodedPassport: 'encoded-two', alias: 'Atelier principal', addedAt: '2026-07-01T12:00:00.000Z', lastOpenedAt: '2026-07-02T12:00:00.000Z',
		});
		expect(portfolio.entries).toHaveLength(1);
		expect(portfolio.entries[0].alias).toBe('Atelier principal');
	});
});
