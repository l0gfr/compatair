import { describe, expect, it } from 'vitest';
import {
	authorizeUcpRequest,
	buildPinnedProfileRequestOptions,
	createUcpError,
	isPublicNetworkAddress,
	parseUcpAgentHeader,
	samplePlatformProfile,
	UCP_CAPABILITY_NAME,
	UCP_CAPABILITY_VERSION,
	UCP_PROTOCOL_VERSION,
	validateUcpEvaluationRequest,
} from './ucp-core.mjs';

describe('UCP trust boundary', () => {
	it('parses only one canonical HTTPS platform profile', () => {
		expect(parseUcpAgentHeader('profile="https://agent.example/.well-known/ucp"')?.href).toBe('https://agent.example/.well-known/ucp');
		for (const value of [
			'profile="http://agent.example/profile"',
			'profile="https://user:secret@agent.example/profile"',
			'profile="https://agent.example:8443/profile"',
			'profile="https://localhost/profile"',
			'profile="https://127.0.0.1/profile"',
			'profile="https://[2606:4700:4700::1111]/profile"',
			'profile="https://agent.example/profile"; extra="x"',
		]) expect(parseUcpAgentHeader(value)).toBeUndefined();
	});

	it('rejects private, local, documentation and transition network addresses', () => {
		for (const address of ['127.0.0.1', '10.0.0.1', '172.16.0.1', '192.168.1.1', '169.254.1.1', '100.64.0.1', '192.0.2.1', '192.88.99.1', '198.51.100.2', '203.0.113.2', '::1', 'fd00::1', 'fe80::1', 'fec0::1', '64:ff9b::a00:1', '100::1', '2001::1', '2001:20::1', '2001:db8::1', '2002:7f00:1::', '3fff::1', '5f00::1', '::ffff:127.0.0.1', '::ffff:7f00:1', '::ffff:0:7f00:1']) expect(isPublicNetworkAddress(address), address).toBe(false);
		expect(isPublicNetworkAddress('1.1.1.1')).toBe(true);
		expect(isPublicNetworkAddress('192.0.1.1')).toBe(true);
		expect(isPublicNetworkAddress('198.51.99.1')).toBe(true);
		expect(isPublicNetworkAddress('2606:4700:4700::1111')).toBe(true);
	});

	it('connects only to the prevalidated public address while preserving TLS identity', () => {
		const options = buildPinnedProfileRequestOptions(new URL('https://agent.example/.well-known/ucp?version=1'), '1.1.1.1', 4);
		expect(options).toMatchObject({
			hostname: '1.1.1.1',
			family: 4,
			port: 443,
			servername: 'agent.example',
			path: '/.well-known/ucp?version=1',
			headers: { Host: 'agent.example' },
			agent: false,
		});
		expect(() => buildPinnedProfileRequestOptions(new URL('https://agent.example/profile'), '127.0.0.1', 4)).toThrow('profile_not_trusted');
		expect(() => buildPinnedProfileRequestOptions(new URL('https://agent.example/profile'), '2606:4700:4700::1111', 4)).toThrow('profile_not_trusted');
	});

	it('requires a matching platform capability and version', async () => {
		const request = { headers: { 'ucp-agent': 'profile="https://agent.example/profile"' } } as any;
		const body = { ucp: { version: UCP_PROTOCOL_VERSION } };
		const accepted = await authorizeUcpRequest(request, body, async () => samplePlatformProfile);
		expect(accepted.profile.ucp.capabilities[UCP_CAPABILITY_NAME][0].version).toBe(UCP_CAPABILITY_VERSION);
		await expect(authorizeUcpRequest(request, body, async () => ({ ucp: { version: UCP_PROTOCOL_VERSION, capabilities: {} } }))).rejects.toThrow('capabilities_incompatible');
		await expect(authorizeUcpRequest(request, body, async () => ({
			ucp: { version: UCP_PROTOCOL_VERSION, capabilities: { [UCP_CAPABILITY_NAME]: [{ version: UCP_CAPABILITY_VERSION, spec: 'https://attacker.example/spec', schema: 'https://compatair.fr/schema' }] } },
		}))).rejects.toThrow('profile_not_trusted');
	});

	it('accepts real decision intents and exactly one locator per product', () => {
		const base = {
			ucp: { version: UCP_PROTOCOL_VERSION }, intent: 'find_minimal_change',
			configuration: { compressor: { ean: '4006825640885' }, tools: [{ mpn: '604115500', quantity: 2 }], mode: 'successive' },
			constraints: { max_total_minor: 60000, currency: 'EUR', minimum_merchants: 3, country: 'FR' },
		};
		expect(validateUcpEvaluationRequest(base)).toMatchObject({ intent: 'find_minimal_change', mode: 'successive', tools: [{ quantity: 2 }] });
		expect(validateUcpEvaluationRequest({ ...base, configuration: { ...base.configuration, compressor: { ean: '4006825640885', name: 'ambiguous' } } })).toBeUndefined();
		expect(validateUcpEvaluationRequest({ ...base, configuration: { ...base.configuration, tools: [{ url: 'http://merchant.example/product' }] } })).toBeUndefined();
		expect(validateUcpEvaluationRequest({ ...base, checkout: {} })).toBeUndefined();
	});

	it('permits compressor selection only for complete-system intent', () => {
		const build = validateUcpEvaluationRequest({
			ucp: { version: UCP_PROTOCOL_VERSION }, intent: 'build_complete_system',
			configuration: { tools: [{ compatair_id: 'ca:tool:einhell-tc-pe-150' }] },
		});
		expect(build?.compressor).toBeUndefined();
		expect(validateUcpEvaluationRequest({ ucp: { version: UCP_PROTOCOL_VERSION }, intent: 'will_it_work', configuration: { tools: [{ id: 'einhell-tc-pe-150' }] } })).toBeUndefined();
	});

	it('returns structured, non-stateful UCP failures', () => {
		expect(createUcpError('product_unresolved')).toMatchObject({
			ucp: { version: UCP_PROTOCOL_VERSION, status: 'error', capabilities: {} },
			messages: [{ type: 'error', code: 'product_unresolved', severity: 'unrecoverable' }],
		});
	});
});
