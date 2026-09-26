/** Deterministic import of individually identified manufacturer specifications. */
export const ATLAS_CATALOG = 'https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf';
const categories = {
	visseuse: 'Visseuse pneumatique', boulonneuse: 'Boulonneuse pneumatique', 'cle-a-impulsions': 'Clé à impulsions pneumatique',
	'cle-a-chocs': 'Clé à chocs pneumatique', 'cle-a-cliquet': 'Clé à cliquet pneumatique', perceuse: 'Perceuse pneumatique', taraudeuse: 'Taraudeuse pneumatique',
	meuleuse: 'Meuleuse pneumatique', 'ponceuse-rotative': 'Ponceuse rotative pneumatique', 'ponceuse-orbitale': 'Ponceuse orbitale pneumatique',
	'ponceuse-bande': 'Ponceuse à bande pneumatique', 'marteau-a-river': 'Marteau à river pneumatique', burineur: 'Burineur pneumatique', 'derouilleur-a-aiguilles': 'Dérouilleur à aiguilles pneumatique',
};
const flowLabels = { 'Air consumption at free speed': 'à vide', 'Air consumption at max output': 'à puissance maximale', 'Air consumption under load': 'en charge', 'Air consumption': 'publiée' };
const specLabels = {
	'Free speed': 'Vitesse à vide', 'Max free speed': 'Vitesse maximale à vide', 'Free speed forward': 'Vitesse à vide en marche avant', 'Free speed reverse': 'Vitesse à vide en marche arrière',
	'Torque range max': 'Couple maximal de la plage', 'Torque range min': 'Couple minimal de la plage',
	'Torque range soft joint max': 'Couple maximal sur assemblage élastique', 'Torque range soft joint min': 'Couple minimal sur assemblage élastique',
	'Max torque at 6.3 bar soft joint': 'Couple maximal à 6,3 bar sur assemblage élastique', 'Min torque at 6.3 bar soft joint': 'Couple minimal à 6,3 bar sur assemblage élastique',
	'Torque range at 6.3 bar max': 'Couple maximal de la plage à 6,3 bar', 'Torque range at 6.3 bar min': 'Couple minimal de la plage à 6,3 bar',
	'Max torque at 6.3 bar': 'Couple maximal à 6,3 bar', 'Max torque': 'Couple maximal publié',
	'Power': 'Puissance', 'Max output': 'Puissance maximale', 'Weight': 'Masse', 'Length': 'Longueur', 'Diameter': 'Diamètre', 'Height': 'Hauteur',
	'Output size': 'Dimension de sortie', 'Output type': 'Type de sortie', 'Square drive': 'Carré d’entraînement', 'Square drive size': 'Carré d’entraînement',
	'Model type': 'Forme', 'Reversible': 'Réversible', 'Shut-off': 'Arrêt automatique', 'Start trigger': 'Déclenchement',
	'Chuck capacity': 'Capacité du mandrin', 'Chuck capacity range min': 'Capacité minimale du mandrin', 'Chuck capacity range max': 'Capacité maximale du mandrin',
	'Collet size': 'Pince', 'Delivered collet size': 'Pince livrée', 'Spindle thread': 'Filetage de broche', 'Spindle length': 'Longueur de broche',
	'Max wheel dia': 'Diamètre maximal de meule', 'Max pad dia': 'Diamètre maximal de plateau', 'Pad size': 'Dimensions du plateau', 'Orbit dia': 'Diamètre d’orbite',
	'Belt dimension': 'Dimensions de bande', 'Belt speed': 'Vitesse de bande', 'Head angle': 'Angle de tête', 'Head type': 'Type de tête',
	'Angle head centre to side': 'Distance axe-bord de tête', 'Angle head height': 'Hauteur de tête', 'Height over spindle': 'Hauteur au-dessus de la broche',
	'Piston dia': 'Diamètre du piston', 'Stroke': 'Course du piston', 'Blows': 'Cadence de frappe', 'Rivet set shank': 'Queue de bouterolle', 'Tapping capacity': 'Capacité de taraudage',
};
const translations = { Yes: 'Oui', No: 'Non', Straight: 'Droit', Angle: 'Renvoi d’angle', Pistol: 'Poignée revolver', 'Square, Male': 'Carré mâle', 'Hexagon, Female': 'Hexagonal femelle', 'Push start': 'Démarrage par poussée', 'Lever start': 'Démarrage par levier', 'Trigger start': 'Démarrage par gâchette', 'Shut-off': 'Oui', Stall: 'Calage', None: 'Aucun' };
const format = n => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const metric = value => typeof value === 'string' ? value : value?.metric;
function number(value, unit) {
	const raw = metric(value), match = /^(\d+(?:\.\d+)?) ([\w/]+)$/.exec(raw ?? '');
	if (!match || match[2] !== unit || !(Number(match[1]) > 0) || !Number.isFinite(Number(match[1]))) throw new Error(`Valeur ${unit} absente ou ambiguë`);
	return Number(match[1]);
}
export function atlasFlow(value) {
	const lps = number(value, 'l/s');
	const match = /^(\d+(?:\.\d+)?) cfm$/.exec(value?.imperial ?? '');
	if (!match) throw new Error('Unité secondaire de débit absente');
	const cfm = Number(match[1]);
	const precision = raw => 0.5 * 10 ** -(raw.split('.')[1]?.length ?? 0);
	const tolerance = precision(metric(value).split(' ')[0]) * 60 / 28.316846592 + precision(match[1]);
	if (!(cfm > 0) || !Number.isFinite(cfm) || Math.abs(lps * 60 / 28.316846592 - cfm) > tolerance + .01) throw new Error('Unités de débit contradictoires');
	return Math.round(lps * 60 * 1000) / 1000;
}
function display(value) {
	const raw = metric(value);
	if (typeof raw !== 'string' || !raw.trim()) return null;
	return translations[raw] ?? raw.replace(/r\/min/g, 'tr/min').replace(/per-min/g, 'coups/min').replace(/\bin\b/g, 'pouce').replace(/(\d)\.(\d)/g, '$1,$2');
}
export function createAtlasCopcoToolDraft(snapshot, row) {
	if (snapshot.schemaVersion !== 1 || snapshot.observedAt !== '2026-09-26' || snapshot.catalog.sourceUrl !== ATLAS_CATALOG || !/^[a-f0-9]{64}$/.test(snapshot.catalog.sourceSha256) || snapshot.catalog.pressurePage !== 3 || snapshot.catalog.referencePressureBar !== 6.3) throw new Error('Catalogue de référence non versionné');
	const family = snapshot.families.find(f => f.id === row.familyId);
	if (!family || !categories[family.categoryId] || !/^\d{10}$/.test(row.mpn) || !/^[a-f0-9]{64}$/.test(row.sourceSha256)) throw new Error('Référence individuelle non revue');
	const url = new URL(row.sourceUrl);
	if (url.protocol !== 'https:' || url.hostname !== 'www.atlascopco.com' || !url.pathname.startsWith('/en-ca/itba/products/') || !url.pathname.endsWith(`-sku${row.mpn}`) || url.search || url.hash || url.username || url.password) throw new Error('Source individuelle non autorisée');
	const proof = row.catalogIdentity;
	if (!Number.isInteger(proof?.page) || proof.page < 9 || proof.page > 263 || !proof.line?.includes(`${row.mpn.slice(0, 4)} ${row.mpn.slice(4, 8)} ${row.mpn.slice(8)}`)) throw new Error('Identité absente du catalogue de référence');
	const attributes = row.attributes;
	const get = name => attributes.find(a => a.name === name)?.value;
	const flows = attributes.filter(a => Object.hasOwn(flowLabels, a.name)).map(a => ({ label: flowLabels[a.name], raw: a.value, value: atlasFlow(a.value) }));
	if (!flows.length) throw new Error('Débit individuel manquant');
	const selected = flows.reduce((a, b) => b.value > a.value ? b : a);
	const nominal = get('Nominal working pressure');
	// Low-pressure variants are deliberately excluded from this reviewed batch.
	if (nominal && number(nominal, 'bar') !== 6.3 || /(?:-L\b|LUD)/.test(row.model)) throw new Error('Condition de pression différente du lot revu');
	if (family.categoryId === 'cle-a-impulsions' && !nominal) throw new Error('Pression nominale des impulsions manquante');
	const referencePressure = 6.3;
	const maximumPressure = get('Max working pressure') ? number(get('Max working pressure'), 'bar') : referencePressure;
	if (maximumPressure < referencePressure) throw new Error('Pressions contradictoires');
	const id = `atlas-copco-${row.mpn}`, evidenceId = `${id}-fiche-fabricant`, catalogId = `${id}-catalogue-uk`;
	const specs = [], add = (label, value, evidenceIds = [evidenceId]) => specs.push({ label, value, evidenceIds });
	for (const [name, label] of Object.entries(specLabels)) { const value = display(get(name)); if (value) add(label, value); }
	if (specs.length < 3) throw new Error('Caractéristiques distinctives insuffisantes');
	const facts = specs.slice(0, 4).map(s => `${s.label} : ${s.value}.`);
	for (const flow of flows) add(`Consommation ${flow.label}`, `${format(flow.value)} L/min (${metric(flow.raw)})`);
	if (get('Max working pressure')) add('Pression maximale admise', `${format(maximumPressure)} bar`);
	add('Pression de référence des performances', '6,3 bar', [catalogId, ...(nominal ? [evidenceId] : [])]);
	const inletParts = ['Air inlet thread BSP', 'Air inlet thread NPT', 'Air inlet thread'].filter(name => get(name)).map(name => `${display(get(name))}${name.endsWith('BSP') ? ' BSP' : name.endsWith('NPT') ? ' NPT' : ' (norme de filetage non précisée)'}`);
	const hoseRaw = get('Recommended hose size') ?? get('Rec hose size') ?? get('Rec. hose size');
	const hose = hoseRaw && /^\d+(?:\.\d+)? mm$/.test(metric(hoseRaw)) ? number(hoseRaw, 'mm') : null;
	if (hoseRaw && !hose) add('Flexible recommandé, indication fabricant', display(hoseRaw));
	const categoryId = family.categoryId, category = categories[categoryId];
	return {
		id, slug: `${categoryId}-atlas-copco-${row.model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`, categoryId, category, label: `${category} Atlas Copco ${row.model}`, brand: 'Atlas Copco', model: row.model, mpn: row.mpn,
		variant: { familyId: `atlas-copco-${row.familyId}`, label: row.model, distinguishingAttributes: Object.fromEntries(specs.map(s => [s.label, s.value])) },
		demandModel: 'fixed-flow', workingPressureBar: { min: referencePressure, typical: referencePressure, max: maximumPressure }, airflowLpm: { min: selected.value, typical: selected.value, max: selected.value },
		usagePattern: ['meuleuse', 'ponceuse-rotative', 'ponceuse-orbitale', 'ponceuse-bande'].includes(categoryId) ? 'continuous' : 'intermittent', confidence: 'A',
		...(inletParts.length ? { connectorSize: `Entrée ${inletParts.join(' ; ')}${hose ? ` ; flexible intérieur ${format(hose)} mm` : ''}` } : {}),
		...(hose ? { recommendedHose: { innerDiameterMm: hose } } : {}),
		image: { src: `/images/products/${id}-technical.webp`, alt: `Atlas Copco ${row.model}, référence ${row.mpn} : ${format(selected.value)} L/min ${selected.label}, référence 6,3 bar`, sourceUrl: row.sourceUrl, sourceLabel: 'Repères techniques CompatAir d’après Atlas Copco' },
		editorial: {
			overview: `Atlas Copco ${row.model}, référence ${row.mpn}, demande ${format(selected.value)} L/min ${selected.label} selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. ${facts.slice(0, 2).join(' ')}`,
			verifiedFacts: [...facts, ...flows.map(f => `Consommation ${f.label} : ${format(f.value)} L/min, convertis depuis ${metric(f.raw)}.`), ...(hose ? [`Flexible recommandé : ${format(hose)} mm de diamètre intérieur.`] : [])],
			limitations: [
				flows.length > 1 ? 'Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.' : `La consommation ${selected.label} reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.`,
				...(maximumPressure !== referencePressure ? [`La pression maximale admise de ${format(maximumPressure)} bar n’est pas la pression de référence du débit. Aucune consommation à ${format(maximumPressure)} bar n’est extrapolée.`] : []),
				'La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.',
				'Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.',
				...(inletParts.length > 1 ? ['La fiche indique des filetages BSP et NPT. Confirmer le raccord de la variante livrée dans sa notice avant de choisir un adaptateur.'] : []),
				...(hose ? ['La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau.'] : ['Le flexible doit être confirmé dans la notice individuelle avant installation.']),
				...(categoryId === 'cle-a-impulsions' ? ['Cet outil utilise des impulsions hydrauliques et une alimentation pneumatique. Il ne doit pas être assimilé à une clé à chocs mécanique.'] : []),
			],
		}, specifications: specs,
		evidence: [
			{ id: evidenceId, sourceUrl: row.sourceUrl, sourceLabel: `Atlas Copco, ${row.model}, ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: 'Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée.' },
			{ id: catalogId, sourceUrl: `${ATLAS_CATALOG}#page=${proof.page}`, sourceLabel: `Atlas Copco, Industrial Tools and Solutions UK, page PDF ${proof.page} ; conditions page 3`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: `Référence ${row.mpn} présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé.` },
		],
		fieldSources: { mpn: [evidenceId, catalogId], airflowLpm: [evidenceId], workingPressureBar: [catalogId, ...(get('Max working pressure') || nominal ? [evidenceId] : [])], ...(inletParts.length ? { connectorSize: [evidenceId] } : {}), ...(hose ? { recommendedHose: [evidenceId] } : {}) },
		notes: ['Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil.'],
	};
}
