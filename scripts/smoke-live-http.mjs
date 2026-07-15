import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

const origin = new URL(process.env.COMPATAIR_SITE_ORIGIN ?? 'https://compatair.fr').origin;
const expectedSha = process.env.COMPATAIR_EXPECTED_RELEASE_SHA;
const mcpEnabled = process.env.MCP_ENABLED === 'true';
const releaseDirectory = process.env.COMPATAIR_RELEASE_DIR;

if (!/^[0-9a-f]{40}$/.test(expectedSha ?? '')) {
	throw new Error('COMPATAIR_EXPECTED_RELEASE_SHA doit contenir un SHA Git complet.');
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

function assert(condition, message) {
	if (!condition) throw new Error(message);
}

function assertHeader(response, name, expected) {
	const actual = response.headers.get(name);
	assert(actual === expected, `${name}: attendu ${JSON.stringify(expected)}, reçu ${JSON.stringify(actual)}`);
}

async function check(label, pathname, inspect, { attempts = 3, method = 'GET', headers = {}, requestBody } = {}) {
	let lastError;
	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		try {
			const url = new URL(pathname, origin);
			const response = await fetch(url, {
				method,
				headers: {
					'Cache-Control': 'no-cache',
					'User-Agent': 'CompatAir deployment smoke',
					...headers,
				},
				body: requestBody,
				redirect: 'manual',
				signal: AbortSignal.timeout(20_000),
			});
			const body = await response.text();
			await inspect({ body, response, url });
			console.log(`OK ${label}`);
			return;
		} catch (error) {
			lastError = error;
			if (attempt < attempts) {
				console.warn(`RETRY ${label} (${attempt}/${attempts}): ${error instanceof Error ? error.message : String(error)}`);
				await wait(attempt * 1_000);
			}
		}
	}
	throw new Error(`${label}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

const status = (expected) => ({ response }) => {
	assert(response.status === expected, `HTTP attendu ${expected}, reçu ${response.status}`);
};

const bodyContains = (needle) => ({ body, response }) => {
	assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
	assert(body.includes(needle), `marqueur absent ${JSON.stringify(needle)}`);
};

await check(
	'release active',
	`/data/release.json?sha=${expectedSha}`,
	({ body, response }) => {
		assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
		const release = JSON.parse(body);
		assert(release.gitSha === expectedSha, `SHA attendu ${expectedSha}, reçu ${JSON.stringify(release.gitSha)}`);
	},
	{ attempts: 8 },
);

await check('accueil', '/', status(200));
await check('robots', '/robots.txt', bodyContains('https://compatair.fr/sitemap-index.xml'));
await check('sitemap', '/sitemap-index.xml', status(200));

for (const [label, pathname, marker] of [
	['scanner', '/scanner/', 'data-compatair-surface="scanner"'],
	['professionnels', '/professionnels/', 'id="merchant-widget-demo"'],
	['widget immuable', '/widget/v1.0.0/compatair-widget.js', 'CompatAir widget API v1'],
	['catalogue', '/data/catalog.json', 'catalogVersion'],
	['catalogue runtime', '/data/runtime-catalog.json', 'catalogVersion'],
	['verdicts', '/data/verdicts.json', 'verdictVersion'],
	['observatoire', '/data/document-quality-observatory.json', 'observatoryVersion'],
	['radar JSON', '/data/contradiction-radar.json', 'radarVersion'],
	['radar public', '/radar-contradictions/', 'Radar des contradictions'],
	['graphe de preuve', '/graphe-preuve/', 'data-proof-graph'],
	['signatures', '/data/signatures.json', 'compatair-2026-01'],
	['clés de signature', '/data/signing-keys.json', 'Ed25519'],
	['documentation UCP FR', '/ucp/', 'fr.compatair.air.compatibility'],
	['documentation UCP EN', '/en/ucp/', 'fr.compatair.air.compatibility'],
	['reçu de compatibilité', '/recu-compatibilite/', 'Vérifier un reçu'],
	['compatibility receipt EN', '/en/compatibility-receipt/', 'Verify a receipt'],
	['schéma reçu', '/schemas/compatibility-receipt-1.0.0.json', 'receipt_id'],
	['benchmark agents', '/benchmark-agents/', '100 scénarios'],
	['benchmark JSON', '/data/agent-fidelity-benchmark.json', '"scenarioCount":100'],
	['leaderboard agents', '/data/agent-fidelity-leaderboard.json', 'awaiting_reproducible_submissions'],
	['Compatibility Impact Feed', '/data/compatibility-impact-feed.json', 'requires_recalculation'],
	['Compatibility Impact Feed EN', '/en/compatibility-impact-feed/', 'Know which decisions require recalculation'],
	['découverte UCP', '/.well-known/ucp', 'fr.compatair.air.compatibility'],
	['OpenAPI UCP', '/openapi/ucp-2026-07-15.json', 'evaluateAirCompatibility'],
	['connaissances agents', '/data/agent-knowledge.json', 'content_sha256'],
	['fraîcheur machine', '/data/freshness.json', 'maximum_age_days'],
	['intégrité machine', '/data/integrity.json', 'sha-256'],
	['changefeed machine', '/data/changefeed.json', 'protocol:ucp:2026-07-15'],
]) {
	await check(label, pathname, bodyContains(marker));
}

const legacyPath = '/compatibilite/einhell-tc-ac-240-50-10-of--ponceuse-excentrique-einhell-tc-pe-150/';
const legacyTarget = 'https://compatair.fr/calculateur/#outil=einhell-tc-pe-150&compresseur=einhell-tc-ac-240-50-10-of';
await check('redirection historique', legacyPath, ({ response, url }) => {
	assert(response.status === 301, `HTTP attendu 301, reçu ${response.status}`);
	const location = response.headers.get('location');
	assert(location, 'header Location absent');
	assert(new URL(location, url).href === legacyTarget, `Location attendue ${legacyTarget}, reçue ${location}`);
	assertHeader(response, 'x-content-type-options', 'nosniff');
	assertHeader(response, 'cache-control', 'public, max-age=86400');
});

await check('compatibilité historique supprimée', '/compatibilite/reference-inconnue--outil-inconnu/', status(410));
await check('offre affiliée absente', '/go/offre-inconnue-ci', ({ body, response }) => {
	assert(response.status === 404, `HTTP attendu 404, reçu ${response.status}`);
	assert(JSON.parse(body).error === 'offer_not_found', 'erreur offer_not_found absente');
	assertHeader(response, 'x-content-type-options', 'nosniff');
});

const offersLocation = releaseDirectory ? new URL('data/offers.json', pathToFileURL(`${releaseDirectory}/`)) : new URL('../dist/data/offers.json', import.meta.url);
const offers = JSON.parse(await readFile(offersLocation, 'utf8'));
const activeOffer = offers.offers?.[0];
if (activeOffer) {
	await check('offre affiliée active', `/go/${encodeURIComponent(activeOffer.id)}`, ({ response, url }) => {
		assert(response.status === 302, `HTTP attendu 302, reçu ${response.status}`);
		const location = response.headers.get('location');
		assert(location, 'header Location absent');
		assert(new URL(location, url).href === activeOffer.url, `Location attendue ${activeOffer.url}, reçue ${location}`);
	});
}

if (mcpEnabled) {
	await check('santé MCP', '/mcp-health', ({ body, response }) => {
		assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
		const health = JSON.parse(body);
		assert(health.status === 'ok', `status MCP attendu ok, reçu ${JSON.stringify(health.status)}`);
		assert(health.mcpServerVersion === '2.1.0', `version MCP attendue 2.1.0, reçue ${JSON.stringify(health.mcpServerVersion)}`);
		assert(health.protocolVersion === '2025-11-25', `protocole MCP inattendu ${JSON.stringify(health.protocolVersion)}`);
		assert(health.methodVersion === '2026.07', `méthode MCP inattendue ${JSON.stringify(health.methodVersion)}`);
		assert(typeof health.verdictVersion === 'string' && health.verdictVersion.length > 0, 'verdictVersion MCP absente');
	});

	await check(
		'API de compatibilité',
		'/api/v1/compatibility?compressorId=einhell-tc-ac-240-50-10-of&toolId=einhell-tc-pe-150',
		({ body, response }) => {
			assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
			const result = JSON.parse(body);
			assert(result.schemaVersion === '2.0.0', 'schemaVersion API attendue 2.0.0');
			assert(result.overall_system_verdict?.scope === 'complete_air_system', 'portée système complet absente');
			assert(result.air_supply_verdict?.scope === 'air_supply', 'portée alimentation en air absente');
			assert(result.compatibility_receipt?.integrity?.algorithm === 'sha-256', 'reçu de compatibilité absent');
			assertHeader(response, 'x-content-type-options', 'nosniff');
		},
	);

	await check('recherche plein texte', '/api/v1/search?q=debit&locale=fr&limit=1', ({ body, response }) => {
		assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
		const result = JSON.parse(body);
		assert(Array.isArray(result.items) && result.items.length > 0, 'résultat de recherche absent');
		assert(typeof result.canonical_url === 'string', 'canonical_url de recherche absente');
	});

	await check('décision UCP', '/api/ucp/v1/compatibility/evaluate', ({ body, response }) => {
		assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
		const result = JSON.parse(body);
		assert(result.capability === 'fr.compatair.air.compatibility', 'capability UCP absente');
		assert(result.overall_system_verdict?.scope === 'complete_air_system', 'portée système UCP absente');
		assert(result.air_supply_verdict?.scope === 'air_supply', 'portée alimentation UCP absente');
		assert(typeof result.canonical_url === 'string' && result.canonical_url.startsWith('https://compatair.fr/'), 'canonical_url UCP absente');
		assert(result.security?.mutates_commerce_state === false, 'frontière read-only UCP absente');
		assertHeader(response, 'cache-control', 'no-store');
	}, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'UCP-Agent': 'profile="https://compatair.fr/examples/ucp/platform-profile.json"' },
		requestBody: JSON.stringify({ ucp: { version: '2026-04-08' }, intent: 'will_it_work', configuration: { compressor: { id: 'kaeser-eurocomp-epc-840-100' }, tools: [{ id: 'einhell-tc-pe-150' }], mode: 'successive' } }),
	});
}

console.log(`Surface HTTP live vérifiée pour ${expectedSha}.`);
