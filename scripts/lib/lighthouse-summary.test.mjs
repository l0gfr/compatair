import { describe, expect, it } from 'vitest';
import { summarizeLighthouseReports } from './lighthouse-summary.mjs';

const report = (path, fetchTime, performance, lcp, cls, tbt) => ({
	finalUrl: `http://localhost${path}`,
	fetchTime,
	lighthouseVersion: '12.6.1',
	userAgent: 'Chrome/140',
	categories: { performance: { score: performance }, accessibility: { score: 1 }, 'best-practices': { score: .98 }, seo: { score: 1 } },
	audits: { 'largest-contentful-paint': { numericValue: lcp }, 'cumulative-layout-shift': { numericValue: cls }, 'total-blocking-time': { numericValue: tbt } },
});

describe('Lighthouse CI summary', () => {
	it('keeps the latest run window and computes medians per path', () => {
		const summary = summarizeLighthouseReports([
			report('/', '2026-07-15T10:00:00Z', .8, 2400, .08, 180),
			report('/', '2026-07-15T10:01:00Z', 1, 1800, .02, 20),
			report('/old/', '2026-07-14T10:00:00Z', .1, 9000, .9, 2000),
		]);
		expect(summary.reportCount).toBe(2);
		expect(summary.pages['/']).toMatchObject({ runs: 2, categories: { performance: 90 }, labMetrics: { largestContentfulPaintMs: 2100, cumulativeLayoutShift: .05, totalBlockingTimeMs: 100 } });
		expect(summary.pages['/old/']).toBeUndefined();
		expect(summary.fieldCoreWebVitals.status).toBe('not_measured_here');
	});
});
