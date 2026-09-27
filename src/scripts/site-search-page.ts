export {};
const root = document.querySelector<HTMLElement>('[data-search-hub]');
const input = root?.querySelector<HTMLInputElement>('[data-page-search]');
const output = root?.querySelector<HTMLElement>('[data-page-results]');
const searchStatus = root?.querySelector<HTMLElement>('[data-search-count]');
const more = root?.querySelector<HTMLButtonElement>('[data-search-more]');
const empty = root?.querySelector<HTMLElement>('[data-search-empty]');
const suggestions = root?.querySelector<HTMLElement>('[data-search-suggestions]');
let activeType = '', nextCursor: string | undefined, shown = 0, requestId = 0;
let abort: AbortController | undefined, timer: ReturnType<typeof setTimeout>;

async function refresh(append = false) {
	if (!input || !output || !searchStatus || !more || !empty) return;
	const query = input.value.trim(), current = ++requestId;
	abort?.abort(); abort = new AbortController();
	if (!append) { output.replaceChildren(); shown = 0; nextCursor = undefined; }
	more.hidden = true; empty.hidden = true;
	if (suggestions) suggestions.hidden = query.length >= 2;
	if (query.length < 2) { searchStatus.textContent = 'Saisissez au moins deux caractères.'; return; }
	searchStatus.textContent = 'Recherche dans le corpus publié…';
	try {
		const params = new URLSearchParams({ q: query, kind: 'site', limit: '18', ...(activeType ? { type: activeType } : {}), ...(append && nextCursor ? { cursor: nextCursor } : {}) });
		const response = await fetch(`/api/v1/search/catalog?${params}`, { headers: { Accept: 'application/json' }, signal: AbortSignal.any([abort.signal, AbortSignal.timeout(15_000)]) });
		if (!response.ok) throw new Error('unavailable');
		const value = await response.json();
		if (!Array.isArray(value.items) || value.items.length > 18 || (value.nextCursor !== undefined && (typeof value.nextCursor !== 'string' || value.nextCursor.length > 1024))) throw new Error('invalid');
		const links = value.items.map((item: { url: string; title: string; type: string; keywords?: string }) => {
			if (typeof item.url !== 'string' || typeof item.title !== 'string' || typeof item.type !== 'string') throw new Error('invalid');
			const url = new URL(item.url, location.origin);
			if (url.origin !== location.origin || url.username || url.password) throw new Error('invalid');
			const link = document.createElement('a'), type = document.createElement('span'), title = document.createElement('strong');
			link.href = url.href; type.textContent = item.type; title.textContent = item.title; link.append(type, title);
			return link;
		});
		if (current !== requestId) return;
		output.append(...links); shown += links.length; nextCursor = value.nextCursor;
		searchStatus.textContent = `${shown} résultat${shown > 1 ? 's' : ''} affiché${shown > 1 ? 's' : ''}${nextCursor ? ' · d’autres résultats sont disponibles' : ''}.`;
		empty.hidden = shown > 0; more.hidden = !nextCursor;
	} catch {
		if (current !== requestId) return;
		searchStatus.textContent = 'Recherche indisponible ou catalogue mis à jour. Relancez la recherche pour repartir de la première page.';
	}
}
input?.addEventListener('input', () => {
	clearTimeout(timer); abort?.abort(); ++requestId;
	timer = setTimeout(() => { void refresh(); }, 180);
});
for (const button of root?.querySelectorAll<HTMLButtonElement>('[data-search-type]') ?? []) button.addEventListener('click', () => {
	clearTimeout(timer); activeType = button.dataset.searchType ?? '';
	for (const candidate of root?.querySelectorAll<HTMLButtonElement>('[data-search-type]') ?? []) {
		candidate.classList.toggle('active', candidate === button); candidate.setAttribute('aria-pressed', String(candidate === button));
	}
	void refresh();
});
for (const button of root?.querySelectorAll<HTMLButtonElement>('[data-search-suggestion]') ?? []) button.addEventListener('click', () => {
	if (!input) return;
	clearTimeout(timer); input.value = button.dataset.searchSuggestion ?? ''; input.focus(); void refresh();
});
more?.addEventListener('click', () => { void refresh(true); });
if (input) input.value = new URLSearchParams(location.search).get('q') ?? '';
void refresh();
