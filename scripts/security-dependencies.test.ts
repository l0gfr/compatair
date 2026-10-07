import { execFileSync } from 'node:child_process';
import { describe, it } from 'vitest';

// Resolve through the installed consumers, so a stale transitive copy also fails.
function checkInstalledDependency(consumerEntry: string, chain: string[], dependency: string, assertions: string) {
	const source = `
		import assert from 'node:assert/strict';
		import { readFileSync } from 'node:fs';
		import { createRequire } from 'node:module';
		import { dirname, join } from 'node:path';
		import { pathToFileURL } from 'node:url';
		const root = createRequire(pathToFileURL(process.cwd() + '/package.json'));
		let requester = createRequire(root.resolve(${JSON.stringify(consumerEntry)}));
		for (const name of ${JSON.stringify(chain)}) requester = createRequire(requester.resolve(name));
		const library = requester(${JSON.stringify(dependency)});
		const installedVersion = name => {
			let directory = dirname(requester.resolve(name));
			while (directory !== dirname(directory)) {
				try {
					const manifest = JSON.parse(readFileSync(join(directory, 'package.json'), 'utf8'));
					if (manifest.name === name) return manifest.version;
				} catch (error) {
					if (error?.code !== 'ENOENT') throw error;
				}
				directory = dirname(directory);
			}
			throw new Error('Unable to locate installed package manifest: ' + name);
		};
		${assertions}
	`;
	execFileSync(process.execPath, ['--max-old-space-size=128', '--input-type=module', '--eval', source], {
		timeout: 5_000,
		stdio: 'pipe',
	});
}

describe('installed dependency security boundaries', () => {
	it('preserves restrictions and quoted extensions through cargo serialization and 304 updates', () => {
		checkInstalledDependency('astro', [], 'http-cache-semantics', `
			const request = { url: 'https://example.test/image', method: 'GET', headers: { host: 'example.test' } };
			const incoming = { ...request, headers: { ...request.headers, 'cache-control': 'max-stale=999999' } };
			const results = [];
			const protectedCache = policy => {
				policy.now = () => policy._responseTime + 1000;
				return [policy.evaluateRequest(incoming).response === undefined, policy.timeToLive(), policy.revalidatedPolicy(request, { status: 503, headers: {} }).modified];
			};
			const cargo = new library(request, { status: 200, headers: { 'cache-control': 'max-age=600, extension="literal, public", pre-check=0, post-check=0', 'set-cookie': 'fixture=synthetic' } }, { ignoreCargoCult: true });
			results.push(protectedCache(cargo), protectedCache(library.fromObject(JSON.parse(JSON.stringify(cargo.toObject())))));
			const pragma = new library(request, { status: 200, headers: { 'cache-control': null, pragma: 'no-cache' } });
			results.push(protectedCache(pragma), protectedCache(library.fromObject(JSON.parse(JSON.stringify(pragma.toObject())))));
			for (const headers of [{ 'cache-control': 'private, max-age=600, stale-if-error=600' }, { 'cache-control': 'No-Cache, max-age=600, stale-if-error=600' }, { 'set-cookie': 'fixture=synthetic' }, { 'cache-control': 's-maxage=0, stale-if-error=600' }]) {
				const original = new library(request, { status: 200, headers: { etag: '"fixture-v1"' } });
				const updated = original.revalidatedPolicy(request, { status: 304, headers: { etag: '"fixture-v1"', ...headers } });
				assert.equal(updated.matches, true);
				assert.equal(updated.modified, false);
				results.push(protectedCache(updated.policy));
			}
			assert.deepEqual(results, Array(8).fill([true, 0, true]));
			const ordinary = new library(request, { status: 200, headers: { 'cache-control': 'public, extension="literal, private", max-age=600, pre-check=0, post-check=0' } }, { ignoreCargoCult: true });
			for (const policy of [ordinary, library.fromObject(JSON.parse(JSON.stringify(ordinary.toObject())))]) {
				policy.now = () => policy._responseTime + 1000;
				assert.notEqual(policy.evaluateRequest(request).response, undefined);
				assert.equal(policy.timeToLive(), 599000);
			}
			const original = new library(request, { status: 200, headers: { etag: '"fixture-v1"', 'content-length': '70' } });
			const refreshed = original.revalidatedPolicy(request, { status: 304, headers: { etag: '"fixture-v1"', 'cache-control': 'public, max-age=600', 'content-length': '0', 'x-fixture': 'synthetic' } }).policy;
			assert.notEqual(refreshed.evaluateRequest(request).response, undefined);
			assert.equal(refreshed.responseHeaders()['content-length'], '70');
			assert.equal(refreshed.responseHeaders()['x-fixture'], 'synthetic');
			const userA = { ...request, headers: { ...request.headers, cookie: 'fixture=A' } };
			const userB = { ...incoming, headers: { ...incoming.headers, cookie: 'fixture=B' } };
			const varied = original.revalidatedPolicy(userA, { status: 304, headers: { etag: '"fixture-v1"', vary: 'cookie' } }).policy;
			assert.equal(varied.evaluateRequest(userB).response, undefined);
		`);
	});

	it('enforces cache restrictions across directive case, empty values and legacy serialized maps', () => {
		checkInstalledDependency('astro', [], 'http-cache-semantics', `
			const request = { url: 'https://example.test/image', method: 'GET', headers: { host: 'example.test' } };
			for (const directive of ['No-Cache', 'Private', 'No-Store', 'Proxy-Revalidate', 'Must-Revalidate', 'S-Maxage=0', 'no-cache=""', 'private=""', 'no-store=""', 'proxy-revalidate=""', 'must-revalidate=""', 's-maxage=""']) {
				const original = new library(request, { status: 200, headers: { 'cache-control': 'max-age=0, ' + directive + ', stale-while-revalidate=600, stale-if-error=600' } });
				const legacy = JSON.parse(JSON.stringify(original.toObject()));
				delete legacy.resh['cache-control'];
				const [name, rawValue] = directive.split('=', 2);
				legacy.rescc = { 'max-age': '0', 'stale-while-revalidate': '600', 'stale-if-error': '600', [name]: rawValue === undefined ? true : rawValue.replaceAll('"', '') };
				for (const policy of [original, library.fromObject(JSON.parse(JSON.stringify(original.toObject()))), library.fromObject(legacy)]) {
					policy.now = () => policy._responseTime + 1000;
					const incoming = { ...request, headers: { ...request.headers, 'cache-control': 'MAX-STALE=999999' } };
					assert.equal(policy.satisfiesWithoutRevalidation(incoming), false, directive);
					assert.equal(policy.evaluateRequest(incoming).response, undefined, directive);
					assert.equal(policy.timeToLive(), 0, directive);
					assert.equal(policy.useStaleWhileRevalidate(), false, directive);
					assert.equal(policy.revalidatedPolicy(incoming, { status: 503, headers: {} }).modified, true, directive);
				}
			}
			for (const directive of ['public=""', 'immutable=""', 'public=synthetic', 'immutable=synthetic', 'public="", public', 'public, public=""', 'IMMUTABLE=synthetic, immutable', 'extension="synthetic, public, synthetic"', 'extension="synthetic, immutable, synthetic"', 'public, extension="unterminated']) {
				const policy = new library(request, { status: 200, headers: { 'cache-control': directive + ', max-age=600, stale-if-error=600', 'set-cookie': 'fixture=synthetic' } });
				assert.equal(policy.evaluateRequest(request).response, undefined, directive);
				assert.equal(policy.timeToLive(), 0, directive);
				const legacy = JSON.parse(JSON.stringify(policy.toObject()));
				legacy.rescc.public = true;
				const restored = library.fromObject(legacy);
				assert.equal(restored.evaluateRequest(request).response, undefined, directive);
				assert.equal(restored.timeToLive(), 0, directive);
			}
			const cookie = new library(request, { status: 200, headers: { 'cache-control': 'max-age=600', 'set-cookie': 'fixture=synthetic' } });
			for (const shared of [undefined, null, 0, 'false', true]) {
				const legacy = JSON.parse(JSON.stringify(cookie.toObject()));
				legacy.sh = shared;
				const restored = library.fromObject(legacy);
				assert.equal(restored.evaluateRequest(request).response, undefined);
				assert.equal(restored.timeToLive(), 0);
			}
			const duplicateRestriction = new library(request, { status: 200, headers: { 'cache-control': 'max-age=600, no-cache, No-Cache="", stale-if-error=600' } });
			assert.equal(duplicateRestriction.evaluateRequest(request).response, undefined);
			const ordinary = new library(request, { status: 200, headers: { 'cache-control': 'PUBLIC, MAX-AGE=60' } });
			ordinary.now = () => ordinary._responseTime + 1000;
			for (const directive of ['No-Cache', 'no-cache=""']) {
				assert.equal(ordinary.evaluateRequest({ ...request, headers: { ...request.headers, 'cache-control': directive } }).response, undefined);
			}
			assert.notEqual(ordinary.evaluateRequest(request).response, undefined);
			assert.equal(ordinary.timeToLive(), 59000);
		`);
	});

	it('requires validation for protected cache entries across stale directives and serialized state', () => {
		checkInstalledDependency('astro', [], 'http-cache-semantics', `
			const request = { url: 'https://example.test/image', method: 'GET', headers: { host: 'example.test' } };
			const restrictions = [
				{ 'set-cookie': 'fixture-session=synthetic' },
				{ 'cache-control': 'max-age=0, proxy-revalidate' },
				{ 'cache-control': 'max-age=0, no-cache' },
				{ 'cache-control': 'max-age=0, private' },
				{ 'cache-control': 'max-age=0, no-store' },
			];
			for (const restriction of restrictions) {
				const headers = { 'cache-control': 'max-age=0', ...restriction };
				headers['cache-control'] += ', stale-while-revalidate=600, stale-if-error=600';
				const original = new library(request, { status: 200, headers });
				const restored = library.fromObject(JSON.parse(JSON.stringify(original.toObject())));
				for (const policy of [original, restored]) {
					policy.now = () => policy._responseTime + 1000;
					for (const directive of ['max-stale', 'max-stale=999999', 'max-stale="999999"']) {
						const incoming = { ...request, headers: { ...request.headers, 'cache-control': directive } };
						assert.equal(policy.satisfiesWithoutRevalidation(incoming), false);
						const result = policy.evaluateRequest(incoming);
						assert.equal(result.response, undefined);
						assert.equal(result.revalidation.synchronous, true);
					}
					assert.equal(policy.evaluateRequest(request).response, undefined);
					assert.equal(policy.timeToLive(), 0);
					assert.equal(policy.useStaleWhileRevalidate(), false);
					assert.equal(policy.revalidatedPolicy(request, { status: 503, headers: {} }).modified, true);
					assert.throws(() => policy.revalidatedPolicy(request), /Response headers missing/);
				}
			}
		`);
	});

	it('preserves ordinary stale caches, explicit cookie sharing, private caches and 304 revalidation', () => {
		checkInstalledDependency('astro', [], 'http-cache-semantics', `
			const request = { url: 'https://example.test/image', method: 'GET', headers: { host: 'example.test' } };
			const incoming = { ...request, headers: { ...request.headers, 'cache-control': 'max-stale=30' } };
			for (const [headers, options] of [
				[{ 'cache-control': 'public, max-age=0' }, {}],
				[{ 'cache-control': 'public, max-age=0', 'set-cookie': 'fixture=synthetic' }, {}],
				[{ 'cache-control': 'PUBLIC, MAX-AGE=0', 'set-cookie': 'fixture=synthetic' }, {}],
				[{ 'cache-control': 'public, extension="literal, private", max-age=0', 'set-cookie': 'fixture=synthetic' }, {}],
				[{ 'cache-control': 'immutable, max-age=1', 'set-cookie': 'fixture=synthetic' }, {}],
				[{ 'cache-control': 'private, max-age=0', 'set-cookie': 'fixture=synthetic' }, { shared: false }],
			]) {
				const policy = new library(request, { status: 200, headers }, options);
				policy.now = () => policy._responseTime + 2000;
				assert.equal(policy.satisfiesWithoutRevalidation(incoming), true);
			}
			const policy = new library(request, { status: 200, headers: { 'cache-control': 'public, max-age=0, stale-while-revalidate=600, stale-if-error=600', etag: '"fixture-v1"' } });
			policy.now = () => policy._responseTime + 1000;
			assert.equal(policy.evaluateRequest(request).revalidation.synchronous, false);
			assert.ok(policy.timeToLive() > 0);
			assert.equal(policy.revalidatedPolicy(request, { status: 503, headers: {} }).modified, false);
			const validated = policy.revalidatedPolicy(request, { status: 304, headers: { etag: '"fixture-v1"', 'cache-control': 'public, max-age=60' } });
			assert.equal(validated.modified, false);
			assert.equal(validated.matches, true);
			assert.equal(validated.policy.satisfiesWithoutRevalidation(request), true);
			const mandatory = new library(request, { status: 200, headers: { 'cache-control': 'max-age=60, must-revalidate, stale-while-revalidate=600, stale-if-error=600' } });
			assert.ok(mandatory.timeToLive() > 0);
			mandatory.now = () => mandatory._responseTime + 61000;
			assert.equal(mandatory.evaluateRequest(incoming).response, undefined);
			assert.equal(mandatory.useStaleWhileRevalidate(), false);
			assert.equal(mandatory.revalidatedPolicy(request, { status: 503, headers: {} }).modified, true);
			assert.equal(mandatory.timeToLive(), 0);
			assert.throws(() => policy.evaluateRequest({}), /Request headers missing/);
		`);
	});

	it('limits shared s-maxage and must-revalidate entries to their fresh lifetime', () => {
		checkInstalledDependency('astro', [], 'http-cache-semantics', `
			const request = { url: 'https://example.test/image', method: 'GET', headers: { host: 'example.test', authorization: 'Bearer synthetic-A' } };
			const incoming = { ...request, headers: { ...request.headers, authorization: 'Bearer synthetic-B', 'cache-control': 'max-stale=999999' } };
			for (const lifetime of [0, 60]) {
				const original = new library(request, { status: 200, headers: { 'cache-control': 's-maxage=' + lifetime + ', stale-while-revalidate=600, stale-if-error=600' } });
				for (const policy of [original, library.fromObject(original.toObject())]) {
					policy.now = () => policy._responseTime + 1000;
					assert.equal(policy.storable(), true);
					assert.equal(policy.maxAge(), lifetime);
					if (lifetime > 0) {
						assert.equal(policy.satisfiesWithoutRevalidation(incoming), true);
						assert.equal(policy.timeToLive(), (lifetime - 1) * 1000);
					}
					policy.now = () => policy._responseTime + (lifetime + 1) * 1000;
					assert.equal(policy.satisfiesWithoutRevalidation(incoming), false);
					assert.equal(policy.evaluateRequest(incoming).response, undefined);
					assert.equal(policy.useStaleWhileRevalidate(), false);
					assert.equal(policy.revalidatedPolicy(incoming, { status: 503, headers: {} }).modified, true);
					assert.equal(policy.timeToLive(), 0);
				}
			}
			const privateCache = new library(request, { status: 200, headers: { 'cache-control': 'max-age=0, s-maxage=60, stale-if-error=600' } }, { shared: false });
			privateCache.now = () => privateCache._responseTime + 1000;
			assert.equal(privateCache.satisfiesWithoutRevalidation(incoming), true);
			assert.equal(privateCache.revalidatedPolicy(incoming, { status: 503, headers: {} }).modified, false);
		`);
	});

	it('loads equivalent Lighthouse JSON and YAML configs without the vulnerable sprintf-js chain', () => {
		checkInstalledDependency('@lhci/cli/package.json', [], '@lhci/utils/src/lighthouserc.js', `
			const { mkdtempSync, rmSync, writeFileSync } = await import('node:fs');
			const { tmpdir } = await import('node:os');
			const directory = mkdtempSync(join(tmpdir(), 'compatair-lhci-config-'));
			try {
				const jsonPath = join(directory, 'lighthouserc.json');
				const yamlPath = join(directory, 'lighthouserc.yaml');
				writeFileSync(jsonPath, JSON.stringify({ ci: { collect: { numberOfRuns: 3 } } }));
				writeFileSync(yamlPath, 'ci:\\n  collect:\\n    numberOfRuns: 3\\n');
				assert.equal(library.loadRcFile(jsonPath).ci.collect.numberOfRuns, 3);
				assert.equal(library.loadRcFile(yamlPath).ci.collect.numberOfRuns, 3);
				assert.equal(installedVersion('js-yaml'), '4.3.2');
				assert.throws(() => requester.resolve('sprintf-js'), /Cannot find module/);
			} finally {
				rmSync(directory, { recursive: true, force: true });
			}
		`);
	});

	it('uses fixed dependency versions and rejects spoofed proxy ranges and oversized source-map offsets', () => {
		checkInstalledDependency('@lhci/cli/package.json', ['express'], 'proxy-addr', `
			assert.equal(installedVersion('proxy-addr'), '2.0.8');
			assert.equal(library.compile(['::ffff:10.0.0.0/8'])('203.0.113.1'), false);
			assert.equal(library.compile(['::ffff:10.0.0.0/104'])('10.1.2.3'), true);
		`);
		checkInstalledDependency('astro', ['magicast'], 'source-map-js', `
			assert.equal(installedVersion('source-map-js'), '1.2.2');
			const indexed = { version: 3, sections: [{ offset: { line: 10000001, column: 0 }, map: { version: 3, sources: [], names: [], mappings: '' } }] };
			assert.throws(() => new library.SourceMapConsumer(indexed), /must not exceed 10000000/);
		`);
		checkInstalledDependency('@lhci/cli/package.json', [], 'compression', `
			assert.equal(installedVersion('compression'), '1.8.2');
			assert.equal(typeof library, 'function');
		`);
		checkInstalledDependency('astro', [], 'smol-toml', `
			assert.equal(installedVersion('smol-toml'), '1.9.0');
			assert.equal(library.parse('fixture = 1').fixture, 1);
		`);
		checkInstalledDependency('astro', [], 'sharp', `
			assert.equal(installedVersion('sharp'), '0.35.5');
			assert.equal(library.versions.rsvg, '2.63.2');
		`);
	});

	it('serializes only visible Node Buffer bytes while preserving deliberate typed-array sharing', () => {
		checkInstalledDependency('astro', [], 'devalue', `
			const { runInNewContext } = await import('node:vm');
			const backing = new ArrayBuffer(64);
			new Uint8Array(backing).fill(81);
			const buffer = Buffer.from(backing, 13, 4);
			buffer.set([7, 8, 9, 10]);
			for (const view of [buffer, buffer.subarray(1, 3)]) {
				const values = [
					library.parse(library.stringify(view)),
					library.parse(await library.stringifyAsync(view)),
					runInNewContext(library.uneval(view), {}, { timeout: 500 }),
				];
				for (const restored of values) {
					assert.deepEqual(Array.from(restored), Array.from(view));
					assert.equal(restored.buffer.byteLength, view.byteLength);
					assert.equal(restored.byteOffset, 0);
				}
			}
			const shared = { first: new Uint8Array(backing, 13, 2), second: new DataView(backing, 15, 2) };
			const restored = library.parse(library.stringify(shared));
			assert.equal(restored.first.buffer, restored.second.buffer);
			assert.equal(restored.first.buffer.byteLength, 64);
			assert.equal(restored.first.byteOffset, 13);
			assert.equal(restored.second.byteOffset, 15);
			const ordinary = { date: new Date('2026-01-01T00:00:00Z'), map: new Map([['one', 1]]), set: new Set([2, 3]) };
			assert.deepEqual(library.parse(library.stringify(ordinary)), ordinary);
		`);
	});

	it('bounds repeated string and bigint output after parsing', () => {
		checkInstalledDependency('astro', [], 'devalue', `
			const { runInNewContext } = await import('node:vm');
			for (const primitive of ['x'.repeat(4096), BigInt('7'.repeat(4096))]) {
				const input = library.stringify(Array(512).fill(primitive));
				const output = library.uneval(library.parse(input));
				assert.ok(output.length < input.length * 4, 'repeated primitive must be shared in generated code');
				const restored = runInNewContext(output, {}, { timeout: 500 });
				assert.equal(restored.length, 512);
				assert.ok(Array.from(restored).every(value => value === primitive));
			}
		`);
	});

	it('handles an early promise rejection during asynchronous serialization', () => {
		checkInstalledDependency('astro', [], 'devalue', `
			const unhandled = [];
			const onUnhandled = reason => unhandled.push(reason);
			process.on('unhandledRejection', onUnhandled);
			try {
				const slow = new Promise(resolve => setTimeout(() => resolve('ok'), 50));
				const early = new Promise((_, reject) => setTimeout(() => reject(new Error('synthetic-rejection')), 5));
				await assert.rejects(library.stringifyAsync([slow, early]), /synthetic-rejection/);
				await new Promise(resolve => setTimeout(resolve, 100));
				assert.deepEqual(unhandled, []);
				assert.deepEqual(library.parse(await library.stringifyAsync([Promise.resolve('ok'), 42])), ['ok', 42]);
			} finally { process.off('unhandledRejection', onUnhandled); }
		`);
	});

	it('bounds malformed FTP listing parsing and preserves Unix, DOS and MLSD entries', () => {
		checkInstalledDependency('@lhci/cli/package.json', ['proxy-agent', 'pac-proxy-agent', 'get-uri'], 'basic-ftp', `
			const unix = '-rw-r--r-- 1 owner group 42 Jan 1 2020 file.txt';
			const malformed = '-rw-r--r-- 1 ' + 'a '.repeat(65_536) + '!';
			const files = library.parseList(malformed + '\\r\\n42 ' + malformed + '\\r\\n' + unix);
			assert.equal(files.length, 1);
			assert.equal(files[0].name, 'file.txt');
			assert.equal(files[0].size, 42);
			assert.equal(library.parseList('01-01-20  12:00PM  42 file.txt')[0].size, 42);
			const mlsd = library.parseList('modify=20260101120000;type=file;size=42; file.txt')[0];
			assert.equal(mlsd.name, 'file.txt');
			assert.equal(mlsd.modifiedAt.toISOString(), '2026-01-01T12:00:00.000Z');
		`);
	});

	it('preserves get-uri FTP downloads and MDTM fallback while rejecting a separate data host', () => {
		checkInstalledDependency('@lhci/cli/package.json', ['proxy-agent', 'pac-proxy-agent'], 'get-uri', `
			const { createServer } = await import('node:net');
			const { once } = await import('node:events');
			const content = 'synthetic-pac';
			for (const mode of ['mdtm', 'mlsd', 'foreign-pasv']) {
				const sockets = new Set(), servers = [], commands = [], controlErrors = [];
				let controlClosed;
				const control = createServer(socket => {
					// basic-ftp closes its control socket after the verified download.
					// macOS may reset this fixture socket while its final reply is unread.
					// Keep client transfer/host assertions strict; inspect server errors only
					// after those assertions succeed, rather than rejecting an unawaited promise.
					controlClosed = new Promise(resolve => socket.once('close', resolve));
					socket.on('error', error => controlErrors.push(error));
					sockets.add(socket);
					socket.on('close', () => sockets.delete(socket));
					socket.setEncoding('utf8');
					socket.write('220 fixture ready\\r\\n');
					let input = '', dataSocket;
					let pending = Promise.resolve();
					socket.on('data', chunk => {
						input += chunk;
						let end;
						while ((end = input.indexOf('\\r\\n')) !== -1) {
							const command = input.slice(0, end); input = input.slice(end + 2);
							commands.push(command);
							pending = pending.then(async () => {
								const verb = command.split(' ')[0];
								if (verb === 'USER') socket.write('331 password required\\r\\n');
								else if (verb === 'PASS') socket.write('230 logged in\\r\\n');
								else if (verb === 'FEAT') socket.write('211-features\\r\\n MLST modify*;type*;size*;\\r\\n UTF8\\r\\n211 end\\r\\n');
								else if (verb === 'MDTM') socket.write(mode === 'mdtm' ? '213 20260101120000\\r\\n' : '500 unsupported\\r\\n');
								else if (verb === 'EPSV' && mode === 'foreign-pasv') socket.write('500 unsupported\\r\\n');
								else if (verb === 'PASV') socket.write('227 entering passive mode (203,0,113,7,10,10)\\r\\n');
								else if (verb === 'EPSV') {
									const data = createServer(connection => { dataSocket = connection; sockets.add(connection); connection.on('close', () => sockets.delete(connection)); });
									servers.push(data); data.listen(0, '127.0.0.1'); await once(data, 'listening');
									socket.write('229 entering extended passive mode (|||' + data.address().port + '|)\\r\\n');
								} else if (verb === 'MLSD' || verb === 'RETR') {
									socket.write('150 opening data connection\\r\\n');
									dataSocket.once('close', () => socket.write('226 transfer complete\\r\\n'));
									dataSocket.end(verb === 'MLSD' ? 'modify=20260101120000;type=file;size=13; example.pac\\r\\n' : content);
								} else if (verb === 'QUIT') socket.end('221 bye\\r\\n');
								else socket.write('200 ok\\r\\n');
							}).catch(error => socket.destroy(error));
						}
					});
				});
				servers.push(control);
				try {
					control.listen(0, '127.0.0.1'); await once(control, 'listening');
					const url = new URL('ftp://127.0.0.1:' + control.address().port + '/example.pac');
					if (mode === 'foreign-pasv') {
						await assert.rejects(library.getUri(url), /PASV returned another host/);
						assert.equal(commands.some(command => command.startsWith('RETR')), false);
					}
					else {
						const stream = await library.getUri(url), chunks = [];
						for await (const chunk of stream) chunks.push(chunk);
						assert.equal(Buffer.concat(chunks).toString(), content);
						assert.equal(stream.lastModified.toISOString(), '2026-01-01T12:00:00.000Z');
						assert.equal(commands.some(command => command.startsWith('MLSD')), mode === 'mlsd');
					}
					await controlClosed;
					for (const error of controlErrors) assert.equal(error.code, 'ECONNRESET');
				} finally {
					for (const socket of sockets) socket.destroy();
					for (const server of servers) server.close();
				}
			}
		`);
	});

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
