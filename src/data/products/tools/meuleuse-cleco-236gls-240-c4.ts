import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-236gls-240-c4",
	"slug": "meuleuse-cleco-236gls-240-c4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 236GLS-240-C4",
	"brand": "Cleco",
	"model": "236GLS-240-C4",
	"mpn": "236GLS-240-C4",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-236gls-240-c4.webp",
		"alt": "Repères techniques : Cleco 236GLS-240-C4",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=229",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-236gls-240-c4",
		"label": "Référence 236GLS-240-C4",
		"distinguishingAttributes": {
			"reference": "236GLS-240-C4",
			"Terminaison publiée": "1/4 in",
			"Échappement": "Latéral"
		}
	},
	"editorial": {
		"overview": "Cleco 236GLS-240-C4. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Terminaison publiée : 1/4 in. Échappement : Latéral.",
		"verifiedFacts": [
			"Terminaison publiée : 1/4 in.",
			"Échappement : Latéral.",
			"Terminaison publiée : 1/4 in.",
			"Vitesse à vide : 24000 tr/min."
		],
		"limitations": [
			"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		},
		{
			"label": "Échappement",
			"value": "Latéral",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		},
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "24000 tr/min",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 229",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-cleco-p229-p229"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p229-p229",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=229#page=229",
			"sourceLabel": "Cleco, catalogue SP-1081, page 229",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 905674c94c58afcc4dda822368e885bae158d441125ef2df340b27b0cb8b4204. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p229-p229"
		],
		"workingPressureBar": [
			"october-cleco-p229-p229"
		],
		"demandExplanation": [
			"october-cleco-p229-p229"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
