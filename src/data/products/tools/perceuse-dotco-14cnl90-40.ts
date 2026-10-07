import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-14cnl90-40",
	"slug": "perceuse-dotco-14cnl90-40",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 14CNL90-40",
	"brand": "Dotco",
	"model": "14CNL90-40",
	"mpn": "14CNL90-40",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-14cnl90-40.webp",
		"alt": "Repères techniques : Dotco 14CNL90-40",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-14cnl90-40",
		"label": "Référence 14CNL90-40",
		"distinguishingAttributes": {
			"reference": "14CNL90-40",
			"Vitesse à vide": "20,000 tr/min",
			"Masse publiée": "1.00 kg",
			"Dimension publiée": "173 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 14CNL90-40. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 20,000 tr/min. Masse publiée : 1.00 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 tr/min.",
			"Masse publiée : 1.00 kg.",
			"Dimension publiée : 173 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20,000 tr/min",
			"evidenceIds": [
				"october-dotco-p62"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.00 kg",
			"evidenceIds": [
				"october-dotco-p62"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "173 mm",
			"evidenceIds": [
				"october-dotco-p62"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 62",
			"evidenceIds": [
				"october-dotco-p62"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p62"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p62",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=62",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p62"
		],
		"workingPressureBar": [
			"october-dotco-p62"
		],
		"demandExplanation": [
			"october-dotco-p62"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
