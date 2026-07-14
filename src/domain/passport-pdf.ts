import { passportVerdictLabel, type PassportReport } from './passport';

const PAGE_WIDTH = 595;
const PAGE_HEIGHT = 842;
const MARGIN = 52;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

function pdfSafe(value: string) {
	return value
		.replaceAll('\u2011', '-').replaceAll('\u2013', '-').replaceAll('\u2014', '-')
		.replaceAll('\u2018', "'").replaceAll('\u2019', "'").replaceAll('\u2026', '...')
		.replaceAll('\u00a0', ' ').replaceAll('œ', 'oe').replaceAll('Œ', 'OE')
		.replace(/[^\x09\x0A\x0D\x20-\xFF]/g, '?');
}

function pdfLiteral(value: string) {
	return pdfSafe(value).replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function bytes(value: string) {
	return Uint8Array.from(value, (character) => character.charCodeAt(0) & 0xff);
}

function joinBytes(parts: Uint8Array[]) {
	const output = new Uint8Array(parts.reduce((total, part) => total + part.length, 0));
	let offset = 0;
	for (const part of parts) { output.set(part, offset); offset += part.length; }
	return output;
}

function wrapText(value: string, maximumCharacters: number) {
	const words = pdfSafe(value).split(/\s+/).filter(Boolean).flatMap((word) => {
		if (word.length <= maximumCharacters) return [word];
		const chunks: string[] = [];
		for (let index = 0; index < word.length; index += maximumCharacters) chunks.push(word.slice(index, index + maximumCharacters));
		return chunks;
	});
	const lines: string[] = [];
	let line = '';
	for (const word of words) {
		if (!line) line = word;
		else if (`${line} ${word}`.length <= maximumCharacters) line += ` ${word}`;
		else { lines.push(line); line = word; }
	}
	if (line) lines.push(line);
	return lines.length ? lines : [''];
}

function formatNumber(value: number, digits = 1) {
	return value.toLocaleString('fr-FR', { maximumFractionDigits: digits });
}

function usageLabel(value: PassportReport['configuration']['usageProfile']) {
	return { occasional: 'Occasionnel', intermittent: 'Intermittent', sustained: 'Soutenu', mixed: 'Mixte' }[value];
}

function fittingLabel(value: PassportReport['configuration']['fittingStandard']) {
	return { unknown: 'Non renseigné', 'euro-7.2': 'Euro 7,2 mm', 'iso-6150-b': 'ISO 6150-B', other: 'Autre standard' }[value];
}

function filtrationLabel(value: PassportReport['configuration']['filtration']) {
	return { unknown: 'Non renseignée', none: 'Aucune déclarée', particle: 'Filtration particulaire', 'water-separator': "Séparateur d'eau", coalescing: 'Filtration coalescente', dryer: 'Sécheur' }[value];
}

export function createPassportPdf(report: PassportReport, passportUrl: string) {
	const pages: string[][] = [];
	let page: string[];
	let y: number;
	const addPage = () => {
		page = [
			'0.063 0.157 0.118 rg 0 794 595 48 re f',
			'0.827 0.922 0.337 rg 52 811 18 3 re f',
			`BT /F2 15 Tf 1 1 1 rg 1 0 0 1 80 808 Tm (${pdfLiteral('CompatAir')}) Tj ET`,
			`BT /F1 8 Tf 0.78 0.84 0.80 rg 1 0 0 1 449 808 Tm (${pdfLiteral(`Passeport ${report.schemaVersion}`)}) Tj ET`,
		];
		pages.push(page);
		y = 770;
	};
	const ensure = (height: number) => { if (y - height < 54) addPage(); };
	const addTextLine = (text: string, size = 10, bold = false, color = '0.10 0.16 0.12', x = MARGIN, lineHeight = size * 1.35) => {
		ensure(lineHeight);
		page.push(`BT /F${bold ? 2 : 1} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y.toFixed(1)} Tm (${pdfLiteral(text)}) Tj ET`);
		y -= lineHeight;
	};
	const addParagraph = (text: string, options: { size?: number; bold?: boolean; color?: string; indent?: number; spacing?: number } = {}) => {
		const size = options.size ?? 9.5;
		const indent = options.indent ?? 0;
		const maximumCharacters = Math.max(24, Math.floor((CONTENT_WIDTH - indent) / (size * 0.51)));
		const lines = wrapText(text, maximumCharacters);
		ensure(lines.length * size * 1.38 + (options.spacing ?? 5));
		for (const line of lines) addTextLine(line, size, options.bold, options.color, MARGIN + indent, size * 1.38);
		y -= options.spacing ?? 5;
	};
	const addHeading = (text: string) => {
		ensure(35);
		y -= 7;
		page.push(`0.827 0.922 0.337 rg ${MARGIN} ${(y + 1).toFixed(1)} 22 3 re f`);
		addTextLine(text, 13, true, '0.063 0.157 0.118', MARGIN + 31, 20);
		y -= 3;
	};
	const addBullet = (text: string) => {
		ensure(18);
		page.push(`0.10 0.44 0.31 rg ${MARGIN + 2} ${(y + 3).toFixed(1)} 4 4 re f`);
		addParagraph(text, { size: 9, indent: 14, spacing: 3 });
	};

	addPage();
	addTextLine('PASSEPORT COMPATAIR', 9, true, '0.10 0.44 0.31', MARGIN, 26);
	addParagraph(report.compressorLabel, { size: 25, bold: true, color: '0.063 0.157 0.118', spacing: 9 });
	addParagraph(passportVerdictLabel(report.result), { size: 14, bold: true, color: report.result.verdict === 'incompatible' ? '0.64 0.18 0.16' : '0.10 0.44 0.31', spacing: 6 });
	addParagraph(`Identifiant ${report.passportId} - moteur ${report.calculationVersion} - catalogue vérifié le ${report.catalogVerifiedAt}.`, { size: 8.5, color: '0.33 0.40 0.35', spacing: 12 });

	addHeading('Synthèse des calculs');
	addBullet(`Débit de pointe ou de dimensionnement : ${formatNumber(report.result.peakFlowLpm)} L/min.`);
	addBullet(`Débit moyen : ${formatNumber(report.result.averageFlowLpm)} L/min.`);
	addBullet(`FAD recommandé avec marge : ${formatNumber(report.result.recommendedFadLpm)} L/min à ${formatNumber(report.result.requiredPressureBar)} bar.`);
	addBullet(report.availableFadLpm === undefined ? 'FAD disponible à la pression requise : donnée insuffisante.' : `FAD documenté du compresseur : ${formatNumber(report.availableFadLpm)} L/min.`);
	addBullet(`Confiance du résultat : ${report.result.confidence === 'high' ? 'élevée' : report.result.confidence === 'medium' ? 'moyenne' : 'faible'}.`);

	addHeading('Installation déclarée');
	for (const label of report.toolLabels) addBullet(label);
	addBullet(`Organisation : ${report.configuration.mode === 'simultaneous' ? 'outils simultanés' : 'outils successifs'} - profil ${usageLabel(report.configuration.usageProfile).toLowerCase()} - session ${report.configuration.sessionMinutes} min.`);
	addBullet(`Flexible : ${report.configuration.hoseLengthMeters ?? 'non renseigné'} m - diamètre intérieur ${report.configuration.hoseInnerDiameterMm ?? 'non renseigné'} mm - distance totale ${report.configuration.networkDistanceMeters ?? 'non renseignée'} m.`);
	addBullet(`Raccords : ${fittingLabel(report.configuration.fittingStandard)} - ${report.configuration.fittingCount ?? 'nombre non renseigné'}.`);
	addBullet(`Traitement d'air : ${filtrationLabel(report.configuration.filtration)}.`);

	addHeading('Marges');
	addBullet(`Marge indicative demandée : ${Math.round(report.configuration.safetyMargin * 100)} %.`);
	addBullet(report.nominalMarginPercent === undefined ? 'Marge disponible sur le besoin publié : non calculable faute de FAD à la pression requise.' : `Marge disponible du compresseur sur le besoin publié : ${formatNumber(report.nominalMarginPercent)} %.`);
	addBullet(report.compatAirMarginCovered === undefined ? 'Couverture de la marge CompatAir : indéterminable.' : `Couverture de la marge CompatAir : ${report.compatAirMarginCovered ? 'oui' : 'non'}.`);

	addHeading('Points de vigilance');
	for (const warning of report.warnings) addBullet(warning);

	addHeading('Évolutions possibles');
	for (const upgrade of report.possibleUpgrades) addBullet(upgrade);

	addHeading('Données manquantes');
	if (report.missingData.length) for (const missing of report.missingData) addBullet(missing);
	else addParagraph('Aucune donnée manquante identifiée dans le périmètre actuel du Passeport. Cela ne vaut pas certification de complétude.', { size: 9 });

	ensure(150);
	addHeading('Sources');
	for (const source of report.sources) {
		ensure(62);
		addParagraph(`${source.productLabel} - ${source.label} - consultée le ${source.retrievedAt} - confiance ${source.confidence}.`, { size: 8.5, bold: true, spacing: 1 });
		addParagraph(source.url, { size: 7.5, color: '0.10 0.44 0.31', spacing: 5 });
	}

	addHeading('URL versionnée');
	addParagraph(passportUrl, { size: 6.5, color: '0.33 0.40 0.35', spacing: 8 });
	addParagraph('Ce document est produit localement dans le navigateur. Le rapport original, sa configuration et ses codes de contrôle restent après le caractère # de l’URL et ne sont pas envoyés au serveur. Le Passeport ne remplace ni une mesure en charge, ni la notice constructeur, ni une vérification réglementaire.', { size: 8.5, color: '0.33 0.40 0.35' });

	for (const [index, commands] of pages.entries()) {
		commands.push(`0.82 0.86 0.83 RG 52 42 491 0.5 re S`);
		commands.push(`BT /F1 7.5 Tf 0.40 0.46 0.42 rg 1 0 0 1 52 28 Tm (${pdfLiteral(`CompatAir - ${report.passportId.slice(0, 16)} - généré le ${report.generatedAt.slice(0, 10)}`)}) Tj ET`);
		commands.push(`BT /F1 7.5 Tf 0.40 0.46 0.42 rg 1 0 0 1 510 28 Tm (${index + 1}/${pages.length}) Tj ET`);
	}

	const objects: string[] = ['', '<< /Type /Catalog /Pages 2 0 R >>', '', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>', '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'];
	const pageReferences: string[] = [];
	for (const commands of pages) {
		const pageObject = objects.length;
		const contentObject = pageObject + 1;
		pageReferences.push(`${pageObject} 0 R`);
		objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`);
		const stream = commands.join('\n');
		objects.push(`<< /Length ${bytes(stream).length} >>\nstream\n${stream}\nendstream`);
	}
	objects[2] = `<< /Type /Pages /Kids [${pageReferences.join(' ')}] /Count ${pages.length} >>`;
	const infoObject = objects.length;
	objects.push(`<< /Title (${pdfLiteral('Passeport CompatAir')}) /Subject (${pdfLiteral(report.passportId)}) /Author (${pdfLiteral('CompatAir')}) /Creator (${pdfLiteral(`CompatAir Passeport ${report.schemaVersion}`)}) >>`);

	const parts: Uint8Array[] = [bytes('%PDF-1.4\n%âãÏÓ\n')];
	const offsets = [0];
	let length = parts[0].length;
	for (let index = 1; index < objects.length; index += 1) {
		offsets[index] = length;
		const objectBytes = bytes(`${index} 0 obj\n${objects[index]}\nendobj\n`);
		parts.push(objectBytes);
		length += objectBytes.length;
	}
	const xrefOffset = length;
	const xref = [`xref`, `0 ${objects.length}`, '0000000000 65535 f '];
	for (let index = 1; index < objects.length; index += 1) xref.push(`${String(offsets[index]).padStart(10, '0')} 00000 n `);
	xref.push(`trailer\n<< /Size ${objects.length} /Root 1 0 R /Info ${infoObject} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`);
	parts.push(bytes(xref.join('\n')));
	return joinBytes(parts);
}
