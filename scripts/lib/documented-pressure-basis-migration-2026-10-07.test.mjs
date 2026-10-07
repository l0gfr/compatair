import { parseCatalogProductSource } from './catalog-tooling.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { compressorSchema } from '../../src/domain/catalog';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';
import { buildDocumentedCompressorsOctober4 } from './documented-compressors-2026-10-04.mjs';
import { buildDocumentedCompressorsOctober4B } from './documented-compressors-2026-10-04-b.mjs';
import { buildDocumentedCompressorsOctober4C } from './documented-compressors-2026-10-04-c.mjs';
import { buildDocumentedCompressorsOctober5 } from './documented-compressors-2026-10-05.mjs';

// Reviewed before migration: snapshots, all other canonical product fields, and every image.
const batches = [
 ['2026-10-04', 114, 86, buildDocumentedCompressorsOctober4, 'dcebd1d2a771b8475d1e8d3579c04a3a2dd24e0aae5d5d3ff53a818415398208', '5a2032f64d210ec198aee88b3ab89ec3e017c9dc911339d7101816d12b4809f7', '8508ffc405fcd6df22698bf4579a3a41686d10598a4579a4c24a1be725f99a7f'],
 ['2026-10-04-b', 284, 136, buildDocumentedCompressorsOctober4B, '3824c0956078f5cdb15ae77526a76c421b46d71bd36fa4c6fd7a37cb03fe8594', '8d69acef56117133e35ed568e672f5c8731b00a78e9113202d998e4c597f4d18', '6c07a9b76244b314f3b7b2054d951b65836dd1772d392a3be1e78a100ef27b0d'],
 ['2026-10-04-c', 338, 82, buildDocumentedCompressorsOctober4C, 'bcb9562f5f0197ef7b8f5941ddce018650198c5bcd8d38a8f40d013a652088c3', 'd6a8651c1b324fdeefb8f4db690b0efb8a4976cc2e9d746da27f5b55e96cdbc8', 'dcb2f42b894cef7debd4ff11a4a8b4b40c53a5ddfbb76156a930e96aa99e32e4'],
 ['2026-10-05', 205, 95, buildDocumentedCompressorsOctober5, 'b2da6a45e2087e13ef6b175ac87d92406117bb66c74e051106648a1708539db0', '07b339923ed46ed2dc235d7733dc23148d5adf8f019f732e42e97d4df6b31fa3', '245feea2c8e272ce972cdcd573525180dee262c78a3fa25bf235e1f833fe8b2a'],
];
const digest = value => createHash('sha256').update(value).digest('hex');
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, stable(v)])) : value;
const withoutBasis = value => { const p = structuredClone(value); delete p.maxPressureBasis; delete p.fieldSources.maxPressureBasis; return p; };
const demand = pressure => ({ id: 'fixture', demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: 100, typical: 100, max: 100 }, confidence: 'B' });
const loadProduct = id => {
 const text = readFileSync(new URL(`../../src/data/products/compressors/${id}.ts`, import.meta.url), 'utf8');
 return compressorSchema.parse(parseCatalogProductSource('compressors', text));
};

describe('documented pressure basis migration October 7', () => {
 for (const [date, selectedCount, explicitCount, build, sourceSha256, protectedSha256, imagesSha256] of batches) {
  it(`migrates only the ${selectedCount} documented ceilings from ${date}`, () => {
   const original = readFileSync(new URL(`../../src/data/imports/documented-compressors-${date}.json`, import.meta.url), 'utf8');
   expect(digest(original)).toBe(sourceSha256);
   const snapshot = JSON.parse(original), derived = build(snapshot).map(p => compressorSchema.parse(p));
   const selected = new Set(snapshot.compressors.filter(r => r.maxPressureBasis === 'selected-working-pressure-ceiling').map(r => r.id));
   expect(selected.size).toBe(selectedCount);
   expect(derived.length - selected.size).toBe(explicitCount);
   const canonical = [], images = [];
   for (const expected of derived) {
    const product = loadProduct(expected.id);
    expect(product, expected.id).toEqual(expected);
    canonical.push([product.id, withoutBasis(product)]);
    images.push([product.id, digest(readFileSync(new URL(`../../public${product.image.src}`, import.meta.url)))]);
    if (selected.has(product.id)) {
     expect(product.maxPressureBasis, product.id).toBe('selected-working-pressure-ceiling');
     expect(product.fieldSources.maxPressureBasis.length, product.id).toBeGreaterThan(0);
     for (const id of product.fieldSources.maxPressureBasis) {
      expect(product.fieldSources.maxPressureBar, product.id).toContain(id);
      expect(product.evidence.some(e => e.id === id && e.sourceRole === 'primary'), product.id).toBe(true);
     }
     expect(evaluateCompatibility(product, demand(product.maxPressureBar + 0.001)).verdict, product.id).toBe('insufficient_data');
    } else {
     expect(product, product.id).not.toHaveProperty('maxPressureBasis');
     expect(product.fieldSources, product.id).not.toHaveProperty('maxPressureBasis');
     expect(evaluateCompatibility(product, demand(product.maxPressureBar + 0.001)).verdict, product.id).toBe('incompatible');
    }
   }
   canonical.sort(([a], [b]) => a.localeCompare(b)); images.sort(([a], [b]) => a.localeCompare(b));
   expect(digest(JSON.stringify(stable(canonical)))).toBe(protectedSha256);
   expect(digest(JSON.stringify(images))).toBe(imagesSha256);
  });
 }
});
