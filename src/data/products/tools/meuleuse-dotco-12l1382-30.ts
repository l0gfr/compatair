import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-12l1382-30",
	"slug": "meuleuse-dotco-12l1382-30",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12L1382-30",
	"brand": "Dotco",
	"model": "12L1382-30",
	"mpn": "12L1382-30",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12l1382-30.webp",
		"alt": "Repères techniques : Dotco 12L1382-30",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=227",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l1382-30",
		"label": "Référence 12L1382-30",
		"distinguishingAttributes": {
			"reference": "12L1382-30",
			"Échappement": "Arrière",
			"Terminaison publiée": "1/4 in",
			"Vitesse à vide": "20000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 12L1382-30. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Échappement : Arrière. Terminaison publiée : 1/4 in.",
		"verifiedFacts": [
			"Échappement : Arrière.",
			"Terminaison publiée : 1/4 in.",
			"Vitesse à vide : 20000 tr/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"october-cleco-p227-p227"
			]
		},
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p227-p227"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"october-cleco-p227-p227"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 227",
			"evidenceIds": [
				"october-cleco-p227-p227"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-cleco-p227-p227"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p227-p227",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=227#page=227",
			"sourceLabel": "Cleco, catalogue SP-1081, page 227",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 c89a3f01f7c0a3ea163b35ae85d9a6a9de9f77deb5cf7133be83c55e06caa213. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p227-p227"
		],
		"workingPressureBar": [
			"october-cleco-p227-p227"
		],
		"demandExplanation": [
			"october-cleco-p227-p227"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
