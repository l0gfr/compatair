import { createMultiBrandCompressor, createMultiBrandTool } from './multi-brand-catalog-import.mjs';
import { createCpPdfToolDraft } from './cp-pdf-catalog-import.mjs';
import { createDynabradeToolDraft } from './dynabrade-catalog-import.mjs';

function same(actual, expected, message) {
	if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error(message);
}
export function validateIndustrialRow(row) {
	if (!['FIAC', 'ABAC'].includes(row.brand)) throw new Error('Fabricant de compresseur hors périmètre');
	const raw = JSON.parse(row.rawLine);
	if (row.brand === 'FIAC') same(row.model, raw.model, 'Nom de version FIAC différent de la fiche');
	if (row.brand === 'FIAC' || row.brand === 'ABAC') {
		const fields = raw.fields;
		same(raw.mpn, row.mpn, 'MPN différent de la fiche fabricante');
		same(row.fadCurve, [{ pressureBar: Number(fields['Max Working Pressure (bar)']), litersPerMinute: Number(fields['FAD capacity (l/min)']) }], 'FAD ou pression différent de la fiche');
		same(row.tankLiters, Number(fields['Vessel size (lt)']), 'Cuve différente de la fiche');
		same(row.maxPressureBar, Number(fields['Max Working Pressure (bar)']), 'Pression maximale différente');
		if (row.powerKw !== Number(fields['Motor (kw)']) || row.weightKg !== Number(fields['Weight (mass)'])) throw new Error('Puissance ou masse différente');
		if (row.voltage !== `${fields['Supply voltage']} V, ${fields.Frequency} Hz` || row.phase !== (fields['Number of phases'] === '3' ? 'three-phase' : 'single-phase')) throw new Error('Version électrique différente');
		if (row.oilType !== 'oil' || (row.brand === 'ABAC' ? !(Number(fields['Oil capacity']) > 0) : !row.fieldEvidence?.oilType?.length)) throw new Error('Lubrification non prouvée');
	}
}
export function buildIndustrialExpansion({ industrial, cp, dynabrade }) {
	if (industrial.rows.length !== 200 || industrial.toolRows.length !== 454 || cp.rows.length !== 10 || dynabrade.rows.length !== 36) throw new Error('Périmètre du lot modifié');
	const compressors = industrial.rows.map(row => {
		validateIndustrialRow(row);
		return createMultiBrandCompressor(industrial, row);
	});
	const tools = [...industrial.toolRows.map(row => {
		if (!['Shinano', 'Cleco', 'Master Power'].includes(row.brand)) throw new Error('Fabricant outil hors périmètre');
		if (row.specifications.length < 2) throw new Error('Caractéristiques distinctives insuffisantes');
		if (row.brand === 'Shinano') {
			let fact = JSON.parse(row.rawLine);
			if (fact.extraction) fact = JSON.parse(fact.extraction);
			const litersPerSecond = fact.airflowLs ?? fact.maxAirConsumptionLs ?? Number(fact.flowValues?.[fact.refs?.indexOf(row.model)]?.[1]);
			if (!(litersPerSecond > 0) || Math.abs(row.airflowLpm - litersPerSecond * 60) > 0.001) throw new Error('Consommation Shinano différente du maximum ou de la valeur industrielle transcrite');
			const proof = row.fieldEvidence?.workingPressureBar;
			if (proof?.length !== 1 || proof[0].sourceId !== 'shinano-general-2025' || proof[0].page !== 43) throw new Error('Pression dynamique Shinano non rattachée');
			same(row.workingPressureBar, { min: 6.3, typical: 6.3, max: 6.3 }, 'Pression Shinano différente de la preuve');
		} else if (row.brand === 'Cleco' || row.brand === 'Master Power') {
			const cells = row.rawLine.trim().replaceAll(',', '.').split(/\s+/);
			const flow = row.page === 69 ? 310 : row.page === 56 ? 430 : row.page === 86 ? Math.max(Number(cells.at(-1)), Number(cells.at(-2))) * 1000 : Number(cells.at(-1)) * 1000;
			if (!Number.isFinite(flow) || Math.abs(row.airflowLpm - flow) > 0.001) throw new Error('Consommation Cleco différente du tableau');
			if (row.brand === 'Cleco' && !/^(?:\d+[A-Z][A-Z0-9-]*|W[TP]-[A-Z0-9-]+)$/.test(row.mpn)) throw new Error('Cellule MPN Cleco mal extraite');
			const bar = row.page === 86 ? 6 : 6.2;
			same(row.workingPressureBar, { min: bar, typical: bar, max: bar }, 'Pression Cleco différente de la note de page');
			if (row.page === 77 || (row.page === 75 && row.mpn.startsWith('34RAA'))) throw new Error('Référence exclue pour contradiction entre éditions');
		}
		return createMultiBrandTool(industrial, row);
	}), ...cp.rows.map(row => createCpPdfToolDraft(cp, row)), ...dynabrade.rows.map(row => createDynabradeToolDraft(dynabrade, row))];
	const products = [...compressors, ...tools];
	for (const key of [p => p.id, p => p.slug, p => `${p.brand}|${p.mpn}`]) if (new Set(products.map(key)).size !== products.length) throw new Error('Référence en double dans le lot');
	return { compressors, tools };
}
