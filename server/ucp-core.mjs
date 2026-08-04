import { lookup } from 'node:dns/promises';
import { request as httpsRequest } from 'node:https';
import { BlockList, isIP } from 'node:net';

export const UCP_PROTOCOL_VERSION = '2026-04-08';
export const UCP_CAPABILITY_VERSION = '2026-07-15';
export const UCP_SERVICE_NAME = 'fr.compatair.air';
export const UCP_CAPABILITY_NAME = 'fr.compatair.air.compatibility';
export const UCP_SAMPLE_PLATFORM_PROFILE_URL = 'https://compatair.fr/examples/ucp/platform-profile.json';

const PROFILE_BODY_LIMIT = 65_536;
const PROFILE_TIMEOUT_MS = 3_000;
const PROFILE_CACHE_TTL_MS = 5 * 60 * 1_000;
const PROFILE_CACHE_LIMIT = 1_000;
const profileCache = new Map();
const nonPublicIpv6 = new BlockList();
for (const [network, prefix] of [
	['::', 128],
	['::1', 128],
	['::ffff:0:0', 96],
	['::ffff:0:0:0', 96],
	['64:ff9b::', 96],
	['64:ff9b:1::', 48],
	['100::', 64],
	['2001::', 32],
	['2001:2::', 48],
	['2001:10::', 28],
	['2001:20::', 28],
	['2001:db8::', 32],
	['2002::', 16],
	['3fff::', 20],
	['5f00::', 16],
	['fc00::', 7],
	['fe80::', 10],
	['fec0::', 10],
	['ff00::', 8],
]) nonPublicIpv6.addSubnet(network, prefix, 'ipv6');

export const samplePlatformProfile = {
	ucp: {
		version: UCP_PROTOCOL_VERSION,
		services: {
			[UCP_SERVICE_NAME]: [{
				version: UCP_CAPABILITY_VERSION,
				spec: 'https://compatair.fr/en/ucp/',
				transport: 'rest',
				schema: 'https://compatair.fr/openapi/ucp-2026-07-15.json',
			}],
		},
		capabilities: {
			[UCP_CAPABILITY_NAME]: [{
				version: UCP_CAPABILITY_VERSION,
				spec: 'https://compatair.fr/en/ucp/#capability',
				schema: 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json',
			}],
		},
	},
	agent: {
		name: 'CompatAir public UCP example client',
		operator: 'CompatAir',
		operator_url: 'https://compatair.fr/',
	},
};

function isPlainRecord(value) {
	return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isPublicIpv4(address) {
	const parts = address.split('.').map(Number);
	if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return false;
	const [a, b] = parts;
	if (a === 0 || a === 10 || a === 127 || a >= 224) return false;
	if (a === 100 && b >= 64 && b <= 127) return false;
	if (a === 169 && b === 254) return false;
	if (a === 172 && b >= 16 && b <= 31) return false;
	if (a === 192 && b === 0 && (parts[2] === 0 || parts[2] === 2)) return false;
	if (a === 192 && b === 88 && parts[2] === 99) return false;
	if (a === 192 && b === 168) return false;
	if (a === 198 && (b === 18 || b === 19)) return false;
	if (a === 198 && b === 51 && parts[2] === 100) return false;
	if (a === 203 && b === 0 && parts[2] === 113) return false;
	return true;
}

function isPublicIpv6(address) {
	return !nonPublicIpv6.check(address, 'ipv6');
}

export function isPublicNetworkAddress(address) {
	const family = isIP(address);
	return family === 4 ? isPublicIpv4(address) : family === 6 ? isPublicIpv6(address) : false;
}

function isTrustedProfileUrl(url) {
	if (!(url instanceof URL) || url.protocol !== 'https:' || url.username || url.password || url.hash || url.port) return false;
	if (url.hostname.length > 253 || /(?:^|\.)(?:localhost|local|internal)$/i.test(url.hostname)) return false;
	const hostname = url.hostname.startsWith('[') && url.hostname.endsWith(']') ? url.hostname.slice(1, -1) : url.hostname;
	return isIP(hostname) === 0;
}

export function parseUcpAgentHeader(value) {
	if (typeof value !== 'string' || value.length > 2_048) return undefined;
	const match = value.match(/^profile="([^"\\\r\n]{1,2000})"$/);
	if (!match) return undefined;
	let url;
	try { url = new URL(match[1]); } catch { return undefined; }
	return isTrustedProfileUrl(url) ? url : undefined;
}

function validatePlatformProfile(profile) {
	if (!isPlainRecord(profile) || !isPlainRecord(profile.ucp) || profile.ucp.version !== UCP_PROTOCOL_VERSION) throw new Error('version_unsupported');
	const capability = profile.ucp.capabilities?.[UCP_CAPABILITY_NAME];
	if (!Array.isArray(capability)) throw new Error('capabilities_incompatible');
	const compatible = capability.find((entry) => entry?.version === UCP_CAPABILITY_VERSION);
	if (!compatible) throw new Error('capabilities_incompatible');
	for (const key of ['spec', 'schema']) {
		let url;
		try { url = new URL(compatible[key]); } catch { throw new Error('profile_not_trusted'); }
		if (url.protocol !== 'https:' || url.origin !== 'https://compatair.fr') throw new Error('profile_not_trusted');
	}
	return profile;
}

export function buildPinnedProfileRequestOptions(url, address, family) {
	if (!isTrustedProfileUrl(url)) throw new Error('invalid_profile_url');
	if (!isPublicNetworkAddress(address) || isIP(address) !== family) throw new Error('profile_not_trusted');
	return {
		protocol: 'https:',
		hostname: address,
		family,
		port: 443,
		servername: url.hostname,
		path: `${url.pathname}${url.search}`,
		method: 'GET',
		headers: {
			Accept: 'application/json',
			Host: url.host,
			'User-Agent': 'CompatAir-UCP-Discovery/2026.07',
		},
		timeout: PROFILE_TIMEOUT_MS,
		agent: false,
	};
}

function readProfileResponse(url, address, family) {
	return new Promise((resolve, reject) => {
		const request = httpsRequest(buildPinnedProfileRequestOptions(url, address, family), (response) => {
			if (response.statusCode !== 200) { response.resume(); reject(new Error('profile_unreachable')); return; }
			const contentType = String(response.headers['content-type'] ?? '').toLowerCase();
			if (!/^application\/(?:[a-z0-9.+-]*\+)?json(?:\s*;|$)/.test(contentType)) { response.resume(); reject(new Error('profile_unreachable')); return; }
			const chunks = [];
			let size = 0;
			response.on('data', (chunk) => {
				size += chunk.length;
				if (size > PROFILE_BODY_LIMIT) response.destroy(new Error('profile_unreachable'));
				else chunks.push(chunk);
			});
			response.on('end', () => {
				try { resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))); }
				catch { reject(new Error('profile_unreachable')); }
			});
			response.on('error', () => reject(new Error('profile_unreachable')));
		});
		request.on('timeout', () => request.destroy(new Error('profile_unreachable')));
		request.on('error', () => reject(new Error('profile_unreachable')));
		request.end();
	});
}

export async function fetchPublicUcpProfile(url, now = Date.now()) {
	if (!isTrustedProfileUrl(url)) throw new Error('invalid_profile_url');
	if (url.href === UCP_SAMPLE_PLATFORM_PROFILE_URL) return samplePlatformProfile;
	const cached = profileCache.get(url.href);
	if (cached && now - cached.storedAt <= PROFILE_CACHE_TTL_MS) return cached.profile;
	let addresses;
	try { addresses = await lookup(url.hostname, { all: true, verbatim: true }); } catch { throw new Error('profile_unreachable'); }
	if (!addresses.length || addresses.some(({ address }) => !isPublicNetworkAddress(address))) throw new Error('profile_not_trusted');
	const selected = addresses[0];
	const profile = validatePlatformProfile(await readProfileResponse(url, selected.address, selected.family));
	if (profileCache.size >= PROFILE_CACHE_LIMIT) profileCache.delete(profileCache.keys().next().value);
	profileCache.set(url.href, { storedAt: now, profile });
	return profile;
}

export async function authorizeUcpRequest(request, body, fetchProfile = fetchPublicUcpProfile) {
	const profileUrl = parseUcpAgentHeader(request.headers['ucp-agent']);
	if (!profileUrl) throw new Error('invalid_profile_url');
	if (!isPlainRecord(body?.ucp) || body.ucp.version !== UCP_PROTOCOL_VERSION) throw new Error('version_unsupported');
	const profile = validatePlatformProfile(await fetchProfile(profileUrl));
	return { profileUrl: profileUrl.href, profile };
}

function validateProductLocator(value, type) {
	if (!isPlainRecord(value)) return undefined;
	const allowed = new Set(['id', 'compatair_id', 'ean', 'mpn', 'reference', 'url', 'name']);
	if (Object.keys(value).some((key) => !allowed.has(key))) return undefined;
	const values = Object.entries(value).filter(([, candidate]) => typeof candidate === 'string' && candidate.trim().length > 0);
	if (values.length !== 1) return undefined;
	const [field, raw] = values[0];
	if (raw.length > (field === 'url' ? 4_096 : 256)) return undefined;
	if (field === 'id' && !/^[a-z0-9-]{1,160}$/.test(raw)) return undefined;
	if (field === 'compatair_id' && !new RegExp(`^ca:${type}:[a-z0-9-]{1,160}$`).test(raw)) return undefined;
	if (field === 'ean' && !/^\d{8,14}$/.test(raw)) return undefined;
	if (field === 'url') {
		let url; try { url = new URL(raw); } catch { return undefined; }
		if (url.protocol !== 'https:' || url.username || url.password || url.hash) return undefined;
	}
	return { [field]: raw.trim(), expectedType: type };
}

export function validateUcpEvaluationRequest(body) {
	if (!isPlainRecord(body) || !isPlainRecord(body.ucp) || body.ucp.version !== UCP_PROTOCOL_VERSION || !isPlainRecord(body.configuration)) return undefined;
	const allowedRoot = new Set(['ucp', 'intent', 'configuration', 'constraints', 'requested_outputs']);
	if (Object.keys(body).some((key) => !allowedRoot.has(key))) return undefined;
	if (Object.keys(body.ucp).some((key) => key !== 'version')) return undefined;
	const intent = body.intent ?? 'will_it_work';
	if (!['will_it_work', 'explain_limits', 'find_minimal_change', 'build_complete_system'].includes(intent)) return undefined;
	const configuration = body.configuration;
	const allowedConfiguration = new Set(['compressor', 'tools', 'mode']);
	if (Object.keys(configuration).some((key) => !allowedConfiguration.has(key)) || !Array.isArray(configuration.tools)) return undefined;
	if (configuration.mode !== undefined && !['successive', 'simultaneous'].includes(configuration.mode)) return undefined;
	const compressor = configuration.compressor === undefined ? undefined : validateProductLocator(configuration.compressor, 'compressor');
	if ((!compressor && intent !== 'build_complete_system') || (configuration.compressor !== undefined && !compressor) || configuration.tools.length < 1 || configuration.tools.length > 20) return undefined;
	const tools = [];
	let expandedToolCount = 0;
	for (const tool of configuration.tools) {
		if (!isPlainRecord(tool)) return undefined;
		const quantity = tool.quantity ?? 1;
		const { quantity: _quantity, ...locatorValue } = tool;
		const locator = validateProductLocator(locatorValue, 'tool');
		if (!locator || !Number.isInteger(quantity) || quantity < 1 || quantity > 20 || expandedToolCount + quantity > 20) return undefined;
		tools.push({ locator, quantity });
		expandedToolCount += quantity;
	}
	let constraints;
	if (body.constraints !== undefined) {
		if (!isPlainRecord(body.constraints) || Object.keys(body.constraints).some((key) => !['max_total_minor', 'currency', 'minimum_merchants', 'country'].includes(key))) return undefined;
		constraints = {
			...(body.constraints.max_total_minor !== undefined ? { max_total_minor: body.constraints.max_total_minor } : {}),
			...(body.constraints.currency !== undefined ? { currency: body.constraints.currency } : {}),
			...(body.constraints.minimum_merchants !== undefined ? { minimum_merchants: body.constraints.minimum_merchants } : {}),
			...(body.constraints.country !== undefined ? { country: body.constraints.country } : {}),
		};
		if (constraints.max_total_minor !== undefined && (!Number.isInteger(constraints.max_total_minor) || constraints.max_total_minor < 0 || constraints.max_total_minor > 100_000_000)) return undefined;
		if (constraints.currency !== undefined && constraints.currency !== 'EUR') return undefined;
		if (constraints.minimum_merchants !== undefined && (!Number.isInteger(constraints.minimum_merchants) || constraints.minimum_merchants < 1 || constraints.minimum_merchants > 10)) return undefined;
		if (constraints.country !== undefined && constraints.country !== 'FR') return undefined;
	}
	const allowedOutputs = new Set(['compatibility', 'mandatory_accessories', 'limits', 'alternatives', 'complete_configuration', 'attribution', 'evidence']);
	if (body.requested_outputs !== undefined && (!Array.isArray(body.requested_outputs) || body.requested_outputs.length > allowedOutputs.size || body.requested_outputs.some((item) => !allowedOutputs.has(item)) || new Set(body.requested_outputs).size !== body.requested_outputs.length)) return undefined;
	return { intent, compressor, tools, mode: configuration.mode ?? 'successive', constraints, requestedOutputs: body.requested_outputs ?? [...allowedOutputs] };
}

export function createUcpToolArguments(validated, resolved, profileUrl) {
	return {
		meta: { 'ucp-agent': { profile: profileUrl } },
		ucp: { version: UCP_PROTOCOL_VERSION },
		intent: validated.intent,
		configuration: {
			...(resolved.compressorId ? { compressor: { id: resolved.compressorId } } : {}),
			tools: resolved.toolIds.map((id) => ({ id })),
			mode: validated.mode,
		},
		...(validated.constraints ? { constraints: validated.constraints } : {}),
		requested_outputs: validated.requestedOutputs,
	};
}

export function ucpErrorStatus(code) {
	if (code === 'invalid_profile_url' || code === 'invalid_request') return 400;
	if (code === 'body_too_large') return 413;
	if (code === 'content_type_unsupported') return 415;
	if (code === 'rate_limited') return 429;
	if (code === 'profile_not_trusted') return 403;
	if (code === 'profile_unreachable') return 424;
	if (code === 'version_unsupported') return 422;
	if (code === 'product_unresolved') return 404;
	if (code === 'capabilities_incompatible') return 200;
	return 400;
}

export function createUcpError(code) {
	const messages = {
		invalid_profile_url: 'UCP-Agent must contain one HTTPS platform profile URL.',
		invalid_request: 'The compatibility request does not match the published schema.',
		profile_not_trusted: 'The platform profile target or namespace binding is not trusted.',
		profile_unreachable: 'The platform profile could not be fetched safely.',
		version_unsupported: `Only UCP ${UCP_PROTOCOL_VERSION} is supported.`,
		capabilities_incompatible: `The platform profile does not advertise ${UCP_CAPABILITY_NAME} ${UCP_CAPABILITY_VERSION}.`,
		product_unresolved: 'A product locator was unknown or ambiguous. Supply one exact CompatAir ID, EAN/GTIN, MPN, evidenced distributor SKU, reference or merchant URL.',
		body_too_large: 'The UCP request body exceeds the 64 KiB limit.',
		content_type_unsupported: 'The UCP request must use application/json.',
		rate_limited: 'The per-address UCP request limit has been exceeded. Retry after 60 seconds.',
	};
	return {
		ucp: { version: UCP_PROTOCOL_VERSION, status: 'error', capabilities: {} },
		messages: [{ type: 'error', code, content: messages[code] ?? 'UCP request rejected.', severity: 'unrecoverable' }],
		continue_url: 'https://compatair.fr/calculateur/',
	};
}
