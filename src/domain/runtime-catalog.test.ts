import { afterEach, describe, expect, it, vi } from 'vitest';
import { CATALOG_VERIFIED_AT, compressors, tools } from '../data/catalog';
import { createRuntimeCatalog, loadRuntimeCatalog, runtimeCatalogSchema } from './runtime-catalog';

const catalogVersion = 'a'.repeat(64);

describe('runtime catalog', () => {
	afterEach(() => vi.unstubAllGlobals());

	it('projects the validated source catalog without editorial payloads', () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		expect(runtime.compressors).toHaveLength(compressors.length);
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

	it('loads and validates the same-origin execution snapshot', async () => {
		const runtime = createRuntimeCatalog(compressors, tools, CATALOG_VERIFIED_AT, catalogVersion);
		const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify(runtime)));
		vi.stubGlobal('fetch', fetchMock);
		await expect(loadRuntimeCatalog()).resolves.toEqual(runtime);
		expect(fetchMock).toHaveBeenCalledWith('/data/runtime-catalog.json', { headers: { Accept: 'application/json' } });
	});
});
