import { createHash } from 'node:crypto';
import { getCollection } from 'astro:content';
import { isIndexablePath, canonicalPathFor, answerGroupFor } from '../../scripts/lib/indexation-build.mjs';

// Content bodies are tracked per rendered entry by Astro. Card metadata is shared
// across navigation and related reading, so it participates in every page key.
export async function guideNavigationVersion() {
 const guides = await getCollection('guides');
 return createHash('sha256').update(JSON.stringify(guides.map(guide => [guide.id, guide.data]).sort((a, b) => String(a[0]).localeCompare(String(b[0]), 'en')))).digest('hex');
}
export function pageBuildKey(path: string, data: unknown, navigationVersion: string) {
 return createHash('sha256').update(JSON.stringify({ data, navigationVersion, indexable: isIndexablePath(path), canonical: canonicalPathFor(path), answerGroup: answerGroupFor(path), date: new Date().toISOString().slice(0, 10) })).digest('hex');
}
