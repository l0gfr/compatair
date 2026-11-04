import { beforeEach, expect, it, vi } from 'vitest';
import type { ToolProfile } from '../domain/catalog';
const state = vi.hoisted(() => ({ compressors: [{ id: 'a' }] as Array<{ id: string }> }));
vi.mock('./catalog', () => ({ get compressors() { return state.compressors; }, tools: [] }));
vi.mock('./evidence-history-directory', () => ({ evidenceHistoryProductHref: (id: string) => `/preuves/${id}/` }));
vi.mock('./product-seo-titles', () => ({ productSeoTitles: {}, productSeoDescriptions: {}, toolUseSeoTitles: {} }));
vi.mock('./related-tools', () => ({ createRelatedToolLookup: () => () => [] }));
beforeEach(() => { vi.resetModules(); state.compressors = [{ id: 'a' }]; });
it.each([{ demandModel: 'per-action' }, { demandModel: 'fixed-flow', airflowBasis: 'average' }, { demandModel: 'fixed-flow', airflowBasis: 'unqualified' }])('keeps a non-conclusive tool independent of unrelated compressors (%o)', async model => {
 const product = { id: 'fixture', ...model } as unknown as ToolProfile;
 const a = (await import('./product-build-key')).productBuildData(product, 'tool');
 state.compressors = [{ id: 'changed' }];vi.resetModules();
 const b = (await import('./product-build-key')).productBuildData(product, 'tool');
 expect(a).toEqual(b);expect(a.product).toBe(product);expect(a.oppositeCatalog).toBeUndefined();
});
it('retains the full compressor dependency for a documented fixed-flow selection', async () => {
 const product = { id: 'fixture', demandModel: 'fixed-flow' } as unknown as ToolProfile;
 const a = (await import('./product-build-key')).productBuildData(product, 'tool');
 state.compressors = [{ id: 'changed' }];vi.resetModules();
 const b = (await import('./product-build-key')).productBuildData(product, 'tool');
 expect(a.oppositeCatalog).toMatch(/^[a-f0-9]{64}$/);expect(a.oppositeCatalog).not.toBe(b.oppositeCatalog);
});
