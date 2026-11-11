import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import compressor from '../../src/data/products/compressors/einhell-tc-ac-240-50-10-of';
import tool from '../../src/data/products/tools/agrafeuse-cloueuse-einhell-tc-pn-50';
import { pcpReferences, pcpGuides } from '../../src/data/pcp';
import { productSourceEntries, collectVersionedSourceInventory } from './source-inventory.mjs';
import { sourceCheckSelection, sourceInventory } from './source-link-health.mjs';

describe('versioned source inventory without a site build', () => {
 it('uses the same EAN, date and age checks as the product purchase links', () => {
  const now = new Date('2026-10-03T12:00:00Z');
  const direct = value => productSourceEntries(value, 'compressors', now).filter(entry => entry.reference.role === 'direct-purchase');
  expect(direct(compressor)).toHaveLength(2);
  expect(direct({ ...compressor, ean: '0000000000000' })).toHaveLength(0);
  expect(productSourceEntries(compressor, 'compressors', new Date('2026-12-26')).filter(entry => entry.reference.role)).toHaveLength(0);
  expect(productSourceEntries(compressor, 'compressors', new Date('2026-09-24')).filter(entry => entry.reference.role)).toHaveLength(0);
 });
 it('collects exact validated evidence and guide citations without dist, rejecting malformed records', async () => {
  const root = await mkdtemp(join(tmpdir(), 'compatair-source-inventory-'));
  const now = new Date('2026-10-03T12:00:00Z');
  try {
   for (const directory of ['src/data/products/compressors', 'src/data/products/tools', 'src/content/guides']) await mkdir(join(root, directory), { recursive: true });
   const file = join(root, 'src/data/products/tools/tool.ts');
   await writeFile(join(root, 'src/data/pcp.ts'), 'export const pcpReferences = [];');
   await writeFile(join(root, 'src/data/products/compressors/compressor.ts'), `export default ${JSON.stringify(compressor)};`);
   await writeFile(file, `export default ${JSON.stringify(tool)};`);
   await writeFile(join(root, 'src/content/guides/test.md'), '---\nsources:\n  - https://example.com/guide.pdf#page=2\n---\nBody');
   const expected = sourceInventory([...productSourceEntries(compressor, 'compressors', now), ...productSourceEntries(tool, 'tools', now), { url: 'https://example.com/guide.pdf#page=2', reference: { guide: 'test.md' } }]);
   expect(await collectVersionedSourceInventory(root, { now })).toEqual(expected);
   await writeFile(file, 'export default { id: "invalid" };');
   await expect(collectVersionedSourceInventory(root, { now })).rejects.toThrow();
  } finally { await rm(root, { recursive: true, force: true }); }
 }, 30_000);
 it('includes all PCP primary sources, retaining model provenance and deduplicating guide citations', async () => {
  const root = await mkdtemp(join(tmpdir(), 'compatair-pcp-source-inventory-'));
  try {
   for (const directory of ['src/data/products/compressors', 'src/data/products/tools', 'src/content/guides']) await mkdir(join(root, directory), { recursive: true });
   await writeFile(join(root, 'src/data/pcp.ts'), `export const pcpReferences = ${JSON.stringify(pcpReferences)};`);
   for (const guide of pcpGuides) await writeFile(join(root, 'src/content/guides', `${guide.slug}.md`), await readFile(new URL(`../../src/content/guides/${guide.slug}.md`, import.meta.url), 'utf8'));
   const inventory = await collectVersionedSourceInventory(root);
   expect(inventory.sources).toHaveLength(10);
   for (const reference of pcpReferences) for (const source of reference.sources) {
    expect(inventory.sources.find(entry => entry.url === source.url)?.references).toContainEqual({
     pcp: reference.slug, brand: reference.brand, model: reference.model, sourceId: source.id, checkedAt: source.checkedAt,
    });
   }
   const recordOnly = inventory.sources.filter(entry => entry.references.every(reference => reference.pcp));
   expect(recordOnly.map(entry => entry.url).sort()).toEqual([
    'https://resources.air-arms.co.uk/s510core',
    'https://www.umarexusa.com/2254847',
    'https://www.weihrauch-sport.de/luftgewehre/pressluft/hw-110-t',
   ]);
   const shared = inventory.sources.find(entry => entry.url === 'https://www.airriflepump.com/product/hill-mk5-pump/');
   expect(shared.references).toHaveLength(3);
   expect(shared.references.filter(reference => reference.guide)).toHaveLength(2);
   expect(sourceCheckSelection(inventory, ['--url', recordOnly[0].url]).sources).toEqual([recordOnly[0]]);
  } finally { await rm(root, { recursive: true, force: true }); }
 });
});
