import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { compressors, tools, CATALOG_VERIFIED_AT } from '../data/catalog';
import { createVerdictSnapshot, verdictJsonChunks } from './snapshots';

describe('bounded verdict serialization', () => {
 it('preserves the existing JSON bytes and content hash, including empty and nonempty arrays', () => {
  for (const selected of [[], tools.filter(t => t.demandModel === 'fixed-flow').slice(0, 3)]) {
   const snapshot = createVerdictSnapshot({compressors:compressors.slice(0,2),tools:selected,catalogVersion:'a'.repeat(64),verifiedAt:CATALOG_VERIFIED_AT});
   const serialized=[...verdictJsonChunks(snapshot)].join('');
   expect(serialized).toBe(JSON.stringify(snapshot));
   const {verdictVersion,...data}=snapshot;
   expect(createHash('sha256').update(JSON.stringify(data)).digest('hex')).toBe(verdictVersion);
   expect(JSON.parse(serialized).pairs).toHaveLength(2*selected.length);
  }
 });
 it('emits bounded chunks and keeps Unicode and warning escaping exact', () => {
  const sample=createVerdictSnapshot({compressors:compressors.slice(0,1),tools:tools.filter(t=>t.demandModel==='fixed-flow').slice(0,1),catalogVersion:'a'.repeat(64),verifiedAt:CATALOG_VERIFIED_AT});
  const pair={...JSON.parse(JSON.stringify(sample.pairs[0])),warnings:['é " \\ \n fin']};
  const expanded={...sample,pairs:Array.from({length:4000},()=>pair)};
  const chunks=[...verdictJsonChunks(expanded)];
  expect(chunks.length).toBeGreaterThan(10);
  expect(Math.max(...chunks.map(c=>c.length))).toBeLessThan(68*1024);
  expect(chunks.join('')).toBe(JSON.stringify(expanded));
 });
});
