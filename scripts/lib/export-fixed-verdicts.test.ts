import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { expect, it } from 'vitest';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../../src/data/catalog';
import { createCatalogSnapshot, createVerdictSnapshot, verdictJsonChunks } from '../../src/domain/snapshots';
import { exportFixedVerdicts } from './export-fixed-verdicts.mjs';

it('exports the exact legacy bytes offline, including their version, without overwriting an export', async () => {
 const root = await mkdtemp(join(tmpdir(), 'compatair-export-'));
 try {
  const catalog = createCatalogSnapshot({ compressors: compressors.slice(0, 3), tools: tools.slice(0, 5), toolTaxonomy: [], verifiedAt: CATALOG_VERIFIED_AT });
  const reference = createVerdictSnapshot(catalog, false);
  const file = join(root, 'verdicts.json');
  const result = await exportFixedVerdicts(catalog, file);
  expect(result).toEqual({ verdictVersion: reference.verdictVersion, pairCount: reference.pairs.length });
  expect(await readFile(file, 'utf8')).toBe([...verdictJsonChunks(reference)].join(''));
  await expect(exportFixedVerdicts(catalog, file)).rejects.toThrow('EEXIST');
  catalog.compressors[0].maxPressureBar++;
  await expect(exportFixedVerdicts(catalog, join(root, 'invalid.json'))).rejects.toThrow('catalog_version_mismatch');
 } finally { await rm(root, { recursive: true, force: true }); }
});
