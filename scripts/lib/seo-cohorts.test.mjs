import { describe, expect, it } from 'vitest';
import { buildSeoCohortReport } from './seo-cohorts.mjs';

const options = { asOf: '2026-10-23', gscObservedThrough: '2026-10-21', indexationUpdatedOn: '2026-10-16' };
const manifest = batches => ({ schemaVersion: 1, gitSha: 'a'.repeat(40), baselineSha: 'b'.repeat(40), builtAt: '2026-10-20T12:00:00Z', batches });
const batch = (openedAt, paths = ['/guides/example/'], publicationDay) => ({ openedAt, paths, ...(publicationDay ? { publicationDay } : {}) });

describe('read-only SEO cohort calendar', () => {
	it('keeps Paris milestones separate from full Pacific performance dates', () => {
		const report = buildSeoCohortReport(manifest([batch('2026-09-29T22:40:43.834Z', undefined, '2026-09-30')]), options);
		expect(report.cohorts[0]).toMatchObject({ publicationDay: '2026-09-30', ageCalendarDays: 23 });
		expect(report.cohorts[0].checkpoints[0]).toMatchObject({ reviewOn: '2026-10-14', maturity: 'due', performanceWindow: { start: '2026-09-30', end: '2026-10-13', timeZone: 'America/Los_Angeles' }, performanceDatesObserved: true });
		expect(report.cohorts[0].checkpoints[1]).toMatchObject({ reviewOn: '2026-10-28', maturity: 'not_due', performanceDatesObserved: false });
	});
	it('counts maturity at the date boundary without inventing metrics from mature dates', () => {
		const report = buildSeoCohortReport(manifest([batch('2026-09-26T16:00:00Z')]), { ...options, asOf: '2026-10-24' });
		expect(report.summary.checkpoints).toEqual([{ days: 14, dueBatches: 1, dueAdmissions: 1, measurableBatches: 0 }, { days: 28, dueBatches: 1, dueAdmissions: 1, measurableBatches: 0 }]);
		for (const checkpoint of report.cohorts[0].checkpoints) {
			expect(checkpoint.performance.status).toBe('not_measurable');
			expect(checkpoint.performance.clicks).toBeNull();
			expect(checkpoint.indexation.indexedPages).toBeNull();
			expect(checkpoint.calculatorUsage.value).toBeNull();
		}
	});
	it('uses calendar days across both daylight-saving changes', () => {
		for (const [openedAt, builtAt, asOf, expectedStart, expectedEnd] of [
			['2026-10-24T23:30:00Z', '2026-10-25T12:00:00Z', '2026-11-08', '2026-10-25', '2026-11-07'],
			['2026-03-28T23:30:00Z', '2026-03-29T12:00:00Z', '2026-04-12', '2026-03-29', '2026-04-11'],
		]) {
			const report = buildSeoCohortReport({ ...manifest([batch(openedAt)]), builtAt }, { asOf, gscObservedThrough: asOf, indexationUpdatedOn: asOf });
			expect(report.cohorts[0].ageCalendarDays).toBe(14);
			expect(report.cohorts[0].checkpoints[0]).toMatchObject({ reviewOn: asOf, maturity: 'due', performanceWindow: { start: expectedStart, end: expectedEnd } });
		}
	});
	it('preserves the input and separates families instead of pooling them', () => {
		const input = manifest([batch('2026-10-01T10:00:00Z', ['/guides/a/', '/compresseurs/b/', '/outils-pneumatiques/c/'])]);
		const before = structuredClone(input);
		const report = buildSeoCohortReport(input, options);
		expect(input).toEqual(before);
		expect(report.cohorts[0].families.map(group => group.family)).toEqual(['guides', 'compressors', 'tools']);
		expect(report.summary.admissions).toBe(3);
	});
	it.each([
		manifest([batch('2026-10-01T10:00:00Z', ['/guides/a/', '/guides/a/'])]),
		manifest([batch('2026-10-01T10:00:00Z', ['/guides/a/']), batch('2026-10-02T10:00:00Z', ['/guides/a/'])]),
		manifest([batch('2026-10-01T10:00:00Z', ['/guides/../private/'])]),
		manifest([batch('2026-10-01T10:00:00Z', ['https://example.com/'])]),
		manifest([batch('2026-10-01T10:00:00Z', ['/quel-compresseur-pour/a/'])]),
		manifest([batch('2026-10-01T10:00:00Z', [], '2026-10-01')]),
		manifest([batch('2026-10-01T10:00:00Z', undefined, '2026-10-02')]),
		manifest([batch('2026-10-20T13:00:00Z')]),
		manifest([batch('2026-02-30T10:00:00Z')]),
		manifest([batch('2026-10-01T10:00:00')]),
	])('rejects malformed or unsafe manifest data', input => expect(() => buildSeoCohortReport(input, options)).toThrow());
	it.each(['2026-02-30', '2026-1-2', '', undefined])('rejects invalid review dates', asOf => expect(() => buildSeoCohortReport(manifest([]), { ...options, asOf })).toThrow());
	it('rejects future observation cutoffs and future build dates', () => {
		expect(() => buildSeoCohortReport(manifest([]), { ...options, gscObservedThrough: '2026-10-24' })).toThrow();
		expect(() => buildSeoCohortReport(manifest([]), { ...options, indexationUpdatedOn: '2026-10-24' })).toThrow();
		expect(() => buildSeoCohortReport({ ...manifest([]), builtAt: '2026-10-24T12:00:00Z' }, options)).toThrow();
	});
});
