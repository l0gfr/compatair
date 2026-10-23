import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const lhci = createRequire(require.resolve('@lhci/cli/package.json'));
const express = createRequire(lhci.resolve('express'));
const parserPath = express.resolve('body-parser');

describe('body-parser installed through Lighthouse and Express', () => {
	it('resolves the patched version without changing the Express major', () => {
		expect(express('body-parser/package.json').version).toBe('1.20.9');
		expect(lhci('express/package.json').version).toMatch(/^4\./);
	});
	it.each(['identity', 'gzip', 'deflate'])('preserves ordinary %s JSON requests', encoding => {
		checkRequest(encoding, false);
	});
	it.each(['gzip', 'deflate'])('survives late trailing bytes after a %s body and preserves another stream consumer', encoding => {
		checkRequest(encoding, true);
	});
});

function checkRequest(encoding, trailing) {
	const script = `
		import assert from 'node:assert/strict';
		import { createHash } from 'node:crypto';
		import { createRequire } from 'node:module';
		import { PassThrough } from 'node:stream';
		import { deflateSync, gzipSync } from 'node:zlib';
		const parser = createRequire(import.meta.url)(${JSON.stringify(parserPath)}).json();
		const encoding = ${JSON.stringify(encoding)};
		const trailing = ${JSON.stringify(trailing)};
		const json = Buffer.from('{"a":1}');
		const compressed = encoding === 'gzip' ? gzipSync(json) : encoding === 'deflate' ? deflateSync(json) : json;
		const first = trailing ? Buffer.concat([compressed, Buffer.from([0])]) : compressed;
		const tail = trailing ? Buffer.alloc(1024, 0x58) : Buffer.alloc(0);
		const expectedHash = createHash('sha256').update(first).update(tail).digest('hex');
		const req = new PassThrough();
		req.headers = { 'content-type': 'application/json', 'content-encoding': encoding, 'content-length': String(first.length + tail.length) };
		const hash = createHash('sha256');
		req.pipe(hash);
		let calls = 0;
		await new Promise((resolve, reject) => {
			const timeout = setTimeout(() => reject(new Error('request did not finish')), 1500);
			let hashFinished = false;
			const complete = () => {
				if (!hashFinished || calls === 0) return;
				try {
					assert.equal(calls, 1);
					assert.deepEqual(req.body, { a: 1 });
					assert.equal(hash.read().toString('hex'), expectedHash);
					clearTimeout(timeout);
					resolve();
				} catch (error) { clearTimeout(timeout); reject(error); }
			};
			hash.once('finish', () => { hashFinished = true; complete(); });
			parser(req, {}, error => {
				if (error) { clearTimeout(timeout); reject(error); return; }
				calls += 1;
				if (trailing) req.end(tail);
				complete();
			});
			if (trailing) req.write(first); else req.end(first);
		});
		await new Promise(resolve => setTimeout(resolve, 30));
		assert.equal(calls, 1);
	`;
	execFileSync(process.execPath, ['--max-old-space-size=128', '--input-type=module', '--eval', script], { timeout: 3000, stdio: 'pipe' });
}
