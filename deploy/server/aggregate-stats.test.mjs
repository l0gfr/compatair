import { describe, expect, it } from 'vitest';
import { Readable } from 'node:stream';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { aggregateTrafficLogs, classifyTrafficAgent, maximumLogLineBytes, parseTrafficLogLine, readTrafficLogLines } from './aggregate-stats.mjs';
import { internalVerificationUserAgent } from '../../scripts/lib/live-seo-verification.mjs';

const browser = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const fixture = ({ day = '23/Oct/2026', agent = browser, request = 'GET /guides/example/?private=fixture-secret HTTP/1.1', status = 200, bytes = 120 } = {}) =>
	`192.0.2.99 - fixture-account [${day}:16:00:00 +0200] "${request}" ${status} ${bytes} "https://example.invalid/?contact=fixture-private" "${agent}"`;
const aggregate = lines => aggregateTrafficLogs(Readable.from([lines.join('\n')]));

describe('private traffic classification', () => {
	it('labels explicit checks, generic automation and plausible browsers without claiming human identities', () => {
		expect(classifyTrafficAgent(`${internalVerificationUserAgent} seo`)).toBe('declared_internal_check');
		expect(classifyTrafficAgent(`${internalVerificationUserAgent} http-smoke`)).toBe('declared_internal_check');
		expect(classifyTrafficAgent('CompatAir deployment smoke')).toBe('declared_internal_check');
		for (const agent of ['node', 'curl/8.5.0', 'Googlebot/2.1', 'ChatGPT-User/1.0', `${browser} HeadlessChrome/130.0`]) expect(classifyTrafficAgent(agent)).toBe('declared_automation');
		expect(classifyTrafficAgent(browser)).toBe('browser_like');
		for (const agent of ['', '-', 'Mozilla/5.0', `${internalVerificationUserAgent} forged/identity`, 'x'.repeat(4097), undefined]) expect(classifyTrafficAgent(agent)).toBe('unknown');
	});
	it('projects only safe dimensions and counts, with no raw headers or request identifiers', async () => {
		const row = parseTrafficLogLine(fixture());
		expect(row).toEqual({ day: '2026-10-23', category: 'browser_like', resource: 'page', statusGroup: '2xx', bytes: 120, zeroBytesReportedAsDash: false });
		const result = await aggregate([fixture(), fixture({ agent: 'node', request: `GET /data/archives/${'a'.repeat(40)}/verdicts.json HTTP/1.1`, status: 206, bytes: 1024 }), fixture({ agent: '-', request: '-', status: 400, bytes: '-' })]);
		expect(result.coverage.includedRequests).toBe(3);
		expect(result.daily.find(item => item.resource === 'legacy_data')).toMatchObject({ category: 'declared_automation', bytes: 1024 });
		expect(result.daily.find(item => item.statusGroup === '4xx')).toMatchObject({ category: 'unknown', bytes: 0, zeroBytesReportedAsDash: 1 });
		const serialized = JSON.stringify(result);
		for (const secret of ['192.0.2.99', 'fixture-account', 'fixture-secret', 'fixture-private', '/guides/example/', browser]) expect(serialized).not.toContain(secret);
	});
	it.each([
		fixture({ day: '31/Feb/2026' }), fixture({ day: '29/Feb/2026' }), fixture({ day: '00/Oct/2026' }),
		fixture().replace('+0200', '+1460'), fixture().replace('+0200', '+2500'), fixture().replace('16:00:00', '24:00:00'),
		fixture({ status: 999 }), fixture({ bytes: -1 }), fixture({ bytes: '9007199254740992' }), fixture() + ' injected',
		fixture().replace('fixture-secret', 'secret\u0000injection'),
	])('rejects malformed log input without emitting its contents', line => {
		expect(parseTrafficLogLine(line)).toBeUndefined();
	});
	it('accepts real leap dates and Apache-escaped quotes without confusing header boundaries', () => {
		expect(parseTrafficLogLine(fixture({ day: '29/Feb/2024', agent: 'unknown\\"agent' }))).toMatchObject({ day: '2024-02-29', category: 'unknown' });
	});
	it('bounds long lines across chunks and resumes correctly, including a final line without newline', async () => {
		const chunks = Readable.from([Buffer.from('x'.repeat(maximumLogLineBytes)), Buffer.from('x\n' + fixture() + '\r'), Buffer.from('\n' + fixture({ agent: 'node' }))]);
		const result = await aggregateTrafficLogs(chunks);
		expect(result.coverage).toMatchObject({ parsedLines: 2, oversizedLines: 1, malformedLines: 0, includedRequests: 2 });
		const lines = [];
		for await (const line of readTrafficLogLines(Readable.from([Buffer.from('x'.repeat(maximumLogLineBytes) + '\n')]))) lines.push(line);
		expect(lines[0].length).toBe(maximumLogLineBytes);
	});
	it('retains at most 90 log dates regardless of input order without zero-filling absent dates', async () => {
		const result = await aggregate([fixture({ day: '24/Jul/2026' }), fixture({ day: '23/Oct/2026' }), fixture({ day: '26/Jul/2026' }), fixture({ day: '25/Jul/2026' })]);
		expect(result.window).toMatchObject({ firstDay: '2026-07-26', lastDay: '2026-10-23', retentionDays: 90 });
		expect(result.coverage).toMatchObject({ parsedLines: 4, includedRequests: 2, excludedOutsideWindow: 2 });
		expect(result.daily.map(row => row.day)).toEqual(['2026-07-26', '2026-10-23']);
	});
	it('reports malformed coverage, refuses empty input and counter overflow rather than inventing totals', async () => {
		const result = await aggregate(['unparseable fixture-private', fixture()]);
		expect(result.coverage).toMatchObject({ malformedLines: 1, includedRequests: 1 });
		await expect(aggregate([])).rejects.toThrow('traffic_no_valid_log_lines');
		await expect(aggregate([fixture({ bytes: Number.MAX_SAFE_INTEGER }), fixture()])).rejects.toThrow('traffic_counter_overflow');
	});
	it('passes exact original bytes to GoAccess but writes only aggregates, and preserves an output on failure', async () => {
		const directory = await mkdtemp(join(tmpdir(), 'compatair-traffic-test-'));
		try {
			const output = join(directory, 'segments.json'), command = fileURLToPath(new URL('./aggregate-stats.mjs', import.meta.url));
			const input = `${fixture()}\r\n${fixture({ agent: 'node' })}\n`;
			const result = spawnSync(process.execPath, [command, '--output', output, '--pass-through'], { input, encoding: 'utf8' });
			expect(result.status).toBe(0); expect(result.stdout).toBe(input); expect(result.stderr).toBe('');
			const saved = await readFile(output, 'utf8');
			expect(JSON.parse(saved).coverage.includedRequests).toBe(2);
			expect(saved).not.toContain('fixture-private');
			const failed = spawnSync(process.execPath, [command, '--output', output, '--pass-through'], { input: 'fixture-private malformed', encoding: 'utf8' });
			expect(failed.status).toBe(1); expect(failed.stderr).not.toContain('fixture-private');
			expect(await readFile(output, 'utf8')).toBe(saved);
		} finally { await rm(directory, { recursive: true, force: true }); }
	});
});
