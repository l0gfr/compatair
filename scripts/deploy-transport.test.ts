import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { parseDocument } from 'yaml';

const workflow = parseDocument(readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8')).toJS();
const transfer = workflow.jobs.validate.steps.find((step: { name: string }) => step.name === 'Transfer and activate release').run;
const roots: string[] = [];
const sha = 'a'.repeat(40);

afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });

function fixture() {
	const root = mkdtempSync(join(tmpdir(), 'compatair-transfer-'));
	roots.push(root);
	mkdirSync(join(root, 'bin'));
	mkdirSync(join(root, 'scripts'));
	const executable = (name: string, code: string) => writeFileSync(join(root, 'bin', name), code, { mode: 0o755 });
	executable('nc', '#!/bin/sh\nprintf "knock\\n" >> "$TEST_ROOT/attempts"\nexit 1\n');
	executable('sleep', '#!/bin/sh\nexit 0\n');
	// No network: run the captured receiver command in this disposable directory.
	executable('ssh', `#!${process.execPath}
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
fs.appendFileSync(process.env.TEST_ROOT + '/attempts', 'ssh\\n');
fs.writeFileSync(process.env.TEST_ROOT + '/ssh-args.json', JSON.stringify(process.argv.slice(2)));
if (process.env.TEST_TRANSPORT_FAILURE === '1') process.exit(255);
const command = process.argv.at(-1).replaceAll('/home/deploy-test/compatair-deploy', process.env.TEST_ROOT + '/received');
const result = spawnSync('/bin/bash', ['-c', command], { stdio: 'inherit', env: process.env });
process.exit(result.status ?? 1);
`);
	executable('sha256sum', `#!${process.execPath}
const fs = require('node:fs');
const { createHash } = require('node:crypto');
const [digest, file] = fs.readFileSync(process.argv[3], 'utf8').trim().split(/\\s+/);
process.exit(createHash('sha256').update(fs.readFileSync(file)).digest('hex') === digest ? 0 : 1);
`);
	writeFileSync(join(root, 'scripts/deploy-remote.sh'), '#!/bin/bash\nset -e\nsha256sum --check "$2"\nprintf "%s\\n" "$@" > "$TEST_ROOT/activated"\nexit "${TEST_ACTIVATION_STATUS:-0}"\n');
	writeFileSync(join(root, `compatair-${sha}.tar.xz`), 'release fixture');
	writeFileSync(join(root, 'approved-config.txt'), 'admin fixture');
	const archive = spawnSync('tar', ['-czf', `compatair-admin-${sha}.tar.gz`, 'approved-config.txt'], { cwd: root });
	expect(archive.status).toBe(0);
	for (const name of [`compatair-${sha}.tar.xz`, `compatair-admin-${sha}.tar.gz`]) {
		writeFileSync(join(root, `${name}.sha256`), `${createHash('sha256').update(readFileSync(join(root, name))).digest('hex')}  ${name}\n`);
	}
	const run = (extra: Record<string, string> = {}) => spawnSync('/bin/bash', ['-c', transfer], {
		cwd: root, encoding: 'utf8', timeout: 10_000,
		env: { ...process.env, PATH: `${join(root, 'bin')}:${process.env.PATH}`, TEST_ROOT: root,
			DEPLOY_HOST: 'deploy.invalid', DEPLOY_PORT: '2222', DEPLOY_USER: 'deploy-test',
			DEPLOY_KNOCK_PORTS: '10001 10002 10003', DEPLOY_PATH: '/var/www/html/compatair', GITHUB_SHA: sha, ...extra },
	});
	const attempts = () => existsSync(join(root, 'attempts')) ? readFileSync(join(root, 'attempts'), 'utf8').trim().split('\n') : [];
	return { root, run, attempts };
}

describe('single-session production transfer', () => {
	it('transfers both archives and activates only the requested release over one connection', () => {
		const { root, run, attempts } = fixture();
		const result = run();
		expect(result.status, result.stderr).toBe(0);
		expect(attempts()).toEqual(['knock', 'knock', 'knock', 'ssh']);
		expect(readFileSync(join(root, 'received/approved-config.txt'), 'utf8')).toBe('admin fixture');
		expect(statSync(join(root, 'activated')).mode & 0o444).toBe(0o444);
		expect(readFileSync(join(root, 'activated'), 'utf8').trim().split('\n')).toEqual([
			`${root}/received/compatair-${sha}.tar.xz`, `${root}/received/compatair-${sha}.tar.xz.sha256`, '/var/www/html/compatair', sha,
		]);
		const args: string[] = JSON.parse(readFileSync(join(root, 'ssh-args.json'), 'utf8'));
		for (const option of ['StrictHostKeyChecking=yes', 'BatchMode=yes', 'ConnectionAttempts=1', 'ControlPath=none']) expect(args).toContain(option);
	});

	it('stops after the first transport failure without reconnecting or activating', () => {
		const { root, run, attempts } = fixture();
		expect(run({ TEST_TRANSPORT_FAILURE: '1' }).status).not.toBe(0);
		expect(attempts()).toEqual(['knock', 'knock', 'knock', 'ssh']);
		expect(existsSync(join(root, 'activated'))).toBe(false);
	});

	it('propagates activation failure without opening another connection', () => {
		const { run, attempts } = fixture();
		expect(run({ TEST_ACTIVATION_STATUS: '42' }).status).toBe(42);
		expect(attempts()).toEqual(['knock', 'knock', 'knock', 'ssh']);
	});

	it('refuses a corrupted administrator archive before activation', () => {
		const { root, run, attempts } = fixture();
		writeFileSync(join(root, `compatair-admin-${sha}.tar.gz`), 'corrupted');
		expect(run().status).not.toBe(0);
		expect(attempts()).toEqual(['knock', 'knock', 'knock', 'ssh']);
		expect(existsSync(join(root, 'activated'))).toBe(false);
	});

	it('refuses missing release files before any network access', () => {
		const { root, run, attempts } = fixture();
		rmSync(join(root, `compatair-${sha}.tar.xz`));
		expect(run().status).not.toBe(0);
		expect(attempts()).toEqual([]);
	});

	it('refuses command injection in the deploy identity before any network access', () => {
		const { run, attempts } = fixture();
		expect(run({ DEPLOY_USER: "deploy-test'; exit 0; #" }).status).not.toBe(0);
		expect(attempts()).toEqual([]);
	});
});
