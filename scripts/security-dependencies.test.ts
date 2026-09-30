import { execFileSync } from 'node:child_process';
import { describe, it } from 'vitest';

// Resolve through the installed consumers, so a stale transitive copy also fails.
function checkInstalledDependency(consumerEntry: string, chain: string[], dependency: string, assertions: string) {
	const source = `
		import assert from 'node:assert/strict';
		import { createRequire } from 'node:module';
		import { pathToFileURL } from 'node:url';
		const root = createRequire(pathToFileURL(process.cwd() + '/package.json'));
		let requester = createRequire(root.resolve(${JSON.stringify(consumerEntry)}));
		for (const name of ${JSON.stringify(chain)}) requester = createRequire(requester.resolve(name));
		const library = requester(${JSON.stringify(dependency)});
		${assertions}
	`;
	execFileSync(process.execPath, ['--max-old-space-size=128', '--input-type=module', '--eval', source], {
		timeout: 5_000,
		stdio: 'pipe',
	});
}

describe('installed dependency security boundaries', () => {
	it('bounds nested, repeated and wide brace groups without losing ordinary expansion', () => {
		checkInstalledDependency('@lhci/cli/package.json', ['chrome-launcher', 'rimraf', 'glob', 'minimatch'], 'brace-expansion', `
			const { expand } = library;
			assert.deepEqual(expand('src/{a,b}.md'), ['src/a.md', 'src/b.md']);
			const patterns = [
				'{a,'.repeat(4_000) + 'z' + '}'.repeat(4_000),
				'{'.repeat(3_200) + 'a,b' + '}'.repeat(3_200),
				'{' + '{a},'.repeat(8_000) + 'b}',
				'{{x},' + 'a,'.repeat(125_000) + 'b}',
				'{a}' + '}'.repeat(64_000) + ',z}',
			];
			for (const pattern of patterns) {
				const result = expand(pattern, { max: 10, maxLength: 1_024 });
				assert.ok(Array.isArray(result));
				assert.ok(result.length <= 10);
			}
		`);
	});

	it('normalizes percent-encoded uppercase hosts in scheme-relative URIs', () => {
		checkInstalledDependency('@astrojs/check', ['@astrojs/language-server', 'volar-service-yaml', 'yaml-language-server', 'ajv'], 'fast-uri', `
			assert.equal(library.parse('//%41.com').host, 'a.com');
			assert.equal(library.equal('//%41.com', '//a.com'), true);
			assert.equal(library.parse('https://EXAMPLE.com/schema').host, 'example.com');
		`);
	});

	it('rejects cross-family subnet matches and bounds oversized IPv6 diagnostics', () => {
		checkInstalledDependency('@lhci/cli/package.json', ['proxy-agent', 'pac-proxy-agent', 'socks-proxy-agent', 'socks'], 'ip-address', `
			const { Address4, Address6, AddressError } = library;
			assert.equal(new Address6('a00::1').isInSubnet(new Address4('10.0.0.0/8')), false);
			assert.equal(new Address4('32.0.0.1').isInSubnet(new Address6('2000::/3')), false);
			assert.equal(new Address4('10.1.2.3').isInSubnet(new Address4('10.0.0.0/8')), true);
			assert.equal(new Address6('2001:db8::1').isInSubnet(new Address6('2001:db8::/32')), true);
			assert.throws(() => new Address6('!'.repeat(1_048_576)), error =>
				error instanceof AddressError && error.message.length < 512 && (error.parseMessage?.length ?? 0) < 512);
			assert.equal(Address6.isValid('!'.repeat(1_048_576)), false);
		`);
	});
});
