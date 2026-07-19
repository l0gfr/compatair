import { describe, expect, it } from 'vitest';
import { sourceQualityDetail, sourceQualityLabel } from './source-quality';

describe('sourceQualityLabel', () => {
	it.each([
		['A', 'Source constructeur complète'],
		['B', 'Source constructeur partielle'],
		['C', 'Source insuffisante pour conclure'],
		['D', 'Source non confirmée'],
	] as const)('traduit le grade %s en libellé humain', (grade, label) => {
		expect(sourceQualityLabel(grade)).toBe(label);
		expect(sourceQualityDetail(grade)).toBe(`${label} · grade technique ${grade}`);
	});
});
