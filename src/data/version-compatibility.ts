export const versionCompatibility = {
	schemaVersion: '1.0.0',
	updatedAt: '2026-07-20',
	principle: 'Each version describes a distinct compatibility boundary; matching numbers are not implied.',
	runtime: {
		applicationPackage: { version: '0.1.0', scope: 'Private repository package lifecycle; not a public API promise.' },
		node: { version: '>=24 <25', scope: 'Supported server and release runtime.' },
		astro: { version: '7.0.7', scope: 'Static site build framework.' },
		typescript: { version: '6.0.3', scope: 'Strict source validation toolchain.' },
	},
	interfaces: [
		{ name: 'MCP server', version: '3.0.0', compatibility: 'Major decision-core contract. The main tools/list surface contains seven tools.' },
		{ name: 'MCP protocol', version: '2025-11-25', compatibility: 'Preferred negotiation revision; 2025-06-18 and 2025-03-26 remain accepted.' },
		{ name: 'MCP telemetry', version: '2.1.0', compatibility: 'Separates traffic classes and publishes an exact traffic × tool × outcome × normalized error-code breakdown for newly recorded calls.' },
		{ name: 'HTTP API', version: 'v1', compatibility: 'Read-only compatibility, search, evidence, changefeed and receipt verification routes.' },
		{ name: 'UCP protocol', version: '2026-04-08', compatibility: 'Read-only pneumatic compatibility capability.' },
		{ name: 'UCP capability', version: '2026-07-15', compatibility: 'fr.compatair.air.compatibility.' },
	],
	decisionContracts: [
		{ name: 'Calculation engine', version: '1.3.0', compatibility: 'Deterministic pressure, FAD, cycle and explicit-demand calculations.' },
		{ name: 'Public method', version: '2026.07', compatibility: 'Interpretation and response-method contract carried by public results.' },
		{ name: 'Verdict schema', version: '2.0.0', compatibility: 'Separates air_supply, complete_air_system, request and commercial scopes.' },
		{ name: 'Compatibility receipt', version: '1.0.0', compatibility: 'Deterministic SHA-256 receipt contract.' },
		{ name: 'AirGraph', version: '0.1.0', compatibility: 'Namespaced product, configuration, requirement and evidence graph.' },
		{ name: 'Catalog', version: 'content-derived', compatibility: 'Snapshot identifier changes with normalized catalog content.' },
	],
	mcpProfiles: [
		{ profile: 'decision-core', endpoint: 'https://compatair.fr/mcp', tools: 7, purpose: 'Default model-facing decision surface.' },
		{ profile: 'extended', endpoint: 'https://compatair.fr/mcp/extended', tools: 4, purpose: 'Evidence, explanation, complete comparison and changefeed.' },
		{ profile: 'legacy', endpoint: 'https://compatair.fr/mcp/legacy', tools: 9, purpose: 'Migration-only historical surface with explicit successors.' },
	],
	licensing: {
		current: 'All rights reserved / UNLICENSED.',
		meaning: 'Public access permits inspection and integration with the live contracts; it does not grant a general right to copy, modify or redistribute schemas, SDK material or catalog data.',
		decisionRequired: 'A separate license for OpenAPI, JSON Schema and future SDK material requires an explicit owner decision and does not imply opening the proprietary catalog.',
	},
} as const;
