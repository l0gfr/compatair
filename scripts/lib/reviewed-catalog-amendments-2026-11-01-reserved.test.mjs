import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReservedNovember1Followup, beforeReservedNovember1Followup } from './reviewed-catalog-amendments-2026-11-01-reserved.mjs';
import { parseCatalogProductSource, buildCatalogProductSource } from './catalog-tooling.mjs';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { toolCategoryLabel } from '../../src/data/taxonomy';
import { createRuntimeCatalog } from '../../src/domain/runtime-catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { createCatalogScope } from '../../src/domain/data-governance';
import { evidenceHistory } from '../../src/data/evidence-history';
const snapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-11-01-reserved.json', import.meta.url)));
import { beforeReservedNovember3Followup } from './reviewed-catalog-amendments-2026-11-03-reserved.mjs';
const laterSnapshot = JSON.parse(readFileSync(new URL('../../src/data/imports/catalog-amendments-reviewed-2026-11-03-reserved.json', import.meta.url)));
const native = row => beforeReservedNovember3Followup(parseCatalogProductSource(row.kind, readFileSync(new URL('../../' + row.file, import.meta.url), 'utf8')));
const datedBytes = row => {
 const later = laterSnapshot.rows.find(later => later.id === row.id);
 if (!later) return readFileSync(new URL('../../' + row.file, import.meta.url));
 const record = native(row);
 let bytes = buildCatalogProductSource(row.kind, Object.fromEntries(later.sourcePropertyOrder.map(key => [key, record[key]])), later.sourceIndentation);
 if (later.sourceCompactExport) bytes = bytes.replace(';\n\nexport', ';\nexport');
 expect(digest(bytes), row.id + '/dated-Nov3-boundary').toBe(later.beforeFileSha256);
 return bytes;
};
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const ledgerBytesAtReview = (bytes, file, reviewedAt) => {
 const key = file === 'config/indexation-editorial-reviews.json' ? 'reviews'
  : file === 'config/indexation-qualifications.json' ? 'entries' : undefined;
 if (!key) return bytes;
 const cutoff = Date.parse(reviewedAt), ledger = JSON.parse(bytes);
 if (!Number.isFinite(cutoff)) throw new Error('Invalid historical review time');
 ledger[key] = ledger[key].filter(entry => {
  const timestamp = Date.parse(entry.reviewedAt);
  if (!Number.isFinite(timestamp)) throw new Error('Invalid ledger review time');
  return timestamp <= cutoff;
 });
 return JSON.stringify(ledger, null, 2) + '\n';
};
describe('November1 factual corrections of reserved references', () => {
 it('accounts for the82 reserves without opening pages or rewriting a publication ledger', () => {
  const report = JSON.parse(readFileSync(new URL('../../docs/editorial/indexation-reserved-followup-2026-11-01.json', import.meta.url)));
  const original = JSON.parse(readFileSync(new URL('../../docs/editorial/indexation-review-2026-11-01.json', import.meta.url)));
  expect(report.candidates).toHaveLength(82);
  expect(report.candidates.map(c => c.path).sort()).toEqual(original.pages.filter(p => p.decision !== 'approved').map(p => p.path).sort());
  expect(report.summary).toEqual({ 'ready-for-review': 65, 'needs-manufacturer-clarification': 7, 'needs-source-access': 7, 'rejected-duplicate': 2, 'needs-source-or-comparison': 1 });
  for (const page of report.candidates) expect(page.admissionDecision).toBe('not-admitted-by-this-followup');
  // The exact dated ledger remains immutable while later daily reviews append.
  for (const ledger of report.preservedLedgers) expect(digest(ledgerBytesAtReview(readFileSync(new URL('../../' + ledger.file, import.meta.url), 'utf8'), ledger.file, report.reviewedAt))).toBe(ledger.sha256);
  expect(report.completeSourceAudit.scope.kind).toBe('inventory');
  expect(report.completeSourceAudit.summary).toMatchObject({ checked: 7521, broken: 10, unverified: 472, auditUnavailable: false });
  expect(report.completeSourceAudit.anomalies).toHaveLength(482);
 });
 it('retains the cutoff entry and detects historical mutations despite later appends', () => {
  const cutoff = '2026-11-01T13:19:56.128Z';
  for (const [file, key] of [['config/indexation-editorial-reviews.json', 'reviews'], ['config/indexation-qualifications.json', 'entries']]) {
   const historical = { schemaVersion: 1, [key]: [{ reviewedAt: cutoff, note: 'historical proof' }] };
   const bytes = JSON.stringify(historical, null, 2) + '\n';
   const appended = { ...historical, [key]: [...historical[key], { reviewedAt: '2026-11-02T07:00:00.000Z', note: 'later review' }] };
   expect(ledgerBytesAtReview(JSON.stringify(appended), file, cutoff)).toBe(bytes);
   const changed = structuredClone(appended); changed[key][0].note = 'changed historical proof';
   expect(digest(ledgerBytesAtReview(JSON.stringify(changed), file, cutoff))).not.toBe(digest(bytes));
   const removed = { ...appended, [key]: appended[key].slice(1) };
   expect(digest(ledgerBytesAtReview(JSON.stringify(removed), file, cutoff))).not.toBe(digest(bytes));
   expect(() => ledgerBytesAtReview(JSON.stringify({ ...historical, [key]: [{ reviewedAt: 'invalid' }] }), file, cutoff)).toThrow('Invalid ledger review time');
  }
 });
 it('explains the scope delta from exactly seven retired fixed-flow profiles', () => {
  const retired = snapshot.rows.filter(row => row.before.demandModel === 'fixed-flow' && row.after.demandModel === 'variable-volume');
  expect(retired).toHaveLength(7);
  const previous = createCatalogScope(compressors.map(beforeReservedNovember1Followup), tools.map(beforeReservedNovember1Followup));
  const current = createCatalogScope(compressors.map(beforeReservedNovember3Followup), tools.map(beforeReservedNovember3Followup));
  expect(previous.fixed_flow_tool_count).toBe(8876);
  expect(previous.fixed_verdict_count).toBe(45791284);
  expect(previous.parametric_combination_count).toBe(57837549);
  expect(current.fixed_flow_tool_count).toBe(8869);
  expect(current.fixed_verdict_count).toBe(previous.fixed_verdict_count - retired.length * current.compressor_count);
  expect(current.explorable_combination_count).toBe(previous.explorable_combination_count);
 });
 it('replays every exact record without changing historical evidence, identity or unrelated fields', () => {
  const proof = snapshot.evidenceHistoryAppend;
  expect(digest(JSON.stringify(evidenceHistory.events.slice(0, proof.previousEventCount)))).toBe(proof.previousEventsSha256);
  expect(evidenceHistory.events.slice(0, laterSnapshot.evidenceHistoryAppend.previousEventCount)).toHaveLength(proof.previousEventCount + proof.addedEvents);
  expect(proof.addedEvents).toBe(72);
  expect(snapshot.rows).toHaveLength(72);
  expect(new Set(snapshot.rows.map(r => r.id)).size).toBe(72);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeReservedNovember1Followup(after);
   expect(applyReservedNovember1Followup(structuredClone(before)), row.id).toEqual(after);
   expect(applyReservedNovember1Followup(structuredClone(after)), row.id).toEqual(after);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   let source = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(k => [k, before[k]])), row.sourceIndentation);
   if (row.sourceCompactExport) source = source.replace(';\n\nexport', ';\nexport');
   expect(digest(source), row.id).toBe(row.beforeFileSha256);
   expect(digest(datedBytes(row)), row.id).toBe(row.afterFileSha256);
   for (const k of Object.keys(before).filter(k => !row.fields.includes(k))) expect(after[k], row.id + '/' + k).toEqual(before[k]);
   for (const k of ['brand', 'model', 'mpn']) expect(() => applyReservedNovember1Followup({ ...before, [k]: 'unreviewed' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unreviewed';
   expect(() => applyReservedNovember1Followup(drift), row.id).toThrow('base');
   expect(() => beforeReservedNovember1Followup(drift), row.id).toThrow('historical');
   const parsed = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(after);
   const current = beforeReservedNovember3Followup((row.kind === 'tools' ? tools : compressors).find(p => p.id === row.id));
   expect(current, row.id).toEqual(row.kind === 'tools' ? { ...parsed, category: toolCategoryLabel(parsed.categoryId) } : parsed);
   const ids = new Set(after.evidence.map(e => e.id));
   for (const references of Object.values(after.fieldSources)) for (const id of references) expect(ids.has(id), row.id).toBe(true);
   for (const proof of row.sourceReadings) { expect(proof.complete).toBe(true); expect(proof.httpStatus).toBe(200); expect(proof.hash).toMatch(/^[a-f0-9]{64}$/); }
  }
 });
 it('keeps retired measurement points nonconclusive in native and runtime engines', () => {
  const c = snapshot.rows.filter(r => r.kind === 'compressors').map(r => compressorSchema.parse(native(r)));
  const t = snapshot.rows.filter(r => r.kind === 'tools').map(r => toolProfileSchema.parse(native(r)));
  const ample = compressorSchema.parse({ ...compressors[0], id: 'fixture-nov1-ample', slug: 'fixture-nov1-ample', maxPressureBar: 50, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 50, litersPerMinute: 100000 }], dutyCycle: 1 });
  const runtime = createRuntimeCatalog([...c, ample], t, CATALOG_VERIFIED_AT, 'b'.repeat(64));
  for (const tool of t) {
   const verdict = evaluateCompatibility(ample, tool);
   expect(evaluateCompatibility(runtime.compressors.at(-1), runtime.tools.find(p => p.id === tool.id)), tool.id).toEqual(verdict);
   if (tool.demandModel === 'variable-volume' || tool.airflowBasis) expect(verdict.verdict, tool.id).toBe('insufficient_data');
  }
  for (const compressor of c) {
   const pressure = compressor.fadCurve[0]?.pressureBar || Math.min(2, compressor.maxPressureBar);
   const probe = { ...t[0], id: 'fixture-nov1-demand', slug: 'fixture-nov1-demand', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 1, typical: 1, max: 1 } };
   delete probe.airflowBasis;
   const projection = createRuntimeCatalog([compressor], [probe], CATALOG_VERIFIED_AT, 'b'.repeat(64));
   const verdict = evaluateCompatibility(compressor, probe);
   expect(evaluateCompatibility(projection.compressors[0], projection.tools[0]), compressor.id).toEqual(verdict);
   if (!compressor.fadCurve.length || compressor.dutyCycle === undefined) expect(verdict.verdict, compressor.id).toBe('insufficient_data');
  }
 });
 it('binds every changed card to the new record and retains its exact previous byte proof', () => {
  expect(snapshot.replacementTechnicalCards).toHaveLength(3);
  for (const card of snapshot.replacementTechnicalCards) {
   const row = snapshot.rows.find(row => row.id === card.id), product = native(row);
   expect(product.image.src).toBe(card.path);
   const currentBytes = readFileSync(new URL('../../public' + card.path, import.meta.url));
   const later = laterSnapshot.technicalCards.find(proof => proof.path === card.path);
   if (later) { expect(later.beforeSha256, card.path).toBe(card.afterSha256); expect(digest(currentBytes), card.path).toBe(later.afterSha256); }
   const datedProduct = native(snapshot.rows.find(row => row.id === (card.id ?? snapshot.rows.find(row => native(row).image.src === card.path)?.id)));
   const bytes = later ? Buffer.from(technicalCardSvg(datedProduct, snapshot.rows.find(row => row.id === datedProduct.id).kind)) : currentBytes;
   expect(bytes.toString('utf8')).toBe(technicalCardSvg(product, row.kind));
   expect(digest(bytes)).toBe(card.afterSha256);
   expect(bytes.toString('utf8')).toContain('Non établi');
   expect(digest(readFileSync(new URL('../../public' + card.previousPath, import.meta.url)))).toBe(card.previousSha256);
  }
  expect(snapshot.technicalCards).toHaveLength(4);
  for (const card of snapshot.technicalCards) {
   const row = snapshot.rows.find(row => native(row).image.src === card.path), after = native(row), before = beforeReservedNovember1Followup(after);
   const currentBytes = readFileSync(new URL('../../public' + card.path, import.meta.url));
   const later = laterSnapshot.technicalCards.find(proof => proof.path === card.path);
   if (later) { expect(later.beforeSha256, card.path).toBe(card.afterSha256); expect(digest(currentBytes), card.path).toBe(later.afterSha256); }
   const datedProduct = native(snapshot.rows.find(row => row.id === (card.id ?? snapshot.rows.find(row => native(row).image.src === card.path)?.id)));
   const bytes = later ? Buffer.from(technicalCardSvg(datedProduct, snapshot.rows.find(row => row.id === datedProduct.id).kind)) : currentBytes;
   expect(digest(technicalCardSvg(before, row.kind)), card.path).toBe(card.beforeSha256);
   expect(digest(bytes), card.path).toBe(card.afterSha256); expect(bytes.length).toBe(card.afterBytes); expect(bytes.length).toBeLessThanOrEqual(250 * 1024);
   expect(bytes.toString('utf8'), card.path).toBe(technicalCardSvg(after, row.kind));
  }
 });
});
