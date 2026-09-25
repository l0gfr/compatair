import { fujiPressureNotices } from './fuji-pressure-notices.mjs';

/** Offline import of individually reviewed Fuji manufacturer records. */

const categories = {
	meuleuse: ['Meuleuse pneumatique', 'continuous'],
	perceuse: ['Perceuse pneumatique', 'intermittent'],
	'cle-a-chocs': ['Clé à chocs', 'burst'],
	'ponceuse-bande': ['Ponceuse à bande pneumatique', 'continuous'],
	'ponceuse-rotative': ['Ponceuse rotative pneumatique', 'continuous'],
	'ponceuse-orbitale': ['Ponceuse orbitale pneumatique', 'continuous'],
};
const specifications = {
	FreeSpeed_unit_SI: 'Vitesse à vide',
	Max_power_unit_SI: 'Puissance maximale de l’outil',
	ColletMaxCapacity_mm: 'Capacité de la pince (mm)',
	ChuckMaxCapacity_mm: 'Capacité maximale du mandrin (mm)',
	ChuckMount: 'Montage du mandrin',
	OutputDriveSize: 'Carré d’entraînement (pouces)',
	OutputSpindleThread: 'Filetage de sortie',
	WheelDiameter_mm: 'Diamètre du disque (mm)',
	WheelThickness_mm: 'Épaisseur du disque (mm)',
	AbrasiveInnerDiamSize_unit_SI: 'Alésage de l’abrasif',
	AbrasiveTypeGrinder: 'Type d’abrasif',
	HandleType: 'Forme de la poignée',
	SidetoCenter_unit_SI: 'Distance du bord à l’axe',
	CircularAbrasivePadSize_mm: 'Diamètre du plateau (mm)',
	BeltSize_mm: 'Dimensions de la bande (mm)',
	WireBrushSize_unit_SI: 'Dimension de la brosse',
	StallTorque_unit_SI: 'Couple de calage',
	MaxTorqueRev_unit_SI: 'Couple maximal en marche arrière',
	Min_WorkingTorqueFwd_unit_SI: 'Couple de travail minimal en marche avant',
	Max_WorkingTorqueFwd_unit_SI: 'Couple de travail maximal en marche avant',
	ImpactMecanism: 'Mécanisme de frappe',
	StartingSystem: 'Commande',
	Exaust: 'Échappement',
	Dim_LengthL_unit_SI: 'Longueur de l’outil',
	Weight_unit_SI: 'Poids de l’outil',
};
const translations = {
	Rear: 'Arrière', Side: 'Latéral', Front: 'Avant', 'Side exhaust': 'Échappement latéral',
	'Rolling throttle': 'Commande rotative', 'Locking lever': 'Levier avec verrouillage',
	Lever: 'Levier', 'Safety lever': 'Levier de sécurité', 'Twin hammer': 'Double marteau',
};
const format = (value) => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });

export function fujiQuantity(attribute, unit) {
	if (!attribute || attribute.unit !== unit || typeof attribute.value !== 'string' || !/^\d+(?:\.\d+)?$/.test(attribute.value)) throw new Error(`Quantité ${unit} absente ou ambiguë`);
	const value = Number(attribute.value);
	if (!Number.isFinite(value) || value <= 0) throw new Error(`Quantité ${unit} non positive`);
	return value;
}

export function createFujiToolDraft(snapshot, row) {
	if (snapshot.schemaVersion !== 1 || snapshot.observedAt !== '2026-09-25' || !Array.isArray(snapshot.pressureNotices)) throw new Error('Notice de pression non revue');
	if (row.brand !== 'Fuji' || row.status !== 'active' || !/^\d{10}$/.test(row.mpn) || row.sourceUrl !== `https://www.fujitools.com/en/products/${row.mpn}` || !/^[a-f0-9]{64}$/.test(row.sourceSha256)) throw new Error('Fiche fabricant individuelle non vérifiée');
	if (row.observedAt !== snapshot.observedAt || typeof row.model !== 'string' || !/^[A-Z0-9][A-Za-z0-9 /().-]{1,70}$/.test(row.model) || /\b(?:kit|set|pack|series)\b/i.test(row.model)) throw new Error('Modèle individuel obligatoire');
	if (!/^\d+$/.test(row.familyId) || !categories[row.categoryId] || !Array.isArray(row.documents)) throw new Error('Catégorie ou documents manquants');
	const direct = fujiPressureNotices.find(n => row.documents.some(d => new URL(d.url).href === n.url));
	const proof = row.pressurePortalEvidence;
	const notice = direct ?? fujiPressureNotices.find(n => n.url === proof?.documentUrl);
	const reviewed = snapshot.pressureNotices.find(n => n.url === notice?.url);
	if (!notice || JSON.stringify(reviewed) !== JSON.stringify(notice)) throw new Error('Notice de pression non revue');
	if (!direct) {
		const portal = `https://files.cpdesoutter.com/${row.mpn}`;
		const filename = new URL(notice.url).pathname.split('/').at(-1);
		const version = filename.match(/_(\d+)\.pdf$/)?.[1];
		if (!row.documents.some(d => d.url.replace(/\/$/, '') === portal) || !proof || proof.portalUrl !== portal || proof.endpointUrl !== `https://reddoc-backend.onrender.com/api/items/${row.mpn}/documents` || !/^[a-f0-9]{64}$/.test(proof.responseSha256) || proof.partNumber !== row.mpn || proof.linkedPartNumber !== row.mpn || proof.documentName !== filename || proof.documentVersion !== version || proof.observedAt !== row.observedAt) throw new Error('Rattachement individuel à la notice de pression non vérifié');
	}
	const pressureBasis = notice.kind === 'performance-pressure' ? 'pression de référence des performances' : 'pression de travail';
	const a = row.attributes;
	const loaded = fujiQuantity(a.AirConsumptionAtLoad_unit_SI, 'l/s');
	if (loaded < 1) throw new Error('Débit en charge ambigu : revue spécifique nécessaire');
	const cfm = fujiQuantity(a.AirConsumptionAtLoad_unit_USCS, 'cfm');
	if (Math.abs(cfm * 0.471947443 - loaded) > Math.max(0.15, loaded * 0.04)) throw new Error('Unités du débit en charge contradictoires');
	const flow = Number((loaded * 60).toFixed(3));
	const hose = fujiQuantity(a.Min_HoseDiameter5mHoseLenght_unit_SI, 'mm');
	const inlet = a.AirInletThreadSize?.value, thread = a.AirInletThreadType?.value;
	if (!/^\d+(?:\/\d+)?$/.test(inlet ?? '') || !['PT', 'NPT', 'BSP'].includes(thread)) throw new Error('Entrée d’air non documentée');
	if (a.Max_DynamicAirWorkingPressure_unit_SI && fujiQuantity(a.Max_DynamicAirWorkingPressure_unit_SI, 'bar') !== 6.3) throw new Error('Pression contradictoire avec la notice');
	const [category, usagePattern] = categories[row.categoryId];
	const id = `fuji-${row.model.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`;
	const evidenceId = `fuji-${row.mpn}-official`, pressureId = `fuji-${row.mpn}-pressure-notice`;
	const specs = Object.entries(specifications).flatMap(([key, label]) => {
		const source = a[key];
		if (!source || typeof source.value !== 'string' || !source.value.trim() || /^(?:0(?:\.0+)?|undefined|n\/a|-)$/.test(source.value)) return [];
		if (source.value.length > 160 || typeof source.unit !== 'string' || source.unit.length > 30) throw new Error('Caractéristique non revue');
		return [{ label, value: `${translations[source.value] ?? source.value}${source.unit ? ` ${source.unit === 'rpm' ? 'tr/min' : source.unit}` : ''}`, evidenceIds: [evidenceId] }];
	});
	if (specs.length < 3) throw new Error('Caractéristiques propres insuffisantes');
	const facts = specs.slice(0, 4).map(s => `${s.label} : ${s.value}.`);
	const limits = [
		`La consommation en charge provient de la fiche individuelle. La notice liée par le fabricant indique une ${pressureBasis} de 6,3 bar ; la fiche ne fournit pas de courbe de consommation selon la pression.`,
		'Le calcul conserve le débit en charge publié, sans facteur arbitraire réduisant le besoin pour un usage intermittent.',
		'Le diamètre intérieur de flexible publié concerne une longueur de 5 m. Une installation plus longue nécessite de vérifier sa perte de pression.',
		'Le catalogue international distingue des raccords et équipements selon les marchés. La disponibilité en France et la conformité de la référence livrée restent à confirmer auprès du fournisseur.',
	];
	const freeAttribute = a.FreeSpeedAirConsumption_unit_SI;
	if (freeAttribute && freeAttribute.value !== '0') {
		const free = Number((fujiQuantity(freeAttribute, 'l/s') * 60).toFixed(3));
		specs.push({ label: 'Consommation à vide, distincte du débit en charge', value: `${format(free)} L/min`, evidenceIds: [evidenceId] });
		limits.push(`À vide, la fiche publie ${format(free)} L/min. ${free > flow ? 'Ce débit dépasse le seuil en charge : couvrir ce dernier ne garantit pas une marche à vide prolongée.' : 'Cette valeur reste séparée du débit en charge utilisé dans le calcul.'}`);
	}
	return {
		id, slug: `${row.categoryId}-${id}`, categoryId: row.categoryId, category,
		label: `${category} Fuji ${row.model}`, brand: 'Fuji', model: row.model, mpn: row.mpn,
		variant: { familyId: `fuji-${row.familyId}`, label: row.model, distinguishingAttributes: Object.fromEntries(specs.slice(0, 4).map(s => [s.label, s.value]).concat([['Entrée d’air', `${inlet} pouce ${thread}`]])) },
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: flow, typical: flow, max: flow }, usagePattern,
		connectorSize: `Entrée ${inlet} pouce ${thread}, flexible intérieur ${format(hose)} mm sur 5 m`, recommendedHose: { innerDiameterMm: hose, maximumLengthMeters: 5 }, confidence: 'A',
		image: { src: `/images/products/${id}-technical.webp`, alt: `Repères techniques Fuji ${row.model} : ${format(flow)} L/min en charge, pression de travail 6,3 bar`, sourceUrl: row.sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après la fiche et la notice Fuji' },
		editorial: { overview: `Fuji ${row.model}, référence ${row.mpn}, présente une consommation en charge de ${format(loaded)} L/s, soit ${format(flow)} L/min. La notice liée à cette fiche indique une ${pressureBasis} de 6,3 bar. ${facts.slice(0, 2).join(' ')}`, verifiedFacts: [...facts, `Entrée ${inlet} pouce ${thread} ; flexible de ${format(hose)} mm de diamètre intérieur sur 5 m.`], limitations: limits },
		specifications: specs,
		evidence: [
			{ id: evidenceId, sourceUrl: row.sourceUrl, sourceLabel: `Fuji, fiche officielle ${row.model}, réf. ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: row.observedAt, confidence: 'A', notes: `Consommation en charge publiée : ${loaded} L/s × 60 = ${flow} L/min. Valeurs brutes, unités et empreinte de la fiche versionnées.` },
			{ id: pressureId, sourceUrl: `${notice.url}#page=${notice.page}`, sourceLabel: `Fuji, notice ${notice.reference}, page ${notice.page}`, sourceType: 'manual', sourceRole: 'primary', retrievedAt: row.observedAt, confidence: 'A', notes: `Notice ${direct ? 'explicitement liée à la fiche individuelle' : 'rattachée au MPN exact dans le portail documentaire officiel lié par la fiche'}. ${notice.review}` },
		],
		fieldSources: { mpn: [evidenceId], airflowLpm: [evidenceId], workingPressureBar: [pressureId], connectorSize: [evidenceId], recommendedHose: [evidenceId] },
		notes: ['Caractéristiques déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil.', 'Le filetage PT et le filetage NPT ne sont pas considérés comme interchangeables.'],
	};
}
