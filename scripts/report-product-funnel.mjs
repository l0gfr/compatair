import { readFile, writeFile } from 'node:fs/promises';
import { reportProductFunnel } from './lib/report-product-funnel.mjs';

const [aggregateFile, reportFile = 'product-funnel-report.json'] = process.argv.slice(2);
if (!aggregateFile) throw new Error('Usage : node scripts/report-product-funnel.mjs product-funnel-aggregates.json [rapport.json]');
const aggregates = JSON.parse(await readFile(aggregateFile, 'utf8'));
const report = { generatedAt: new Date().toISOString(), ...reportProductFunnel(aggregates) };
await writeFile(reportFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Rapport de funnel écrit dans ${reportFile}`);
