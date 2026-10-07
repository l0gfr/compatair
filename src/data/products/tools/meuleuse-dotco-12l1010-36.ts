import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-12l1010-36",
	"slug": "meuleuse-dotco-12l1010-36",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12L1010-36",
	"brand": "Dotco",
	"model": "12L1010-36",
	"mpn": "12L1010-36",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12l1010-36.webp",
		"alt": "Repères techniques : Dotco 12L1010-36",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l1010-36",
		"label": "Référence 12L1010-36",
		"distinguishingAttributes": {
			"reference": "12L1010-36",
			"Masse publiée": "0.34 kg",
			"Longueur publiée": "122 mm",
			"Vitesse à vide": "20,000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 12L1010-36. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Masse publiée : 0.34 kg. Longueur publiée : 122 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.34 kg.",
			"Longueur publiée : 122 mm.",
			"Vitesse à vide : 20,000 tr/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.34 kg",
			"evidenceIds": [
				"october-dotco-p106"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "122 mm",
			"evidenceIds": [
				"october-dotco-p106"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20,000 tr/min",
			"evidenceIds": [
				"october-dotco-p106"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 106",
			"evidenceIds": [
				"october-dotco-p106"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p106"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p106",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=106",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 106",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p106"
		],
		"workingPressureBar": [
			"october-dotco-p106"
		],
		"demandExplanation": [
			"october-dotco-p106"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
