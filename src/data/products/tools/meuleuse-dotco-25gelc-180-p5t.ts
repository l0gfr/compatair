import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-25gelc-180-p5t",
	"slug": "meuleuse-dotco-25gelc-180-p5t",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 25GELC-180-P5T",
	"brand": "Dotco",
	"model": "25GELC-180-P5T",
	"mpn": "25GELC-180-P5T",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-25gelc-180-p5t.webp",
		"alt": "Repères techniques : Dotco 25GELC-180-P5T",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-25gelc-180-p5t",
		"label": "Référence 25GELC-180-P5T",
		"distinguishingAttributes": {
			"reference": "25GELC-180-P5T",
			"Vitesse à vide": "18,000 tr/min",
			"Masse publiée": "1.45 kg",
			"Dimension publiée": "378 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 25GELC-180-P5T. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 18,000 tr/min. Masse publiée : 1.45 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 18,000 tr/min.",
			"Masse publiée : 1.45 kg.",
			"Dimension publiée : 378 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18,000 tr/min",
			"evidenceIds": [
				"october-dotco-p37"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.45 kg",
			"evidenceIds": [
				"october-dotco-p37"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "378 mm",
			"evidenceIds": [
				"october-dotco-p37"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 37",
			"evidenceIds": [
				"october-dotco-p37"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p37",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=37",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p37"
		],
		"workingPressureBar": [
			"october-dotco-p37"
		],
		"demandExplanation": [
			"october-dotco-p37"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
