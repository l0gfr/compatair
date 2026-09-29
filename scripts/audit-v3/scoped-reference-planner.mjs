import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Qualification-only adapter for the immutable aa2 planner. Its original
// comparison routine is executed intact within every independent scope. Only
// scratch Set lifetimes change; no threshold, reason, rank or admission changes.
export async function scopedReferencePlanner(directory) {
 const source = await readFile(join(directory, 'indexation-planner.mjs'), 'utf8');
 assert.equal(createHash('sha256').update(source).digest('hex'), '754605e31fcb5c1d63e29776d7ec32f3e48bbcdbb86f5be5f9e7eecfa8f7267d');
 const marker = 'export function analyzeCandidates(candidates, admitted, policy) {';
 assert.equal(source.split(marker).length, 2);
 const wrapped = source.replace(marker, 'function originalAnalyzeCandidates(candidates, admitted, policy) {') + `
export function analyzeCandidates(candidates, admitted, policy) {
 const sorted = [...candidates].sort((a, b) => Number(admitted.has(b.path)) - Number(admitted.has(a.path)) || (b.priority?.score ?? 0) - (a.priority?.score ?? 0) || (a.firstSeen ?? '').localeCompare(b.firstSeen ?? '') || a.path.localeCompare(b.path, 'en'));
 const groups = new Map();
 for (const candidate of sorted) {
  const scope = ['catalog', 'usages'].includes(candidate.family) ? \`\${candidate.family}:\${candidate.topic}:\${candidate.signature}\` : candidate.family;
  if (!groups.has(scope)) groups.set(scope, []);
  groups.get(scope).push(candidate);
 }
 const results = new Map();
 for (const [scope, entries] of groups) {
  for (const entry of originalAnalyzeCandidates(entries, admitted, policy)) {
   const { grams, ...result } = entry;
   results.set(entry.path, result);
  }
  groups.delete(scope);
 }
 return sorted.map(entry => results.get(entry.path));
}
`;
 const path = join(directory, 'scoped-reference.mjs');
 await writeFile(path, wrapped);
 return path;
}
