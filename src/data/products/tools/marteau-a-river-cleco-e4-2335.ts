import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-cleco-e4-2335",
	"slug": "marteau-a-river-cleco-e4-2335",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Cleco E4-2335",
	"brand": "Cleco",
	"model": "E4-2335",
	"mpn": "E4-2335",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-cleco-e4-2335.webp",
		"alt": "Repères techniques : Cleco E4-2335",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-e4-2335",
		"label": "Référence E4-2335",
		"distinguishingAttributes": {
			"reference": "E4-2335",
			"Masse publiée": "1.20 kg",
			"Longueur publiée": "213 mm",
			"Cadence publiée": "1,600 coups/min"
		}
	},
	"editorial": {
		"overview": "Cleco E4-2335. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 1.20 kg. Longueur publiée : 213 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.20 kg.",
			"Longueur publiée : 213 mm.",
			"Cadence publiée : 1,600 coups/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.20 kg",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "213 mm",
			"evidenceIds": [
				"october-dotco-p104"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "1,600 coups/min",
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
