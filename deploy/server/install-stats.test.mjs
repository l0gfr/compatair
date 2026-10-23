import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { chmod, lstat, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { it } from 'vitest';

const installer = await readFile(new URL('./install-stats.sh', import.meta.url), 'utf8');
const quote = value => `'${value.replaceAll("'", "'\\''")}'`;

async function updateFixture({ failure = '', oldAggregate = false, existingGeneration = 'inactive', args = ['--update'] } = {}) {
	const root = await mkdtemp(join(tmpdir(), 'compatair-stats-update-'));
	const at = path => join(root, path);
	const put = async (path, contents, mode = 0o644) => {
		await mkdir(dirname(at(path)), { recursive: true });
		await writeFile(at(path), contents); await chmod(at(path), mode);
	};
	const reports = 'var/www/html/compatair-stats';
	const generator = 'usr/local/libexec/compatair-generate-stats';
	const aggregate = 'usr/local/libexec/compatair-aggregate-stats.mjs';
	const credentials = 'etc/apache2/compatair-stats.htpasswd';
	const originals = new Map([[generator, 'old generator\n']]);
	for (const file of ['index.html', 'goaccess.css', 'goaccess.js']) originals.set(`${reports}/${file}`, `old ${file}\n`);
	if (oldAggregate) {
		originals.set(aggregate, 'old aggregate\n');
		originals.set(`${reports}/traffic-segments.json`, '{"old":true}\n');
	}
	try {
		for (const [path, contents] of originals) await put(path, contents, path === generator ? 0o755 : 0o640);
		await put(credentials, 'fixture-user:fixture-hash\n', 0o640);
		const credentialBefore = await lstat(at(credentials));
		await put('project/deploy/server/generate-stats.sh', 'new generator\n');
		await put('project/deploy/server/aggregate-stats.mjs', 'new aggregate\n');
		for (const unit of ['compatair-stats.service', 'compatair-stats.timer']) {
			await put(`project/deploy/systemd/${unit}`, `fixture ${unit}\n`);
			await put(`etc/systemd/system/${unit}`, `fixture ${unit}\n`);
		}
		for (const path of ['project/deploy/apache/compatair.fr.conf.example', 'etc/compatair/approved/compatair.fr.conf', 'etc/apache2/sites-available/compatair.fr.conf']) await put(path, 'approved fixture\n');
		await put('opt/compatair/node/bin/node', '#!/bin/bash\nexit 0\n', 0o755);
		await put('usr/bin/goaccess', '#!/bin/bash\nprintf -- "--anonymize-level\\n"\n', 0o755);
		await put('timer-state', 'active\n');
		await put('state-reads', '0\n');
		if (failure === 'missing-credentials') await rm(at(credentials));
		if (failure === 'vhost') await put('etc/compatair/approved/compatair.fr.conf', 'old vhost\n');
		if (failure === 'unit') await put('etc/systemd/system/compatair-stats.service', 'different unit\n');
		if (failure === 'symlink') await symlink(at(credentials), at(aggregate));
		// No production test switches: relocate a fixture copy and substitute only
		// privileged commands. Filesystem copies, traps and branch logic run as written.
		const rootGuard = 'if [[ ${EUID:-$(id -u)} -ne 0 ]]; then';
		assert.equal(installer.split(rootGuard).length, 2);
		let isolated = installer.replace(rootGuard, 'if false; then');
		isolated = isolated.replace(/\/(?:etc|usr|var|opt)\//g, prefix => `${root}${prefix}`);
		await put('project/deploy/server/install-stats.sh', isolated);
		await put('harness.sh', `#!/bin/bash
set -Eeuo pipefail
record() { printf '%s\\n' "$*" >> ${quote(at('operations'))}; }
id() { if [[ "$1" == -nG ]]; then printf 'compatair-stats adm\\n'; else printf 'fixture user\\n'; fi; }
stat() {
  if [[ "$3" == */compatair-stats.htpasswd ]]; then printf 'root:www-data:640\\n';
  else printf 'compatair-stats:www-data:2750\\n'; fi
}
install() {
  record install "$@"
  local options=()
  while [[ $# -gt 0 ]]; do
    case "$1" in -o|-g) shift 2 ;; *) options+=("$1"); shift ;; esac
  done
  command install "\${options[@]}"
}
cp() {
  record cp "$@"
  local options=() remove=false
  while [[ $# -gt 0 ]]; do
    case "$1" in --preserve=*) shift ;; --remove-destination) remove=true; shift ;; --) shift ;; *) options+=("$1"); shift ;; esac
  done
  if [[ "$remove" == true ]]; then
    if [[ ${quote(failure)} == restore && "\${options[1]}" == ${quote(at(generator))} ]]; then return 1; fi
    command rm -f -- "\${options[1]}"
  fi
  command cp -p "\${options[@]}"
}
systemctl() {
  record systemctl "$@"
  if [[ ${quote(failure)} == timer && "$1" == is-active ]]; then return 3; fi
  if [[ "$1" == show ]]; then
    local reads
    reads=$(cat ${quote(at('state-reads'))})
    printf '%s\\n' "$((reads + 1))" > ${quote(at('state-reads'))}
    if [[ ${quote(existingGeneration)} == busy || ( ${quote(existingGeneration)} == finishes && "$reads" == 0 ) ]]; then
      printf 'activating\\n'
    elif [[ ${quote(existingGeneration)} == finishes ]]; then
      printf 'completed old css\\n' > ${quote(at(`${reports}/goaccess.css`))}
      printf 'completed old js\\n' > ${quote(at(`${reports}/goaccess.js`))}
      record generation-finished
      printf 'inactive\\n'
    elif [[ ${quote(existingGeneration)} == unknown ]]; then
      printf 'unexpected\\n'
    else
      printf 'inactive\\n'
    fi
  elif [[ "$1 $2" == 'start compatair-stats.service' ]]; then
    printf 'new report\\n' > ${quote(at(`${reports}/index.html`))}
    printf 'new css\\n' > ${quote(at(`${reports}/goaccess.css`))}
    printf 'new js\\n' > ${quote(at(`${reports}/goaccess.js`))}
    printf '{"new":true}\\n' > ${quote(at(`${reports}/traffic-segments.json`))}
    if [[ ${quote(failure)} == hup ]]; then kill -HUP "$$"; fi
    [[ ${quote(failure)} != generate && ${quote(failure)} != restore ]]
  elif [[ "$1 $2" == 'stop compatair-stats.timer' ]]; then
    printf 'inactive\\n' > ${quote(at('timer-state'))}
  elif [[ "$1 $2" == 'start compatair-stats.timer' ]]; then
    printf 'active\\n' > ${quote(at('timer-state'))}
  fi
}
sleep() { record sleep "$@"; }
curl() { record curl "$@"; printf ${failure === 'privacy' ? '200' : '401'}; }
apt-get() { record forbidden apt-get; return 93; }
usermod() { record forbidden usermod; return 93; }
useradd() { record forbidden useradd; return 93; }
htpasswd() { record forbidden htpasswd; return 93; }
a2enmod() { record forbidden a2enmod; return 93; }
source "$1" "\${@:2}"
`);
		const result = spawnSync('/bin/bash', [at('harness.sh'), at('project/deploy/server/install-stats.sh'), ...args], { encoding: 'utf8', timeout: 5_000, input: '' });
		assert.ifError(result.error);
		const operations = await readFile(at('operations'), 'utf8').catch(error => { if (error.code === 'ENOENT') return ''; throw error; });
		assert.doesNotMatch(operations, /forbidden|daemon-reload|enable --now/);
		if (failure !== 'missing-credentials') {
			const after = await lstat(at(credentials));
			assert.equal(await readFile(at(credentials), 'utf8'), 'fixture-user:fixture-hash\n');
			assert.equal(after.ino, credentialBefore.ino);
			assert.equal(after.mode, credentialBefore.mode);
			assert.equal(after.mtimeMs, credentialBefore.mtimeMs);
		}
		const contents = new Map();
		for (const path of new Set([...originals.keys(), aggregate, `${reports}/traffic-segments.json`])) contents.set(path, await readFile(at(path), 'utf8').catch(error => { if (error.code === 'ENOENT') return null; throw error; }));
		return { ...result, operations, originals, contents, generator, aggregate, reports, timer: await readFile(at('timer-state'), 'utf8'), backups: (await readdir(at('usr/local/libexec'))).filter(name => name.startsWith('.compatair-stats-update.')) };
	} finally { await rm(root, { recursive: true, force: true }); }
}

it('keeps the installer valid Bash and rejects unsupported arguments before mutations', async () => {
	const syntax = spawnSync('/bin/bash', ['-n', new URL('./install-stats.sh', import.meta.url).pathname], { encoding: 'utf8' });
	assert.equal(syntax.status, 0, syntax.stderr);
	const result = await updateFixture({ args: ['--update', 'extra'] });
	assert.equal(result.status, 2); assert.equal(result.operations, '');
});

it('updates an existing installation without changing credentials or invoking provisioning', async () => {
	const result = await updateFixture();
	assert.equal(result.status, 0, result.stderr);
	assert.equal(result.contents.get(result.generator), 'new generator\n');
	assert.equal(result.contents.get(result.aggregate), 'new aggregate\n');
	assert.equal(result.timer, 'active\n'); assert.deepEqual(result.backups, []);
	assert.equal((result.operations.match(/curl /g) ?? []).length, 2);
});

for (const failure of ['generate', 'privacy', 'hup']) {
	it(`restores executables and all reports when ${failure} fails`, async () => {
		const result = await updateFixture({ failure, oldAggregate: true });
		assert.notEqual(result.status, 0);
		if (failure === 'hup') assert.equal(result.status, 129);
		for (const [path, contents] of result.originals) assert.equal(result.contents.get(path), contents, path);
		assert.equal(result.timer, 'active\n'); assert.deepEqual(result.backups, []);
		assert.match(result.stderr, /previous executables and reports restored/);
	});
}

it('removes newly introduced files on a failed first aggregate upgrade', async () => {
	const result = await updateFixture({ failure: 'generate' });
	assert.notEqual(result.status, 0);
	assert.equal(result.contents.get(result.aggregate), null);
	assert.equal(result.contents.get(`${result.reports}/traffic-segments.json`), null);
});

for (const failure of ['missing-credentials', 'vhost', 'symlink', 'unit', 'timer']) {
	it(`refuses ${failure} before stopping the timer or installing files`, async () => {
		const result = await updateFixture({ failure });
		assert.notEqual(result.status, 0);
		assert.doesNotMatch(result.operations, /systemctl stop|install /);
		assert.equal(result.contents.get(result.generator), 'old generator\n');
		assert.equal(result.timer, 'active\n'); assert.deepEqual(result.backups, []);
	});
}

it('keeps recovery backups and the timer stopped if restoration itself fails', async () => {
	const result = await updateFixture({ failure: 'restore' });
	assert.notEqual(result.status, 0);
	assert.equal(result.timer, 'inactive\n'); assert.equal(result.backups.length, 1);
	assert.match(result.stderr, /recovery requires operator intervention/);
});

it('waits for an existing generation before backing up its completed assets', async () => {
	const result = await updateFixture({ existingGeneration: 'finishes', failure: 'generate', oldAggregate: true });
	assert.notEqual(result.status, 0);
	assert.equal(result.contents.get(`${result.reports}/goaccess.css`), 'completed old css\n');
	assert.equal(result.contents.get(`${result.reports}/goaccess.js`), 'completed old js\n');
	assert.equal(result.contents.get(result.generator), 'old generator\n');
	assert.ok(result.operations.indexOf('generation-finished') < result.operations.indexOf('cp '));
	assert.ok(result.operations.indexOf('systemctl start compatair-stats.service') < result.operations.indexOf('systemctl stop compatair-stats.service'));
	assert.equal(result.timer, 'active\n'); assert.deepEqual(result.backups, []);
});

for (const existingGeneration of ['busy', 'unknown']) {
	it(`refuses a ${existingGeneration} existing service without stopping it or backing up files`, async () => {
		const result = await updateFixture({ existingGeneration });
		assert.equal(result.status, 2);
		assert.doesNotMatch(result.operations, /systemctl (?:start|stop) compatair-stats.service|install |cp /);
		for (const [path, contents] of result.originals) assert.equal(result.contents.get(path), contents, path);
		assert.equal(result.timer, 'active\n'); assert.deepEqual(result.backups, []);
		if (existingGeneration === 'busy') {
			assert.equal((result.operations.match(/systemctl show --property=ActiveState --value/g) ?? []).length, 31);
			assert.equal((result.operations.match(/sleep 1/g) ?? []).length, 30);
			assert.match(result.stderr, /after 30 seconds/);
		}
	});
}
