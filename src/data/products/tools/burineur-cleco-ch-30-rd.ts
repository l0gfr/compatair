import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-cleco-ch-30-rd",
	"slug": "burineur-cleco-ch-30-rd",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Cleco CH-30-RD",
	"brand": "Cleco",
	"model": "CH-30-RD",
	"mpn": "CH-30-RD",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-cleco-ch-30-rd.webp",
		"alt": "Repères techniques : Cleco CH-30-RD",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-ch-30-rd",
		"label": "Référence CH-30-RD",
		"distinguishingAttributes": {
			"reference": "CH-30-RD",
			"Masse publiée": "6.80 kg",
			"Longueur publiée": "450 mm",
			"Cadence publiée": "2,200 coups/min"
		}
	},
	"editorial": {
		"overview": "Cleco CH-30-RD. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 6.80 kg. Longueur publiée : 450 mm.",
		"verifiedFacts": [
			"Masse publiée : 6.80 kg.",
			"Longueur publiée : 450 mm.",
			"Cadence publiée : 2,200 coups/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "6.80 kg",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "450 mm",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "2,200 coups/min",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 104",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p104"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p104",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=104",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 104",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p104"
		],
		"workingPressureBar": [
			"october-dotco-p104"
		],
		"demandExplanation": [
			"october-dotco-p104"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
