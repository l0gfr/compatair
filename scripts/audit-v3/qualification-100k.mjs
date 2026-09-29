import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, stat, symlink, writeFile } from 'node:fs/promises';
import { tmpdir, cpus, totalmem } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { writeCatalogDatabase, openCatalogRepository, repositoryCatalog, calculationSnapshotMetadata } from '../../server/catalog-repository.mjs';
import { createCompatAirServer } from '../../server/mcp-server.mjs';
import { generateCatalogIndexes } from '../lib/catalog-tooling.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const script = fileURLToPath(import.meta.url);
export const quantile = (values, probability) => values.length ? [...values].sort((a, b) => a - b)[Math.ceil(values.length * probability) - 1] : null;
export const profileKey = (product, kind) => [kind, product.confidence, product.demandModel ?? 'compressor', product.airflowBasis ?? 'unspecified', product.fadCurve ? (product.fadCurve.length === 0 ? 'no-fad' : product.fadCurve.length === 1 ? 'single-fad' : 'multi-fad') : 'na', product.dutyCycle ?? 'missing-cycle', product.maxPressureBar ?? product.workingPressureBar?.typical].join('|');

export function fixturePlan(catalog, target) {
	const original = catalog.compressors.length + catalog.tools.length;
	assert.ok(Number.isInteger(target) && target >= original && target <= 100000, 'Target must retain all source profiles and stay <=100000');
	const compressors = Math.round(target * catalog.compressors.length / original);
	return { original, target, compressors, tools: target - compressors };
}

export function* fixtureProducts(catalog, kind, count) {
	const originals = [...catalog[kind]].sort((a, b) => a.id.localeCompare(b.id));
	assert.ok(originals.length && count >= originals.length);
	for (let i = 0; i < count; i++) {
		const original = originals[i % originals.length];
		if (i < originals.length) { yield structuredClone(original); continue; }
		const id = `zz-qualification-${kind}-${String(i).padStart(6, '0')}`;
		const product = { ...structuredClone(original), id, slug: id, model: `Fixture ${i} ${original.model}`, mpn: id, distributorSkus: [], identifierAliases: [] };
		if (product.label) product.label = `Fixture ${i} ${original.label}`;
		delete product.ean; delete product.gtin;
		// Technical values, missingness and source payload sizes remain unchanged.
		// These copies are laboratory records, never new documented references.
		yield product;
	}
}

export function distribution(catalog, plan) {
	const strata = {};
	for (const kind of ['compressors', 'tools']) {
		for (const product of catalog[kind]) { const key = profileKey(product, kind); strata[key] ??= { source: 0, fixture: 0 }; strata[key].source++; }
		for (const product of fixtureProducts(catalog, kind, plan[kind])) strata[profileKey(product, kind)].fixture++;
	}
	return strata;
}

async function measureService(database, config, implementation = { openCatalogRepository, repositoryCatalog, calculationSnapshotMetadata, createCompatAirServer }) {
	const tick = performance.now(), repository = implementation.openCatalogRepository(database);
	const catalog = implementation.repositoryCatalog(repository);
	const server = implementation.createCompatAirServer({ catalog, verdictSnapshot: implementation.calculationSnapshotMetadata(repository), allowedOrigins: new Set() });
	await new Promise((accept, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', accept); });
	const startupMs = performance.now() - tick;
	const base = `http://127.0.0.1:${server.address().port}`;
	// Select across the whole ID range, including originals and replicated profiles.
	const pick = (kind, wanted) => {
		const step = Math.max(1, Math.floor(repository.count(kind) / wanted)), selected = [];
		let index = 0;
		for (const product of repository.iterate(kind)) if (index++ % step === 0 && selected.length < wanted) selected.push(product.id);
		return selected;
	};
	const compressors = pick('compressor', config.http.uniquePairs), tools = pick('tool', config.http.uniquePairs);
	const phases = [];
	try {
		for (const phase of config.http.passes) for (const endpoint of ['search', 'compatibility']) {
			let cursor = 0;
			const latencies = [], statuses = {}, errors = [];
			await Promise.all(Array.from({ length: config.http.concurrency }, async () => {
				while (cursor < config.http.uniquePairs) {
					const i = cursor++;
					const url = endpoint === 'search' ? `${base}/api/v1/search?q=${encodeURIComponent(tools[i])}&limit=5` : `${base}/api/v1/compatibility?compressorId=${compressors[i]}&toolId=${tools[i]}`;
					const start = performance.now();
					try {
						const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
						const body = await response.json();
						statuses[response.status] = (statuses[response.status] ?? 0) + 1;
						if (response.status !== 200 || body.error) errors.push({ index: i, status: response.status, error: body.error ?? 'unexpected_status' });
					} catch (error) { errors.push({ index: i, error: error.name }); }
					latencies.push(performance.now() - start);
				}
			}));
			phases.push({ phase, endpoint, samples: latencies.length, p95Ms: quantile(latencies, .95), p99Ms: quantile(latencies, .99), statuses, errors });
		}
		const rateLimitProbe = {};
		for (let i = 0; i < config.http.rateLimitProbeAdditionalRequests; i++) {
			const response = await fetch(`${base}/api/v1/compatibility?compressorId=${compressors[0]}&toolId=${tools[0]}`, { signal: AbortSignal.timeout(10000) });
			await response.arrayBuffer();
			rateLimitProbe[response.status] = (rateLimitProbe[response.status] ?? 0) + 1;
		}
		return { startupMs, peakMiB: process.resourceUsage().maxRSS / 1024, phases, rateLimitProbe, cache: repository.cacheStats(), scope: 'Separate process; loopback client and service RSS combined. No remote requests or telemetry files. Disk cache not controlled.' };
	} finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); repository.close(); }
}

async function prepareSource(source, catalog, plan) {
	const root = await mkdtemp(join(tmpdir(), 'compatair-qualification-source-'));
	await writeFile(join(root, 'BENCHMARK_ONLY'), 'Synthetic qualification. Never deploy. No Git metadata or deployment workflows.\n');
	for (const name of ['src', 'server', 'scripts', 'config', 'public', 'benchmarks', 'contracts', 'docs', 'astro.config.mjs', 'package.json', 'pnpm-lock.yaml', 'tsconfig.json']) await cp(join(source, name), join(root, name), { recursive: true });
	await mkdir(join(root, 'node_modules'));
	for (const name of await readdir(join(source, 'node_modules'))) if (!['.astro', '.vite'].includes(name)) await symlink(join(source, 'node_modules', name), join(root, 'node_modules', name));
	const historyPath = join(root, 'src/data/evidence-history.snapshot.json');
	const { historyVersion: _oldVersion, ...history } = JSON.parse(await readFile(historyPath, 'utf8'));
	const titlesPath = join(root, 'src/data/product-seo-titles.ts');
	let titles = await readFile(titlesPath, 'utf8'), productTitles = '', useTitles = '';
	for (const kind of ['compressors', 'tools']) for (const product of fixtureProducts(catalog, kind, plan[kind])) {
		if (!product.id.startsWith('zz-qualification-')) continue;
		for (const evidence of product.evidence) history.events.push({ id: `baseline:${product.id}:${evidence.id}`, evidenceId: evidence.id, productId: product.id, productType: kind === 'compressors' ? 'compressor' : 'tool', occurredAt: history.startedAt, kind: 'baseline', summary: 'Synthetic qualification fixture. Never publish.', fingerprint: hash(JSON.stringify({ productId: product.id, evidence })), snapshot: evidence });
		await writeFile(join(root, 'src/data/products', kind, `${product.id}.ts`), `export default ${JSON.stringify(product)};\n`);
		productTitles += `\n ${JSON.stringify(product.id)}: ${JSON.stringify(`Fixture ${product.id} : fiche de qualification`)},`;
		if (kind === 'tools') useTitles += `\n ${JSON.stringify(product.id)}: ${JSON.stringify(`Fixture ${product.id} : besoin de qualification`)},`;
	}
	titles = titles.replace('export const productSeoTitles: Record<string, string> = {', `export const productSeoTitles: Record<string, string> = {${productTitles}`).replace('export const toolUseSeoTitles: Record<string, string> = {', `export const toolUseSeoTitles: Record<string, string> = {${useTitles}`);
	await writeFile(titlesPath, titles);
	await writeFile(historyPath, JSON.stringify({ ...history, historyVersion: hash(JSON.stringify(history)) }));
	await generateCatalogIndexes(root);
	await writeFile(join(root, 'qualification-corpus.json'), JSON.stringify({ ...plan, sourceCatalog: catalog.catalogVersion, synthetic: true }));
	return root;
}

async function main() {
	const [mode, input, output, targetText] = process.argv.slice(2);
	const configBytes = await readFile(new URL('../../config/qualification-100k.json', import.meta.url)), config = JSON.parse(configBytes);
	if (mode === '--service-child') { console.log(JSON.stringify(await measureService(input, config))); return; }
	if (mode === '--restored-service-child') {
		const root = resolve(input), serverPath = join(root, '_server');
		const implementation = { ...await import(pathToFileURL(join(serverPath, 'catalog-repository.mjs'))), ...await import(pathToFileURL(join(serverPath, 'mcp-server.mjs'))) };
		const result = await measureService(join(serverPath, 'catalog.sqlite'), config, implementation);
		result.restoredImplementation = Object.fromEntries(await Promise.all(['catalog-repository.mjs', 'mcp-server.mjs', 'air-sizing.mjs'].map(async name => [name, hash(await readFile(join(serverPath, name)))])));
		console.log(JSON.stringify(result)); return;
	}
	assert.ok(['--plan', '--storage-service', '--prepare-source'].includes(mode), 'Modes: --plan | --storage-service | --prepare-source catalog.json report.json [target]');
	assert.ok(input && output, 'Catalog and report paths are required');
	const bytes = await readFile(input), catalog = JSON.parse(bytes);
	const { catalogVersion, ...content } = catalog;
	assert.equal(hash(JSON.stringify(content)), catalogVersion, 'Catalog hash mismatch');
	const plan = fixturePlan(catalog, targetText ? Number(targetText) : config.targetReferences);
	const report = { schemaVersion: 1, synthetic: true, startedAt: new Date().toISOString(), sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), harnessSha256: hash(await readFile(script)), sourceCatalogVersion: catalogVersion, sourceFileSha256: hash(bytes), configSha256: hash(configBytes), budgetsDeclaredBeforeRun: config.budgets, corpus: plan, distribution: distribution(catalog, plan), environment: { node: process.version, platform: process.platform, arch: process.arch, cpus: cpus().length, memoryBytes: totalmem() }, publication: Object.fromEntries(config.publicationRequiredStages.map(stage => [stage, { status: 'not-executed' }])), storage: { status: 'not-executed' }, service: { status: 'not-executed' }, qualification: 'incomplete' };
	// Write the plan and budgets before any timed experiment; keep it even on failure.
	await writeFile(output, JSON.stringify(report, null, 2) + '\n');
	if (mode === '--prepare-source') {
		const root = await prepareSource(process.cwd(), catalog, plan);
		report.publication['isolated-source-preparation'] = { status: 'executed', root };
	}
	if (mode === '--storage-service') {
		const directory = await mkdtemp(join(tmpdir(), 'compatair-qualification-storage-'));
		try {
			const database = join(directory, 'synthetic.sqlite');
			const start = performance.now();
			writeCatalogDatabase(database, { catalogVersion: hash(`${catalogVersion}:${plan.target}:qualification-v1`), verifiedAt: catalog.verifiedAt, compressors: fixtureProducts(catalog, 'compressors', plan.compressors), tools: fixtureProducts(catalog, 'tools', plan.tools) });
			report.storage = { status: 'executed', seconds: (performance.now() - start) / 1000, bytes: (await stat(database)).size };
			const child = spawnSync(process.execPath, ['--max-old-space-size=128', '--max-semi-space-size=4', script, '--service-child', database], { encoding: 'utf8', timeout: 180000, maxBuffer: 1048576 });
			if (child.status !== 0) throw new Error(`Service measurement failed: ${child.stderr.slice(-2000)}`);
			const service = JSON.parse(child.stdout);
			report.service = { status: 'executed', ...service };
			report.checks = {
				databaseTime: report.storage.seconds <= config.budgets.databaseBuildSeconds,
				databaseSize: report.storage.bytes <= config.budgets.databaseBytes,
				serviceStartup: service.startupMs <= config.budgets.serviceStartupMs,
				serviceMemory: service.peakMiB <= config.budgets.servicePeakMiB,
				httpLatency: service.phases.every(phase => phase.p95Ms <= config.budgets.httpP95Ms && phase.p99Ms <= config.budgets.httpP99Ms),
				httpErrors: service.phases.reduce((sum, phase) => sum + phase.errors.length, 0) <= config.budgets.httpUnexpectedErrors,
				rateLimitPreserved: (service.rateLimitProbe['429'] ?? 0) > 0,
			};
		} catch (error) { report.failure = error.message; process.exitCode = 1; }
		finally { await rm(directory, { recursive: true, force: true }); }
	}
	await writeFile(output, JSON.stringify(report, null, 2) + '\n');
	if (report.checks && Object.values(report.checks).some(passed => !passed)) process.exitCode = 1;
	console.log(JSON.stringify({ corpus: plan, checks: report.checks, qualification: report.qualification, output }));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
