import { describe, expect, it } from 'vitest';
import type { PassportReport } from './passport';
import { appendOperationCheck, assessOperationCheck, createOperationLog, parseOperationLogJson } from './operation-monitoring';

const report = {
	passportId: 'a'.repeat(64),
	result: { requiredPressureBar: 6.3, toolPressureBar: 6.3 },
	configuration: {
		commissioning: {
			version: '1.0.0', observedOn: '2026-07-19', sourcePressureBar: 7, toolPressureBar: 6.5,
			measuredLeakLpm: 2, representativeUseObserved: true, manufacturerInstructionsLocated: true,
			fittingStandard: 'unknown', filtration: 'unknown', siteLocationChecked: true,
		},
	},
} as PassportReport;

function check(overrides: Record<string, unknown> = {}) {
	return {
		id: 'check-1', observedOn: '2026-08-19', recordedAt: '2026-08-19T10:00:00.000Z',
		sourcePressureBar: 7, toolPressureBar: 6.5, measuredLeakLpm: 2,
		representativeUseObserved: true, configurationUnchanged: true, maintenanceAction: 'none',
		...overrides,
	};
}

describe('CompatAir operation monitoring', () => {
	it('keeps a comparable follow-up stable inside the published tolerances', () => {
		const log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		const assessment = assessOperationCheck(report, log, check({ sourcePressureBar: 6.95, toolPressureBar: 6.44, measuredLeakLpm: 6.9 }));
		expect(assessment.verdict).toBe('stable');
		expect(assessment.signals).toHaveLength(0);
		expect(assessment.maintenance.status).toBe('undocumented');
	});

	it('flags an increased pressure drop without inventing a network loss', () => {
		const log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		const assessment = assessOperationCheck(report, log, check({ sourcePressureBar: 7, toolPressureBar: 6.2 }));
		expect(assessment.verdict).toBe('degradation_observed');
		expect(assessment.signals.map((signal) => signal.id)).toContain('pressure-drop');
		expect(assessment.signals.map((signal) => signal.id)).toContain('required-pressure');
	});

	it('flags only a measured leak increase above the explicit threshold', () => {
		const log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		const assessment = assessOperationCheck(report, log, check({ measuredLeakLpm: 8 }));
		expect(assessment.verdict).toBe('degradation_observed');
		expect(assessment.signals).toContainEqual(expect.objectContaining({ id: 'leak-flow' }));
	});

	it('refuses to compare a changed configuration or incomplete measurements', () => {
		const log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		const assessment = assessOperationCheck(report, log, check({ configurationUnchanged: false, measuredLeakLpm: undefined }));
		expect(assessment.verdict).toBe('insufficient_data');
		expect(assessment.actions.join(' ')).toContain('nouvelle recette initiale');
	});

	it('sorts dated controls and refuses a control before commissioning', () => {
		let log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		log = appendOperationCheck(log, check({ id: 'later', observedOn: '2026-09-01', recordedAt: '2026-09-01T12:00:00.000Z' }), '2026-09-01T12:00:00.000Z');
		log = appendOperationCheck(log, check({ id: 'earlier', observedOn: '2026-08-01', recordedAt: '2026-08-01T12:00:00.000Z' }), '2026-09-01T12:01:00.000Z');
		expect(log.entries.map((entry) => entry.id)).toEqual(['earlier', 'later']);
		expect(() => appendOperationCheck(log, check({ observedOn: '2026-07-18' }))).toThrow('ne peut pas précéder');
	});

	it('round-trips a valid local JSON log and rejects malformed JSON', () => {
		const log = createOperationLog(report, '2026-07-19T12:00:00.000Z');
		expect(parseOperationLogJson(JSON.stringify(log)).success).toBe(true);
		expect(parseOperationLogJson('{').success).toBe(false);
	});
});
