import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';

const root = createRequire(import.meta.url);
let consumer = createRequire(root.resolve('@astrojs/check'));
for (const name of ['@astrojs/language-server', 'volar-service-yaml', 'yaml-language-server', 'ajv']) {
	consumer = createRequire(consumer.resolve(name));
}
const uri = consumer('fast-uri');

describe('fast-uri security regressions through the installed Ajv consumer', () => {
	it('rejects encoded schemes without making them executable', () => {
		for (const input of ['%6Aavascript:alert(1)', '%u006Aavascript:alert(1)']) {
			expect(uri.parse(input).error).toBeTruthy();
			expect(uri.normalize(input)).not.toMatch(/^javascript:/);
			expect(() => uri.resolve('https://example.test/', input)).toThrow('URI scheme is malformed');
		}
		expect(uri.equal('%68ttp://a/', 'http://a/')).toBe(false);
	});
	it('rejects host delimiters and whitespace instead of silently rewriting authority', () => {
		for (const input of ['http://a@b@evil.example/', 'http://exam\tple.com/', 'http://exam\nple.com/', 'http://exam\rple.com/']) {
			expect(uri.parse(input).error).toBeTruthy();
		}
		expect(uri.parse('https://EXAMPLE.com/schema').host).toBe('example.com');
	});
	it('keeps relative references equivalent after normalization', () => {
		const base = 'https://example.test/one/two/';
		for (const input of ['../x', 'a/../b']) {
			expect(uri.resolve(base, uri.normalize(input))).toBe(uri.resolve(base, input));
		}
		expect(uri.equal('../x', 'x')).toBe(false);
	});
	it('escapes first-segment colons when serializing a suffix path', () => {
		for (const path of ['javascript:alert(1)', 'data:text/plain,test', 'vbscript:test']) {
			const result = uri.serialize({ path }, { reference: 'suffix' });
			expect(uri.parse(result).scheme).toBeUndefined();
			expect(result).toContain('%3A');
		}
		expect(uri.serialize({ path: 'ordinary/path' }, { reference: 'suffix' })).toBe('ordinary/path');
	});
});

describe('Zod bounded collection validation', () => {
	it('rejects oversized arrays and sets before visiting their elements', () => {
		let visited = 0;
		const element = z.string().refine(() => { visited++; return true; });
		for (const [schema, input] of [
			[z.array(element).max(2), Array(1_000).fill('valid')],
			[z.array(element).length(2), [1, 2, 3]],
			[z.set(element).max(2), new Set(['a', 'b', 'c'])],
		] as const) {
			const result = schema.safeParse(input);
			expect(result.success).toBe(false);
			if (!result.success) expect(result.error.issues.map(issue => issue.code)).toEqual(['too_big']);
		}
		expect(visited).toBe(0);
		expect(z.array(element).max(2).parse(['a', 'b'])).toEqual(['a', 'b']);
		expect(visited).toBe(2);
		expect(z.array(z.string()).max(2).safeParse([1]).success).toBe(false);
	});
});
