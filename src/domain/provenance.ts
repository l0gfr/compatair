import type { Compressor, ToolProfile } from './catalog';

type CatalogProduct = Compressor | ToolProfile;

export function latestEvidenceDate(...products: CatalogProduct[]): string {
	const dates = products.flatMap((product) => product.evidence.map((item) => item.retrievedAt)).sort();
	const latest = dates.at(-1);
	if (!latest) throw new Error('Une date de vérification sourcée est requise.');
	return latest;
}

export function formatFrenchDate(date: string): string {
	return date.split('-').reverse().join('/');
}
