import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { buildAcquisitionReport } from './lib/report-acquisition.mjs';
import { rankDemand } from './lib/rank-demand.mjs';
import { reportProductFunnel } from './lib/report-product-funnel.mjs';

const families = ['pressure', 'flexible', 'simultaneity', 'leak', 'cadence', 'machine'];
const emptyDemand = { schemaVersion: '1.0.0', updatedAt: null, totalContributions: 0, dimensions: { tools: {}, categories: {}, modes: {}, flowBuckets: {}, pressureBuckets: {}, sessionBuckets: {}, compressorSelections: {}, calculationVersions: {}, needProfiles: {} } };
const emptyFunnel = { schemaVersion: '2.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 }, counterfactual: { displayed: 0, selected: 0, recalculated: 0, byFamily: Object.fromEntries(families.map((family) => [family, { displayed: 0, selected: 0, recalculated: 0 }])) } };
const emptyAcquisition = { schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, buckets: [] };

async function readJson(path, fallback) {
	try { return JSON.parse(await readFile(path, 'utf8')); }
	catch (error) { if (error && typeof error === 'object' && 'code' in error && error.code === 'ENOENT' && fallback !== undefined) return structuredClone(fallback); throw error; }
}

const demandPath = resolve(process.env.COMPAT_AIR_DEMAND_AGGREGATES ?? '/var/lib/compatair/demand-aggregates.json');
const funnelPath = resolve(process.env.COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES ?? '/var/lib/compatair/product-funnel-aggregates.json');
const acquisitionPath = resolve(process.env.COMPAT_AIR_ACQUISITION_AGGREGATES ?? '/var/lib/compatair/acquisition-aggregates.json');
const catalogPath = resolve(process.env.COMPAT_AIR_CATALOG ?? 'data/catalog.json');
const verdictPath = resolve(process.env.COMPAT_AIR_VERDICTS ?? 'data/verdicts.json');
const outputDirectory = resolve(process.env.COMPAT_AIR_PRIVATE_REPORTS ?? '/var/lib/compatair/reports');
const now = new Date();

const [demandAggregate, funnelAggregate, acquisitionAggregate, catalog, verdicts] = await Promise.all([
	readJson(demandPath, emptyDemand), readJson(funnelPath, emptyFunnel), readJson(acquisitionPath, emptyAcquisition), readJson(catalogPath), readJson(verdictPath),
]);
const demand = rankDemand({ aggregates: demandAggregate, catalog, verdicts, deficitLimit: 20 });
const report = {
	schemaVersion: '1.0.0', generatedAt: now.toISOString(), visibility: 'private',
	sourceVersions: { catalog: catalog.catalogVersion, verdicts: verdicts.verdictVersion, demand: demandAggregate.updatedAt, funnel: funnelAggregate.updatedAt, acquisition: acquisitionAggregate.updatedAt },
	privacy: { rawEventsStored: false, personalDataExpected: false, minimumPublishedCohort: 5, retentionBoundary: 'Only closed aggregate counters and weekly reports are retained.' },
	demand, productFunnel: reportProductFunnel(funnelAggregate), acquisition: buildAcquisitionReport(acquisitionAggregate),
	actionQueue: demand.priorities.deficits.slice(0, 20),
	limitations: [
		'Demand and acquisition values remain insufficient_data when no live aggregate contribution exists.',
		'GSC impressions and clicks are absent until an aggregate-only export is explicitly imported.',
		'Compatibility decision changes are never inferred from traffic counters.',
	],
};
await mkdir(outputDirectory, { recursive: true, mode: 0o700 });
const archivePath = join(outputDirectory, `weekly-insights-${now.toISOString().slice(0, 10)}.json`);
const latestPath = join(outputDirectory, 'latest.json');
const temporaryPath = `${latestPath}.tmp`;
const content = `${JSON.stringify(report, null, 2)}\n`;
await writeFile(archivePath, content, { mode: 0o600 });
await writeFile(temporaryPath, content, { mode: 0o600 });
await rename(temporaryPath, latestPath);
console.log(`Private weekly report written to ${latestPath}`);
