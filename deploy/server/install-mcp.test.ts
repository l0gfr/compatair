import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

const installerUrl = new URL('./install-mcp.sh', import.meta.url);
const installer = readFileSync(installerUrl, 'utf8');
const smoke = readFileSync(new URL('./smoke-mcp-profile-contract.mjs', import.meta.url), 'utf8');

describe('transactional MCP proxy installation', () => {
	it('keeps the installer valid Bash', () => {
		const result = spawnSync('bash', ['-n', installerUrl.pathname], { encoding: 'utf8' });
		expect(result.status, result.stderr).toBe(0);
	});

	it('rolls the vhost back when the real MCP profile contract fails', () => {
		expect(installer).toContain('vhost_activation_pending=true');
		expect(installer).toContain('smoke-mcp-profile-contract.mjs');
		expect(installer).toContain('rollback_failed_vhost_smoke');
		expect(installer).toContain('restore_previous_vhost');
		expect(installer.indexOf('vhost_activation_pending=true')).toBeLessThan(
			installer.indexOf('smoke-mcp-profile-contract.mjs', installer.indexOf('vhost_activation_pending=true')),
		);
		expect(installer.indexOf('smoke-mcp-profile-contract.mjs', installer.indexOf('vhost_activation_pending=true'))).toBeLessThan(
			installer.lastIndexOf('vhost_activation_pending=false'),
		);
	});

	it('tests the required URL field through TLS, Apache and MCP', () => {
		expect(smoke).toContain("path: '/mcp'");
		expect(smoke).toContain("name: 'evaluate_air_compatibility'");
		expect(smoke).toContain("'https://compatair.fr/examples/ucp/platform-profile.json'");
		expect(smoke).toContain("'https://agent.example/.well-known/ucp'");
		expect(smoke).toContain("'MCP-Protocol-Version': '2025-11-25'");
		expect(smoke).toContain("decision?.overall_system_verdict?.scope !== 'complete_air_system'");
		expect(smoke).toContain("decision?.air_supply_verdict?.scope !== 'air_supply'");
		expect(smoke).toContain("decision.canonical_url.startsWith('https://compatair.fr/')");
		expect(smoke).toContain("unreachable.error?.data?.messages?.[0]?.code !== 'profile_unreachable'");
	});
});
