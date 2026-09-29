import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createInterface } from 'node:readline';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { scopedReferencePlanner } from './scoped-reference-planner.mjs';

// Offline comparison harness. The reference directory is extracted from the
// pinned local Git revision by the qualification procedure, never downloaded.
const [mode, moduleDirectory, outputDirectory, candidateFile, releaseMode = 'offline'] = process.argv.slice(2);
assert.ok(['collect', 'plan', 'scoped-reference'].includes(mode), 'collect|plan|scoped-reference module-directory output-directory [candidate-jsonl] [offline|release]');
assert.ok(['offline', 'release'].includes(releaseMode));
const root = process.cwd(), output = resolve(outputDirectory);
// A replay gets a new directory; never replace an earlier success or failure.
await mkdir(output);
const now = new Date('2026-09-29T00:00:00.000Z');
const baseline = JSON.parse(await readFile('config/indexation-baseline.json', 'utf8'));
const policy = JSON.parse(await readFile('config/indexation-policy.json', 'utf8'));
const sha256 = text => createHash('sha256').update(text).digest('hex');
const modulePath = mode === 'scoped-reference' ? await scopedReferencePlanner(resolve(moduleDirectory)) : resolve(moduleDirectory, mode === 'collect' ? 'indexation-candidates.mjs' : 'indexation-planner.mjs');
const measurement = { synthetic: true, mode, releaseMode, now: now.toISOString(), moduleSha256: sha256(await readFile(modulePath)), node: process.version, policySha256: sha256(JSON.stringify(policy)), baselineSha256: sha256(JSON.stringify(baseline)), status: 'running' };
const resultPath = join(output, 'result.json');
await writeFile(resultPath, JSON.stringify(measurement, null, 2));
const onProgress = record => console.error(JSON.stringify(record));
const started = performance.now();
try {
 if (mode === 'collect') {
  const { collectIndexationCandidates } = await import(pathToFileURL(modulePath));
  const candidates = await collectIndexationCandidates(root, { onProgress });
  onProgress({ phase: 'collected', count: candidates.length, memory: process.memoryUsage() });
  const digest = createHash('sha256');
  function* rows() { for (const candidate of candidates) { const row = JSON.stringify(candidate) + '\n'; digest.update(row); yield row; } }
  await pipeline(Readable.from(rows()), createWriteStream(join(output, 'candidates.jsonl'), { flags: 'wx' }));
  measurement.candidates = candidates.length;
  measurement.candidatesSha256 = digest.digest('hex');
 } else {
  const candidates = [], digest = createHash('sha256');
  for await (const line of createInterface({ input: createReadStream(candidateFile), crlfDelay: Infinity })) {
   if (!line) continue;
   digest.update(line + '\n'); candidates.push(JSON.parse(line));
  }
  measurement.candidates = candidates.length; measurement.candidatesSha256 = digest.digest('hex');
  const { planIndexation } = await import(pathToFileURL(modulePath));
  const previous = { schemaVersion: 1, baselineSha: baseline.sourceSha, gitSha: baseline.sourceSha, builtAt: now.toISOString(), batches: [] };
  const plan = planIndexation({ candidates, baseline, previous, policy, now, gitSha: 'development', allowRelease: releaseMode === 'release', onProgress });
  onProgress({ phase: 'planned', count: plan.report.length, memory: process.memoryUsage() });
  // Each semantic part is hashed independently. The ordered full report also
  // retains priorities, reasons, rounded similarities and facts, not just counts.
  measurement.parts = {};
  for (const [key, value] of Object.entries(plan)) {
   const hash = createHash('sha256');
   function* chunks() {
    if (Array.isArray(value)) { yield '['; for (let i = 0; i < value.length; i++) yield (i ? ',' : '') + JSON.stringify(value[i]); yield ']'; }
    else yield JSON.stringify(value);
   }
   async function* hashed() { for (const chunk of chunks()) { hash.update(chunk); yield chunk; } }
   await pipeline(Readable.from(hashed()), createWriteStream(join(output, key + '.json'), { flags: 'wx' }));
   measurement.parts[key] = hash.digest('hex');
  }
  measurement.statusCounts = Object.fromEntries(['existing', 'released', 'queued', 'held'].map(status => [status, plan.report.filter(entry => entry.status === status).length]));
 }
 measurement.status = 'passed';
} catch (error) {
 measurement.status = 'failed'; measurement.error = error.message; process.exitCode = 1;
} finally {
 measurement.seconds = (performance.now() - started) / 1000;
 measurement.peakRssMiB = process.resourceUsage().maxRSS / 1024;
 await writeFile(resultPath, JSON.stringify(measurement, null, 2) + '\n');
 console.log(JSON.stringify(measurement));
}
