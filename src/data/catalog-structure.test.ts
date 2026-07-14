import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from './catalog';

function productFiles(kind: 'compressors' | 'tools') {
	const directory = new URL(`./products/${kind}/`, import.meta.url);
	return readdirSync(directory).filter((name) => name.endsWith('.ts') && name !== 'index.ts').sort();
}

describe('catalog file layout', () => {
	it('stores exactly one compressor per versioned source file', () => {
		const files = productFiles('compressors');
		expect(files).toEqual(compressors.map((item) => `${item.slug}.ts`).sort());
		for (const file of files) {
			const source = readFileSync(new URL(`./products/compressors/${file}`, import.meta.url), 'utf8');
			expect(source.match(/^\s*id:/gm)).toHaveLength(1);
		}
	});

	it('stores exactly one tool per versioned source file', () => {
		const files = productFiles('tools');
		expect(files).toEqual(tools.map((item) => `${item.slug}.ts`).sort());
		for (const file of files) {
			const source = readFileSync(new URL(`./products/tools/${file}`, import.meta.url), 'utf8');
			expect(source.match(/^\s*id:/gm)).toHaveLength(1);
		}
	});
});
