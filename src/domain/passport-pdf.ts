import { passportVerdictLabel, type PassportReport } from './passport';
import { commissioningVerdictLabel, type CommissioningAssessment } from './commissioning';

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

function installationStatusLabel(item: PassportReport['installationPlan']['items'][number]) {
	if (item.status === 'source-confirmed') return 'CONFIRME PAR UNE SOURCE';
	if (item.status === 'undocumented') return 'NON DOCUMENTE';
	return item.completed ? 'MESURE RENSEIGNEE' : 'A MESURER SUR SITE';
}

export function createPassportPdf(report: PassportReport, passportUrl: string, options: { commissioningAssessment?: CommissioningAssessment } = {}) {
	const commissioningAssessment = options.commissioningAssessment;
	const documentLabel = commissioningAssessment ? 'RECU DE RECETTE TERRAIN' : 'PASSEPORT COMPATAIR';
	const pages: string[][] = [];
	let page: string[];
	let y: number;
	const addPage = () => {
		page = [
			'0.063 0.157 0.118 rg 0 794 595 48 re f',
			'0.827 0.922 0.337 rg 52 811 18 3 re f',
			`BT /F2 15 Tf 1 1 1 rg 1 0 0 1 80 808 Tm (${pdfLiteral('CompatAir')}) Tj ET`,
			`BT /F1 8 Tf 0.78 0.84 0.80 rg 1 0 0 1 432 808 Tm (${pdfLiteral(commissioningAssessment ? `Recette ${commissioningAssessment.version}` : `Passeport ${report.schemaVersion}`)}) Tj ET`,
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
	addTextLine(documentLabel, 9, true, '0.10 0.44 0.31', MARGIN, 26);
	addParagraph(report.compressorLabel, { size: 25, bold: true, color: '0.063 0.157 0.118', spacing: 9 });
	addParagraph(commissioningAssessment ? commissioningVerdictLabel(commissioningAssessment.verdict) : passportVerdictLabel(report.result), { size: 14, bold: true, color: report.result.verdict === 'incompatible' ? '0.64 0.18 0.16' : '0.10 0.44 0.31', spacing: 6 });
	addParagraph(`Identifiant ${report.passportId} - moteur ${report.calculationVersion} - catalogue vérifié le ${report.catalogVerifiedAt}.`, { size: 8.5, color: '0.33 0.40 0.35', spacing: 12 });

	if (commissioningAssessment) {
		addHeading('Réponse de recette');
		addParagraph(commissioningAssessment.primaryFinding, { size: 10, bold: true, color: '0.063 0.157 0.118', spacing: 8 });
		addParagraph(`Relevé déclaré le ${report.configuration.commissioning?.observedOn ?? report.generatedAt.slice(0, 10)} - ${commissioningAssessment.counts.completed}/${commissioningAssessment.counts.total} contrôles renseignés.`, { size: 8.5, color: '0.33 0.40 0.35', spacing: 8 });
		addBullet(`Pression demandée au poste : ${commissioningAssessment.comparison.requiredToolPressureBar === undefined ? 'non renseignée' : `${formatNumber(commissioningAssessment.comparison.requiredToolPressureBar, 2)} bar`}.`);
		addBullet(`Pression mesurée au poste : ${commissioningAssessment.comparison.toolPressureBar === undefined ? 'non renseignée' : `${formatNumber(commissioningAssessment.comparison.toolPressureBar, 2)} bar`} - chute observée ${commissioningAssessment.comparison.pressureDropBar === undefined ? 'non renseignée' : `${formatNumber(commissioningAssessment.comparison.pressureDropBar, 2)} bar`}.`);
		addBullet(`Fuite intégrée au besoin : ${commissioningAssessment.comparison.measuredLeakLpm === undefined ? 'non mesurée' : `${formatNumber(commissioningAssessment.comparison.measuredLeakLpm)} L/min`}.`);
		for (const check of commissioningAssessment.checks) addBullet(`${check.completed ? 'RENSEIGNE' : 'A COMPLETER'} - ${check.label}. ${check.value}`);
		if (report.configuration.commissioning?.note) addParagraph(`Contexte déclaré : ${report.configuration.commissioning.note}`, { size: 8.5, color: '0.33 0.40 0.35', spacing: 8 });
	}

	addHeading("Plan d'installation et de mise en service");
	addParagraph(`Principale réserve : ${report.installationPlan.primaryReserve}`, { size: 10, bold: true, color: '0.063 0.157 0.118', spacing: 8 });
	addParagraph(`${report.installationPlan.counts.sourceConfirmed} contrôles confirmés par une source - ${report.installationPlan.counts.siteCompleted}/${report.installationPlan.counts.siteMeasurements} mesures terrain renseignées - ${report.installationPlan.counts.undocumented} points non documentés.`, { size: 8.5, color: '0.33 0.40 0.35', spacing: 8 });
	for (const [phase, phaseLabel] of [['before-purchase', 'AVANT ACHAT'], ['before-commissioning', 'AVANT PREMIERE UTILISATION']] as const) {
		addParagraph(phaseLabel, { size: 9, bold: true, color: '0.10 0.44 0.31', spacing: 4 });
		for (const item of report.installationPlan.items.filter((entry) => entry.phase === phase)) {
			addBullet(`${installationStatusLabel(item)} - ${item.title}. ${item.summary} Action : ${item.action}`);
		}
	}

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
	addBullet(`Mesures en charge : chute de pression ${report.configuration.measuredPressureDropBar ?? 'non renseignée'} bar - fuite ${report.configuration.measuredLeakLpm ?? 'non renseignée'} L/min - pression disponible ${report.configuration.supplyPressureBar ?? 'non renseignée'} bar.`);
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
	addParagraph(`Ce document est produit localement dans le navigateur. Le rapport, sa configuration et ses codes de contrôle restent après le caractère # de l’URL et ne sont pas envoyés au serveur. ${commissioningAssessment ? 'Le reçu constate les valeurs saisies et le résultat du moteur ; il ne constitue ni une réception réglementaire, ni une certification, ni une autorisation d’usage.' : 'Le Passeport ne remplace ni une mesure en charge, ni la notice constructeur, ni une vérification réglementaire.'}`, { size: 8.5, color: '0.33 0.40 0.35' });

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
	objects.push(`<< /Title (${pdfLiteral(commissioningAssessment ? 'Reçu de recette terrain CompatAir' : 'Passeport CompatAir')}) /Subject (${pdfLiteral(report.passportId)}) /Author (${pdfLiteral('CompatAir')}) /Creator (${pdfLiteral(`CompatAir Passeport ${report.schemaVersion}`)}) >>`);

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
