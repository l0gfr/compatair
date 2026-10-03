import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { parseDocument } from 'yaml';
import { describe, expect, it } from 'vitest';

const workflow = parseDocument(readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8')).toJS();
const validate = workflow.jobs.validate;
const transfer = validate.steps.find(step => step.name === 'Transfer and activate release');
const begin = transfer.run.indexOf('assert_transfer_time_remaining() {');
const end = transfer.run.indexOf('\n}', begin) + 2;
const guard = transfer.run.slice(begin, end);
const check = (started, now) => spawnSync('/bin/bash', ['-c', `${guard}\nassert_transfer_time_remaining "$1" "$2"`, 'fixture', started, now], { encoding: 'utf8', timeout: 2_000 });

describe('pre-transport production time reserve', () => {
	it('records an explicit first-step timestamp and checks it before every knock and SSH', () => {
		expect(validate['timeout-minutes']).toBe(60);
		expect(validate.steps[0].id).toBe('validation_clock');
		expect(validate.steps[0].run).toContain('started_at=%s');
		expect(transfer.env.COMPATAIR_VALIDATION_STARTED_AT).toBe('${{ steps.validation_clock.outputs.started_at }}');
		expect(transfer.run.indexOf('assert_transfer_time_remaining "$COMPATAIR_VALIDATION_STARTED_AT"')).toBeLessThan(transfer.run.indexOf('read -ra knock_ports'));
		expect(transfer.run.indexOf('assert_transfer_time_remaining "$COMPATAIR_VALIDATION_STARTED_AT"')).toBeLessThan(transfer.run.indexOf('ssh_options=('));
	});
	it('permits exactly ten minutes after the explicit one-minute setup reserve', () => {
		const result = check('1700000000', '1700002940');
		expect(result.status).toBe(0); expect(result.stdout).toContain('600 seconds');
	});
	it('refuses transport one second below the reserve', () => {
		const result = check('1700000000', '1700002941');
		expect(result.status).toBe(1); expect(result.stderr).toContain('599 seconds');
	});
	it('refuses missing, malformed or future timestamps before arithmetic', () => {
		for (const [started, now] of [['', '1700000000'], ['invalid', '1700000000'], ['1700000001', '1700000000'], ['1700000000', '$(false)']]) {
			const result = check(started, now); expect(result.status).toBe(2); expect(result.stderr).toContain('transport refused');
		}
	});
});
