import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { collectIndexationCandidates } from './lib/indexation-candidates.mjs';
import { analyzeCandidates, consolidateEquivalentAnswers } from './lib/indexation-planner.mjs';
const root = process.cwd();
const candidates = await collectIndexationCandidates(root);
const policy = JSON.parse(await readFile('config/indexation-policy.json', 'utf8'));
const baseline = JSON.parse(await readFile('config/indexation-baseline.json', 'utf8'));
const admitted = new Set(baseline.paths);
const analyzed = analyzeCandidates(candidates, admitted, policy);
const consolidation = consolidateEquivalentAnswers(analyzed, admitted);
const rows = analyzed.map(({ path, family, value, reason, similar }) => ({ path, family, value, status: consolidation.canonicalAliases[path] ? 'consolidated' : reason ? 'needs-review' : 'mechanical-checks-passed', reason: reason ?? null, similar: similar ?? null }));
await mkdir('.astro/seo', { recursive: true });
await writeFile('.astro/seo/page-value-audit.json', JSON.stringify({ schemaVersion: 1, generatedAt: new Date().toISOString(), scope: 'All catalog, guide and use-detail candidates; mechanical checks are not a human editorial certification.', rows }, null, 2) + '\n');
const substantiveFailures = rows.filter(row => row.value?.reasons?.length || (admitted.has(row.path) && row.reason && !consolidation.canonicalAliases[row.path]));
console.log(JSON.stringify({ pages: rows.length, byStatus: Object.fromEntries(['mechanical-checks-passed', 'consolidated', 'needs-review'].map(status => [status, rows.filter(row => row.status === status).length])), structuralFailures: substantiveFailures.length, report: '.astro/seo/page-value-audit.json' }));
if (substantiveFailures.length) { console.error(substantiveFailures.slice(0, 30).map(row => `${row.path}: ${(row.value.reasons.length ? row.value.reasons : [row.reason]).join(', ')}`).join('\n')); process.exitCode = 1; }
