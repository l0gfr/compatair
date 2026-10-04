import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import { getHeapStatistics } from 'node:v8';
import { parse } from 'yaml';
import { editorialText, productCandidate } from './indexation-planner.mjs';
import { editorialPriority } from './editorial-priority.mjs';
import { assessGuideValue, assessProductValue } from './page-value.mjs';
import { applyEditorialHolds } from './indexation-editorial-holds.mjs';

// A worker exits after each batch, releasing Node's non-evictable module cache.
// The source order and all candidate fields remain identical to the direct loader.
export const PRODUCT_BATCH_SIZE = 1024;
const WORKER_HEAP_LIMIT_BYTES = 288 * 1024 * 1024;
export function productCandidates(product, kind) {
 const candidates = [];
	const value = assessProductValue(product, kind === 'compressors' ? 'compressor' : 'tool');
	const candidate = { ...productCandidate(product, kind), value };
	candidate.blockedReason ??= value.reasons[0];
	candidates.push(candidate);
	if (kind === 'tools') candidates.push({
		...candidate, path: `/quel-compresseur-pour/${product.slug}/`, family: 'usages',
		value: { ...value, kind: 'usage', question: `Quel compresseur pour ${product.brand} ${product.model} ?`, contribution: { demandModel: product.demandModel, workingPressureBar: product.workingPressureBar, publishedFlow: product.airflowLpm, publishedAirPerAction: product.airPerActionLiters, reserve: '25% editorial sizing assumption; not a manufacturer rating', scenario: 'one exact tool, published demand, all documented compressors' } },
		blockedReason: candidate.blockedReason,
	});
 return candidates;
}

async function candidateBatch(root, kind, files) {
 return new Promise((accept, reject) => {
  // Input mode applies to stdin/eval, not this file. V8 memory flags are global
  // and cannot be passed in Worker.execArgv; the isolate checks their effect.
  const parentOnly = /^--(?:input-type|max[-_]old[-_]space[-_]size|max[-_]semi[-_]space[-_]size)(?:=|$)/;
  const execArgv = process.execArgv.filter((arg, i, args) => !parentOnly.test(arg) && !(parentOnly.test(args[i - 1] ?? '') && !args[i - 1].includes('=')));
  const worker = new Worker(new URL(import.meta.url), { execArgv, workerData: { task: 'indexation-product-batch', root, kind, files }, resourceLimits: { maxOldGenerationSizeMb: 256, maxYoungGenerationSizeMb: 8 } });
  let result;
  worker.once('message', message => { result = message; });
  worker.once('error', reject);
  worker.once('exit', code => {
   if (code !== 0 || !Array.isArray(result)) reject(new Error(`SEO candidate worker failed (${code})`));
   else accept(result);
  });
 });
}

if (!isMainThread && workerData?.task === 'indexation-product-batch') {
 // Global V8 flags can override Worker resourceLimits. Fail closed rather than
 // silently claiming a memory bound that the actual isolate does not enforce.
 if (getHeapStatistics().heap_size_limit > WORKER_HEAP_LIMIT_BYTES) throw new Error('SEO worker heap exceeds 288 MiB; inherited V8 memory flags override its resource limit.');
 const candidates = [];
 for (const file of workerData.files) {
  const { default: product } = await import(pathToFileURL(join(workerData.root, 'src/data/products', workerData.kind, file)).href);
  candidates.push(...productCandidates(product, workerData.kind));
 }
 parentPort.postMessage(candidates);
}

export async function collectIndexationCandidates(root, { onProgress, now = new Date() } = {}) {
 const editorialHolds = JSON.parse(await readFile(join(root, 'config/indexation-editorial-holds.json'), 'utf8'));
 const candidates = [];
 for (const kind of ['compressors', 'tools']) {
  const files = (await readdir(join(root, 'src/data/products', kind))).filter(file => file.endsWith('.ts') && file !== 'index.ts').sort();
  for (let offset = 0; offset < files.length; offset += PRODUCT_BATCH_SIZE) {
   const batch = await candidateBatch(root, kind, files.slice(offset, offset + PRODUCT_BATCH_SIZE));
   for (const candidate of batch) candidates.push(candidate);
   onProgress?.({ phase: 'candidates', kind, products: Math.min(offset + PRODUCT_BATCH_SIZE, files.length), count: candidates.length, memory: process.memoryUsage() });
  }
 }

	async function readGuides(directory, prefix = '') {
		for (const file of await readdir(directory, { withFileTypes: true })) {
			if (file.isDirectory()) { await readGuides(join(directory, file.name), `${prefix}${file.name}/`); continue; }
			if (!file.isFile() || !file.name.endsWith('.md')) continue;
			const raw = await readFile(join(directory, file.name), 'utf8');
			const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
			if (!match) throw new Error(`Guide sans métadonnées : ${prefix}${file.name}`);
			const data = parse(match[1]);
			const sourced = Array.isArray(data.sources) && data.sources.length && data.sources.every((source) => {
				try { return new URL(source).protocol === 'https:'; } catch { return false; }
			});
			const value = assessGuideValue(data, match[2]);
			candidates.push({
				value,
				path: `/guides/${prefix}${file.name.slice(0, -3)}/`, family: 'guides',
				topic: `${data.category}:${data.metiers?.[0] ?? data.audiences?.[0] ?? 'general'}`,
				text: editorialText(match[2]), identities: [],
				blockedReason: !sourced ? 'missing-editorial-source' : value.reasons[0],
			});
		}
	}
	await readGuides(join(root, 'src/content/guides'));
	const panel = JSON.parse(await readFile(join(root, 'config/seo-query-panel.json'), 'utf8'));
	for (const candidate of candidates) candidate.priority = editorialPriority(candidate, panel);
	return applyEditorialHolds(candidates, editorialHolds, { now });
}
