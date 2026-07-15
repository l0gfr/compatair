import { describe, expect, it } from 'vitest';
import { parseJavaScriptModuleSpecifiers } from './javascript-module-graph.mjs';

describe('built JavaScript module graph', () => {
	it('finds static and minified dynamic imports delimited by backticks', () => {
		const source = 'import{t as e}from"./preload.js";export{a}from\'./shared.js\';const p=()=>import(`./lazy.js`);';
		expect(parseJavaScriptModuleSpecifiers(source, 'entry.js')).toEqual({
			staticImports: ['./preload.js', './shared.js'],
			dynamicImports: ['./lazy.js'],
			unresolvedDynamicImports: 0,
		});
	});

	it('keeps quoted dynamic imports and fails closed on computed specifiers', () => {
		const source = 'const a=import("./quoted.js");const b=import(`./${name}.js`);';
		expect(parseJavaScriptModuleSpecifiers(source)).toEqual({
			staticImports: [],
			dynamicImports: ['./quoted.js'],
			unresolvedDynamicImports: 1,
		});
	});
});
