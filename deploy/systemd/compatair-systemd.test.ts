import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const mcp = readFileSync(new URL('./compatair-mcp.service', import.meta.url), 'utf8');
const stats = readFileSync(new URL('./compatair-stats.service', import.meta.url), 'utf8');

describe('systemd confinement', () => {
	it('limits the MCP service to loopback traffic', () => {
		expect(mcp).toContain('MCP_HOST=127.0.0.1');
		expect(mcp).toContain('IPAddressDeny=any');
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
});
