import { checkServerIdentity } from 'node:tls';
import { request as httpsRequest } from 'node:https';

const publicHost = process.env.COMPATAIR_MCP_SMOKE_HOST ?? 'compatair.fr';
const connectAddress = process.env.COMPATAIR_MCP_SMOKE_ADDRESS ?? '127.0.0.1';

function requestPayload(profile, id) {
	return JSON.stringify({
		jsonrpc: '2.0',
		id,
		method: 'tools/call',
		params: {
			name: 'evaluate_air_compatibility',
			arguments: {
				meta: { 'ucp-agent': { profile } },
				ucp: { version: '2026-04-08' },
				intent: 'will_it_work',
				configuration: {
					compressor: { id: 'kaeser-eurocomp-epc-840-100' },
					tools: [{ id: 'einhell-tc-pe-150' }],
					mode: 'successive',
				},
			},
		},
	});
}

function callMcp(profile, id) {
	const payload = requestPayload(profile, id);
	return new Promise((resolve, reject) => {
		const outgoing = httpsRequest({
			host: connectAddress,
			port: 443,
			servername: publicHost,
			path: '/mcp',
			method: 'POST',
			headers: {
				Host: publicHost,
				Accept: 'application/json, text/event-stream',
				'Content-Type': 'application/json',
				'Content-Length': Buffer.byteLength(payload),
				'MCP-Protocol-Version': '2025-11-25',
				'User-Agent': 'CompatAir MCP profile contract smoke',
			},
			checkServerIdentity: (_hostname, certificate) => checkServerIdentity(publicHost, certificate),
			timeout: 10_000,
		}, (incoming) => {
			const chunks = [];
			incoming.on('data', (chunk) => chunks.push(chunk));
			incoming.on('end', () => resolve({
				body: Buffer.concat(chunks).toString('utf8'),
				contentType: incoming.headers['content-type'],
				statusCode: incoming.statusCode,
			}));
		});
		outgoing.on('timeout', () => outgoing.destroy(new Error('MCP profile contract smoke timed out')));
		outgoing.on('error', reject);
		outgoing.end(payload);
	});
}

function parseJsonResponse(response, expectedStatus) {
	if (response.statusCode !== expectedStatus) {
		throw new Error(`MCP profile contract returned HTTP ${response.statusCode}; expected ${expectedStatus}`);
	}
	if (typeof response.contentType !== 'string' || !response.contentType.includes('application/json')) {
		throw new Error(`MCP profile contract returned ${JSON.stringify(response.contentType)} instead of JSON`);
	}
	return JSON.parse(response.body);
}

const accepted = parseJsonResponse(await callMcp(
	'https://compatair.fr/examples/ucp/platform-profile.json',
	'install-profile-contract',
), 200);
if (accepted.jsonrpc !== '2.0' || accepted.id !== 'install-profile-contract' || accepted.error) {
	throw new Error(`MCP profile contract returned an invalid JSON-RPC response: ${JSON.stringify(accepted.error)}`);
}
const decision = accepted.result?.structuredContent;
if (
	decision?.capability !== 'fr.compatair.air.compatibility'
	|| decision?.overall_system_verdict?.scope !== 'complete_air_system'
	|| decision?.air_supply_verdict?.scope !== 'air_supply'
	|| typeof decision?.canonical_url !== 'string'
	|| !decision.canonical_url.startsWith('https://compatair.fr/')
) {
	throw new Error('MCP profile contract returned an incomplete compatibility decision');
}

const unreachable = parseJsonResponse(await callMcp(
	'https://agent.example/.well-known/ucp',
	'install-external-profile-contract',
), 424);
if (
	unreachable.jsonrpc !== '2.0'
	|| unreachable.id !== 'install-external-profile-contract'
	|| unreachable.error?.data?.messages?.[0]?.code !== 'profile_unreachable'
) {
	throw new Error('MCP external profile failure did not reach the application trust boundary');
}

console.log('CompatAir MCP profile contracts verified through Apache.');
