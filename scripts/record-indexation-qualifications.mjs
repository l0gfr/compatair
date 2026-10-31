import { open, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { collectIndexationCandidates } from './lib/indexation-candidates.mjs';
import { readLiveIndexation } from './lib/indexation-live.mjs';
import { validateBaseline, validatePolicy } from './lib/indexation-policy.mjs';
import { assertQualificationSources, candidateSources, qualificationContexts, qualificationId, qualificationRulesHash, validateQualifications } from './lib/indexation-qualifications.mjs';

// Input describes completed documentary work, including explicit neighbors and
// full current GET hashes. Recording it never creates an admission or a build.
if (process.argv.length !== 4 || process.argv[2] !== '--input') throw new Error('Usage : pnpm seo:qualify --input fichier.json');
const root = process.cwd(), now = new Date();
const input = JSON.parse(await readFile(resolve(process.argv[3]), 'utf8'));
if (input?.schemaVersion !== 1 || !Array.isArray(input.pages) || !input.pages.length || !Array.isArray(input.sourceChecks)) throw new Error('Dossier de qualification invalide.');
const baseline = validateBaseline(JSON.parse(await readFile('config/indexation-baseline.json', 'utf8')));
const policy = validatePolicy(JSON.parse(await readFile('config/indexation-policy.json', 'utf8')));
const previous = await readLiveIndexation(baseline, { now });
if (input.sourceReleaseSha !== previous.gitSha) throw new Error('Le dossier ne correspond pas à la production courante.');
const candidates = await collectIndexationCandidates(root, { now });
const byPath = new Map(candidates.map(candidate => [candidate.path, candidate]));
const rulesHash = await qualificationRulesHash(root), context = qualificationContexts(candidates, rulesHash, policy);
const path = resolve('config/indexation-qualifications.json');
const original = await readFile(path, 'utf8'), registry = validateQualifications(JSON.parse(original), now);
const seen = new Set(), additions = [];
for (const page of input.pages) {
 const candidate = byPath.get(page.path);
 if (!candidate || candidate.blockedReason || candidate.editorialHold || page.contentHash !== candidate.value?.contentHash || seen.has(page.path)) throw new Error('Candidat absent, modifié, réservé ou dupliqué dans le dossier.');
 seen.add(page.path);
 if (!Array.isArray(page.neighbors) || !page.neighbors.length || !context(candidate, page.neighbors)) throw new Error('Voisins courants de qualification absents.');
 const urls = [...new Set([...candidateSources(candidate), ...(page.additionalSources ?? [])])].sort();
 const sourceDocuments = urls.map(url => ({ url, sha256: input.sourceChecks.find(check => check.url === url)?.sha256 }));
 const entry = { path: page.path, contentHash: page.contentHash, neighbors: [...page.neighbors].sort(), contextHash: context(candidate, page.neighbors), rulesHash,
  sourceReleaseSha: previous.gitSha, reviewedAt: now.toISOString(), note: page.note, sourceDocuments };
 assertQualificationSources(entry, input.sourceChecks, now);
 additions.push(entry);
}
const next = validateQualifications({ ...registry, entries: [...registry.entries, ...additions] }, now);
// Refuse concurrent edits, preserving every historical receipt.
const lockPath = `${path}.lock`, lock = await open(lockPath, 'wx');
try {
 if (await readFile(path, 'utf8') !== original) throw new Error('Le registre a changé pendant la qualification.');
 const temporary = `${path}.partial`;
 await writeFile(temporary, JSON.stringify(next, null, 2) + '\n', { flag: 'wx' });
 await rename(temporary, path);
} finally {
 await lock.close();
 await unlink(lockPath);
}
console.log(JSON.stringify({ recorded: additions.length, admissions: 0, qualifications: additions.map(entry => ({ path: entry.path, id: qualificationId(entry) })) }));
