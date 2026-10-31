import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { editorialSelection, emptyQualifications, qualificationId, assertQualificationSources, validateQualifications } from './indexation-qualifications.mjs';
import { planIndexation } from './indexation-planner.mjs';
import { candidateQuotaGroup, indexationDay, validatePath, validateSupplementalPublication, assertSupplementalPublicationBase } from './indexation-policy.mjs';

export function indexationPolicyHash(policy) {
	return createHash('sha256').update(JSON.stringify(policy)).digest('hex');
}

export function indexationCorpusHash(candidates) {
	const inputs = candidates.map(entry => {
		validatePath(entry.path);
		if (typeof entry.value?.contentHash !== 'string' || !/^[a-f0-9]{64}$/.test(entry.value.contentHash)) throw new Error('Empreinte complète de candidat absente.');
		return { path: entry.path, contentHash: entry.value.contentHash };
	}).sort((a, b) => a.path.localeCompare(b.path, 'en'));
	return createHash('sha256').update(JSON.stringify(inputs)).digest('hex');
}

export function validateEditorialReviews(registry) {
	if (registry?.schemaVersion !== 1 || registry.timeZone !== 'Europe/Paris' || !Array.isArray(registry.reviews)) throw new Error('Registre de revue éditoriale invalide.');
	const days = new Set();
	const supplementaryDays = new Set();
	for (const review of registry.reviews) {
		if (typeof review.publicationDay !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(review.publicationDay) || days.has(`${review.publicationDay}:${review.supplementalPublication ? 'supplement' : 'ordinary'}`)
			|| typeof review.sourceReleaseSha !== 'string' || !/^[a-f0-9]{40}$/.test(review.sourceReleaseSha)
			|| typeof review.policyHash !== 'string' || !/^[a-f0-9]{64}$/.test(review.policyHash)
			|| typeof review.corpusHash !== 'string' || !/^[a-f0-9]{64}$/.test(review.corpusHash)
			|| typeof review.reviewedAt !== 'string' || !Number.isFinite(Date.parse(review.reviewedAt)) || indexationDay(new Date(review.reviewedAt)) !== review.publicationDay
			|| !['approved', 'partial', 'blocked'].includes(review.status) || typeof review.note !== 'string' || !review.note.trim()
			|| !Array.isArray(review.pages) || !review.pages.length) throw new Error('Revue éditoriale invalide ou jour dupliqué.');
  if (review.supplementalPublication) {
   const authorization = validateSupplementalPublication(review.supplementalPublication);
   if (!days.has(`${review.publicationDay}:ordinary`) || supplementaryDays.has(review.publicationDay)
    || authorization.publicationDay !== review.publicationDay || authorization.sourceReleaseSha !== review.sourceReleaseSha
    || Date.parse(authorization.authorizedAt) > Date.parse(review.reviewedAt)) throw new Error('Revue complémentaire sans autorisation cohérente.');
   supplementaryDays.add(review.publicationDay);
  }
  days.add(`${review.publicationDay}:${review.supplementalPublication ? 'supplement' : 'ordinary'}`);
		const paths = new Set();
		for (const page of review.pages) {
			validatePath(page.path);
			if (!candidateQuotaGroup(page.path) || paths.has(page.path) || typeof page.contentHash !== 'string' || !/^[a-f0-9]{64}$/.test(page.contentHash)
				|| !['approved', 'rejected', 'needs-correction', 'deferred'].includes(page.decision) || typeof page.note !== 'string' || !page.note.trim()
				|| (page.qualificationId !== undefined && (typeof page.qualificationId !== 'string' || !/^[a-f0-9]{64}$/.test(page.qualificationId) || page.decision !== 'approved'))) throw new Error('Décision de page invalide.');
			if (review.status === 'approved' && page.decision !== 'approved') throw new Error('Lot approuvé avec une page non approuvée.');
			paths.add(page.path);
		}
		const approved = review.pages.filter(page => page.decision === 'approved').length;
		if (review.status === 'partial' && (!approved || approved === review.pages.length)) throw new Error('Lot partiel sans décisions distinctes.');
		if (review.status === 'blocked' && approved === review.pages.length) throw new Error('Lot bloqué sans réserve éditoriale.');
	}
	return registry;
}

function decision(registry, { now, previousSha, policy, corpusHash }) {
	validateEditorialReviews(registry);
	const authorization = policy.supplementalPublication;
 const supplementary = authorization?.publicationDay === indexationDay(now) && authorization.sourceReleaseSha === previousSha;
 const review = registry.reviews.find(entry => entry.publicationDay === indexationDay(now) && Boolean(entry.supplementalPublication) === supplementary);
 if (review?.supplementalPublication && !isDeepStrictEqual(review.supplementalPublication, authorization)) return { status: 'blocked', reason: 'stale-supplemental-review' };
	if (!review) return { status: 'blocked', reason: 'missing-editorial-review' };
	if (Date.parse(review.reviewedAt) > now.getTime()) return { status: 'blocked', reason: 'future-editorial-review' };
	if (review.sourceReleaseSha !== previousSha || review.policyHash !== indexationPolicyHash(policy)) return { status: 'blocked', reason: 'stale-editorial-review' };
	if (review.status !== 'blocked' && review.corpusHash !== corpusHash) return { status: 'blocked', reason: 'changed-editorial-corpus' };
	return { status: review.status, reason: review.status === 'approved' ? 'editorial-review-approved' : review.status === 'partial' ? 'editorial-review-partially-approved' : 'editorial-review-rejected', review };
}

function matches(review, paths, pages) {
	const reviewedPaths = review.pages.map(page => page.path).sort();
	return isDeepStrictEqual([...paths].sort(), reviewedPaths)
		&& review.pages.every(page => pages.get(page.path)?.contentHash === page.contentHash);
}

// A proposal is only a reading list. It cannot replace the reviewed build
// artifact: no manifest, release permission or approved decisions are exported.
export function createIndexationReviewProposal(options, registry = { schemaVersion: 1, timeZone: 'Europe/Paris', reviews: [] }, qualifications = emptyQualifications()) {
	validateEditorialReviews(registry);
	const selection = editorialSelection(options.candidates, registry, qualifications, options);
	options = { ...options, reservedPaths: selection.reservedPaths, preferredPaths: selection.preferredPaths };
	const now = options.now ?? new Date();
	const plan = planIndexation({ ...options, approvedPaths: undefined, now, gitSha: 'development', allowRelease: true });
	return {
		schemaVersion: 1, proposalOnly: true, createdAt: now.toISOString(), publicationDay: indexationDay(now),
		sourceReleaseSha: options.previous.gitSha, policyHash: indexationPolicyHash(options.policy),
		corpusHash: indexationCorpusHash(options.candidates), limits: plan.limits,
		...(plan.supplementalPublication ? { supplementalPublication: plan.supplementalPublication } : {}),
		proposed: plan.released, pages: plan.report.filter(page => page.status === 'released').map(page => ({ ...page, status: 'proposed', ...(selection.qualified.has(page.path) ? { qualification: { id: qualificationId(selection.qualified.get(page.path)), sourceDocuments: selection.qualified.get(page.path).sourceDocuments, reviewedAt: selection.qualified.get(page.path).reviewedAt } } : {}) })),
		reserved: selection.reservedPaths.length,
	};
}

// Mechanical scoring proposes a batch. Only a versioned review of the exact
// pages and complete input hashes can admit it. Failure never selects substitutes.
export function planReviewedIndexation(options, registry, qualifications = emptyQualifications()) {
	validateEditorialReviews(registry);
	const selection = editorialSelection(options.candidates, registry, qualifications, options);
	options = { ...options, reservedPaths: selection.reservedPaths, preferredPaths: selection.preferredPaths };
	const now = options.now ?? new Date();
	const corpusHash = indexationCorpusHash(options.candidates);
	const gate = decision(registry, { now, previousSha: options.previous.gitSha, policy: options.policy, corpusHash });
	const deployable = options.allowRelease !== false;
	if (gate.review && gate.status !== 'blocked') for (const page of gate.review.pages) if (page.qualificationId !== undefined) {
		const entry = selection.qualified.get(page.path);
		if (!entry || page.qualificationId !== qualificationId(entry) || page.decision !== 'approved') throw new Error('Qualification réutilisée périmée ou divergente.');
		assertQualificationSources(entry, gate.review.sourceChecks, now);
	}
	let plan = planIndexation({ ...options, approvedPaths: undefined, now, allowRelease: deployable && gate.status !== 'blocked' });
	if (plan.released && !matches(gate.review, plan.manifest.batches.at(-1).paths, new Map(options.candidates.map(entry => [entry.path, entry.value])))) {
		gate.status = 'blocked';
		gate.reason = 'changed-editorial-selection-or-input';
		plan = planIndexation({ ...options, approvedPaths: undefined, now, allowRelease: false });
	}
	if (plan.released && gate.status === 'partial') {
		const approvedPaths = gate.review.pages.filter(page => page.decision === 'approved').map(page => page.path);
		plan = planIndexation({ ...options, now, allowRelease: true, approvedPaths });
		const decisions = new Map(gate.review.pages.map(page => [page.path, page.decision]));
		for (const page of plan.report) if (decisions.has(page.path) && decisions.get(page.path) !== 'approved') page.reason = `editorial-review-${decisions.get(page.path)}`;
	}
	plan.allowRelease = deployable;
	plan.editorialReview = {
		publicationDay: indexationDay(now), status: gate.status, reason: gate.reason,
		...(plan.released ? { corpusHash, pages: gate.review.pages.filter(page => page.decision === 'approved').map(({ path, contentHash, qualificationId }) => ({ path, contentHash, ...(qualificationId ? { qualificationId } : {}) })) } : {}),
	};
	for (const entry of plan.report) if (deployable && entry.reason === 'offline') entry.reason = gate.reason;
	return plan;
}

// Deployment verifies the same versioned review independently of the planner.
// Rebuilds with no new admissions preserve history without needing a new review.
export function assertReviewedAdmissions(plan, previous, registry, policy, now = new Date(), qualifications = emptyQualifications(), rulesHash) {
	validateEditorialReviews(registry);
	const batches = plan.manifest.batches.slice(previous.batches.length);
	assertSupplementalPublicationBase(previous, plan.manifest, policy);
	if (!batches.length) return;
	const gate = decision(registry, { now, previousSha: previous.gitSha, policy, corpusHash: plan.editorialReview?.corpusHash });
	validateQualifications(qualifications, now);
	for (const page of gate.review?.pages ?? []) if (page.qualificationId !== undefined) {
		const entry = qualifications.entries.find(entry => qualificationId(entry) === page.qualificationId);
		if (!entry || entry.path !== page.path || entry.contentHash !== page.contentHash || entry.rulesHash !== rulesHash || page.decision !== 'approved'
			|| plan.editorialReview?.pages?.find(proof => proof.path === page.path)?.qualificationId !== page.qualificationId) throw new Error('Preuve de qualification divergente au déploiement.');
		assertQualificationSources(entry, gate.review.sourceChecks, now);
	}
	if (batches.length !== 1 || gate.status === 'blocked' || plan.editorialReview?.status !== gate.status
		|| plan.editorialReview.publicationDay !== indexationDay(now)
		|| !matches({ pages: gate.review.pages.filter(page => page.decision === 'approved') }, batches[0].paths, new Map((plan.editorialReview.pages ?? []).map(page => [page.path, page])))) throw new Error('Nouvelles admissions sans revue éditoriale exacte et actuelle.');
}
