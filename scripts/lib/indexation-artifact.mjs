import { createHash } from 'node:crypto';
import { createWriteStream } from 'node:fs';
import { rename, rm } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';

function* arrayChunks(values) {
 yield '[';
 for (let i = 0; i < values.length; i++) yield (i ? ',' : '') + JSON.stringify(values[i]);
 yield ']';
}

// Serialize one reference at a time. A 100k report exceeds V8's single-string
// limit even when its objects fit comfortably inside the unchanged heap budget.
export function* indexationChunks(plan) {
 yield '{';
 let first = true;
 for (const [key, value] of Object.entries(plan)) {
  if (value === undefined) continue;
  yield (first ? '' : ',') + JSON.stringify(key) + ':'; first = false;
  if (key === 'report') yield* arrayChunks(value);
  else if (key === 'consolidation') {
   yield '{"canonicalAliases":' + JSON.stringify(value.canonicalAliases) + ',"groups":[';
   for (let i = 0; i < value.groups.length; i++) {
    const group = value.groups[i];
    yield (i ? ',' : '') + '{"primaryPath":' + JSON.stringify(group.primaryPath) + ',"members":';
    yield* arrayChunks(group.members); yield '}';
   }
   yield ']}';
  } else yield JSON.stringify(value);
 }
 yield '}\n';
}

export async function writeIndexationArtifact(path, plan) {
 const temporary = path + '.partial', hash = createHash('sha256');
 async function* chunks() { for (const chunk of indexationChunks(plan)) { hash.update(chunk); yield chunk; } }
 try {
  await pipeline(Readable.from(chunks()), createWriteStream(temporary));
  await rename(temporary, path);
 } catch (error) { await rm(temporary, { force: true }); throw error; }
 return hash.digest('hex');
}

export function indexationBuildProjection(plan, reportSha256) {
 // Retain exactly the fields consumed by canonical/answer-group rendering and
 // the release verifier. The complete audit remains in indexation-plan.json.
 const { report: _report, ...projection } = plan;
 return { ...projection, reportSha256 };
}
