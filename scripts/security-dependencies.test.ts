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
