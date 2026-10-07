import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-236glf-250-c4",
	"slug": "meuleuse-cleco-236glf-250-c4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 236GLF-250-C4",
	"brand": "Cleco",
	"model": "236GLF-250-C4",
	"mpn": "236GLF-250-C4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-236glf-250-c4.webp",
		"alt": "Repères techniques : Cleco 236GLF-250-C4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-236glf-250-c4",
		"label": "Référence 236GLF-250-C4",
		"distinguishingAttributes": {
			"reference": "236GLF-250-C4",
			"Vitesse à vide": "25,000 tr/min",
			"Masse publiée": "0.64 kg",
			"Dimension publiée": "173 mm"
		}
	},
	"editorial": {
		"overview": "Cleco 236GLF-250-C4. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Vitesse à vide : 25,000 tr/min. Masse publiée : 0.64 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 25,000 tr/min.",
			"Masse publiée : 0.64 kg.",
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
			"value": "25,000 tr/min",
			"evidenceIds": [
				"october-dotco-p19"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.64 kg",
			"evidenceIds": [
				"october-dotco-p19"
			]
		},
		{
			"label": "Dimension publiée",
			"value": "173 mm",
			"evidenceIds": [
				"october-dotco-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco/Dotco, Material Removal SP-102EN, page 19",
			"evidenceIds": [
				"october-dotco-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-dotco-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-dotco-p19",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/DOTCO%20Material%20Removal_SP-102EN_en.pdf#page=19",
			"sourceLabel": "Cleco/Dotco, Material Removal SP-102EN, page 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 93b7d3cdb96a91eecf95baaf172ed0953f2021cb336460e5f9a202ce7e687c10. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-dotco-p19"
		],
		"workingPressureBar": [
			"october-dotco-p19"
		],
		"demandExplanation": [
			"october-dotco-p19"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
