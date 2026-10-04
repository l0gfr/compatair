import { describe, expect, it } from 'vitest';
import { encodeCsv } from './csv';

describe('encodeCsv', () => {
	it('leaves unknown measurements empty while preserving an explicit zero', () => {
		expect(encodeCsv([['tankLiters'], [undefined], [0]])).toBe('"tankLiters"\r\n""\r\n"0"\r\n');
	});
	it('échappe les guillemets et neutralise les formules tableur', () => {
		expect(encodeCsv([['nom', 'valeur'], ['A "test"', '=1+1']]))
			.toBe('"nom","valeur"\r\n"A ""test""","\'=1+1"\r\n');
	});
});
