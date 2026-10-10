import { appendFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { sourceAvailabilityObservations } from '../src/data/source-availability.ts';
import { checkSource, sourceCheckSelection, annotateKnownSourceFailure, healthSummary, sourceHealthSummaryMarkdown } from './lib/source-link-health.mjs';
import { collectVersionedSourceInventory } from './lib/source-inventory.mjs';

const startedAt = new Date();
const inventory = await collectVersionedSourceInventory(process.cwd(), { now: startedAt });
const selection = sourceCheckSelection(inventory, process.argv.slice(2));
const sourceRevision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (!/^[a-f0-9]{40}$/.test(sourceRevision)) throw new Error('Invalid source revision');
const sourceWorkingTreeDirty = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }).trim().length > 0;
// One worker per hostname prevents concurrent probes hammering one manufacturer's site.
const groups = new Map();
for (const source of selection.sources) {
	const hostname = new URL(source.url).hostname;
	groups.set(hostname, [...(groups.get(hostname) ?? []), source]);
}
const queue = [...groups.values()];
const results = [];
let cursor = 0;
await Promise.all(Array.from({ length: Math.min(4, queue.length) }, async () => {
	while (cursor < queue.length) {
		const group = queue[cursor++];
		for (const source of group) {
			results.push(annotateKnownSourceFailure({ ...source, ...await checkSource(source.url) }, sourceAvailabilityObservations, startedAt));
			if (results.length % 50 === 0) console.log(`Sources contrôlées : ${results.length}/${selection.sources.length}`);
			await new Promise((resolve) => setTimeout(resolve, 150));
		}
	}
}));
results.sort((a, b) => a.url.localeCompare(b.url));
const summary = healthSummary(results);
const report = { schemaVersion: '1.2.0', checkedAt: new Date().toISOString(), sourceVersion: inventory.version, inventoryBasis: 'validated-versioned-sources', sourceRevision, sourceWorkingTreeDirty, scope: selection.scope, summary, results };
await writeFile('source-health-report.json', `${JSON.stringify(report, null, 2)}\n`);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, sourceHealthSummaryMarkdown(report));
console.log(JSON.stringify(summary));
if (summary.anomalies || summary.auditUnavailable) {
	console.error(`Anomalies de sources : ${summary.anomalies}. Audit indisponible : ${summary.auditUnavailable}. Voir source-health-report.json pour les URL et références concernées.`);
	process.exitCode = 1;
}
