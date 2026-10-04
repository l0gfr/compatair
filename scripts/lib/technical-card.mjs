const xml = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
export const TECHNICAL_CARD_WIDTH = 600;
export const TECHNICAL_CARD_HEIGHT = 400;
const vectorHeader = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">';

// Recognize only our fixed generated layout, not arbitrary SVG metadata.
// Publication separately requires byte-for-byte regeneration from the product.
export function generatedTechnicalCardDimensions(svg) {
	return svg.startsWith(vectorHeader) && svg.endsWith('</svg>') ? { width: 1200, height: 800 } : undefined;
}

const format = (n) => n.toLocaleString('fr-FR', { maximumFractionDigits: 3 });

export function technicalCardSvg(p, kind) {
	if (!['compressors', 'tools'].includes(kind)) throw new Error('Unknown product kind');
	const compressor = kind === 'compressors';
	const incomplete = !compressor && p.demandModel === 'variable-volume';
	const point = compressor ? p.fadCurve.at(-1) : null;
	const toolPressure = compressor ? undefined : p.workingPressureBar.typical ?? p.workingPressureBar.max;
	const compressorPressureLabel = p.specifications?.some(spec => spec.label === 'Pression de la configuration retenue') ? 'PRESSION RETENUE' : 'PRESSION MAX.';
	const columns = compressor ? [
		point ? ['DÉBIT RESTITUÉ', format(point.litersPerMinute), `L/min à ${format(point.pressureBar)} bar`] : ['FAD À PRESSION CONNUE', 'Non établi', 'Compatibilité indéterminée'],
		['CUVE', format(p.tankLiters), 'litres'], [compressorPressureLabel, format(p.maxPressureBar), 'bar'],
	] : [
		[p.demandModel === 'per-action' ? 'AIR PAR COUP' : incomplete ? 'DÉBIT MINUTE' : p.airflowBasis === 'average' ? 'CONSOMMATION MOY.' : p.airflowBasis === 'free-speed' ? 'CONSOMMATION À VIDE' : p.airflowBasis === 'unqualified' ? 'RÉGIME NON PRÉCISÉ' : 'CONSOMMATION', incomplete ? 'Non établi' : format(p.airPerActionLiters ?? p.airflowLpm.typical), incomplete ? 'Conditions à confirmer' : p.demandModel === 'per-action' ? 'litres / coup' : 'L/min publiés'],
		[toolPressure === undefined ? 'PRESSION DE TRAVAIL' : p.workingPressureBar.typical === undefined ? 'PRESSION MAX.' : 'PRESSION RETENUE', toolPressure === undefined ? 'Non établie' : format(toolPressure), toolPressure === undefined ? 'Conditions à confirmer' : 'bar'], ['RÉFÉRENCE', p.mpn ?? 'Non publié', 'fabricant'],
	];
	const displayName = p.model.length > 68 ? `${p.model.slice(0,65).trim()}…` : p.model;
	const nameLines = displayName.match(/.{1,35}(?:\s|$)|.{1,35}/g).map(s => s.trim());
	const columnValueSvg = (c, i) => {
		const x = 82 + i * 350;
		const characters = Array.from(c[1]);
		if (!compressor && i === 2 && characters.length > 16) {
			if (characters.length > 48) throw new RangeError('Tool reference exceeds the supported three-line card layout');
			const lines = [];
			for (let offset = 0; offset < characters.length; offset += 16) lines.push(characters.slice(offset, offset + 16).join(''));
			const firstY = lines.length === 2 ? 458 : 426;
			return lines.map((line, lineIndex) => `<text x="${x}" y="${firstY + lineIndex * 32}" font-size="20" font-weight="700">${xml(line)}</text>`).join('');
		}
		return `<text x="${x}" y="475" font-size="${c[1].length > 7 ? 28 : 64}" font-weight="700">${xml(c[1])}</text>`;
	};
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="#f0f1e9"/><rect x="44" y="44" width="1112" height="712" rx="18" fill="#fffef9" stroke="#c7d0c6" stroke-width="2"/><g font-family="Arial,sans-serif" fill="#11251c"><text x="82" y="115" font-size="27" fill="#166b4b">${xml(p.brand.toUpperCase())}</text>${nameLines.map((line, i) => `<text x="82" y="${190 + i * 48}" font-size="42" font-weight="700">${xml(line)}</text>`).join('')}<text x="82" y="292" font-size="22" fill="#53665b">Référence ${xml(p.mpn ?? p.model)}</text><line x1="82" y1="320" x2="1118" y2="320" stroke="#c7d0c6"/>${columns.map((c, i) => `<text x="${82 + i * 350}" y="382" font-size="21" fill="#53665b">${xml(c[0])}</text>${columnValueSvg(c, i)}<text x="${82 + i * 350}" y="528" font-size="25">${xml(c[2])}</text>`).join('')}<rect x="82" y="600" width="1036" height="62" rx="8" fill="#edf5bd"/><text x="108" y="640" font-size="25" fill="#073d2b">Valeurs déclarées par le fabricant</text><text x="82" y="715" font-size="21" fill="#53665b">REPÈRES TECHNIQUES</text><text x="1118" y="716" text-anchor="end" font-size="28" fill="#166b4b">CompatAir</text></g></svg>`;
	return svg;
}
