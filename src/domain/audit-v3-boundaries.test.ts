import { describe, expect, it } from 'vitest';
import fixtures from '../../tests/fixtures/audit-v3/boundaries.json';
import { calculateSizing } from '../../server/air-sizing.mjs';
import { sizeConfiguration, sizingInputSchema } from './sizing';
import { explainDecisionDataGap } from './decision-resolution';
import { passportConfigurationSchema } from './passport';
import { editorialPriority } from '../../scripts/lib/editorial-priority.mjs';

describe('V3 additional fixtures, not a certification', () => {
	it.each(fixtures.engine)('$id: $label', fixture => {
		if (fixture.expected === 'rejected') {
			expect(() => calculateSizing(fixture.input as Parameters<typeof calculateSizing>[0])).toThrow();
			expect(() => sizeConfiguration(fixture.input as Parameters<typeof sizeConfiguration>[0])).toThrow();
			if (['E03', 'E04', 'E05', 'E06'].includes(fixture.id)) {
				expect(sizingInputSchema.safeParse(fixture.input).success).toBe(false);
				expect(passportConfigurationSchema.safeParse({ demands: fixture.input.demands, selectedCompressor: 'custom', custom: fixture.input.compressor }).success).toBe(false);
			}
			return;
		}
		const result = sizeConfiguration(sizingInputSchema.parse(fixture.input));
		expect(result).toEqual(calculateSizing(sizingInputSchema.parse(fixture.input)));
		expect(result).toEqual(fixture.result);
		const gap = explainDecisionDataGap(undefined, result.requiredPressureBar, result);
		if (result.verdict !== 'insufficient_data') expect(gap).toBeUndefined();
		if (result.verdict === 'insufficient_data' && result.limitingFactor === 'pressure') {
			expect(gap).toMatchObject({ code: 'pressure_regulation', detail: result.warnings.at(-1) });
			expect(gap?.title).not.toMatch(/FAD|débit/i);
		}
		if (fixture.id === 'E15') expect(gap?.code).toBe('missing_duty_cycle');
		if (fixture.id === 'E16') expect(gap?.code).toBe('pressure_outside_curve');
		if (fixture.id === 'E22') expect(gap?.code).toBe('missing_receiver_cycle');
	});
	it.each(fixtures.lexicalSelf)('lexical identity $id', item => {
		expect(editorialPriority({ path: '', value: { question: item.query } }, { queries: [{ ...item, editorialPriority: 'P1' }] }).queryIds).toEqual([item.id]);
	});
	it.each(fixtures.lexicalAdversarial)('lexical boundary $id', item => {
		expect(editorialPriority({ path: '', value: { question: item.candidate } }, { queries: [{ ...item, editorialPriority: 'P1' }] }).queryIds.includes(item.id)).toBe(item.expected);
	});
});
