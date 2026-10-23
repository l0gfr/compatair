import { readFile, stat, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildSeoCohortReport } from './lib/seo-cohorts.mjs';

const [input, asOf, gscObservedThrough, indexationUpdatedOn, output, ...extra] = process.argv.slice(2);
if (!input || !asOf || !gscObservedThrough || !indexationUpdatedOn || !output || extra.length) {
	throw new Error('Usage: node scripts/report-seo-cohorts.mjs MANIFEST.json AS_OF_YYYY-MM-DD GSC_OBSERVED_THROUGH_YYYY-MM-DD INDEXATION_UPDATED_ON_YYYY-MM-DD OUTPUT.json');
}
if (resolve(input) === resolve(output)) throw new Error('The input manifest must not be overwritten.');
if ((await stat(resolve(input))).size > 32 * 1024 * 1024) throw new Error('Input manifest exceeds 32 MiB.');
const report = buildSeoCohortReport(JSON.parse(await readFile(resolve(input), 'utf8')), { asOf, gscObservedThrough, indexationUpdatedOn });
await writeFile(resolve(output), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600, flag: 'wx' });
console.log(`Cohort review report written: ${report.summary.batches} batches, ${report.summary.admissions} admissions. No GSC cohort metrics inferred.`);
