import { createHash } from 'node:crypto';
import { copyFile, mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const destination = process.argv[2];
if (!destination) throw new Error('Usage: node scripts/export-public-contract-repo.mjs EMPTY_DESTINATION');
const root = resolve(new URL('..', import.meta.url).pathname);
const output = resolve(destination);
if (output === root || !output.startsWith(`${resolve(destination, '..')}/`)) throw new Error('Unsafe export destination');
try { if ((await readdir(output)).length) throw new Error('Export destination must be empty'); }
catch (error) { if (!(error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT')) throw error; }

const files = [
	['server.json', 'server.json'],
	['contracts/mcp/README.md', 'README.md'], ['contracts/mcp/SECURITY.md', 'SECURITY.md'],
	['contracts/mcp/examples/compatibility-result.json', 'examples/compatibility-result.json'],
	['contracts/mcp/schemas/airgraph.schema.json', 'schemas/airgraph.schema.json'],
	['contracts/mcp/schemas/result.schema.json', 'schemas/result.schema.json'],
	['contracts/mcp/schemas/compatibility-receipt.schema.json', 'schemas/compatibility-receipt.schema.json'],
	['contracts/mcp/tests/verify-contracts.mjs', 'tests/verify-contracts.mjs'],
	['contracts/ucp/README.md', 'ucp/README.md'], ['contracts/ucp/SECURITY.md', 'ucp/SECURITY.md'],
	['contracts/ucp/examples/evaluate-request.json', 'ucp/examples/evaluate-request.json'],
	['contracts/ucp/examples/evaluate-response.json', 'ucp/examples/evaluate-response.json'],
	['contracts/ucp/openapi.json', 'ucp/openapi.json'], ['contracts/ucp/openrpc.json', 'ucp/openrpc.json'],
	['contracts/ucp/schemas/compatibility.schema.json', 'ucp/schemas/compatibility.schema.json'],
	['contracts/ucp/tests/verify-contracts.mjs', 'ucp/tests/verify-contracts.mjs'],
];
await mkdir(output, { recursive: true, mode: 0o755 });
for (const [source, target] of files) {
	const sourcePath = resolve(root, source), targetPath = resolve(output, target);
	if (!sourcePath.startsWith(`${root}/`) || !targetPath.startsWith(`${output}/`) || !(await stat(sourcePath)).isFile()) throw new Error(`Unsafe contract export entry: ${source}`);
	await mkdir(dirname(targetPath), { recursive: true, mode: 0o755 });
	await copyFile(sourcePath, targetPath);
}
const packageSource = JSON.parse(await readFile(resolve(root, 'contracts/mcp/package.json'), 'utf8'));
await writeFile(resolve(output, 'package.json'), `${JSON.stringify({ ...packageSource, scripts: { test: 'node --test tests/verify-contracts.mjs ucp/tests/verify-contracts.mjs' } }, null, 2)}\n`);
const manifestFiles = [...files.map(([, target]) => target), 'package.json'].sort();
const manifest = {
	schemaVersion: '1.0.0', source: 'https://github.com/l0gfr/compatair', serverVersion: JSON.parse(await readFile(resolve(output, 'server.json'), 'utf8')).version,
	files: await Promise.all(manifestFiles.map(async (path) => ({ path, sha256: createHash('sha256').update(await readFile(resolve(output, path))).digest('hex') }))),
};
await writeFile(resolve(output, 'SYNC_MANIFEST.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Public contract repository exported to ${output} (${manifest.files.length} source files).`);
