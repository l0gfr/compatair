export type PublicChange = {
	id: string;
	type: 'protocol' | 'method' | 'catalog' | 'evidence' | 'knowledge' | 'offers';
	version: string;
	observed_at: string;
	summary: string;
	breaking: boolean;
	canonical_url: string;
};

export const protocolChanges: PublicChange[] = [
	{
		id: 'protocol:ucp:2026-07-15',
		type: 'protocol',
		version: '2026-07-15',
		observed_at: '2026-07-15',
		summary: 'Initial read-only UCP compatibility capability, REST and MCP bindings, closed schemas and attribution URLs.',
		breaking: false,
		canonical_url: 'https://compatair.fr/ucp/',
	},
	{
		id: 'protocol:mcp:2026.07',
		type: 'protocol',
		version: '2026.07',
		observed_at: '2026-07-15',
		summary: 'Streamable HTTP MCP contract with mandatory canonical URL, evidence URLs, limitations and AirGraph identifiers.',
		breaking: false,
		canonical_url: 'https://compatair.fr/mcp-documentation/',
	},
	{
		id: 'knowledge:machine-surface:2026-07-15',
		type: 'knowledge',
		version: '2026-07-15',
		observed_at: '2026-07-15',
		summary: 'Full-text agent corpus, JSON and NDJSON distributions, data freshness, integrity manifest and public citation records.',
		breaking: false,
		canonical_url: 'https://compatair.fr/ucp/#machine-data',
	},
];

export function createPublicChangefeed(input: {
	catalogVersion: string;
	catalogObservedAt: string;
	evidenceVersion: string;
	knowledgeVersion: string;
	offerVersion?: string;
	offerObservedAt?: string;
}) {
	const events = ([
		...protocolChanges,
		{
			id: `catalog:${input.catalogVersion}`,
			type: 'catalog',
			version: input.catalogVersion,
			observed_at: input.catalogObservedAt,
			summary: 'Current source-linked technical catalog snapshot.',
			breaking: false,
			canonical_url: 'https://compatair.fr/data/catalog.json',
		},
		{
			id: `evidence:${input.evidenceVersion}`,
			type: 'evidence',
			version: input.evidenceVersion,
			observed_at: input.catalogObservedAt,
			summary: 'Current append-only evidence history and evidence fingerprints.',
			breaking: false,
			canonical_url: 'https://compatair.fr/preuves/',
		},
		{
			id: `knowledge:${input.knowledgeVersion}`,
			type: 'knowledge',
			version: input.knowledgeVersion,
			observed_at: input.catalogObservedAt,
			summary: 'Current searchable agent knowledge corpus.',
			breaking: false,
			canonical_url: 'https://compatair.fr/data/agent-knowledge.json',
		},
		...(input.offerVersion ? [{
			id: `offers:${input.offerVersion}`,
			type: 'offers' as const,
			version: input.offerVersion,
			observed_at: input.offerObservedAt ?? input.catalogObservedAt,
			summary: 'Current dated merchant snapshot, independent from technical verdicts.',
			breaking: false,
			canonical_url: 'https://compatair.fr/data/offers.json',
		}] : []),
	] satisfies PublicChange[]).sort((left, right) => right.observed_at.localeCompare(left.observed_at) || left.id.localeCompare(right.id));
	return { schemaVersion: '1.0.0', events };
}
