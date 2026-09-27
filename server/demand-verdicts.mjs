import { readFile, stat } from 'node:fs/promises';
import { validateVerdictPublication, demandVerdicts } from './verdict-publication.mjs';
import { readVerdictSnapshot } from './verdict-snapshot.mjs';

export async function readDecisionSnapshot(path, catalog) {
 if ((await stat(path)).size <= 65_536) {
  let publication;
  try { publication = JSON.parse(await readFile(path, 'utf8')); } catch { /* The legacy streaming reader reports its precise truncation error below. */ }
  if (publication?.schemaVersion === '2.0.0' || publication?.mode === 'on-demand') {
   validateVerdictPublication(publication, catalog);
   return { ...publication, pairs: [] };
  }
 }
 const legacy = await readVerdictSnapshot(path, { compactIds: true });
 if (legacy.catalogVersion !== catalog.catalogVersion) throw new Error('verdict_catalog_mismatch');
 return legacy;
}

export async function readDemandVerdicts(path, catalog, aggregates) {
 const snapshot = await readDecisionSnapshot(path, catalog);
 return snapshot.mode === 'on-demand' ? demandVerdicts(catalog, aggregates) : snapshot;
}
