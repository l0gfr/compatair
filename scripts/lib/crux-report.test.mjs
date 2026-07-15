import { describe, expect, it } from 'vitest';
import { summarizeCruxRecord } from './crux-report.mjs';

describe('CrUX field report', () => {
	it('requires all three field Core Web Vitals before assessing the origin', () => {
		const report = summarizeCruxRecord({ record: { key: { formFactor: 'PHONE' }, metrics: {
			largest_contentful_paint: { percentiles: { p75: 2200 } },
			interaction_to_next_paint: { percentiles: { p75: 180 } },
			cumulative_layout_shift: { percentiles: { p75: '.08' } },
		} } });
		expect(report).toMatchObject({ status: 'measured', passesCoreWebVitals: true, metrics: { LCP: { p75: 2200, good: true }, INP: { p75: 180, good: true }, CLS: { p75: .08, good: true } } });
		expect(summarizeCruxRecord({ record: { metrics: {} } }).status).toBe('insufficient_data');
	});
});
