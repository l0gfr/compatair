export type PcpReference = {
	slug: string;
	brand: string;
	model: string;
	kind: 'airgun' | 'hand-pump' | 'compressor';
	summary: string;
	facts: Array<{ label: string; value: string; sourceId: string }>;
	unavailable: string[];
	sources: Array<{ id: string; label: string; url: string; checkedAt: string }>;
};

export const pcpKindLabels = {
	airgun: 'Arme à air précomprimé',
	'hand-pump': 'Pompe manuelle PCP',
	compressor: 'Compresseur dédié PCP',
} as const;

// Documentary records only. These references are deliberately outside the
// workshop catalog and its compatibility calculations. Keep published units.
export const pcpReferences: PcpReference[] = [
	{
		slug: 'air-arms-s510-core', brand: 'Air Arms', model: 'S510 Core', kind: 'airgun',
		summary: 'Une carabine PCP dont la page constructeur décrit le réservoir et la filtration intégrée.',
		facts: [
			{ label: 'Pression de remplissage annoncée', value: 'Jusqu’à 250 bar', sourceId: 'manufacturer' },
			{ label: 'Filtre intégré annoncé', value: '20 microns', sourceId: 'manufacturer' },
			{ label: 'Masse annoncée', value: '2,9 kg', sourceId: 'manufacturer' },
		],
		unavailable: ['Volume du réservoir', 'Définition complète de l’interface de remplissage'],
		sources: [{ id: 'manufacturer', label: 'Air Arms, S510 Core', url: 'https://resources.air-arms.co.uk/s510core', checkedAt: '2026-11-11' }],
	},
	{
		slug: 'umarex-notos-22', brand: 'Umarex', model: 'Notos .22 Carbine', kind: 'airgun',
		summary: 'La fiche américaine de la Notos .22 Carbine identifie la référence, le volume du réservoir et sa pression maximale publiée.',
		facts: [
			{ label: 'Référence fabricant sur le marché américain', value: '2254847', sourceId: 'manufacturer' },
			{ label: 'Volume du réservoir publié', value: '66 cc', sourceId: 'manufacturer' },
			{ label: 'Pression de remplissage maximale publiée', value: '3 625 psi', sourceId: 'manufacturer' },
		],
		unavailable: ['Définition complète de l’interface de remplissage', 'Correspondance avec une variante destinée au marché français'],
		sources: [{ id: 'manufacturer', label: 'Umarex USA, Notos .22 Carbine, référence 2254847', url: 'https://www.umarexusa.com/2254847', checkedAt: '2026-11-11' }],
	},
	{
		slug: 'weihrauch-hw110-t', brand: 'Weihrauch', model: 'HW 110 T', kind: 'airgun',
		summary: 'La version T est documentée par Weihrauch avec un réservoir intégré et un manomètre.',
		facts: [
			{ label: 'Pression indiquée sur la page fabricant', value: '200 bar', sourceId: 'manufacturer' },
			{ label: 'Indication de pression', value: 'Manomètre intégré', sourceId: 'manufacturer' },
			{ label: 'Interface nommée par le fabricant', value: 'Quick-Fill', sourceId: 'manufacturer' },
		],
		unavailable: ['Volume du réservoir', 'Filetage et cotes de l’interface Quick-Fill'],
		sources: [{ id: 'manufacturer', label: 'Weihrauch, HW 110 T et HW 110 TK', url: 'https://www.weihrauch-sport.de/luftgewehre/pressluft/hw-110-t', checkedAt: '2026-11-11' }],
	},
	{
		slug: 'hill-mk5-pro', brand: 'Hill', model: 'MK5 Pro', kind: 'hand-pump',
		summary: 'Une pompe manuelle dont la fiche actuelle distingue la référence Pro et l’option de traitement de l’humidité.',
		facts: [
			{ label: 'Référence fabricant', value: '5128-005', sourceId: 'manufacturer' },
			{ label: 'Pression maximale annoncée', value: '310 bar', sourceId: 'manufacturer' },
			{ label: 'Raccord du flexible publié', value: '1/8″ BSP', sourceId: 'manufacturer' },
			{ label: 'Traitement de l’humidité', value: 'Dry-Pac proposé en option', sourceId: 'manufacturer' },
		],
		unavailable: ['Compatibilité du raccord avec une arme précise', 'Qualité d’air mesurée en sortie dans une installation réelle'],
		sources: [{ id: 'manufacturer', label: 'Hill, MK5 Pro, référence 5128-005', url: 'https://www.airriflepump.com/product/hill-mk5-pump/', checkedAt: '2026-11-11' }],
	},
	{
		slug: 'hill-evo-310-eu', brand: 'Hill', model: 'Evo-310 EU', kind: 'compressor',
		summary: 'La variante européenne du compresseur Hill Evo-310 est identifiée séparément des versions électriques destinées à d’autres marchés.',
		facts: [
			{ label: 'Référence de la variante européenne', value: '3000-003', sourceId: 'manufacturer' },
			{ label: 'Alimentation publiée pour cette variante', value: '220–230 V, adaptateur de prise européenne à deux broches', sourceId: 'manufacturer' },
			{ label: 'Pression maximale annoncée', value: '310 bar', sourceId: 'manufacturer' },
			{ label: 'Traitement de l’humidité', value: 'Dry-Pac Pro proposé en option', sourceId: 'manufacturer' },
		],
		unavailable: ['Débit FAD documenté à chaque pression', 'Validation d’un ensemble précis comprenant flexible, raccord et réservoir'],
		sources: [{ id: 'manufacturer', label: 'Hill, Evo-310 et variantes électriques', url: 'https://www.airriflepump.com/product/ec-3000-evo-the-hill-electric-air-pcp-airgun-airsoft-hpa-compressor/', checkedAt: '2026-11-11' }],
	},
];

export const pcpGuides = [
	{ slug: 'pcp-air-precomprime-comprendre', title: 'Comprendre les armes à air précomprimé', description: 'Le réservoir PCP, la haute pression et les différences avec l’outillage pneumatique.' },
	{ slug: 'pcp-lire-documentation-remplissage', title: 'Lire la documentation de remplissage PCP', description: 'Identifier une variante, retrouver sa notice et repérer les informations manquantes.' },
];
