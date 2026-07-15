import { describe, expect, it } from 'vitest';
import { productImageDimensions } from './product-image-dimensions';

describe('productImageDimensions', () => {
	it('publie les dimensions intrinsèques du fichier produit', () => {
		expect(productImageDimensions('/images/products/atlas-copco-automan-ab-100.webp')).toEqual({ width: 550, height: 650 });
	});

	it('refuse les chemins hors du répertoire produit', () => {
		expect(() => productImageDimensions('/images/products/../favicon.svg')).toThrow('Image produit locale invalide');
	});
});
