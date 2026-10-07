import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "araseuse-de-rivets-dotco-14cfs60-98",
	"slug": "araseuse-de-rivets-dotco-14cfs60-98",
	"categoryId": "araseuse-de-rivets",
	"category": "araseuse-de-rivets",
	"label": "Dotco 14CFS60-98",
	"brand": "Dotco",
	"model": "14CFS60-98",
	"mpn": "14CFS60-98",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/araseuse-de-rivets-dotco-14cfs60-98.webp",
		"alt": "Repères techniques : Dotco 14CFS60-98",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-14cfs60-98",
		"label": "Référence 14CFS60-98",
		"distinguishingAttributes": {
			"reference": "14CFS60-98",
			"Masse publiée": "1.04 kg",
			"Longueur publiée": "208 mm",
			"Vitesse à vide": "29,000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 14CFS60-98. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 1.04 kg. Longueur publiée : 208 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.04 kg.",
			"Longueur publiée : 208 mm.",
			"Vitesse à vide : 29,000 tr/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.04 kg",
			"evidenceIds": [
				"october-dotco-p105"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "208 mm",
			"evidenceIds": [
				"october-dotco-p105"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "29,000 tr/min",
			"evidenceIds": [
				"october-dotco-p105"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 105",
			"evidenceIds": [
				"october-dotco-p105"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p105"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p105",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=105",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 105",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p105"
		],
		"workingPressureBar": [
			"october-dotco-p105"
		],
		"demandExplanation": [
			"october-dotco-p105"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
