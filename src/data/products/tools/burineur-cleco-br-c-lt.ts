import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-cleco-br-c-lt",
	"slug": "burineur-cleco-br-c-lt",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Cleco BR-C-LT",
	"brand": "Cleco",
	"model": "BR-C-LT",
	"mpn": "BR-C-LT",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-cleco-br-c-lt.webp",
		"alt": "Repères techniques : Cleco BR-C-LT",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-br-c-lt",
		"label": "Référence BR-C-LT",
		"distinguishingAttributes": {
			"reference": "BR-C-LT",
			"Masse publiée": "1.95 kg",
			"Longueur publiée": "264 mm",
			"Cadence publiée": "4,200 coups/min"
		}
	},
	"editorial": {
		"overview": "Cleco BR-C-LT. Le BR-C-LT utilise un outil de stock rond 5/8 pouce ; le B1-C-LT est donné pour stock carré 1/2 pouce. Ils partagent la masse 1,95 kg, mais donnent 4 200 et 4 600 coups/min, pour 264 et 262 mm. Le tableau ne documente pas de consommation d’air : la cadence ne permet pas de l’estimer.",
		"verifiedFacts": [
			"Type : Burineur.",
			"Stock d’outil indiqué : Rond 5/8 pouce.",
			"Piston : 1 pouce.",
			"Course : 1,1 pouce.",
			"Cadence : 4 200 coups/min.",
			"Longueur : 264 mm.",
			"Masse : 1,95 kg."
		],
		"limitations": [
			"La vitesse, la puissance et la cadence ne remplacent pas une consommation maximale/en charge documentée avec ses conditions. Les données insuffisantes restent hors calcul conclusif."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Burineur",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Stock d’outil indiqué",
			"value": "Rond 5/8 pouce",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "1 pouce",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "1,1 pouce",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 200 coups/min",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "264 mm",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,95 kg",
			"evidenceIds": [
				"burineur-cleco-br-c-lt-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p103",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=103",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 103",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "burineur-cleco-br-c-lt-reserved-20261103-1",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=103",
			"sourceLabel": "Cleco : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Le BR-C-LT utilise un outil de stock rond 5/8 pouce ; le B1-C-LT est donné pour stock carré 1/2 pouce. Ils partagent la masse 1,95 kg, mais donnent 4 200 et 4 600 coups/min, pour 264 et 262 mm. Le tableau ne documente pas de consommation d’air : la cadence ne permet pas de l’estimer."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p103"
		],
		"workingPressureBar": [
			"october-dotco-p103"
		],
		"demandExplanation": [
			"october-dotco-p103"
		],
		"editorial": [
			"burineur-cleco-br-c-lt-reserved-20261103-1"
		],
		"specifications": [
			"burineur-cleco-br-c-lt-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
