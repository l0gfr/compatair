import { readFileSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const root = fileURLToPath(new URL('../../', import.meta.url));
const configPath = join(root, 'tsconfig.json');
const config = ts.readConfigFile(configPath, ts.sys.readFile);
if (config.error) throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
const parsedConfig = ts.parseJsonConfigFileContent(config.config, ts.sys, root, undefined, configPath);
if (parsedConfig.errors.length) throw new Error(parsedConfig.errors.map(error => ts.flattenDiagnosticMessageText(error.messageText, '\n')).join('\n'));

describe('opaque evidence history input', () => {
	it('uses the exact declaration and requires schema validation before field access', () => {
		const options = parsedConfig.options;
		expect(options.strict).toBe(true);
		expect(options.allowArbitraryExtensions).toBe(true);
		const entry = resolve(root, 'src/data/__evidence_history_type_boundary_probe__.ts');
		const jsonPath = resolve(root, 'src/data/evidence-history.snapshot.json');
		const declaration = resolve(root, 'src/data/evidence-history.snapshot.d.json.ts');
		const resolved = ts.resolveModuleName('./evidence-history.snapshot.json', entry, options, ts.sys).resolvedModule;
		expect(resolved?.resolvedFileName).toBe(declaration);
		const source = `/// <reference types="astro/client" />
import snapshot from './evidence-history.snapshot.json';
import { evidenceHistorySchema } from '../domain/evidence-history';
const validated = evidenceHistorySchema.parse(snapshot);
const validatedSourceUrl: string = validated.events[0]!.snapshot.sourceUrl;
snapshot.events;
`;
		const host = ts.createCompilerHost(options);
		const readFile = host.readFile.bind(host);
		const fileExists = host.fileExists.bind(host);
		let attemptedJsonRead = false;
		host.fileExists = path => path === entry || fileExists(path);
		host.readFile = path => {
			if (path === entry) return source;
			if (path === jsonPath) {
				attemptedJsonRead = true;
				throw new Error('The compiler must not materialize the complete JSON input');
			}
			return readFile(path);
		};
		const program = ts.createProgram([entry], options, host);
		const entrySource = program.getSourceFile(entry);
		expect(entrySource).toBeDefined();
		const checker = program.getTypeChecker();
		const inputType = checker.getTypeAtLocation(entrySource.statements[0].importClause.name);
		expect(inputType.flags & ts.TypeFlags.Unknown).toBeTruthy();
		const errors = ts.getPreEmitDiagnostics(program);
		expect(errors.map(error => error.code)).toEqual([18046]);
		expect(ts.flattenDiagnosticMessageText(errors[0].messageText, '\n')).toContain("'snapshot' is of type 'unknown'");
		expect(attemptedJsonRead).toBe(false);
		expect(program.getSourceFiles().some(file => file.fileName === jsonPath)).toBe(false);
		expect(program.getSourceFiles().some(file => file.fileName === resolve(root, '.astro/types.d.ts'))).toBe(false);
	}, 30_000);

	it('keeps native JSON loading exact and rejects absent or malformed runtime input', () => {
		const fixture = mkdtempSync(join(tmpdir(), 'compatair-opaque-history-'));
		try {
			const jsonPath = join(fixture, 'evidence-history.snapshot.json');
			writeFileSync(join(fixture, 'evidence-history.snapshot.d.json.ts'), readFileSync(join(root, 'src/data/evidence-history.snapshot.d.json.ts')));
			writeFileSync(join(fixture, 'runtime.mjs'), "import value from './evidence-history.snapshot.json' with { type: 'json' };\nprocess.stdout.write(JSON.stringify(value));\n");
			const value = { fixture: 'runtime-json', events: [{ id: 'controlled-fixture' }] };
			writeFileSync(jsonPath, JSON.stringify(value));
			const execute = () => spawnSync(process.execPath, [join(fixture, 'runtime.mjs')], { encoding: 'utf8', timeout: 10_000 });
			const exact = execute();
			expect(exact.status).toBe(0);
			expect(JSON.parse(exact.stdout)).toEqual(value);
			rmSync(jsonPath);
			expect(execute().status).toBe(1);
			writeFileSync(jsonPath, '{ malformed controlled fixture');
			expect(execute().status).toBe(1);
		} finally {
			rmSync(fixture, { recursive: true, force: true });
		}
	});
});
