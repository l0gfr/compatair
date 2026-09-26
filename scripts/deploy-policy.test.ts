import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parseDocument } from 'yaml';

const deploy = readFileSync(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
const rollback = readFileSync(new URL('./rollback-remote.sh', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8');
const monitorWorkflow = readFileSync(new URL('../.github/workflows/monitor.yml', import.meta.url), 'utf8');
const snapshotWorkflow = readFileSync(new URL('../.github/workflows/sync-data.yml', import.meta.url), 'utf8');
const securityWorkflow = readFileSync(new URL('../.github/workflows/security.yml', import.meta.url), 'utf8');
const apache = readFileSync(new URL('../deploy/apache/compatair.fr.conf.example', import.meta.url), 'utf8');
const releaseRoute = readFileSync(new URL('../src/pages/data/release.json.ts', import.meta.url), 'utf8');
const liveSmoke = readFileSync(new URL('./smoke-live-http.mjs', import.meta.url), 'utf8');

describe('release boundary policy', () => {
	it('isolates storage deletion from build and deployment credentials', () => {
		const config = parseDocument(workflow).toJS();
		expect(config.permissions).toEqual({ contents: 'read' });
		expect(config.jobs.storage.needs).toBe('validate');
		expect(config.jobs.storage.if).toBe("github.ref == 'refs/heads/main'");
		expect(config.jobs.storage.permissions).toEqual({ contents: 'read', actions: 'write' });
		expect(JSON.stringify(config.jobs.storage)).not.toContain('secrets.');
		const uploadSteps = config.jobs.validate.steps.filter((step: { uses?: string }) => step.uses?.startsWith('actions/upload-artifact@'));
		for (const step of uploadSteps) {
			expect(step.with['retention-days']).toBeLessThanOrEqual(step.with.name.startsWith('compatair-invariants-') ? 90 : 7);
			if (step.with.path === '.lighthouseci/reports/') expect(step.if).toContain('failure()');
		}
	});

	it('limits the requested automatic monitoring to availability and source health', () => {
		for (const scheduledWorkflow of [snapshotWorkflow, securityWorkflow]) {
			expect(scheduledWorkflow).not.toMatch(/^\s+schedule:/m);
		}
		expect(monitorWorkflow).toContain("cron: '23 5 * * *'");
		expect(monitorWorkflow).toContain('workflow_dispatch:');
		expect(snapshotWorkflow).toContain('workflow_dispatch:');
		expect(securityWorkflow).toContain('workflow_dispatch:');
	});

	it('guards source history before merging and reports source anomalies without success messages', () => {
		const ci = readFileSync(new URL('../.github/workflows/ci.yml', import.meta.url), 'utf8');
		const health = readFileSync(new URL('../.github/workflows/source-health.yml', import.meta.url), 'utf8');
		expect(ci).toContain('PR_BASE_SHA: ${{ github.event.pull_request.base.sha }}');
		expect(ci).toContain('node scripts/assert-evidence-history-extension.mjs /tmp/evidence-baseline.json');
		expect(ci).toContain('node scripts/assert-observatory-history-extension.mjs /tmp/observatory-baseline.json');
		expect(health).toContain("cron: '17 6 * * 1'");
		expect(health).toContain('contents: read');
		expect(health).toContain("failure() && hashFiles('source-health-report.json') != ''");
		expect(health).not.toContain('secrets.');
	});

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

	it('converges Apache before activation and rolls back a failed public smoke', () => {
		const convergence = 'sudo -n /usr/local/sbin/compatair-converge-mcp-config';
		const switchMarker = 'ln -sfn "$release" "$current.next"';
		const publicSmoke = 'if ! run_public_smoke';
		const commitMarker = 'activation_pending=false';
		expect(deploy).toContain(convergence);
		expect(deploy.indexOf(convergence)).toBeLessThan(deploy.indexOf(switchMarker));
		expect(deploy).toContain('${COMPATAIR_DEPLOY_FAILPOINT:-} == public-smoke');
		expect(deploy.indexOf(publicSmoke, deploy.indexOf(switchMarker))).toBeLessThan(deploy.lastIndexOf(commitMarker));
		expect(deploy.indexOf('"$node_binary" "$seo_script"')).toBeLessThan(deploy.lastIndexOf(commitMarker));
		expect(deploy.indexOf('/bin/systemctl restart compatair-weekly-insights.timer')).toBeLessThan(deploy.lastIndexOf(commitMarker));
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
		expect(workflow).toContain('node scripts/smoke-live-http.mjs');
		expect(workflow).toContain('node scripts/verify-live-seo.mjs');
		expect(workflow).toContain('dist/data/release.json');
		expect(releaseRoute).toContain("'Cache-Control': 'no-store'");
		expect(apache).toContain('<LocationMatch "^/data/release\\.json$">');
		expect(apache).toContain('Header always set Cache-Control "no-store"');
		expect(apache).toContain('<Location "/api/v1/compatibility/receipts/verify">');
		expect(apache).toContain('LimitRequestBody 65536');
		expect(apache).toContain('ctl:ruleRemoveTargetById=930120;ARGS_NAMES:params.arguments.meta.ucp-agent.profile');
		expect(apache).toContain('ctl:ruleRemoveTargetById=931130;ARGS:params.arguments.meta.ucp-agent.profile');
		expect(deploy).toContain('scripts/smoke-live-http.mjs');
		expect(deploy).toContain('scripts/lib/markup-text.mjs');
		expect(workflow).toContain('install -m 644 server/*.mjs dist/_server/');
		expect(workflow).toMatch(/scripts\/lib\/live-seo-verification\.mjs \\\n\s+scripts\/lib\/markup-text\.mjs/);
	});

	it('redirects legacy sitemap aliases to the generated sitemap index', () => {
		const redirect = 'RewriteRule ^/(?:sitemap\\.xml|sitemap_index\\.xml)$ https://compatair.fr/sitemap-index.xml [R=301,L,NE]';
		expect(apache.split(redirect).length - 1).toBe(2);
		expect(liveSmoke).toContain("for (const alias of ['/sitemap.xml', '/sitemap_index.xml'])");
		expect(liveSmoke).toContain("'https://compatair.fr/sitemap-index.xml'");
	});

	it('proves the homepage video contract before accepting a release', () => {
		expect(liveSmoke).toContain('<video data-home-video controls');
		expect(liveSmoke).toContain('data-home-video-launch');
		expect(liveSmoke).toContain("media-src 'self'");
		expect(liveSmoke).toContain("Range: 'bytes=0-31'");
		expect(liveSmoke).toContain('response.status === 206');
		expect(liveSmoke).toContain("body.includes('ftyp')");
	});

	it('keeps the public browser boundary closed against script injection', () => {
		const publicCsp = apache.split('\n').find((line) => line.includes('Content-Security-Policy') && line.includes('script-src-attr')) ?? '';
		expect(publicCsp).toContain("default-src 'self'");
		expect(publicCsp).toContain("script-src 'self'");
		expect(publicCsp).toContain("script-src-attr 'none'");
		expect(publicCsp).toContain("object-src 'none'");
		expect(publicCsp).toContain("base-uri 'none'");
		expect(publicCsp).toContain("frame-ancestors 'none'");
		expect(publicCsp).toContain("media-src 'self'");
		expect(publicCsp).not.toContain("media-src 'none'");
		expect(publicCsp).not.toContain("script-src 'self' 'unsafe-inline'");
	});
});
