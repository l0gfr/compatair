import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const deploy = readFileSync(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
const rollback = readFileSync(new URL('./rollback-remote.sh', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8');
const apache = readFileSync(new URL('../deploy/apache/compatair.fr.conf.example', import.meta.url), 'utf8');
const releaseRoute = readFileSync(new URL('../src/pages/data/release.json.ts', import.meta.url), 'utf8');

describe('release boundary policy', () => {
	it('pins deployment and rollback to the dedicated CompatAir root', () => {
		for (const source of [deploy, rollback, workflow]) expect(source).toContain('/var/www/html/compatair');
		expect(deploy).not.toContain('^/var/www/html/[A-Za-z0-9._/-]+$');
		expect(rollback).not.toContain('^/var/www/html/[A-Za-z0-9._/-]+$');
	});

	it('restarts and verifies the MCP service after a rollback', () => {
		expect(rollback).toContain('systemctl restart compatair-mcp.service');
		expect(rollback).toContain('http://127.0.0.1:8787/health');
		expect(rollback).toContain('restore_previous_release');
		expect(rollback).toContain('if ! restart_mcp_and_wait');
		expect(rollback).toContain('if ! restore_previous_release');
		expect(rollback.indexOf('if ! restart_mcp_and_wait')).toBeLessThan(
			rollback.lastIndexOf(`printf '%s\\n' "$release_id" > "$deployed_sha"`),
		);
	});

	it('restores the previous release when the candidate MCP is unhealthy', () => {
		expect(deploy).toContain('restore_previous_release');
		expect(deploy).toContain('previous_release_id');
		expect(deploy).toContain('trap rollback_after_failed_activation EXIT');
		expect(deploy).toContain('activation_pending=true');
		expect(deploy).toContain('if ! restart_mcp_and_wait');
		expect(deploy).toContain('if ! restore_previous_release');
		expect(deploy.indexOf('if ! restart_mcp_and_wait')).toBeLessThan(
			deploy.lastIndexOf(`printf '%s\\n' "$release_id" > "$deployed_sha"`),
		);
	});

	it('reserves failure injection for the isolated staging root', () => {
		expect(deploy).toContain('/var/www/html/compatair-staging');
		expect(deploy).toContain('COMPATAIR_STAGING_DRILL');
		expect(deploy).toContain('compatair-mcp-staging.service');
		expect(deploy).toContain('COMPATAIR_DEPLOY_FAILPOINT');
		expect(deploy).toContain('Invalid or production failpoint');
	});

	it('publishes and verifies the exact GitHub release SHA', () => {
		expect(workflow).toContain('COMPATAIR_RELEASE_SHA: ${{ github.sha }}');
		expect(workflow).toContain('COMPATAIR_EXPECTED_RELEASE_SHA: ${{ github.sha }}');
		expect(workflow).toContain('node scripts/verify-live-seo.mjs');
		expect(workflow).toContain('dist/data/release.json');
		expect(releaseRoute).toContain("'Cache-Control': 'no-store'");
		expect(apache).toContain('<LocationMatch "^/data/release\\.json$">');
		expect(apache).toContain('Header always set Cache-Control "no-store"');
	});
});
