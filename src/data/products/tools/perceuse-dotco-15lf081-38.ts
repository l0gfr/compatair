import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-15lf081-38",
	"slug": "perceuse-dotco-15lf081-38",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 15LF081-38",
	"brand": "Dotco",
	"model": "15LF081-38",
	"mpn": "15LF081-38",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-15lf081-38.webp",
		"alt": "Repères techniques : Dotco 15LF081-38",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-15lf081-38",
		"label": "Référence 15LF081-38",
		"distinguishingAttributes": {
			"reference": "15LF081-38",
			"Vitesse à vide": "5,300 tr/min",
			"Masse publiée": "0.64 kg",
			"Dimension publiée": "203 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 15LF081-38. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 5,300 tr/min. Masse publiée : 0.64 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 5,300 tr/min.",
			"Masse publiée : 0.64 kg.",
			"Dimension publiée : 203 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5,300 tr/min",
			"evidenceIds": [
				"october-dotco-p65"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.64 kg",
			"evidenceIds": [
				"october-dotco-p65"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "203 mm",
			"evidenceIds": [
				"october-dotco-p65"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 65",
			"evidenceIds": [
				"october-dotco-p65"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p65"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p65",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=65",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 65",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p65"
		],
		"workingPressureBar": [
			"october-dotco-p65"
		],
		"demandExplanation": [
			"october-dotco-p65"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
