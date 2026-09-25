/** Offline import of the visually reviewed tables in CP General Industry v6.08.2026. */
export const CP_INDUSTRIAL_SOURCE = 'https://tools.cp.com/content/dam/pim/itba/cp/literature/catalogs/General-Industry_catalog_CP_EN.pdf';
const categories = {
	'meuleuse': ['Meuleuse pneumatique', 'continuous'],
	'cle-a-chocs': ['Clé à chocs', 'burst'],
	'ponceuse-orbitale': ['Ponceuse orbitale pneumatique', 'continuous'],
	'ponceuse-rotative': ['Ponceuse rotative pneumatique', 'continuous'],
	'ponceuse-vibrante': ['Ponceuse vibrante pneumatique', 'continuous'],
	'ponceuse-bande': ['Ponceuse à bande pneumatique', 'continuous'],
	'perceuse': ['Perceuse pneumatique', 'intermittent'],
};
const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });

export function cpCatalogNumber(raw) {
	if (typeof raw !== 'string' || !/^(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(raw)) throw new Error(`Nombre du tableau ambigu : ${raw}`);
	const n = Number(raw.replaceAll(',', ''));
	if (!Number.isFinite(n) || n <= 0) throw new Error('Valeur positive obligatoire');
	return n;
}

export function createCpPdfToolDraft(snapshot, row) {
	if (snapshot.sourceUrl !== CP_INDUSTRIAL_SOURCE || snapshot.edition !== 'v6.08.2026' || snapshot.observedAt !== '2026-09-25' || !/^[a-f0-9]{64}$/.test(snapshot.sourceSha256)) throw new Error('Catalogue source non revu');
	const table = snapshot.tables[row.page];
	if (!table || !table.header.replaceAll(' ', '').includes('@LOAD') || row.sourceNote !== table.note || !table.note.includes('(@6.3 Bar)') || !table.note.includes('(10 mm)')) throw new Error('Table ou conditions de mesure non revues');
	if (!/^(?:\d{10}|T\d{6})$/.test(row.mpn) || !/^CP[A-Za-z0-9][A-Za-z0-9 /().-]*$/.test(row.model) || /\b(?:kit|pack|set)\b/i.test(row.model)) throw new Error('Référence individuelle obligatoire');
	if (!categories[row.categoryId] || !row.rawRow.includes(row.mpn) || !row.rawRow.startsWith(row.model)) throw new Error('Référence ou catégorie non revue');
	const columns = Object.entries(row.rawColumns);
	const flows = columns.filter(([key]) => key.startsWith('l/s_'));
	if (flows.at(-1)?.[1] !== row.loadedAirLs || columns.find(([key]) => key === `cfm_${Number(flows.at(-1)[0].split('_')[1]) - 1}`)?.[1] !== row.loadedAirCfm) {
		// Drill tables label this column "cfm.".
		if (flows.at(-1)?.[1] !== row.loadedAirLs || columns.find(([key]) => key === `cfm._${Number(flows.at(-1)[0].split('_')[1]) - 1}`)?.[1] !== row.loadedAirCfm) throw new Error('Consommation en charge décalée');
	}
	const loaded = cpCatalogNumber(row.loadedAirLs), cfm = cpCatalogNumber(row.loadedAirCfm);
	if (Math.abs(cfm * 0.471947443 - loaded) > Math.max(0.55, loaded * 0.05)) throw new Error('Unités CFM et L/s contradictoires');
	const flow = Number((loaded * 60).toFixed(3));
	if (row.workingPressureBar !== '6.3' || row.hoseInnerMm !== '10' || !/^\d+(?:\/\d+)?$/.test(row.inletInches)) throw new Error('Raccordement ou pression non revus');
	const speed = cpCatalogNumber(row.freeSpeedRpm);
	if (speed > 100_000) throw new Error('Vitesse hors plage revue');
	const id = `chicago-pneumatic-${row.model.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
	const evidenceId = `cp-catalog-202608-${row.mpn.toLowerCase()}`;
	const sourceUrl = `${snapshot.sourceUrl}#page=${row.page}`;
	const [category, usagePattern] = categories[row.categoryId];
	const spec = (label, value) => ({ label, value, evidenceIds: [evidenceId] });
	const specifications = [spec('Vitesse à vide', `${format(speed)} tr/min`)];
	if (row.powerW) specifications.push(spec('Puissance de l’outil', `${format(cpCatalogNumber(row.powerW))} W`));
	for (const item of row.specifications) {
		if (!item.label || !item.value || item.value.length > 200) throw new Error('Caractéristique non revue');
		specifications.push(spec(item.label, item.value));
	}
	if (row.weightKg) specifications.push(spec('Poids publié', `${format(cpCatalogNumber(row.weightKg))} kg`));
	if (specifications.length < 3) throw new Error('Caractéristiques distinctives insuffisantes');
	const limitations = [
		'Le débit utilisé est la consommation en charge du tableau constructeur à 6,3 bar. Aucune réduction arbitraire pour usage intermittent n’est appliquée.',
		'Le diamètre intérieur de flexible publié est de 10 mm, sans longueur associée dans ce tableau. La perte de pression du réseau reste à vérifier pour votre installation.',
		'Référence issue du catalogue international v6.08.2026. La configuration livrée, les normes applicables et la disponibilité en France restent à confirmer avec le fournisseur.',
	];
	if (row.freeAirLs && row.freeAirLs !== '-') {
		const free = Number((cpCatalogNumber(row.freeAirLs) * 60).toFixed(3));
		specifications.push(spec('Consommation à vide, distincte du débit en charge', `${format(free)} L/min`));
		limitations.push(`La consommation à vide publiée est de ${format(free)} L/min. ${free > flow ? 'Elle dépasse le seuil en charge ; couvrir ce dernier ne garantit pas une marche à vide prolongée.' : 'Elle reste distincte de la consommation en charge utilisée dans le calcul.'}`);
	}
	if (row.variantNote) limitations.push(row.variantNote);
	const facts = specifications.slice(0, 4).map((s) => `${s.label} : ${s.value}.`);
	return {
		id, slug: `${row.categoryId}-${id}`, categoryId: row.categoryId, category,
		label: `${category} Chicago Pneumatic ${row.model}`, brand: 'Chicago Pneumatic', model: row.model, mpn: row.mpn,
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 },
		airflowLpm: { min: flow, typical: flow, max: flow }, usagePattern,
		connectorSize: `Entrée ${row.inletInches} pouce ; flexible intérieur 10 mm, longueur non précisée`,
		recommendedHose: { innerDiameterMm: 10 }, confidence: 'A',
		image: { src: `/images/products/${id}-catalogue-2026.webp`, alt: `Repères techniques ${row.model} : ${format(flow)} L/min en charge à 6,3 bar`, sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après le catalogue Chicago Pneumatic' },
		editorial: {
			overview: `${row.model}, référence ${row.mpn}, demande ${format(flow)} L/min en charge à 6,3 bar selon le catalogue Chicago Pneumatic v6.08.2026, page ${row.page}. ${facts.slice(0, 2).join(' ')}`,
			verifiedFacts: [...facts, `Entrée d’air ${row.inletInches} pouce ; flexible intérieur de 10 mm publié par le fabricant.`], limitations,
		}, specifications,
		evidence: [{ id: evidenceId, sourceUrl, sourceLabel: `Chicago Pneumatic, catalogue v6.08.2026, p. ${row.page}, réf. ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: `Colonne AIR CONS. @LOAD : ${row.loadedAirLs} L/s × 60 = ${flow} L/min. Note de tableau : 90 PSI (6,3 bar). Valeurs brutes et empreinte PDF versionnées.` }],
		fieldSources: Object.fromEntries(['mpn', 'airflowLpm', 'workingPressureBar', 'connectorSize', 'recommendedHose'].map((field) => [field, [evidenceId]])),
		notes: ['Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.', `Source versionnée : catalogue v6.08.2026, page ${row.page}, référence ${row.mpn}.`],
	};
}
