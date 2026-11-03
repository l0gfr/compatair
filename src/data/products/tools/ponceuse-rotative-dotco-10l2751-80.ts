import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-dotco-10l2751-80",
	"slug": "ponceuse-rotative-dotco-10l2751-80",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Dotco 10L2751-80",
	"brand": "Dotco",
	"model": "10L2751-80",
	"mpn": "10L2751-80",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-dotco-10l2751-80.webp",
		"alt": "Repères techniques : Dotco 10L2751-80",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-10l2751-80",
		"label": "Référence 10L2751-80",
		"distinguishingAttributes": {
			"reference": "10L2751-80",
			"Vitesse à vide": "9,000 tr/min",
			"Masse publiée": "1.41 kg",
			"Dimension publiée": "216 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 10L2751-80. La 10L2751-80 est le modèle aluminium à disque 127 mm, filetage 5/8-11 et 9 000 tr/min. La 12L2751-80 est en composite, longueur 249 mm et masse 1,54 kg contre 216 mm et 1,41 kg. Le matériau de corps change avec l’encombrement, sans fournir de donnée de consommation ; le calcul reste indéterminé.",
		"verifiedFacts": [
			"Disque de ponçage/polissage : 5 pouces (127 mm).",
			"Filetage extérieur : 5/8-11.",
			"Vitesse à vide : 9 000 tr/min.",
			"Corps : Aluminium.",
			"Longueur : 216 mm.",
			"Masse : 1,41 kg."
		],
		"limitations": [
			"Aucune consommation qualifiée n’est publiée dans le tableau de cette référence ; vitesse et puissance ne fournissent pas un débit.",
			"Catalogue constructeur identifié ; vérifier l’équipement de la révision livrée."
		]
	},
	"specifications": [
		{
			"label": "Disque de ponçage/polissage",
			"value": "5 pouces (127 mm)",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		},
		{
			"label": "Filetage extérieur",
			"value": "5/8-11",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "Aluminium",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "216 mm",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,41 kg",
			"evidenceIds": [
				"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p52",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=52",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=52",
			"sourceLabel": "Dotco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 10L2751-80 est le modèle aluminium à disque 127 mm, filetage 5/8-11 et 9 000 tr/min. La 12L2751-80 est en composite, longueur 249 mm et masse 1,54 kg contre 216 mm et 1,41 kg. Le matériau de corps change avec l’encombrement, sans fournir de donnée de consommation ; le calcul reste indéterminé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p52"
		],
		"workingPressureBar": [
			"october-dotco-p52"
		],
		"demandExplanation": [
			"october-dotco-p52"
		],
		"editorial": [
			"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-dotco-10l2751-80-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
