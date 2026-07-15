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
});
