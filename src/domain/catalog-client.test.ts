import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadConfigurationProducts, loadRuntimeProducts, searchCatalogProducts } from './catalog-client';
import { CALCULATION_VERSION } from '../../server/air-sizing.mjs';

afterEach(() => vi.unstubAllGlobals());
describe('catalog release boundaries in browser clients', () => {
 it('rejects an old engine before loading a shared configuration', async () => {
  const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
  await expect(loadConfigurationProducts({ demands: [], calculationVersion: '0.0.1' })).rejects.toThrow('autre version');
  expect(fetch).not.toHaveBeenCalled();
 });
 it('rejects a different server engine even when the product catalog is unchanged', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ calculationVersion: '0.0.1' }))));
  await expect(searchCatalogProducts('fixture', 'tool')).rejects.toThrow('moteur a changé');
 });
 it('does not silently accept a partial selection from a successful response', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({ schemaVersion: '1.0.0', calculationVersion: CALCULATION_VERSION, catalogVersion: 'a'.repeat(64), catalogVerifiedAt: '2026-09-27', compressors: [], tools: [] }))));
  await expect(loadRuntimeProducts(['fixture'], 'a'.repeat(64))).rejects.toThrow('références reçues');
 });
 it('keeps a stale catalog response as an actionable failure', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{}', { status: 409 })));
  await expect(loadRuntimeProducts(['fixture'], 'a'.repeat(64))).rejects.toThrow('catalogue a changé');
 });
});
