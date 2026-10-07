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
		"overview": "Cleco BR-C-LT. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 1.95 kg. Longueur publiée : 264 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.95 kg.",
			"Longueur publiée : 264 mm.",
			"Cadence publiée : 4,200 coups/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.95 kg",
			"evidenceIds": [
				"october-dotco-p103"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "264 mm",
			"evidenceIds": [
				"october-dotco-p103"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "4,200 coups/min",
			"evidenceIds": [
				"october-dotco-p103"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 103",
			"evidenceIds": [
				"october-dotco-p103"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p103"
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
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
