import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const deploy = readFileSync(new URL('./deploy-remote.sh', import.meta.url), 'utf8');
const rollback = readFileSync(new URL('./rollback-remote.sh', import.meta.url), 'utf8');
const workflow = readFileSync(new URL('../.github/workflows/deploy-production.yml', import.meta.url), 'utf8');

describe('release boundary policy', () => {
	it('pins deployment and rollback to the dedicated CompatAir root', () => {
		for (const source of [deploy, rollback, workflow]) expect(source).toContain('/var/www/html/compatair');
		expect(deploy).not.toContain('^/var/www/html/[A-Za-z0-9._/-]+$');
		expect(rollback).not.toContain('^/var/www/html/[A-Za-z0-9._/-]+$');
	});

	it('restarts and verifies the MCP service after a rollback', () => {
		expect(rollback).toContain('systemctl restart compatair-mcp.service');
		expect(rollback).toContain('http://127.0.0.1:8787/health');
	});
});
