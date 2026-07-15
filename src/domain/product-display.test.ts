import { describe, expect, it } from 'vitest';
import { compressors } from '../data/catalog';
import { compressorDisplayName, compressorInstallationForm } from './product-display';

describe('compressorDisplayName', () => {
	it('distingue les variantes KAESER horizontales et verticales dans le libellé public', () => {
		const horizontal = compressors.find((item) => item.id === 'kaeser-eurocomp-epc-840-250')!;
		const vertical = compressors.find((item) => item.id === 'kaeser-eurocomp-epc-840-250-vertical')!;

		expect(compressorInstallationForm(horizontal)).toBe('cuve horizontale');
		expect(compressorInstallationForm(vertical)).toBe('cuve verticale');
		expect(compressorDisplayName(horizontal)).not.toBe(compressorDisplayName(vertical));
	});

	it('garantit un libellé distinct quand marque et modèle sont identiques sans MPN distinct', () => {
		const groups = Object.values(Object.groupBy(compressors, (item) => `${item.brand}\u0000${item.model}`));
		for (const group of groups) {
			if (!group || group.length < 2) continue;
			const mpns = new Set(group.map((item) => item.mpn).filter(Boolean));
			if (mpns.size === group.length) continue;
			expect(new Set(group.map(compressorDisplayName)).size, `${group[0].brand} ${group[0].model}`).toBe(group.length);
		}
	});
});
