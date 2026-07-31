export const toolTaxonomy = [
	{ id: 'cle-a-chocs', label: 'Clé à chocs', aliases: ['Clé à choc pneumatique'] },
	{ id: 'cle-a-cliquet', label: 'Clé à cliquet pneumatique', aliases: [] },
	{ id: 'visseuse', label: 'Visseuse pneumatique', aliases: [] },
	{ id: 'perceuse', label: 'Perceuse pneumatique', aliases: [] },
	{ id: 'soufflette', label: 'Soufflette', aliases: [] },
	{ id: 'gonflage', label: 'Gonflage', aliases: ['Pistolet de gonflage'] },
	{ id: 'agrafeuse-cloueuse', label: 'Agrafeuse et cloueuse', aliases: ['Cloueur pneumatique'] },
	{ id: 'meuleuse', label: 'Meuleuse', aliases: ["Meuleuse d'angle", 'Meuleuse d’angle', 'Meuleuse droite', 'Meuleuse droite coudée', 'Meuleuse pneumatique'] },
	{ id: 'lime-bande', label: 'Lime à bande pneumatique', aliases: [] },
	{ id: 'ponceuse-orbitale', label: 'Ponceuse orbitale', aliases: ['Ponceuse pneumatique'] },
	{ id: 'ponceuse-bande', label: 'Ponceuse à bande', aliases: [] },
	{ id: 'polisseuse', label: 'Polisseuse', aliases: [] },
	{ id: 'burineur', label: 'Burineur', aliases: ['Marteau burineur', 'Marteau burineur pneumatique'] },
	{ id: 'cisaille', label: 'Cisaille pneumatique', aliases: [] },
	{ id: 'grignoteuse', label: 'Grignoteuse pneumatique', aliases: [] },
	{ id: 'derouilleur-a-aiguilles', label: 'Dérouilleur à aiguilles', aliases: [] },
	{ id: 'pistolet-peinture-lvlp', label: 'Pistolet à peinture LVLP', aliases: [] },
	{ id: 'pistolet-peinture-hvlp', label: 'Pistolet à peinture HVLP', aliases: [] },
	{ id: 'pistolet-cartouche', label: 'Pistolet à cartouche', aliases: [] },
	{ id: 'sableuse', label: 'Sableuse', aliases: ['Pistolet de sablage'] },
	{ id: 'riveteuse', label: 'Riveteuse', aliases: [] },
	{ id: 'scie', label: 'Scie pneumatique', aliases: ['Scie sabre'] },
	{ id: 'tronconneuse', label: 'Tronçonneuse pneumatique', aliases: ['Outil de découpe pneumatique'] },
] as const;

export type ToolCategoryId = (typeof toolTaxonomy)[number]['id'];

const toolTaxonomyById = new Map(toolTaxonomy.map((category) => [category.id, category]));

/**
 * Retourne l’intitulé public unique d’un usage. Les fiches historiques peuvent
 * conserver un ancien libellé dans leur fichier source, mais toutes les surfaces
 * publiques et les exports du catalogue passent par cette taxonomie canonique.
 */
export function toolCategoryLabel(categoryId: ToolCategoryId) {
	const category = toolTaxonomyById.get(categoryId);
	if (!category) throw new Error(`Catégorie d’outil inconnue : ${categoryId}`);
	return category.label;
}

/**
 * Regroupement par geste métier, distinct de la technologie précise. Par exemple,
 * HVLP et LVLP restent deux familles techniques mais répondent au même usage de
 * mise en peinture. Ce niveau est celui affiché dans « Usages suivis ».
 */
export const toolUsageTaxonomy = [
	{
		id: 'serrage',
		label: 'Serrer et desserrer',
		seoTitle: 'Outils pneumatiques de serrage',
		description: 'Clés à chocs et clés à cliquet regroupées par besoin en air, pression publiée et qualité documentaire.',
		categoryIds: ['cle-a-chocs', 'cle-a-cliquet'],
	},
	{
		id: 'vissage',
		label: 'Visser et assembler',
		seoTitle: 'Visseuses pneumatiques',
		description: 'Visseuses documentées avec leur consommation publiée et les limites nécessaires au dimensionnement.',
		categoryIds: ['visseuse'],
	},
	{
		id: 'percage',
		label: 'Percer',
		seoTitle: 'Perceuses pneumatiques',
		description: 'Perceuses pneumatiques classées par référence, débit demandé, pression de travail et niveau de preuve.',
		categoryIds: ['perceuse'],
	},
	{
		id: 'soufflage',
		label: 'Souffler et nettoyer',
		seoTitle: 'Soufflettes pneumatiques',
		description: 'Soufflettes et besoins de nettoyage à l’air comprimé, sans convertir une donnée absente en estimation.',
		categoryIds: ['soufflette'],
	},
	{
		id: 'gonflage',
		label: 'Gonfler et contrôler la pression',
		seoTitle: 'Outils pneumatiques de gonflage',
		description: 'Pistolets de gonflage et manomètres documentés pour relier pression, débit et usage réel.',
		categoryIds: ['gonflage'],
	},
	{
		id: 'fixation',
		label: 'Clouer et agrafer',
		seoTitle: 'Cloueurs et agrafeuses pneumatiques',
		description: 'Cloueurs et agrafeuses dont la consommation par minute ou par action reste explicitement distinguée.',
		categoryIds: ['agrafeuse-cloueuse'],
	},
	{
		id: 'meulage',
		label: 'Meuler et limer',
		seoTitle: 'Meuleuses et limes pneumatiques',
		description: 'Meuleuses et limes à bande regroupées pour comparer leurs besoins publiés sans effacer leur famille technique.',
		categoryIds: ['meuleuse', 'lime-bande'],
	},
	{
		id: 'finition',
		label: 'Poncer et polir',
		seoTitle: 'Ponceuses et polisseuses pneumatiques',
		description: 'Ponceuses orbitales, à bande et polisseuses reliées à leurs caractéristiques et sources fabricant.',
		categoryIds: ['ponceuse-bande', 'ponceuse-orbitale', 'polisseuse'],
	},
	{
		id: 'burinage',
		label: 'Buriner et dérouiller',
		seoTitle: 'Burineurs et dérouilleurs pneumatiques',
		description: 'Marteaux-burineurs et dérouilleurs à aiguilles classés par besoin en air et pression de travail.',
		categoryIds: ['burineur', 'derouilleur-a-aiguilles'],
	},
	{
		id: 'decoupe',
		label: 'Découper les matériaux',
		seoTitle: 'Outils pneumatiques de découpe',
		description: 'Cisailles, grignoteuses, scies et tronçonneuses regroupées sans fusionner leurs caractéristiques propres.',
		categoryIds: ['cisaille', 'grignoteuse', 'scie', 'tronconneuse'],
	},
	{
		id: 'peinture',
		label: 'Appliquer une peinture',
		seoTitle: 'Pistolets à peinture pneumatiques',
		description: 'Pistolets HVLP et LVLP distingués par technologie, consommation publiée et exigences de qualité d’air.',
		categoryIds: ['pistolet-peinture-hvlp', 'pistolet-peinture-lvlp'],
	},
	{
		id: 'sablage',
		label: 'Décaper par projection',
		seoTitle: 'Pistolets de sablage pneumatiques',
		description: 'Outils de sablage regroupés par référence et besoin en air, avec les données manquantes laissées visibles.',
		categoryIds: ['sableuse'],
	},
	{
		id: 'cartouche',
		label: 'Extruder mastics et colles',
		seoTitle: 'Pistolets pneumatiques à cartouche',
		description: 'Pistolets à cartouche documentés pour comparer consommation, pression et rythme d’utilisation.',
		categoryIds: ['pistolet-cartouche'],
	},
	{
		id: 'rivetage',
		label: 'Riveter et sertir',
		seoTitle: 'Riveteuses pneumatiques',
		description: 'Riveteuses regroupées par besoin en air, pression publiée, référence fabricant et qualité de source.',
		categoryIds: ['riveteuse'],
	},
] as const satisfies ReadonlyArray<{
	id: string;
	label: string;
	seoTitle: string;
	description: string;
	categoryIds: readonly ToolCategoryId[];
}>;

export type ToolUsage = (typeof toolUsageTaxonomy)[number];
export type ToolUsageId = ToolUsage['id'];

export function toolUsageForCategory(categoryId: ToolCategoryId) {
	const usage = toolUsageTaxonomy.find((item) => item.categoryIds.some((candidate) => candidate === categoryId));
	if (!usage) throw new Error(`Usage d’outil inconnu pour la catégorie : ${categoryId}`);
	return usage;
}

export function toolUsagePath(categoryId: ToolCategoryId) {
	return `/outils-pneumatiques/usages/${toolUsageForCategory(categoryId).id}/` as const;
}
