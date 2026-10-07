import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-12l2562-01m6",
	"slug": "meuleuse-dotco-12l2562-01m6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12L2562-01M6",
	"brand": "Dotco",
	"model": "12L2562-01M6",
	"mpn": "12L2562-01M6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12l2562-01m6.webp",
		"alt": "Repères techniques : Dotco 12L2562-01M6",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=219",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12l2562-01m6",
		"label": "Référence 12L2562-01M6",
		"distinguishingAttributes": {
			"reference": "12L2562-01M6",
			"Échappement": "Avant",
			"Terminaison publiée": "1/4 in",
			"Vitesse à vide": "12000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 12L2562-01M6. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Échappement : Avant. Terminaison publiée : 1/4 in.",
		"verifiedFacts": [
			"Échappement : Avant.",
			"Terminaison publiée : 1/4 in.",
			"Vitesse à vide : 12000 tr/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"october-cleco-p219-p219"
			]
		},
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p219-p219"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"october-cleco-p219-p219"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 219",
			"evidenceIds": [
				"october-cleco-p219-p219"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-cleco-p219-p219"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p219-p219",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=219#page=219",
			"sourceLabel": "Cleco, catalogue SP-1081, page 219",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 0b617594c9ca4981f72939bef3c48206557188626c0d066bd4f202d6bdd1c176. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p219-p219"
		],
		"workingPressureBar": [
			"october-cleco-p219-p219"
		],
		"demandExplanation": [
			"october-cleco-p219-p219"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
