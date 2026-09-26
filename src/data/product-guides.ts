import { getCollection } from 'astro:content';

type ProductGuide = { slug: string; title: string; description: string };
let index: Promise<Map<string, ProductGuide[]>> | undefined;

// Link back only to articles that explicitly discuss this exact product route.
export async function guidesForProduct(path: string): Promise<ProductGuide[]> {
 index ??= getCollection('guides').then((guides) => {
  const result = new Map<string, ProductGuide[]>();
  for (const guide of guides.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id, 'fr'))) {
   const paths = new Set([...String(guide.body ?? '').matchAll(/\]\((\/(?:compresseurs|outils-pneumatiques)\/[a-z0-9-]+\/)\)/g)].map((match) => match[1]));
   for (const productPath of paths) {
    const entries = result.get(productPath) ?? [];
    entries.push({ slug: guide.id, title: guide.data.title, description: guide.data.description });
    result.set(productPath, entries);
   }
  }
  return result;
 });
 return ((await index).get(path) ?? []).slice(0, 4);
}
