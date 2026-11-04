import { describe, expect, it } from 'vitest';
import { createProductGuideIndex, productGuideVersionsFromIndex } from './product-guide-index';

const path = '/compresseurs/abac-a/';
const other = '/outils-pneumatiques/metabo-b/';
function guide(id: string, body = `[produit](${path})`, title = id) {
 return { id, body, data: { title, description: `Description ${id}`, pubDate: new Date('2026-10-01') } };
}
const versions = (guides: ReturnType<typeof guide>[]) => productGuideVersionsFromIndex(createProductGuideIndex(guides));

describe('product guide backlink cache scope', () => {
 it('preserves the existing ordering, deduplication and four-card projection', () => {
  const guides = ['f', 'e', 'd', 'c', 'b', 'a'].map(id => guide(id, `[one](${path}) [two](${path})`));
  guides[0].data.pubDate = new Date('2026-11-01');
  const index = createProductGuideIndex(guides);
  expect(index.get(path)?.slice(0, 4).map(entry => entry.slug)).toEqual(['f', 'a', 'b', 'c']);
  expect(index.get(path)).toHaveLength(6);
 });
 it('invalidates exact products when a body adds or removes a backlink', () => {
  expect(versions([guide('a')]).get(path)).toBeDefined();
  expect(versions([guide('a', `[product](${other})`)]).get(path)).toBeUndefined();
  expect(versions([guide('a', `[product](${other})`)]).get(other)).toBeDefined();
 });
 it('ignores unrelated guide edits and non-rendered fifth cards', () => {
  const base = ['a', 'b', 'c', 'd', 'e'].map(id => guide(id));
  const initial = versions(base).get(path);
  expect(versions([...base, guide('z', `[other](${other})`, 'New title')]).get(path)).toBe(initial);
  expect(versions(base.map(g => g.id === 'e' ? guide('e', g.body, 'Changed fifth card') : g)).get(path)).toBe(initial);
 });
 it('invalidates rendered card metadata and order changes', () => {
  const base = [guide('a'), guide('b')];
  expect(versions([guide('a', undefined, 'Updated'), guide('b')]).get(path)).not.toBe(versions(base).get(path));
  const newer = guide('b'); newer.data.pubDate = new Date('2026-11-01');
  expect(versions([guide('a'), newer]).get(path)).not.toBe(versions(base).get(path));
 });
});
