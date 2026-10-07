import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-8684-bpr-d",
	"slug": "visseuse-ingersoll-rand-8684-bpr-d",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand 8684-BPR-D",
	"brand": "Ingersoll Rand",
	"model": "8684-BPR-D",
	"mpn": "8684-BPR-D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-8684-bpr-d.webp",
		"alt": "Repères techniques : Ingersoll Rand 8684-BPR-D",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-8684-bpr-d",
		"label": "Référence 8684-BPR-D",
		"distinguishingAttributes": {
			"reference": "8684-BPR-D",
			"Masse publiée": "0.6 kg",
			"Caractéristiques du tableau constructeur": "8684-BPR-D 15 (1.7) 2,300 1.3 (0.6) 4.8” (123) 0.8” (20) 1/4” 23 (648)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 8684-BPR-D. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.6 kg. Caractéristiques du tableau constructeur : 8684-BPR-D 15 (1.7) 2,300 1.3 (0.6) 4.8” (123) 0.8” (20) 1/4” 23 (648).",
		"verifiedFacts": [
			"Masse publiée : 0.6 kg.",
			"Caractéristiques du tableau constructeur : 8684-BPR-D 15 (1.7) 2,300 1.3 (0.6) 4.8” (123) 0.8” (20) 1/4” 23 (648)."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Catalogue constructeur archivé ; variantes physiques de poignée, entrée ou entraînement explicitement listées. Les modèles électriques, kits et broches à commande distante sont exclus.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "8684-BPR-D 15 (1.7) 2,300 1.3 (0.6) 4.8” (123) 0.8” (20) 1/4” 23 (648)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "648 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p37",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=37",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p37"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
