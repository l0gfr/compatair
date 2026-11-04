import { getCollection } from 'astro:content';
import { createProductGuideIndex, productGuideVersionsFromIndex, type ProductGuide } from './product-guide-index';

let index: Promise<Map<string, ProductGuide[]>> | undefined;
function guideIndex() {
 index ??= getCollection('guides').then(createProductGuideIndex);
 return index;
}

// Link back only to articles that explicitly discuss this exact product route.
export async function guidesForProduct(path: string): Promise<ProductGuide[]> {
 return ((await guideIndex()).get(path) ?? []).slice(0, 4);
}

export async function productGuideVersions() {
 return productGuideVersionsFromIndex(await guideIndex());
}
