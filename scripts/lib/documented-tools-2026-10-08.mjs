import { createHash } from 'node:crypto';

const approvedSnapshotDigest = '843ebde155d92b322ec1530df1ecf28e929a92bfc4a3eb6bb31140523001a394';
const digest = value => createHash('sha256').update(typeof value === 'string' ? value : JSON.stringify(value)).digest('hex');
const positive = value => typeof value === 'number' && Number.isFinite(value) && value > 0;
const slug = value => String(value).normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase().replaceAll('α', 'alpha').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const identity = (brand, model) => `${['hitachi', 'hikoki', 'metabohpt'].includes(slug(brand).replaceAll('-', '')) ? 'hikoki' : slug(brand).replaceAll('-', '')}:${slug(model).replaceAll('-', '')}`;
const sourceHosts = new Set(['www.anest-iwata-coating.com', 'www.anest-iwata.co.jp', 'www.ani.it', 'sagola.com', 'www.prona.com.cn', 'www.ltf.it', 'ltf.it', 'www.schneider-airsystems.de', 'hutchinsmfg.com', 'binks.canto.com']);
const pointStatuses = new Set(['declared-spraying-point', 'declared-spraying-assembly-point', 'declared-blowing-point', 'declared-working-point', 'unqualified']);
const withheldStatuses = new Set(['contradictory', 'normalized-volume-conditions-missing', 'free-speed-without-working-pressure', 'missing-auxiliary', 'unqualified-operating-point', 'per-action-reference-missing']);

export function documentedToolsOctober8IdentityKey(brand, model) {
	return identity(brand, model);
}

export function assertDocumentedToolsOctober8NewIdentities(rows, existing) {
	const known = new Set();
	for (const product of existing) {
		for (const value of [product.model, product.mpn, ...(product.identifierAliases ?? []).filter(a => ['mpn', 'legacy_mpn'].includes(a.type)).map(a => a.value)]) {
			if (value) known.add(identity(product.brand, value));
		}
	}
	const batch = new Set();
	for (const row of rows) {
		for (const value of [...new Set([row.model, row.mpn].filter(Boolean))]) {
			const key = identity(row.brand, value);
			if (known.has(key) || batch.has(key)) throw new Error(`Identité outil déjà présente : ${row.brand} ${value}`);
			batch.add(key);
		}
	}
}

// Only native L/min at an explicitly paired operation point enter the minute model.
// NL/min, free-speed values and missing auxiliary circuits stay outside that model.
export function documentedToolsOctober8Demand(row) {
	if (row.calculationStatus === 'declared-per-action-point') {
		const { actionPoint: action, pressurePoint: pressure } = row;
		if (!action || action.unit !== 'L/action' || action.regime !== 'per-cycle' || action.referenceBasis !== 'manufacturer-compressor-sizing-formula' || !positive(action.value) || !action.actionLabel || Number(action.value.toFixed(3)) !== action.value) throw new Error('Volume par action comparable au dimensionnement constructeur non documenté');
		if (!pressure || pressure.unit !== 'bar' || pressure.meaning !== 'per-action-measurement-point' || !positive(pressure.value) || pressure.value > 25 || Number(pressure.value.toFixed(3)) !== pressure.value) throw new Error('Pression de consommation par action non documentée');
		return { demandModel: 'per-action', workingPressureBar: { min: pressure.value, typical: pressure.value, max: pressure.value }, airPerActionLiters: action.value, actionLabel: action.actionLabel };
	}
	if (pointStatuses.has(row.calculationStatus)) {
		const { flowPoint: flow, pressurePoint: pressure } = row;
		const unqualified = row.calculationStatus === 'unqualified';
		if (!flow || flow.unit !== 'L/min' || !positive(flow.value) || !(unqualified ? ['spraying', 'blowing', 'working-load', 'unqualified'] : ['spraying', 'blowing', 'working-load']).includes(flow.regime)) throw new Error('Consommation au point en action non documentée');
		if (!pressure || !['bar', 'MPa'].includes(pressure.unit) || !positive(pressure.value) || !(unqualified ? ['spray-inlet-point', 'spray-supply-assembly-point', 'blowing-inlet-point', 'tool-working-inlet-point', 'manufacturer-recommended-operating-pressure'] : ['spray-inlet-point', 'spray-supply-assembly-point', 'blowing-inlet-point', 'tool-working-inlet-point']).includes(pressure.meaning)) throw new Error('Pression d’entrée appariée non documentée');
		const expected = {
			'declared-spraying-point': ['spraying', 'spray-inlet-point'],
			'declared-spraying-assembly-point': ['spraying', 'spray-supply-assembly-point'],
			'declared-blowing-point': ['blowing', 'blowing-inlet-point'],
			'declared-working-point': ['working-load', 'tool-working-inlet-point'],
		}[row.calculationStatus];
		if (!unqualified && (flow.regime !== expected[0] || pressure.meaning !== expected[1])) throw new Error('Régime et pression du point discordants');
		if (row.calculationStatus === 'declared-spraying-assembly-point') {
			const points = row.assemblyPressurePoints;
			if (!Array.isArray(points) || ![1, 2].includes(points.length) || points[0].position !== 'upstream-rp1' || points[0].unit !== 'bar' || pressure.unit !== 'bar' || points[0].value !== pressure.value || !row.pressureOriginal?.includes('RP1') || (points.length === 2 && (points[1].position !== 'internal-tmd1' || points[1].unit !== 'bar' || !row.pressureOriginal.includes('TMD1'))) || points.some(p => !positive(p.value) || p.value > 25)) throw new Error('Lieux de pression du montage constructeur non documentés');
		}

		const bar = Number((pressure.value * (pressure.unit === 'MPa' ? 10 : 1)).toFixed(3));
		if (bar > 25 || Number(bar.toFixed(3)) !== bar || Number(flow.value.toFixed(3)) !== flow.value) throw new Error('Point de pression ou précision non admissible');
		return {
			demandModel: 'fixed-flow',
			workingPressureBar: { min: bar, typical: bar, max: bar },
			airflowLpm: { min: flow.value, typical: flow.value, max: flow.value },
			...(row.calculationStatus === 'unqualified' ? { airflowBasis: 'unqualified' } : {}),
		};
	}
	if (!withheldStatuses.has(row.calculationStatus)) throw new Error('Qualification de consommation absente');
	const explanation = row.calculationStatus === 'contradictory'
		? 'Les sources primaires divergent sur le point de consommation ou la configuration. La compatibilité reste indéterminée jusqu’à leur résolution.'
		: row.calculationStatus === 'per-action-reference-missing'
			? 'La consommation est publiée en litres par action, mais la base air libre et les conditions de référence volumique ne sont pas définies. Aucun débit par minute comparable au FAD n’est calculé.'
		: row.calculationStatus === 'normalized-volume-conditions-missing'
			? 'Les conditions de référence du volume normalisé et/ou le régime de mesure manquent. Le débit publié reste hors du calcul FAD.'
			: row.calculationStatus === 'unqualified-operating-point'
				? 'Le régime de consommation et/ou la pression de travail appariée ne sont pas définis. Le débit publié reste hors du calcul FAD.'
			: row.calculationStatus === 'missing-auxiliary'
				? 'La pression et la consommation d’un circuit auxiliaire ne sont pas documentées. La demande globale reste indéterminée.'
				: 'La consommation à vide et la pression maximale de service ne définissent pas un point de fonctionnement en charge.';
	return { demandModel: 'variable-volume', workingPressureBar: row.calculationStatus === 'contradictory' ? {} : { ...(row.pressureKnownBar ?? {}) }, demandExplanation: explanation };
}

function evidenceFor(source, page, locator) {
	const pdfPage = source.documentFormat === 'pdf' ? page : undefined;
	return {
		id: `october8-tools-${source.id}${page ? `-p${page}` : locator ? `-${slug(locator)}` : ''}`,
		sourceUrl: `${source.url}${pdfPage ? `#page=${pdfPage}` : ''}`,
		sourceLabel: `${source.sourceLabel}${pdfPage ? `, page PDF ${pdfPage}` : locator ? `, ${locator}` : ''}`,
		sourceType: source.documentFormat === 'pdf' ? 'manual' : 'manufacturer',
		sourceRole: 'primary', retrievedAt: source.observedAt.slice(0, 10), confidence: 'B',
		notes: `Réponse primaire SHA-256 ${source.sha256}. Déclaration fabricant, sans essai physique CompatAir.`,
	};
}

export function buildDocumentedToolsOctober8(snapshot) {
	if (snapshot.capturedAt !== '2026-10-08' || !Array.isArray(snapshot.tools) || snapshot.tools.length !== snapshot.toolCount) throw new Error('Lot outils incohérent');
	const sources = new Map();
	for (const source of snapshot.sources) {
		const url = new URL(source.url);
		if (url.protocol !== 'https:' || !sourceHosts.has(url.hostname) || url.username || url.password || source.httpStatus !== 200 || !Number.isSafeInteger(source.bytes) || source.bytes <= 0 || !/^[a-f0-9]{64}$/.test(source.sha256) || source.sourceRole !== 'primary' || !['pdf', 'html'].includes(source.documentFormat) || !source.observedAt.startsWith('2026-10-08')) throw new Error('Capture primaire non admissible');
		if (source.contentType && !(source.documentFormat === 'pdf' ? /application\/pdf/i : /text\/html/i).test(source.contentType)) throw new Error('MIME du document primaire discordant');
		if (source.documentFormat === 'pdf' && (!Number.isInteger(source.pageCount) || source.pageCount < 1)) throw new Error('Pagination du document primaire absente');
		if (source.technicalAssets) {
			for (const asset of source.technicalAssets) {
				const assetUrl = new URL(asset.url);
				if (source.documentFormat !== 'html' || source.url !== asset.parentUrl || source.brands.length !== 1 || source.brands[0] !== 'Prona' || assetUrl.protocol !== 'https:' || assetUrl.hostname !== 'omo-oss-image.thefastimg.com' || assetUrl.username || assetUrl.password || asset.httpStatus !== 200 || !Number.isSafeInteger(asset.bytes) || asset.bytes <= 0 || !/^[a-f0-9]{64}$/.test(asset.sha256) || !/^image\/(jpeg|png)$/i.test(asset.contentType) || !asset.observedAt.startsWith('2026-10-08')) throw new Error('Tableau technique lié par le fabricant non admissible');
			}
		}
		if (sources.has(source.id)) throw new Error('Source en double');
		sources.set(source.id, source);
	}
	const pages = new Map(snapshot.sourcePages.map(page => [page.id, page]));
	if (pages.size !== snapshot.sourcePages.length) throw new Error('Extrait source en double');
	for (const page of pages.values()) {
		const source = sources.get(page.sourceId);
		if (!source || typeof page.transcript !== 'string' || page.transcript.length < 10 || digest(page.transcript) !== page.transcriptSha256 || (source.documentFormat === 'html' ? page.page !== null : !Number.isInteger(page.page) || page.page < 1 || page.page > source.pageCount)) throw new Error('Extrait primaire non admissible');
		if (page.sourceAssetId && !source.technicalAssets?.some(asset => asset.id === page.sourceAssetId)) throw new Error('Extrait de tableau fabricant sans capture liée');
	}
	assertDocumentedToolsOctober8NewIdentities(snapshot.tools, []);
	const products = snapshot.tools.map(row => {
		const source = sources.get(row.sourceId), page = pages.get(row.sourcePageId);
		if (!source || !source.brands.includes(row.brand) || !page || page.sourceId !== row.sourceId || page.page !== row.page || !row.model || row.facts.length < 2 || !row.functionalDifference || !row.physicalFamily || row.mpn?.includes('*')) throw new Error('Identité ou faits du modèle non documentés');
		const demand = documentedToolsOctober8Demand(row);
		const id = slug(`${row.categoryId} ${row.brand} ${row.model}`);
		const primary = evidenceFor(source, row.page, row.sourceLocator);
		if (row.sourceAssetId) {
			const asset = source.technicalAssets?.find(item => item.id === row.sourceAssetId);
			if (!asset || page.sourceAssetId !== asset.id) throw new Error('Tableau du modèle sans capture fabricant liée');
			primary.notes += ` Tableau technique lié par la fiche : ${asset.url}, SHA-256 ${asset.sha256}, capture ${asset.observedAt.slice(0, 10)}.`;
		}
		const evidence = [primary];
		for (const reference of row.secondarySources ?? []) {
			const additional = sources.get(reference.sourceId);
			if (!additional || !additional.brands.includes(row.brand) || !reference.quote || (reference.page && (reference.page < 1 || reference.page > additional.pageCount))) throw new Error('Source de régime ou contradiction non admissible');
			evidence.push(evidenceFor(additional, reference.page));
		}
		const evidenceIds = evidence.map(item => item.id);
		const facts = row.facts.map(([label, value]) => ({ label, value, evidenceIds: [primary.id] }));
		const originalFlow = row.flowOriginal ?? (row.flowPoint ? `${row.flowPoint.value} ${row.flowPoint.unit}` : 'Non publiée pour cette référence dans la source consultée');
		facts.push({ label: 'Consommation publiée dans son unité originale', value: originalFlow, evidenceIds: [primary.id] });
		facts.push({ label: 'Pression dans la source', value: row.pressureOriginal ?? (row.pressurePoint ? `${row.pressurePoint.value} ${row.pressurePoint.unit} à l’entrée, point de consommation` : 'Non publiée pour cette référence dans la source consultée'), evidenceIds: [primary.id] });
		const limitations = [...row.limitations, 'Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément.'];
		const fieldSources = demand.demandModel === 'fixed-flow'
			? { workingPressureBar: evidenceIds, airflowLpm: evidenceIds, ...(demand.airflowBasis ? { airflowBasis: evidenceIds } : {}) }
			: demand.demandModel === 'per-action'
				? { workingPressureBar: evidenceIds, airPerActionLiters: evidenceIds, actionLabel: evidenceIds }
				: { workingPressureBar: evidenceIds, demandExplanation: evidenceIds };
		const assemblyScope = row.calculationStatus === 'declared-spraying-assembly-point' ? ` Montage de référence : ${row.pressureOriginal}. La pression calculée est la lecture amont RP1 ; les pertes d’un autre montage ne sont pas établies.` : '';
		const overview = demand.demandModel === 'fixed-flow' && !demand.airflowBasis
			? `${row.brand} ${row.model}. Consommation constructeur au point documenté : ${demand.airflowLpm.typical} L/min à ${demand.workingPressureBar.typical} bar.${assemblyScope} ${row.functionalDifference}`
			: demand.demandModel === 'per-action'
				? `${row.brand} ${row.model}. Consommation constructeur : ${demand.airPerActionLiters} L par cycle à ${demand.workingPressureBar.typical} bar. Le besoin par minute dépend de la cadence réelle. ${row.functionalDifference}`
				: `${row.brand} ${row.model}. ${demand.demandExplanation ?? 'Le catalogue publie un débit sans protocole de mesure identifié pour cette version exacte.'} ${row.functionalDifference}`;
		return {
			id, slug: id, categoryId: row.categoryId, category: row.categoryId,
			label: `${row.brand} ${row.model}`, brand: row.brand, model: row.model,
			...(row.mpn ? { mpn: row.mpn } : {}), ...demand, confidence: 'B',
			variant: { familyId: slug(`${row.brand} ${row.physicalFamily}`), label: row.model, distinguishingAttributes: Object.fromEntries(row.facts.slice(0, 5)) },
			image: { src: `/images/products/${id}.svg`, alt: `Repères techniques : ${row.brand} ${row.model}`, sourceUrl: source.url, sourceLabel: 'Carte technique CompatAir, données déclarées par le fabricant' },
			editorial: { overview, verifiedFacts: facts.map(field => `${field.label} : ${field.value}.`), limitations },
			specifications: facts, evidence, fieldSources,
			notes: [row.functionalDifference, ...limitations],
		};
	});
	if (digest(snapshot) !== approvedSnapshotDigest) throw new Error('Snapshot outils différent de la capture relue et approuvée');
	return products;
}
