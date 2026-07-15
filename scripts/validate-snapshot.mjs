import { readFile } from 'node:fs/promises';

const [file = 'dist/data/catalog.json'] = process.argv.slice(2);
const snapshot = JSON.parse(await readFile(file, 'utf8'));
const errors = [];
if (!/^\d+\.\d+\.\d+$/.test(snapshot.schemaVersion ?? '')) errors.push('schemaVersion invalide');
if (!/^[a-f0-9]{64}$/.test(snapshot.catalogVersion ?? snapshot.snapshotVersion ?? snapshot.historyVersion ?? snapshot.barometerVersion ?? snapshot.observatoryVersion ?? snapshot.radarVersion ?? '')) errors.push('version de snapshot absente');
if (snapshot.compressors) {
	const ids = new Set();
	for (const item of snapshot.compressors) {
		if (ids.has(item.id)) errors.push(`compresseur dupliqué : ${item.id}`); ids.add(item.id);
		if (item.tankLiters < 0 || item.maxPressureBar <= 0 || item.maxPressureBar > 50) errors.push(`caractéristique impossible : ${item.id}`);
		for (const point of item.fadCurve ?? []) if (point.pressureBar < 0 || point.litersPerMinute <= 0 || point.litersPerMinute > 20_000) errors.push(`point FAD impossible : ${item.id}`);
	}
}
if (snapshot.tools) {
	const ids = new Set();
	for (const item of snapshot.tools) {
		if (ids.has(item.id)) errors.push(`outil dupliqué : ${item.id}`); ids.add(item.id);
		if (item.demandModel === 'fixed-flow' && (item.airflowLpm?.typical <= 0 || item.workingPressureBar?.typical <= 0)) errors.push(`profil à débit fixe impossible : ${item.id}`);
		if (item.demandModel === 'per-action' && (item.airPerActionLiters <= 0 || item.workingPressureBar?.typical <= 0)) errors.push(`profil par action impossible : ${item.id}`);
		if (item.demandModel === 'variable-volume' && (!item.demandExplanation || item.workingPressureBar?.max <= 0)) errors.push(`profil à volume variable impossible : ${item.id}`);
	}
}
if (snapshot.offers) {
	const now = Date.now();
	for (const offer of snapshot.offers) {
		const collectedAt = Date.parse(offer.collectedAt);
		if (!Number.isFinite(collectedAt) || collectedAt > now + 5 * 60 * 1_000) errors.push(`date de collecte invalide ou future : ${offer.id}`);
		else if (now - collectedAt > 48 * 3_600_000) errors.push(`offre périmée : ${offer.id}`);
		let url; try { url = new URL(offer.url); } catch {}
		if (url?.protocol !== 'https:') errors.push(`URL non HTTPS : ${offer.id}`);
	}
}
if (snapshot.pairs) {
	if (!/^[a-f0-9]{64}$/.test(snapshot.verdictVersion ?? '')) errors.push('verdictVersion absent');
	if (!/^\d+\.\d+\.\d+$/.test(snapshot.calculationVersion ?? '')) errors.push('calculationVersion invalide');
	const ids = new Set();
	const summary = { continuous: 0, intermittent: 0, incompatible: 0, insufficient_data: 0 };
	for (const pair of snapshot.pairs) {
		if (ids.has(pair.id)) errors.push(`couple de verdict dupliqué : ${pair.id}`); ids.add(pair.id);
		if (!(pair.verdict in summary)) errors.push(`verdict inconnu : ${pair.id}`);
		else summary[pair.verdict] += 1;
		if (!pair.compressorId || !pair.toolId) errors.push(`couple incomplet : ${pair.id}`);
	}
	for (const [verdict, count] of Object.entries(summary)) if (snapshot.summary?.[verdict] !== count) errors.push(`résumé incohérent pour ${verdict}`);
}
if (snapshot.events) {
	const ids = new Set();
	for (const event of snapshot.events) {
		if (ids.has(event.id)) errors.push(`événement historique dupliqué : ${event.id}`); ids.add(event.id);
		if (!event.productId || !event.evidenceId || !/^[a-f0-9]{64}$/.test(event.fingerprint ?? '')) errors.push(`événement historique invalide : ${event.id}`);
		if (event.snapshot?.id !== event.evidenceId) errors.push(`instantané de preuve incohérent : ${event.id}`);
	}
}
if (snapshot.brands) {
	let officialRank = 0;
	for (const brand of snapshot.brands) {
		const expectedRank = snapshot.rankingPublished && brand.sampleSize >= (snapshot.minimumSampleForRanking ?? 10) ? ++officialRank : null;
		if (brand.rank !== expectedRank || brand.sampleSize < 1 || brand.score < 0 || brand.score > 100 || brand.coverageScore < 0 || brand.coverageScore > 100) errors.push(`ligne de baromètre invalide : ${brand.brand}`);
		if (Object.values(brand.criteria ?? {}).some((value) => value < 0 || value > 100)) errors.push(`critère de baromètre invalide : ${brand.brand}`);
		if ((brand.references?.length ?? 0) !== brand.sampleSize) errors.push(`échantillon de baromètre incomplet : ${brand.brand}`);
	}
}
if (snapshot.metrics?.correctionLeadTime) {
	const { correctionLeadTime, multiPressureFad, referenceStability, contradictionResponses } = snapshot.metrics;
	if (!['measured', 'insufficient_data'].includes(correctionLeadTime.status)) errors.push('statut du délai de correction invalide');
	if (correctionLeadTime.medianDays !== null && correctionLeadTime.medianDays < 0) errors.push('délai de correction négatif');
	if (multiPressureFad.availableCount > multiPressureFad.eligibleCount || multiPressureFad.percentage < 0 || multiPressureFad.percentage > 100) errors.push('métrique FAD multi-pression invalide');
	if (referenceStability.stableCount + new Set(referenceStability.changes.map((change) => change.productId)).size + referenceStability.missingBaselineCount !== referenceStability.monitoredCount) errors.push('métrique de stabilité incohérente');
	if (contradictionResponses.answeredCount + contradictionResponses.openCount !== contradictionResponses.totalCount || contradictionResponses.responseRate < 0 || contradictionResponses.responseRate > 100) errors.push('métrique de contradiction incohérente');
}
if (snapshot.records && snapshot.channels) {
	const channels = new Set(['manual', 'manufacturer', 'merchant', 'measured']);
	if (snapshot.channels.length !== channels.size || snapshot.channels.some((channel) => !channels.delete(channel))) errors.push('canaux du radar invalides');
	if (snapshot.summary?.totalCount !== snapshot.records.length) errors.push('résumé du radar incohérent');
	for (const record of snapshot.records) {
		if ((record.claims?.length ?? 0) < 2 || new Set(record.claims.map((claim) => JSON.stringify(claim.normalizedValue))).size < 2) errors.push(`contradiction invalide : ${record.id}`);
		if (record.claims.some((claim) => claim.evidence?.id !== claim.evidenceId)) errors.push(`preuve de contradiction incohérente : ${record.id}`);
		if (record.decision?.outcome === 'retain_claim' && !record.claims.some((claim) => claim.id === record.decision.selectedClaimId)) errors.push(`décision de contradiction invalide : ${record.id}`);
		if (record.decision?.outcome !== 'retain_claim' && record.decision?.selectedClaimId !== null) errors.push(`fusion silencieuse possible : ${record.id}`);
	}
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Snapshot valide : ${file}`);
