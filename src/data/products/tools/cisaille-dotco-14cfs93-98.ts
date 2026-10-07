import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-dotco-14cfs93-98",
	"slug": "cisaille-dotco-14cfs93-98",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Dotco 14CFS93-98",
	"brand": "Dotco",
	"model": "14CFS93-98",
	"mpn": "14CFS93-98",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-dotco-14cfs93-98.webp",
		"alt": "Repères techniques : Dotco 14CFS93-98",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-14cfs93-98",
		"label": "Référence 14CFS93-98",
		"distinguishingAttributes": {
			"reference": "14CFS93-98",
			"Masse publiée": "1.09 kg",
			"Longueur publiée": "249 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 14CFS93-98. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 1.09 kg. Longueur publiée : 249 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.09 kg.",
			"Longueur publiée : 249 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.09 kg",
			"evidenceIds": [
				"october-dotco-p105"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "249 mm",
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
