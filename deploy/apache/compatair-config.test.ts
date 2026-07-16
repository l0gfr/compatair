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
		const hiddenPathPattern = [...config.matchAll(/<LocationMatch "([^"]+)">([\s\S]*?)<\/LocationMatch>/g)]
			.find(([, pattern, body]) => pattern.includes('well-known/') && pattern.includes('security') && pattern.includes('ucp') && body.includes('Require all denied'))?.[1];
		expect(hiddenPathPattern).toBeDefined();
		const hiddenPath = new RegExp(hiddenPathPattern!);
		expect(hiddenPath.test('/.env')).toBe(true);
		expect(hiddenPath.test('/nested/.git/config')).toBe(true);
		expect(hiddenPath.test('/.well-known/anything-else')).toBe(true);
		expect(hiddenPath.test('/.well-known/security.txt/')).toBe(true);
		expect(hiddenPath.test('/.well-known/security.txt')).toBe(false);
		expect(hiddenPath.test('/.well-known/ucp/')).toBe(true);
		expect(hiddenPath.test('/.well-known/ucp')).toBe(false);
		expect(config.match(/Require all denied/g)?.length).toBeGreaterThanOrEqual(2);
	});

	it('caps request metadata and bodies at the reverse proxy', () => {
		expect(config).toContain('LimitRequestLine 2048');
		expect(config).toContain('LimitRequestFields 50');
		expect(config.match(/LimitRequestBody 65536/g)).toHaveLength(4);
		expect(config).toContain('<Location "/api/v1/compatibility/receipts/verify">');
	});

	it('excludes only the MCP UCP profile field from the conflicting LFI and RFI rules', () => {
		const mcpLocation = config.match(
			/<Location "\/mcp">([\s\S]*?)<\/Location>/,
		)?.[1];
		expect(mcpLocation).toBeDefined();
		expect(mcpLocation).toContain('LimitRequestBody 65536');
		expect(mcpLocation).not.toContain('SecRule');
		expect(config).toContain('<IfModule security2_module>');
		expect(config).toContain('SecRule REQUEST_URI "@streq /mcp"');
		expect(config).toContain('id:1001001');
		expect(config).toContain('id:1001002');
		expect(config).toContain('phase:1,pass,t:none,nolog');
		expect(config).toContain(
			'ctl:ruleRemoveTargetById=930120;ARGS_NAMES:params.arguments.meta.ucp-agent.profile',
		);
		expect(config).toContain(
			'ctl:ruleRemoveTargetById=931130;ARGS:params.arguments.meta.ucp-agent.profile',
		);
		expect(config).not.toContain('ctl:ruleRemoveById');
		expect(config).not.toContain('SecRuleEngine Off');
		expect(config.indexOf('id:1001001')).toBeLessThan(config.indexOf('ProxyPass /mcp '));
		expect(config.match(/ruleRemoveTargetById=930120/g)).toHaveLength(1);
		expect(config.match(/ruleRemoveTargetById=931130/g)).toHaveLength(1);
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

	it('publishes only read-only APIs, machine contracts and the widget as cross-origin resources', () => {
		expect(config).toContain('ProxyPass /api/v1/compatibility');
		expect(config).toContain('ProxyPass /api/v1/search');
		expect(config).toContain('ProxyPass /api/v1/evidence');
		expect(config).toContain('ProxyPass /api/v1/changefeed');
		expect(config).toContain('ProxyPass /api/ucp/v1/compatibility/evaluate');
		expect(config).toContain('<LocationMatch "^/api/v1/(?:compatibility|search|evidence|changefeed)$">');
		expect(config).toContain('<LocationMatch "^/widget/(?:v1|v1\\.0\\.0)/compatair-widget\\.js$">');
		expect(config.match(/Cross-Origin-Resource-Policy "cross-origin"/g)).toHaveLength(3);
	});

	it('never caches computed UCP decisions', () => {
		const ucpDecision = config.match(
			/<Location "\/api\/ucp\/v1\/compatibility\/evaluate">([\s\S]*?)<\/Location>/,
		)?.[1];
		expect(ucpDecision).toBeDefined();
		expect(ucpDecision).toContain('LimitRequestBody 65536');
		expect(ucpDecision).toContain('Header onsuccess unset Cache-Control');
		expect(ucpDecision).toContain('Header always unset Cache-Control');
		expect(ucpDecision).toContain('Header always set Cache-Control "no-store"');
	});

	it('routes the retired compatibility namespace through the validated migration handler', () => {
		expect(config).toContain('ProxyPass /compatibilite/ http://127.0.0.1:8787/compatibilite/');
		expect(config).toContain('ProxyPassReverse /compatibilite/ http://127.0.0.1:8787/compatibilite/');
		expect(config).toContain('RewriteRule ^compatibilite$ - [R=410,L]');
		expect(config.indexOf('ProxyPass /compatibilite/')).toBeLessThan(config.indexOf('ProxyPass /api/v1/compatibility'));
		const compatibilityRedirects = config.match(
			/<LocationMatch "\^\/compatibilite\/">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(compatibilityRedirects).toContain('Header onsuccess unset Cache-Control');
		expect(compatibilityRedirects).toContain('Header always unset Cache-Control');
		expect(compatibilityRedirects).toContain('Header always set Cache-Control "public, max-age=86400"');
	});

	it('reserves immutable caching for fingerprinted build assets and the versioned widget', () => {
		expect(assetsDirectory).toBeDefined();
		expect(config).toContain(`^/(?:${assetsDirectory}/[^/]+|widget/v1\\.0\\.0/compatair-widget\\.js)$`);
		const immutableAssets = [...config.matchAll(/<LocationMatch "([^"]+)">([\s\S]*?)<\/LocationMatch>/g)]
			.find(([, pattern]) => pattern.includes(`${assetsDirectory}/[^/]+`) && pattern.includes('widget/v1\\.0\\.0'))?.[2];
		expect(immutableAssets).toContain('Cache-Control "public, max-age=31536000, immutable"');
		expect(config).toContain('^/widget/v1/compatair-widget\\.js$');
		const mutableAlias = config.match(
			/<LocationMatch "\^\/widget\/v1\/compatair-widget\\\.js\$">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(mutableAlias).toContain('Cache-Control "no-cache"');
		expect(mutableAlias).not.toContain('immutable');
	});

	it('keeps stable images revalidatable instead of immutable', () => {
		const stableImages = [...config.matchAll(/<LocationMatch "([^"]+)">([\s\S]*?)<\/LocationMatch>/g)]
			.find(([, pattern]) => pattern.includes('images/products/') && pattern.includes('social/') && pattern.includes('favicon'))?.[2];
		expect(stableImages).toContain('Cache-Control "public, max-age=86400, stale-while-revalidate=604800"');
		expect(stableImages).not.toContain('immutable');
		expect(config).not.toContain('<FilesMatch "\\.(?:css|svg|png|jpg|jpeg|webp|avif|woff2)$">');
	});

	it('keeps public JSON out of search results without changing snapshot freshness', () => {
		const publicJson = [...config.matchAll(/<LocationMatch "([^"]+)">([\s\S]*?)<\/LocationMatch>/g)]
			.find(([, pattern]) => pattern.includes('jsonld') && pattern.includes('openapi'))?.[2];
		expect(publicJson).toContain('Header always set X-Robots-Tag "noindex"');
		expect(publicJson).toContain('Header always set Access-Control-Allow-Origin "*"');
		expect(publicJson).toContain('Cache-Control "public, max-age=300"');
		const shortLivedSnapshots = config.match(
			/<LocationMatch "\^\/data\/\(\?:catalog\|offers\)\\\.json\$">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(shortLivedSnapshots).toContain('Cache-Control "public, max-age=300"');
		expect(shortLivedSnapshots).not.toContain('immutable');
	});

	it('normalizes proxied API headers before exposing them cross-origin', () => {
		const apiLocation = config.match(
			/<LocationMatch "\^\/api\/v1\/\(\?:compatibility\|search\|evidence\|changefeed\)\$">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(apiLocation).toBeDefined();
		for (const header of [
			'Access-Control-Allow-Origin',
			'Cross-Origin-Resource-Policy',
		]) {
			expect(apiLocation).toContain(`Header always unset ${header}`);
			expect(apiLocation?.indexOf(`Header always unset ${header}`)).toBeLessThan(
				apiLocation?.indexOf(`Header always set ${header}`) ?? -1,
			);
		}
	});

	it('normalizes nosniff once for static and proxied responses', () => {
		expect(config.match(/Header onsuccess unset X-Content-Type-Options/g)).toHaveLength(1);
		expect(config.match(/Header always unset X-Content-Type-Options/g)).toHaveLength(1);
		expect(config.match(/Header always set X-Content-Type-Options "nosniff"/g)).toHaveLength(1);
		expect(config.indexOf('Header always unset X-Content-Type-Options')).toBeLessThan(
			config.indexOf('Header always set X-Content-Type-Options "nosniff"'),
		);
	});

	it('preserves privacy and freshness headers on affiliate redirects', () => {
		const affiliateRedirects = config.match(
			/<LocationMatch "\^\/go\/">([\s\S]*?)<\/LocationMatch>/,
		)?.[1];
		expect(affiliateRedirects).toBeDefined();
		expect(affiliateRedirects).toContain('Header always set Cache-Control "no-store"');
		expect(affiliateRedirects).toContain('Header always set Referrer-Policy "no-referrer"');
		expect(affiliateRedirects).toContain('Header always set X-Robots-Tag "noindex, nofollow"');
		for (const header of ['Cache-Control', 'Referrer-Policy', 'X-Robots-Tag']) {
			expect(affiliateRedirects).toContain(`Header always unset ${header}`);
			expect(affiliateRedirects?.indexOf(`Header always unset ${header}`)).toBeLessThan(
				affiliateRedirects?.indexOf(`Header always set ${header}`) ?? -1,
			);
		}
	});
});
