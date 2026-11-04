import { createHash } from 'node:crypto';
import { renderPageCacheKey } from '../data/page-cache-key';
import { getCollection } from 'astro:content';
import { isIndexablePath, canonicalPathFor, answerGroupViewFor } from '../../scripts/lib/indexation-build.mjs';

// Guides share card metadata for related reading. Product pages instead hash
// their exact four rendered backlinks, including links discovered in guide bodies.
export async function guideNavigationVersion() {
 const guides = await getCollection('guides');
 return createHash('sha256').update(JSON.stringify(guides.map(guide => [guide.id, guide.data]).sort((a, b) => String(a[0]).localeCompare(String(b[0]), 'en')))).digest('hex');
}
export function pageBuildKey(path: string, data: unknown, navigationVersion: string) {
 return renderPageCacheKey(path, data, navigationVersion, { indexable: isIndexablePath(path), canonical: canonicalPathFor(path), answerGroup: answerGroupViewFor(path) });
}
