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
		expect(runtimeCatalogSchema.parse(runtime)).toEqual(runtime);
	});

	it('rejects an untrusted or incomplete runtime snapshot', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		const invalid = structuredClone(runtime);
		invalid.compressors[0].evidence[0].sourceUrl = 'javascript:alert(1)';
		expect(() => runtimeCatalogSchema.parse(invalid)).toThrow();
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

	it('rejects tool arrays beyond the bounded 1500-entry runtime limit', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		expect(() => runtimeCatalogSchema.parse({ ...runtime, tools: Array.from({ length: 1501 }, () => runtime.tools[0]) })).toThrow();
	});

	it('loads and validates the same-origin execution snapshot', async () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(runtime)));
		vi.stubGlobal('fetch', fetchMock);
		await expect(loadRuntimeCatalog()).resolves.toEqual(runtime);
		expect(fetchMock).toHaveBeenCalledWith('/data/runtime-catalog.json', { headers: { Accept: 'application/json' } });
	});
});
