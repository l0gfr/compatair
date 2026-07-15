import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const config = readFileSync(
	new URL('./compatair.fr.conf.example', import.meta.url),
	'utf8',
);
const astroConfig = readFileSync(
	new URL('../../astro.config.mjs', import.meta.url),
	'utf8',
);
const assetsDirectory = astroConfig.match(/assets:\s*['"]([^'"]+)['"]/)?.[1];

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
		expect(config).toContain('Header onsuccess unset X-XSS-Protection');
		expect(config).toContain('Header always unset X-XSS-Protection');
		expect(config).toContain('X-XSS-Protection "0"');
		expect(config).toContain("script-src-attr 'none'");
		expect(config).toContain("base-uri 'none'");
		expect(config).toContain("img-src 'self' data: blob:");
		expect(config).toContain('Permissions-Policy "camera=(self)');
	});

	it('publishes only the read-only API and widget as cross-origin resources', () => {
		expect(config).toContain('ProxyPass /api/v1/compatibility');
		expect(config).toContain('<Location "/api/v1/compatibility">');
		expect(config).toContain('<LocationMatch "^/widget/(?:v1|v1\\.0\\.0)/compatair-widget\\.js$">');
		expect(config.match(/Cross-Origin-Resource-Policy "cross-origin"/g)).toHaveLength(2);
	});

	it('routes the retired compatibility namespace through the validated migration handler', () => {
		expect(config).toContain('ProxyPass /compatibilite/ http://127.0.0.1:8787/compatibilite/');
		expect(config).toContain('ProxyPassReverse /compatibilite/ http://127.0.0.1:8787/compatibilite/');
		expect(config).toContain('RewriteRule ^compatibilite$ - [R=410,L]');
		expect(config.indexOf('ProxyPass /compatibilite/')).toBeLessThan(config.indexOf('ProxyPass /api/v1/compatibility'));
	});

	it('reserves immutable caching for versioned or hashed JavaScript', () => {
		expect(assetsDirectory).toBeDefined();
		const escapedAssetsDirectory = assetsDirectory!.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
		expect(config).toContain(`^/(?:${escapedAssetsDirectory}/[^/]+\\.js|widget/v1\\.0\\.0/compatair-widget\\.js)$`);
		expect(config).toContain('^/widget/v1/compatair-widget\\.js$');
		const mutableAlias = config.match(
			/<LocationMatch "\^\/widget\/v1\/compatair-widget\\\.js\$">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(mutableAlias).toContain('Cache-Control "no-cache"');
		expect(mutableAlias).not.toContain('immutable');
	});

	it('normalizes proxied API headers before exposing them cross-origin', () => {
		const apiLocation = config.match(
			/<Location "\/api\/v1\/compatibility">([\s\S]*?)<\/Location>/,
		)?.[1];
		expect(apiLocation).toBeDefined();
		for (const header of [
			'Access-Control-Allow-Origin',
			'Cross-Origin-Resource-Policy',
			'X-Content-Type-Options',
		]) {
			expect(apiLocation).toContain(`Header always unset ${header}`);
			expect(apiLocation?.indexOf(`Header always unset ${header}`)).toBeLessThan(
				apiLocation?.indexOf(`Header always set ${header}`) ?? -1,
			);
		}
	});
});
