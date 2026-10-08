import {
	JOURNEY_CONTEXT_CLEAR_EVENT,
	JOURNEY_CONTEXT_EVENT,
	JOURNEY_CONTEXT_STORAGE_KEY,
	journeyContextDetail,
	journeyContextTitle,
	mergeJourneyContext,
	parseJourneyContext,
	type JourneyContextPatch,
	type JourneyContextSnapshot,
} from '../domain/journey-context';

const root = document.querySelector<HTMLElement>('[data-journey-context]');
const title = root?.querySelector<HTMLElement>('[data-journey-title]');
const detail = root?.querySelector<HTMLElement>('[data-journey-detail]');
const stage = root?.querySelector<HTMLElement>('[data-journey-stage]');
const continueLink = root?.querySelector<HTMLAnchorElement>('[data-journey-continue]');
const editLink = root?.querySelector<HTMLAnchorElement>('[data-journey-edit]');
let snapshot: JourneyContextSnapshot | undefined;

function readSnapshot() {
	try { return parseJourneyContext(localStorage.getItem(JOURNEY_CONTEXT_STORAGE_KEY)); }
	catch { return undefined; }
}

function saveSnapshot(next: JourneyContextSnapshot | undefined) {
	try {
		if (next) localStorage.setItem(JOURNEY_CONTEXT_STORAGE_KEY, JSON.stringify(next));
		else localStorage.removeItem(JOURNEY_CONTEXT_STORAGE_KEY);
	} catch {
		// Le parcours continue dans l’URL si le stockage local est indisponible.
	}
}

function stageLabel(value: JourneyContextSnapshot['stage']) {
	return value === 'compared' ? 'Comparaison en cours' : value === 'sized' ? 'Besoin calculé' : 'Produit identifié';
}

function render() {
	if (!root) return;
	root.hidden = !snapshot;
	if (!snapshot) return;
	if (title) title.textContent = journeyContextTitle(snapshot);
	if (detail) detail.textContent = journeyContextDetail(snapshot);
	if (stage) stage.textContent = stageLabel(snapshot.stage);
	if (continueLink) continueLink.href = snapshot.continueHref ?? snapshot.editHref ?? '/scanner/';
	if (editLink) editLink.href = snapshot.editHref ?? (snapshot.configuration ? `/calculateur/#config=${snapshot.configuration}` : '/scanner/');
}

snapshot = readSnapshot();
render();

window.addEventListener(JOURNEY_CONTEXT_EVENT, (event) => {
	const patch = (event as CustomEvent<JourneyContextPatch>).detail;
	if (!patch || typeof patch !== 'object') return;
	snapshot = mergeJourneyContext(snapshot, patch);
	saveSnapshot(snapshot);
	render();
});

root?.querySelector<HTMLButtonElement>('[data-journey-clear]')?.addEventListener('click', () => {
	snapshot = undefined;
	saveSnapshot(undefined);
	render();
	window.dispatchEvent(new CustomEvent(JOURNEY_CONTEXT_CLEAR_EVENT));
	if (/^\/(scanner|calculateur|comparateur)\/$/.test(location.pathname)) location.assign(location.pathname);
});
