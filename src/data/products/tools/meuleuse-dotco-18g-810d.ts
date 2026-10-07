import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-18g-810d",
	"slug": "meuleuse-dotco-18g-810d",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 18G-810D",
	"brand": "Dotco",
	"model": "18G-810D",
	"mpn": "18G-810D",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.205
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-18g-810d.webp",
		"alt": "Repères techniques : Dotco 18G-810D",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-18g-810d",
		"label": "Référence 18G-810D",
		"distinguishingAttributes": {
			"reference": "18G-810D",
			"Vitesse à vide": "40,000 tr/min",
			"Masse publiée": "0.41 kg",
			"Dimension publiée": "150 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 18G-810D. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 40,000 tr/min. Masse publiée : 0.41 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 40,000 tr/min.",
			"Masse publiée : 0.41 kg.",
			"Dimension publiée : 150 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"La pression citée est un maximum ; elle ne documente pas une pression de mesure du débit.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "40,000 tr/min",
			"evidenceIds": [
				"october-dotco-p14"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.41 kg",
			"evidenceIds": [
				"october-dotco-p14"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "150 mm",
			"evidenceIds": [
				"october-dotco-p14"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 14",
			"evidenceIds": [
				"october-dotco-p14"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Use dry air at 90 psi maximum: Do not lubricate turbine grinders. Lubrication will be detrimental to the operation and life of turbine tools. Do not attach a quick-disconnect fitting directly to the tool.",
			"evidenceIds": [
				"october-dotco-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p14",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=14",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p14"
		],
		"workingPressureBar": [
			"october-dotco-p14"
		],
		"demandExplanation": [
			"october-dotco-p14"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
