import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

const drillUrl = new URL('./staging-failure-drill.sh', import.meta.url);
const drill = readFileSync(drillUrl, 'utf8');

describe('staging failure drill contract', () => {
	it('is valid Bash and refuses to target the production namespace', () => {
		const result = spawnSync('bash', ['-n', drillUrl.pathname], { encoding: 'utf8' });
		expect(result.status, result.stderr).toBe(0);
		expect(drill).toContain('deploy_root=/var/www/html/compatair-staging');
		expect(drill).toContain('mcp_service=compatair-mcp-staging.service');
		expect(drill).not.toContain('deploy_root=/var/www/html/compatair\n');
	});

	it('executes all three requested failures and writes durable evidence', () => {
		expect(drill).toContain('invalid-mcp');
		expect(drill).toContain('CompatAirIntentionalInvalidDirective');
		expect(drill).toContain('COMPATAIR_DEPLOY_FAILPOINT=after-switch');
		expect(drill.match(/assert_restored/g)?.length).toBeGreaterThanOrEqual(3);
		expect(drill).toContain('/var/lib/compatair-staging/failure-drills');
	});

	it('rejects failures caused by the wrong mechanism', () => {
		expect(drill).toContain('deploy_script=/usr/local/libexec/compatair/staging-deploy-remote.sh');
		expect(drill).toContain("stat -c '%u:%g:%a' \"$deploy_script\") != '0:0:755'");
		expect(drill).toContain('require_expected_failure "$invalid_mcp_log" "$invalid_mcp_status" 1');
		expect(drill).toContain('require_expected_failure "$invalid_vhost_log" "$invalid_vhost_status" 1');
		expect(drill).toContain('require_expected_failure "$interrupted_log" "$interrupted_status" 143');
		expect(drill).toContain('require_expected_failure "$public_smoke_log" "$public_smoke_status" 1');
		expect(drill).toContain('"schemaVersion": "1.2.0"');
		expect(drill).toContain('"failureStatusCodes"');
	});
});
