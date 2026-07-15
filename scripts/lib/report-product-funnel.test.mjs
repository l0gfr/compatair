import { describe, expect, it } from 'vitest';
import { reportProductFunnel } from './report-product-funnel.mjs';

const familyCounts = (overrides = {}) => Object.fromEntries(['pressure', 'flexible', 'simultaneity', 'leak', 'cadence', 'machine'].map((family) => [family, { displayed: 0, selected: 0, recalculated: 0, ...(overrides[family] ?? {}) }]));

describe('product funnel reporting', () => {
	it('computes calculator and counterfactual rates by closed family', () => {
		const report = reportProductFunnel({
			schemaVersion: '2.0.0', updatedAt: '2026-07-14T10:00:00Z', totalEvents: 44,
			calculator: { started: 20, completed: 11 },
			counterfactual: { displayed: 6, selected: 4, recalculated: 3, byFamily: familyCounts({ machine: { displayed: 6, selected: 4, recalculated: 3 } }) },
		});
		expect(report.calculator).toMatchObject({ started: 20, completed: 11, completionRatePercent: 55 });
		expect(report.counterfactual).toMatchObject({ displayed: 6, selected: 4, recalculated: 3, selectionRatePercent: 66.7, recalculationSuccessRatePercent: 75 });
		expect(report.counterfactual.families.machine).toMatchObject({ selectionRatePercent: 66.7, recalculationSuccessRatePercent: 75 });
	});

	it('migrates a valid legacy aggregate without inventing recommendation activity', () => {
		const report = reportProductFunnel({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 3, calculator: { started: 2, completed: 1 } });
		expect(report.sourceSchemaVersion).toBe('1.0.0');
		expect(report.counterfactual).toMatchObject({ displayed: 0, selected: 0, recalculated: 0 });
	});

	it('refuses to manufacture rates from inconsistent event ordering', () => {
		const report = reportProductFunnel({
			schemaVersion: '2.0.0', updatedAt: null, totalEvents: 9,
			calculator: { started: 2, completed: 4 },
			counterfactual: { displayed: 1, selected: 1, recalculated: 1, byFamily: familyCounts({ pressure: { displayed: 1, selected: 1, recalculated: 1 } }) },
		});
		expect(report.calculator.completionRatePercent).toBeNull();
		expect(report.dataQualityWarnings).toHaveLength(1);
	});

	it('rejects corrupt totals', () => {
		expect(() => reportProductFunnel({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 99, calculator: { started: 2, completed: 1 } })).toThrow('Compteurs');
	});
});
