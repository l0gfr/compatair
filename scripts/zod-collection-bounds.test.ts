import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const rootRequire = createRequire(import.meta.url);
const directCjs: typeof z = rootRequire('zod').z;
const directV3Cjs = rootRequire('zod/v3').z;
const directV3Esm = (await import(pathToFileURL(join(dirname(rootRequire.resolve('zod')), 'v3/index.js')).href)).z;
const astroRequire = createRequire(rootRequire.resolve('astro/package.json'));
const astroCjs: typeof z = astroRequire('zod').z;
const astroEsm: typeof z = (await import(pathToFileURL(join(dirname(astroRequire.resolve('zod')), 'index.js')).href)).z;
const lhci = createRequire(rootRequire.resolve('@lhci/cli/package.json'));
const lighthouse = createRequire(lhci.resolve('lighthouse/package.json'));
const puppeteer = createRequire(lighthouse.resolve('puppeteer-core/package.json'));
const bidi = createRequire(puppeteer.resolve('chromium-bidi'));
const legacyEntry = bidi.resolve('zod');
const legacyCjs = bidi('zod').z;
const legacyEsm = (await import(pathToFileURL(join(dirname(legacyEntry), 'index.js')).href)).z;
const bundledV4Cjs = rootRequire(join(dirname(legacyEntry), 'v4/index.cjs')).z;
const bundledV4Esm = (await import(pathToFileURL(join(dirname(legacyEntry), 'v4/index.js')).href)).z;

// GHSA-mrhx-c7xc-m3w5: reject oversized constrained input before accumulating element errors.
describe.each([['direct ESM', z], ['direct CJS', directCjs], ['Astro ESM', astroEsm], ['Astro CJS', astroCjs]] as const)('constrained collection resource bounds (%s)', (_, library) => {
	it.each(['array', 'exact', 'set', 'map'])('validates the boundary and rejects oversized %s before elements', async (kind) => {
		let visited = 0;
		const item = library.preprocess((value) => { visited += 1; return value; }, library.string());
		const schema = kind === 'array' ? library.array(item).max(2) : kind === 'exact' ? library.array(item).length(2) : kind === 'set' ? library.set(item).max(2) : library.map(library.string(), item).check(library.maxSize(2));
		const valid = kind === 'set' ? new Set(['a', 'b']) : kind === 'map' ? new Map([['1', 'a'], ['2', 'b']]) : ['a', 'b'];
		expect(schema.safeParse(valid).success).toBe(true);
		expect(visited).toBe(2);
		visited = 0;
		const input = kind === 'set' ? new Set(Array.from({ length: 10_000 }, (_, i) => i)) : kind === 'map' ? new Map(Array.from({ length: 10_000 }, (_, i) => [String(i), i])) : Array.from({ length: 10_000 }, () => 123);
		for (const asynchronous of [false, true]) {
			const result = asynchronous ? await schema.safeParseAsync(input) : schema.safeParse(input);
			expect(result.success).toBe(false);
			if (result.success) throw new Error('Oversized collection unexpectedly accepted');
			expect(result.error.issues).toHaveLength(1);
			expect(result.error.issues[0].code).toBe('too_big');
			expect(visited).toBe(0);
		}
	});

	it('matches official v4 prefix, when, transformation and parse-direction semantics', () => {
		// The official cap sees raw input. A rejected custom when may run again after parsing.
		for (const mode of ['coercion', 'false', 'stateful']) {
			let calls = 0;
			// max forwards these check options at runtime; its declaration omits when.
			const options = { abort: false, when: ({ value }: { value: unknown }) => {
				calls += 1;
				return mode === 'coercion' ? Array.isArray(value) && typeof value[0] === 'number' : mode === 'stateful' ? calls % 2 === 0 : false;
			} };
			const schema = library.array(library.coerce.string()).max(2, options);
			expect(schema.safeParse([1, 2, 3]).success).toBe(mode === 'false');
			expect(calls).toBe(mode === 'coercion' ? 1 : 2);
		}
		expect(library.array(library.string()).overwrite((value) => value.slice(0, 1)).max(1).parse(['a', 'b'])).toEqual(['a']);
		expect(library.set(library.string().transform(() => '')).max(1).safeParse(new Set(['a', 'b'])).success).toBe(false);
		expect(library.map(library.string().transform(() => ''), library.string()).check(library.maxSize(1)).safeParse(new Map([['a', 'a'], ['b', 'b']])).success).toBe(false);
		let later = 0;
		const capped = library.array(library.string()).max(1).refine(() => { later += 1; return false; }, { when: () => true });
		const rejected = capped.safeParse(['a', 'b']);
		if (rejected.success) throw new Error('Oversized collection unexpectedly accepted');
		expect(rejected.error.issues).toHaveLength(1);
		expect(later).toBe(0);
		const plain = library.array(library.string()).max(1);
		expect(plain._zod.run({ value: ['a', 'b'], issues: [] }, { skipChecks: true })).toMatchObject({ value: ['a', 'b'], issues: [] });
		expect(plain.safeEncode(['a', 'b']).success).toBe(false);
	});
});

// Sole intentional v4 divergence: upstream 4.6.7 writes continue on an absent issue here.
describe.each([['ESM', z], ['CJS', directCjs]] as const)('direct v4 stateful size guard (%s)', (_, library) => {
	it('parses a Set whose size decreases before its bound check emits an issue', () => {
		class DecreasingSizeSet extends Set<string> {
			reads = 0;
			override get size() { return ++this.reads === 1 ? 2 : 1; }
		}
		const result = library.set(library.string()).max(1).safeParse(new DecreasingSizeSet(['a']));
		expect(result.success).toBe(true);
		if (!result.success) throw new Error('Valid stateful collection unexpectedly rejected');
		expect([...result.data]).toEqual(['a']);
	});
});

describe.each([['CJS', bundledV4Cjs], ['ESM', bundledV4Esm]])('bundled legacy v4 collection bounds (%s)', (_, bundled) => {
	it('evaluates a public when callback once on the post-parse value', () => {
		let calls = 0;
		const schema = bundled.array(bundled.coerce.string()).max(2, { when: ({ value }: { value: unknown[] }) => { calls += 1; return typeof value[0] === 'number'; } });
		expect(schema.parse([1, 2, 3])).toEqual(['1', '2', '3']);
		expect(calls).toBe(1);
	});

	it('preserves a stateful when callback without a speculative second call', () => {
		let calls = 0;
		const schema = bundled.array(bundled.string()).max(1, { when: () => { calls += 1; return calls % 2 === 0; } });
		expect(schema.safeParse(['a', 'b']).success).toBe(true);
		expect(calls).toBe(1);
	});

	it('preserves a rewrite preceding the size check', () => {
		const schema = bundled.array(bundled.string()).overwrite((value: string[]) => value.slice(0, 1)).max(1);
		expect(schema.parse(['a', 'b', 'c'])).toEqual(['a']);
	});

	it.each(['array', 'exact', 'set', 'map'])('rejects oversized %s in both parse modes without element work', async (kind) => {
		let visited = 0;
		const item = bundled.preprocess((value: unknown) => { visited += 1; return value; }, bundled.string());
		const schema = kind === 'array' ? bundled.array(item).max(2) : kind === 'exact' ? bundled.array(item).length(2) : kind === 'set' ? bundled.set(item).max(2) : bundled.map(bundled.string(), item).check(bundled.maxSize(2));
		const valid = kind === 'set' ? new Set(['a', 'b']) : kind === 'map' ? new Map([['1', 'a'], ['2', 'b']]) : ['a', 'b'];
		expect(schema.safeParse(valid).success).toBe(true);
		expect(visited).toBe(2);
		visited = 0;
		const input = kind === 'set' ? new Set(Array.from({ length: 10_000 }, (_, i) => i)) : kind === 'map' ? new Map(Array.from({ length: 10_000 }, (_, i) => [String(i), i])) : Array.from({ length: 10_000 }, () => 123);
		for (const asynchronous of [false, true]) {
			const result = asynchronous ? await schema.safeParseAsync(input) : schema.safeParse(input);
			expect(result.success).toBe(false);
			if (result.success) throw new Error('Oversized bundled collection unexpectedly accepted');
			expect(result.error.issues).toHaveLength(1);
			expect(result.error.issues[0].code).toBe('too_big');
			expect(visited).toBe(0);
		}
	});
});

describe.each([['BiDi CJS', legacyCjs], ['BiDi ESM', legacyEsm], ['direct V3 CJS', directV3Cjs], ['direct V3 ESM', directV3Esm]])('legacy collection bounds (%s)', (_, legacy) => {
	it('does not reread a dynamic Set size and abort without an issue', () => {
		class ChangingSizeSet extends Set<string> {
			reads = 0;
			override get size() { this.reads += 1; return this.reads === 1 ? 1 : 2; }
		}
		const input = new ChangingSizeSet(['a']);
		const result = legacy.set(legacy.string()).max(1).safeParse(input);
		expect(result.success).toBe(true);
		expect(input.reads).toBe(1);
	});

	it.each(['array-max', 'array-exact', 'set-max', 'set-size'])('preserves valid boundaries and rejects oversized %s before elements', async (kind) => {
		let visited = 0;
		const item = legacy.preprocess((value: unknown) => { visited += 1; return value; }, legacy.string());
		const array = kind.startsWith('array');
		const schema = kind === 'array-max' ? legacy.array(item).max(2) : kind === 'array-exact' ? legacy.array(item).length(2) : kind === 'set-max' ? legacy.set(item).max(2) : legacy.set(item).size(2);
		expect(schema.safeParse(array ? ['one', 'two'] : new Set(['one', 'two'])).success).toBe(true);
		expect(visited).toBe(2);
		visited = 0;
		const input = array ? Array.from({ length: 10_000 }, () => 123) : new Set(Array.from({ length: 10_000 }, (_, i) => i));
		for (const asynchronous of [false, true]) {
			const result = asynchronous ? await schema.safeParseAsync(input) : schema.safeParse(input);
			expect(result.success).toBe(false);
			if (result.success) throw new Error('Oversized legacy collection unexpectedly accepted');
			expect(result.error.issues).toHaveLength(1);
			expect(result.error.issues[0].code).toBe('too_big');
			expect(visited).toBe(0);
		}
	});

	it('preserves nested paths and custom maximum messages', () => {
		const schema = legacy.object({ values: legacy.array(legacy.string()).max(1, 'collection-limit') });
		const result = schema.safeParse({ values: [123, 456] });
		expect(result.success).toBe(false);
		if (result.success) throw new Error('Oversized nested collection unexpectedly accepted');
		expect(result.error.issues).toEqual([expect.objectContaining({ code: 'too_big', path: ['values'], message: 'collection-limit' })]);
	});
});
