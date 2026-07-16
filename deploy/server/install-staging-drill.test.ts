import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const script = readFileSync(new URL('./install-staging-drill.sh', import.meta.url), 'utf8');

describe('isolated staging drill installer', () => {
	it('binds every mutable operation to the fixed staging boundary', () => {
		expect(script).toContain('production_root=/var/www/html/compatair');
		expect(script).toContain('staging_root=/var/www/html/compatair-staging');
		expect(script).toContain('staging_service=compatair-mcp-staging.service');
		expect(script).toContain('staging_vhost=/etc/apache2/sites-available/compatair-staging.conf');
		expect(script).toContain('http://127.0.0.1:8788/health');
	});

	it('fails closed on a divergent baseline and proves the completed drill', () => {
		expect(script).toContain('diff -qr -- "$production_release" "$staging_release"');
		expect(script).toContain('refusing to overwrite it');
		expect(script).toContain('bash "$script_dir/staging-failure-drill.sh"');
		expect(script).toContain('/usr/local/sbin/compatair-assert-recent-drill');
	});

	it('waits for the restarted staging service before starting the drill', () => {
		expect(script).toContain('wait_for_staging_health()');
		expect(script).toContain('for ((attempt = 1; attempt <= 15; attempt++))');
		expect(script).toContain('curl --fail --silent --max-time 2 http://127.0.0.1:8788/health');
		expect(script).toContain('Staging MCP did not become healthy after 15 health checks');

		const restartIndex = script.indexOf('systemctl restart "$staging_service"');
		const waitIndex = script.indexOf('wait_for_staging_health', restartIndex);
		const drillIndex = script.indexOf('bash "$script_dir/staging-failure-drill.sh"', restartIndex);
		expect(restartIndex).toBeGreaterThan(-1);
		expect(waitIndex).toBeGreaterThan(restartIndex);
		expect(drillIndex).toBeGreaterThan(waitIndex);
	});

	it('installs only the exact staging restart sudo capability', () => {
		expect(script).toContain('compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-mcp-staging.service');
		expect(script).toContain('sudoers_file=/etc/sudoers.d/compatair-mcp-staging-drill');
		expect(script).toContain('visudo -cf "$sudoers_candidate"');
		expect(script).toContain('visudo -cf "$sudoers_file"');
	});

	it('installs a root-owned deploy runtime that the unprivileged staging account can read', () => {
		expect(script).toContain('staging_deploy_script="$staging_libexec/staging-deploy-remote.sh"');
		expect(script).toContain('install -o root -g root -m 755 "$repo_root/scripts/deploy-remote.sh" "$staging_deploy_script"');
		expect(script).toContain('install -o root -g root -m 644 "$script_dir/verify-drill-report.mjs" "$drill_verifier"');
		expect(script).toContain('install -o root -g root -m 755 "$script_dir/assert-recent-drill.sh" "$drill_assertion"');
	});
});
