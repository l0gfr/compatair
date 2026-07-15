import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readImageDimensions, type ImageDimensions } from './image-dimensions';

const dimensionsBySource = new Map<string, ImageDimensions>();
const productImageSourcePattern = /^\/images\/products\/[a-z0-9][a-z0-9._-]*\.(?:jpe?g|png|webp)$/;

export function productImageDimensions(source: string): ImageDimensions {
	const cached = dimensionsBySource.get(source);
	if (cached) return cached;
	if (!productImageSourcePattern.test(source)) {
		throw new Error(`Image produit locale invalide : ${source}`);
	}

	const file = resolve(process.cwd(), 'public', source.slice(1));
	const dimensions = readImageDimensions(readFileSync(file));
	if (!dimensions) throw new Error(`Dimensions illisibles pour l’image produit : ${source}`);
	dimensionsBySource.set(source, dimensions);
	return dimensions;
}
