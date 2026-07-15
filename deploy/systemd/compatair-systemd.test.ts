import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const mcp = readFileSync(new URL('./compatair-mcp.service', import.meta.url), 'utf8');
const stats = readFileSync(new URL('./compatair-stats.service', import.meta.url), 'utf8');
const staging = readFileSync(new URL('./compatair-mcp-staging.service', import.meta.url), 'utf8');
const weekly = readFileSync(new URL('./compatair-weekly-insights.service', import.meta.url), 'utf8');
const weeklyTimer = readFileSync(new URL('./compatair-weekly-insights.timer', import.meta.url), 'utf8');

describe('systemd confinement', () => {
	it('binds the MCP service to loopback and denies private UCP egress targets', () => {
		expect(mcp).toContain('MCP_HOST=127.0.0.1');
		expect(mcp).toContain('IPAddressDeny=0.0.0.0/8 10.0.0.0/8 100.64.0.0/10 127.0.0.0/8');
		expect(mcp).toContain('192.168.0.0/16');
		expect(mcp).toContain('IPAddressDeny=::/128 64:ff9b::/96 64:ff9b:1::/48 100::/64 2001:2::/48 2001:10::/28 2001:db8::/32 fc00::/7 fe80::/10 ff00::/8');
		expect(mcp).not.toContain('IPAddressDeny=any');
		expect(mcp).toContain('IPAddressAllow=localhost');
		expect(mcp).toContain('SocketBindDeny=any');
		expect(mcp).toContain('SocketBindAllow=ipv4:tcp:8787');
		expect(mcp).toContain('RestrictAddressFamilies=AF_INET AF_INET6 AF_UNIX');
	});

	it('isolates process metadata and namespaces', () => {
		for (const service of [mcp, stats]) {
			expect(service).toContain('ProtectProc=invisible');
			expect(service).toContain('RestrictNamespaces=true');
			expect(service).toContain('KeyringMode=private');
			expect(service).toContain('RemoveIPC=true');
		}
	});

	it('keeps the established filesystem and privilege boundaries', () => {
		for (const service of [mcp, stats]) {
			expect(service).toContain('NoNewPrivileges=true');
			expect(service).toContain('ProtectSystem=strict');
			expect(service).toContain('ProtectHome=true');
		}
		expect(mcp).toContain('CapabilityBoundingSet=');
		expect(stats).toContain('CapabilityBoundingSet=');
		expect(mcp).toContain('StateDirectoryMode=0700');
	});

	it('isolates the drill service from production paths, port and state', () => {
		expect(staging).toContain('WorkingDirectory=/var/www/html/compatair-staging/current');
		expect(staging).toContain('MCP_PORT=8788');
		expect(staging).toContain('StateDirectory=compatair-staging');
		expect(staging).toContain('SocketBindAllow=ipv4:tcp:8788');
		expect(staging).not.toContain('/var/www/html/compatair/current');
		expect(staging).not.toContain('MCP_PORT=8787');
	});

	it('generates the weekly private report without network access or public output', () => {
		expect(weekly).toContain('RestrictAddressFamilies=AF_UNIX');
		expect(weekly).toContain('ReadWritePaths=/var/lib/compatair');
		expect(weekly).toContain('/var/lib/compatair/reports');
		expect(weekly).toContain('/current/_ops/generate-private-weekly-report.mjs');
		expect(weekly).toContain('ConditionPathExists=/var/www/html/compatair/current/_ops/generate-private-weekly-report.mjs');
		expect(weeklyTimer).toContain('OnCalendar=Mon *-*-* 06:15:00');
		expect(weeklyTimer).toContain('Persistent=true');
	});
});
