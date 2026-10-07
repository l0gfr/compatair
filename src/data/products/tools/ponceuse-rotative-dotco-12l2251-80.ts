import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-dotco-12l2251-80",
	"slug": "ponceuse-rotative-dotco-12l2251-80",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Dotco 12L2251-80",
	"brand": "Dotco",
	"model": "12L2251-80",
	"mpn": "12L2251-80",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-dotco-12l2251-80.webp",
		"alt": "Repères techniques : Dotco 12L2251-80",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l2251-80",
		"label": "Référence 12L2251-80",
		"distinguishingAttributes": {
			"reference": "12L2251-80",
			"Vitesse à vide": "9,000 tr/min",
			"Masse publiée": "1.45 kg",
			"Dimension publiée": "236 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 12L2251-80. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 9,000 tr/min. Masse publiée : 1.45 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 9,000 tr/min.",
			"Masse publiée : 1.45 kg.",
			"Dimension publiée : 236 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "9,000 tr/min",
			"evidenceIds": [
				"october-dotco-p51"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.45 kg",
			"evidenceIds": [
				"october-dotco-p51"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "236 mm",
			"evidenceIds": [
				"october-dotco-p51"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 51",
			"evidenceIds": [
				"october-dotco-p51"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p51"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p51",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=51",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 51",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p51"
		],
		"workingPressureBar": [
			"october-dotco-p51"
		],
		"demandExplanation": [
			"october-dotco-p51"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
