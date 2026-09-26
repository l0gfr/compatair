import { appendFileSync, copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
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

	it('runs from the immutable production release layout', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-weekly-release-')); roots.push(root);
		const opsDirectory = join(root, '_ops');
		const libraryDirectory = join(opsDirectory, 'lib');
		const serverDirectory = join(root, '_server');
		mkdirSync(libraryDirectory, { recursive: true });
		mkdirSync(serverDirectory, { recursive: true });
		copyFileSync(new URL('./generate-private-weekly-report.mjs', import.meta.url), join(opsDirectory, 'generate-private-weekly-report.mjs'));
		for (const name of ['rank-demand.mjs', 'report-product-funnel.mjs', 'report-acquisition.mjs']) {
			copyFileSync(new URL(`./lib/${name}`, import.meta.url), join(libraryDirectory, name));
		}
		copyFileSync(new URL('../server/product-funnel-aggregates.mjs', import.meta.url), join(serverDirectory, 'product-funnel-aggregates.mjs'));
		copyFileSync(new URL('../server/verdict-snapshot.mjs', import.meta.url), join(serverDirectory, 'verdict-snapshot.mjs'));

		const files = {
			demand: join(root, 'demand.json'), funnel: join(root, 'funnel.json'), acquisition: join(root, 'acquisition.json'),
			catalog: join(root, 'catalog.json'), verdicts: join(root, 'verdicts.json'), reports: join(root, 'reports'),
		};
		writeFileSync(files.demand, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalContributions: 0, dimensions: { tools: {}, categories: {}, modes: {}, flowBuckets: {}, pressureBuckets: {}, sessionBuckets: {}, compressorSelections: {}, calculationVersions: {}, needProfiles: {} } }));
		writeFileSync(files.funnel, JSON.stringify({ schemaVersion: '2.0.0', updatedAt: null, totalEvents: 0, calculator: { started: 0, completed: 0 }, counterfactual: { displayed: 0, selected: 0, recalculated: 0, byFamily: Object.fromEntries(['pressure', 'flexible', 'simultaneity', 'leak', 'cadence', 'machine'].map((family) => [family, { displayed: 0, selected: 0, recalculated: 0 }])) } }));
		writeFileSync(files.acquisition, JSON.stringify({ schemaVersion: '1.0.0', updatedAt: null, totalEvents: 0, buckets: [] }));
		writeFileSync(files.catalog, JSON.stringify({ catalogVersion: 'catalog-test', compressors: [], tools: [] }));
		writeFileSync(files.verdicts, JSON.stringify({ verdictVersion: 'verdict-test', pairs: [] }));
		const result = spawnSync(process.execPath, [join(opsDirectory, 'generate-private-weekly-report.mjs')], { encoding: 'utf8', env: {
			...process.env, COMPAT_AIR_DEMAND_AGGREGATES: files.demand, COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES: files.funnel,
			COMPAT_AIR_ACQUISITION_AGGREGATES: files.acquisition, COMPAT_AIR_CATALOG: files.catalog, COMPAT_AIR_VERDICTS: files.verdicts, COMPAT_AIR_PRIVATE_REPORTS: files.reports,
		} });
		expect(result.status, result.stderr).toBe(0);
		expect(JSON.parse(readFileSync(join(files.reports, 'latest.json'), 'utf8'))).toMatchObject({
			visibility: 'private',
			productFunnel: { schemaVersion: '2.0.0', totalEvents: 0 },
		});
	});

	it('streams a snapshot larger than its heap and preserves priorities and the last report on truncated input', () => {
		const root = mkdtempSync(join(tmpdir(), 'compatair-weekly-stream-')); roots.push(root);
		const catalogPath = join(root, 'catalog.json');
		const verdictPath = join(root, 'verdicts.json');
		const demandPath = join(root, 'demand.json');
		const reports = join(root, 'reports');
		writeFileSync(catalogPath, JSON.stringify({ catalogVersion: 'catalog-test', compressors: [], tools: [{ id: 'tool', label: 'Outil' }] }));
		writeFileSync(demandPath, JSON.stringify({ schemaVersion: '1.0.0', totalContributions: 10, dimensions: { tools: { tool: 10 } } }));
		writeFileSync(verdictPath, '{"verdictVersion":"verdict-test","pairs":[');
		const warnings = ['Documented boundary '.repeat(700)];
		for (let index = 0; index < 5_000; index++) {
			appendFileSync(verdictPath, `${index ? ',' : ''}${JSON.stringify({ id: `compressor-${index}--tool`, compressorId: `compressor-${index}`, toolId: 'tool', verdict: index % 2 ? 'continuous' : 'insufficient_data', requiredFadLpm: 250, warnings })}`);
		}
		appendFileSync(verdictPath, ']}');
		const run = () => spawnSync(process.execPath, ['--max-old-space-size=48', new URL('./generate-private-weekly-report.mjs', import.meta.url).pathname], { encoding: 'utf8', env: {
			...process.env, COMPAT_AIR_CATALOG: catalogPath, COMPAT_AIR_VERDICTS: verdictPath, COMPAT_AIR_DEMAND_AGGREGATES: demandPath,
			COMPAT_AIR_PRODUCT_FUNNEL_AGGREGATES: join(root, 'missing-funnel.json'), COMPAT_AIR_ACQUISITION_AGGREGATES: join(root, 'missing-acquisition.json'), COMPAT_AIR_PRIVATE_REPORTS: reports,
		} });
		const result = run();
		expect(result.status, result.stderr).toBe(0);
		const previousReport = readFileSync(join(reports, 'latest.json'), 'utf8');
		const report = JSON.parse(previousReport);
		expect(report.demand.coverage).toMatchObject({ status: 'measured', weightedCoveragePercent: 50 });
		expect(report.demand.priorities.candidateDeficitCount).toBe(2_500);
		expect(report.actionQueue).toHaveLength(20);
		writeFileSync(verdictPath, '{"verdictVersion":"broken","pairs":[');
		const failed = run();
		expect(failed.status).not.toBe(0);
		expect(failed.stderr).toContain('verdict_snapshot_truncated');
		expect(readFileSync(join(reports, 'latest.json'), 'utf8')).toBe(previousReport);
	}, 20_000);
});
