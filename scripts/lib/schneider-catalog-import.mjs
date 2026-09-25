/** Parse only the reviewed tables of the 2025 manufacturer catalog. */
export function germanQuantity(raw) {
	if (typeof raw !== 'string' || !/^(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(raw)) throw new Error(`Nombre allemand invalide : ${raw}`);
	const value = Number(raw.replaceAll('.', '').replace(',', '.'));
	if (!Number.isFinite(value) || value <= 0) throw new Error('Valeur positive obligatoire');
	return value;
}
function summedQuantity(raw) {
	if (!/^\d+x/.test(raw)) return germanQuantity(raw);
	const parts = raw.split('x');
	if (parts.length !== 2) throw new Error('Configuration multiple invalide');
	return germanQuantity(parts[0]) * germanQuantity(parts[1]);
}
const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });
const bases = new Set(['ISO1217-published-pressure-minus-1-bar', 'published-at-5-bar', 'filling-without-pressure']);
export function createSchneiderDraft(snapshot, row) {
	if (snapshot.edition !== '2025' || snapshot.observedAt !== '2026-09-25' || !/^[a-f0-9]{64}$/.test(snapshot.sourceSha256)) throw new Error('Édition source non revue');
	const source = new URL(snapshot.sourceUrl);
	if (source.protocol !== 'https:' || source.hostname !== 'www.schneider-airsystems.de' || source.search || source.hash || source.username || source.password || source.port) throw new Error('Source fabricant invalide');
	if (!bases.has(row.flowBasis) || ![39,41,42,46,47,48,49,50,51,52,53,68,69,70,71].includes(row.page)) throw new Error('Table non revue');
	if (!/^(?:UNM|SEM|CPM) [A-Za-z0-9 -]+$/.test(row.model) || !/^(?:\d{10}|DGKH\d{6})$/.test(row.mpn)) throw new Error('Référence invalide');
	const clean = row.flowBasis === 'published-at-5-bar';
	const unqualified = row.flowBasis === 'filling-without-pressure';
	const c = row.rawColumns;
	if (c.length !== (clean ? 10 : unqualified ? 11 : 9)) throw new Error('Colonnes déplacées');
	const pressure = germanQuantity(c[0]), intake = germanQuantity(c[1]), flow = germanQuantity(c[2]), power = summedQuantity(c[3]);
	const hasVoltage = clean || unqualified;
	const offset = hasVoltage ? 1 : 0;
	const rpm = germanQuantity(c[4 + offset]), tank = summedQuantity(c[5 + offset]), weight = germanQuantity(c[6 + offset]), noise = germanQuantity(c[7 + offset]);
	const dimensions = c.at(-1).split('x').map(germanQuantity);
	if (dimensions.length !== 3 || (row.oilType !== 'oil' && row.oilType !== 'oil-free')) throw new Error('Caractéristiques non revues');
	const fadPressure = clean ? 5 : pressure - 1;
	if (fadPressure <= 0 || fadPressure > pressure) throw new Error('Pression de restitution impossible');
	const id = `schneider-${row.model.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`;
	const evidenceId = `schneider-2025-${row.mpn.toLowerCase()}`;
	const oilEvidenceId = /STB/.test(row.model) ? 'schneider-unm-stb-lubrication' : /STH/.test(row.model) ? 'schneider-unm-sth-lubrication' : 'schneider-unm-sts-stl-lubrication';
	const sourceUrl = `${snapshot.sourceUrl}#page=${row.page}`;
	const starDelta = /(?: C|XDKC)$/.test(row.model);
	const dryer = /X(?:S)?DK/.test(row.model) || (clean && /M Clean$/.test(row.model));
	const silent = /XS/.test(row.model) || [39,41,42].includes(row.page);
	const equipment = [starDelta ? 'Démarreur étoile-triangle prémonté (version C).' : '', dryer ? `Sécheur ${clean ? 'à membrane' : 'frigorifique'} intégré.` : '', silent ? 'Version avec réduction du bruit publiée par le fabricant.' : '', /STB/.test(row.model) ? 'Unité d’appoint destinée à étendre un réseau d’air comprimé existant.' : ''].filter(Boolean);
	const limitations = [
		unqualified ? `Le débit de remplissage de ${format(flow)} L/min n’a pas de pression de mesure précisée. Il est conservé comme information et exclu du FAD : la compatibilité reste indéterminée.` : `Un seul point de débit restitué à ${format(fadPressure)} bar est documenté ; aucune courbe complète n’est inventée.`,
		'Caractéristiques de l’édition 2025 du catalogue allemand, consultée le 25 septembre 2026. La disponibilité en France et la configuration livrée restent à confirmer.',
		'Illustration de gamme issue du catalogue : la cuve et les accessoires peuvent varier selon la référence.',
	];
	if (!clean && !unqualified) limitations.push('Le fabricant destine UniMaster aux besoins non permanents ; aucun taux de marche continu n’est supposé.');
	if (clean) limitations.push('Le débit publié à 5 bar ne permet pas de conclure pour un outil exigeant 6,3 bar.');
	if (row.mpn === '1129741354') limitations.push('La désignation contient « 25 », mais la colonne cuve du catalogue indique 24 litres : cette dernière valeur est retenue.');
	if (row.mpn === '1121580510') limitations.push('Divergence fabricant : la boutique affiche 16 bar et 76,5 kg, contre 10 bar et 94 kg dans ce catalogue. Les calculs restent limités aux valeurs du catalogue daté.');
	if (['1121580529', '1121570206'].includes(row.mpn)) limitations.push('Divergence fabricant : la boutique affiche 11 bar tandis que le catalogue indique 10 bar. Le débit à 9 bar reste rattaché uniquement au catalogue.');
	const spec = (label, value) => ({ label, value, evidenceIds: [evidenceId] });
	const specifications = [spec('Dimensions largeur × profondeur × hauteur', `${dimensions.map(format).join(' × ')} mm`), spec('Vitesse de rotation', `${format(rpm)} tr/min`), spec(unqualified ? 'Pression acoustique LpA à 4 m' : 'Pression acoustique LpA à 1 m', `${format(noise)} dB(A)`), ...equipment.map((value) => spec('Équipement de cette version', value))];
	if (unqualified) specifications.push(spec('Débit de remplissage sans pression publiée', `${format(flow)} L/min`), spec('Puissance acoustique LwA', `${format(germanQuantity(c[9]))} dB(A)`));
	const evidence = [{ id: evidenceId, sourceUrl, sourceLabel: `Schneider airsystems, catalogue 2025, p. ${row.page}, réf. ${row.mpn}`, sourceType: 'manufacturer', retrievedAt: snapshot.observedAt, confidence: 'A', notes: unqualified ? 'Füllleistung sans pression : pas de conversion en FAD.' : clean ? 'Note de tableau : Liefermenge bei 5 bar. Débit livré à 5 bar.' : `Note 2 du tableau : débit maximal ISO 1217 à la pression indiquée moins 1 bar, soit ${pressure} − 1 = ${fadPressure} bar.` }];
	if (row.oilType === 'oil') {
		if (!row.oilEvidence) throw new Error('Source de lubrification obligatoire');
		evidence.push({ id: oilEvidenceId, sourceUrl: row.oilEvidence.url, sourceLabel: row.oilEvidence.label, sourceType: row.oilEvidence.type, retrievedAt: snapshot.observedAt, confidence: 'A', notes: 'Source utilisée pour la lubrification seulement ; les autres caractéristiques proviennent du tableau du catalogue 2025.' });
	}
	const fields = ['mpn','tankLiters','maxPressureBar','fadCurve','intakeFlowLpm','powerKw','weightKg','noiseDb'];
	const product = {
		id, slug: id, brand: 'Schneider', model: row.model, mpn: row.mpn,
		tankLiters: tank, maxPressureBar: pressure, fadCurve: unqualified ? [] : [{ pressureBar: fadPressure, litersPerMinute: flow }], intakeFlowLpm: intake, oilType: row.oilType, powerKw: power, weightKg: weight, noiseDb: noise,
		confidence: unqualified ? 'C' : 'A', status: 'unknown',
		image: { src: `/images/products/schneider-catalogue-2025-p${row.page}-${row.imageIndex}.webp`, alt: `Illustration de la gamme Schneider présentée p. ${row.page}`, sourceUrl, sourceLabel: `Illustration de gamme, catalogue officiel Schneider 2025, p. ${row.page}` },
		editorial: {
			overview: `${row.model}, référence ${row.mpn}, associe une cuve de ${format(tank)} L à un moteur de ${format(power)} kW. ${unqualified ? `Le catalogue donne ${format(flow)} L/min de remplissage sans pression associée, ce qui ne suffit pas à valider un outil.` : `Le débit restitué publié est de ${format(flow)} L/min à ${format(fadPressure)} bar.`} ${equipment.join(' ')}`.trim(),
			verifiedFacts: [`Pression publiée : ${format(pressure)} bar ; débit aspiré : ${format(intake)} L/min, distinct du débit restitué.`, `Poids publié : ${format(weight)} kg ; dimensions : ${dimensions.map(format).join(' × ')} mm.`, `Cuve : ${format(tank)} L ; puissance moteur : ${format(power)} kW ; rotation : ${format(rpm)} tr/min.`, ...equipment], limitations,
		}, specifications, evidence,
		fieldSources: { ...Object.fromEntries(fields.map((f) => [f,[evidenceId]])), oilType: [row.oilType === 'oil' ? oilEvidenceId : evidenceId] },
		notes: ['Les valeurs proviennent du fabricant et ne constituent pas une mesure physique réalisée par CompatAir.', `Source : catalogue 2025, page ${row.page}, référence ${row.mpn}.`],
	};
	if (hasVoltage) { product.voltage = `${germanQuantity(c[4])} V`; product.fieldSources.voltage = [evidenceId]; }
	if (clean) { product.dutyCycle = 0.8; product.fieldSources.dutyCycle = [evidenceId]; }
	return product;
}
