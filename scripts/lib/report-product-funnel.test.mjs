import { describe, expect, it } from 'vitest';
import { reportProductFunnel } from './report-product-funnel.mjs';

describe('product funnel reporting', () => {
	it('computes the aggregate funnel', () => {
		const report = reportProductFunnel({
			schemaVersion: '1.0.0', updatedAt: '2026-07-14T10:00:00Z', totalEvents: 31,
			calculator: { started: 20, completed: 11 },
		});
		expect(report.calculator).toMatchObject({ started: 20, completed: 11, completionRatePercent: 55 });
	});

	it('refuses to manufacture a rate from inconsistent counters', () => {
		const report = reportProductFunnel({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 6, calculator: { started: 2, completed: 4 } });
		expect(report.calculator.completionRatePercent).toBeNull();
		expect(report.dataQualityWarnings).toHaveLength(1);
	});

	it('rejects corrupt totals', () => {
		expect(() => reportProductFunnel({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 99, calculator: { started: 2, completed: 1 } })).toThrow('Compteurs');
	});
});
