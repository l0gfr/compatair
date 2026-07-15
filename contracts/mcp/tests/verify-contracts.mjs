import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const readJson = async (path) => JSON.parse(await readFile(new URL(path, root), 'utf8'));

test('example exposes every mandatory traffic and evidence field', async () => {
  const schema = await readJson('schemas/result.schema.json');
  const example = await readJson('examples/compatibility-result.json');
  for (const field of schema.required) assert.ok(Object.hasOwn(example, field), `missing ${field}`);
  assert.match(example.canonical_url, /^https:\/\/compatair\.fr\//);
  assert.equal(example.method_version, '2026.07');
  assert.ok(Array.isArray(example.limitations));
});

test('AirGraph identifiers are stable, namespaced and configuration-scoped', async () => {
  const schema = await readJson('schemas/airgraph.schema.json');
  assert.equal(schema.properties.schema_version.const, '0.1.0');
  assert.match(schema.properties.configuration_id.pattern, /^\^ca:configuration:/);
});
