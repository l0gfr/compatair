import { isDeepStrictEqual } from 'node:util';
import { createHash } from 'node:crypto';
import { readFile, lstat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { walkRegularSourceFiles } from './source-tree.mjs';
import { candidateQuotaGroup, indexationDay, validatePath, supplementalPublication } from './indexation-policy.mjs';

const digest = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const hashPattern = /^[a-f0-9]{64}$/;
const validHash = value => typeof value === 'string' && hashPattern.test(value);
const empty = { schemaVersion: 1, entries: [] };
export const emptyQualifications = () => structuredClone(empty);

function httpsSource(value) {
 if (typeof value !== 'string') return false;
 try {
  const url = new URL(value);
  return url.protocol === 'https:' && !url.username && !url.password;
 } catch { return false; }
}
export function candidateSources(candidate) {
 return [...new Set([...(candidate.value?.sources ?? []), ...(candidate.value?.claims ?? []).flatMap(claim => (claim.sources ?? []).map(source => source.url))])].sort();
}
export const qualificationId = entry => digest(entry);

export function validateQualifications(registry, now = new Date()) {
 if (registry?.schemaVersion !== 1 || !Array.isArray(registry.entries)) throw new Error('Registre de qualifications invalide.');
 const ids = new Set();
 let previous = -Infinity;
 for (const entry of registry.entries) {
  validatePath(entry.path);
  const timestamp = Date.parse(entry.reviewedAt);
  if (!candidateQuotaGroup(entry.path) || !validHash(entry.contentHash) || !validHash(entry.contextHash) || !validHash(entry.rulesHash)
   || typeof entry.sourceReleaseSha !== 'string' || !/^[a-f0-9]{40}$/.test(entry.sourceReleaseSha)
   || typeof entry.reviewedAt !== 'string' || !Number.isFinite(timestamp) || timestamp > now.getTime() || timestamp < previous
   || typeof entry.note !== 'string' || !entry.note.trim()
   || !Array.isArray(entry.neighbors) || !entry.neighbors.length || new Set(entry.neighbors).size !== entry.neighbors.length
   || !Array.isArray(entry.sourceDocuments) || !entry.sourceDocuments.length) throw new Error('Qualification documentaire incomplète ou future.');
  for (const path of entry.neighbors) { validatePath(path); if (path === entry.path || !candidateQuotaGroup(path)) throw new Error('Voisin de qualification invalide.'); }
  const urls = new Set();
  for (const source of entry.sourceDocuments) {
   if (!httpsSource(source.url) || !validHash(source.sha256) || urls.has(source.url)) throw new Error('Document primaire de qualification invalide.');
   urls.add(source.url);
  }
  if (ids.has(qualificationId(entry))) throw new Error('Qualification documentaire dupliquée.');
  ids.add(qualificationId(entry)); previous = timestamp;
 }
 return registry;
}

// Include the engine, schemas, templates and qualification implementation, never
// a timestamp or a build SHA. An unrelated release does not erase a factual review.
export async function qualificationRulesHash(root) {
 const files = [];
 for (const directory of ['server', 'src/domain', 'src/components', 'src/layouts', 'src/pages', 'scripts/lib']) {
  await walkRegularSourceFiles(join(root, directory), {
   onFile: async file => { if (!/\.test\.[^.]+$/.test(file) && /\.(?:ts|astro|mjs)$/.test(file)) files.push(file); },
   onUnsafeEntry: () => { throw new Error('Entrée non régulière dans les règles de qualification.'); },
  });
 }
 for (const file of ['src/content.config.ts', 'config/indexation-editorial-holds.json']) {
  const path = join(root, file);
  if (!(await lstat(path)).isFile()) throw new Error('Règle de qualification non régulière.');
  files.push(path);
 }
 const hashes = [];
 for (const file of files.sort()) hashes.push([relative(root, file), createHash('sha256').update(await readFile(file)).digest('hex')]);
 return digest(hashes);
}

export function qualificationContexts(candidates, rulesHash, policy) {
 const groups = new Map(), byPath = new Map(candidates.map(candidate => [candidate.path, candidate]));
 for (const candidate of candidates) {
  const group = candidate.family === 'guides' ? 'guides' : `${candidate.family}:${candidate.topic}`;
  if (!groups.has(group)) groups.set(group, []);
  groups.get(group).push([candidate.path, candidate.value?.contentHash]);
 }
 const hashes = new Map([...groups].map(([group, inputs]) => [group, digest(inputs.sort((a, b) => a[0].localeCompare(b[0], 'en')))]));
 return (candidate, neighbors) => {
  if (!validHash(rulesHash) || !Array.isArray(neighbors) || neighbors.some(path => !byPath.has(path))) return undefined;
  const group = candidate.family === 'guides' ? 'guides' : `${candidate.family}:${candidate.topic}`;
  return digest({ rulesHash, group: hashes.get(group), thresholds: [policy.similarityThreshold, policy.containmentThreshold],
   neighbors: [...neighbors].sort().map(path => [path, byPath.get(path).value?.contentHash]) });
 };
}

export function currentQualifications(candidates, registry = empty, { now = new Date(), rulesHash, policy }) {
 validateQualifications(registry, now);
 const byPath = new Map(candidates.map(candidate => [candidate.path, candidate]));
 const context = qualificationContexts(candidates, rulesHash, policy), current = new Map();
 // The latest receipt supersedes earlier receipts for this URL, including when stale.
 for (const entry of registry.entries) {
  current.delete(entry.path);
  const candidate = byPath.get(entry.path);
  if (!candidate || candidate.blockedReason || candidate.editorialHold || entry.contentHash !== candidate.value?.contentHash
   || entry.rulesHash !== rulesHash || entry.contextHash !== context(candidate, entry.neighbors)
   || !candidateSources(candidate).every(url => entry.sourceDocuments.some(source => source.url === url))) continue;
  current.set(entry.path, entry);
 }
 return current;
}

export function assertQualificationSources(entry, checks, now = new Date()) {
 if (!Array.isArray(checks)) throw new Error('Vérification actuelle des sources de qualification absente.');
 const byUrl = new Map();
 for (const check of checks) {
  if (!httpsSource(check.url) || !validHash(check.sha256) || typeof check.checkedAt !== 'string'
   || !Number.isFinite(Date.parse(check.checkedAt)) || Date.parse(check.checkedAt) > now.getTime()
   || indexationDay(new Date(check.checkedAt)) !== indexationDay(now) || check.httpStatus !== 200 || check.complete !== true
   || byUrl.has(check.url)) throw new Error('Vérification actuelle de source invalide ou incomplète.');
  byUrl.set(check.url, check);
 }
 for (const source of entry.sourceDocuments) if (byUrl.get(source.url)?.sha256 !== source.sha256) throw new Error('Source primaire changée ou non vérifiée : nouvelle revue requise.');
}

export function editorialSelection(candidates, reviews, qualifications = empty, { now = new Date(), rulesHash, policy, previous }) {
 const supplementary = previous && supplementalPublication(previous, policy, now);
 const qualified = currentQualifications(candidates, qualifications, { now, rulesHash, policy });
 const byPath = new Map(candidates.map(candidate => [candidate.path, candidate])), decisions = new Map();
 for (const review of [...reviews.reviews].sort((a, b) => Date.parse(a.reviewedAt) - Date.parse(b.reviewedAt))) if ((review.publicationDay < indexationDay(now) || (supplementary && review.publicationDay === indexationDay(now) && review.sourceReleaseSha !== previous.gitSha)) && Date.parse(review.reviewedAt) <= now.getTime()) {
  for (const page of review.pages) if (page.decision !== 'deferred') decisions.set(page.path, { ...page, reviewedAt: review.reviewedAt });
 }
 const reservedPaths = [];
 for (const [path, page] of decisions) {
  if (!['needs-correction', 'rejected'].includes(page.decision) || page.contentHash !== byPath.get(path)?.value?.contentHash) continue;
  if (qualified.has(path) && qualified.get(path).reviewedAt > page.reviewedAt) continue;
  reservedPaths.push(path);
  qualified.delete(path);
 }
 return { reservedPaths, preferredPaths: [...qualified.keys()], qualified };
}


export function assertQualificationExtension(previous, current, now = new Date()) {
 validateQualifications(previous, now); validateQualifications(current, now);
 if (!isDeepStrictEqual(previous.entries, current.entries.slice(0, previous.entries.length))) throw new Error('Historique des qualifications modifié ou tronqué.');
}
