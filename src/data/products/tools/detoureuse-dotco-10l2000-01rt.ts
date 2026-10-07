import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "detoureuse-dotco-10l2000-01rt",
	"slug": "detoureuse-dotco-10l2000-01rt",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Dotco 10L2000-01RT",
	"brand": "Dotco",
	"model": "10L2000-01RT",
	"mpn": "10L2000-01RT",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/detoureuse-dotco-10l2000-01rt.webp",
		"alt": "Repères techniques : Dotco 10L2000-01RT",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-10l2000-01rt",
		"label": "Référence 10L2000-01RT",
		"distinguishingAttributes": {
			"reference": "10L2000-01RT",
			"Vitesse à vide": "25,000 tr/min",
			"Masse publiée": "0.82 kg",
			"Dimension publiée": "160 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 10L2000-01RT. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 25,000 tr/min. Masse publiée : 0.82 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 25,000 tr/min.",
			"Masse publiée : 0.82 kg.",
			"Dimension publiée : 160 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25,000 tr/min",
			"evidenceIds": [
				"october-dotco-p94"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.82 kg",
			"evidenceIds": [
				"october-dotco-p94"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "160 mm",
			"evidenceIds": [
				"october-dotco-p94"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 94",
			"evidenceIds": [
				"october-dotco-p94"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p94"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p94",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=94",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 94",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p94"
		],
		"workingPressureBar": [
			"october-dotco-p94"
		],
		"demandExplanation": [
			"october-dotco-p94"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
