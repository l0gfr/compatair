import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from '../../src/data/catalog';
import { applyReviewedAircraftSourceRepair } from './reviewed-aircraft-sources-2026-10-23.mjs';
import aircraftSourceRepairs from '../../src/data/imports/source-url-repairs-aircraft-2026-10-23.json';
import { evidenceSchema } from '../../src/domain/catalog';

const products = new Map([...compressors, ...tools].map(product => [product.id, product]));
const fixedInputs = ['tankLiters', 'maxPressureBar', 'fadCurve', 'intakeFlowLpm', 'dutyCycle', 'oilType', 'noiseDb', 'powerKw', 'weightKg', 'voltage', 'phase', 'confidence', 'status', 'demandModel', 'workingPressureBar', 'airflowLpm', 'airflowBasis', 'airPerActionLiters', 'minimumCompressorPowerKw', 'recommendedHose'];

describe('Aircraft manufacturer outage source repairs, October23', () => {
 it('covers exactly150 manufacturer URLs,150 models and153 historical proof references', () => {
  expect(aircraftSourceRepairs.pending).toEqual([]);
  expect(aircraftSourceRepairs.repairs).toHaveLength(150);
  expect(new Set(aircraftSourceRepairs.repairs.map(row => row.oldUrl)).size).toBe(150);
  expect(aircraftSourceRepairs.products).toHaveLength(150);
  expect(aircraftSourceRepairs.products.filter(row => row.kind === 'compressors')).toHaveLength(88);
  expect(aircraftSourceRepairs.products.flatMap(row => row.evidenceChanges)).toHaveLength(153);
 });
 it('keeps the manufacturer transcripts immutable and explicitly secondary', () => {
  for (const archive of aircraftSourceRepairs.archiveVerification) {
   const bytes = readFileSync(new URL(`../../src/data/imports/catalog-${archive.kind}-2026-09-27.json`, import.meta.url));
   expect(createHash('sha256').update(bytes).digest('hex')).toBe(archive.sha256);
  }
  for (const repair of aircraftSourceRepairs.products) {
   const product = products.get(repair.productId)!;
   expect(product).toBeDefined();
   for (const change of repair.evidenceChanges) {
    const proof = product.evidence.find(evidence => evidence.id === change.before.id)!;
    expect(proof).toEqual(change.after);
    expect(proof.retrievedAt).toBe(change.before.retrievedAt);
    expect(proof.sourceRole).toBe('secondary');
    expect(proof.sourceLabel).toContain('archive CompatAir');
    expect(new URL(proof.sourceUrl).hostname).toBe('raw.githubusercontent.com');
    expect(proof.sourceUrl).toContain(`/6205a81599051d10cd378ed8e73f66a0e5f47e86/`);
   }
   expect(product.image).toEqual(repair.imageAfter);
  }
 });
 it('adds distinct dated manufacturer documentation and visibly attributes every disagreement', () => {
  for (const repair of aircraftSourceRepairs.products) {
   const product = products.get(repair.productId)!;
   const current = product.evidence.find(evidence => evidence.id === repair.manufacturerEvidence.id)!;
   expect(current).toEqual(repair.manufacturerEvidence);
   expect(current.sourceRole).toBe('primary');
   expect(current.retrievedAt).toBe('2026-10-23');
   expect(new URL(current.sourceUrl).protocol).toBe('https:');
   expect(new URL(current.sourceUrl).hostname).not.toBe('raw.githubusercontent.com');
   expect(repair.document.pdfSha256).toMatch(/^[a-f0-9]{64}$/);
   expect(current.notes).toContain(repair.document.pdfSha256);
   for (const limitation of repair.appendLimitations) expect(product.editorial.limitations).toContain(limitation);
   for (const specification of repair.appendSpecifications) expect(product.specifications).toContainEqual(specification);
  }
 });
 it('identifies current SAR documentation as covering only the base compressor', () => {
  const repair = aircraftSourceRepairs.products.find(row => row.mpn === '2018831.2SAR')!;
  expect(repair.manufacturerEvidence.sourceLabel).toContain('article 2018831.2 (compresseur de base');
  expect(repair.manufacturerEvidence.sourceLabel).not.toContain('article 2018831.2SAR');
  expect(repair.appendLimitations.join(' ').toLowerCase()).toContain('compresseur de base');
 });
 it('preserves all reviewed identity and compatibility inputs, including unknown FAD and consumption basis', () => {
  for (const repair of aircraftSourceRepairs.products) {
   const product = products.get(repair.productId)!;
   for (const [key, value] of Object.entries(repair.technicalValues)) expect((product as Record<string, unknown>)[key]).toEqual(value);
   for (const key of fixedInputs) if (!(key in repair.technicalValues)) expect(product).not.toHaveProperty(key);
   if (repair.kind === 'compressors') expect(product).toMatchObject({ fadCurve: [] });
  }
 });
 it('rejects changed technical inputs, source substitution and fabricated historical refresh dates', () => {
  const repair = aircraftSourceRepairs.products[0];
  const current = structuredClone(compressors.find(product => product.id === repair.productId)!);
  current.evidence = current.evidence.filter(evidence => evidence.id !== repair.manufacturerEvidence.id).map(evidence => {
   const previous = repair.evidenceChanges.find(change => change.before.id === evidence.id)?.before;
   return previous ? evidenceSchema.parse(previous) : evidence;
  });
  current.image = repair.imageBefore;
  const variants = [
   (product: typeof current) => { product.mpn = 'different'; },
   (product: typeof current) => { product.evidence[0].sourceUrl = 'https://example.com/substitution'; },
   (product: typeof current) => { product.evidence[0].retrievedAt = '2026-10-23'; },
   (product: typeof current) => { product.maxPressureBar += 1; },
  ];
  for (const mutate of variants) { const wrong = structuredClone(current); mutate(wrong); expect(() => applyReviewedAircraftSourceRepair(wrong)).toThrow(); }
 });
});
