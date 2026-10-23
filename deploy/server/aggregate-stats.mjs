import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export const maximumLogLineBytes = 65_536;
export const trafficCategories = ['declared_internal_check', 'declared_automation', 'browser_like', 'unknown'];
const months = new Map(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((name, index) => [name, index + 1]));
const legacyInternalAgents = new Set(['CompatAir deployment smoke', 'CompatAir MCP profile contract smoke', 'CompatAir registry verifier']);
const combinedLine = /^\S+ \S+ \S+ \[([^\]]+)\] "((?:[^"\\]|\\.)*)" ([1-5]\d{2}) (\d+|-) "(?:[^"\\]|\\.)*" "((?:[^"\\]|\\.)*)"$/;

export function classifyTrafficAgent(agent) {
	if (typeof agent !== 'string' || agent.length > 4096) return 'unknown';
	if (/^CompatAir-Internal-Check\/1\.0(?: [a-z0-9-]{1,40})?$/.test(agent) || legacyInternalAgents.has(agent)) return 'declared_internal_check';
	if (/bot|crawl|spider|headless|lighthouse|probe|monitor|scrapy|httpx|ChatGPT-User|Claude-User|Perplexity-User/i.test(agent)
		|| /^(?:node(?:\/|$)|python(?:[\/-]|$)|curl\/|wget\/|Go-http-client\/|Java\/|okhttp\/|mcpbeat\/|SentinelOracle\/|Clono(?:\/|$))/i.test(agent)) return 'declared_automation';
	if (/^Mozilla\/5\.0 /.test(agent) && /(?:Chrome|Chromium|Firefox|Version|Edg|OPR)\/\d/.test(agent)
		&& /(?:AppleWebKit|Gecko)\//.test(agent)) return 'browser_like';
	return 'unknown';
}

function logDay(value) {
	const match = /^(\d{2})\/([A-Z][a-z]{2})\/(\d{4}):(\d{2}):(\d{2}):(\d{2}) ([+-])(\d{2})(\d{2})$/.exec(value);
	if (!match) return undefined;
	const [, day, monthName, year, hour, minute, second, , offsetHour, offsetMinute] = match;
	const month = months.get(monthName);
	if (!month || +year < 1970 || +hour > 23 || +minute > 59 || +second > 59 || +offsetHour > 14 || +offsetMinute > 59 || +offsetHour === 14 && +offsetMinute !== 0) return undefined;
	const iso = `${year}-${String(month).padStart(2, '0')}-${day}`;
	const epoch = Date.parse(`${iso}T00:00:00Z`);
	return Number.isFinite(epoch) && new Date(epoch).toISOString().slice(0, 10) === iso ? iso : undefined;
}

function resourceKind(request) {
	const match = /^[A-Z]{1,16} (\/[^\s]*) HTTP\/(?:1\.[01]|2(?:\.0)?|3(?:\.0)?)$/.exec(request);
	if (!match) return 'other';
	const path = match[1].split(/[?#]/, 1)[0];
	if (/^\/data\/archives\/[a-f0-9]{40}\/[a-z0-9-]+\.(?:json|jsonld|ndjson)$/.test(path)) return 'legacy_data';
	if (path.startsWith('/data/')) return 'data';
	if (/^\/(?:api\/|mcp(?:\/|$)|events(?:\/|$))/.test(path)) return 'api';
	if (/^\/(?:_assets\/|images\/|social\/|media\/|favicon\.|apple-touch-icon)/.test(path)) return 'asset';
	if (/^\/(?:robots\.txt$|sitemap[^/]*\.xml$|\.well-known\/|llms(?:-full)?\.txt$)/.test(path)) return 'discovery';
	if (path === '/' || /^\/(?:guides|compresseurs|outils-pneumatiques|quel-compresseur-pour|calculateur|comparatifs|glossaire|barometre-transparence)(?:\/|$)/.test(path)) return 'page';
	return 'other';
}

// Deliberately return only closed categories and counts. Host, authenticated user,
// request target, referrer and user-agent never enter the aggregate state.
export function parseTrafficLogLine(line) {
	if (typeof line !== 'string' || Buffer.byteLength(line) > maximumLogLineBytes || /[\u0000-\u001f\u007f]/.test(line)) return undefined;
	const match = combinedLine.exec(line);
	if (!match) return undefined;
	const [, timestamp, request, status, rawBytes, agent] = match;
	const day = logDay(timestamp), bytes = rawBytes === '-' ? 0 : Number(rawBytes);
	if (!day || !Number.isSafeInteger(bytes) || bytes < 0) return undefined;
	return { day, category: classifyTrafficAgent(agent), resource: resourceKind(request), statusGroup: `${status[0]}xx`, bytes, zeroBytesReportedAsDash: rawBytes === '-' };
}

export async function* readTrafficLogLines(chunks) {
	let pending = Buffer.alloc(0), oversized = false;
	for await (const value of chunks) {
		const chunk = Buffer.isBuffer(value) ? value : Buffer.from(value);
		let start = 0;
		while (start < chunk.length) {
			const newline = chunk.indexOf(10, start), end = newline < 0 ? chunk.length : newline;
			if (!oversized) {
				if (pending.length + end - start > maximumLogLineBytes) { oversized = true; pending = Buffer.alloc(0); }
				else pending = Buffer.concat([pending, chunk.subarray(start, end)]);
			}
			if (newline < 0) break;
			yield oversized ? null : pending.toString('utf8').replace(/\r$/, '');
			pending = Buffer.alloc(0); oversized = false; start = newline + 1;
		}
	}
	if (oversized || pending.length) yield oversized ? null : pending.toString('utf8').replace(/\r$/, '');
}

function add(left, right) {
	const sum = left + right;
	if (!Number.isSafeInteger(sum)) throw new Error('traffic_counter_overflow');
	return sum;
}

export async function aggregateTrafficLogs(chunks) {
	const rows = new Map();
	let parsedLines = 0, malformedLines = 0, oversizedLines = 0, lastDay = null, firstRetainedDay = null;
	for await (const line of readTrafficLogLines(chunks)) {
		if (line === null) { oversizedLines = add(oversizedLines, 1); continue; }
		const item = parseTrafficLogLine(line);
		if (!item) { malformedLines = add(malformedLines, 1); continue; }
		parsedLines = add(parsedLines, 1);
		if (lastDay === null || item.day > lastDay) {
			lastDay = item.day;
			firstRetainedDay = new Date(Date.parse(`${lastDay}T00:00:00Z`) - 89 * 86_400_000).toISOString().slice(0, 10);
			for (const [key, row] of rows) if (row.day < firstRetainedDay) rows.delete(key);
		}
		if (item.day < firstRetainedDay) continue;
		const key = `${item.day}|${item.category}|${item.resource}|${item.statusGroup}`;
		const row = rows.get(key) ?? { day: item.day, category: item.category, resource: item.resource, statusGroup: item.statusGroup, requests: 0, bytes: 0, zeroBytesReportedAsDash: 0 };
		row.requests = add(row.requests, 1); row.bytes = add(row.bytes, item.bytes);
		row.zeroBytesReportedAsDash = add(row.zeroBytesReportedAsDash, Number(item.zeroBytesReportedAsDash));
		rows.set(key, row);
	}
	if (!parsedLines) throw new Error('traffic_no_valid_log_lines');
	const daily = [...rows.values()].sort((a, b) => a.day.localeCompare(b.day) || a.category.localeCompare(b.category) || a.resource.localeCompare(b.resource) || a.statusGroup.localeCompare(b.statusGroup));
	const includedRequests = daily.reduce((sum, row) => add(sum, row.requests), 0);
	return {
		schemaVersion: '1.0.0', classificationVersion: '1.0.0',
		window: { firstDay: daily[0]?.day ?? null, lastDay, retentionDays: 90, calendar: 'Apache log calendar date; no timezone conversion' },
		coverage: { parsedLines, malformedLines, oversizedLines, excludedOutsideWindow: parsedLines - includedRequests, includedRequests },
		definitions: {
			declared_internal_check: 'Explicit CompatAir check user-agent, including documented legacy smoke identities; declaration, not authentication.',
			declared_automation: 'User-agent matching a documented automation signature; declaration, not verified ownership.',
			browser_like: 'User-agent resembling a common browser and not matching the above rules; human use is plausible but never established.',
			unknown: 'No supported classification; generic Mozilla/5.0 and unidentified clients remain unknown.',
			bytes: 'Apache COMBINED %b response-body bytes, not file size or completed downloads; a dash denotes no bytes sent.',
		},
		limitations: ['Counts are HTTP requests, not people, sessions, GSC clicks, conversions or successful tool calls.', 'User-agent signatures are spoofable; historical node traffic cannot be attributed to internal checks.', 'No IP, authenticated user, raw URL, query string, referrer or user-agent is retained in this aggregate.', 'The last day and the first observed day may be partial; missing log dates are not filled with zeros.'],
		daily,
	};
}

async function main() {
	const args = process.argv.slice(2);
	if (args.length !== 3 || args[0] !== '--output' || !args[1] || args[2] !== '--pass-through') throw new Error('traffic_invalid_arguments');
	async function* forwardInput() {
		for await (const chunk of process.stdin) {
			await new Promise((resolve, reject) => process.stdout.write(chunk, error => error ? reject(error) : resolve()));
			yield chunk;
		}
	}
	const aggregate = await aggregateTrafficLogs(forwardInput());
	await writeFile(args[1], `${JSON.stringify(aggregate, null, 2)}\n`, { mode: 0o640 });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	// Neither parse failures nor stream errors may echo untrusted log material.
	process.stdout.on('error', () => {});
	main().catch(() => { console.error('Private traffic aggregation failed; previous report retained.'); process.exitCode = 1; });
}
