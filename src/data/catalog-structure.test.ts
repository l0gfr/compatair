import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { compressors, tools } from './catalog';

function productFiles(kind: 'compressors' | 'tools') {
	const directory = new URL(`./products/${kind}/`, import.meta.url);
	return readdirSync(directory).filter((name) => name.endsWith('.ts') && name !== 'index.ts').sort();
}

function expectSingleProductDeclaration(source: string, file: string) {
	assert.equal(source.match(/^const product(?:: (?:unknown|CompressorInput|ToolProfileInput))? = /gm)?.length ?? 0, 1, `${file}: product declaration`);
	const evidenceStart = source.search(/^\s*["']?evidence["']?\s*:/m);
	assert.ok(evidenceStart > 0, `${file}: evidence declaration`);
	assert.equal(source.slice(0, evidenceStart).match(/(?:["']id["']|\bid)\s*:/g)?.length ?? 0, 1, `${file}: product identity`);
}

async function expectSingleProductFiles(kind: 'compressors' | 'tools', files: string[]) {
	const directory = new URL(`./products/${kind}/`, import.meta.url);
	for (let start = 0; start < files.length; start += 32) {
		const batch = files.slice(start, start + 32);
		const sources = await Promise.all(batch.map((file) => readFile(new URL(file, directory), 'utf8')));
		for (const [index, source] of sources.entries()) expectSingleProductDeclaration(source, batch[index]);
	}
}

describe('catalog file layout', () => {
	it('accepts only the supported product declaration prefixes', () => {
		const body = '{\n"id": "fixture",\n"evidence": []\n};\n\nexport default product;\n';
		for (const prefix of ['const product = ', 'const product: unknown = ', 'const product: CompressorInput = ', 'const product: ToolProfileInput = ']) {
			expectSingleProductDeclaration(prefix + body, 'fixture.ts');
		}
		for (const prefix of ['const product: any = ', 'const product: object = ', 'const product:unknown = ', 'const product =']) {
			expect(() => expectSingleProductDeclaration(prefix + body, 'fixture.ts')).toThrow('product declaration');
		}
		expect(() => expectSingleProductDeclaration('const product = ' + body + 'const product: unknown = ' + body, 'fixture.ts')).toThrow('product declaration');
	});

	it('stores exactly one compressor per versioned source file', async () => {
		const files = productFiles('compressors');
		expect(files).toEqual(compressors.map((item) => `${item.slug}.ts`).sort());
		await expectSingleProductFiles('compressors', files);
	});

	it('stores exactly one tool per versioned source file', async () => {
		const files = productFiles('tools');
		expect(files).toEqual(tools.map((item) => `${item.slug}.ts`).sort());
		await expectSingleProductFiles('tools', files);
	});
});
