import { compressors, tools } from './catalog';
import { evaluateCompatibility } from '../domain/compatibility';

// Liste éditoriale explicite : aucun produit cartésien de marques ou de modèles.
export const decisionComparisons = [
	{
		slug: 'einhell-vs-metabo',
		title: 'Einhell vs Metabo : comparer quatre compresseurs de 50 L',
		description: 'Quatre compresseurs Einhell et Metabo de 50 L face à une clé à chocs et au sablage : débit restitué, pression, limites et sources.',
		question: 'Einhell ou Metabo : lequel convient à votre outil ?',
		answer: 'La marque et les 50 litres ne suffisent pas à départager ces modèles. La comparaison porte sur deux références de chaque marque, avec le même besoin d’air pour chaque outil. Elle ne permet pas de désigner une marque gagnante dans son ensemble.',
		distinction: 'Le Basic 250-50 W fournit un point de débit à 6,4 bar : il peut servir de borne conservatrice à 6,3 bar, mais ne permet pas de conclure à 7 bar. Les courbes Einhell couvrent 7 bar ; le point du Mega à 8 bar sert de borne conservatrice en dessous de cette pression.',
		compressorIds: ['einhell-tc-ac-240-50-10-of', 'einhell-tc-ac-420-50-10-v', 'metabo-basic-250-50-w', 'metabo-mega-400-50-w'],
		toolIds: ['einhell-tc-pw-340', 'metabo-ssp-1000'],
		guidePath: '/guides/debit-restitue-fad-vs-debit-aspire/',
	},
	{
		slug: 'compresseur-50-litres-cle-a-chocs',
		title: 'Compresseur 50 L pour clé à chocs : lequel suffit ?',
		description: 'Une cuve de 50 L suffit-elle pour une clé à chocs ? Quatre modèles confrontés aux besoins des Einhell TC-PW 340 et Metabo DSSW 500.',
		question: 'Un compresseur de 50 L suffit-il pour une clé à chocs ?',
		answer: 'Le volume de cuve indique une réserve, pas un débit de production. La notice de la TC-PW 340 recommande au moins 50 litres ; cette condition ne remplace pas les 142 L/min à 6,3 bar demandés par la clé. La DSSW 500 a un autre besoin : les deux outils ne sont pas interchangeables dans le calcul.',
		distinction: 'Le verdict ci-dessous compare le débit publié au besoin nominal et signale séparément si la réserve recommandée de 25 % est couverte, sans durée de desserrage inventée. Une utilisation par impulsions peut être étudiée dans le calculateur avec votre cadence ; elle ne transforme pas un déficit de débit en compatibilité permanente.',
		compressorIds: ['einhell-tc-ac-240-50-10-of', 'metabo-basic-250-50-w', 'einhell-tc-ac-420-50-10-v', 'metabo-mega-400-50-w'],
		toolIds: ['einhell-tc-pw-340', 'metabo-dssw-500'],
		guidePath: '/guides/cle-a-chocs-manque-couple-diagnostic/',
	},
	{
		slug: 'meilleur-compresseur-sablage',
		title: 'Compresseur pour sablage : choisir selon le débit réel',
		description: 'SSP 1000 ou HAZET 9045P-1 : comparer les besoins de sablage aux débits documentés. Pas de palmarès, des seuils et des limites vérifiables.',
		question: 'Quel compresseur choisir pour votre pistolet de sablage ?',
		answer: 'Le bon dimensionnement dépend du pistolet, du média et de la pression. Le SSP 1000 et le pistolet à soude HAZET 9045P-1 illustrent deux besoins distincts. Ce comparatif vérifie quatre modèles de 50 litres ; les sélections par outil donnent accès aux autres compresseurs du catalogue.',
		distinction: 'Une compatibilité avec le pistolet à soude ne vaut pas compatibilité avec le SSP 1000 ni avec une cabine ou une buse industrielle. Une grande cuve ne compense pas durablement le manque de débit. Le traitement d’air et les consignes du fabricant restent à contrôler.',
		compressorIds: ['einhell-tc-ac-240-50-10-of', 'einhell-tc-ac-420-50-10-v', 'metabo-basic-250-50-w', 'metabo-mega-400-50-w'],
		toolIds: ['metabo-ssp-1000', 'hazet-9045p-1'],
		guidePath: '/guides/compresseur-pour-sablage-pneumatique/',
	},
];

export type DecisionComparison = typeof decisionComparisons[number];

export function resolveDecisionComparison(page: DecisionComparison) {
	const selectedCompressors = page.compressorIds.map((id) => {
		const product = compressors.find((item) => item.id === id);
		if (!product || !product.fadCurve.length || !product.fieldSources.fadCurve?.length) throw new Error(`Comparatif sans FAD sourcé : ${page.slug}/${id}`);
		return product;
	});
	const selectedTools = page.toolIds.map((id) => {
		const tool = tools.find((item) => item.id === id);
		if (!tool || tool.demandModel !== 'fixed-flow' || !tool.fieldSources.airflowLpm?.length || !tool.fieldSources.workingPressureBar?.length) throw new Error(`Comparatif sans besoin sourcé : ${page.slug}/${id}`);
		return tool;
	});
	if (new Set(page.compressorIds).size < 2 || new Set(page.compressorIds).size !== page.compressorIds.length || new Set(page.toolIds).size !== page.toolIds.length || selectedCompressors.length > 4 || selectedTools.length > 2) throw new Error(`Périmètre de comparaison invalide : ${page.slug}`);
	for (const product of [...selectedCompressors, ...selectedTools]) {
		for (const ids of Object.values(product.fieldSources)) {
			if (ids.some((id) => !product.evidence.some((evidence) => evidence.id === id))) throw new Error(`Source absente : ${product.id}`);
		}
	}
	const rows = selectedCompressors.map((compressor) => ({ compressor, matches: selectedTools.map((tool) => ({ tool, result: evaluateCompatibility(compressor, tool) })) }));
	const signatures = rows.map(({ matches }) => JSON.stringify(matches.map(({ result }) => [result.verdict, result.availableFadLpm, result.availableFadBasis])));
	if (new Set(signatures).size < 2) throw new Error(`Comparatif sans différence technique : ${page.slug}`);
	return { rows, selectedTools };
}

export function comparisonsForProduct(id: string) {
	return decisionComparisons.filter((page) => page.compressorIds.includes(id) || page.toolIds.includes(id));
}
