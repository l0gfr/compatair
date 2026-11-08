import { beforeReservedNovember6CopyFollowup } from './reviewed-catalog-amendments-2026-11-06-copy.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { applyReservedNovember6Followup, beforeReservedNovember6Followup } from './reviewed-catalog-amendments-2026-11-06-followup.mjs';
import { parseCatalogProductSource, buildCatalogProductSource, productTechnicalSvgError } from './catalog-tooling.mjs';
import { technicalCardSvg } from './technical-card.mjs';
import { compressorSchema, toolProfileSchema } from '../../src/domain/catalog';
import { createRuntimeCatalog, runtimeCatalogSchema } from '../../src/domain/runtime-catalog';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { evidenceHistory } from '../../src/data/evidence-history';
import { createCatalogScope } from '../../src/domain/data-governance';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
const read = p => readFileSync(new URL('../../' + p, import.meta.url));
const digest = b => createHash('sha256').update(b).digest('hex');
const snapshot = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-06-followup.json'));
const native = row => beforeReservedNovember6CopyFollowup(parseCatalogProductSource(row.kind, read(row.file).toString()));
const datedHistory = evidenceHistory.events.slice(0,38536);
const copy = JSON.parse(read('src/data/imports/catalog-amendments-reviewed-2026-11-06-copy.json'));
const datedFileBytes = row => { const later=copy.rows.find(r=>r.id===row.id); if(!later)return read(row.file);const p=native(row);let b=buildCatalogProductSource(row.kind,Object.fromEntries(later.sourcePropertyOrder.map(k=>[k,p[k]])),later.sourceIndentation);if(later.sourceCompactExport)b=b.replace(';\n\nexport',';\nexport');return b; };
const ample = compressorSchema.parse({ ...compressors[0], id: 'nov6-regression-probe', slug: 'nov6-regression-probe', confidence: 'A', maxPressureBar: 50, dutyCycle: 1, fadCurve: [{ pressureBar: 1, litersPerMinute: 100000 }, { pressureBar: 50, litersPerMinute: 100000 }] });
describe('November6 factual reserve corrections', () => {
 it('replays97 exact changes and original bytes, preserving identity and every old proof', () => {
  expect(snapshot.rows).toHaveLength(97);
  expect(new Set(snapshot.rows.map(r => r.id)).size).toBe(97);
  for (const row of snapshot.rows) {
   const after = native(row), before = beforeReservedNovember6Followup(after);
   expect(after, row.id).toEqual(row.after);
   expect(before, row.id).toEqual(row.before);
   expect(beforeReservedNovember6CopyFollowup(applyReservedNovember6Followup(structuredClone(before))), row.id).toEqual(after);
   expect(beforeReservedNovember6CopyFollowup(applyReservedNovember6Followup(structuredClone(after))), row.id).toEqual(after);
   let bytes = buildCatalogProductSource(row.kind, Object.fromEntries(row.sourcePropertyOrder.map(k => [k, before[k]])), row.sourceIndentation);
   if (row.sourceCompactExport) bytes = bytes.replace(';\n\nexport', ';\nexport');
   expect(digest(bytes), row.id).toBe(row.beforeFileSha256);
   expect(digest(datedFileBytes(row)), row.id).toBe(row.afterFileSha256);
   expect(after.evidence.slice(0, before.evidence.length), row.id).toEqual(before.evidence);
   for (const key of ['brand', 'model', 'mpn']) expect(() => applyReservedNovember6Followup({ ...before, [key]: 'unreviewed' }), row.id).toThrow('identity');
   const drift = structuredClone(before); drift[row.fields[0]] = 'unknown';
   expect(() => applyReservedNovember6Followup(drift), row.id).toThrow('base');
   expect(() => beforeReservedNovember6Followup(drift), row.id).toThrow('historical');
   const parsed = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(after);
   for (const key of Object.keys(after)) expect(Object.hasOwn(parsed, key), row.id + '/' + key).toBe(true);
   const ids = new Set(after.evidence.map(e => e.id));
   for (const references of Object.values(after.fieldSources)) for (const id of references) expect(ids.has(id), row.id).toBe(true);
   for (const source of row.sourceReadings) { expect(source.hash).toMatch(/^[a-f0-9]{64}$/); expect(source.complete).toBe(true); expect(source.httpStatus).toBe(200); }
  }
 });
 it('preserves38383 historical events exactly and appends153 documentary proofs', () => {
  expect(snapshot.evidenceHistoryAppend.previousEventCount).toBe(38383);
  expect(snapshot.evidenceHistoryAppend.addedEvents).toBe(153);
  expect(digest(JSON.stringify(datedHistory.slice(0,38383)))).toBe(snapshot.evidenceHistoryAppend.previousEventsSha256);
  expect(datedHistory).toHaveLength(38536);
  expect(new Set(datedHistory.slice(38383).map(e => e.evidenceId)).size).toBe(153);
 });
 it('keeps native/runtime results equal and rejects unqualified demands and compressor conditions', () => {
  for (const row of snapshot.rows) {
   const value = (row.kind === 'tools' ? toolProfileSchema : compressorSchema).parse(native(row));
   const c = row.kind === 'tools' ? ample : value;
   const pressure = row.kind === 'tools' ? undefined : value.fadCurve[0]?.pressureBar ?? Math.min(2,value.maxPressureBar);
   const t = row.kind === 'tools' ? value : toolProfileSchema.parse({ ...tools.find(t => t.demandModel === 'fixed-flow'), id:'nov6-tool-probe',slug:'nov6-tool-probe', demandModel:'fixed-flow',airflowBasis:undefined, workingPressureBar:{min:pressure,typical:pressure,max:pressure},airflowLpm:{min:1,typical:1,max:1} });
   const runtime = runtimeCatalogSchema.parse(JSON.parse(JSON.stringify(createRuntimeCatalog([c],[t],CATALOG_VERIFIED_AT,'a'.repeat(64)))));
   const result = evaluateCompatibility(c,t);
   expect(evaluateCompatibility(runtime.compressors[0],runtime.tools[0]), row.id).toEqual(result);
   if (row.kind === 'tools' && row.action !== 'sata-source') { expect(result.verdict,row.id).toBe('insufficient_data'); expect(result.requiredFadLpm,row.id).toBeUndefined(); }
   if (row.kind === 'compressors' && (!value.fadCurve.length || value.dutyCycle === undefined)) expect(result.verdict,row.id).toBe('insufficient_data');
  }
 });
 it('updates only the actual scope affected by demand corrections', () => {
  const before = createCatalogScope(compressors.map(beforeReservedNovember6Followup), tools.map(beforeReservedNovember6Followup));
  const after = createCatalogScope(compressors,tools);
  expect(before.fixed_flow_tool_count).toBe(8846); expect(after.fixed_flow_tool_count).toBe(8823);
  expect(after.fixed_verdict_count).toBe(45517857); expect(after.parametric_combination_count).toBe(58110976);
  expect(after.explorable_combination_count).toBe(before.explorable_combination_count);
 });
 it('preserves old cards and regenerates all73 impacted cards exactly', () => {
  expect(snapshot.technicalCards).toHaveLength(73);
  for (const card of snapshot.technicalCards) {
   const row=snapshot.rows.find(r=>r.after.image.src===card.path);
   expect(digest(read('public'+card.previousPath))).toBe(card.previousSha256);
   expect(read('public'+card.previousPath).length).toBe(card.previousBytes);
   expect(read('public'+card.path).toString()).toBe(technicalCardSvg(native(row),row.kind));
   expect(productTechnicalSvgError(native(row), row.kind, read('public'+card.path).toString())).toBeNull();
   expect(digest(read('public'+card.path))).toBe(card.afterSha256);
   expect(read('public'+card.path).length).toBe(card.afterBytes);
  }
 });
});
