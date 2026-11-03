import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "detoureuse-dotco-10l4018-01",
	"slug": "detoureuse-dotco-10l4018-01",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Dotco 10L4018-01",
	"brand": "Dotco",
	"model": "10L4018-01",
	"mpn": "10L4018-01",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/detoureuse-dotco-10l4018-01.webp",
		"alt": "Repères techniques : Dotco 10L4018-01",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-10l4018-01",
		"label": "Référence 10L4018-01",
		"distinguishingAttributes": {
			"reference": "10L4018-01",
			"Vitesse à vide": "18,000 tr/min",
			"Masse publiée": "1.91 kg",
			"Dimension publiée": "287 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 10L4018-01. La 10L4018-01 est la détoureuse à corps aluminium et capacité de queue 1/4 pouce. La 12L4018-01 est en composite aux mêmes masse et longueur ; la 12L4018-03 passe à 3/8 pouce. Le choix de pince et de corps distingue les références. La table ne documente aucun débit ; aucune demande n’est déduite du régime 18 000 tr/min.",
		"verifiedFacts": [
			"Queue d’outil : 1/4 pouce.",
			"Vitesse à vide : 18 000 tr/min.",
			"Corps : Aluminium.",
			"Longueur : 287 mm.",
			"Masse : 1,91 kg."
		],
		"limitations": [
			"Aucune consommation qualifiée n’est publiée dans le tableau de cette référence ; vitesse et puissance ne fournissent pas un débit.",
			"Catalogue constructeur identifié ; vérifier l’équipement de la révision livrée."
		]
	},
	"specifications": [
		{
			"label": "Queue d’outil",
			"value": "1/4 pouce",
			"evidenceIds": [
				"detoureuse-dotco-10l4018-01-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"detoureuse-dotco-10l4018-01-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "Aluminium",
			"evidenceIds": [
				"detoureuse-dotco-10l4018-01-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "287 mm",
			"evidenceIds": [
				"detoureuse-dotco-10l4018-01-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,91 kg",
			"evidenceIds": [
				"detoureuse-dotco-10l4018-01-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p94",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=94",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 94",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "detoureuse-dotco-10l4018-01-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=94",
			"sourceLabel": "Dotco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 10L4018-01 est la détoureuse à corps aluminium et capacité de queue 1/4 pouce. La 12L4018-01 est en composite aux mêmes masse et longueur ; la 12L4018-03 passe à 3/8 pouce. Le choix de pince et de corps distingue les références. La table ne documente aucun débit ; aucune demande n’est déduite du régime 18 000 tr/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p94"
		],
		"workingPressureBar": [
			"october-dotco-p94"
		],
		"demandExplanation": [
			"october-dotco-p94"
		],
		"editorial": [
			"detoureuse-dotco-10l4018-01-reserved-20261103-1"
		],
		"specifications": [
			"detoureuse-dotco-10l4018-01-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
