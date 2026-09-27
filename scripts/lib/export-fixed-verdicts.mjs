import { createHash } from 'node:crypto';
import { createReadStream, createWriteStream } from 'node:fs';
import { mkdtemp, open, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { CALCULATION_VERSION } from '../../server/air-sizing.mjs';
import { evaluateCompatibility } from '../../server/air-compatibility.mjs';

// Explicit offline export. Its cost is proportional to the requested matrix;
// ordinary builds and reports never call this function.
export async function exportFixedVerdicts(catalog, destination) {
 const { catalogVersion, ...data } = catalog;
 if (createHash('sha256').update(JSON.stringify(data)).digest('hex') !== catalogVersion) throw new Error('catalog_version_mismatch');
 const file = await open(destination, 'wx', 0o600); // Never replace an existing export.
 let temporary;
 try {
  temporary = await mkdtemp(join(dirname(destination), '.verdict-export-'));
  const body = join(temporary, 'pairs');
  const summary = { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 };
  let count = 0;
  function* pairs() {
   let chunk = '';
   for (const tool of catalog.tools.filter(item => item.demandModel === 'fixed-flow')) for (const compressor of catalog.compressors) {
    const result = evaluateCompatibility(compressor, tool);
    const pair = { id: `${compressor.id}--${tool.id}`, compressorId: compressor.id, toolId: tool.id };
    for (const key of ['verdict', 'confidence', 'limitingFactor', 'requiredFadLpm', 'availableFadLpm', 'availableFadBasis', 'availableFadReferencePressureBar', 'marginPercent', 'warnings']) {
     if (result[key] !== undefined) pair[key] = result[key];
    }
    summary[result.verdict]++;
    chunk += `${count++ ? ',' : ''}${JSON.stringify(pair)}`;
    if (chunk.length > 65_536) { yield chunk; chunk = ''; }
   }
   yield chunk;
  }
  await pipeline(Readable.from(pairs()), createWriteStream(body, { flags: 'wx', mode: 0o600 }));
  if (count !== catalog.scope.fixed_verdict_count) throw new Error('catalog_scope_mismatch');
  const metadata = { schemaVersion: '1.1.0', verifiedAt: catalog.verifiedAt, catalogVersion, calculationVersion: CALCULATION_VERSION, scope: catalog.scope, summary,
   conclusive: { count: count - summary.insufficient_data, percentage: count ? Number(((count - summary.insufficient_data) / count * 100).toFixed(1)) : 0 } };
  const prefix = `${JSON.stringify(metadata).slice(0, -1)},"pairs":[`;
  const hash = createHash('sha256').update(prefix);
  for await (const chunk of createReadStream(body)) hash.update(chunk);
  const verdictVersion = hash.update(']}').digest('hex');
  async function* output() {
   yield `{"verdictVersion":"${verdictVersion}",${prefix.slice(1)}`;
   yield* createReadStream(body);
   yield ']}';
  }
  await pipeline(Readable.from(output()), file.createWriteStream());
  return { verdictVersion, pairCount: count };
 } catch (error) { await file.close(); await rm(destination, { force: true }); throw error; }
 finally { if (temporary) await rm(temporary, { recursive: true, force: true }); }
}
