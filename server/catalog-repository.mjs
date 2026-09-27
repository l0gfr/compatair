import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { CALCULATION_VERSION } from './air-sizing.mjs';
import { evaluateCompatibility } from './air-compatibility.mjs';

export const CATALOG_STORAGE_VERSION = '1.0.0';
const normalize = value => String(value ?? '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const identifierKey = value => normalize(value).replaceAll(' ', '');
const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const identifierValues = item => [item.id, item.slug, item.mpn, item.ean, item.gtin, ...(item.identifierAliases ?? []).map(alias => alias.value), ...(item.distributorSkus ?? []).map(sku => sku.sku)].filter(Boolean);
const searchTokens = query => normalize(query).split(' ').filter(Boolean).slice(0, 8);
const ftsQuery = query => searchTokens(query).map(token => `"${token}"*`).join(' AND ');
const productUrl = (type, item) => `/${type === 'compressor' ? 'compresseurs' : 'outils-pneumatiques'}/${item.slug}/`;

// The database is a reproducible release artifact, opened read-only by the service.
// Source records remain unchanged; an index is never a new technical source.
export function writeCatalogDatabase(path, catalog, knowledge = []) {
 const db = new DatabaseSync(path);
 try {
  db.exec(`PRAGMA journal_mode=DELETE; PRAGMA synchronous=FULL;
   CREATE TABLE metadata(key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT;
   CREATE TABLE products(id TEXT PRIMARY KEY, type TEXT NOT NULL, slug TEXT NOT NULL, label TEXT NOT NULL, category TEXT, tank REAL, pressure REAL, oil TEXT, duty REAL, fad_max REAL, confidence TEXT, payload TEXT NOT NULL, fingerprint TEXT NOT NULL, UNIQUE(type,slug)) STRICT;
   CREATE INDEX product_kind ON products(type,id);
   CREATE INDEX product_air ON products(type,pressure,duty,fad_max);
   CREATE TABLE identifiers(value TEXT NOT NULL, product_id TEXT NOT NULL REFERENCES products(id), PRIMARY KEY(value,product_id)) WITHOUT ROWID;
   CREATE VIRTUAL TABLE product_search USING fts5(id UNINDEXED, text, tokenize='unicode61 remove_diacritics 2', prefix='2 3');
   CREATE TABLE knowledge(url TEXT PRIMARY KEY, title TEXT NOT NULL, type TEXT NOT NULL, keywords TEXT NOT NULL) STRICT;
   CREATE VIRTUAL TABLE knowledge_search USING fts5(url UNINDEXED,text, tokenize='unicode61 remove_diacritics 2', prefix='2 3');
   BEGIN IMMEDIATE;`);
  const product = db.prepare('INSERT INTO products VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');
  const identifier = db.prepare('INSERT OR IGNORE INTO identifiers VALUES (?,?)');
  const search = db.prepare('INSERT INTO product_search VALUES (?,?)');
  let count = 0;
  for (const type of ['compressor', 'tool']) for (const item of catalog[type === 'compressor' ? 'compressors' : 'tools']) {
   const label = item.label ?? `${item.brand} ${item.model}`;
   product.run(item.id, type, item.slug, label, item.category ?? null, item.tankLiters ?? null, item.maxPressureBar ?? item.workingPressureBar?.typical ?? null, item.oilType ?? null, item.dutyCycle ?? null, item.fadCurve?.length ? Math.max(...item.fadCurve.map(point => point.litersPerMinute)) : null, item.confidence, JSON.stringify(item), digest(item));
   const identifiers = identifierValues(item);
   for (const value of identifiers) identifier.run(identifierKey(value), item.id);
   search.run(item.id, normalize([label, item.brand, item.model, item.category, ...identifiers].join(' ')));
   count++;
  }
  const addKnowledge = db.prepare('INSERT INTO knowledge VALUES (?,?,?,?)');
  const indexKnowledge = db.prepare('INSERT INTO knowledge_search VALUES (?,?)');
  for (const item of knowledge) {
   const url = new URL(item.url, 'https://compatair.fr');
   if (url.origin !== 'https://compatair.fr' || url.username || url.password) throw new Error('invalid_knowledge_origin');
   addKnowledge.run(item.url, item.title, item.type, item.keywords ?? '');
   indexKnowledge.run(item.url, normalize(`${item.title} ${item.keywords ?? ''}`));
  }
  const metadata = { schemaVersion: CATALOG_STORAGE_VERSION, catalogVersion: catalog.catalogVersion, knowledgeVersion: digest(knowledge), verifiedAt: catalog.verifiedAt, calculationVersion: CALCULATION_VERSION, count, scope: catalog.scope, toolTaxonomy: catalog.toolTaxonomy };
  const insertMetadata = db.prepare('INSERT INTO metadata VALUES (?,?)');
  for (const [key, value] of Object.entries(metadata)) if (value !== undefined) insertMetadata.run(key, JSON.stringify(value));
  db.exec('COMMIT; PRAGMA optimize;');
  if (db.prepare('PRAGMA integrity_check').get().integrity_check !== 'ok') throw new Error('catalog_database_integrity');
  return metadata;
 } finally { db.close(); }
}

export function openCatalogRepository(path) {
 const db = new DatabaseSync(path, { readOnly: true, allowExtension: false, enableDoubleQuotedStringLiterals: false });
 db.exec('PRAGMA query_only=ON; PRAGMA cache_size=-8192; PRAGMA mmap_size=0;');
 const metadata = Object.fromEntries(db.prepare('SELECT key,value FROM metadata').all().map(row => [row.key, JSON.parse(row.value)]));
 if (metadata.schemaVersion !== CATALOG_STORAGE_VERSION || metadata.calculationVersion !== CALCULATION_VERSION || !/^[a-f0-9]{64}$/.test(metadata.catalogVersion) || !/^[a-f0-9]{64}$/.test(metadata.knowledgeVersion)) { db.close(); throw new Error('catalog_database_version_mismatch'); }
 const get = db.prepare('SELECT type,payload,fingerprint FROM products WHERE id=?');
 const bySlug = db.prepare('SELECT payload FROM products WHERE type=? AND slug=?');
 const identifiers = db.prepare('SELECT p.type,p.payload FROM identifiers i JOIN products p ON p.id=i.product_id WHERE i.value=? ORDER BY p.id LIMIT 51');
 const rows = db.prepare('SELECT payload FROM products WHERE type=? ORDER BY id');
 const cached = new Map();
 let cacheBytes = 0;
 const maximumCacheBytes = 2 * 1024 * 1024;
 const read = (id, type) => {
  if (typeof id !== 'string') return undefined;
  const row = get.get(id);
  return row && (!type || type === row.type) ? JSON.parse(row.payload) : undefined;
 };
 const repository = {
  metadata,
  close() { db.close(); },
  get: read,
  has(id, type) { if (typeof id !== 'string') return false; const row = get.get(id); return Boolean(row && (!type || row.type === type)); },
  bySlug(type, slug) { const row = bySlug.get(type, slug); return row ? JSON.parse(row.payload) : undefined; },
  *iterate(type) { for (const row of rows.iterate(type)) yield JSON.parse(row.payload); },
  count(type) { return db.prepare('SELECT count(*) AS count FROM products WHERE type=?').get(type).count; },
  lookup(type) { return { get: id => read(id, type), has: id => repository.has(id, type) }; },
  slugLookup(type) { return { get: slug => repository.bySlug(type, slug) }; },
  /** @param {{query?: string, type?: string, cursor?: string, limit?: number, category?: string, minTankLiters?: number, minPressureBar?: number, oilType?: string}} options */
  search({ query = '', type, cursor, limit = 10, category, minTankLiters, minPressureBar, oilType } = {}) {
   if (typeof query !== 'string' || query.length > 256 || !Number.isInteger(limit) || limit < 1 || limit > 50 || (type !== undefined && !['compressor', 'tool'].includes(type))) throw new Error('invalid_search_query');
   const filter = { query: normalize(query), type: type ?? null, category: category ?? null, minTankLiters: minTankLiters ?? null, minPressureBar: minPressureBar ?? null, oilType: oilType ?? null };
   const binding = digest(filter);
   let after = '';
   if (cursor) {
    if (typeof cursor !== 'string' || cursor.length > 1024 || !/^[A-Za-z0-9_-]+$/.test(cursor)) throw new Error('invalid_cursor');
    let decoded; try { decoded = JSON.parse(Buffer.from(cursor, 'base64url')); } catch { throw new Error('invalid_cursor'); }
    if (decoded.version !== metadata.catalogVersion || decoded.query !== binding || typeof decoded.after !== 'string' || !/^[a-z0-9-]{1,160}$/.test(decoded.after)) throw new Error('stale_or_invalid_cursor');
    after = decoded.after;
   }
   const clauses = ['p.id > ?'], params = [after];
   if (type) { clauses.push('p.type = ?'); params.push(type); }
   if (category) { clauses.push('p.category = ?'); params.push(category); }
   if (minTankLiters !== undefined) { clauses.push('p.tank >= ?'); params.push(minTankLiters); }
   if (minPressureBar !== undefined) { clauses.push('p.pressure >= ?'); params.push(minPressureBar); }
   if (oilType) { clauses.push('p.oil = ?'); params.push(oilType); }
   const match = ftsQuery(query);
   if (query.trim() && !match) return { items: [] };
   if (match) {
    const exact = identifiers.all(identifierKey(query));
    if (exact.length) { clauses.push('p.id IN (SELECT product_id FROM identifiers WHERE value=?)'); params.push(identifierKey(query)); }
    else { clauses.push('p.id IN (SELECT id FROM product_search WHERE product_search MATCH ?)'); params.push(match); }
   }
   const result = db.prepare(`SELECT p.type,p.payload FROM products p WHERE ${clauses.join(' AND ')} ORDER BY p.id LIMIT ?`).all(...params, limit + 1);
   const items = result.slice(0, limit).map(row => ({ type: row.type, item: JSON.parse(row.payload) }));
   return { items, ...(result.length > limit ? { nextCursor: Buffer.from(JSON.stringify({ version: metadata.catalogVersion, query: binding, after: items.at(-1).item.id })).toString('base64url') } : {}) };
  },
  identify(inputs, limit = 50) {
   const matches = new Map();
   // All exact collisions are retained before a caller decides uniqueness.
   for (const input of inputs) for (const row of identifiers.all(identifierKey(input))) {
    const item = JSON.parse(row.payload); matches.set(item.id, { type: row.type, item, confidence: 'exact' });
   }
   if (matches.size) return [...matches.values()];
   for (const input of inputs.filter(value => normalize(value).length >= 4)) for (const row of repository.search({ query: input, limit: Math.min(50, limit) }).items) matches.set(row.item.id, { ...row, confidence: 'candidate' });
   return [...matches.values()].slice(0, limit);
  },
  searchKnowledge(query, limit = 7) { return repository.searchKnowledgePage(query, { limit }).items; },
  /** @param {string} query
   * @param {{limit?: number, type?: string, cursor?: string}} options */
  searchKnowledgePage(query, { limit = 18, type, cursor } = {}) {
   if (typeof query !== 'string' || query.length > 256 || !Number.isInteger(limit) || limit < 1 || limit > 50 || (type && !['compresseur', 'outil', 'guide', 'glossaire'].includes(type))) throw new Error('invalid_search_query');
   const match = ftsQuery(query); if (!match) return { items: [] };
   const binding = digest({ query: normalize(query), type: type ?? null, scope: 'site' });
   let offset = 0;
   if (cursor) {
    if (typeof cursor !== 'string' || cursor.length > 1024 || !/^[A-Za-z0-9_-]+$/.test(cursor)) throw new Error('invalid_cursor');
    const value = JSON.parse(Buffer.from(cursor, 'base64url'));
    if (value.version !== metadata.knowledgeVersion || value.query !== binding || !Number.isSafeInteger(value.offset) || value.offset < 0 || value.offset > 1_000_000) throw new Error('stale_or_invalid_cursor');
    offset = value.offset;
   }
   const parameters = [match];
   if (type) parameters.push(type);
   const rows = db.prepare(`SELECT k.url,k.title,k.type,k.keywords FROM knowledge_search s JOIN knowledge k ON k.url=s.url WHERE knowledge_search MATCH ? ${type ? 'AND lower(k.type)=?' : ''} ORDER BY bm25(knowledge_search),k.url LIMIT ? OFFSET ?`).all(...parameters, limit + 1, offset);
   return { items: rows.slice(0, limit).map(row => ({ url: String(row.url), title: String(row.title), type: String(row.type), keywords: String(row.keywords) })), ...(rows.length > limit ? { nextCursor: Buffer.from(JSON.stringify({ version: metadata.knowledgeVersion, query: binding, offset: offset + limit })).toString('base64url') } : {}) };
  },
  *candidateCompressors(requiredPressureBar, averageFlowLpm) {
   // Necessary conditions only: the shared engine still makes the verdict.
   const statement = db.prepare("SELECT payload FROM products WHERE type='compressor' AND pressure>=? AND duty IS NOT NULL AND fad_max>=? AND confidence IN ('A','B') ORDER BY id");
   for (const row of statement.iterate(requiredPressureBar, averageFlowLpm)) yield JSON.parse(row.payload);
  },
  evaluate(compressorId, toolId, safetyMargin = .25) {
   if (!Number.isFinite(safetyMargin) || safetyMargin < 0 || safetyMargin > 1) throw new Error('invalid_safety_margin');
   const compressor = get.get(compressorId), tool = get.get(toolId);
   if (compressor?.type !== 'compressor' || tool?.type !== 'tool') return undefined;
   const key = [metadata.catalogVersion, CALCULATION_VERSION, compressor.fingerprint, tool.fingerprint, safetyMargin].join(':');
   if (cached.has(key)) return structuredClone(cached.get(key).value);
   const value = { id: `${compressorId}--${toolId}`, compressorId, toolId, ...evaluateCompatibility(JSON.parse(compressor.payload), JSON.parse(tool.payload), { safetyMargin }) };
   const bytes = Buffer.byteLength(JSON.stringify(value)) + Buffer.byteLength(key);
   while (cached.size && cacheBytes + bytes > maximumCacheBytes) { const oldest = cached.keys().next().value; cacheBytes -= cached.get(oldest).bytes; cached.delete(oldest); }
   if (bytes <= maximumCacheBytes) { cached.set(key, { value, bytes }); cacheBytes += bytes; }
   return structuredClone(value);
  },
  cacheStats() { return { entries: cached.size, bytes: cacheBytes, maximumBytes: maximumCacheBytes }; },
 };
 return repository;
}

export function compactProductMatch({ type, item }) {
 return { id: item.id, type, title: item.label ?? `${item.brand} ${item.model}`, brand: item.brand, model: item.model, url: productUrl(type, item), identifiers: identifierValues(item), ...(type === 'tool' ? { demand: { demandModel: item.demandModel, ...(item.workingPressureBar?.typical ? { pressure: item.workingPressureBar.typical } : {}), ...(item.airflowLpm ? { airflow: item.airflowLpm.typical } : {}), ...(item.airPerActionLiters ? { airPerAction: item.airPerActionLiters, actionLabel: item.actionLabel } : {}) } } : {}) };
}

export function repositoryCatalog(repository) {
 // No product array is materialized at service startup.
 return { ...repository.metadata, schemaVersion: '2.1.0', repository, compressors: [], tools: [], toolTaxonomy: repository.metadata.toolTaxonomy ?? [] };
}

export function calculationSnapshotMetadata(repository) {
 return { pairs: [], catalogVersion: repository.metadata.catalogVersion, calculationVersion: CALCULATION_VERSION,
  verdictVersion: digest({ catalogVersion: repository.metadata.catalogVersion, calculationVersion: CALCULATION_VERSION, mode: 'on-demand-v1' }) };
}
