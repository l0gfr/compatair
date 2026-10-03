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

async function interrupt(signal, pending, restoreStatus = 0, closedOutput = 'none') {
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
				if (closedOutput !== 'none') {
					if (closedOutput === 'stdout' || closedOutput === 'both') child.stdout.destroy();
					if (closedOutput === 'stderr' || closedOutput === 'both') child.stderr.destroy();
					setTimeout(() => { child.kill(signal); resolve(); }, 10);
				} else { child.kill(signal); resolve(); }
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

for (const closedOutput of ['stdout', 'stderr', 'both']) {
	test(`HUP restores once when ${closedOutput} of the session is closed`, { timeout: 5_000 }, async () => {
		const result = await interrupt('SIGHUP', true, 0, closedOutput);
		assert.equal(result.code, 129); assert.equal(result.signal, null); assert.equal(result.calls, 'restore\n');
	});
}
test('closed output and failed restoration preserve the original HUP status', { timeout: 5_000 }, async () => {
	const result = await interrupt('SIGHUP', true, 1, 'both');
	assert.equal(result.code, 129); assert.equal(result.signal, null); assert.equal(result.calls, 'restore\n');
});

const restoreBegin = source.indexOf('restore_previous_release() {');
assert(restoreBegin >= 0 && restoreBegin < begin);
const restore = source.slice(restoreBegin, begin);
async function restoration(failure) {
	const root = await mkdtemp(join(tmpdir(), 'compatair-restore-operation-'));
	const path = join(root, 'harness.sh');
	const operations = join(root, 'operations');
	const deployed = join(root, 'DEPLOYED_SHA');
	await writeFile(path, `#!/bin/bash
set -Eeuo pipefail
ln() { builtin printf 'ln\\n' >> "$TEST_OPERATIONS"; return "$TEST_LN_STATUS"; }
mv() { builtin printf 'mv\\n' >> "$TEST_OPERATIONS"; return "$TEST_MV_STATUS"; }
restart_mcp_and_wait() { builtin printf 'mcp\\n' >> "$TEST_OPERATIONS"; return "$TEST_MCP_STATUS"; }
previous_target=/verified-release
previous_release_id=${'a'.repeat(40)}
current="$TEST_ROOT/current"
deployed_sha="$TEST_DEPLOYED_SHA"
${restore}
# The real caller uses if ! restore_previous_release, which suppresses errexit.
if restore_previous_release; then exit 0; else exit 1; fi
`);
	const child = spawn('/bin/bash', [path], { env: {
		...process.env, TEST_ROOT: root, TEST_OPERATIONS: operations,
		TEST_DEPLOYED_SHA: failure === 'sha' ? join(root, 'missing', 'DEPLOYED_SHA') : deployed,
		TEST_LN_STATUS: failure === 'ln' ? '1' : '0', TEST_MV_STATUS: failure === 'mv' ? '1' : '0',
		TEST_MCP_STATUS: failure === 'mcp' ? '1' : '0',
	}, stdio: ['ignore', 'pipe', 'pipe'] });
	child.stdout.resume(); child.stderr.resume();
	try {
		const result = await new Promise((resolve, reject) => { child.once('error', reject); child.once('exit', (code, signal) => resolve({ code, signal })); });
		const calls = await readFile(operations, 'utf8');
		const sha = await readFile(deployed, 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
		return { ...result, calls, sha };
	} finally { if (child.exitCode === null) child.kill('SIGKILL'); await rm(root, { recursive: true, force: true }); }
}
for (const [failure, calls, sha] of [
	['ln', 'ln\n', ''], ['mv', 'ln\nmv\n', ''], ['sha', 'ln\nmv\n', ''],
	['mcp', 'ln\nmv\nmcp\n', `${'a'.repeat(40)}\n`],
]) {
	test(`rollback stops and reports failure when ${failure} fails under conditional errexit`, { timeout: 5_000 }, async () => {
		const result = await restoration(failure);
		assert.equal(result.code, 1); assert.equal(result.signal, null); assert.equal(result.calls, calls); assert.equal(result.sha, sha);
	});
}
test('rollback executes every guarded operation and records its SHA on success', { timeout: 5_000 }, async () => {
	const result = await restoration('none');
	assert.equal(result.code, 0); assert.equal(result.calls, 'ln\nmv\nmcp\n'); assert.equal(result.sha, `${'a'.repeat(40)}\n`);
});
