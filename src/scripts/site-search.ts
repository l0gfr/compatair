const searchRoot = document.querySelector<HTMLElement>('[data-site-search]');
const searchInput = searchRoot?.querySelector<HTMLInputElement>('[data-search-input]');
const searchResults = searchRoot?.querySelector<HTMLElement>('[data-search-results]');
type SearchItem = { title: string; type: string; url: string; keywords: string };
let searchIndex: SearchItem[] | undefined;
let searchIndexRequest: Promise<SearchItem[]> | undefined;

function loadSearchIndex() {
	if (searchIndex) return Promise.resolve(searchIndex);
	searchIndexRequest ??= fetch('/data/search-index.json', { headers: { Accept: 'application/json' } })
		.then((response) => {
			if (!response.ok) throw new Error(`search_index_${response.status}`);
			return response.json() as Promise<SearchItem[]>;
		})
		.then((items) => {
			if (!Array.isArray(items)) throw new Error('search_index_invalid');
			searchIndex = items;
			return items;
		})
		.catch((error) => {
			searchIndexRequest = undefined;
			throw error;
		});
	return searchIndexRequest;
}

const normalizeSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
searchRoot?.addEventListener('toggle', () => {
	if (searchRoot instanceof HTMLDetailsElement && searchRoot.open) void loadSearchIndex().catch(() => undefined);
});
searchInput?.addEventListener('input', async () => {
	if (!searchResults) return;
	const query = normalizeSearch(searchInput.value.trim());
	if (query.length < 2) { const p = document.createElement('p'); p.textContent = 'Saisissez au moins deux caractères.'; searchResults.replaceChildren(p); return; }
	let items: SearchItem[];
	try { items = await loadSearchIndex(); }
	catch { const p = document.createElement('p'); p.textContent = 'Recherche momentanément indisponible.'; searchResults.replaceChildren(p); return; }
	if (query !== normalizeSearch(searchInput.value.trim())) return;
	const tokens = query.split(/\s+/).filter(Boolean);
	const matches = items
		.map((item) => {
			const title = normalizeSearch(item.title);
			const corpus = normalizeSearch(`${item.title} ${item.keywords}`);
			if (!tokens.every((token) => corpus.includes(token))) return undefined;
			const score = Number(title === query) * 100
				+ Number(title.startsWith(query)) * 40
				+ tokens.filter((token) => title.includes(token)).length * 8
				+ Number(corpus.includes(query)) * 4;
			return { item, score };
		})
		.filter((match): match is { item: SearchItem; score: number } => Boolean(match))
		.sort((left, right) => right.score - left.score || left.item.title.localeCompare(right.item.title, 'fr'))
		.slice(0, 7)
		.map(({ item }) => item);
	if (!matches.length) { const p = document.createElement('p'); p.textContent = 'Aucun résultat dans les données publiées.'; searchResults.replaceChildren(p); return; }
	searchResults.replaceChildren(...matches.map((item) => { const link = document.createElement('a'); link.href = item.url; const strong = document.createElement('strong'); const small = document.createElement('small'); strong.textContent = item.title; small.textContent = item.type; link.append(strong, small); return link; }));
});
