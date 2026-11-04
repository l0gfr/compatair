import { beforeEach, describe, expect, it, vi } from 'vitest';
const state = vi.hoisted(() => ({ offers: [] as Array<{ productId: string; priceEur?: number }> }));
vi.mock('./offers', () => ({ get activeOffers() { return state.offers; } }));
import { renderPageCacheKey } from './page-cache-key';
const indexing = { indexable: true, canonical: '/example/', answerGroup: undefined };
const now = new Date('2026-11-04T12:00:00Z');
const key = (path: string, data: unknown, date = now, indexation = indexing, navigation = 'navigation') => renderPageCacheKey(path, data, navigation, indexation, date);
beforeEach(() => { state.offers = []; });
describe('HTML cache keys match rendered dependencies', () => {
 it('keeps unchanged pages reusable across ordinary days and invalidates the real footer year', () => {
  expect(key('/guides/example/', { body: 'same' })).toBe(key('/guides/example/', { body: 'same' }, new Date('2026-11-05T12:00:00Z')));
  expect(key('/guides/example/', { body: 'same' })).not.toBe(key('/guides/example/', { body: 'same' }, new Date('2027-01-05T12:00:00Z')));
 });
 it('invalidates changed page data, navigation, canonical, admission and answer grouping', () => {
  const original = key('/guides/example/', { body: 'same' });
  expect(original).not.toBe(key('/guides/example/', { body: 'changed' }));
  expect(original).not.toBe(key('/guides/example/', { body: 'same' }, now, indexing, 'changed navigation'));
  expect(original).not.toBe(key('/guides/example/', { body: 'same' }, now, { ...indexing, indexable: false }));
  expect(original).not.toBe(key('/guides/example/', { body: 'same' }, now, { ...indexing, canonical: '/different/' }));
  expect(original).not.toBe(renderPageCacheKey('/guides/example/', { body: 'same' }, 'navigation', { ...indexing, answerGroup: ['changed'] }, now));
 });
 it('invalidates only compressor pages consuming a changed commercial offer', () => {
  const a = { product: { id: 'a' } }, b = { product: { id: 'b' } };
  const aBefore = key('/compresseurs/a/', a), bBefore = key('/compresseurs/b/', b);
  state.offers = [{ productId: 'a', priceEur: 100 }];
  expect(aBefore).not.toBe(key('/compresseurs/a/', a));
  expect(bBefore).toBe(key('/compresseurs/b/', b));
  const priced = key('/compresseurs/a/', a);state.offers[0].priceEur = 110;
  expect(priced).not.toBe(key('/compresseurs/a/', a));
 });
 it('tracks offer availability for actual rankings, without invalidating non-conclusive tools', () => {
  const fixed = { product: { id: 't', demandModel: 'fixed-flow' } }, incomplete = { product: { id: 't', demandModel: 'insufficient-data' } };
  const ranked = key('/outils-pneumatiques/t/', fixed), unchanged = key('/outils-pneumatiques/t/', incomplete);
  state.offers = [{ productId: 'a', priceEur: 100 }];
  expect(ranked).not.toBe(key('/outils-pneumatiques/t/', fixed));
  expect(unchanged).toBe(key('/outils-pneumatiques/t/', incomplete));
  const available = key('/outils-pneumatiques/t/', fixed);state.offers[0].priceEur = 110;
  expect(available).toBe(key('/outils-pneumatiques/t/', fixed));
 });
 it('invalidates the exact direct-link expiry while unrelated pages remain reusable', () => {
  const product = { product: { id: 'einhell-tc-ac-240-50-10-of', ean: '4006825597295' } };
  const expiry = Date.parse('2026-09-25T00:00:00Z') + 90 * 86400000;
  expect(key('/compresseurs/einhell/', product, new Date(expiry))).not.toBe(key('/compresseurs/einhell/', product, new Date(expiry + 1)));
  expect(key('/guides/example/', {}, new Date(expiry))).toBe(key('/guides/example/', {}, new Date(expiry + 1)));
 });
});
