import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-15ln282-62",
	"slug": "perceuse-dotco-15ln282-62",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 15LN282-62",
	"brand": "Dotco",
	"model": "15LN282-62",
	"mpn": "15LN282-62",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-15ln282-62.webp",
		"alt": "Repères techniques : Dotco 15LN282-62",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-15ln282-62",
		"label": "Référence 15LN282-62",
		"distinguishingAttributes": {
			"reference": "15LN282-62",
			"Vitesse à vide": "3,100 tr/min",
			"Masse publiée": "1.13 kg",
			"Dimension publiée": "305 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 15LN282-62. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 3,100 tr/min. Masse publiée : 1.13 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3,100 tr/min.",
			"Masse publiée : 1.13 kg.",
			"Dimension publiée : 305 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "3,100 tr/min",
			"evidenceIds": [
				"october-dotco-p67"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.13 kg",
			"evidenceIds": [
				"october-dotco-p67"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "305 mm",
			"evidenceIds": [
				"october-dotco-p67"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 67",
			"evidenceIds": [
				"october-dotco-p67"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p67"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p67",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=67",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p67"
		],
		"workingPressureBar": [
			"october-dotco-p67"
		],
		"demandExplanation": [
			"october-dotco-p67"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
