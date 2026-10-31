import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReservedOctober31Followup, beforeReservedOctober31Followup } from './reviewed-catalog-amendments-2026-10-31-reserved.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { technicalCardSvg } from './technical-card.mjs';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-10-31-reserved.json', import.meta.url)));
const native = row => parseCatalogProductSource(row.kind, readFileSync(new URL('../../' + row.file, import.meta.url), 'utf8'));
describe('October31 reserved candidate factual followup', () => {
 it('binds every changed technical card to its current record and exact dated byte proof', () => {
  const products = new Map(snapshot.rows.map(row => { const p = native(row); return [p.image.src, { kind: row.kind, product: p }]; }));
  expect(snapshot.technicalCards.length).toBeGreaterThan(0);
  for (const card of snapshot.technicalCards) {
   const current = products.get(card.path);
   expect(current, card.path).toBeDefined();
   const bytes = readFileSync(new URL('../../public' + card.path, import.meta.url));
   expect(createHash('sha256').update(bytes).digest('hex'), card.path).toBe(card.afterSha256);
   expect(bytes.length, card.path).toBe(card.afterBytes);
   expect(bytes.length, card.path).toBeLessThanOrEqual(250 * 1024);
   expect(card.beforeSha256, card.path).not.toBe(card.afterSha256);
   if (card.path.endsWith('.svg')) expect(bytes.toString('utf8'), card.path).toBe(technicalCardSvg(current.product, current.kind));
  }
 });
 it('replays all241 exact records, preserves evidence and rejects identity, field or deletion drift', () => {
  expect(snapshot.rows).toHaveLength(241);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeReservedOctober31Followup(after);
   expect(applyReservedOctober31Followup(structuredClone(before)), row.id).toEqual(after);
   expect(applyReservedOctober31Followup(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   let source = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(key => [key, before[key]])), row.sourceIndentation);
   if (row.sourceCompactExport) source = source.replace(';\n\nexport', ';\nexport');
   expect(createHash('sha256').update(source).digest('hex'), row.id).toBe(row.beforeFileSha256);
   for (const key of Object.keys(before).filter(key => !row.fields.includes(key))) expect(after[key], row.id + '/' + key).toEqual(before[key]);
   for (const key of ['brand', 'model', 'mpn']) expect(() => applyReservedOctober31Followup({ ...before, [key]: 'unreviewed' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReservedOctober31Followup(drift), row.id).toThrow('base');
   expect(() => beforeReservedOctober31Followup(drift), row.id).toThrow('historical');
   const ids = new Set(after.evidence.map(e => e.id));
   for (const refs of Object.values(after.fieldSources)) for (const id of refs) expect(ids.has(id), row.id).toBe(true);
   const schema = row.kind === 'tools' ? toolProfileSchema : compressorSchema;
   const parsed = schema.parse(after), current = (row.kind === 'tools' ? tools : compressors).find(p => p.id === row.id);
   for (const key of Object.keys(after)) expect(Object.hasOwn(parsed, key), row.id + '/ignored-field/' + key).toBe(true);
   if (after.demandModel === 'fixed-flow' && after.airflowBasis !== before.airflowBasis) {
    const flowFacts = after.editorial.verifiedFacts.filter(fact => /consommation|débit/i.test(fact)).join(' ');
    if (after.airflowBasis === 'unqualified') {
     expect(flowFacts, row.id).toContain('de régime non précisé');
     expect(flowFacts, row.id).not.toMatch(/consommation (moyenne|maximale)/i);
    }
    if (after.airflowBasis === 'free-speed') expect(flowFacts, row.id).toContain('à vide');
   }
   expect(current, row.id).toEqual(row.kind === 'tools' ? { ...parsed, category: toolCategoryLabel(parsed.categoryId) } : parsed);
  }
  const outside = { id: 'outside-reserved-followup' }; expect(applyReservedOctober31Followup(outside)).toBe(outside);
 });
 it('preserves every nonconclusive qualification through the runtime projection and engine', () => {
  const c = snapshot.rows.filter(r => r.kind === 'compressors').map(r => compressorSchema.parse(native(r)));
  const t = snapshot.rows.filter(r => r.kind === 'tools').map(r => toolProfileSchema.parse(native(r)));
  const ample = compressorSchema.parse({ ...compressors[0], id: 'fixture-ample', slug: 'fixture-ample', maxPressureBar: 20, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 20, litersPerMinute: 100000 }], dutyCycle: 1 });
  const runtime = createRuntimeCatalog([...c, ample], t, CATALOG_VERIFIED_AT, 'b'.repeat(64));
  for (const tool of t) {
   const verdict = evaluateCompatibility(ample, tool);
   expect(evaluateCompatibility(runtime.compressors.at(-1), runtime.tools.find(p => p.id === tool.id)), tool.id).toEqual(verdict);
   if (tool.demandModel === 'variable-volume' || tool.airflowBasis) expect(verdict.verdict, tool.id).toBe('insufficient_data');
  }
  for (const compressor of c) {
   for (const tool of t.slice(0, 3)) expect(evaluateCompatibility(runtime.compressors.find(p => p.id === compressor.id), runtime.tools.find(p => p.id === tool.id)), compressor.id).toEqual(evaluateCompatibility(compressor, tool));
   const row = snapshot.rows.find(r => r.id === compressor.id);
   if (Object.hasOwn(row.before, 'dutyCycle') && !Object.hasOwn(row.after, 'dutyCycle')) {
    expect(compressor.dutyCycle, compressor.id).toBeUndefined();
    const pressure = compressor.fadCurve[0]?.pressureBar ?? Math.min(2, compressor.maxPressureBar);
    const probe = { ...t[0], id: 'fixture-duty-probe', slug: 'fixture-duty-probe', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 1, typical: 1, max: 1 } };
    delete probe.airflowBasis;
    const projection = createRuntimeCatalog([compressor], [probe], CATALOG_VERIFIED_AT, 'b'.repeat(64));
    expect(evaluateCompatibility(compressor, probe).verdict, compressor.id).toBe('insufficient_data');
    expect(evaluateCompatibility(projection.compressors[0], projection.tools[0]).verdict, compressor.id).toBe('insufficient_data');
   }
  }
  const pferd = t.find(p => p.id === 'pferd-pg-3-250-s');
  expect(pferd.demandModel).toBe('variable-volume'); expect(pferd.airflowLpm).toBeUndefined();
  expect(pferd.specifications.some(s => s.value.includes('0.49') && s.value.includes('0.21'))).toBe(true);
  for (const compressor of c.filter(p => p.brand === 'ABAC' || p.model.startsWith('RSb'))) expect(compressor.fadCurve).toEqual([]);
 });
 it('covers exactly the269 remaining candidates, without approving them or erasing the complete source inventory', () => {
  const report = JSON.parse(readFileSync(new URL('../../docs/editorial/indexation-reserved-followup-2026-10-31.json', import.meta.url)));
  const prior = JSON.parse(readFileSync(new URL('../../docs/editorial/indexation-review-2026-10-31-supplement.json', import.meta.url)));
  const remaining = prior.pages.filter(page => page.decision !== 'approved').map(page => page.path).sort();
  expect(report.candidates).toHaveLength(269);
  expect(report.candidates.map(page => page.path).sort()).toEqual(remaining);
  expect(new Set(remaining).size).toBe(269);
  expect(report.summary).toEqual({ 'ready-for-review': 232, 'needs-manufacturer-clarification': 13, 'needs-source-or-comparison': 21, 'rejected-duplicate': 3 });
  for (const page of report.candidates) expect(page.admissionDecision).toBe('not-admitted-by-this-followup');
  expect(report.completeSourceAudit.scope.kind).toBe('inventory');
  expect(report.completeSourceAudit.summary).toMatchObject({ checked: 7517, broken: 10, unverified: 522, auditUnavailable: false });
  expect(report.completeSourceAudit.anomalies).toHaveLength(532);
 });
});
