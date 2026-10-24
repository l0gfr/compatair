import { spawnSync } from 'node:child_process';
import { accessSync, constants, closeSync, fstatSync, lstatSync, openSync, readSync, readdirSync, readlinkSync, realpathSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SHA = /^[a-f0-9]{40}$/;
const isSha = value => typeof value === 'string' && value.length === 40 && SHA.test(value);
const LOCK = '.release-retention.lock';
const PREVIOUS = 'RELEASE_RETENTION.json';
const FD = 3;

function directory(path, device) {
	const info = lstatSync(path);
	if (!info.isDirectory() || info.isSymbolicLink() || (info.mode & 0o022) || (device !== undefined && info.dev !== device)) {
		throw new Error(`Unsafe release directory: ${path}`);
	}
	return info;
}

function regular(path) {
	const info = lstatSync(path);
	if (!info.isFile() || info.isSymbolicLink()) throw new Error(`Expected a regular file: ${path}`);
	return info;
}

function readSmallFile(path, maximum) {
	const fd = openSync(path, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
	try {
		const info = fstatSync(fd);
		if (!info.isFile() || info.size > maximum) throw new Error(`Invalid or oversized marker: ${path}`);
		const buffer = Buffer.alloc(maximum + 1);
		const length = readSync(fd, buffer, 0, buffer.length, 0);
		if (length > maximum) throw new Error(`Oversized marker: ${path}`);
		return buffer.subarray(0, length).toString('utf8');
	} finally { closeSync(fd); }
}

function marker(path) {
	const value = readSmallFile(path, 41);
	if (!/^[a-f0-9]{40}\n?$/.test(value)) throw new Error(`Invalid release marker: ${path}`);
	return value.trim();
}

function rollbackMarker(root) {
	try {
		const value = JSON.parse(readSmallFile(join(root, PREVIOUS), 256));
		if (!value || Object.keys(value).sort().join(',') !== 'current,previous' || !isSha(value.current) || !isSha(value.previous) || value.current === value.previous) throw new Error('Invalid rollback marker');
		return value;
	} catch (error) { if (error.code === 'ENOENT') return null; throw error; }
}

function rootDirectory(root) {
	if (!isAbsolute(root) || resolve(root) !== root || realpathSync(root) !== root) throw new Error('The deployment root must be an absolute path without symlinks');
	return directory(root);
}

function roots(root) {
	const info = rootDirectory(root);
	const releases = join(root, 'releases');
	directory(releases, info.dev);
	return { root, releases, device: info.dev, owner: info.uid };
}

function release(context, sha) {
	if (!isSha(sha)) throw new Error('Invalid release identifier');
	const path = join(context.releases, sha);
	const info = directory(path, context.device);
	regular(join(path, 'index.html'));
	return { sha, path, dev: info.dev, ino: info.ino, mtime: info.mtimeMs };
}

export function activeRelease(root) {
	const context = roots(root);
	const current = join(root, 'current');
	if (!lstatSync(current).isSymbolicLink()) throw new Error('current must be a release symlink');
	const target = resolve(root, readlinkSync(current));
	const sha = marker(join(root, 'DEPLOYED_SHA'));
	if (target !== join(context.releases, sha) || realpathSync(current) !== target) throw new Error('current and DEPLOYED_SHA disagree');
	release(context, sha);
	return { ...context, current: sha };
}

export function checkDeployment(root, allowBootstrap = false) {
	if (!allowBootstrap) return activeRelease(root);
	const device = rootDirectory(root).dev;
	let deployed = false;
	try { lstatSync(join(root, 'DEPLOYED_SHA')); deployed = true; }
	catch (error) { if (error.code !== 'ENOENT') throw error; }
	if (deployed) return activeRelease(root);
	if (rollbackMarker(root)) throw new Error('Rollback marker without an active release');
	const releases = join(root, 'releases');
	try {
		directory(releases, device);
		if (readdirSync(releases).some(name => name !== 'bootstrap')) throw new Error('Ambiguous first-deployment state');
	} catch (error) { if (error.code !== 'ENOENT') throw error; }
	try {
		const current = join(root, 'current');
		if (!lstatSync(current).isSymbolicLink() || resolve(root, readlinkSync(current)) !== join(releases, 'bootstrap') || realpathSync(current) !== join(releases, 'bootstrap')) throw new Error('Invalid bootstrap current');
		directory(join(releases, 'bootstrap'), device);
		regular(join(releases, 'bootstrap', 'index.html'));
	} catch (error) { if (error.code !== 'ENOENT' || error.path !== join(root, 'current')) throw error; }
	return { root, bootstrap: true };
}

export function withReleaseLock(root, operation, inherited = process.env.COMPATAIR_RELEASE_LOCK_FD) {
	rootDirectory(root);
	const lockPath = join(root, LOCK);
	const owned = inherited === undefined;
	if (!owned && inherited !== String(FD)) throw new Error('Invalid inherited release lock descriptor');
	const fd = owned ? openSync(lockPath, constants.O_RDWR | constants.O_CREAT | constants.O_NOFOLLOW, 0o600) : FD;
	try {
		const opened = fstatSync(fd);
		const actual = lstatSync(lockPath);
		if (!opened.isFile() || opened.nlink !== 1 || actual.isSymbolicLink() || opened.dev !== actual.dev || opened.ino !== actual.ino || (opened.mode & 0o022)) throw new Error('Unsafe or replaced release lock');
		// flock acts on the inherited open-file description. Our descriptor keeps
		// the lock after this short-lived child exits, including during shell traps.
		const locked = spawnSync('flock', ['--exclusive', '--nonblock', String(FD)], { stdio: ['ignore', 'ignore', 'pipe', fd], encoding: 'utf8' });
		if (locked.error || locked.status !== 0) throw new Error('Release lock unavailable; another deployment or cleanup may be running');
		return operation(fd);
	} finally { if (owned) closeSync(fd); }
}

function tree(path, device) {
	const info = lstatSync(path);
	if (info.isSymbolicLink() || info.dev !== device || (!info.isFile() && !info.isDirectory())) throw new Error(`Unsafe entry in release: ${path}`);
	if (info.isDirectory()) {
		directory(path, device);
		accessSync(path, constants.W_OK | constants.X_OK);
		if ((info.mode & 0o1000) && info.uid !== process.geteuid()) throw new Error(`Cannot safely remove entries in a foreign sticky directory: ${path}`);
		for (const name of readdirSync(path)) tree(join(path, name), device);
	}
}

function archiveFiles(artifacts, versions) {
	if (artifacts === undefined) return [];
	rootDirectory(artifacts);
	const files = [];
	for (const { sha } of versions) {
		for (const name of [`compatair-${sha}.tar.xz`, `compatair-${sha}.tar.gz`, `compatair-admin-${sha}.tar.gz`]) {
			for (const suffix of ['', '.sha256']) {
				const path = join(artifacts, `${name}${suffix}`);
				try { const info = regular(path); files.push({ sha, path, dev: info.dev, ino: info.ino }); }
				catch (error) { if (error.code !== 'ENOENT') throw error; }
			}
		}
	}
	return files;
}

export function planRetention(root, { keep = 5, previous, artifacts } = {}, validateTrees = true) {
	if (!Number.isSafeInteger(keep) || keep < 2) throw new Error('keep must be an integer of at least 2');
	const context = activeRelease(root);
	const recorded = rollbackMarker(root);
	if (recorded && recorded.current !== context.current) throw new Error('Rollback marker does not describe the active release');
	if (previous !== undefined && (!isSha(previous) || (recorded && previous !== recorded.previous))) throw new Error('Explicit rollback release disagrees with the recorded marker');
	previous ??= recorded?.previous;
	if (!previous || previous === context.current) throw new Error('A distinct verified previous rollback release is required');
	release(context, previous);
	const versions = [];
	const retainedLegacy = [];
	const retainedIncomplete = [];
	for (const name of readdirSync(context.releases)) {
		if (!isSha(name)) continue;
		const path = join(context.releases, name);
		const info = directory(path, context.device);
		if (info.uid !== context.owner) {
			retainedLegacy.push(name); // Do not traverse or remove historical foreign-owned trees.
			continue;
		}
		try { versions.push(release(context, name)); }
		catch (error) {
			if (error.code !== 'ENOENT' || error.path !== join(path, 'index.html')) throw error;
			retainedIncomplete.push(name); // A prior interrupted removal needs separate review.
		}
	}
	versions.sort((a, b) => b.mtime - a.mtime || a.sha.localeCompare(b.sha));
	const retained = new Set([context.current, previous]);
	for (const version of versions) if (retained.size < keep) retained.add(version.sha);
	for (const sha of [...retainedLegacy, ...retainedIncomplete]) retained.add(sha);
	const removed = versions.filter(version => !retained.has(version.sha));
	// Validate all deletion trees before removing anything. Hardlinked regular
	// files are allowed: unlinking one name preserves every retained link.
	if (validateTrees) {
		accessSync(context.releases, constants.W_OK | constants.X_OK);
		for (const version of removed) tree(version.path, context.device);
		if (artifacts !== undefined) accessSync(artifacts, constants.W_OK | constants.X_OK);
	}
	return { root, current: context.current, previous, keep, retained: [...retained], retainedLegacy, retainedIncomplete, removed, archives: archiveFiles(artifacts, removed) };
}

export function pruneReleases(root, options = {}, beforeDelete = () => {}) {
	return withReleaseLock(root, () => {
		const plan = planRetention(root, options);
		const deleted = [];
		const deletedArchives = [];
		if (options.apply) {
			for (const version of plan.removed) {
				beforeDelete(version);
				const refreshed = planRetention(root, options, false);
				if (refreshed.current !== plan.current || refreshed.previous !== plan.previous || JSON.stringify(refreshed.retained) !== JSON.stringify(plan.retained)) throw new Error('Release selection changed during cleanup');
				const candidate = refreshed.removed.find(item => item.sha === version.sha);
				if (!candidate || candidate.dev !== version.dev || candidate.ino !== version.ino) throw new Error('Release directory changed during cleanup');
				tree(version.path, candidate.dev);
				rmSync(version.path, { recursive: true });
				deleted.push(version.sha);
				for (const archive of plan.archives.filter(item => item.sha === version.sha)) {
					rootDirectory(options.artifacts);
					const info = regular(archive.path);
					if (info.dev !== archive.dev || info.ino !== archive.ino) throw new Error('Transferred archive changed during cleanup');
					rmSync(archive.path);
					deletedArchives.push(archive.path);
				}
			}
		}
		return { ...plan, mode: options.apply ? 'apply' : 'dry-run', deleted, deletedArchives };
	});
}

export function recordPrevious(root, previous, current) {
	return withReleaseLock(root, () => {
		const context = activeRelease(root);
		if (context.current !== current || !isSha(previous)) throw new Error('Activation changed before recording rollback release');
		const recorded = rollbackMarker(root);
		if (previous === current) {
			if (recorded && recorded.current !== current) throw new Error('Reactivation has a stale rollback marker');
			return; // Reactivation must retain the earlier rollback.
		}
		release(context, previous);
		const destination = join(root, PREVIOUS);
		const temporary = `${destination}.new-${process.pid}`;
		let created = false;
		try {
			writeFileSync(temporary, `${JSON.stringify({ current, previous })}\n`, { flag: 'wx', mode: 0o644 });
			created = true;
			renameSync(temporary, destination);
		} finally { if (created) rmSync(temporary, { force: true }); }
	});
}

function main(args) {
	const [command, root, ...rest] = args;
	if (command === 'with-lock') {
		if (rest[0] !== '--' || rest.length < 3) throw new Error('Usage: with-lock ROOT -- COMMAND ARG...');
		return withReleaseLock(root, fd => {
			const child = spawnSync(rest[1], rest.slice(2), { stdio: ['inherit', 'inherit', 'inherit', fd], env: { ...process.env, COMPATAIR_RELEASE_LOCK_FD: String(FD) } });
			if (child.error) throw child.error;
			return child.status ?? 1;
		});
	}
	if (command === 'check') {
		if (rest.length && (rest.length !== 1 || rest[0] !== '--allow-bootstrap')) throw new Error('Usage: check ROOT [--allow-bootstrap]');
		withReleaseLock(root, () => checkDeployment(root, rest.length === 1));
		return 0;
	}
	if (command === 'record') {
		if (rest.length !== 2) throw new Error('Usage: record ROOT PREVIOUS_SHA CURRENT_SHA');
		recordPrevious(root, ...rest);
		return 0;
	}
	if (command !== 'prune') throw new Error('Usage: prune ROOT [--previous SHA] [--keep 5] [--artifacts DIRECTORY] [--apply]');
	const options = {};
	const seen = new Set();
	for (let index = 0; index < rest.length; index += 1) {
		const arg = rest[index];
		if (seen.has(arg)) throw new Error(`Duplicate argument: ${arg}`);
		seen.add(arg);
		if (arg === '--apply') options.apply = true;
		else if (arg === '--previous' && isSha(rest[index + 1])) options.previous = rest[++index];
		else if (arg === '--artifacts' && isAbsolute(rest[index + 1] ?? '')) options.artifacts = rest[++index];
		else if (arg === '--keep' && /^[0-9]+$/.test(rest[index + 1] ?? '')) options.keep = Number(rest[++index]);
		else throw new Error(`Unknown or invalid argument: ${arg}`);
	}
	console.log(JSON.stringify(pruneReleases(root, options), null, 2));
	return 0;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
	try { process.exitCode = main(process.argv.slice(2)); }
	catch (error) { console.error(`Release retention refused: ${error.message}`); process.exitCode = 1; }
}
