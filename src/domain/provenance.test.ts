import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../data/catalog';
import { evidenceSchema } from './catalog';
import { formatFrenchDate, latestEvidenceDate } from './provenance';

describe('catalog provenance', () => {
	it('derives pair freshness from its source records', () => {
		const compressor = compressors.find((item) => item.id === 'abac-atl-5-5-270')!;
		const tool = tools.find((item) => item.id === 'metabo-ds-14')!;
		expect(latestEvidenceDate(compressor, tool)).toBe('2026-07-14');
		expect(formatFrenchDate(latestEvidenceDate(compressor, tool))).toBe('14/07/2026');
	});

	it('refuse une source qui ne peut pas être ouverte en HTTPS', () => {
		expect(() => evidenceSchema.parse({ id: 'unsafe', sourceUrl: 'javascript:alert(1)', sourceLabel: 'Source', sourceType: 'manufacturer', retrievedAt: '2026-07-14', confidence: 'A' })).toThrow();
	});
});
