import { createHash } from 'node:crypto';
import { getCollection } from 'astro:content';
import { createAgentKnowledge, agentKnowledgeVersion, toNdjson } from '../domain/agent-knowledge';
import { createCatalogSnapshot } from '../domain/snapshots';
import { englishAgentGuides } from './agent-guides.en';
import { CATALOG_VERIFIED_AT, compressors, tools } from './catalog';
import { createPublicChangefeed } from './changefeed';
import { evidenceHistory } from './evidence-history';
import { glossaryTerms } from './glossary';
import { activeOffers, merchants } from './offers';
import { toolTaxonomy } from './taxonomy';

function sha256(value: string) {
	return createHash('sha256').update(value).digest('hex');
}

function json(value: unknown) {
	return JSON.stringify(value);
}

function latest(values: string[], fallback: string) {
	return values.filter(Boolean).sort().at(-1) ?? fallback;
}

function createDcatCatalog(input: { integrity: Array<{ path: string; sha256: string }>; catalogVersion: string; knowledgeVersion: string }) {
	const checksumByPath = new Map(input.integrity.map((entry) => [entry.path, entry.sha256]));
	const distributions = [
		['Catalog JSON', '/data/catalog.json', 'application/json'],
		['Catalog NDJSON', '/data/catalog.ndjson', 'application/x-ndjson'],
		['Agent knowledge JSON', '/data/agent-knowledge.json', 'application/json'],
		['Agent knowledge NDJSON', '/data/agent-knowledge.ndjson', 'application/x-ndjson'],
		['Evidence citations NDJSON', '/data/citations.ndjson', 'application/x-ndjson'],
		['Evidence history NDJSON', '/data/evidence-history.ndjson', 'application/x-ndjson'],
		['Changefeed JSON', '/data/changefeed.json', 'application/json'],
		['Changefeed NDJSON', '/data/changefeed.ndjson', 'application/x-ndjson'],
	];
	return {
		'@context': {
			dcat: 'http://www.w3.org/ns/dcat#', dct: 'http://purl.org/dc/terms/', spdx: 'http://spdx.org/rdf/terms#', xsd: 'http://www.w3.org/2001/XMLSchema#',
			foaf: 'http://xmlns.com/foaf/0.1/', compatair: 'https://compatair.fr/ns#',
		},
		'@id': 'https://compatair.fr/data/catalog-dcat.jsonld', '@type': 'dcat:Catalog', 'dct:title': 'CompatAir machine data catalog',
		'dct:description': 'Source-linked compressed-air compatibility data, evidence, knowledge, freshness and change records.',
		'dct:publisher': { '@id': 'https://compatair.fr/', '@type': 'foaf:Organization', 'foaf:name': 'CompatAir' },
		'dcat:dataset': [{
			'@id': 'https://compatair.fr/data/datasets/air-compatibility', '@type': 'dcat:Dataset', 'dct:title': 'CompatAir compatibility and evidence data',
			'dcat:version': input.catalogVersion, 'dct:modified': { '@value': CATALOG_VERIFIED_AT, '@type': 'xsd:date' },
			'dct:conformsTo': [{ '@id': 'https://www.w3.org/TR/vocab-dcat-3/' }, { '@id': 'https://compatair.fr/en/ucp/' }],
			'dcat:keyword': ['compressed air', 'pneumatic tools', 'compatibility', 'FAD', 'evidence', 'AirGraph'],
			'dcat:distribution': distributions.map(([title, path, mediaType]) => ({
				'@type': 'dcat:Distribution', 'dct:title': title, 'dcat:downloadURL': { '@id': `https://compatair.fr${path}` }, 'dcat:mediaType': mediaType,
				...(checksumByPath.get(path) ? { 'spdx:checksum': { '@type': 'spdx:Checksum', 'spdx:algorithm': 'spdx:checksumAlgorithm_sha256', 'spdx:checksumValue': checksumByPath.get(path) } } : {}),
			})),
		}],
		'dcat:service': [{
			'@id': 'https://compatair.fr/api/v1', '@type': 'dcat:DataService', 'dct:title': 'CompatAir read-only API',
			'dcat:endpointURL': { '@id': 'https://compatair.fr/api/v1' }, 'dcat:endpointDescription': { '@id': 'https://compatair.fr/openapi/compatair-2026-07-15.json' },
			'dcat:servesDataset': { '@id': 'https://compatair.fr/data/datasets/air-compatibility' },
		}],
		'compatair:knowledgeVersion': input.knowledgeVersion,
	};
}

export async function buildMachinePublication() {
	const guides = await getCollection('guides');
	const knowledge = createAgentKnowledge({ guides, compressors, tools, glossary: glossaryTerms, observedAt: CATALOG_VERIFIED_AT, englishGuides: englishAgentGuides });
	const knowledgeVersion = agentKnowledgeVersion(knowledge);
	const catalog = createCatalogSnapshot({ compressors, tools, toolTaxonomy, verifiedAt: CATALOG_VERIFIED_AT });
	const offerData = { schemaVersion: '1.1.0', offers: activeOffers, merchants: merchants.map(({ id, name }) => ({ id, name })) };
	const offerVersion = sha256(json(offerData));
	const offerObservedAt = latest(activeOffers.map((offer) => offer.collectedAt), CATALOG_VERIFIED_AT);
	const changefeed = createPublicChangefeed({
		catalogVersion: catalog.catalogVersion, catalogObservedAt: CATALOG_VERIFIED_AT, evidenceVersion: evidenceHistory.historyVersion,
		knowledgeVersion, offerVersion, offerObservedAt,
	});
	const catalogLines = [
		...catalog.compressors.map((item) => ({ record_type: 'compressor', compat_air_id: `ca:compressor:${item.id}`, observed_at: CATALOG_VERIFIED_AT, ...item })),
		...catalog.tools.map((item) => ({ record_type: 'tool', compat_air_id: `ca:tool:${item.id}`, observed_at: CATALOG_VERIFIED_AT, ...item })),
	];
	const citations = evidenceHistory.events.map((event) => ({
		citation_id: `ca:citation:${event.fingerprint}`, compat_air_id: `ca:${event.productType}:${event.productId}`, evidence_id: event.evidenceId,
		observed_at: event.occurredAt, kind: event.kind, source_label: event.snapshot.sourceLabel, source_url: event.snapshot.sourceUrl,
		source_type: event.snapshot.sourceType, confidence: event.snapshot.confidence, content_sha256: event.fingerprint,
		canonical_url: event.productType === 'compressor'
			? `https://compatair.fr/compresseurs/${compressors.find((item) => item.id === event.productId)?.slug ?? ''}/`
			: `https://compatair.fr/outils-pneumatiques/${tools.find((item) => item.id === event.productId)?.slug ?? ''}/`,
	}));
	const bytes = new Map<string, string>([
		['/data/agent-knowledge.json', json(knowledge)],
		['/data/agent-knowledge.ndjson', toNdjson(knowledge)],
		['/data/catalog.ndjson', toNdjson(catalogLines)],
		['/data/evidence-history.ndjson', toNdjson(evidenceHistory.events)],
		['/data/citations.ndjson', toNdjson(citations)],
		['/data/changefeed.json', json(changefeed)],
		['/data/changefeed.ndjson', toNdjson(changefeed.events)],
	]);
	const distributionIntegrity = [...bytes].map(([path, content]) => ({ path, sha256: sha256(content), bytes: Buffer.byteLength(content) }));
	const latestGuideAt = latest(guides.map((guide) => (guide.data.updatedDate ?? guide.data.pubDate).toISOString().slice(0, 10)), CATALOG_VERIFIED_AT);
	const freshness = {
		schemaVersion: '1.0.0', evaluated_at: CATALOG_VERIFIED_AT,
		datasets: [
			{ id: 'catalog', path: '/data/catalog.json', observed_at: CATALOG_VERIFIED_AT, maximum_age_days: 90, status: 'current' },
			{ id: 'evidence', path: '/data/evidence-history.json', observed_at: CATALOG_VERIFIED_AT, maximum_age_days: 90, status: 'current' },
			{ id: 'knowledge', path: '/data/agent-knowledge.json', observed_at: latestGuideAt, maximum_age_days: 365, status: 'current' },
			{ id: 'offers', path: '/data/offers.json', observed_at: offerObservedAt, maximum_age_hours: 48, status: activeOffers.length ? 'current' : 'unavailable' },
		],
	};
	const manifest = {
		schemaVersion: '1.0.0', knowledgeVersion, catalogVersion: catalog.catalogVersion, observed_at: CATALOG_VERIFIED_AT,
		records: knowledge.length, languages: {
			fr: { full_text_guides: guides.length, coverage: 1 },
			en: {
				full_text_guides: englishAgentGuides.length,
				human_reviewed_guides: englishAgentGuides.filter((guide) => guide.translationStatus === 'human_reviewed').length,
				coverage: guides.length ? englishAgentGuides.length / guides.length : 0,
				human_reviewed_coverage: guides.length ? englishAgentGuides.filter((guide) => guide.translationStatus === 'human_reviewed').length / guides.length : 0,
				status: englishAgentGuides.length === guides.length ? 'complete_machine_translation' : 'incomplete',
			},
		},
		integrity_algorithm: 'sha-256', integrity_url: 'https://compatair.fr/data/integrity.json',
	};
	const dcat = createDcatCatalog({ integrity: distributionIntegrity, catalogVersion: catalog.catalogVersion, knowledgeVersion });
	bytes.set('/data/agent-knowledge-manifest.json', json(manifest));
	bytes.set('/data/freshness.json', json(freshness));
	bytes.set('/data/catalog-dcat.jsonld', json(dcat));
	const artifactIntegrity = [...bytes].map(([path, content]) => ({ path, sha256: sha256(content), bytes: Buffer.byteLength(content) }));
	return { knowledge, catalogLines, citations, changefeed, integrity: { schemaVersion: '1.0.0', algorithm: 'sha-256', observed_at: CATALOG_VERIFIED_AT, artifacts: artifactIntegrity }, freshness, manifest, dcat, bytes };
}
