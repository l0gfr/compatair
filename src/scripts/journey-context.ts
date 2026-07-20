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
const decisionRail = document.querySelector<HTMLElement>('[data-decision-rail]');
const decisionNext = decisionRail?.querySelector<HTMLAnchorElement>('[data-decision-next]');
let snapshot: JourneyContextSnapshot | undefined;
let journeyAdvancedOnPage = false;

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

function renderDecisionRail() {
	if (!decisionRail || !snapshot) return;
	const stepOrder = ['identify', 'size', 'compare', 'prepare', 'verify'];
	const identifiedLeadsToComparison = snapshot.stage === 'identified' && Boolean(snapshot.continueHref?.startsWith('/comparateur/'));
	const pageIndex = location.pathname.startsWith('/scanner/') ? 0 : location.pathname.startsWith('/calculateur/') ? 1 : location.pathname.startsWith('/comparateur/') ? 2 : -1;
	const activeIndex = !journeyAdvancedOnPage && pageIndex >= 0 ? pageIndex : snapshot.stage === 'compared' ? 3
		: snapshot.stage === 'sized' || (identifiedLeadsToComparison && !location.pathname.startsWith('/calculateur/')) ? 2
			: 1;
	for (const step of decisionRail.querySelectorAll<HTMLElement>('[data-decision-step]')) {
		const index = stepOrder.indexOf(step.dataset.decisionStep ?? '');
		const state = index < activeIndex ? 'completed' : index === activeIndex ? 'current' : 'available';
		step.dataset.state = state;
		const link = step.querySelector<HTMLAnchorElement>('a');
		if (state === 'current') link?.setAttribute('aria-current', 'step');
		else link?.removeAttribute('aria-current');
	}
	if (!decisionNext) return;
	decisionNext.href = snapshot.continueHref ?? (activeIndex === 1 ? '/calculateur/' : activeIndex === 2 ? '/comparateur/' : '/passeport/');
	const labels = ['Identifier', 'Dimensionner', 'Comparer', 'Préparer', 'Vérifier sur le terrain'];
	const label = labels[activeIndex] ?? 'Continuer';
	decisionNext.querySelector('span')?.replaceChildren(`Étape suivante · ${label}`);
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
	renderDecisionRail();
}

snapshot = readSnapshot();
render();

window.addEventListener(JOURNEY_CONTEXT_EVENT, (event) => {
	const patch = (event as CustomEvent<JourneyContextPatch>).detail;
	if (!patch || typeof patch !== 'object') return;
	journeyAdvancedOnPage = true;
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
