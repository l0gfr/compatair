import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, expect, it, vi } from 'vitest';
import { createGitDateResolver } from './sitemap-lastmod.mjs';

const roots = [];
afterEach(() => { vi.unstubAllEnvs(); for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });
function fixture() {
	const root = mkdtempSync(join(tmpdir(), 'compatair-sitemap-git-')); roots.push(root);
	const env = { ...Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_'))), GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' };
	const git = (...args) => execFileSync('git', args, { cwd: root, env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
	git('init', '-b', 'main'); mkdirSync(join(root, 'src'));
	const commit = (files, date) => {
		for (const [name, text] of Object.entries(files)) writeFileSync(join(root, name), text);
		git('add', '--all');
		execFileSync('git', ['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-m', 'fixture'], {
			cwd: root, stdio: 'ignore', env: { ...env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
		});
	};
	const check = groups => {
		const fast = createGitDateResolver(root);
		for (const files of groups) {
			const expected = git('log', '-1', '--format=%cI', '--', ...files) || undefined;
			expect(fast(files)).toBe(expected);
			expect(fast([...files].reverse())).toBe(expected);
		}
	};
	return { root, git, commit, check };
}

it('preserves Git traversal order with non-monotonic dates, unusual names, renames and untracked sources', () => {
	const { root, git, commit, check } = fixture();
	const unusual = 'src/nom avec espace\x1e.ts';
	commit({ 'src/a.ts': 'a', 'src/b.ts': 'b', [unusual]: 'special' }, '2026-09-25T12:00:00+02:00');
	commit({ 'src/b.ts': 'changed' }, '2026-09-24T12:00:00+02:00');
	git('mv', 'src/a.ts', 'src/renamed.ts');
	commit({}, '2026-09-23T12:00:00+02:00');
	writeFileSync(join(root, 'src/untracked.ts'), 'not committed');
	check([['src/b.ts', 'src/renamed.ts'], [unusual], ['src/untracked.ts'], ['src/renamed.ts'], ['src/b.ts', 'src/untracked.ts']]);
});

it('isolates temporary repositories and date lookups from inherited hook variables', () => {
	const foreign = fixture(); foreign.commit({ 'src/shared.ts': 'foreign' }, '2026-01-01T00:00:00+00:00');
	const head = foreign.git('rev-parse', 'HEAD');
	vi.stubEnv('GIT_DIR', join(foreign.root, '.git'));
	vi.stubEnv('GIT_WORK_TREE', foreign.root);
	const local = fixture(); local.commit({ 'src/shared.ts': 'local' }, '2026-09-26T00:00:00+00:00');
	local.check([['src/shared.ts']]);
	expect(foreign.git('rev-parse', 'HEAD')).toBe(head);
});

it('keeps exact per-query merge semantics and batches only the later linear history', () => {
	const { root, git, commit, check } = fixture();
	commit({ 'src/base.ts': 'base', 'src/shared.ts': 'original' }, '2026-09-20T12:00:00+02:00');
	git('checkout', '-b', 'side');
	commit({ 'src/side.ts': 'side', 'src/shared.ts': 'side change' }, '2026-09-21T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/main.ts': 'main' }, '2026-09-22T12:00:00+02:00');
	git('-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'merge', '--no-ff', 'side', '-m', 'merge');
	const groups = [['src/base.ts'], ['src/shared.ts', 'src/main.ts'], ['src/side.ts'], ['src/main.ts', 'src/side.ts']];
	check(groups);
	commit({ 'src/shared.ts': 'after merge' }, '2026-09-19T12:00:00+02:00');
	check([...groups, ['src/shared.ts', 'src/side.ts']]);
	rmSync(join(root, '.git'), { recursive: true, force: true });
	expect(createGitDateResolver(root)(['src/shared.ts'])).toBeUndefined();
});
