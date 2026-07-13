const searchRoot = document.querySelector<HTMLElement>('[data-site-search]');
const searchInput = searchRoot?.querySelector<HTMLInputElement>('[data-search-input]');
const searchResults = searchRoot?.querySelector<HTMLElement>('[data-search-results]');
const indexElement = document.querySelector<HTMLElement>('[data-search-index]');
const searchIndex: Array<{ title: string; type: string; url: string; keywords: string }> = JSON.parse(indexElement?.dataset.searchIndex ?? '[]');
const normalizeSearch = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
searchInput?.addEventListener('input', () => {
	if (!searchResults) return;
	const query = normalizeSearch(searchInput.value.trim());
	if (query.length < 2) { const p = document.createElement('p'); p.textContent = 'Saisissez au moins deux caractères.'; searchResults.replaceChildren(p); return; }
	const matches = searchIndex.filter((item) => normalizeSearch(`${item.title} ${item.keywords}`).includes(query)).slice(0, 7);
	if (!matches.length) { const p = document.createElement('p'); p.textContent = 'Aucun résultat dans les données publiées.'; searchResults.replaceChildren(p); return; }
	searchResults.replaceChildren(...matches.map((item) => { const link = document.createElement('a'); link.href = item.url; const strong = document.createElement('strong'); const small = document.createElement('small'); strong.textContent = item.title; small.textContent = item.type; link.append(strong, small); return link; }));
});
