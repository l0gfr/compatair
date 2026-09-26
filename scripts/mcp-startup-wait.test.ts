import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const temporary: string[] = [];
afterEach(() => { for (const directory of temporary.splice(0)) rmSync(directory, { recursive: true, force: true }); });

function runHealthGate(filename: string, readyAfter: number, restartStatus = 0) {
	const source = readFileSync(new URL(filename, import.meta.url), 'utf8');
	const start = source.indexOf('restart_mcp_and_wait() {');
	const end = source.indexOf('\n}\n', start);
	if (start < 0 || end < 0) throw new Error('Health gate function missing');
	const directory = mkdtempSync(join(tmpdir(), 'compatair-health-gate-'));
	temporary.push(directory);
	const script = join(directory, 'check.sh');
	writeFileSync(script, `#!/bin/bash
set -u
probe_count=0
sleep_count=0
ready_after=${readyAfter}
restart_status=${restartStatus}
mcp_service=test
health_url=http://127.0.0.1/health
sudo() { return "$restart_status"; }
curl() { probe_count=$((probe_count + 1)); test "$probe_count" -ge "$ready_after"; }
sleep() { sleep_count=$((sleep_count + 1)); }
${source.slice(start, end + 2)}
restart_mcp_and_wait
result=$?
printf '%s %s %s' "$result" "$probe_count" "$sleep_count"
exit "$result"
`);
	return spawnSync('/bin/bash', [script], { encoding: 'utf8', timeout: 2_000 });
}

for (const filename of ['deploy-remote.sh', 'rollback-remote.sh']) {
	describe(`${filename} MCP health gate`, () => {
		it('accepts a healthy service that needs longer than the former ten probes', () => {
			const result = runHealthGate(filename, 12);
			expect(result.status).toBe(0);
			expect(result.stdout).toBe('0 12 11');
		});
		it('still fails after a bounded number of unsuccessful probes', () => {
			const result = runHealthGate(filename, 1_000);
			expect(result.status).toBe(1);
			expect(result.stdout).toBe('1 61 60');
		});
		it('fails immediately when the service restart is rejected', () => {
			const result = runHealthGate(filename, 1, 1);
			expect(result.status).toBe(1);
			expect(result.stdout).toBe('1 0 0');
		});
	});
}
