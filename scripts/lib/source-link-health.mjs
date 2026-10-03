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
		const references = inventory.get(url) ?? new Map();
		const key = JSON.stringify(entry.reference);
		if (!references.has(key)) references.set(key, entry.reference);
		inventory.set(url, references);
	}
	const sources = [...inventory].sort(([a], [b]) => a.localeCompare(b)).map(([url, references]) => ({ url, references: [...references].sort(([a], [b]) => a.localeCompare(b)).map(([, reference]) => reference) }));
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
	if (result.status >= 500 && result.status < 600) return 'unavailable';
	return 'unverified';
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

// A reviewed historical 404 remains visible, and is probed on every run.
// Only the exact same error on the exact document is acknowledged, for 30 days.
// New statuses, redirected documents and unsafe results still raise anomalies.
function calendarDate(value) {
 if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return NaN;
 const time = Date.parse(`${value}T00:00:00Z`);
 return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === value ? time : NaN;
}
export function annotateKnownSourceFailure(result, observations, now = new Date()) {
 const observation = observations.find(item => item.sourceUrl === result.url);
 if (!observation) return result;
 const archived = observation.archive;
 const observed = calendarDate(observation.observedAt), retrieved = calendarDate(archived?.retrievedAt);
 const age = now.getTime() - observed;
 const reviewed = observation.method === 'GET' && observation.httpStatus === 404 && Number.isFinite(observed) && Number.isFinite(retrieved)
  && retrieved <= observed && age >= 0
  && archived?.retainedForTraceability === true && archived.publicDownload === false && /^[a-f0-9]{64}$/.test(archived.sha256)
  && Number.isSafeInteger(archived.bytes) && archived.bytes > 0;
 if (!reviewed) return result;
 if (result.state === 'broken' && result.status === observation.httpStatus && result.finalUrl === observation.sourceUrl && age <= 30 * 86_400_000) return { ...result, acknowledged: true, observedAt: observation.observedAt, archiveSha256: archived.sha256 };
 if (result.state === 'reachable') return { ...result, recovered: true, observedAt: observation.observedAt };
 return result;
}

export function healthSummary(results) {
	const counts = { reachable: 0, broken: 0, unavailable: 0, unsafe: 0, unverified: 0 };
	for (const result of results) counts[result.state] += 1;
	const acknowledged = results.filter(result => result.state === 'broken' && result.acknowledged === true).length;
	const recovered = results.filter(result => result.state === 'reachable' && result.recovered === true).length;
	return { ...counts, acknowledged, recovered, checked: results.length, anomalies: counts.broken - acknowledged + counts.unavailable + counts.unsafe + recovered, auditUnavailable: results.length === 0 || counts.unverified === results.length };
}

export function sourceHealthSummaryMarkdown(report) {
	const details = report.results.filter(result => result.state !== 'reachable' || result.recovered);
	const anomalies = details.filter(result => result.state !== 'unverified' && !result.acknowledged);
	const selected = [...anomalies, ...details.filter(result => result.state === 'unverified')].slice(0, 30);
	const rows = selected.map(({ url, state, status, reason, acknowledged, recovered, observedAt, references }) => ({ url, state, status, reason, acknowledged, recovered, observedAt, references: references.slice(0, 20), referenceCount: references.length }));
	const safeJson = JSON.stringify(rows, null, 2).replaceAll('`', '\\u0060').replaceAll('<', '\\u003c');
	return `## Contrôle des sources\n\nContrôle daté du ${report.checkedAt}.\n\n`
		+ `${report.summary.checked} URL : ${report.summary.reachable} accessibles, ${report.summary.broken} cassées, ${report.summary.unavailable} indisponibles, ${report.summary.unsafe} refusées, ${report.summary.unverified} non vérifiées.\n\n`
		+ `${report.summary.acknowledged ?? 0} erreurs historiques déjà documentées, toujours contrôlées ; ${report.summary.recovered ?? 0} rétablissements à examiner. Une observation historique expire après 30 jours.\n\n`
		+ `Une indisponibilité ou un contrôle non concluant ne réfute pas la preuve technique archivée. Aucun contrôle TLS ou réseau n’est contourné.\n\n`
		+ `${selected.length} résultats affichés sur ${details.length} à examiner (20 références maximum par URL). Le rapport JSON complet figure dans l’artefact d’anomalies si le contrôle échoue.\n\n`
		+ `\`\`\`json\n${safeJson}\n\`\`\`\n`;
}
