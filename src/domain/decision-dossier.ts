import type { Compressor, ToolProfile } from './catalog';
import { compatibilityFadLabel, type CompatibilityResult } from './compatibility';

type Product = Compressor | ToolProfile;

export function decisionSources(product: Product, fields: string[]) {
	const ids = new Set(fields.flatMap((field) => {
		const sources = product.fieldSources[field];
		if (!sources?.length) throw new Error(`Page décisionnelle sans preuve : ${product.id}.${field}`);
		return sources;
	}));
	for (const id of ids) {
		if (!product.evidence.some((source) => source.id === id)) throw new Error(`Preuve absente : ${product.id}/${id}`);
	}
	return product.evidence.filter((source) => ids.has(source.id));
}

export function assertDecisionPageValue(product: Product) {
	if (!product.editorial.overview.trim() || product.editorial.verifiedFacts.length < 2 || !product.editorial.limitations.length) throw new Error(`Dossier éditorial insuffisant : ${product.id}`);
	return decisionSources(product, 'fadCurve' in product
		? ['fadCurve', 'maxPressureBar']
		: ['workingPressureBar', ...(product.demandModel === 'fixed-flow' ? ['airflowLpm'] : [])]);
}

const number = (value: number) => value.toLocaleString('fr-FR', { maximumFractionDigits: 1 });

export function explainCompatibility(compressor: Compressor, tool: ToolProfile, result: CompatibilityResult) {
	if (tool.demandModel !== 'fixed-flow') return result.warnings.join(' ');
	const available = compatibilityFadLabel(result, tool.workingPressureBar.typical);
	if (result.verdict === 'insufficient_data') return `${available}. Aucun verdict favorable ne peut être déduit du débit aspiré ou des ${compressor.tankLiters} litres de cuve.`;
	if (result.limitingFactor === 'pressure') return `La pression maximale de ${number(compressor.maxPressureBar)} bar est inférieure aux ${number(tool.workingPressureBar.typical)} bar demandés par cet outil.`;
	const need = `L’outil demande ${number(tool.airflowLpm.typical)} L/min à ${number(tool.workingPressureBar.typical)} bar.`;
	const cycle = compressor.dutyCycle !== undefined ? ` Le cycle de service publié de ${number(compressor.dutyCycle * 100)} % limite aussi la capacité moyenne.` : ' Le cycle de service du compresseur n’est pas documenté : le résultat de débit ne garantit pas son fonctionnement permanent.';
	if (result.verdict === 'incompatible') return `${available}. ${need}${cycle} La cuve ne supprime pas ce déficit en usage soutenu.`;
	const reserve = result.availableFadLpm !== undefined && result.requiredFadLpm !== undefined && result.availableFadLpm >= result.requiredFadLpm
		? `Le repère de ${number(result.requiredFadLpm!)} L/min avec 25 % de réserve est couvert.`
		: `Le débit nominal est couvert, mais pas le repère de ${number(result.requiredFadLpm ?? tool.airflowLpm.typical * 1.25)} L/min avec 25 % de réserve.`;
	return `${available}. ${need} ${reserve}${cycle}`;
}

export function compressorFlowAnswer(compressor: Compressor) {
	const points = [...compressor.fadCurve].sort((a, b) => a.pressureBar - b.pressureBar);
	if (!points.length) return 'Le débit restitué à une pression de travail n’est pas documenté. Une pression maximale ou un débit aspiré ne permet pas de déduire les outils alimentables.';
	const last = points.at(-1)!;
	return `${points.length} point${points.length > 1 ? 's' : ''} de débit restitué documenté${points.length > 1 ? 's' : ''}, jusqu’à ${number(last.pressureBar)} bar : ${number(last.litersPerMinute)} L/min à cette pression.${compressor.intakeFlowLpm ? ` Les ${number(compressor.intakeFlowLpm)} L/min aspirés décrivent une autre grandeur.` : ''} Au-delà de ${number(last.pressureBar)} bar, le catalogue ne permet aucune extrapolation.`;
}
