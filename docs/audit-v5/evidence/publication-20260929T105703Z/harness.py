import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import signal
import subprocess
import sys
import time

def file_manifest(directory):
    result = {}
    for p in sorted(directory.rglob('*')):
        if p.is_symlink(): raise ValueError('Unexpected symlink in built artifact: ' + str(p))
        if not p.is_file(): continue
        digest = hashlib.sha256()
        with p.open('rb') as stream:
            while chunk := stream.read(1024 * 1024): digest.update(chunk)
        result[str(p.relative_to(directory))] = {'bytes': p.stat().st_size, 'sha256': digest.hexdigest()}
    return result

if len(sys.argv) == 4 and sys.argv[1] == '--file-manifest':
    Path(sys.argv[3]).write_text(json.dumps(file_manifest(Path(sys.argv[2])), indent=2) + '\n')
    raise SystemExit(0)

if len(sys.argv) < 2:
    raise SystemExit('Usage: qualification-publication.py ISOLATED_ROOT [--preflight]')
root = Path(sys.argv[1]).resolve()
assert root.name.startswith('compatair-qualification-source-')
assert (root / 'BENCHMARK_ONLY').is_file()
assert not (root / '.git').exists() and not (root / '.github').exists()
assert len([p for p in (root / 'src/data/products/compressors').glob('*.ts') if p.name != 'index.ts']) == 21811
assert len([p for p in (root / 'src/data/products/tools').glob('*.ts') if p.name != 'index.ts']) == 78189
preparation = json.loads((root / 'qualification-v5/run-inputs.json').read_text())
output = root / ('qualification-v5/publication-' + time.strftime('%Y%m%dT%H%M%SZ', time.gmtime()))
output.mkdir(exist_ok=False)
shutil.copyfile(__file__, output / 'harness.py')
(root / 'tmp').mkdir(exist_ok=True)
node = '/Users/bluetouff/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node'
config = json.loads((root / 'config/qualification-100k.json').read_text())
budgets = config['budgets']
profile = output / 'isolation.sb'
profile.write_text('(version 1)\n(allow default)\n(deny network*)\n(deny file-write*)\n(allow file-write* (subpath ' + json.dumps(str(root)) + ') (literal "/dev/null"))\n')
service_profile = output / 'loopback-only.sb'
service_profile.write_text(profile.read_text() + '(allow network-bind (local ip "localhost:*"))\n(allow network-inbound (local ip "localhost:*"))\n(allow network-outbound (remote ip "localhost:*"))\n')
env = {'PATH': str(Path(node).parent) + ':/opt/homebrew/bin:/usr/bin:/bin', 'TMPDIR': str(root / 'tmp') + '/', 'LANG': 'en_US.UTF-8', 'ASTRO_TELEMETRY_DISABLED': '1', 'COMPATAIR_RELEASE_SHA': 'development'}
report = {'schemaVersion': 1, 'synthetic': True, 'sourceCommit': preparation['sourceCommit'], 'sourceCatalogVersion': '02fe8d998994ae642273a70bd63f6f265b7658714bff08ccab127d1a798a2a6f', 'sourcePreparation': str(root / 'qualification-v5/run-inputs.json'), 'artifactMarker': 'development', 'productionPublication': 'forbidden', 'root': str(root), 'startedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'budgetsDeclaredBeforeRun': budgets, 'harnessSha256': hashlib.sha256(Path(__file__).read_bytes()).hexdigest(), 'scope': 'macOS isolated full publication trial; network denied and writes restricted to synthetic copy; no production deployment', 'memoryMeasurement': 'Peak child RSS from BSD time plus sampled aggregate process-tree RSS every 500 ms; sample-based hard stop at 8192 MiB', 'publicationBudgetScope': '1500 seconds total across offline preparation, cold build, database, warm build and archive; restoration separately limited to 300 seconds', 'steps': [], 'qualification': 'incomplete', 'notExecuted': ['staging Apache/systemd failure drill', 'public publication of synthetic corpus']}
report_path = output / 'publication-results.json'
def save():
    report_path.write_text(json.dumps(report, indent=2) + '\n')
save()
def report_exception(kind, error, traceback):
    report.update(qualification='failed-harness', failure={'type': kind.__name__, 'message': str(error)})
    for step in report['steps']:
        if step['status'] == 'running': step.update(status='failed', failureReason='harness-exception')
    save()
    sys.__excepthook__(kind, error, traceback)
sys.excepthook = report_exception

def tree_rss(pid):
    rows = subprocess.check_output(['/bin/ps', '-axo', 'pid=,ppid=,rss='], text=True)
    records = [tuple(map(int, row.split())) for row in rows.splitlines() if row.strip()]
    pids = {pid}
    for _ in range(12):
        additional = {p for p, parent, rss in records if parent in pids}
        if additional <= pids: break
        pids |= additional
    return sum(rss for p, parent, rss in records if p in pids) * 1024

def run(name, args, timeout, isolated=True):
    log = output / (name + '.log')
    step = {'name': name, 'argv': args, 'status': 'running', 'log': str(log), 'timeoutSeconds': timeout, 'network': 'denied' if isolated else 'sandbox allows localhost only'}
    report['steps'].append(step)
    save()
    tick = time.monotonic()
    peak = 0
    reason = None
    with log.open('wb') as stream:
        prefix = ['/usr/bin/sandbox-exec', '-f', str(profile if isolated else service_profile)]
        child = subprocess.Popen([*prefix, '/usr/bin/time', '-l', *args], cwd=root, env=env, stdout=stream, stderr=subprocess.STDOUT, start_new_session=True)
        try:
            while child.poll() is None:
                peak = max(peak, tree_rss(child.pid))
                if peak > budgets['publicationPeakMiB'] * 1024**2: reason = 'memory-budget-exceeded'
                if time.monotonic() - tick > timeout: reason = 'time-budget-exceeded'
                if reason: break
                time.sleep(.5)
        finally:
            if child.poll() is None:
                os.killpg(child.pid, signal.SIGTERM)
                try: child.wait(timeout=5)
                except subprocess.TimeoutExpired: os.killpg(child.pid, signal.SIGKILL); child.wait()
    text = log.read_text(errors='replace')
    rss = re.findall(r'(\d+)\s+maximum resident set size', text)
    seconds = time.monotonic() - tick
    child_peak = int(rss[-1]) / 1024**2 if rss else None
    if seconds > timeout: reason = 'time-budget-exceeded'
    if child_peak is not None and child_peak > budgets['publicationPeakMiB']: reason = 'memory-budget-exceeded'
    step.update({'status': 'passed' if child.returncode == 0 and reason is None else 'failed', 'exitCode': child.returncode, 'seconds': seconds, 'sampledTreePeakMiB': peak / 1024**2, 'childPeakMiB': child_peak, 'failureReason': reason})
    save()
    print(json.dumps(step), flush=True)
    return step['status'] == 'passed'

# Verify isolation without making any outbound connection.
probe = "import net from 'node:net'; const s=net.createServer(); s.once('error',e=>{console.log(e.code);process.exit(e.code==='EPERM'?0:2)});s.listen(0,'127.0.0.1',()=>{s.close();process.exit(3)});"
if not run('isolation-probe', [node, '--input-type=module', '-e', probe], 15):
    report['qualification'] = 'blocked-isolation'; save(); raise SystemExit(1)
loopback_probe = "import net from 'node:net'; const server=net.createServer(s=>s.end('ok')); await new Promise(r=>server.listen(0,'127.0.0.1',r)); const local=net.connect(server.address().port,'127.0.0.1'); await new Promise((r,j)=>{local.once('data',r);local.once('error',j)});local.destroy();await new Promise(r=>server.close(r));const denied=net.connect(80,'198.51.100.1');denied.once('error',e=>{console.log(e.code);process.exit(e.code==='EPERM'?0:2)});denied.once('connect',()=>process.exit(3));setTimeout(()=>process.exit(4),3000).unref();"
if not run('loopback-isolation-probe', [node, '--input-type=module', '-e', loopback_probe], 15, isolated=False):
    report['qualification'] = 'blocked-loopback-isolation'; save(); raise SystemExit(1)
if '--preflight' in sys.argv:
    report['qualification'] = 'isolation-verified-build-not-started'; save(); raise SystemExit(0)

start = time.monotonic()
commands = [('offline-indexation', [node, 'scripts/prepare-indexation.mjs', '--offline']), ('cold-build', [node, 'node_modules/astro/bin/astro.mjs', 'build', '--force']), ('database-build', [node, 'scripts/build-catalog-database.mjs']), ('warm-build', [node, 'node_modules/astro/bin/astro.mjs', 'build']), ('warm-database-build', [node, 'scripts/build-catalog-database.mjs'])]
commands += [('validate-' + name, [node, 'scripts/validate-snapshot.mjs', 'dist/data/' + name + '.json']) for name in ['catalog', 'runtime-catalog', 'offers', 'verdicts', 'evidence-history', 'transparency-barometer', 'document-quality-observatory', 'contradiction-radar', 'freshness']]
# Match the production workflow's server packaging, including the shared kernel.
package_server = "import {readdir,copyFile,chmod,mkdir} from 'node:fs/promises';for(const name of await readdir('server'))if(name.endsWith('.mjs')){const target='dist/_server/'+name;await copyFile('server/'+name,target);await chmod(target,0o644)};await mkdir('dist/_ops/lib',{recursive:true});for(const name of ['generate-private-weekly-report.mjs','lib/rank-demand.mjs','lib/report-product-funnel.mjs','lib/report-acquisition.mjs']){const target='dist/_ops/'+name;await copyFile('scripts/'+name,target);await chmod(target,0o644)}"
commands += [('package-server', [node, '--input-type=module', '-e', package_server])]
passed = True
for name, args in commands:
    remaining = budgets['publicationSeconds'] - (time.monotonic() - start)
    if name in ['database-build', 'warm-database-build']: remaining = min(remaining, budgets['databaseBuildSeconds'])
    if remaining <= 0 or not run(name, args, remaining): passed = False; break
    if name in ['database-build', 'warm-database-build']:
        size = (root / 'dist/_server/catalog.sqlite').stat().st_size
        report['steps'][-1]['databaseBytes'] = size
        if size > budgets['databaseBytes']:
            report['steps'][-1].update(status='failed', failureReason='database-size-budget-exceeded')
            passed = False
        save()
        if not passed: break
if passed:
    passed = run('files-before-archive', [sys.executable, str(output / 'harness.py'), '--file-manifest', str(root / 'dist'), str(output / 'files-before-archive.json')], budgets['publicationSeconds'] - (time.monotonic() - start))
if passed:
    manifest = json.loads((output / 'files-before-archive.json').read_text())
    report['artifact'] = {'files': len(manifest), 'bytes': sum(f['bytes'] for f in manifest.values()), 'htmlPages': sum(p.endswith('.html') for p in manifest)}
    report['beforeArchiveSeconds'] = time.monotonic() - start
    archive = output / 'qualification.tar'
    for name, args in [('archive-tar', ['/usr/bin/tar', '-C', str(root / 'dist'), '-cf', str(archive), '.']), ('archive-xz', ['/opt/homebrew/bin/xz', '-T2', '-6', '-k', str(archive)])]:
        remaining = budgets['publicationSeconds'] - (time.monotonic() - start)
        if remaining <= 0 or not run(name, args, remaining): passed = False; break
    if passed:
        compressed = archive.with_suffix('.tar.xz')
        digest = hashlib.sha256()
        with compressed.open('rb') as stream:
            while chunk := stream.read(1024 * 1024): digest.update(chunk)
        (output / 'qualification.tar.xz.sha256').write_text(digest.hexdigest() + '  qualification.tar.xz\n')
        report['archive'] = {'bytes': compressed.stat().st_size, 'sha256': digest.hexdigest(), 'budgetPassed': compressed.stat().st_size <= budgets['archiveBytes']}
        report.setdefault('publicationSeconds', time.monotonic() - start)
        restored = output / 'restored'
        restored.mkdir()
        restore_start = time.monotonic()
        if run('restore', ['/usr/bin/tar', '-xf', str(compressed), '-C', str(restored)], budgets['restoreSeconds']):
            if not run('files-after-restore', [sys.executable, str(output / 'harness.py'), '--file-manifest', str(restored), str(output / 'files-after-restore.json')], budgets['restoreSeconds'] - (time.monotonic() - restore_start)):
                report.update(qualification='not-qualified'); save(); raise SystemExit(1)
            restored_manifest = json.loads((output / 'files-after-restore.json').read_text())
            report['restoration'] = {'status': 'passed' if restored_manifest == manifest else 'failed', 'files': len(restored_manifest), 'hashParity': restored_manifest == manifest}
            if restored_manifest == manifest:
                passed = run('restored-service', [node, '--max-old-space-size=128', '--max-semi-space-size=4', 'scripts/audit-v3/qualification-100k.mjs', '--restored-service-child', str(restored)], min(180, budgets['restoreSeconds'] - (time.monotonic() - restore_start)), isolated=False)
                if passed:
                    service_text = (output / 'restored-service.log').read_text()
                    service = next(json.loads(line) for line in service_text.splitlines() if line.startswith('{'))
                    report['restoredService'] = service
                    passed = service['peakMiB'] <= budgets['servicePeakMiB'] and service['startupMs'] <= budgets['serviceStartupMs'] and service['rateLimitProbe'].get('429', 0) > 0 and all(p['p95Ms'] <= budgets['httpP95Ms'] and p['p99Ms'] <= budgets['httpP99Ms'] and not p['errors'] for p in service['phases'])
                    report['restoredService']['budgetsPassed'] = passed
        else: passed = False
        report['restoreSeconds'] = time.monotonic() - restore_start
        passed = passed and report['restoreSeconds'] <= budgets['restoreSeconds']
report.setdefault('publicationSeconds', time.monotonic() - start)
report['qualification'] = 'local-publication-passed-server-drill-pending' if passed and report['publicationSeconds'] <= budgets['publicationSeconds'] and report.get('archive', {}).get('budgetPassed') and report.get('restoration', {}).get('hashParity') else 'not-qualified'
executed = {step['name'] for step in report['steps']}
report['notExecuted'] += [name for name in [*[name for name, _ in commands], 'files-before-archive', 'archive-tar', 'archive-xz', 'restore', 'files-after-restore', 'restored-service'] if name not in executed]
save()
print(json.dumps({'report': str(report_path), 'qualification': report['qualification']}), flush=True)
raise SystemExit(0 if report['qualification'] == 'local-publication-passed-server-drill-pending' else 1)
