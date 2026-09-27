const searchRoot = document.querySelector<HTMLElement>('[data-site-search]');
const searchInput = searchRoot?.querySelector<HTMLInputElement>('[data-search-input]');
const searchResults = searchRoot?.querySelector<HTMLElement>('[data-search-results]');
type SearchItem = { title: string; type: string; url: string; keywords: string };
let pendingSearch: AbortController | undefined;
async function searchCatalog(query: string): Promise<SearchItem[]> {
	pendingSearch?.abort();
	pendingSearch = new AbortController();
	const response = await fetch(`/api/v1/search/catalog?${new URLSearchParams({ q: query, kind: 'site', limit: '7' })}`, { headers: { Accept: 'application/json' }, signal: pendingSearch.signal });
	if (!response.ok) throw new Error('search_unavailable');
	const value = await response.json();
	if (!Array.isArray(value.items) || value.items.length > 7) throw new Error('search_invalid');
	return value.items.filter((item: SearchItem) => typeof item.title === 'string' && typeof item.type === 'string' && typeof item.url === 'string' && new URL(item.url, location.origin).origin === location.origin);
}

const normalizeSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
searchRoot?.addEventListener('toggle', () => {
	if (searchRoot instanceof HTMLDetailsElement && searchRoot.open) {
		requestAnimationFrame(() => searchInput?.focus());
	}
});
let searchTimer: ReturnType<typeof setTimeout>;
searchInput?.addEventListener('input', () => {
 clearTimeout(searchTimer); pendingSearch?.abort();
 searchTimer = setTimeout(() => { void renderSearch(); }, 180);
});
async function renderSearch() {
	if (!searchResults || !searchInput) return;
	const query = normalizeSearch(searchInput.value.trim());
	if (query.length < 2) { const p = document.createElement('p'); p.textContent = 'Saisissez au moins deux caractères.'; searchResults.replaceChildren(p); return; }
	let matches: SearchItem[];
	try { matches = await searchCatalog(query); }
	catch {
		if (query !== normalizeSearch(searchInput.value.trim())) return;
		const p = document.createElement('p'); p.textContent = 'Recherche momentanément indisponible.'; searchResults.replaceChildren(p); return;
	}
	if (query !== normalizeSearch(searchInput.value.trim())) return;
	if (!matches.length) { const p = document.createElement('p'); p.textContent = 'Aucun résultat dans les données publiées.'; searchResults.replaceChildren(p); return; }
	searchResults.replaceChildren(...matches.map((item) => { const link = document.createElement('a'); link.href = item.url; const strong = document.createElement('strong'); const small = document.createElement('small'); strong.textContent = item.title; small.textContent = item.type; link.append(strong, small); return link; }));
}

document.addEventListener('keydown', (event) => {
	if (!searchRoot || !(searchRoot instanceof HTMLDetailsElement)) return;
	const target = event.target as HTMLElement | null;
	if (event.key !== '/' || target?.matches('input, textarea, select, [contenteditable="true"]') || event.metaKey || event.ctrlKey || event.altKey) return;
	event.preventDefault(); searchRoot.open = true; searchInput?.focus();
});
