import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmodSync, chownSync, existsSync, linkSync, lstatSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, symlinkSync, utimesSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterEach, test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { activeRelease, checkDeployment, planRetention, pruneReleases, recordPrevious, withReleaseLock } from './prune-releases.mjs';

const helper = fileURLToPath(new URL('./prune-releases.mjs', import.meta.url));
const temporary = [];
const sha = value => value.toString(16).padStart(40, '0');
const state = (current, previous) => `${JSON.stringify({ current: sha(current), previous: sha(previous) })}\n`;
afterEach(() => { for (const path of temporary.splice(0)) rmSync(path, { recursive: true, force: true }); });

function fixture(count = 8) {
	const root = realpathSync(mkdtempSync(join(tmpdir(), 'compatair-retention-')));
	temporary.push(root);
	mkdirSync(join(root, 'releases'));
	for (let index = 0; index < count; index += 1) {
		const path = join(root, 'releases', sha(index));
		mkdirSync(path);
		writeFileSync(join(path, 'index.html'), `release ${index}`);
		utimesSync(path, 1000 + index, 1000 + index);
	}
	symlinkSync(`releases/${sha(0)}`, join(root, 'current'));
	writeFileSync(join(root, 'DEPLOYED_SHA'), `${sha(0)}\n`);
	writeFileSync(join(root, 'RELEASE_RETENTION.json'), state(0, 1));
	return root;
}

const names = root => readdirSync(join(root, 'releases')).sort();
const cli = args => spawnSync(process.execPath, [helper, ...args], { encoding: 'utf8', timeout: 10_000 });

test('default CLI is a dry run retaining exactly five including the two oldest protected releases', () => {
	const root = fixture();
	const before = names(root);
	const result = cli(['prune', root]);
	assert.equal(result.status, 0, result.stderr);
	const plan = JSON.parse(result.stdout);
	assert.equal(plan.mode, 'dry-run');
	assert.deepEqual(plan.retained, [sha(0), sha(1), sha(7), sha(6), sha(5)]);
	assert.deepEqual(names(root), before);
	assert.equal(readFileSync(join(root, 'RELEASE_RETENTION.json'), 'utf8'), state(0, 1));
});

test('explicit apply only removes unprotected SHA directories', () => {
	const root = fixture();
	for (const name of ['bootstrap', '.incoming-other', 'manual-backup']) mkdirSync(join(root, 'releases', name));
	const result = pruneReleases(root, { apply: true });
	assert.equal(result.deleted.length, 3);
	assert.deepEqual(names(root), ['.incoming-other', sha(0), sha(1), sha(5), sha(6), sha(7), 'bootstrap', 'manual-backup'].sort());
	assert.equal(activeRelease(root).current, sha(0));
});

test('fewer than five versions are never deleted', () => {
	const root = fixture(3);
	assert.equal(pruneReleases(root, { apply: true }).deleted.length, 0);
});

test('initial cleanup requires an explicit previous release and does not invent a marker', () => {
	const root = fixture();
	rmSync(join(root, 'RELEASE_RETENTION.json'));
	assert.throws(() => pruneReleases(root, { apply: true }), /previous rollback release/);
	assert.equal(pruneReleases(root, { previous: sha(1), apply: true }).deleted.length, 3);
	assert.equal(existsSync(join(root, 'RELEASE_RETENTION.json')), false);
});

test('missing, stale or contradictory protection markers fail before deletion', () => {
	for (const mutation of [
		root => writeFileSync(join(root, 'DEPLOYED_SHA'), `${sha(2)}\n`),
		root => writeFileSync(join(root, 'RELEASE_RETENTION.json'), state(0, 99)),
		root => writeFileSync(join(root, 'RELEASE_RETENTION.json'), state(0, 0)),
		root => rmSync(join(root, 'DEPLOYED_SHA')),
	]) {
		const root = fixture(); mutation(root);
		assert.throws(() => pruneReleases(root, { apply: true }));
		assert.equal(names(root).length, 8);
	}
	assert.throws(() => pruneReleases(fixture(), { previous: sha(2), apply: true }), /disagrees/);
});

test('recording a successful activation protects its predecessor and self-reactivation keeps it', () => {
	const root = fixture();
	recordPrevious(root, sha(2), sha(0));
	assert.equal(readFileSync(join(root, 'RELEASE_RETENTION.json'), 'utf8'), state(0, 2));
	recordPrevious(root, sha(0), sha(0));
	assert.equal(readFileSync(join(root, 'RELEASE_RETENTION.json'), 'utf8'), state(0, 2));
	assert.throws(() => recordPrevious(root, sha(1), sha(4)), /Activation changed/);
});

test('a failed marker update after activation prevents every subsequent standalone purge', () => {
	const root = fixture();
	rmSync(join(root, 'current')); symlinkSync(`releases/${sha(7)}`, join(root, 'current'));
	writeFileSync(join(root, 'DEPLOYED_SHA'), `${sha(7)}\n`);
	assert.throws(() => pruneReleases(root, { apply: true }), /does not describe/);
	assert.equal(names(root).length, 8);
	recordPrevious(root, sha(0), sha(7));
	assert.deepEqual(planRetention(root).retained.slice(0, 2), [sha(7), sha(0)]);
});

test('read-only planning needs no lock or write permission', () => {
	const root = fixture();
	chmodSync(root, 0o555);
	try {
		assert.equal(planRetention(root, {}, false).removed.length, 3);
		assert.equal(existsSync(join(root, '.release-retention.lock')), false);
	} finally { chmodSync(root, 0o755); }
});

test('bootstrap is allowed only for a fresh root or the verified bootstrap layout', () => {
	const root = fixture(0);
	rmSync(join(root, 'current')); rmSync(join(root, 'DEPLOYED_SHA')); rmSync(join(root, 'RELEASE_RETENTION.json'));
	assert.equal(checkDeployment(root, true).bootstrap, true);
	const bootstrap = join(root, 'releases/bootstrap'); mkdirSync(bootstrap); writeFileSync(join(bootstrap, 'index.html'), 'bootstrap');
	symlinkSync(bootstrap, join(root, 'current'));
	assert.equal(checkDeployment(root, true).bootstrap, true);
	assert.throws(() => checkDeployment(root));
	mkdirSync(join(root, 'releases/ambiguous'));
	assert.throws(() => checkDeployment(root, true), /Ambiguous/);
	const existing = fixture(); rmSync(join(existing, 'current'));
	assert.throws(() => checkDeployment(existing, true));
});

test('only exact transferred archives belonging to deleted releases are removed', () => {
	const root = fixture();
	const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
	const recognized = [];
	for (const value of [0, 1, 2, 3, 4, 5, 6, 7, 99]) {
		for (const name of [`compatair-${sha(value)}.tar.xz`, `compatair-${sha(value)}.tar.gz`, `compatair-admin-${sha(value)}.tar.gz`]) {
			for (const suffix of ['', '.sha256']) { const path = join(artifacts, name + suffix); writeFileSync(path, 'archive'); if (value >= 2 && value <= 4) recognized.push(path); }
		}
	}
	writeFileSync(join(artifacts, 'deploy-remote.sh'), 'helper');
	writeFileSync(join(artifacts, `compatair-${sha(2)}.tar.xz.other`), 'unknown');
	const before = readdirSync(artifacts).length;
	assert.equal(pruneReleases(root, { artifacts }).archives.length, 18);
	assert.equal(readdirSync(artifacts).length, before);
	const result = pruneReleases(root, { artifacts, apply: true });
	assert.deepEqual(result.deletedArchives.sort(), recognized.sort());
	assert.equal(readdirSync(artifacts).length, before - 18);
	assert.equal(existsSync(join(artifacts, `compatair-${sha(99)}.tar.xz`)), true);
});

test('unsafe archive paths are rejected before removing any release', () => {
	const root = fixture();
	const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
	symlinkSync('/tmp', join(artifacts, `compatair-${sha(2)}.tar.xz`));
	assert.throws(() => pruneReleases(root, { artifacts, apply: true }));
	assert.equal(names(root).length, 8);
	const alias = join(root, 'transfer-alias'); symlinkSync(artifacts, alias);
	assert.throws(() => pruneReleases(root, { artifacts: alias, apply: true }));
});

test('oversized markers and FIFO markers fail closed without blocking', () => {
	const root = fixture();
	writeFileSync(join(root, 'DEPLOYED_SHA'), 'a'.repeat(1000));
	assert.throws(() => pruneReleases(root, { apply: true }), /oversized/);
	rmSync(join(root, 'DEPLOYED_SHA'));
	assert.equal(spawnSync('mkfifo', [join(root, 'DEPLOYED_SHA')]).status, 0);
	assert.throws(() => pruneReleases(root, { apply: true }), /Invalid/);
});

test('rejects invalid counts, options and missing explicit SHA', () => {
	const root = fixture();
	for (const args of [['--keep', '1'], ['--keep', '-5'], ['--keep', '2.5'], ['--previous'], ['--previous', `${sha(1)}\n`], ['--previous', '../escape'], ['--apply', '--apply'], ['--unknown']]) {
		assert.notEqual(cli(['prune', root, ...args]).status, 0, args.join(' '));
	}
	assert.equal(names(root).length, 8);
});

test('a directory with a SHA plus a newline is not a release candidate', () => {
	const root = fixture();
	const unusual = `${sha(99)}\n`;
	mkdirSync(join(root, 'releases', unusual));
	pruneReleases(root, { apply: true });
	assert.equal(existsSync(join(root, 'releases', unusual)), true);
});

test('refuses root, releases, SHA directory, file and marker symlinks', () => {
	for (const relative of ['releases', `releases/${sha(2)}`, `releases/${sha(2)}/index.html`, 'DEPLOYED_SHA', 'RELEASE_RETENTION.json']) {
		const root = fixture();
		const source = join(root, relative), saved = `${source}.saved`;
		renameSync(source, saved); symlinkSync(saved, source);
		assert.throws(() => pruneReleases(root, { apply: true }));
	}
	const root = fixture();
	const alias = `${root}-alias`; temporary.push(alias); symlinkSync(root, alias);
	assert.throws(() => pruneReleases(alias, { apply: true }), /without symlinks/);
});

test('refuses nested symlinks in candidate releases before any removal', () => {
	const root = fixture();
	symlinkSync('/tmp', join(root, 'releases', sha(2), 'outside'));
	utimesSync(join(root, 'releases', sha(2)), 1002, 1002);
	assert.throws(() => pruneReleases(root, { apply: true }), /Unsafe entry/);
	assert.equal(names(root).length, 8);
});

test('deleting a donor release preserves retained historical verdict hardlinks and bytes', () => {
	const root = fixture();
	const donor = join(root, 'releases', sha(2), 'verdicts.json');
	const retained = join(root, 'releases', sha(0), 'verdicts.json');
	writeFileSync(donor, '{"signed":"historical data"}'); linkSync(donor, retained);
	const inode = lstatSync(retained).ino;
	utimesSync(join(root, 'releases', sha(2)), 1002, 1002);
	pruneReleases(root, { apply: true });
	assert.equal(existsSync(donor), false);
	assert.equal(lstatSync(retained).ino, inode);
	assert.equal(readFileSync(retained, 'utf8'), '{"signed":"historical data"}');
});

test('another process cannot prune while deployment holds the lock', () => {
	const root = fixture();
	withReleaseLock(root, () => {
		const result = cli(['prune', root, '--apply']);
		assert.notEqual(result.status, 0);
		assert.match(result.stderr, /lock unavailable/);
	});
	assert.equal(names(root).length, 8);
});

test('with-lock passes the same descriptor so a nested pruning command succeeds', () => {
	const root = fixture();
	const result = cli(['with-lock', root, '--', process.execPath, helper, 'prune', root, '--apply']);
	assert.equal(result.status, 0, result.stderr);
	assert.equal(names(root).length, 5);
});

test('an inherited-descriptor claim alone cannot bypass locking', () => {
	const root = fixture();
	assert.throws(() => withReleaseLock(root, () => assert.fail('unsafe callback'), '3'));
	assert.throws(() => withReleaseLock(root, () => assert.fail('unsafe callback'), '9'));
	assert.equal(names(root).length, 8);
});

test('a symlink or extra hardlink at the lock path is rejected', () => {
	const root = fixture();
	const outside = join(root, 'outside'); writeFileSync(outside, 'unchanged');
	symlinkSync(outside, join(root, '.release-retention.lock'));
	assert.throws(() => pruneReleases(root, { apply: true }));
	rmSync(join(root, '.release-retention.lock')); linkSync(outside, join(root, '.release-retention.lock'));
	assert.throws(() => pruneReleases(root, { apply: true }), /Unsafe/);
	assert.equal(readFileSync(outside, 'utf8'), 'unchanged');
});

test('a concurrent current change is detected before deletion even outside the cooperating lock', () => {
	const root = fixture();
	assert.throws(() => pruneReleases(root, { apply: true }, () => {
		rmSync(join(root, 'current')); symlinkSync(`releases/${sha(4)}`, join(root, 'current'));
		writeFileSync(join(root, 'DEPLOYED_SHA'), `${sha(4)}\n`);
		writeFileSync(join(root, 'RELEASE_RETENTION.json'), state(4, 1));
	}), /selection changed/);
	assert.equal(names(root).length, 8);
});

test('a replaced deletion directory is detected before removal', () => {
	const root = fixture();
	assert.throws(() => pruneReleases(root, { apply: true }, version => {
		renameSync(version.path, `${version.path}.saved`);
		mkdirSync(version.path); writeFileSync(join(version.path, 'index.html'), 'replacement');
		utimesSync(version.path, version.mtime / 1000, version.mtime / 1000);
	}), /directory changed/);
	assert.equal(names(root).length, 9);
});

test('a last candidate without write permission fails before deleting any release or archive', () => {
	const root = fixture();
	const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
	const archive = join(artifacts, `compatair-${sha(4)}.tar.xz`); writeFileSync(archive, 'keep');
	const before = names(root);
	const path = join(root, 'releases', sha(2)); chmodSync(path, 0o500);
	try {
		for (const apply of [false, true]) assert.throws(() => pruneReleases(root, { artifacts, apply }), /EACCES/);
		assert.deepEqual(names(root), before);
		assert.equal(readFileSync(archive, 'utf8'), 'keep');
	}
	finally { chmodSync(path, 0o755); }
});

test('nested directory, releases parent and archive directory permissions are checked globally', () => {
	for (const target of ['nested', 'releases', 'archives']) {
		const root = fixture();
		const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
		const nested = join(root, 'releases', sha(2), 'nested'); mkdirSync(nested); writeFileSync(join(nested, 'file'), 'keep');
		utimesSync(join(root, 'releases', sha(2)), 1002, 1002);
		const path = target === 'nested' ? nested : target === 'releases' ? join(root, 'releases') : artifacts;
		const before = names(root); chmodSync(path, 0o500);
		try {
			assert.throws(() => pruneReleases(root, { artifacts, apply: true }), /EACCES/);
			assert.deepEqual(names(root), before);
		} finally { chmodSync(path, 0o755); }
	}
});

test('retry preserves incomplete candidates and their archives while current and rollback remain strict', () => {
	const root = fixture();
	const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
	const archive = join(artifacts, `compatair-${sha(2)}.tar.xz`); writeFileSync(archive, 'keep');
	rmSync(join(root, 'releases', sha(2), 'index.html'));
	const result = pruneReleases(root, { artifacts, apply: true });
	assert.deepEqual(result.retainedIncomplete, [sha(2)]);
	assert.deepEqual(result.deleted, [sha(4), sha(3)]);
	assert.equal(existsSync(archive), true);
	assert.deepEqual(pruneReleases(root, { artifacts, apply: true }).deleted, []);
	for (const protectedSha of [sha(0), sha(1)]) {
		rmSync(join(root, 'releases', protectedSha, 'index.html'));
		assert.throws(() => pruneReleases(root, { apply: true }), /ENOENT/);
		writeFileSync(join(root, 'releases', protectedSha, 'index.html'), 'restored fixture');
	}
});

test('root-owned legacy directories and their archives remain untouched by the deployment user', { skip: process.geteuid() !== 0 }, () => {
	const root = fixture();
	const artifacts = join(root, 'transfer'); mkdirSync(artifacts);
	const archive = join(artifacts, `compatair-${sha(2)}.tar.xz`); writeFileSync(archive, 'keep');
	function transfer(path) {
		const info = lstatSync(path);
		if (info.isSymbolicLink()) return;
		chownSync(path, 65534, 65534);
		if (info.isDirectory()) for (const name of readdirSync(path)) transfer(join(path, name));
	}
	transfer(root); chmodSync(root, 0o755);
	const legacy = join(root, 'releases', sha(2)); chownSync(legacy, 0, 0); chmodSync(legacy, 0o700);
	const run = spawnSync(process.execPath, [helper, 'prune', root, '--artifacts', artifacts, '--apply'], { encoding: 'utf8', uid: 65534, gid: 65534 });
	assert.equal(run.status, 0, run.stderr);
	const result = JSON.parse(run.stdout);
	assert.deepEqual(result.retainedLegacy, [sha(2)]);
	assert.deepEqual(result.deleted, [sha(4), sha(3)]);
	assert.equal(readFileSync(join(legacy, 'index.html'), 'utf8'), 'release 2');
	assert.equal(existsSync(archive), true);
});

test('a stale marker temporary file is preserved rather than overwritten or removed', () => {
	const root = fixture();
	const path = join(root, `RELEASE_RETENTION.json.new-${process.pid}`); writeFileSync(path, 'stale');
	assert.throws(() => recordPrevious(root, sha(2), sha(0)), /EEXIST/);
	assert.equal(readFileSync(path, 'utf8'), 'stale');
});

test('deployment and rollback hold the common lock, and cleanup follows the successful commit', () => {
	const deploy = readFileSync(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
	const rollback = readFileSync(new URL('./rollback-remote.sh', import.meta.url), 'utf8');
	for (const script of [deploy, rollback]) {
		assert.match(script, /with-lock "\$deploy_root" -- \/bin\/bash "\$0" "\$@"/);
		assert(script.indexOf('check "$deploy_root"') < script.indexOf('ln -sfn "$release"'));
	}
	assert(deploy.lastIndexOf('activation_pending=false') < deploy.indexOf('prune "$deploy_root" --artifacts'));
	assert(deploy.indexOf('run_public_smoke "$release_id"') < deploy.indexOf('activation_committed=true'));
	assert.match(deploy, /if ! .*prune "\$deploy_root" --artifacts .* --apply; then/);
	assert.match(readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8'), /scripts\/prune-releases\.mjs \\/);
});

test('post-commit marker or cleanup failures leave the healthy activation committed', () => {
	const deploy = readFileSync(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
	const start = deploy.lastIndexOf('\nprintf \'%s\\n\' "$release_id" > "$deployed_sha"');
	assert(start > 0);
	const tail = deploy.slice(start).replaceAll('/opt/compatair/node/bin/node', '/bin/bash "$TEST_NODE"');
	for (const failingCommand of ['record', 'prune']) {
		const root = fixture();
		const fakeNode = join(root, 'node');
		writeFileSync(fakeNode, '#!/bin/sh\nprintf "%s\\n" "$2" >> "$TEST_CALLS"\nif [ "$2" = "$TEST_FAILURE" ]; then exit 42; fi\n', { mode: 0o755 });
		const script = `set -Eeuo pipefail\nactivation_pending=true\ndeployment_profile=production\nprevious_release_id=${sha(1)}\nrelease_id=${sha(0)}\ndeploy_root="$TEST_ROOT"\ndeployed_sha="$TEST_ROOT/DEPLOYED_SHA"\nretention_helper=unused\narchive="$TEST_ROOT/archive.tar.xz"\ntrap 'if [[ "$activation_pending" == true ]]; then printf rollback > "$TEST_ROOT/rolled-back"; fi' EXIT\n${tail}`;
		const result = spawnSync('/bin/bash', ['-c', script], { encoding: 'utf8', env: { ...process.env, TEST_ROOT: root, TEST_NODE: fakeNode, TEST_CALLS: join(root, 'calls'), TEST_FAILURE: failingCommand } });
		assert.equal(result.status, 0, result.stderr);
		assert.equal(existsSync(join(root, 'rolled-back')), false);
		assert.match(result.stderr, failingCommand === 'record' ? /retention skipped/ : /retention failed/);
		assert.equal(readFileSync(join(root, 'calls'), 'utf8'), failingCommand === 'record' ? 'record\n' : 'record\nprune\n');
	}
});
