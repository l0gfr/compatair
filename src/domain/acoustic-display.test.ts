import { describe, expect, it } from 'vitest';
import { acousticDisplay } from './acoustic-display';

describe('acoustic comparisons', () => {
	it('preserves indicators, distances and separate power/pressure values', () => {
		expect(acousticDisplay({ noiseDb: 62, specifications: [
			{ label: 'Pression acoustique LpA à 4 m', value: '62 dB(A)', evidenceIds: ['official'] },
			{ label: 'Puissance acoustique LwA', value: '84 dB(A)', evidenceIds: ['official'] },
		] })).toBe('Pression acoustique LpA à 4 m : 62 dB(A) · Puissance acoustique LwA : 84 dB(A)');
	});
	it('does not infer a metric from a bare number or unsourced label', () => {
		expect(acousticDisplay({ noiseDb: 62, specifications: [{ label: 'LpA', value: '62', evidenceIds: [] }] })).toContain('indicateur et conditions non qualifiés');
		expect(acousticDisplay({})).toBe('Non documenté');
	});
});
