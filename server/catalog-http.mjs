import { compactProductMatch } from './catalog-repository.mjs';
import { evaluateCompatibility, resolveAvailableFad } from './air-compatibility.mjs';
import { CALCULATION_VERSION } from './air-sizing.mjs';

export function handleCatalogRequest(repository, url, activeOffers = []) {
 if (!repository) return { status: 503, body: { error: 'catalog_index_unavailable' } };
 const params = url.searchParams;
 const action = url.pathname.slice('/api/v1/search/'.length);
 const allowed = action === 'metadata' ? [] : action === 'related' ? ['id', 'catalogVersion'] : action === 'identify' ? ['q'] : action === 'products' ? ['ids', 'catalogVersion'] : action === 'alternatives' ? ['pressure', 'flow', 'average', 'recommended', 'budget', 'phase', 'mobility', 'limit', 'catalogVersion'] : ['q', 'type', 'cursor', 'limit', 'kind'];
 if ([...params.keys()].some(key => !allowed.includes(key) || params.getAll(key).length !== 1)) return { status: 400, body: { error: 'invalid_query' } };
 if (params.has('catalogVersion') && params.get('catalogVersion') !== repository.metadata.catalogVersion) return { status: 409, body: { error: 'catalog_version_changed', catalogVersion: repository.metadata.catalogVersion } };
 const version = { catalogVersion: repository.metadata.catalogVersion, catalogVerifiedAt: repository.metadata.verifiedAt, calculationVersion: CALCULATION_VERSION };
 try {
  if (action === 'metadata') return { status: 200, body: { schemaVersion: '1.0.0', ...version, compressors: [], tools: [] } };
  if (action === 'identify') {
   const query = params.get('q') ?? '';
   if (query.length < 1 || query.length > 160) throw new Error('invalid_identifier');
   const matches = repository.identify([query]).filter(match => match.confidence === 'exact');
   return { status: 200, body: { schemaVersion: '1.0.0', ...version, compressors: matches.filter(match => match.type === 'compressor').map(match => match.item), tools: matches.filter(match => match.type === 'tool').map(match => match.item), ambiguous: matches.length > 1 } };
  }
  if (action === 'related') {
   const id = params.get('id') ?? '';
   if (!/^[a-z0-9-]{1,160}$/.test(id)) throw new Error('invalid_id');
   const compressor = repository.get(id, 'compressor');
   const tool = compressor ? undefined : repository.get(id, 'tool');
   if (!compressor && !tool) return { status: 404, body: { error: 'product_not_found' } };
   const groups = { continuous: [], intermittent: [], incompatible: [], insufficient_data: [] };
   const counts = { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 };
   for (const item of repository.iterate(compressor ? 'tool' : 'compressor')) {
    const result = evaluateCompatibility(compressor ?? item, tool ?? item);
    counts[result.verdict]++;
    const group = groups[result.verdict]; group.push({ item, result });
    group.sort((a, b) => (a.item.confidence === 'A' ? 0 : 1) - (b.item.confidence === 'A' ? 0 : 1) || Math.abs((a.result.availableFadLpm ?? 0) - (a.result.requiredFadLpm ?? 0)) - Math.abs((b.result.availableFadLpm ?? 0) - (b.result.requiredFadLpm ?? 0)) || a.item.id.localeCompare(b.item.id, 'en'));
    if (group.length > 8) group.pop();
   }
   const products = Object.values(groups).flat().map(row => row.item);
   return { status: 200, body: { schemaVersion: '1.0.0', ...version, compressors: compressor ? [compressor] : products, tools: tool ? [tool] : products, selection: { counts, maximumPerVerdict: 8, completeCatalogEvaluated: true } } };
  }
  if (action === 'products') {
   const ids = (params.get('ids') ?? '').split(',');
   if (ids.length < 1 || ids.length > 50 || new Set(ids).size !== ids.length || ids.some(id => !/^[a-z0-9-]{1,160}$/.test(id))) throw new Error('invalid_ids');
   const compressors = [], tools = [];
   for (const id of ids) {
    const compressor = repository.get(id, 'compressor');
    const tool = compressor ? undefined : repository.get(id, 'tool');
    if (!compressor && !tool) return { status: 404, body: { error: 'product_not_found', id } };
    (compressor ? compressors : tools).push(compressor ?? tool);
   }
   return { status: 200, body: { schemaVersion: '1.0.0', ...version, compressors, tools } };
  }
  if (action === 'alternatives') {
   const pressure = Number(params.get('pressure')), flow = Number(params.get('flow')), average = Number(params.get('average'));
   const recommended = params.has('recommended') ? Number(params.get('recommended')) : flow;
   const budget = params.has('budget') ? Number(params.get('budget')) : undefined;
   if (!Number.isFinite(recommended) || recommended < flow || recommended > flow * 2 || (budget !== undefined && (!Number.isFinite(budget) || budget <= 0 || budget > 1_000_000))) throw new Error('invalid_need');
   const prices = new Map();
   for (const offer of activeOffers) if (Number.isFinite(offer.priceEur) && offer.priceEur >= 0) prices.set(offer.productId, Math.min(prices.get(offer.productId) ?? Infinity, offer.priceEur));
   const phase = params.get('phase') ?? 'any', mobility = params.get('mobility') ?? 'any';
   const limit = params.has('limit') ? Number(params.get('limit')) : 20;
   if (!Number.isFinite(pressure) || pressure <= 0 || pressure > 50 || !Number.isFinite(flow) || flow <= 0 || flow > 4_000_000 || !Number.isFinite(average) || average <= 0 || average > flow || !Number.isInteger(limit) || limit < 1 || limit > 50 || !['any', 'single-phase'].includes(phase) || !['any', 'portable', 'portable-or-mobile'].includes(mobility)) throw new Error('invalid_need');
   const candidates = []; let eligible = 0;
   const rank = (a, b) => Number(prices.has(b.item.id)) - Number(prices.has(a.item.id)) || Number(b.fad >= recommended) - Number(a.fad >= recommended) || (a.item.confidence === 'A' ? 0 : 1) - (b.item.confidence === 'A' ? 0 : 1) || Math.abs(a.fad - recommended) - Math.abs(b.fad - recommended) || a.item.id.localeCompare(b.item.id, 'en');
   for (const item of repository.candidateCompressors(pressure, average)) {
    if (budget !== undefined && (!prices.has(item.id) || prices.get(item.id) > budget)) continue;
    if (phase !== 'any' && item.phase !== phase) continue;
    if (mobility === 'portable' && item.mobility !== 'portable') continue;
    if (mobility === 'portable-or-mobile' && !['portable', 'mobile'].includes(item.mobility)) continue;
    const fad = resolveAvailableFad(item, pressure)?.litersPerMinute;
    if (fad === undefined || fad < flow || fad * item.dutyCycle < average) continue;
    eligible++; candidates.push({ item, fad }); candidates.sort(rank); if (candidates.length > limit) candidates.pop();
   }
   return { status: 200, body: { schemaVersion: '1.0.0', ...version, compressors: candidates.map(row => row.item), tools: [], selection: { eligible, returned: candidates.length, exhaustive: candidates.length === eligible, criteria: 'pressure, nominal flow, documented endurance, phase and mobility; final user scenario still required' } } };
  }
  if (action !== 'catalog') return { status: 404, body: { error: 'not_found' } };
  const query = params.get('q') ?? '', kind = params.get('kind') ?? 'product';
  const limit = params.has('limit') ? Number(params.get('limit')) : 10;
  if (!['product', 'site'].includes(kind)) throw new Error('invalid_kind');
  if (kind === 'site') return { status: 200, body: { schemaVersion: '1.0.0', ...version, ...repository.searchKnowledgePage(query, { limit, type: params.get('type') || undefined, cursor: params.get('cursor') || undefined }) } };
  const found = repository.search({ query, type: params.get('type') || undefined, cursor: params.get('cursor') || undefined, limit });
  return { status: 200, body: { schemaVersion: '1.0.0', ...version, items: found.items.map(compactProductMatch), ...(found.nextCursor ? { nextCursor: found.nextCursor } : {}) } };
 } catch { return { status: 400, body: { error: 'invalid_query_or_cursor' } }; }
}
