import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseDocument } from 'yaml';
import { workflowTimeoutErrors } from './workflow-timeouts.mjs';

const ci = '.github/workflows/ci.yml';
const security = '.github/workflows/security.yml';

describe('workflow job timeout limits used by source lint', () => {
	it.each([
		[ci, 'build', 35],
		[ci, 'source-tests', 15],
		[ci, 'validate', 25],
		[ci, 'another-job', 25],
		[security, 'dependency-audit', 15],
		[security, 'build', 15],
	])('accepts the exact %s / %s limit %i and rejects the next minute', (file, name, maximum) => {
		expect(workflowTimeoutErrors(file, { [name]: { 'timeout-minutes': maximum } })).toEqual([]);
		expect(workflowTimeoutErrors(file, { [name]: { 'timeout-minutes': maximum + 1 } })).toEqual([
			`${file}: durée maximale absente ou supérieure à ${maximum} minutes (${name})`,
		]);
	});
	it.each([undefined, null, 0, -1, 1.5, '35', NaN, Infinity])('rejects a missing or invalid timeout %s', timeout => {
		expect(workflowTimeoutErrors(ci, { build: { 'timeout-minutes': timeout } })).toHaveLength(1);
	});
	it('accepts the real CI and Security jobs without extending the build exception elsewhere', () => {
		for (const file of [ci, security]) {
			const jobs = parseDocument(readFileSync(new URL(`../../${file}`, import.meta.url), 'utf8')).toJS().jobs;
			expect(workflowTimeoutErrors(file, jobs)).toEqual([]);
		}
		expect(workflowTimeoutErrors(ci, { 'source-tests': { 'timeout-minutes': 35 } })).toHaveLength(1);
		expect(workflowTimeoutErrors(security, { build: { 'timeout-minutes': 35 } })).toHaveLength(1);
	});
});
