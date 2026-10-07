import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-15dp-14b-49",
	"slug": "perceuse-dotco-15dp-14b-49",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 15DP-14B-49",
	"brand": "Dotco",
	"model": "15DP-14B-49",
	"mpn": "15DP-14B-49",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-15dp-14b-49.webp",
		"alt": "Repères techniques : Dotco 15DP-14B-49",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-15dp-14b-49",
		"label": "Référence 15DP-14B-49",
		"distinguishingAttributes": {
			"reference": "15DP-14B-49",
			"Vitesse à vide": "1,400 tr/min",
			"Masse publiée": "2.04 kg",
			"Dimension publiée": "211 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 15DP-14B-49. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 1,400 tr/min. Masse publiée : 2.04 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 1,400 tr/min.",
			"Masse publiée : 2.04 kg.",
			"Dimension publiée : 211 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1,400 tr/min",
			"evidenceIds": [
				"october-dotco-p63"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.04 kg",
			"evidenceIds": [
				"october-dotco-p63"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "211 mm",
			"evidenceIds": [
				"october-dotco-p63"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 63",
			"evidenceIds": [
				"october-dotco-p63"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p63"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p63",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=63",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p63"
		],
		"workingPressureBar": [
			"october-dotco-p63"
		],
		"demandExplanation": [
			"october-dotco-p63"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
