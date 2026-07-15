import { describe, expect, it } from 'vitest';
import { encodeCsv } from './csv';

describe('encodeCsv', () => {
	it('échappe les guillemets et neutralise les formules tableur', () => {
		expect(encodeCsv([['nom', 'valeur'], ['A "test"', '=1+1']]))
			.toBe('"nom","valeur"\r\n"A ""test""","\'=1+1"\r\n');
	});
});
