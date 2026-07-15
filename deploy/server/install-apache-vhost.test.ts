import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

const helperUrl = new URL('./install-apache-vhost.sh', import.meta.url);
const helper = readFileSync(helperUrl, 'utf8');
const bootstrap = readFileSync(new URL('./bootstrap-server.sh', import.meta.url), 'utf8');
const callers = [
	'activate-tls.sh',
	'install-mcp.sh',
	'install-stats.sh',
].map((name) => readFileSync(new URL(name, import.meta.url), 'utf8'));

describe('transactional Apache vhost installation', () => {
	it('keeps the helper valid Bash', () => {
		const result = spawnSync('bash', ['-n', helperUrl.pathname], { encoding: 'utf8' });
		expect(result.status, result.stderr).toBe(0);
	});

	it('restores the previous vhost on validation or reload failure', () => {
		expect(helper).toContain('restore_previous_config');
		expect(helper.match(/restore_previous_config/g)?.length).toBeGreaterThanOrEqual(3);
		expect(helper).toContain('if ! apache2ctl configtest');
		expect(helper).toContain('if ! systemctl reload apache2');
		expect(helper).toContain('Refusing to replace an unexpected Apache vhost path');
	});

	it('is the only installation path used by privileged setup scripts', () => {
		for (const caller of callers) {
			expect(caller).toContain('install-apache-vhost.sh');
			expect(caller).not.toContain('install -m 644 "$project_dir/deploy/apache/compatair.fr.conf.example"');
			expect(caller).not.toContain('install -m 644 "$script_dir/../apache/compatair.fr.conf.example"');
		}
	});

	it('refuses to run the one-time bootstrap over an active installation', () => {
		expect(bootstrap).toContain('Refusing to bootstrap over an existing CompatAir installation');
		expect(bootstrap).toContain('-e "$deploy_root/current" || -L "$deploy_root/current"');
		expect(bootstrap).toContain('-e "$target_config" || -L "$target_config"');
		expect(bootstrap).toContain('-e "$enabled_config" || -L "$enabled_config"');
	});
});
