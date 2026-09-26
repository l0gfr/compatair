/** Offline conversion of manufacturer tables. No estimated flow or pressure. */
export const DYNABRADE_SOURCE = 'https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf';
const categories = {
	'ponceuse-bande': 'Ponceuse à bande pneumatique', 'ponceuse-rotative': 'Ponceuse rotative pneumatique',
	meuleuse: 'Meuleuse pneumatique', tronconneuse: 'Tronçonneuse pneumatique', polisseuse: 'Polisseuse pneumatique',
	perceuse: 'Perceuse pneumatique', 'ponceuse-orbitale': 'Ponceuse orbitale pneumatique',
	'ponceuse-vibrante': 'Ponceuse vibrante pneumatique', scie: 'Scie pneumatique',
};
const labels = {
	'Motor RPM': ['Vitesse moteur publiée', 'tr/min'], RPM: ['Vitesse moteur publiée', 'tr/min'],
	'Motor SPM': ['Cadence publiée', 'courses/min'], 'Strokes Per Minute': ['Cadence publiée', 'courses/min'], 'Strokes per Minute': ['Cadence publiée', 'courses/min'],
	'RPM Free Speed': ['Vitesse à vide', 'tr/min'], 'RPM Under Load': ['Vitesse en charge', 'tr/min'],
	'Collet Size': ['Pince', ''], 'Collets Included': ['Pinces incluses', ''], 'Collet Insert': ['Pince', ''], 'Collet Size (Part No.)': ['Pince et référence', ''],
	'Chuck Size': ['Mandrin', ''], 'Drill Type': ['Montage du foret', ''], 'Tool Thread': ['Filetage de sortie', ''], 'Spindle Thread': ['Filetage de broche', ''],
	'Wheel Arbor Diameter': ['Alésage de la roue', ''], 'Adapter Thread': ['Filetage de l’adaptateur', ''],
	'Pad Type': ['Fixation du plateau', ''], 'Vacuum Type': ['Aspiration des poussières', ''], 'Vacuum Style': ['Aspiration des poussières', ''],
	Exhaust: ['Échappement', ''], 'Tool Housing': ['Corps de l’outil', ''],
	'Abrasive Belt Size Inch (mm)': ['Bande abrasive, pouces (mm)', ''],
};
const metricFields = {
	'Length Inch (mm)': ['Longueur', 25.4, 'mm'], Length: ['Longueur', 25.4, 'mm'],
	'Height Inch (mm)': ['Hauteur', 25.4, 'mm'], Height: ['Hauteur', 25.4, 'mm'],
	'Diameter Inch (mm)': ['Diamètre indiqué au tableau', 25.4, 'mm'], Diameter: ['Diamètre du plateau', 25.4, 'mm'],
	'Pad Dia. Inch (mm)': ['Diamètre du plateau', 25.4, 'mm'], 'Pad Diameter Inch (mm)': ['Diamètre du plateau', 25.4, 'mm'],
	'Tool Dia. Inch (mm)': ['Diamètre du plateau', 25.4, 'mm'],
	'Orbit Dia. Inch (mm)': ['Diamètre de l’orbite', 25.4, 'mm'], 'Dia. Orbit Inch (mm)': ['Diamètre de l’orbite', 25.4, 'mm'], 'Orbit Dia.': ['Diamètre de l’orbite', 25.4, 'mm'], 'Orbit Inch (mm)': ['Diamètre de l’orbite', 25.4, 'mm'],
	'Weight Pound (kg)': ['Masse', 0.45359237, 'kg'], Weight: ['Masse', 0.45359237, 'kg'],
	'Motor hp (W)': ['Puissance moteur', 745.699872, 'W'], Power: ['Puissance moteur', 745.699872, 'W'],
};
const translated = { Rear: 'Arrière', Front: 'Avant', 'Non-Vac': 'Sans aspiration', 'Non-Vacuum': 'Sans aspiration', 'Self-Gen': 'Aspiration autonome', Central: 'Aspiration centralisée', Vacuum: 'Avec aspiration', 'Hook-Face': 'Autoagrippant', PSA: 'Adhésif' };
const format = value => value.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
export function dynabradeFlow(raw) {
	const match = /^(\d+(?:\.\d+)?) \(([\d,]+)\)$/.exec(raw ?? '');
	if (!match) throw new Error('Débit absent ou ambigu');
	const scfm = Number(match[1]), lpm = Number(match[2].replaceAll(',', ''));
	if (!(scfm > 0 && lpm > 0) || Math.abs(scfm * 28.316846592 - lpm) > Math.max(1.5, lpm * 0.01)) throw new Error('Unités de débit contradictoires');
	return lpm;
}
function imperialNumber(raw) {
	if (/^\d+-\d+\/\d+$/.test(raw)) { const [whole, fraction] = raw.split('-'); return Number(whole) + imperialNumber(fraction); }
	if (/^\d+\/\d+$/.test(raw)) { const [a, b] = raw.split('/').map(Number); return a / b; }
	return Number(raw.replaceAll(',', ''));
}
export function dynabradeMetric(raw, factor, unit) {
	const match = /^([\d.,/-]+)(?:"|\s*(?:lb\.?|hp))?\s*\(([\d.,]+)(?:\s*(?:mm|kg|W))?\)$/.exec(raw ?? '');
	if (!match) return null; // Composite dimensions remain outside the structured specification.
	const converted = imperialNumber(match[1]) * factor, metric = Number(match[2].replaceAll(',', ''));
	const tolerance = unit === 'kg' ? Math.max(.06, metric * .05) : unit === 'W' ? Math.max(2, metric * .03) : Math.max(1.5, metric * .02);
	if (!(metric > 0) || !Number.isFinite(converted) || Math.abs(converted - metric) > tolerance) throw new Error(`Unités de ${unit} contradictoires : ${raw}`);
	return metric;
}
export function createDynabradeToolDraft(snapshot, row) {
	if (snapshot.schemaVersion !== 1 || snapshot.sourceUrl !== DYNABRADE_SOURCE || snapshot.edition !== 'D25.01' || snapshot.observedAt !== '2026-09-26' || !/^[a-f0-9]{64}$/.test(snapshot.sourceSha256)) throw new Error('Catalogue fabricant non versionné');
	if (!/^(?:\d{5}|X\d{2}[A-Z]*)$/.test(row.model) || !Number.isInteger(row.page) || row.page < 10 || row.page > 180 || !categories[row.categoryId]) throw new Error('Référence individuelle ou catégorie non revue');
	const table = snapshot.tables.find(t => t.id === row.tableId && t.page === row.page);
	if (!table || table.rows[row.rowIndex]?.[0]?.replaceAll(/\s+/g, ' ').trim() !== row.model || row.rawValues[0] !== row.model || JSON.stringify(Object.fromEntries(table.headers.map((h, i) => [h, row.rawValues[i]]))) !== JSON.stringify(row.fields)) throw new Error('Ligne fabricant non rattachée au tableau');
	for (const [i, cell] of table.rows[row.rowIndex].entries()) {
		if (cell !== null && cell.replaceAll(/\s+/g, ' ').trim() !== row.rawValues[i]) throw new Error('Cellule différente de la source versionnée');
	}
	const f = row.fields, pageFacts = row.pageFacts.join(' ');
	const rawFlow = f['Maximum Air Flow SCFM (L/Min)'] ?? f['Max. Air Flow SCFM (L/Min)'] ?? f['Max. Air Flow']?.replace(/\s*SCFM\s*\(([\d,.]+) (?:LPM|L\/Min)\)/, ' ($1)');
	const noteFlow = /Air Flow Rate (\d+) SCFM\/([\d,]+) L\/Min/.exec(pageFacts);
	if (row.reviewedFlow !== (rawFlow ?? (noteFlow ? `${noteFlow[1]} (${noteFlow[2]})` : null)) || row.airflowBasis !== (rawFlow ? 'maximum' : 'published')) throw new Error('Origine ou nature du débit non prouvée');
	if (row.pressure !== '90 (6.2)' || (f['Air Pressure PSIG (Bar)'] ? f['Air Pressure PSIG (Bar)'] !== row.pressure : !/Air Pressure\s*-?\s*90 PSIG?\s*\(6\.2 Bar\)/.test(pageFacts))) throw new Error('Pression individuelle non prouvée');
	const flow = dynabradeFlow(row.reviewedFlow), id = `dynabrade-${row.model.toLowerCase()}`, evidenceId = `${id}-catalogue-d25-01`, sourceUrl = `${DYNABRADE_SOURCE}#page=${row.page}`;
	const category = categories[row.categoryId], specs = [], omitted = [];
	const add = (label, value) => specs.push({ label, value, evidenceIds: [evidenceId] });
	for (const [key, value] of Object.entries(f)) {
		if (!value || value === 'N/A' || value === '–') continue;
		if (labels[key]) {
			const [label, unit] = labels[key];
			const displayed = unit && /^[\d,]+$/.test(value) ? format(Number(value.replaceAll(',', ''))) : (translated[value] ?? value);
			add(label, `${displayed}${unit ? ` ${unit}` : ''}`);
		}
		if (metricFields[key]) {
			const [label, factor, unit] = metricFields[key];
			try { const metric = dynabradeMetric(value, factor, unit); if (metric !== null) add(label, `${format(metric)} ${unit}`); }
			catch { omitted.push(`${label} non retenue : le tableau publie des unités contradictoires (${value}).`); }
		}
	}
	if ([151, 157].includes(row.page)) {
		const motor = /Motor ([\d.]+) hp \((\d+) W\)/.exec(pageFacts), rpm = /Motor ([\d,]+) RPM/.exec(pageFacts);
		if (!motor || !rpm) throw new Error('Caractéristiques communes manquantes');
		add('Puissance moteur', `${format(dynabradeMetric(`${motor[1]} (${motor[2]})`, 745.699872, 'W'))} W`);
		add('Vitesse moteur publiée', `${format(Number(rpm[1].replaceAll(',', '')))} tr/min`);
	}
	if (specs.length < 3) throw new Error('Caractéristiques distinctives insuffisantes');
	let inlet, hose;
	if (row.inlet) {
		if (!/^\d\/\d+" NPT$/.test(row.inlet) || (f['Air Inlet Thread'] ? f['Air Inlet Thread'] !== row.inlet : !pageFacts.includes(row.inlet))) throw new Error('Raccord non documenté');
		inlet = row.inlet.replace('"', ' pouce');
	}
	if (row.hose) {
		if (f['Hose I.D. Size Inch (mm)'] !== row.hose) {
			const m = /^(\d\/\d+) \((\d+)\)$/.exec(row.hose);
			if (!m || !pageFacts.includes(`${m[1]}" (${m[2]} mm)`)) throw new Error('Flexible non documenté');
		}
		hose = dynabradeMetric(row.hose, 25.4, 'mm');
		if (hose === null) throw new Error('Flexible ambigu');
	}
	const basis = row.airflowBasis === 'maximum' ? 'maximale publiée' : 'publiée';
	const family = row.page === 151 ? 'Dynorbital Supreme' : row.page === 157 ? 'Dynorbital-Spirit' : [154,155].includes(row.page) ? 'Dynorbital Extreme' : null;
	const model = family ? `${family} ${row.model}` : row.model;
	const facts = specs.slice(0, 4).map(s => `${s.label} : ${s.value}.`);
	return {
		id, slug: `${row.categoryId}-${id}`, categoryId: row.categoryId, category, label: `${category} Dynabrade ${model}`, brand: 'Dynabrade', model, mpn: row.model,
		variant: { familyId: `dynabrade-${row.categoryId}`, label: model, distinguishingAttributes: Object.fromEntries(specs.map(s => [s.label, s.value])) },
		demandModel: 'fixed-flow', workingPressureBar: { min: 6.2, typical: 6.2, max: 6.2 }, airflowLpm: { min: flow, typical: flow, max: flow },
		usagePattern: row.categoryId === 'perceuse' ? 'intermittent' : 'continuous', confidence: 'A',
		...(inlet ? { connectorSize: `Entrée ${inlet}${hose ? `, flexible intérieur ${format(hose)} mm` : ''}` } : {}),
		...(hose ? { recommendedHose: { innerDiameterMm: hose } } : {}),
		image: { src: `/images/products/${id}-technical.webp`, alt: `Repères techniques Dynabrade ${model} : consommation ${basis} de ${format(flow)} L/min à 6,2 bar`, sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après le catalogue Dynabrade D25.01' },
		editorial: {
			overview: `Dynabrade ${model}, référence ${row.model}, présente une consommation ${basis} de ${format(flow)} L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page ${row.page}. ${facts.slice(0, 2).join(' ')}`,
			verifiedFacts: [...facts, ...(inlet ? [`Entrée d’air : ${inlet}.`] : []), ...(hose ? [`Flexible : ${format(hose)} mm de diamètre intérieur publié.`] : [])],
			limitations: [
				...omitted,
				`Le calcul conserve la consommation ${basis}, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.`,
				'Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.',
				...(hose ? ['Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.'] : ['Le diamètre de flexible n’est pas repris faute de valeur individuelle non ambiguë dans le tableau sélectionné.']),
				...(!inlet ? ['Le raccord d’entrée doit être confirmé dans la notice individuelle avant de choisir un adaptateur.'] : []),
				'Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.',
			],
		}, specifications: specs,
		evidence: [{ id: evidenceId, sourceUrl, sourceLabel: `Dynabrade, catalogue D25.01, ${row.model}, page ${row.page}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: `Tableau ${row.tableId}, ligne ${row.rowIndex}. Consommation ${basis} : ${row.reviewedFlow} SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées.` }],
		fieldSources: { mpn: [evidenceId], airflowLpm: [evidenceId], workingPressureBar: [evidenceId], ...(inlet ? { connectorSize: [evidenceId] } : {}), ...(hose ? { recommendedHose: [evidenceId] } : {}) },
		notes: ['Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.', 'La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil.'],
	};
}
