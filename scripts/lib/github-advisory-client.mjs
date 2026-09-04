const GITHUB_ADVISORY_API = 'https://api.github.com/advisories';
const API_VERSION = '2022-11-28';
const BATCH_SIZE = 80;
const MAX_PAGES = 10;
const PAGE_SIZE = 100;

async function fetchJson(url, { fetchImplementation, token, attempts, retryDelay }) {
	let lastError;
	for (let attempt = 1; attempt <= attempts; attempt += 1) {
		try {
			const headers = {
				accept: 'application/vnd.github+json',
				'user-agent': 'CompatAir-security-audit/1.0',
				'x-github-api-version': API_VERSION,
			};
			if (token) headers.authorization = `Bearer ${token}`;
			const response = await fetchImplementation(url, {
				headers,
				signal: AbortSignal.timeout(30_000),
			});
			if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
			const body = await response.json();
			if (!Array.isArray(body)) throw new Error('la réponse doit être un tableau JSON');
			return body;
		} catch (error) {
			lastError = error;
			if (attempt < attempts) await retryDelay(attempt * 1_000);
		}
	}
	throw lastError;
}

export async function fetchGitHubAdvisories(packages, {
	fetchImplementation = fetch,
	token = process.env.GITHUB_TOKEN,
	attempts = 3,
	retryDelay = (delay) => new Promise((resolve) => setTimeout(resolve, delay)),
} = {}) {
	const packageReferences = [...new Set(packages.map(({ name, version }) => `${name}@${version}`))].sort();
	const result = {};

	for (let index = 0; index < packageReferences.length; index += BATCH_SIZE) {
		const batch = packageReferences.slice(index, index + BATCH_SIZE);
		const names = new Set(batch.map((reference) => reference.slice(0, reference.lastIndexOf('@'))));

		for (let page = 1; page <= MAX_PAGES; page += 1) {
			const url = new URL(GITHUB_ADVISORY_API);
			url.searchParams.set('ecosystem', 'npm');
			url.searchParams.set('affects', batch.join(','));
			url.searchParams.set('is_withdrawn', 'false');
			url.searchParams.set('per_page', String(PAGE_SIZE));
			url.searchParams.set('page', String(page));
			const advisories = await fetchJson(url, { fetchImplementation, token, attempts, retryDelay });

			for (const advisory of advisories) {
				if (
					!advisory ||
					typeof advisory !== 'object' ||
					typeof advisory.severity !== 'string' ||
					typeof advisory.summary !== 'string' ||
					typeof advisory.html_url !== 'string' ||
					!Array.isArray(advisory.vulnerabilities)
				) {
					throw new Error('avis GitHub malformé');
				}
				const matchingNames = new Set(advisory.vulnerabilities
					.filter((entry) => entry?.package?.ecosystem === 'npm' && names.has(entry.package.name))
					.map((entry) => entry.package.name));
				if (!matchingNames.size) throw new Error(`avis ${advisory.ghsa_id ?? 'sans identifiant'} sans paquet npm correspondant`);
				for (const name of matchingNames) {
					if (!result[name]) result[name] = [];
					result[name].push({
						severity: advisory.severity === 'medium' ? 'moderate' : advisory.severity,
						title: advisory.summary,
						url: advisory.html_url,
					});
				}
			}

			if (advisories.length < PAGE_SIZE) break;
			if (page === MAX_PAGES) throw new Error(`pagination GitHub supérieure à ${MAX_PAGES * PAGE_SIZE} avis pour un lot`);
		}
	}

	return result;
}
