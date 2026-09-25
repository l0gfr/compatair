/** Offline import of reviewed, versioned manufacturer facts. No network or guessed defaults. */
const categories = {
	'cle-a-chocs': ['Clé à chocs', 'burst'],
	'cle-a-cliquet': ['Clé à cliquet pneumatique', 'intermittent'],
	'perceuse': ['Perceuse pneumatique', 'intermittent'],
	'visseuse': ['Visseuse pneumatique', 'intermittent'],
	'meuleuse': ['Meuleuse pneumatique', 'continuous'],
	'ponceuse-orbitale': ['Ponceuse orbitale pneumatique', 'continuous'],
	'ponceuse-vibrante': ['Ponceuse vibrante pneumatique', 'continuous'],
	'ponceuse-rotative': ['Ponceuse rotative pneumatique', 'continuous'],
	'fouloir': ['Fouloir pneumatique', 'intermittent'],
	'graveur': ['Graveur pneumatique', 'intermittent'],
	'ponceuse-bande': ['Ponceuse à bande pneumatique', 'continuous'],
	'polisseuse': ['Polisseuse pneumatique', 'continuous'],
	'burineur': ['Burineur pneumatique', 'intermittent'],
	'derouilleur-a-aiguilles': ['Dérouilleur à aiguilles', 'intermittent'],
	'cisaille': ['Cisaille pneumatique', 'intermittent'],
	'scie': ['Scie pneumatique', 'intermittent'],
	'tronconneuse': ['Tronçonneuse pneumatique', 'intermittent'],
};

const specs = {
	FreeSpeed_unit_SI: 'Vitesse à vide',
	Max_power_unit_SI: 'Puissance maximale de l’outil',
	MaxTorqueRev_unit_SI: 'Couple maximal en marche arrière',
	Max_WorkingTorqueFwd_unit_SI: 'Couple de travail maximal en marche avant',
	StallTorque_unit_SI: 'Couple de calage',
	ChuckMaxCapacity_mm: 'Capacité maximale du mandrin (mm)',
	ChuckType: 'Type de mandrin',
	ColletMaxCapacity: 'Capacité de la pince',
	ColletType: 'Type de pince',
	OutputDriveSize: 'Taille de l’entraînement (pouces)',
	OutputSpindleThread: 'Filetage de sortie',
	WheelDiameter_mm: 'Diamètre du disque (mm)',
	CircularAbrasivePadSize_mm: 'Diamètre du plateau (mm)',
	OrbitSize_mm: 'Orbite (mm)',
	Vacuum: 'Aspiration des poussières',
	AbrasivePadAttachment: 'Fixation de l’abrasif',
	BeltSizeWxL_mm: 'Dimensions de la bande (mm)',
	BlowsPerMinute: 'Cadence de frappe',
	stroke_unit_SI: 'Course',
	Weight_unit_SI: 'Poids de l’outil',
	Dim_LengthL_unit_SI: 'Longueur de l’outil',
	AngleType: 'Forme de la tête',
	AirInletThreadType: 'Type de filetage de l’entrée d’air',
	FreeSpeedAirConsumption_unit_SI: 'Consommation à vide, distincte de la consommation en charge',
};
const translations = {
	Keyed: 'À clé', Keyless: 'Autoserrant', Straight: 'Droite',
	'Cnomo type': 'Type CNOMO', 'Industrial type': 'Type industriel',
	'Non vacuum': 'Sans aspiration', 'Central vacuum': 'Aspiration centralisée',
	'Self vacuum': 'Aspiration autonome', 'Hook and loop': 'Autoagrippante',
};
const format = (value) => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });

export function sourceQuantity(value, unit) {
	if (typeof value !== 'string') throw new Error(`Valeur ${unit} absente`);
	const match = value.match(/^([0-9]+(?:\.[0-9]+)?)\s+(.+)$/);
	if (!match || match[2] !== unit || !Number.isFinite(Number(match[1])) || Number(match[1]) <= 0) throw new Error(`Valeur ${unit} invalide : ${value}`);
	return Number(match[1]);
}

export function createCpToolDraft(record) {
	const { model, sku, sourceUrl, observedAt, categoryId, attributes } = record;
	const url = new URL(sourceUrl);
	if (url.protocol !== 'https:' || url.hostname !== 'tools.cp.com' || url.username || url.password || url.port || url.search || url.hash || !url.pathname.endsWith(`-sku${sku}`)) throw new Error('URL fabricant sans référence exacte');
	if (!/^[A-Za-z0-9]+$/.test(sku) || !/^CP[A-Za-z0-9][A-Za-z0-9 /().-]*$/.test(model) || /\b(?:kit|set|series)\b/i.test(model)) throw new Error('Référence outil individuelle obligatoire');
	if (!/^\d{4}-\d{2}-\d{2}$/.test(observedAt) || new Date(`${observedAt}T00:00:00Z`).toISOString().slice(0, 10) !== observedAt) throw new Error('Date de source invalide');
	if (!categories[categoryId]) throw new Error('Catégorie non revue');
	if (!/^[a-f0-9]{64}$/.test(record.sourceSha256)) throw new Error('Empreinte source absente');
	const value = (key) => attributes[key]?.value;
	const loaded = sourceQuantity(value('AirConsumptionAtLoad_unit_SI'), 'l/s');
	const pressure = sourceQuantity(value('Max_DynamicAirWorkingPressure_unit_SI'), 'bar');
	const flow = Number((loaded * 60).toFixed(3));
	if (flow === 0) throw new Error('Débit inférieur à la précision du catalogue');
	const hose = sourceQuantity(value('Min_HoseDiameter5mHoseLenght_unit_SI'), 'mm');
	const inlet = value('AirInletThreadSize');
	if (typeof inlet !== 'string' || !/^\d+(?:\/\d+)?$/.test(inlet)) throw new Error('Entrée d’air non documentée');
	const id = `chicago-pneumatic-${model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
	const evidenceId = `cp-${sku.toLowerCase()}-official`;
	const [category, usagePattern] = categories[categoryId];
	const specifications = Object.entries(specs).flatMap(([key, label]) => {
		const raw = value(key);
		if (typeof raw !== 'string' || !raw.trim() || /^(?:0(?:\.0+)?(?:\s|$)|undefined|n\/a$)/i.test(raw)) return [];
		return [{ label, value: translations[raw] ?? raw.replace(/\brpm\b/g, 'tr/min'), evidenceIds: [evidenceId] }];
	});
	if (specifications.length < 2) throw new Error('Caractéristiques distinctives insuffisantes');
	const facts = specifications.filter((s) => !s.label.startsWith('Consommation à vide')).slice(0, 3).map((s) => `${s.label} : ${s.value}.`);
	const limitations = ['Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.', 'Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.'];
	const free = value('FreeSpeedAirConsumption_unit_SI');
	if (free && free !== '0 l/s') {
		const freeFlow = Number((sourceQuantity(free, 'l/s') * 60).toFixed(3));
		limitations.push(`La consommation à vide est distincte : ${format(freeFlow)} L/min publiés. ${freeFlow > flow ? 'Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée.' : 'Cette valeur ne remplace pas la consommation en charge dans le calcul.'}`);
	}
	return {
		id, slug: `${categoryId}-${id}`, categoryId, category,
		label: `${category} Chicago Pneumatic ${model}`, brand: 'Chicago Pneumatic', model, mpn: sku,
		demandModel: 'fixed-flow', workingPressureBar: { min: pressure, typical: pressure, max: pressure },
		airflowLpm: { min: flow, typical: flow, max: flow },
		connectorSize: `Entrée ${inlet} pouce${value('AirInletThreadType') ? ` ${value('AirInletThreadType')}` : ''}, flexible intérieur ${format(hose)} mm sur 5 m`,
		usagePattern, recommendedHose: { innerDiameterMm: hose, maximumLengthMeters: 5 }, confidence: 'A',
		image: { src: `/images/products/${id}.webp`, alt: `Repères techniques ${model} : ${format(flow)} L/min en charge, ${format(pressure)} bar, flexible ${format(hose)} mm`, sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après la fiche Chicago Pneumatic' },
		editorial: {
			overview: `${model}, référence fabricant ${sku}, demande ${format(flow)} L/min en charge (${format(loaded)} L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de ${format(pressure)} bar, retenue comme point de comparaison. ${facts[0]}`,
			verifiedFacts: [...facts, `Entrée d’air ${inlet} pouce ; flexible de ${format(hose)} mm de diamètre intérieur pour une longueur de 5 m.`], limitations,
		},
		specifications,
		evidence: [{ id: evidenceId, sourceUrl, sourceLabel: `Chicago Pneumatic, fiche officielle ${model}, réf. ${sku}`, sourceType: 'manufacturer', retrievedAt: observedAt, confidence: 'A', notes: `Consommation en charge : ${loaded} L/s × 60 = ${flow} L/min. Pression dynamique maximale publiée : ${pressure} bar. Relevé technique versionné du ${observedAt}.` }],
		fieldSources: Object.fromEntries(['mpn', 'airflowLpm', 'workingPressureBar', 'connectorSize', 'recommendedHose'].map((field) => [field, [evidenceId]])),
		notes: [`Conversion exacte du débit en charge : ${loaded} L/s × 60 = ${flow} L/min.`, 'Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.'],
	};
}
