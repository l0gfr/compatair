import { atlasFlow } from './atlas-copco-catalog-import.mjs';
export const DESOUTTER_CATALOG = 'https://www.datocms-assets.com/104564/1784211285-desoutter_general_catalog_fr_2026-07.pdf';
const number = n => Number(n).toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const labels = { FreeSpeed_unit_SI: 'Vitesse à vide', MAXFreeSpeedRange_unit_SI: 'Vitesse maximale à vide', StallTorque_unit_SI: 'Couple de calage', MaxTorqueFwd_unit_SI: 'Couple maximal en marche avant', Weight_unit_SI: 'Masse', Dim_LengthL_unit_SI: 'Longueur', HeadAngleDegree: 'Angle de tête', HeadType: 'Type de tête', AngleSpindleType: 'Type de sortie de tête', ColletMaxCapacity: 'Capacité maximale de pince', ChuckMaxCapacity_mm: 'Capacité maximale du mandrin', ChuckMount: 'Montage du mandrin', ChuckType: 'Type de mandrin', OutputType: 'Sortie', StartingSystem: 'Déclenchement', ToolType: 'Forme', Reversible: 'Réversible' };
const translations = { Yes: 'Oui', No: 'Non', Inline: 'Droit', 'Angle head': 'Renvoi d’angle', Angle: 'Renvoi d’angle', Pistol: 'Poignée revolver', 'Pistol grip': 'Poignée revolver', Button: 'Bouton', 'Safety lever': 'Levier de sécurité', Trigger: 'Gâchette', 'Collet output': 'Sortie à pince', 'Threaded output': 'Sortie filetée', Compact: 'Compacte', Keyed: 'À clé', Keyless: 'Sans clé' };
export function createDesoutterToolDraft(snapshot, row) {
	if (snapshot.schemaVersion !== 1 || snapshot.observedAt !== '2026-09-26' || snapshot.catalog.sourceUrl !== DESOUTTER_CATALOG || snapshot.catalog.pressurePage !== 345 || snapshot.catalog.referencePressureBar !== 6.3 || !/^[a-f0-9]{64}$/.test(snapshot.catalog.sourceSha256)) throw new Error('Catalogue Desoutter non versionné');
	if (!/^\d{10}$/.test(row.mpn) || row.sourceUrl !== `https://www.desouttertools.com/en-us/products/${row.mpn}` || !/^[a-f0-9]{64}$/.test(row.sourceSha256)) throw new Error('Référence individuelle Desoutter invalide');
	const proof = row.catalogIdentity, normalized = s => s.replace(/[^A-Z0-9]/g, '');
	if (![296, 298, 302, 304].includes(proof?.page) || !proof.line.includes(row.mpn) || !normalized(proof.line).includes(normalized(row.model))) throw new Error('Identité Desoutter absente du catalogue');
	const a = row.attributes;
	if (a.EnergyType?.value !== 'Pneumatic' || a.FreeSpeedAirConsumption_unit_SI?.unit !== 'l/s' || a.FreeSpeedAirConsumption_unit_USCS?.unit !== 'cfm') throw new Error('Débit pneumatique à vide manquant');
	const rawFlow = { metric: `${a.FreeSpeedAirConsumption_unit_SI.value} l/s`, imperial: `${a.FreeSpeedAirConsumption_unit_USCS.value} cfm` };
	const flow = atlasFlow(rawFlow);
	if (Number(proof.airflowLps) * 60 !== flow || !proof.flowProof.includes(proof.airflowLps) || !proof.flowProof.includes(proof.airflowCfm)) throw new Error('Débit Desoutter contradictoire avec le catalogue');
	const id = `desoutter-${row.mpn}`, evidenceId = `${id}-fiche-fabricant`, catalogId = `${id}-catalogue-2026-07`;
	const specs = [];
	for (const [key, label] of Object.entries(labels)) {
		const value = a[key]; if (!value?.value) continue;
		const unit = key === 'HeadAngleDegree' ? '°' : value.unit === 'rpm' ? 'tr/min' : value.unit;
		const displayed = /^\d+(\.\d+)?$/.test(value.value) ? number(value.value) : translations[value.value] ?? value.value;
		specs.push({ label, value: `${displayed}${unit ? ` ${unit}` : ''}`, evidenceIds: [evidenceId] });
	}
	if (specs.length < 3) throw new Error('Profil Desoutter insuffisant');
	const hoseAttribute = a.Min_HoseDiameter5mHoseLenght_unit_SI;
	if (hoseAttribute?.unit !== 'mm' || !/^\d+(\.\d+)?$/.test(hoseAttribute.value) || !(Number(hoseAttribute.value) > 0)) throw new Error('Flexible Desoutter non documenté');
	const hose = Number(hoseAttribute.value), inlet = a.AirInletThreadSize?.value;
	if (!/^\d\/\d+$/.test(inlet ?? '')) throw new Error('Entrée d’air Desoutter non documentée');
	const facts = specs.slice(0, 5).map(s => `${s.label} : ${s.value}.`);
	return {
		id, slug: `perceuse-desoutter-${row.model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, categoryId: 'perceuse', category: 'Perceuse pneumatique', label: `Perceuse pneumatique Desoutter ${row.model}`, brand: 'Desoutter', model: row.model, mpn: row.mpn,
		variant: { familyId: `desoutter-${row.familyId}`, label: row.model, distinguishingAttributes: Object.fromEntries(specs.map(s => [s.label, s.value])) },
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.3, typical: 6.3, max: 6.3 }, airflowLpm: { min: flow, typical: flow, max: flow }, usagePattern: 'intermittent', confidence: 'A',
		connectorSize: `Entrée ${inlet} pouce, norme de filetage à confirmer ; flexible intérieur ${number(hose)} mm sur 5 m`, recommendedHose: { innerDiameterMm: hose, maximumLengthMeters: 5 },
		image: { src: `/images/products/${id}-technical.webp`, alt: `Desoutter ${row.model}, ${row.mpn} : ${number(flow)} L/min à vide, 6,3 bar`, sourceUrl: row.sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après Desoutter' },
		editorial: {
			overview: `La perceuse Desoutter ${row.model}, référence ${row.mpn}, affiche une consommation à vide de ${number(flow)} L/min (${number(a.FreeSpeedAirConsumption_unit_SI.value)} L/s). Le catalogue général de juillet 2026 donne une pression de référence de 6,3 bar. ${facts.slice(0, 2).join(' ')}`,
			verifiedFacts: [...facts, `Flexible : diamètre intérieur minimal de ${number(hose)} mm pour 5 m, selon la fiche individuelle.`, `Entrée d’air : ${inlet} pouce ; le standard de filetage n’est pas précisé dans les caractéristiques reprises.`],
			limitations: [
				'Le calcul conserve la consommation à vide publiée. Cette valeur n’est pas une mesure de débit en charge réalisée par CompatAir et n’est pas réduite selon un cycle de perçage supposé.',
				'La pression de référence est celle des consignes générales du catalogue, page 345 : 6,3 bar, avec une tolérance fabricant de ±0,15 bar. Aucune courbe de consommation selon la pression n’est disponible ici.',
				'Le diamètre de flexible ne remplace pas une mesure de pression dynamique à l’entrée de l’outil. Raccords, filtres et longueur réelle peuvent limiter le débit.',
				'Le catalogue et la fiche individuelle ne prouvent ni un stock en France ni le contenu exact d’une offre commerciale. Vérifier le mandrin, la pince et les accessoires avant commande.',
			],
		}, specifications: specs,
		evidence: [
			{ id: evidenceId, sourceUrl: row.sourceUrl, sourceLabel: `Desoutter, ${row.model}, ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: 'Caractéristiques individuelles et empreinte SHA-256 versionnées. Consommation à vide en L/s et CFM ; diamètre de flexible pour 5 m.' },
			{ id: catalogId, sourceUrl: `${DESOUTTER_CATALOG}#page=${proof.page}`, sourceLabel: `Desoutter, catalogue général juillet 2026, page ${proof.page} ; pression page 345`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: `Référence ${row.mpn} et consommation recoupées avec le tableau. Les consignes générales de la page 345 indiquent 6,3 bar ±0,15 bar.` },
		],
		fieldSources: { mpn: [evidenceId, catalogId], airflowLpm: [evidenceId, catalogId], workingPressureBar: [catalogId], connectorSize: [evidenceId], recommendedHose: [evidenceId] },
		notes: ['Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir. Le calcul vérifie l’alimentation en air ; le choix du foret et de sa vitesse reste propre au matériau et à la notice.'],
	};
}
