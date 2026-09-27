import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, describe, expect, it } from 'vitest';
import { openCatalogRepository, repositoryCatalog, writeCatalogDatabase } from './catalog-repository.mjs';
import { handleCatalogRequest } from './catalog-http.mjs';
import { createMcpCore } from './mcp-core.mjs';
import { createCompatAirServer } from './mcp-server.mjs';
import { extractMcpDemand } from './mcp-telemetry.mjs';
import { evaluateCompatibility } from '../src/domain/compatibility';
import { compressors, tools } from '../src/data/catalog';

const directory = mkdtempSync(join(tmpdir(), 'compatair-index-'));
const selectedTools = tools.slice(0, 8);
const selectedCompressors = compressors.slice(0, 16);
const fixture = { catalogVersion: 'a'.repeat(64), verifiedAt: '2026-09-27', compressors: selectedCompressors, tools: selectedTools };
const path = join(directory, 'catalog.sqlite');
writeCatalogDatabase(path, fixture, [{ title: 'Débit FAD et pression', type: 'Guide', url: '/guides/debit-fad/', keywords: 'compresseur débit pression' }]);
const repository = openCatalogRepository(path);
afterAll(() => { repository.close(); rmSync(directory, { recursive: true, force: true }); });

describe('indexed and bounded catalog access', () => {
 it('preserves Map lookup semantics for missing optional identifiers', () => {
  for (const id of [undefined, null, 17, {}, [], 'unknown']) {
   expect(repository.lookup('compressor').get(id)).toBeUndefined();
   expect(repository.lookup('compressor').has(id)).toBe(false);
  }
  const compressorId = selectedCompressors[0].id, toolId = selectedTools[0].id;
  expect(extractMcpDemand('evaluate_air_compatibility', { compressorId, toolIds: [toolId] }, {}, repositoryCatalog(repository))).toEqual({
   products: [{ type: 'compressor', id: compressorId }, { type: 'tool', id: toolId }],
   compatibilities: [{ compressorId, toolId }],
  });
 });
 it.each(['compact', 'ucp'])('returns an indexed MCP decision through the complete HTTP %s path', async (format) => {
  const compressorId = selectedCompressors[0].id, toolId = selectedTools[0].id;
  const platformProfile = { ucp: { version: '2026-04-08', capabilities: { 'fr.compatair.air.compatibility': [{ version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/', schema: 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json' }] } } };
  const server = createCompatAirServer({ catalog: repositoryCatalog(repository), allowedOrigins: new Set(), fetchUcpProfile: async () => platformProfile });
  const args = format === 'compact' ? { compressorId, toolIds: [toolId] } : {
   meta: { 'ucp-agent': { profile: 'https://agent.example/profile' } }, ucp: { version: '2026-04-08' },
   configuration: { compressor: { id: compressorId }, tools: [{ id: toolId }] },
  };
  const payload = JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'evaluate_air_compatibility', arguments: args } });
  const response = await new Promise<{ status: number; body: string }>((resolve) => {
   let status = 0;
   const request = { url: '/mcp', method: 'POST', headers: { accept: 'application/json, text/event-stream', 'content-type': 'application/json' }, socket: { remoteAddress: '127.0.0.1' }, async *[Symbol.asyncIterator]() { yield Buffer.from(payload); } };
   server.emit('request', request, { setTimeout() {}, writeHead(value: number) { status = value; }, end(body = '') { resolve({ status, body }); }, destroy() {} });
  });
  expect(response.status).toBe(200);
  const rpc = JSON.parse(response.body);
  expect(rpc.error).toBeUndefined();
  expect(rpc.result.structuredContent).toMatchObject({ capability: 'fr.compatair.air.compatibility', air_supply_verdict: { scope: 'air_supply' }, overall_system_verdict: { scope: 'complete_air_system' } });
 });
 it('keeps original records and calculates a cache miss instead of losing the decision', () => {
  for (const compressor of selectedCompressors) for (const tool of selectedTools) {
   expect(repository.get(compressor.id)).toEqual(compressor);
   expect(repository.evaluate(compressor.id, tool.id)).toMatchObject(evaluateCompatibility(compressor, tool));
  }
  expect(repository.cacheStats().bytes).toBeLessThanOrEqual(repository.cacheStats().maximumBytes);
  expect(repository.evaluate('unknown', selectedTools[0].id)).toBeUndefined();
 });
 it('prevents callers from mutating cached decisions', () => {
  const first = repository.evaluate(selectedCompressors[0].id, selectedTools[0].id)!;
  first.warnings.push('tampered');
  expect(repository.evaluate(selectedCompressors[0].id, selectedTools[0].id)!.warnings).not.toContain('tampered');
 });
 it('paginates the complete indexed corpus once, with a cursor bound to version and query', () => {
  const ids: string[] = []; let cursor;
  do { const found = repository.search({ limit: 3, cursor }); ids.push(...found.items.map(row => row.item.id)); cursor = found.nextCursor; } while (cursor);
  expect(new Set(ids).size).toBe(selectedCompressors.length + selectedTools.length);
  const first = repository.search({ limit: 1 });
  expect(() => repository.search({ query: 'other', cursor: first.nextCursor })).toThrow('stale_or_invalid_cursor');
  expect(() => repository.search({ cursor: '!!!' })).toThrow('invalid_cursor');
 });
 it('uses exact identifiers and literal tokens without SQL or FTS expression injection', () => {
  for (const compressor of selectedCompressors) expect(repository.identify([compressor.id])).toContainEqual({ type: 'compressor', item: compressor, confidence: 'exact' });
  expect(() => repository.search({ query: "' OR 1=1 -- NEAR (*)" })).not.toThrow();
  expect(repository.searchKnowledge('débit')).toHaveLength(1);
  expect(repository.searchKnowledge('"; DROP TABLE knowledge;')).toEqual([]);
  expect(repository.searchKnowledge('débit')).toHaveLength(1);
 });
 it('returns bounded records and rejects a mixed release or duplicate arguments', () => {
  const request = (suffix: string): any => handleCatalogRequest(repository, new URL(`https://compatair.fr/api/v1/search/${suffix}`));
  expect(request(`products?ids=${selectedTools[0].id}`).body.tools).toHaveLength(1);
  expect(request(`products?ids=${selectedTools[0].id}&catalogVersion=${'b'.repeat(64)}`).status).toBe(409);
  expect(request('catalog?q=x&q=y').status).toBe(400);
  expect(request('catalog?limit=51').status).toBe(400);
  expect(request('catalog?kind=site&q=debit').body.items).toHaveLength(1);
 });
 it('keeps MCP decisions consistent without preloading arrays or a matrix', () => {
  const catalog = repositoryCatalog(repository);
  expect(catalog.compressors).toEqual([]);
  const core = createMcpCore(catalog, undefined, { profile: 'legacy' });
  const compressor = selectedCompressors[0], tool = selectedTools[0];
  const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'check_compatibility', arguments: { compressorId: compressor.id, toolId: tool.id } } });
  expect(response.result.structuredContent.compatibility.engine_verdict).toBe(evaluateCompatibility(compressor, tool).verdict);
 });
 it('preserves all exact collisions before applying a display limit', () => {
  const collision = selectedCompressors.slice(0, 2).map((item, index) => ({ ...item, id: `collision-${index}`, slug: `collision-${index}`, mpn: 'SAME-REF' }));
  const collisionPath = join(directory, 'collision.sqlite');
  writeCatalogDatabase(collisionPath, { ...fixture, compressors: collision, tools: [] });
  const collided = openCatalogRepository(collisionPath);
  try {
   expect(collided.search({ query: 'SAMEREF', limit: 10 }).items).toHaveLength(2);
   const identified: any = handleCatalogRequest(collided, new URL('https://compatair.fr/api/v1/search/identify?q=SAME-REF'));
   expect(identified.body.ambiguous).toBe(true);
   const core = createMcpCore(repositoryCatalog(collided));
   const response: any = core.handle({ jsonrpc: '2.0', id: 1, method: 'tools/call', params: { name: 'identify_product', arguments: { reference: 'SAME-REF', limit: 1 } } });
   expect(response.result.structuredContent.canonical_url).toBe('https://compatair.fr/scanner/');
   expect(response.result.structuredContent.limitations.length).toBeGreaterThan(0);
  } finally { collided.close(); }
 });
 it('retains every eligible alternative before ranking and applies price before the display cap', () => {
  const corpus = Array.from({ length: 65 }, (_, i) => ({ ...selectedCompressors[0], id: `candidate-${String(i).padStart(3, '0')}`, slug: `candidate-${String(i).padStart(3, '0')}`, confidence: 'A', maxPressureBar: 10, dutyCycle: i === 0 ? undefined : .5, fadCurve: [{ pressureBar: 7, litersPerMinute: 300 + i }], phase: 'single-phase', mobility: 'mobile' }));
  const alternatePath = join(directory, 'alternatives.sqlite');
  writeCatalogDatabase(alternatePath, { ...fixture, compressors: corpus, tools: [] });
  const indexed = openCatalogRepository(alternatePath);
  const url = new URL('https://compatair.fr/api/v1/search/alternatives?pressure=7&flow=300&average=150&recommended=364&limit=5');
  try {
   const response: any = handleCatalogRequest(indexed, url);
   const exhaustive = corpus.filter(item => item.dutyCycle !== undefined && item.fadCurve[0].litersPerMinute >= 300 && item.fadCurve[0].litersPerMinute * item.dutyCycle >= 150);
   expect(response.body.selection).toEqual(expect.objectContaining({ eligible: exhaustive.length, returned: 5, exhaustive: false }));
   expect(response.body.compressors[0].id).toBe('candidate-064');
   expect(response.body.compressors.map((item: any) => item.id)).not.toContain('candidate-000');
   url.searchParams.set('budget', '200');
   const budgeted: any = handleCatalogRequest(indexed, url, [{ productId: 'candidate-060', priceEur: 100 }, { productId: 'candidate-064', priceEur: 250 }]);
   expect(budgeted.body.compressors.map((item: any) => item.id)).toEqual(['candidate-060']);
   expect(budgeted.body.selection.eligible).toBe(1);
  } finally { indexed.close(); }
 });

 it('paginates site results within their type without dropping later matches', () => {
  const searchPath = join(directory, 'site.sqlite');
  const documents = Array.from({ length: 45 }, (_, i) => ({ title: `Débit pression ${i}`, type: i % 2 ? 'Guide' : 'Outil', url: `/fixture-${i}/`, keywords: 'compresseur' }));
  writeCatalogDatabase(searchPath, fixture, documents);
  const indexed = openCatalogRepository(searchPath);
  try {
   const urls: string[] = []; let cursor;
   do { const result = indexed.searchKnowledgePage('pression', { type: 'guide', limit: 7, cursor }); urls.push(...result.items.map(row => row.url)); cursor = result.nextCursor; } while (cursor);
   expect(new Set(urls).size).toBe(22);
   const first = indexed.searchKnowledgePage('pression', { type: 'guide', limit: 1 });
   expect(() => indexed.searchKnowledgePage('pression', { type: 'outil', cursor: first.nextCursor })).toThrow('stale_or_invalid_cursor');
   const changedPath = join(directory, 'site-updated.sqlite');
   writeCatalogDatabase(changedPath, fixture, documents.map(item => ({ ...item, title: `${item.title} révisé` })));
   const changed = openCatalogRepository(changedPath);
   try {
    expect(changed.metadata.catalogVersion).toBe(indexed.metadata.catalogVersion);
    expect(() => changed.searchKnowledgePage('pression', { type: 'guide', cursor: first.nextCursor })).toThrow('stale_or_invalid_cursor');
   } finally { changed.close(); }
  } finally { indexed.close(); }
 });

});
