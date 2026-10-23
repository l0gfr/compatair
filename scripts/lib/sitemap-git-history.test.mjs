import { execFileSync } from 'node:child_process';
import { chmodSync, mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { afterEach, expect, it, vi } from 'vitest';
import { createGitDateResolver } from './sitemap-lastmod.mjs';

// Observe subprocess counts while retaining real Git repositories and results.
vi.mock('node:child_process', async importOriginal => {
	const actual = await importOriginal();
	return { ...actual, execFileSync: vi.fn(actual.execFileSync) };
});

const roots = [];
afterEach(() => { vi.unstubAllEnvs(); vi.clearAllMocks(); for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });
function fixture() {
	const root = mkdtempSync(join(tmpdir(), 'compatair-sitemap-git-')); roots.push(root);
	const env = { ...Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith('GIT_'))), GIT_CONFIG_NOSYSTEM: '1', GIT_CONFIG_GLOBAL: '/dev/null' };
	const git = (...args) => execFileSync('git', args, { cwd: root, env, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
	git('init', '-b', 'main'); mkdirSync(join(root, 'src'));
	const commit = (files, date) => {
		for (const [name, text] of Object.entries(files)) { mkdirSync(dirname(join(root, name)), { recursive: true }); writeFileSync(join(root, name), text); }
		git('add', '--all');
		execFileSync('git', ['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-m', 'fixture'], {
			cwd: root, stdio: 'ignore', env: { ...env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
		});
	};
	const merge = (branches, date = '2026-09-26T12:00:00+02:00') => execFileSync('git', ['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.invalid', 'merge', '--no-ff', '-m', 'merge', ...branches], {
		cwd: root, stdio: ['ignore', 'pipe', 'pipe'], env: { ...env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date },
	});
	const check = groups => {
		const fast = createGitDateResolver(root);
		for (const files of groups) {
			const expected = git('log', '-1', '--format=%cI', '--', ...files) || undefined;
			expect(fast(files)).toBe(expected);
			expect(fast([...files].reverse())).toBe(expected);
		}
	};
	return { root, git, commit, merge, check };
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

it('keeps exact per-query merge semantics before and after later linear commits', () => {
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

it('batches both TREESAME parents at a merge HEAD and delegates mixed groups to Git', () => {
	const { git, commit, merge } = fixture();
	const left = Array.from({ length: 12 }, (_, index) => `src/left-${index}.ts`);
	const right = Array.from({ length: 12 }, (_, index) => `src/right-${index}.ts`);
	commit({ 'src/base.ts': 'base' }, '2026-09-25T12:00:00+02:00');
	git('checkout', '-b', 'side');
	commit(Object.fromEntries(right.map(path => [path, 'right'])), '2026-09-21T12:00:00+02:00');
	git('checkout', 'main');
	commit(Object.fromEntries(left.map(path => [path, 'left'])), '2026-09-22T12:00:00+02:00');
	merge(['side']);
	const groups = [...left, ...right, 'src/base.ts'].map(path => [path]);
	groups.push([left[0], right[0]]);
	const offset = vi.mocked(execFileSync).mock.calls.length;
	const fast = createGitDateResolver(git('rev-parse', '--show-toplevel'));
	const actual = groups.map(files => fast(files));
	for (const files of groups) fast([...files].reverse());
	const calls = vi.mocked(execFileSync).mock.calls.slice(offset).filter(([command]) => command === 'git');
	expect(calls.filter(([, args]) => args[0] === 'log' && args.includes('--'))).toHaveLength(1);
	expect(calls.length).toBeLessThan(20);
	for (let index = 0; index < groups.length; index++) expect(actual[index]).toBe(git('log', '-1', '--format=%cI', '--', ...groups[index]));
});

it('keeps the original Git result for a manually resolved merge', () => {
	const { git, commit, merge, check } = fixture();
	commit({ 'src/shared.ts': 'original\n', 'src/base.ts': 'base' }, '2026-09-25T12:00:00+02:00');
	git('checkout', '-b', 'side');
	commit({ 'src/shared.ts': 'right\n', 'src/right.ts': 'right' }, '2026-09-21T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/shared.ts': 'left\n', 'src/left.ts': 'left' }, '2026-09-22T12:00:00+02:00');
	expect(() => merge(['side'])).toThrow();
	commit({ 'src/shared.ts': 'manual resolution\n' }, '2026-09-19T12:00:00+02:00');
	check([['src/shared.ts'], ['src/shared.ts', 'src/base.ts'], ['src/right.ts'], ['src/left.ts'], ['src/left.ts', 'src/right.ts']]);
});

it('includes mode changes and renamed paths when deciding whether a merge is TREESAME', () => {
	const { root, git, commit, merge, check } = fixture();
	git('config', 'core.fileMode', 'true');
	commit({ 'src/mode.ts': 'mode', 'src/original.ts': 'rename', 'src/base.ts': 'base' }, '2026-09-25T12:00:00+02:00');
	git('checkout', '-b', 'side');
	git('mv', 'src/original.ts', 'src/renamed.ts');
	chmodSync(join(root, 'src/mode.ts'), 0o755);
	commit({}, '2026-09-21T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/main.ts': 'main' }, '2026-09-22T12:00:00+02:00');
	merge(['side']);
	check([['src/mode.ts'], ['src/renamed.ts'], ['src/mode.ts', 'src/main.ts'], ['src/renamed.ts', 'src/base.ts']]);
});

it('preserves parent order and exact mixed-group dates in octopus merges', () => {
	const { git, commit, merge, check } = fixture();
	commit({ 'src/base.ts': 'base' }, '2026-09-25T12:00:00+02:00');
	const base = git('rev-parse', 'HEAD');
	git('checkout', '-b', 'side-a');
	commit({ 'src/side-a.ts': 'a' }, '2026-09-21T12:00:00+02:00');
	git('checkout', '-b', 'side-b', base);
	commit({ 'src/side-b.ts': 'b' }, '2026-09-20T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/main.ts': 'main' }, '2026-09-22T12:00:00+02:00');
	merge(['side-a', 'side-b']);
	expect(git('show', '--no-patch', '--format=%P', 'HEAD').split(' ')).toHaveLength(3);
	check([['src/base.ts'], ['src/main.ts'], ['src/side-a.ts'], ['src/side-b.ts'], ['src/side-a.ts', 'src/side-b.ts'], ['src/main.ts', 'src/side-a.ts', 'src/side-b.ts']]);
});

it('follows the first TREESAME parent instead of choosing a newer reverted branch date', () => {
	const { root, git, commit, merge, check } = fixture();
	commit({ 'src/shared.ts': 'original', 'src/base.ts': 'base' }, '2026-09-20T12:00:00+02:00');
	git('checkout', '-b', 'side');
	commit({ 'src/shared.ts': 'temporary' }, '2026-09-24T12:00:00+02:00');
	commit({ 'src/shared.ts': 'original', 'src/side.ts': 'side' }, '2026-09-25T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/main.ts': 'main' }, '2026-09-22T12:00:00+02:00');
	merge(['side']);
	check([['src/shared.ts'], ['src/shared.ts', 'src/side.ts'], ['src/shared.ts', 'src/main.ts']]);
	expect(createGitDateResolver(root)(['src/shared.ts'])).toBe('2026-09-20T12:00:00+02:00');
});

it('falls back conservatively for glob-like route filenames and directory pathspecs', () => {
	const { git, commit, merge, check } = fixture();
	commit({ 'src/[slug].ts': 'route', 'src/s.ts': 'match', 'src/base.ts': 'base' }, '2026-09-25T12:00:00+02:00');
	commit({ 'src/s.ts': 'new matching path' }, '2026-09-23T12:00:00+02:00');
	check([['src/[slug].ts'], ['src'], ['src/[slug].ts', 'src/base.ts']]);
	git('checkout', '-b', 'side');
	commit({ 'src/s.ts': 'side matching path' }, '2026-09-21T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'src/main.ts': 'main' }, '2026-09-22T12:00:00+02:00');
	merge(['side']);
	check([['src/[slug].ts'], ['src'], ['src/[slug].ts', 'src/main.ts']]);
});

it('shares exact wildcard checks across page groups without skipping the first TREESAME parent', () => {
	const { root, git, commit, merge } = fixture();
	const products = Array.from({ length: 12 }, (_, index) => `src/product-${index}.ts`);
	commit({ 'src/[slug].ts': 'original', ...Object.fromEntries(products.map(path => [path, 'product'])) }, '2026-09-20T12:00:00+02:00');
	git('checkout', '-b', 'side');
	commit({ 'src/[slug].ts': 'temporary' }, '2026-09-24T12:00:00+02:00');
	commit({ 'src/[slug].ts': 'original', 'src/unrelated.ts': 'not matched by [slug]' }, '2026-09-25T12:00:00+02:00');
	git('checkout', 'main');
	commit({ 'docs/main.txt': 'outside the wildcard prefix' }, '2026-09-22T12:00:00+02:00');
	merge(['side']);
	const groups = [['src/[slug].ts'], ...products.map(path => ['src/[slug].ts', path])];
	const offset = vi.mocked(execFileSync).mock.calls.length;
	const fast = createGitDateResolver(root);
	const actual = groups.map(files => fast(files));
	for (const files of groups) fast([...files].reverse());
	const calls = vi.mocked(execFileSync).mock.calls.slice(offset);
	expect(calls.filter(([, args]) => args[0] === 'diff-tree' && args.at(-1) === 'src/[slug].ts')).toHaveLength(1);
	expect(calls.filter(([, args]) => args[0] === 'log' && args.includes('--format=%cI'))).toHaveLength(0);
	for (let index = 0; index < groups.length; index++) expect(actual[index]).toBe(git('log', '-1', '--format=%cI', '--', ...groups[index]));
	expect(actual[0]).toBe('2026-09-20T12:00:00+02:00');
});

it('pins one revision so later commits cannot mix sitemap dates within the same resolver', () => {
	const { root, git, commit } = fixture();
	commit({ 'src/a.ts': 'original' }, '2026-09-25T12:00:00+02:00');
	const head = git('rev-parse', 'HEAD');
	const fast = createGitDateResolver(root);
	commit({ 'src/a.ts': 'changed' }, '2026-09-26T12:00:00+02:00');
	expect(fast(['src/a.ts'])).toBe(git('log', '-1', '--format=%cI', head, '--', 'src/a.ts'));
});

it('uses the exact query if reading the batched history fails', () => {
	const { root, git, commit } = fixture();
	commit({ 'src/a.ts': 'original' }, '2026-09-25T12:00:00+02:00');
	const fast = createGitDateResolver(root);
	vi.mocked(execFileSync).mockImplementationOnce(() => { throw new Error('Batch unavailable'); });
	expect(fast(['src/a.ts'])).toBe(git('log', '-1', '--format=%cI', '--', 'src/a.ts'));
});
