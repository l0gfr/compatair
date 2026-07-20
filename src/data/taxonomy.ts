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
export const toolUsageTaxonomy: ReadonlyArray<{
	id: string;
	label: string;
	categoryIds: readonly ToolCategoryId[];
}> = [
	{ id: 'serrage', label: 'Serrer et desserrer', categoryIds: ['cle-a-chocs', 'cle-a-cliquet'] },
	{ id: 'vissage', label: 'Visser et assembler', categoryIds: ['visseuse'] },
	{ id: 'percage', label: 'Percer', categoryIds: ['perceuse'] },
	{ id: 'soufflage', label: 'Souffler et nettoyer', categoryIds: ['soufflette'] },
	{ id: 'gonflage', label: 'Gonfler et contrôler la pression', categoryIds: ['gonflage'] },
	{ id: 'fixation', label: 'Clouer et agrafer', categoryIds: ['agrafeuse-cloueuse'] },
	{ id: 'meulage', label: 'Meuler et limer', categoryIds: ['meuleuse', 'lime-bande'] },
	{ id: 'finition', label: 'Poncer et polir', categoryIds: ['ponceuse-bande', 'ponceuse-orbitale', 'polisseuse'] },
	{ id: 'burinage', label: 'Buriner et dérouiller', categoryIds: ['burineur', 'derouilleur-a-aiguilles'] },
	{ id: 'decoupe', label: 'Découper les matériaux', categoryIds: ['cisaille', 'grignoteuse', 'scie', 'tronconneuse'] },
	{ id: 'peinture', label: 'Appliquer une peinture', categoryIds: ['pistolet-peinture-hvlp', 'pistolet-peinture-lvlp'] },
	{ id: 'sablage', label: 'Décaper par projection', categoryIds: ['sableuse'] },
	{ id: 'cartouche', label: 'Extruder mastics et colles', categoryIds: ['pistolet-cartouche'] },
	{ id: 'rivetage', label: 'Riveter et sertir', categoryIds: ['riveteuse'] },
] as const;
