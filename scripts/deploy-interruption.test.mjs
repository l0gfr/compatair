import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { it } from 'vitest';
const test = (name, options, run) => it(name, run, options.timeout);

const source = await readFile(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
const begin = source.indexOf('activation_pending=false\nrollback_after_failed_activation()');
const end = source.indexOf('\ninstall -d -m 755 "$releases"', begin);
assert(begin >= 0 && end > begin);
const traps = source.slice(begin, end);

async function interrupt(signal, pending, restoreStatus = 0) {
	const root = await mkdtemp(join(tmpdir(), 'compatair-signal-recovery-'));
	const path = join(root, 'harness.sh');
	// Only the restoration callback is a test double. The trap block is exact.
	await writeFile(path, `#!/bin/bash\nset -Eeuo pipefail\nrestore_previous_release() { printf 'restore\\n' >> "$TEST_RESTORE"; return ${restoreStatus}; }\n${traps}\nactivation_pending=${pending}\nprintf 'READY\\n'\nwhile :; do :; done\n`);
	const child = spawn('/bin/bash', [path], { env: { ...process.env, TEST_RESTORE: join(root, 'restores') }, stdio: ['ignore', 'pipe', 'pipe'] });
	let stderr = '';
	child.stderr.on('data', chunk => { stderr += chunk; });
	try {
		await new Promise((resolve, reject) => {
			child.once('error', reject);
			child.stdout.once('data', chunk => {
				assert.match(chunk.toString(), /READY/);
				child.kill(signal); resolve();
			});
		});
		const result = await new Promise((resolve, reject) => {
			child.once('error', reject);
			child.once('exit', (code, exitSignal) => resolve({ code, signal: exitSignal }));
		});
		const calls = await readFile(join(root, 'restores'), 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
		return { ...result, calls, stderr };
	} finally { if (child.exitCode === null) child.kill('SIGKILL'); await rm(root, { recursive: true, force: true }); }
}

test('delivered HUP performs the exact pending-activation rollback trap and exits129', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGHUP', true);
	assert.equal(result.code, 129); assert.equal(result.signal, null); assert.equal(result.calls, 'restore\n');
	assert.match(result.stderr, /restoring the previous verified release/);
});
test('HUP after completed activation does not restore a prior release', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGHUP', false);
	assert.equal(result.code, 129); assert.equal(result.calls, '');
});
test('TERM still requests rollback and exits143', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGTERM', true);
	assert.equal(result.code, 143); assert.equal(result.calls, 'restore\n');
});
test('INT still requests rollback and exits130', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGINT', true);
	assert.equal(result.code, 130); assert.equal(result.calls, 'restore\n');
});
test('a failed restoration remains a nonzero exit with an operator-visible error', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGHUP', true, 1);
	assert.equal(result.code, 129); assert.equal(result.calls, 'restore\n');
	assert.match(result.stderr, /Automatic rollback failed/);
});
