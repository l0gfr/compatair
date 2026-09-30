import { afterEach, describe, expect, it, vi } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { createRuntimeCatalog, loadRuntimeCatalog, runtimeCatalogSchema } from './runtime-catalog';

const catalogVersion = 'a'.repeat(64);

describe('runtime catalog', () => {
	afterEach(() => vi.unstubAllGlobals());

	it('projects the validated source catalog without editorial payloads', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		expect(runtime.compressors).toHaveLength(compressors.length);
		expect(runtime.compressors.some((compressor) => compressor.mobility)).toBe(true);
		expect(runtime.tools).toHaveLength(tools.length);
		expect(runtime.compressors[0]).not.toHaveProperty('editorial');
		expect(runtime.tools[0].fieldSources).toEqual(expect.any(Object));
		expect(runtime.tools[0]).not.toHaveProperty('notes');
		const browserBatch = { ...runtime, compressors: runtime.compressors.slice(0, 50), tools: runtime.tools.slice(0, 50) };
		expect(runtimeCatalogSchema.parse(browserBatch)).toEqual(browserBatch);
	});

	it('rejects an untrusted or incomplete runtime snapshot', () => {
		const runtime = createRuntimeCatalog(compressors.slice(0, 50), tools.slice(0, 50), CATALOG_VERIFIED_AT, catalogVersion);
		const invalid = structuredClone(runtime);
		invalid.compressors[0].evidence[0].sourceUrl = 'javascript:alert(1)';
		expect(() => runtimeCatalogSchema.parse(invalid)).toThrow();
	});

	it('retains documented industrial FAD while enforcing a finite ceiling', () => {
		const industrial = compressors.find((item) => item.id === 'almig-simplexx-275-water-cooled')!;
		const runtime = createRuntimeCatalog([industrial], [], CATALOG_VERIFIED_AT, catalogVersion);
		expect(runtime.compressors[0].fadCurve[0].litersPerMinute).toBe(45_000);
		for (const invalid of [-1, Infinity, 100_001]) {
			const copy = structuredClone(runtime);
			copy.compressors[0].fadCurve[0].litersPerMinute = invalid;
			expect(() => runtimeCatalogSchema.parse(copy)).toThrow();
		}
		const inflation = tools.find((item) => item.categoryId === 'gonflage')!;
		expect(createRuntimeCatalog([], [inflation], CATALOG_VERIFIED_AT, catalogVersion).tools[0].categoryId).toBe('gonflage');
	});

	it('retains every runtime field citation while excluding unrelated compressor evidence', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		for (const compressor of runtime.compressors) {
			const ids = new Set(compressor.evidence.map((source) => source.id));
			for (const sourceId of Object.values(compressor.fieldSources).flat()) expect(ids.has(sourceId)).toBe(true);
		}
		const schneider = runtime.compressors.find((item) => item.id === 'schneider-unm-sts-660-10-90')!;
		expect(schneider.evidence.map((source) => source.id)).toEqual(['schneider-2025-1121580537']);
		expect(schneider.fieldSources.fadCurve).toEqual(['schneider-2025-1121580537']);
		expect(compressors.find((item) => item.id === schneider.id)!.evidence).toHaveLength(2);
		const legacy = { ...compressors[0], fieldSources: {} };
		expect(createRuntimeCatalog([legacy], [], CATALOG_VERIFIED_AT, catalogVersion).compressors[0].evidence).toHaveLength(legacy.evidence.length);
		const separateTankSource = { ...compressors[0].evidence[0], id: 'tank-only' };
		const withTankSource = { ...compressors[0], evidence: [...compressors[0].evidence, separateTankSource], fieldSources: { ...compressors[0].fieldSources, tankLiters: ['tank-only'] } };
		expect(createRuntimeCatalog([withTankSource], [], CATALOG_VERIFIED_AT, catalogVersion).compressors[0].evidence.some((source) => source.id === 'tank-only')).toBe(true);
	});

	it('publishes more than 4000 tools without widening the browser input limit', () => {
		const expanded = Array.from({ length: 5000 }, (_, index) => ({ ...tools[0], id: `fixture-${index}` }));
		const published = createRuntimeCatalog([], expanded, CATALOG_VERIFIED_AT, catalogVersion);
		expect(published.tools).toHaveLength(5000);
		expect(() => runtimeCatalogSchema.parse(published)).toThrow();
	});

	it('rejects tool arrays beyond the bounded 4000-entry runtime limit', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		expect(() => runtimeCatalogSchema.parse({ ...runtime, tools: Array.from({ length: 4001 }, () => runtime.tools[0]) })).toThrow();
	});

	it('loads and validates a bounded same-origin execution snapshot', async () => {
		const runtime = createRuntimeCatalog(compressors.slice(0, 50), tools.slice(0, 50), CATALOG_VERIFIED_AT, catalogVersion);
		const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(runtime)));
		vi.stubGlobal('fetch', fetchMock);
		await expect(loadRuntimeCatalog()).resolves.toEqual(runtime);
		expect(fetchMock).toHaveBeenCalledWith('/data/runtime-catalog.json', { headers: { Accept: 'application/json' } });
	});
});
