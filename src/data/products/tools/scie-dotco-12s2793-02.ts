import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-dotco-12s2793-02",
	"slug": "scie-dotco-12s2793-02",
	"categoryId": "scie",
	"category": "scie",
	"label": "Dotco 12S2793-02",
	"brand": "Dotco",
	"model": "12S2793-02",
	"mpn": "12S2793-02",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-dotco-12s2793-02.webp",
		"alt": "Repères techniques : Dotco 12S2793-02",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12s2793-02",
		"label": "Référence 12S2793-02",
		"distinguishingAttributes": {
			"reference": "12S2793-02",
			"Vitesse à vide": "3,200 tr/min",
			"Masse publiée": "2.36 kg",
			"Dimension publiée": "368 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 12S2793-02. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 3,200 tr/min. Masse publiée : 2.36 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3,200 tr/min.",
			"Masse publiée : 2.36 kg.",
			"Dimension publiée : 368 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "3,200 tr/min",
			"evidenceIds": [
				"october-dotco-p99"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.36 kg",
			"evidenceIds": [
				"october-dotco-p99"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "368 mm",
			"evidenceIds": [
				"october-dotco-p99"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 99",
			"evidenceIds": [
				"october-dotco-p99"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p99"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p99",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=99",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 99",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p99"
		],
		"workingPressureBar": [
			"october-dotco-p99"
		],
		"demandExplanation": [
			"october-dotco-p99"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
