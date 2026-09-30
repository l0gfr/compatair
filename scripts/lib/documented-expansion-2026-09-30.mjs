const DATE = '2026-09-30';
const slug = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const finite = value => { if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur source positive requise'); return value; };
const format = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });

export function buildDocumentedExpansion(snapshot) {
	if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'documented-expansion-2026-09-30' || snapshot.observedAt !== DATE || snapshot.compressors.length !== 200 || snapshot.tools.length !== 1000) throw new Error('Lot documentaire non reconnu');
	const sources = new Map(snapshot.sources.map(s => [s.id, s]));
	if (sources.size !== snapshot.sources.length) throw new Error('Source dupliquée');
	for (const s of sources.values()) {
		if (s.observedAt !== DATE || !/^[a-f0-9]{64}$/.test(s.sha256) || new URL(s.url).protocol !== 'https:' || !s.url.includes('.pdf')) throw new Error('Provenance PDF invalide');
	}
	const evidence = id => {
		const s = sources.get(id); if (!s) throw new Error('Source inconnue');
		return { id: `documented-20260930-${slug(id)}`, sourceUrl: s.url, sourceLabel: id === 'topcat-issued' ? 'Catalogue constructeur Top Cat, hébergé par International Air Tool' : id === 'renner-belt-hbg' ? 'Brochure constructeur RENNER RS-PRO 3–11 / RSF-PRO 5,5–11, hébergée par HBG' : `${id.startsWith('uryu-') ? 'URYU, catalogue 2020' : id === 'npk-2026' ? 'NPK, catalogue avril 2026' : id === 'almig-2026' ? 'ALMiG, catalogue juillet 2026' : 'RENNER, catalogue 2026'} : ${id}`, sourceType: 'manual', sourceRole: 'primary', retrievedAt: DATE, confidence: 'B', notes: `Document constructeur consulté le ${DATE}. SHA-256 ${s.sha256}. La transcription et les pages PDF sont versionnées dans le lot documentaire. Le lieu d’hébergement ne constitue pas une validation indépendante.` };
	};
	const image = (id, label, sourceId) => ({ src: `/images/products/${id}.webp`, alt: `Repères techniques : ${label}`, sourceUrl: sources.get(sourceId).url, sourceLabel: 'Carte technique CompatAir, établie à partir du document constructeur' });
	const compressors = snapshot.compressors.map(row => {
		if (!['RENNER', 'ALMiG'].includes(row.brand) || !Number.isInteger(row.page) || row.page < 1 || !row.rawLine.includes(row.mpn ?? row.model.split(' ')[2])) throw new Error('Identité compresseur absente de la transcription');
		const id = slug(`${row.brand}-${row.model}-${row.mpn ?? ''}`);
		const primary = evidence(row.sourceId), duty = evidence(row.dutySourceId);
		const points = row.flows ?? [{ pressureBar: row.pressureBar, flowM3Min: row.flowM3Min }];
		if (!row.flows) {
			const pressures = row.pressureHeader.match(/\d+,\d+/g).slice(0, 4).map(x => Number(x.replace(',', '.')));
			const flows = row.flowHeader.match(/\d+,\d+/g).slice(0, 4).map(x => Number(x.replace(',', '.')));
			if (pressures[row.sourceColumn - 1] !== row.pressureBar || flows[row.sourceColumn - 1] !== row.flowM3Min) throw new Error('Colonne pression/débit différente');
		}
		const fadCurve = points.map(p => ({ pressureBar: finite(p.pressureBar), litersPerMinute: Number((finite(p.flowM3Min) * 1000).toFixed(3)) }));
		const maxPressureBar = row.maxPressureBar ?? row.pressureBar;
		if (fadCurve.some(p => p.pressureBar > maxPressureBar) || new Set(fadCurve.map(p => p.pressureBar)).size !== fadCurve.length) throw new Error('Courbe incohérente');
		if (row.brand === 'RENNER' && !/^(?:RS|RSK|RSD|RSDK|RSF|RSKF)-PRO(?:-ECN)? (?:3\.0|4\.0|5\.5|7\.5|11\.0)$/.test(row.model)) throw new Error('Service continu hors périmètre de la brochure');
		if (row.brand === 'ALMiG' && !/^COMBI XP (?:4|6|8|11|15|18|22) (?:270|500)D$/.test(row.model)) throw new Error('Configuration ALMiG non revue');
		const variable = Boolean(row.flows);
		const specs = [{ label: 'Localisation du tableau', value: `Page PDF ${row.page}`, evidenceIds: [primary.id] }, { label: 'Configuration publiée', value: row.equipment, evidenceIds: [primary.id] }, { label: 'Dimensions (L × l × h)', value: `${row.dimensionsMm.join(' × ')} mm`, evidenceIds: [primary.id] }, { label: 'Technologie', value: row.technology, evidenceIds: [primary.id] }];
		if (row.minimumFlowPoints) specs.push({ label: 'Débit minimal de modulation publié', value: row.minimumFlowPoints.map(p => `${format(p.flowM3Min * 1000)} L/min à ${format(p.pressureBar)} bar`).join(' ; '), evidenceIds: [primary.id] });
		if (row.minimumFlowM3Min) specs.push({ label: 'Débit minimal de modulation (colonne min.)', value: `${format(row.minimumFlowM3Min * 1000)} L/min`, evidenceIds: [primary.id] });
		const label = `${row.brand} ${row.model}${row.mpn ? `, article ${row.mpn}` : ''}`;
		return { id, slug: id, brand: row.brand, model: row.model, ...(row.mpn ? { mpn: row.mpn } : {}), variant: { familyId: slug(`${row.brand}-${row.model}`), label: `${row.equipment} ; ${format(maxPressureBar)} bar`, distinguishingAttributes: { ...(row.mpn ? { reference: row.mpn } : {}), pression: `${format(maxPressureBar)} bar`, cuve: `${row.tankLiters} L`, configuration: row.equipment } }, tankLiters: row.tankLiters, maxPressureBar, fadCurve, dutyCycle: 1, oilType: row.brand === 'ALMiG' ? 'unknown' : 'oil', powerKw: row.powerKw, weightKg: row.weightKg, mobility: 'fixed', confidence: 'B', status: 'unknown', image: image(id, label, row.sourceId), specifications: specs,
			editorial: { overview: `${label}. ${row.equipment}. ${variable ? 'La courbe reprend les capacités maximales publiées, avec les minima conservés séparément.' : `Cette référence correspond à la version ${format(maxPressureBar)} bar ; son débit est ${format(fadCurve[0].litersPerMinute)} L/min à cette pression.`}`, verifiedFacts: [`Puissance moteur publiée : ${format(row.powerKw)} kW ; poids de cette configuration : ${format(row.weightKg)} kg.`, `Débit restitué documenté : ${fadCurve.map(p => `${format(p.litersPerMinute)} L/min à ${format(p.pressureBar)} bar`).join(' ; ')}.`, 'La documentation de la série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien.'], limitations: ['La disponibilité commerciale actuelle n’a pas été confirmée.', variable ? 'Les minima et maxima de modulation ne décrivent pas un débit moyen de votre atelier. Aucun débit n’est extrapolé hors des points publiés.' : 'Les débits des autres versions de pression ne sont pas ajoutés à la courbe de cet article.', 'Le service continu documenté ne dispense pas du contrôle du refroidissement, du traitement d’air et des pertes du réseau.', ...(row.brand === 'ALMiG' ? ['Le mode de lubrification n’a pas été établi dans les sources consultées ; il reste unknown, sans présumer une qualité d’air.'] : [])] },
			evidence: primary.id === duty.id ? [primary] : [primary, duty], fieldSources: Object.fromEntries([...(row.mpn ? ['mpn'] : []), 'fadCurve', 'tankLiters', 'maxPressureBar', ...(row.brand === 'RENNER' ? ['oilType'] : []), 'powerKw', 'weightKg'].map(k => [k, [primary.id]]).concat([['dutyCycle', [duty.id]]])), notes: [`Tableau de configuration : page PDF ${row.page}.`, variable ? 'FAD maximal à vitesse nominale ; les capacités minimales restent des spécifications séparées.' : `Code d’article constructeur ${row.mpn}, colonne ${row.sourceColumn}.`] };
	});
	const tools = snapshot.tools.map(row => {
		if (!['Top Cat', 'URYU', 'NPK'].includes(row.brand) || !Number.isInteger(row.page) || !row.sourceLine.includes(row.mpn) || row.details.length < 3) throw new Error('Identité outil absente de la transcription');
		const source = evidence(row.sourceId), id = slug(`${row.categoryId}-${row.brand}-${row.model}-${row.model === row.mpn ? '' : row.mpn}`);
		const factors = { 'l/s': 60, 'm3/min': 1000 }, pressureFactors = { bar: 1, MPa: 10 };
		if (!factors[row.flowUnit] || !pressureFactors[row.pressureUnit]) throw new Error('Unité non revue');
		const flow = Number((finite(row.flowOriginal) * factors[row.flowUnit]).toFixed(3)), pressure = finite(row.pressureOriginal) * pressureFactors[row.pressureUnit];
		if (row.brand === 'Top Cat' && (row.flowBasis !== 'maximum' || row.flowUnit !== 'l/s' || pressure !== 6.2 || !row.flowHeader.includes(`${row.flowOriginal} L/s`) || !row.flowHeader.includes('Max'))) throw new Error('Maximum Top Cat non documenté');
		if (row.brand !== 'Top Cat' && (row.flowBasis !== 'average' || !row.flowHeader.includes('Average') || !row.sourceLine.includes(String(row.flowOriginal)))) throw new Error('Moyenne documentaire non identifiée');
		const average = row.flowBasis === 'average', label = `${row.brand} ${row.model}${row.model === row.mpn ? '' : ` (réf. ${row.mpn})`}`, condition = average ? 'consommation moyenne' : 'consommation maximale';
		return { id, slug: id, categoryId: row.categoryId, category: row.categoryId, label, brand: row.brand, model: row.model, mpn: row.mpn, demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure }, airflowLpm: { min: flow, typical: flow, max: flow }, ...(average ? { airflowBasis: 'average' } : {}), confidence: 'B', image: image(id, label, row.sourceId),
			variant: { familyId: slug(`${row.brand}-${row.model.split(';')[0]}`), label: `Code constructeur ${row.mpn}`, distinguishingAttributes: { codeCatalogue: row.mpn, ...(row.model === row.mpn ? {} : { reference: row.mpn }) } },
			editorial: { overview: `${row.brand} ${row.model}${row.model === row.mpn ? '' : `, code ${row.mpn}`}. Le tableau publie une ${condition} de ${format(row.flowOriginal)} ${row.flowUnit === 'm3/min' ? 'm³/min' : 'L/s'}, soit ${format(flow)} L/min. Pression de référence retenue : ${format(pressure)} bar.`, verifiedFacts: [`Référence complète imprimée : ${row.mpn}, page PDF ${row.page}.`, `${condition[0].toUpperCase()}${condition.slice(1)} publiée : ${format(flow)} L/min après conversion de l’unité originale.`, `${row.pressureHeader}`], limitations: [average ? 'Une moyenne ne permet pas de conclure sur le débit continu ou la pointe : le moteur conserve insufficient_data tant que le régime de consommation n’est pas documenté.' : 'Le débit maximal est un besoin conservateur ; la cadence réelle de travail n’est pas déduite du catalogue.', 'La disponibilité actuelle, les accessoires inclus et les conditions de sécurité doivent être confirmés sur la notice de cette référence.'] },
			specifications: [{ label: 'Localisation du tableau', value: `Page PDF ${row.page}`, evidenceIds: [source.id] }, ...row.details.map(s => ({ ...s, evidenceIds: [source.id] }))], evidence: [source], fieldSources: { mpn: [source.id], airflowLpm: [source.id], workingPressureBar: [source.id], ...(average ? { airflowBasis: [source.id] } : {}) }, notes: [`${condition} ; aucune conversion en consommation en charge n’est effectuée.`, `Pression publiée en ${row.pressureUnit} : ${row.pressureOriginal}.`] };
	});
	const identities = new Set();
	for (const p of [...compressors, ...tools]) { if (identities.has(p.id)) throw new Error('Identifiant dupliqué'); identities.add(p.id); }
	return { compressors, tools };
}
