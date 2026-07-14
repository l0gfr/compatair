import { mkdtemp, mkdir, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
	buildCatalogIndexSource,
	MAX_PRODUCT_IMAGE_BYTES,
	optimizeImportedProductImage,
	productImageSizeError,
} from './catalog-tooling.mjs';

const temporaryDirectories = [];

afterEach(async () => {
	await Promise.all(temporaryDirectories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

describe('catalog tooling', () => {
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
