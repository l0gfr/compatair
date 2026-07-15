import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { afterEach, describe, expect, it } from 'vitest';

const roots: string[] = [];
afterEach(() => { for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true }); });

describe('private weekly operating report', () => {
	it('fails closed on malformed inputs and preserves insufficient_data for empty live demand', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-weekly-')); roots.push(root);
		const files = {
			demand: join(root, 'demand.json'), funnel: join(root, 'funnel.json'), acquisition: join(root, 'acquisition.json'),
			catalog: join(root, 'catalog.json'), verdicts: join(root, 'verdicts.json'), reports: join(root, 'reports'),
		};
		writeFileSync(files.demand, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalContributions: 0, dimensions: { tools: {}, categories: {}, modes: {}, flowBuckets: {}, pressureBuckets: {}, sessionBuckets: {}, compressorSelections: {}, calculationVersions: {}, needProfiles: {} } }));
		writeFileSync(files.funnel, JSON.stringify({ schemaVersion: '2.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 }, counterfactual: { displayed: 0, selected: 0, recalculated: 0, byFamily: Object.fromEntries(['pressure', 'flexible', 'simultaneity', 'leak', 'cadence', 'machine'].map((family) => [family, { displayed: 0, selected: 0, recalculated: 0 }])) } }));
		writeFileSync(files.acquisition, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, buckets: [] }));
		writeFileSync(files.catalog, JSON.stringify({ catalogVersion: 'catalog-test', compressors: [], tools: [] }));
		writeFileSync(files.verdicts, JSON.stringify({ verdictVersion: 'verdict-test', pairs: [] }));
		const result = spawnSync(process.execPath, [new URL('./generate-private-weekly-report.mjs', import.meta.url).pathname], { encoding: 'utf8', env: {
			...process.env, COMPAT_AIR_DEMAND_AGGREGATES: files.demand, COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES: files.funnel,
			COMPAT_AIR_ACQUISITION_AGGREGATES: files.acquisition, COMPAT_AIR_CATALOG: files.catalog, COMPAT_AIR_VERDICTS: files.verdicts, COMPAT_AIR_PRIVATE_REPORTS: files.reports,
		} });
		expect(result.status, result.stderr).toBe(0);
		const report = JSON.parse(readFileSync(join(files.reports, 'latest.json'), 'utf8'));
		expect(report).toMatchObject({ visibility: 'private', privacy: { rawEventsStored: false, minimumPublishedCohort: 5 }, demand: { coverage: { status: 'insufficient_data' } }, actionQueue: [] });
		expect(report.limitations.join(' ')).toContain('GSC');
	});
});
