import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-10lf280-32",
	"slug": "meuleuse-dotco-10lf280-32",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 10LF280-32",
	"brand": "Dotco",
	"model": "10LF280-32",
	"mpn": "10LF280-32",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-10lf280-32.webp",
		"alt": "Repères techniques : Dotco 10LF280-32",
		"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=224",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-10lf280-32",
		"label": "Référence 10LF280-32",
		"distinguishingAttributes": {
			"reference": "10LF280-32",
			"Échappement": "Arrière",
			"Terminaison publiée": "1/4 in",
			"Vitesse à vide": "12000 tr/min"
		}
	},
	"editorial": {
		"overview": "Dotco 10LF280-32. La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner. Échappement : Arrière. Terminaison publiée : 1/4 in.",
		"verifiedFacts": [
			"Échappement : Arrière.",
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
			"value": "Arrière",
			"evidenceIds": [
				"october-cleco-p224-p224"
			]
		},
		{
			"label": "Terminaison publiée",
			"value": "1/4 in",
			"evidenceIds": [
				"october-cleco-p224-p224"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"october-cleco-p224-p224"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Cleco, catalogue SP-1081, page 224",
			"evidenceIds": [
				"october-cleco-p224-p224"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All tools performance rated @ 90 psi / 620 kPa air pressure.",
			"evidenceIds": [
				"october-cleco-p224-p224"
			]
		}
	],
	"evidence": [
		{
			"id": "october-cleco-p224-p224",
			"sourceUrl": "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063&p=224#page=224",
			"sourceLabel": "Cleco, catalogue SP-1081, page 224",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 32bbab896bcb740895745447a8959c9b556e5c205ef89d2381a0f1c4ce0bf7e8. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-cleco-p224-p224"
		],
		"workingPressureBar": [
			"october-cleco-p224-p224"
		],
		"demandExplanation": [
			"october-cleco-p224-p224"
		]
	},
	"notes": [
		"La consommation d’air en charge ou maximale n’est pas donnée dans le tableau de cette référence. La vitesse et la puissance du moteur ne permettent pas de la déduire. Une valeur constructeur à pression et régime explicites est nécessaire pour dimensionner."
	]
};

export default product;
