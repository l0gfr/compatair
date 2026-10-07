import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-12lf201-36m6",
	"slug": "meuleuse-dotco-12lf201-36m6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12LF201-36M6",
	"brand": "Dotco",
	"model": "12LF201-36M6",
	"mpn": "12LF201-36M6",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12lf201-36m6.webp",
		"alt": "Repères techniques : Dotco 12LF201-36M6",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=223",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12lf201-36m6",
		"label": "Référence 12LF201-36M6",
		"distinguishingAttributes": {
			"reference": "12LF201-36M6",
			"Échappement": "Avant",
			"Terminaison publiée": "1/4 in",
			"Vitesse à vide": "20000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 12LF201-36M6. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Échappement : Avant. Terminaison publiée : 1/4 in.",
		"verifiedFacts": [
			"Échappement : Avant.",
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
			"value": "Avant",
			"evidenceIds": [
				"october-cleco-p223-p223"
			]
		},
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p223-p223"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"october-cleco-p223-p223"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 223",
			"evidenceIds": [
				"october-cleco-p223-p223"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-cleco-p223-p223"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p223-p223",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=223#page=223",
			"sourceLabel": "Cleco, catalogue SP-1081, page 223",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 66f35748369ab7ff2fa2c2843cd333c4cc9afbda9a4ba69efe03c9bb27081ace. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p223-p223"
		],
		"workingPressureBar": [
			"october-cleco-p223-p223"
		],
		"demandExplanation": [
			"october-cleco-p223-p223"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
