import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { buildCatalogExpansion } from './catalog-expansion-2026-09-27.mjs';
import { compressors, tools } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { evaluateCompatibility } from '../../src/domain/compatibility';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { scannerConfigurationForTool } from '../../src/domain/scanner-journey';
import { getToolVerdictSummaries } from '../../src/domain/catalog-insights';

const read = kind => JSON.parse(readFileSync(new URL(`../../src/data/imports/catalog-${kind}-2026-09-27.json`, import.meta.url)));
const snapshots = [read('compressors'), read('tools')];
const expansion = buildCatalogExpansion(...snapshots);
const relocationLedger = JSON.parse(readFileSync(new URL('../../src/data/imports/source-url-repairs-aircraft-2026-10-01.json', import.meta.url)));
const october2Ledger = JSON.parse(readFileSync(new URL('../../src/data/imports/source-url-repairs-2026-10-02.json', import.meta.url)));
const relocations = new Map([...relocationLedger.repairs, ...october2Ledger.repairs].flatMap(repair => repair.references.map(reference => [reference.productId, { repair, reference }])));
const withReviewedSources = product => {
 const relocation = relocations.get(product.id);
 if (!relocation) return product;
 const updated = structuredClone(product);
 const { repair, reference } = relocation;
 const evidence = updated.evidence.find(item => item.id === reference.evidenceId);
 if (!evidence || evidence.sourceUrl !== repair.oldUrl || evidence.retrievedAt !== snapshots[0].observedAt || updated.image?.sourceUrl !== repair.oldUrl) throw new Error('Relocation does not match the original source observation');
 evidence.sourceUrl = repair.newUrl;
 evidence.retrievedAt = repair.verifiedAt;
 updated.image.sourceUrl = repair.newUrl;
 if (repair.evidencePatch) Object.assign(evidence, repair.evidencePatch);
 if (repair.withheldSpecificationLabels) updated.specifications = updated.specifications.filter(field => !repair.withheldSpecificationLabels.includes(field.label));
 if (repair.withheldVerifiedFacts) updated.editorial.verifiedFacts = updated.editorial.verifiedFacts.filter(fact => !repair.withheldVerifiedFacts.includes(fact));
 for (const fragment of repair.overviewRemovals ?? []) updated.editorial.overview = updated.editorial.overview.replace(fragment, '');
 return updated;
};
const mutate = (kind, brand, patch) => {
 const data = structuredClone(snapshots);
 const row = data[kind].rows.find(r => r.brand === brand);
 patch(row, data[kind]);
 return () => buildCatalogExpansion(...data);
};
describe('700 additional documented manufacturer references', () => {
 it('adds exactly 200 compressors and 500 tools with multiple brands and distinct references', () => {
  expect(expansion.compressors).toHaveLength(200); expect(expansion.tools).toHaveLength(500);
  expect(compressors).toHaveLength(3019); expect(tools).toHaveLength(13087);
  expect(new Set(expansion.compressors.map(p => p.brand)).size).toBe(5);
  expect(new Set(expansion.tools.map(p => p.brand)).size).toBe(4);
  expect(expansion.tools.filter(p => p.demandModel === 'per-action')).toHaveLength(63);
 });
 it('reproduces the published products and every critical field from source transcriptions', () => {
  for (const p of expansion.compressors) expect(compressors.find(x => x.id === p.id)).toEqual(compressorSchema.parse(withReviewedSources(p)));
  for (const p of expansion.tools) expect(tools.find(x => x.id === p.id)).toEqual({ ...toolProfileSchema.parse(withReviewedSources(p)), category: toolCategoryLabel(p.categoryId) });
 });
 it('rejects a relocation that would overwrite an unreviewed source observation', () => {
  const original = expansion.compressors.find(product => relocations.has(product.id));
  expect(original).toBeDefined();
  for (const change of [product => { product.evidence[0].sourceUrl = 'https://example.com/unreviewed'; }, product => { product.evidence[0].retrievedAt = '2026-09-28'; }, product => { product.image.sourceUrl = 'https://example.com/unreviewed'; }]) {
   const changed = structuredClone(original);
   change(changed);
   expect(() => withReviewedSources(changed)).toThrow('Relocation does not match');
  }
 });
 it('rejects intake promoted to FAD, inferred duty cycle and packaging weight promoted to net mass', () => {
  expect(mutate(0, 'Aircraft', r => { r.fadCurve = [{ pressureBar: 6, litersPerMinute: r.intakeFlowLpm }]; })).toThrow();
  expect(mutate(0, 'PREBENA', r => { r.dutyCycle = 1; })).toThrow();
  expect(mutate(0, 'Nuair', r => { r.weightKg = 30; })).toThrow();
  expect(mutate(0, 'Black+Decker', r => { r.intakeFlowLpm = 180; })).toThrow();
 });
 it('requires the actual per-shot pressure and explicit average-consumption limitations', () => {
  expect(mutate(1, 'Bostitch', r => { r.workingPressureBar.typical = 6.3; })).toThrow();
  expect(mutate(1, 'Bostitch', r => { r.airflowLpm = 100; })).toThrow();
  expect(mutate(1, 'M7', r => { r.flowBasis = r.flowBasis.replace('moyenne ', ''); })).toThrow();
  expect(mutate(1, 'M7', r => { const raw = JSON.parse(r.rawLine); delete raw.fields['Air Pressure']; r.rawLine = JSON.stringify(raw); })).toThrow();
  expect(mutate(1, 'Mirka', r => { r.airflowLpm += 1; })).toThrow();
 });
 it('never turns an average consumption into continuous compatibility, including runtime and cached summaries', () => {
  const average = tools.find(t => t.id === 'm7-nc-4255q');
  expect(average?.airflowBasis).toBe('average');
  const c = { ...compressors[0], maxPressureBar: 10, fadCurve: [{ pressureBar: 6.3, litersPerMinute: 1000 }], confidence: 'A', dutyCycle: 1 };
  const continuous = { ...average, id: 'documented-flow-test', airflowBasis: undefined };
  expect(evaluateCompatibility(c, continuous).verdict).toBe('continuous');
  expect(evaluateCompatibility(c, average).verdict).toBe('insufficient_data');
  expect(scannerConfigurationForTool(average)).toBeUndefined();
  const summaries = getToolVerdictSummaries([c], [continuous, average]);
  expect(summaries.map(s => s.continuous)).toEqual([1, 0]);
  const runtime = createRuntimeCatalog([c], [average], '2026-09-27', 'a'.repeat(64));
  expect(runtime.tools[0].airflowBasis).toBe('average');
 });
 it('rejects changed identities, missing hashes, unreviewed dates and untrusted source URLs', () => {
  expect(mutate(1, 'M7', r => { r.mpn = 'invented'; })).toThrow();
  for (const patch of [s => { s.observedAt = '2026-09-28'; }, s => { s.sha256 = ''; }, s => { s.url = 'https://example.com/product'; }, s => { s.url += '?token=private'; }]) {
   expect(mutate(1, 'M7', (r, s) => patch(s.sources.find(x => x.id === r.sourceId)))).toThrow();
  }
 });
});
