import { describe, expect, it } from 'vitest';
import { randomUUID } from 'node:crypto';
import { writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { productImageDimensions } from './product-image-dimensions';
import { technicalCardSvg } from '../../scripts/lib/technical-card.mjs';

describe('productImageDimensions', () => {
	it('prints an undocumented tank without a fabricated volume or a unit', () => {
		const svg = technicalCardSvg({ brand: 'Example', model: 'M1', maxPressureBar: 8, fadCurve: [] }, 'compressors');
		expect(svg).toContain('Non documentée');
		expect(svg).not.toMatch(/undefined|NaN|>litres<|>0</);
	});
	it('retains intrinsic vector card dimensions and refuses an unrelated SVG layout', () => {
		const source = `/images/products/fixture-generated-card-${randomUUID()}.svg`;
		const path = resolve('public', source.slice(1));
		const product = { brand: 'Example', model: 'M1', mpn: '1', tankLiters: 50, maxPressureBar: 8, fadCurve: [] };
		try {
			writeFileSync(path, technicalCardSvg(product, 'compressors'), { flag: 'wx' });
			expect(productImageDimensions(source)).toEqual({ width: 1200, height: 800 });
		} finally { rmSync(path, { force: true }); }
		const invalidSource = `/images/products/fixture-generated-card-${randomUUID()}.svg`;
		const invalidPath = resolve('public', invalidSource.slice(1));
		try {
			writeFileSync(invalidPath, '<svg width="1" height="1"></svg>', { flag: 'wx' });
			expect(() => productImageDimensions(invalidSource)).toThrow('Dimensions illisibles');
		} finally { rmSync(invalidPath, { force: true }); }
	});
	it('publie les dimensions intrinsèques du fichier produit', () => {
		expect(productImageDimensions('/images/products/atlas-copco-automan-ab-100.webp')).toEqual({ width: 550, height: 650 });
	});

	it('refuse les chemins hors du répertoire produit', () => {
		expect(() => productImageDimensions('/images/products/../favicon.svg')).toThrow('Image produit locale invalide');
	});
});
