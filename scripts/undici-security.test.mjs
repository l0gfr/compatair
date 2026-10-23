import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const astro = createRequire(require.resolve('astro/package.json'));
const unifont = createRequire(astro.resolve('unifont'));
const undiciPath = unifont.resolve('undici');
const version = unifont('undici/package.json').version;

// GHSA-xjj6-f33q-929c: a rejected encoding stack must not leave an unhandled body error.
describe('Undici installed through Astro and unifont', () => {
	it('resolves the reviewed fixed version', () => {
		expect(version).toBe('8.12.2');
	});

	it('rejects six encodings, survives a late connection close and still serves normal responses', () => {
		// Keep the crash-sensitive stream in a child without an uncaughtException handler.
		const script = `
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { createRequire } from 'node:module';
import { setTimeout as delay } from 'node:timers/promises';
  const { fetch, Agent } = createRequire(import.meta.url)(${JSON.stringify(undiciPath)});
  const version = ${JSON.stringify(version)};
  const dispatcher = new Agent({ connections: 1, pipelining: 1 });
  const hardStop = setTimeout(() => process.exit(124), 3500);
  const server = createServer((request, response) => {
    if (request.url === '/too-many') {
      response.writeHead(200, {
        'content-encoding': 'gzip, gzip, gzip, gzip, gzip, gzip',
        'content-length': '100',
        connection: 'close',
      });
      response.flushHeaders();
      // Deliver headers first; fail the body later, after fetch has rejected the encodings.
      setTimeout(() => response.destroy(), 40);
      return;
    }
    response.writeHead(200, { 'content-type': 'text/plain', connection: 'close' });
    response.end('ordinary-response');
  });
  try {
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
    const address = server.address();
    assert(address && typeof address === 'object');
    const origin = 'http://127.0.0.1:' + address.port;
    const ordinary = async () => {
      const response = await fetch(origin + '/normal', { dispatcher, signal: AbortSignal.timeout(1000) });
      assert.equal(response.status, 200);
      assert.equal(await response.text(), 'ordinary-response');
      return response.status;
    };
    const normalBefore = await ordinary();
    await assert.rejects(async () => {
      const response = await fetch(origin + '/too-many', { dispatcher, signal: AbortSignal.timeout(1000) });
      await response.text();
    }, error => /too many content-encodings/.test(String(error.cause?.message ?? error.message)));
    await delay(120);
    const normalAfter = await ordinary();
    await delay(30);
    console.log(JSON.stringify({ version, normalBefore, excessiveEncodingsRejected: true, normalAfter }));
  } finally {
    await dispatcher.destroy();
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
    clearTimeout(hardStop);
  }
`;
		const stdout = execFileSync(process.execPath, ['--max-old-space-size=128', '--input-type=module', '--eval', script], {
			timeout: 5000, maxBuffer: 64 * 1024, encoding: 'utf8', stdio: 'pipe',
		});
		expect(JSON.parse(stdout)).toEqual({ version, normalBefore: 200, excessiveEncodingsRejected: true, normalAfter: 200 });
	}, 10_000);
});
