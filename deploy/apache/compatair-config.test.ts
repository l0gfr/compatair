import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const config = readFileSync(
	new URL('./compatair.fr.conf.example', import.meta.url),
	'utf8',
);

describe('CompatAir Apache CSP', () => {
	it('isolates the private statistics policy from the public site policy', () => {
		expect(config).toContain('Header onsuccess unset Content-Security-Policy');
		expect(config).toContain('Header always unset Content-Security-Policy');
		expect(config).toContain('"expr=%{REQUEST_URI} !~ m#^/stats/#"');
	});

	it('allows only the inline and embedded assets required by GoAccess', () => {
		expect(config).toContain("font-src 'self' data:");
		expect(config).toContain(
			"script-src 'self' 'unsafe-inline' 'unsafe-eval'",
		);
		expect(config).toContain("connect-src 'none'");
		expect(config).toContain("object-src 'none'");
		expect(config).toContain("frame-ancestors 'none'");
	});

	it('blocks executable release internals and hidden paths', () => {
		expect(config).toContain('^/(?:_server)(?:/|$)');
		expect(config).toContain('(?:^|/)\\.');
		expect(config.match(/Require all denied/g)?.length).toBeGreaterThanOrEqual(2);
	});

	it('caps request metadata and bodies at the reverse proxy', () => {
		expect(config).toContain('LimitRequestLine 2048');
		expect(config).toContain('LimitRequestFields 50');
		expect(config.match(/LimitRequestBody 65536/g)).toHaveLength(2);
	});

	it('sets browser isolation and disables script attributes', () => {
		expect(config).toContain('Cross-Origin-Opener-Policy "same-origin"');
		expect(config).toContain('Cross-Origin-Resource-Policy "same-origin"');
		expect(config).toContain("script-src-attr 'none'");
	});
});
