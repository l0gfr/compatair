import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-136vgl-135-d3t4",
	"slug": "meuleuse-dotco-136vgl-135-d3t4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 136VGL-135-D3T4",
	"brand": "Dotco",
	"model": "136VGL-135-D3T4",
	"mpn": "136VGL-135-D3T4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-136vgl-135-d3t4.webp",
		"alt": "Repères techniques : Dotco 136VGL-135-D3T4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-136vgl-135-d3t4",
		"label": "Référence 136VGL-135-D3T4",
		"distinguishingAttributes": {
			"reference": "136VGL-135-D3T4",
			"Vitesse à vide": "13,500 tr/min",
			"Masse publiée": "1.09 kg",
			"Dimension publiée": "185 mm"
		}
	},
	"editorial": {
		"overview": "Dotco 136VGL-135-D3T4. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 13,500 tr/min. Masse publiée : 1.09 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 13,500 tr/min.",
			"Masse publiée : 1.09 kg.",
			"Dimension publiée : 185 mm."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "13,500 tr/min",
			"evidenceIds": [
				"october-dotco-p30"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.09 kg",
			"evidenceIds": [
				"october-dotco-p30"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "185 mm",
			"evidenceIds": [
				"october-dotco-p30"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 30",
			"evidenceIds": [
				"october-dotco-p30"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p30",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=30",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p30"
		],
		"workingPressureBar": [
			"october-dotco-p30"
		],
		"demandExplanation": [
			"october-dotco-p30"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
