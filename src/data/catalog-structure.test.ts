import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from './catalog';

function productFiles(kind: 'compressors' | 'tools') {
	const directory = new URL(`./products/${kind}/`, import.meta.url);
	return readdirSync(directory).filter((name) => name.endsWith('.ts') && name !== 'index.ts').sort();
}

function expectSingleProductDeclaration(source: string) {
	expect(source.match(/^const product =/gm)).toHaveLength(1);
	const evidenceStart = source.search(/^\s*["']?evidence["']?\s*:/m);
	expect(evidenceStart).toBeGreaterThan(0);
	expect(source.slice(0, evidenceStart).match(/(?:["']id["']|\bid)\s*:/g)).toHaveLength(1);
}

describe('catalog file layout', () => {
	it('stores exactly one compressor per versioned source file', () => {
		const files = productFiles('compressors');
		expect(files).toEqual(compressors.map((item) => `${item.slug}.ts`).sort());
		for (const file of files) {
			const source = readFileSync(new URL(`./products/compressors/${file}`, import.meta.url), 'utf8');
			expectSingleProductDeclaration(source);
		}
	});

	it('stores exactly one tool per versioned source file', () => {
		const files = productFiles('tools');
		expect(files).toEqual(tools.map((item) => `${item.slug}.ts`).sort());
		for (const file of files) {
			const source = readFileSync(new URL(`./products/tools/${file}`, import.meta.url), 'utf8');
			expectSingleProductDeclaration(source);
		}
	});
});
