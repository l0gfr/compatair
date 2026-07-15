import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const readJson = async (path) => JSON.parse(await readFile(new URL(path, root), 'utf8'));

test('UCP names bind to compatair.fr and expose no commerce mutation', async () => {
  const schema = await readJson('schemas/compatibility.schema.json');
  const openapi = await readJson('openapi.json');
  assert.equal(schema.$id, 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json');
  assert.equal(openapi.info.version, '2026-07-15');
  assert.deepEqual(Object.keys(openapi.paths), ['/compatibility/evaluate']);
  assert.equal(openapi.paths['/compatibility/evaluate'].post.security.length, 0);
  assert.doesNotMatch(JSON.stringify(openapi.paths), /checkout|payment|order|identity/i);
  assert.equal(openapi.paths['/compatibility/evaluate'].post.parameters[0].name, 'UCP-Agent');
  assert.equal(openapi.paths['/compatibility/evaluate'].post.parameters[0].required, true);
  assert.equal(schema.$defs.EvaluationRequest.additionalProperties, false);
  assert.equal(schema.$defs.EvaluationRequest.properties.configuration.additionalProperties, false);
  assert.equal(schema.$defs.CompressorReference.additionalProperties, false);
  assert.equal(schema.$defs.ToolReference.additionalProperties, false);
  assert.match(schema.$defs.CompressorReference.properties.compatair_id.pattern, /compressor/);
  assert.match(schema.$defs.ToolReference.properties.compatair_id.pattern, /tool/);
});

test('example carries attribution, evidence and an explicit read-only boundary', async () => {
  const response = await readJson('examples/evaluate-response.json');
  const required = (await readJson('schemas/compatibility.schema.json')).$defs.EvaluationResponse.required;
  for (const key of required) assert.ok(Object.hasOwn(response, key), `missing ${key}`);
  assert.equal(response.capability, 'fr.compatair.air.compatibility');
  assert.match(response.canonical_url, /^https:\/\/compatair\.fr\//);
  assert.equal(response.security.mutates_commerce_state, false);
  assert.equal(response.security.accepts_pii, false);
  assert.ok(response.source_urls.length > 0);
  assert.doesNotMatch(JSON.stringify(response), /example-(?:compressor|tool)|manufacturer\.example/);
});

test('request example asks a decision question and error responses remain structured UCP', async () => {
  const schema = await readJson('schemas/compatibility.schema.json');
  const request = await readJson('examples/evaluate-request.json');
  assert.equal(request.intent, 'will_it_work');
  assert.equal(request.configuration.compressor.id, 'kaeser-eurocomp-epc-840-100');
  assert.equal(request.configuration.tools[0].id, 'einhell-tc-pe-150');
  assert.ok(schema.$defs.ErrorResponse.required.includes('messages'));
  assert.equal(schema.$defs.ErrorResponse.properties.ucp.properties.status.const, 'error');
});
