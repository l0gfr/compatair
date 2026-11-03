import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-dotco-12l2593-01",
	"slug": "polisseuse-dotco-12l2593-01",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "Dotco 12L2593-01",
	"brand": "Dotco",
	"model": "12L2593-01",
	"mpn": "12L2593-01",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-dotco-12l2593-01.webp",
		"alt": "Repères techniques : Dotco 12L2593-01",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l2593-01",
		"label": "Référence 12L2593-01",
		"distinguishingAttributes": {
			"reference": "12L2593-01",
			"Vitesse à vide": "4,700 tr/min",
			"Masse publiée": "0.95 kg",
			"Dimension publiée": "236 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 12L2593-01. La 12L2593-01 accepte la brosse métallique 100 mm ou la roue de polissage 150 mm, au montage 1/4 pouce et à 4 700 tr/min. La 12L2592-01 tourne à 3 200 tr/min et la 12L2594-01 à 6 200 tr/min. La vitesse admissible de l’accessoire doit correspondre à la version exacte. Le catalogue ne chiffre pas la consommation.",
		"verifiedFacts": [
			"Montage : 1/4 pouce.",
			"Capacité brosse métallique : 4 pouces (100 mm).",
			"Capacité roue de polissage : 6 pouces (150 mm).",
			"Vitesse à vide : 4 700 tr/min.",
			"Corps : Composite.",
			"Masse : 0,95 kg."
		],
		"limitations": [
			"Aucune consommation qualifiée n’est publiée dans le tableau de cette référence ; vitesse et puissance ne fournissent pas un débit.",
			"Catalogue constructeur identifié ; vérifier l’équipement de la révision livrée."
		]
	},
	"specifications": [
		{
			"label": "Montage",
			"value": "1/4 pouce",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité brosse métallique",
			"value": "4 pouces (100 mm)",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité roue de polissage",
			"value": "6 pouces (150 mm)",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4 700 tr/min",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "Composite",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,95 kg",
			"evidenceIds": [
				"polisseuse-dotco-12l2593-01-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p54",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=54",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "polisseuse-dotco-12l2593-01-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=54",
			"sourceLabel": "Dotco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. La 12L2593-01 accepte la brosse métallique 100 mm ou la roue de polissage 150 mm, au montage 1/4 pouce et à 4 700 tr/min. La 12L2592-01 tourne à 3 200 tr/min et la 12L2594-01 à 6 200 tr/min. La vitesse admissible de l’accessoire doit correspondre à la version exacte. Le catalogue ne chiffre pas la consommation."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p54"
		],
		"workingPressureBar": [
			"october-dotco-p54"
		],
		"demandExplanation": [
			"october-dotco-p54"
		],
		"editorial": [
			"polisseuse-dotco-12l2593-01-reserved-20261103-1"
		],
		"specifications": [
			"polisseuse-dotco-12l2593-01-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
