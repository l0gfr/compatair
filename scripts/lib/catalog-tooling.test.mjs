import { mkdtemp, mkdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
	buildCatalogIndexSource,
	MAX_PRODUCT_IMAGE_BYTES,
	optimizeImportedProductImage,
	productImageSizeError,
	productTechnicalSvgError,
} from './catalog-tooling.mjs';
import { technicalCardSvg } from './technical-card.mjs';

const temporaryDirectories = [];

afterEach(async () => {
	await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe('catalog tooling', () => {
	it('accepts only an exact generated vector card and rejects active markup or stale data', () => {
		const product = { id: 'fixture', brand: 'Example', model: 'M1', mpn: '<script>&"', demandModel: 'fixed-flow', airflowLpm: { typical: 300 }, workingPressureBar: { typical: 6 }, image: { sourceLabel: 'Carte technique CompatAir, données fabricant' } };
		const svg = technicalCardSvg(product, 'tools');
		expect(productTechnicalSvgError(product, 'tools', svg)).toBeNull();
		expect(productTechnicalSvgError(product, 'tools', svg.replace('</svg>', '<script>alert(1)</script></svg>'))).toContain('différente');
		expect(productTechnicalSvgError(product, 'tools', svg.replace('<svg ', '<svg onload="alert(1)" '))).toContain('différente');
		expect(productTechnicalSvgError(product, 'tools', svg.replace('</svg>', '<image href="https://example.test/track"/></svg>'))).toContain('différente');
		expect(productTechnicalSvgError({ ...product, airflowLpm: { typical: 400 } }, 'tools', svg)).toContain('différente');
		expect(productTechnicalSvgError({ ...product, image: { sourceLabel: 'Fiche externe' } }, 'tools', svg)).toContain('non généré');
	});
	it('generates deterministic indexes independent of filesystem order', () => {
		const source = buildCatalogIndexSource('tools', ['zeta.ts', 'alpha.ts']);
		expect(source).toContain("import product1 from './alpha';");
		expect(source).toContain("import product2 from './zeta';");
		expect(source).toContain('export const rawTools');
	});

	it('rejects product images above the publication budget', () => {
		expect(productImageSizeError('heavy-product', '/images/products/heavy.png', MAX_PRODUCT_IMAGE_BYTES)).toBeNull();
		expect(productImageSizeError('heavy-product', '/images/products/heavy.png', MAX_PRODUCT_IMAGE_BYTES + 1)).toContain('Image produit trop lourde');
	});

	it('converts an imported product image to WebP before catalog publication', async () => {
		const root = await mkdtemp(join(tmpdir(), 'compatair-catalog-'));
		temporaryDirectories.push(root);
		const imagesDirectory = join(root, 'public/images/products');
		await mkdir(imagesDirectory, { recursive: true });
		const { default: sharp } = await import('sharp');
		await sharp({ create: { width: 2, height: 2, channels: 4, background: '#ff0000ff' } })
			.png()
			.toFile(join(imagesDirectory, 'test-product.png'));
		const product = { id: 'test-product', image: { src: '/images/products/test-product.png' } };

		await expect(optimizeImportedProductImage(root, product)).resolves.toBe('/images/products/test-product.webp');
		expect(product.image.src).toBe('/images/products/test-product.webp');
		expect((await readFile(join(imagesDirectory, 'test-product.webp'))).subarray(0, 4).toString()).toBe('RIFF');
		await expect(readFile(join(imagesDirectory, 'test-product.png'))).rejects.toMatchObject({ code: 'ENOENT' });
	});
});
