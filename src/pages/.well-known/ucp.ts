import type { APIRoute } from 'astro';

export const prerender = true;

const profile = {
	ucp: {
		version: '2026-04-08',
		services: {
			'fr.compatair.air': [
				{ version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/', transport: 'rest', endpoint: 'https://compatair.fr/api/ucp/v1', schema: 'https://compatair.fr/openapi/ucp-2026-07-15.json' },
				{ version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/', transport: 'mcp', endpoint: 'https://compatair.fr/mcp', schema: 'https://compatair.fr/openrpc/ucp-2026-07-15.json' },
			],
		},
		capabilities: {
			'fr.compatair.air.compatibility': [{
				version: '2026-07-15', spec: 'https://compatair.fr/en/ucp/#capability', schema: 'https://compatair.fr/schemas/ucp-compatibility-2026-07-15.json',
				config: { read_only: true, accepts_pii: false, accepts_payment: false, mutates_commerce_state: false, canonical_attribution_required: true },
			}],
		},
	},
	business: { name: 'CompatAir', operator_url: 'https://compatair.fr/', privacy_policy: 'https://compatair.fr/confidentialite/', security_policy: 'https://compatair.fr/securite/' },
};

export const GET: APIRoute = () => new Response(`${JSON.stringify(profile, null, 2)}\n`, {
	headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=300', 'X-Content-Type-Options': 'nosniff' },
});
