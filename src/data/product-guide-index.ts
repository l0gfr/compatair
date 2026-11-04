import { createHash } from 'node:crypto';

export type ProductGuide = { slug: string; title: string; description: string };
type Guide = { id: string; body?: string; data: { pubDate: Date; title: string; description: string } };

export function createProductGuideIndex(guides: Guide[]) {
 const result = new Map<string, ProductGuide[]>();
 for (const guide of guides.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id, 'fr'))) {
  const paths = new Set([...String(guide.body ?? '').matchAll(/\]\((\/(?:compresseurs|outils-pneumatiques)\/[a-z0-9-]+\/)\)/g)].map(match => match[1]));
  for (const productPath of paths) {
   const entries = result.get(productPath) ?? [];
   entries.push({ slug: guide.id, title: guide.data.title, description: guide.data.description });
   result.set(productPath, entries);
  }
 }
 return result;
}

export function productGuideVersionsFromIndex(index: Map<string, ProductGuide[]>) {
 return new Map([...index].map(([path, entries]) => [path, createHash('sha256').update(JSON.stringify(entries.slice(0, 4))).digest('hex')]));
}
