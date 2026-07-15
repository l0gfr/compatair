import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const directory = process.argv[2];
if (directory !== '/var/lib/compatair-staging/failure-drills') throw new Error('Unexpected drill evidence directory');
const names = (await readdir(directory)).filter((name) => /^\d{8}T\d{6}Z\.json$/.test(name)).sort();
if (!names.length) throw new Error('No staging failure drill report is available');
const reportPath = join(directory, names.at(-1));
const metadata = await stat(reportPath);
if (!metadata.isFile() || metadata.uid !== 0 || metadata.gid !== 0 || (metadata.mode & 0o777) !== 0o600) throw new Error('The latest drill report has unsafe ownership or mode');
const report = JSON.parse(await readFile(reportPath, 'utf8'));
const allowed = ['schemaVersion', 'executedAt', 'baselineRelease', 'invalidMcpRollback', 'apacheRejectedConfigRestore', 'interruptedSwitchRollback', 'publicSmokeRollback', 'finalHealth'];
if (!report || typeof report !== 'object' || Array.isArray(report) || Object.keys(report).some((key) => !allowed.includes(key))) throw new Error('The drill report contract is invalid');
if (report.schemaVersion !== '1.1.0' || !/^[0-9a-f]{40}$/.test(report.baselineRelease ?? '')) throw new Error('The drill report version or baseline is invalid');
for (const field of ['invalidMcpRollback', 'apacheRejectedConfigRestore', 'interruptedSwitchRollback', 'publicSmokeRollback', 'finalHealth']) if (report[field] !== 'passed') throw new Error(`The drill control ${field} did not pass`);
const executedAt = Date.parse(report.executedAt);
const age = Date.now() - executedAt;
if (!Number.isFinite(executedAt) || age < -300_000 || age > 90 * 86_400_000) throw new Error('The latest successful drill is older than 90 days');
console.log(`Recent staging failure drill verified: ${reportPath}`);
