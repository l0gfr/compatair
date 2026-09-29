import { describe, expect, it } from 'vitest';
import { distribution, fixturePlan, fixtureProducts, quantile } from './qualification-100k.mjs';
import { mkdtemp, readFile, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

describe('bounded empirical qualification corpus', () => {
	const catalog = {
		compressors: [{ id: 'a', confidence: 'A', fadCurve: [], maxPressureBar: 8 }, { id: 'b', confidence: 'B', dutyCycle: .5, fadCurve: [{ pressureBar: 7, litersPerMinute: 80 }], maxPressureBar: 10 }],
		tools: [{ id: 'c', confidence: 'A', demandModel: 'per-action' }, { id: 'd', confidence: 'C', demandModel: 'fixed-flow', airflowBasis: 'average' }],
	};
	it('retains every profile and missing value, with proportional kind quotas', () => {
		const plan = fixturePlan(catalog, 12);
		expect(plan).toEqual({ original: 4, target: 12, compressors: 6, tools: 6 });
		const products = [...fixtureProducts(catalog, 'compressors', 6)];
		expect(new Set(products.map(p => p.id)).size).toBe(6);
		expect(products.filter(p => p.dutyCycle === undefined)).toHaveLength(3);
		expect(products.filter(p => p.fadCurve.length === 0)).toHaveLength(3);
		expect(Object.values(distribution(catalog, plan))).toEqual(Array(4).fill({ source: 1, fixture: 3 }));
		expect(catalog.compressors[0]).not.toHaveProperty('dutyCycle');
	});
	it('refuses a smaller corpus that would erase rare profiles or an unbounded target', () => {
		expect(() => fixturePlan(catalog, 3)).toThrow();
		expect(() => fixturePlan(catalog, 100001)).toThrow();
		expect(() => fixturePlan(catalog, 4.5)).toThrow();
	});
	it('uses nearest-rank quantiles and keeps unavailable measurements null', () => {
		expect(quantile([], .99)).toBeNull();
		expect(quantile(Array.from({ length: 100 }, (_, i) => i + 1), .95)).toBe(95);
		expect(quantile(Array.from({ length: 100 }, (_, i) => i + 1), .99)).toBe(99);
	});
	it('hashes the restored bytes and refuses symlinks instead of following them', async () => {
		const root = await mkdtemp(join(tmpdir(), 'qualification-files-'));
		const output = root + '.json';
		const args = ['scripts/audit-v3/qualification-publication.py', '--file-manifest', root, output];
		try {
			await writeFile(join(root, 'proof.txt'), 'Exact bytes\n');
			await promisify(execFile)('python3', args);
			expect(JSON.parse(await readFile(output, 'utf8'))).toEqual({ 'proof.txt': { bytes: 12, sha256: createHash('sha256').update('Exact bytes\n').digest('hex') } });
			await symlink(join(root, 'proof.txt'), join(root, 'alias'));
			await expect(promisify(execFile)('python3', args)).rejects.toThrow('Unexpected symlink');
		} finally { await rm(root, { recursive: true, force: true }); await rm(output, { force: true }); }
	});
	it('refuses to run the publication protocol in the working repository', async () => {
		await expect(promisify(execFile)('python3', ['scripts/audit-v3/qualification-publication.py', process.cwd()])).rejects.toThrow('An isolated BENCHMARK_ONLY source');
	});
	it('terminates descendants that ignore TERM after the timing wrapper has already exited', async () => {
		const code = `
import importlib.util, subprocess, sys, time
spec = importlib.util.spec_from_file_location('qualification', 'scripts/audit-v3/qualification-publication.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
payload = "import os, signal, time; pid=os.fork(); signal.alarm(5)\\nif pid == 0:\\n signal.signal(signal.SIGTERM, signal.SIG_IGN)\\n print(os.getpid(), flush=True)\\nwhile True: time.sleep(1)"
child = subprocess.Popen([sys.executable, '-c', payload], start_new_session=True, stdout=subprocess.PIPE, text=True)
try:
 orphan = int(child.stdout.readline())
 assert module.stop_process_group(child, grace=.1) is True
 for attempt in range(20):
  state = subprocess.run(['/bin/ps', '-p', str(orphan), '-o', 'stat='], capture_output=True, text=True).stdout.strip()
  if not state or state.startswith('Z'): break
  time.sleep(.05)
 else: raise AssertionError('descendant still running')
 print('owned-group-stopped')
finally: module.stop_process_group(child, grace=.1)
`;
		const { stdout } = await promisify(execFile)('python3', ['-c', code], { timeout: 10000 });
		expect(stdout.trim()).toBe('owned-group-stopped');
	});
});
