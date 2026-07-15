import { describe, expect, it } from 'vitest';
import { serializeJsonLd } from './structured-data';

describe('serializeJsonLd', () => {
	it('neutralise les caractères interprétés par le parseur HTML sans altérer le JSON', () => {
		const value = { label: '<balise>&contenu', separator: '\u2028' };
		const serialized = serializeJsonLd(value);

		expect(serialized).not.toMatch(/[<>&\u2028\u2029]/);
		expect(JSON.parse(serialized)).toEqual(value);
	});

	it('refuse une valeur qui ne produit aucun document JSON', () => {
		expect(() => serializeJsonLd(undefined)).toThrow('sérialisables en JSON');
	});
});
