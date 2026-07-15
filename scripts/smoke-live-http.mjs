import { readFile } from 'node:fs/promises';

const origin = new URL(process.env.COMPATAIR_SITE_ORIGIN ?? 'https://compatair.fr').origin;
const expectedSha = process.env.COMPATAIR_EXPECTED_RELEASE_SHA;
const mcpEnabled = process.env.MCP_ENABLED === 'true';

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

async function check(label, pathname, inspect, { attempts = 3 } = {}) {
	let lastError;
	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		try {
			const url = new URL(pathname, origin);
			const response = await fetch(url, {
				headers: {
					'Cache-Control': 'no-cache',
					'User-Agent': 'CompatAir deployment smoke',
				},
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

const offers = JSON.parse(await readFile(new URL('../dist/data/offers.json', import.meta.url), 'utf8'));
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
		assert(typeof health.verdictVersion === 'string' && health.verdictVersion.length > 0, 'verdictVersion MCP absente');
	});

	await check(
		'API de compatibilité',
		'/api/v1/compatibility?compressorId=einhell-tc-ac-240-50-10-of&toolId=einhell-tc-pe-150',
		({ body, response }) => {
			assert(response.status === 200, `HTTP attendu 200, reçu ${response.status}`);
			assert(JSON.parse(body).schemaVersion === '1.0.0', 'schemaVersion API attendue 1.0.0');
			assertHeader(response, 'x-content-type-options', 'nosniff');
		},
	);
}

console.log(`Surface HTTP live vérifiée pour ${expectedSha}.`);
