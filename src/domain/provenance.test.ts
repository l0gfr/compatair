import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { formatFrenchDate, latestEvidenceDate } from './provenance';

describe('catalog provenance', () => {
	it('derives pair freshness from its source records', () => {
		const compressor = compressors.find((item) => item.id === 'abac-atl-5-5-270')!;
		const tool = tools.find((item) => item.id === 'metabo-ds-14')!;
		expect(latestEvidenceDate(compressor, tool)).toBe('2026-07-14');
		expect(formatFrenchDate(latestEvidenceDate(compressor, tool))).toBe('14/07/2026');
	});
});
