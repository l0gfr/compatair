import { readFile, writeFile } from 'node:fs/promises';
import { readVerdictSnapshot } from '../server/verdict-snapshot.mjs';
import { rankDemand } from './lib/rank-demand.mjs';

const [aggregateFile, catalogFile = 'dist/data/catalog.json', verdictFile = 'dist/data/verdicts.json', reportFile = 'demand-priorities.json'] = process.argv.slice(2);
if (!aggregateFile) throw new Error('Usage : node scripts/rank-demand.mjs demand-aggregates.json [catalog.json] [verdicts.json] [rapport.json]');
const [aggregates, catalog, verdicts] = await Promise.all([
	...[aggregateFile, catalogFile].map(async (file) => JSON.parse(await readFile(file, 'utf8'))),
	readVerdictSnapshot(verdictFile, { compactIds: true }),
]);
const report = { generatedAt: new Date().toISOString(), ...rankDemand({ aggregates, catalog, verdicts }) };
await writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Rapport de priorisation écrit dans ${reportFile}`);
