import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { buildAffiliateReadinessReport } from './lib/report-affiliate-readiness.mjs';

const args = process.argv.slice(2);
function option(name, required = false) {
	const index = args.indexOf(`--${name}`);
	const value = index >= 0 ? args[index + 1] : undefined;
	if (required && (!value || value.startsWith('--'))) throw new Error(`Option requise : --${name}`);
	return value;
}
async function optionalJson(path) { return path ? JSON.parse(await readFile(resolve(path), 'utf8')) : undefined; }

const catalogPath = option('catalog', true);
const offersPath = option('offers', true);
const gscPagesPath = option('gsc-pages', true);
const outputPath = option('output', true);
const limitRaw = option('limit');
const report = buildAffiliateReadinessReport({
	catalog: JSON.parse(await readFile(resolve(catalogPath), 'utf8')),
	offers: JSON.parse(await readFile(resolve(offersPath), 'utf8')),
	gscPagesCsv: await readFile(resolve(gscPagesPath), 'utf8'),
	gscDatesCsv: await readFile(resolve(option('gsc-dates', true)), 'utf8'),
	gscPeriodStart: option('gsc-start', true),
	gscPeriodEnd: option('gsc-end', true),
	acquisitionAggregate: await optionalJson(option('acquisition')),
	funnelAggregate: await optionalJson(option('funnel')),
	indexationSummary: await optionalJson(option('indexation')),
	generatedAt: new Date().toISOString(),
	limit: limitRaw ? Number(limitRaw) : 30,
});
await writeFile(resolve(outputPath), `${JSON.stringify(report, null, 2)}\n`, { mode: 0o600 });
console.log(`Rapport privé de préparation affiliation écrit dans ${resolve(outputPath)} (${report.status}, ${report.candidates.length} références).`);
