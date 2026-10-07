import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-25gl-60a-d5t7",
	"slug": "meuleuse-cleco-25gl-60a-d5t7",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 25GL-60A-D5T7",
	"brand": "Cleco",
	"model": "25GL-60A-D5T7",
	"mpn": "25GL-60A-D5T7",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-25gl-60a-d5t7.webp",
		"alt": "Repères techniques : Cleco 25GL-60A-D5T7",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-25gl-60a-d5t7",
		"label": "Référence 25GL-60A-D5T7",
		"distinguishingAttributes": {
			"reference": "25GL-60A-D5T7",
			"Vitesse à vide": "6,000 tr/min",
			"Masse publiée": "2.54 kg",
			"Dimension publiée": "254 mm"
		}
	},
	"editorial": {
		"overview": "Cleco 25GL-60A-D5T7. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 6,000 tr/min. Masse publiée : 2.54 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 6,000 tr/min.",
			"Masse publiée : 2.54 kg.",
			"Dimension publiée : 254 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6,000 tr/min",
			"evidenceIds": [
				"october-dotco-p32"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.54 kg",
			"evidenceIds": [
				"october-dotco-p32"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "254 mm",
			"evidenceIds": [
				"october-dotco-p32"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 32",
			"evidenceIds": [
				"october-dotco-p32"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p32"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p32",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=32",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 32",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p32"
		],
		"workingPressureBar": [
			"october-dotco-p32"
		],
		"demandExplanation": [
			"october-dotco-p32"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
