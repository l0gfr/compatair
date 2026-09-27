import { describe, expect, it } from 'vitest';
import archive from '../config/legacy-verdict-archive.json';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../src/data/catalog';
import { createCatalogSnapshot } from '../src/domain/snapshots';
import { createVerdictPublication, validateVerdictPublication, decisionVersion, demandVerdicts } from './verdict-publication.mjs';
import { evaluateCompatibility } from './air-compatibility.mjs';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { readDecisionSnapshot, readDemandVerdicts } from './demand-verdicts.mjs';

const selected = tools.filter(tool => tool.demandModel === 'fixed-flow').slice(0, 2);
const catalog = createCatalogSnapshot({ compressors: compressors.slice(0, 2), tools: selected, toolTaxonomy: [], verifiedAt: CATALOG_VERIFIED_AT });
describe('on-demand publication', () => {
 it('loads the compact publication for the service and calculates only the eligible report cohort', async () => {
  const root = await mkdtemp(join(tmpdir(), 'compatair-publication-'));
  try {
   const path = join(root, 'verdicts.json'), publication = createVerdictPublication(catalog, archive);
   await writeFile(path, JSON.stringify(publication));
   expect(await readDecisionSnapshot(path, catalog)).toEqual({ ...publication, pairs: [] });
   const report = await readDemandVerdicts(path, catalog, { dimensions: { tools: { [selected[0].id]: 5 } } });
   expect([...report.pairs]).toHaveLength(2);
   await expect(readDecisionSnapshot(path, { ...catalog, catalogVersion: 'a'.repeat(64) })).rejects.toThrow('verdict_catalog_mismatch');
   await writeFile(path, JSON.stringify({ ...publication, summary: { continuous: 123 } }));
   await expect(readDemandVerdicts(path, catalog, {})).rejects.toThrow('invalid_verdict_publication');
  } finally { await rm(root, { recursive: true, force: true }); }
 });
 it('binds the contract to the complete catalog version and exposes no invented distribution', () => {
  const publication = createVerdictPublication(catalog, archive);
  expect(JSON.stringify(publication).length).toBeLessThan(4096);
  expect(publication).toMatchObject({ schemaVersion: '2.0.0', materializedPairCount: 0, aggregateVerdicts: { status: 'not_materialized' }, scope: { fixed_verdict_count: 4 } });
  expect(publication).not.toHaveProperty('pairs');
  expect(publication).not.toHaveProperty('summary');
  expect(decisionVersion('a'.repeat(64))).not.toBe(publication.verdictVersion);
 });
 it.each(['version', 'catalog', 'scope', 'pairs', 'summary', 'archive', 'endpoint'])('fails closed after a %s mutation', kind => {
  const value: any = structuredClone(createVerdictPublication(catalog, archive));
  if (kind === 'version') value.verdictVersion = 'a'.repeat(64);
  if (kind === 'catalog') value.verifiedAt = '2020-01-01';
  if (kind === 'scope') value.scope.fixed_verdict_count++;
  if (kind === 'pairs') value.pairs = [];
  if (kind === 'summary') value.summary = {};
  if (kind === 'archive') value.legacyArchive.verdicts = '/data/archives/../../verdicts.json';
  if (kind === 'endpoint') value.calculation.endpoint = 'https://example.com';
  expect(() => validateVerdictPublication(value, catalog)).toThrow();
 });
 it('evaluates only eligible demand cohorts and matches the engine across repeated passes', () => {
  expect([...demandVerdicts(catalog, { dimensions: { tools: {} } }).pairs]).toEqual([]);
  const report = demandVerdicts(catalog, { dimensions: { tools: { [selected[0].id]: 5, [selected[1].id]: 4 } } });
  const pairs = [...report.pairs];
  expect(pairs).toHaveLength(2);
  expect([...report.pairs]).toEqual(pairs);
  for (const [index, pair] of pairs.entries()) expect(pair).toMatchObject(evaluateCompatibility(catalog.compressors[index], selected[0]));
  expect(() => demandVerdicts(catalog, {}, 4)).toThrow();
 });
});
