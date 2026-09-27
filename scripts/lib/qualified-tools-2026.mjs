import { createMultiBrandTool } from './multi-brand-catalog-import.mjs';

const same = (a, b, field) => {
	if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`Transcription différente : ${field}`);
};
const number = value => {
	if (!/^\d+(?:\.\d+)?$/.test(String(value))) throw new Error('Nombre source absent ou ambigu');
	const result = Number(value);
	if (!(result > 0)) throw new Error('Valeur source non positive');
	return result;
};
const unit = (text, suffix) => {
	if (!text?.endsWith(` ${suffix}`)) throw new Error('Unité source différente');
	return number(text.slice(0, -suffix.length).trim());
};
const attribute = (fields, name, expectedUnit) => {
	const value = fields[name];
	if (value?.unit !== expectedUnit) throw new Error('Unité source différente');
	return number(value.value);
};

export function buildQualifiedTools(snapshot) {
	if (snapshot.schemaVersion !== 1 || snapshot.batchId !== 'qualified-tools-2026-09-27' || snapshot.observedAt !== '2026-09-27' || snapshot.rows.length !== 800) throw new Error('Lot qualifié non revu');
	if (new Set(snapshot.sources.map(source => source.id)).size !== snapshot.sources.length) throw new Error('Source dupliquée');
	const identities = new Set();
	const products = snapshot.rows.map(row => {
		const identity = `${row.brand}:${row.mpn}`;
		if (identities.has(identity)) throw new Error('Référence dupliquée');
		identities.add(identity);
		const raw = JSON.parse(row.rawLine);
		same(raw.mpn, row.mpn, 'référence');
		same(raw.model, row.model, 'modèle');
		if (!row.specifications || row.specifications.length < 3) throw new Error('Détails propres insuffisants');
		for (const spec of row.specifications) {
			if (spec.label === 'Consommation en charge / à vide' && row.brand === 'Sioux') continue;
			if (!raw.specifications.some(item => item.label === spec.label && item.value === spec.value)) throw new Error('Spécification absente de la transcription');
		}
		let flow, pressure;
		if (row.brand === 'Sioux') {
			if (row.sourceId !== 'sioux-industrial' || !raw.tableLine.startsWith(`${row.mpn} `) && !raw.tableLine.split(' ').slice(0, 2).includes(row.mpn)) throw new Error('Identité absente du tableau Sioux');
			if (!Number.isInteger(row.page) || row.page < 14 || row.page > 87 || !raw.pairs?.length) throw new Error('Tableau Sioux absent');
			for (const pair of raw.pairs) {
				same(number(raw.values[pair.cfmColumn]), pair.cfm, 'scfm');
				same(number(raw.values[pair.litersPerSecondColumn]), pair.litersPerSecond, 'L/s');
				const precision = value => .5 * 10 ** -(String(value).split('.')[1]?.length ?? 0);
				const c = precision(raw.values[pair.cfmColumn]), l = precision(raw.values[pair.litersPerSecondColumn]);
				if ((pair.cfm + c) * .47194745 < pair.litersPerSecond - l || (pair.cfm - c) * .47194745 > pair.litersPerSecond + l) throw new Error('Unités Sioux contradictoires');
			}
			flow = Math.max(...raw.pairs.map(pair => pair.litersPerSecond)) * 60;
			pressure = raw.pressureBar;
			if (pressure !== 6.2) throw new Error('Pression Sioux non revue');
		} else if (row.brand === 'PFERD') {
			flow = Math.max(unit(raw.fields['Consommation d’air, sous charge'], 'm³/min'), unit(raw.fields['Consommation d’air, à vide'], 'm³/min')) * 1000;
			pressure = unit(raw.fields['Pression de service'], 'bar');
		} else if (row.brand === 'Rodcraft') {
			const values = [attribute(raw.fields, 'AirConsumptionAtLoad_unit_SI', 'l/s')];
			if (raw.fields.FreeSpeedAirConsumption_unit_SI) values.push(attribute(raw.fields, 'FreeSpeedAirConsumption_unit_SI', 'l/s'));
			flow = Math.max(...values) * 60;
			pressure = attribute(raw.fields, 'Max_DynamicAirWorkingPressure_unit_SI', 'bar');
		} else throw new Error('Marque hors lot qualifié');
		same(row.airflowLpm, Number(flow.toFixed(6)), 'débit converti');
		same(row.workingPressureBar, { min: pressure, typical: pressure, max: pressure }, 'pression de référence');
		same(row.demandModel, 'fixed-flow', 'modèle de demande');
		if (row.airflowBasis !== undefined || row.airPerActionLiters !== undefined) throw new Error('Moyenne ou cadence implicite interdite');
		const product = createMultiBrandTool(snapshot, row);
		product.editorial.overview = `${row.brand} ${row.model}, référence ${row.mpn}. Le dimensionnement utilise ${row.airflowLpm.toLocaleString('fr-FR')} L/min à ${pressure.toLocaleString('fr-FR')} bar, selon les régimes publiés par le fabricant. ${row.specifications.slice(0, 3).map(spec => `${spec.label} : ${spec.value}.`).join(' ')}`;
		return product;
	});
	if (new Set(products.map(product => product.id)).size !== products.length) throw new Error('Identifiant produit dupliqué');
	return { compressors: [], tools: products };
}
