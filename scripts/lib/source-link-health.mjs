import { createHash } from 'node:crypto';
import { lookup } from 'node:dns/promises';
import { request } from 'node:https';
import { isIP } from 'node:net';
import { buildPinnedProfileRequestOptions, isPublicNetworkAddress } from '../../server/ucp-core.mjs';

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function sourceUrl(value) {
	let url;
	try { url = new URL(value); } catch { throw new Error('unsafe_url'); }
	url.hash = '';
	if (url.protocol !== 'https:' || url.username || url.password || url.port || isIP(url.hostname.replace(/^\[|\]$/g, '')) || /(?:^|\.)(?:localhost|local|internal)$/i.test(url.hostname)) throw new Error('unsafe_url');
	return url;
}

export function sourceInventory(entries) {
	const inventory = new Map();
	for (const entry of entries) {
		const url = sourceUrl(entry.url).href;
		const references = inventory.get(url) ?? [];
		if (!references.some((reference) => JSON.stringify(reference) === JSON.stringify(entry.reference))) references.push(entry.reference);
		inventory.set(url, references);
	}
	const sources = [...inventory].sort(([a], [b]) => a.localeCompare(b)).map(([url, references]) => ({ url, references: references.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b))) }));
	return { version: createHash('sha256').update(JSON.stringify(sources)).digest('hex'), sources };
}

export async function requestSource(url, method, { resolveHost = lookup, send = request, timeoutMs = 8_000 } = {}) {
	const validated = sourceUrl(url);
	let dnsTimer;
	const addresses = await Promise.race([
		resolveHost(validated.hostname, { all: true, verbatim: true }),
		new Promise((_, reject) => { dnsTimer = setTimeout(() => reject(new Error('dns_timeout')), timeoutMs); }),
	]).finally(() => clearTimeout(dnsTimer));
	if (!addresses.length || addresses.some(({ address }) => !isPublicNetworkAddress(address))) throw new Error('unsafe_address');
	const selected = addresses.find(({ family }) => family === 4) ?? addresses[0];
	const options = buildPinnedProfileRequestOptions(validated, selected.address, selected.family);
	return new Promise((resolve, reject) => {
		const req = send({ ...options, method, timeout: timeoutMs, headers: { Host: validated.host, Accept: '*/*', 'User-Agent': 'CompatAir-SourceCheck/1.0' } }, (response) => {
			clearTimeout(timer);
			resolve({ status: response.statusCode, location: response.headers.location });
			response.destroy(); // Even a GET probe never downloads an entire PDF or source page.
		});
		const timer = setTimeout(() => req.destroy(new Error('request_timeout')), timeoutMs);
		req.on('error', (error) => { clearTimeout(timer); reject(error); });
		req.on('timeout', () => req.destroy(new Error('request_timeout')));
		req.end();
	});
}

export async function followSource(value, method, probe = requestSource) {
	let url = sourceUrl(value);
	const visited = new Set();
	for (let count = 0; count <= 5; count += 1) {
		if (visited.has(url.href)) throw new Error('redirect_loop');
		visited.add(url.href);
		const result = await probe(url, method);
		if (![301, 302, 303, 307, 308].includes(result.status)) return { ...result, finalUrl: url.href };
		if (!result.location) throw new Error('redirect_without_location');
		url = sourceUrl(new URL(result.location, url));
	}
	throw new Error('too_many_redirects');
}

function outcome(result) {
	if (result.status >= 200 && result.status < 300) return 'reachable';
	if ([404, 410].includes(result.status)) return 'broken';
	if ([401, 403, 429].includes(result.status)) return 'unverified';
	return 'unavailable';
}

export async function checkSource(value, { probe = requestSource, wait = pause } = {}) {
	try {
		let result = await followSource(value, 'HEAD', probe);
		if ([404, 410, 405, 501].includes(result.status)) result = await followSource(value, 'GET', probe);
		let state = outcome(result);
		if (state === 'broken' || state === 'unavailable') {
			await wait(750);
			const confirmation = await followSource(value, 'GET', probe);
			const confirmedState = outcome(confirmation);
			state = ['broken', 'unavailable'].includes(confirmedState) && confirmedState !== state ? 'unverified' : confirmedState;
			result = confirmation;
		}
		return { state, ...result };
	} catch (error) {
		const reason = error?.code ?? error?.message ?? 'network_error';
		return { state: /^unsafe_|invalid_profile_url|profile_not_trusted|redirect_loop|too_many_redirects|redirect_without_location/.test(reason) ? 'unsafe' : 'unverified', reason };
	}
}

export function healthSummary(results) {
	const counts = { reachable: 0, broken: 0, unavailable: 0, unsafe: 0, unverified: 0 };
	for (const result of results) counts[result.state] += 1;
	return { ...counts, checked: results.length, anomalies: counts.broken + counts.unavailable + counts.unsafe, auditUnavailable: results.length === 0 || counts.unverified === results.length };
}
