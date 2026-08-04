import { chmodSync, copyFileSync, mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { afterEach, describe, expect, it } from 'vitest';

const temporaryDirectories: string[] = [];
const resolver = resolve('.githooks/lib/node-runtime.sh');
const hook = resolve('.githooks/pre-push');

function fakeNode(directory: string, major: number) {
	mkdirSync(directory, { recursive: true });
	const executable = join(directory, 'node');
	writeFileSync(executable, `#!/bin/sh\nprintf '${major}'\n`);
	chmodSync(executable, 0o755);
	return executable;
}

function fakePnpm(directory: string) {
	mkdirSync(directory, { recursive: true });
	const executable = join(directory, 'pnpm');
	writeFileSync(executable, '#!/bin/sh\nprintf "pnpm-runtime=%s command=%s\\n" "$(node --version)" "$*"\n');
	chmodSync(executable, 0o755);
	return executable;
}

function temporaryHookRepository() {
	const root = mkdtempSync(join(tmpdir(), 'compatair-pre-push-repository-'));
	temporaryDirectories.push(root);
	mkdirSync(join(root, '.githooks', 'lib'), { recursive: true });
	copyFileSync(hook, join(root, '.githooks', 'pre-push'));
	copyFileSync(resolver, join(root, '.githooks', 'lib', 'node-runtime.sh'));
	copyFileSync(resolve('.nvmrc'), join(root, '.nvmrc'));
	execFileSync('git', ['init', '--quiet'], { cwd: root });
	return root;
}

function resolveRuntime(requiredMajor: number, environment: NodeJS.ProcessEnv) {
	return execFileSync('/bin/bash', [resolver, String(requiredMajor)], {
		env: environment,
		encoding: 'utf8',
	}).trim();
}

afterEach(() => {
	for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true });
});

describe('résolution du runtime Node du hook pre-push', () => {
	it('sélectionne l’override compatible quand le Node du PATH est trop récent', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-node-runtime-'));
		temporaryDirectories.push(root);
		const pathNode = fakeNode(join(root, 'path'), 26);
		const node24 = fakeNode(join(root, 'node24'), 24);
		const selected = resolveRuntime(24, {
			HOME: join(root, 'home'),
			PATH: `${join(root, 'path')}:/usr/bin:/bin`,
			COMPATAIR_NODE_BIN: node24,
		});
		expect(pathNode).not.toBe(node24);
		expect(selected).toBe(node24);
	});

	it('conserve le Node du PATH lorsqu’il correspond déjà à la version requise', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-node-runtime-'));
		temporaryDirectories.push(root);
		const node24 = fakeNode(join(root, 'path'), 24);
		const selected = resolveRuntime(24, {
			HOME: join(root, 'home'),
			PATH: `${join(root, 'path')}:/usr/bin:/bin`,
		});
		expect(selected).toBe(node24);
	});

	it('ignore un override qui annonce la mauvaise version majeure', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-node-runtime-'));
		temporaryDirectories.push(root);
		const node24 = fakeNode(join(root, 'path'), 24);
		const node26 = fakeNode(join(root, 'node26'), 26);
		const selected = resolveRuntime(24, {
			HOME: join(root, 'home'),
			PATH: `${join(root, 'path')}:/usr/bin:/bin`,
			COMPATAIR_NODE_BIN: node26,
		});
		expect(selected).toBe(node24);
	});

	it('bascule le hook main vers Node 24 avant d’appeler la validation', () => {
		const root = temporaryHookRepository();
		const pathDirectory = join(root, 'path');
		fakeNode(pathDirectory, 26);
		fakePnpm(pathDirectory);
		const node24 = fakeNode(join(root, 'node24'), 24);
		const output = execFileSync('/bin/bash', ['.githooks/pre-push'], {
			cwd: root,
			env: {
				HOME: join(root, 'home'),
				PATH: `${pathDirectory}:/usr/bin:/bin`,
				COMPATAIR_NODE_BIN: node24,
			},
			input: `refs/heads/main ${'a'.repeat(40)} refs/heads/main ${'b'.repeat(40)}\n`,
			encoding: 'utf8',
		});
		expect(output).toContain(`bascule automatique vers 24 via ${node24}`);
		expect(output).toContain('pnpm-runtime=24 command=validate:main');
	}, 15_000);
});
