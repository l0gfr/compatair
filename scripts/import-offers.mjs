import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { importManoManoFeed } from './lib/import-manomano.mjs';

const values = process.argv.slice(2);
const args = new Map();
for (let index = 0; index < values.length; index++) {
	if (!values[index].startsWith('--')) continue;
	args.set(values[index].slice(2), values[index + 1]?.startsWith('--') ? true : (values[++index] ?? true));
}

const input = args.get('input');
const merchantId = args.get('merchant') ?? 'manomano-fr';
const catalogFile = args.get('catalog') ?? 'dist/data/catalog.json';
const output = args.get('output') ?? 'src/data/offers.snapshot.json';
const reportFile = args.get('report') ?? 'manomano-import-report.json';
if (!input || merchantId !== 'manomano-fr') {
	throw new Error('Usage : pnpm data:import-offers -- --input flux.csv[.gz] [--catalog dist/data/catalog.json] [--output src/data/offers.snapshot.json]');
}

const [bytes, catalogText] = await Promise.all([readFile(resolve(String(input))), readFile(resolve(String(catalogFile)), 'utf8')]);
const result = importManoManoFeed({
	bytes,
	fileName: String(input),
	catalog: JSON.parse(catalogText),
	collectedAt: args.get('collected-at') ? String(args.get('collected-at')) : new Date().toISOString(),
});
await writeFile(resolve(String(reportFile)), `${JSON.stringify(result.report, null, 2)}\n`, { mode: 0o600 });
if (result.offers.length === 0) throw new Error(`Aucune offre ManoMano appariée. Rapport : ${reportFile}`);
await writeFile(resolve(String(output)), `${JSON.stringify({ generatedAt: result.report.generatedAt, sourceChecksum: result.report.sourceChecksum, offers: result.offers }, null, 2)}\n`, { mode: 0o600 });
console.log(`${result.offers.length} offres importées, ${result.report.unmatched} non appariées, ${result.report.rejected} rejetées. Rapport : ${reportFile}`);
