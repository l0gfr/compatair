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

	it('installs only the exact staging restart sudo capability', () => {
		expect(script).toContain('compatair-deploy ALL=(root) NOPASSWD: /bin/systemctl restart compatair-mcp-staging.service');
		expect(script).toContain('sudoers_file=/etc/sudoers.d/compatair-mcp-staging-drill');
		expect(script).toContain('visudo -cf "$sudoers_candidate"');
		expect(script).toContain('visudo -cf "$sudoers_file"');
	});
});
