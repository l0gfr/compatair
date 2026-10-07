import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-8683-bpr-p",
	"slug": "visseuse-ingersoll-rand-8683-bpr-p",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand 8683-BPR-P",
	"brand": "Ingersoll Rand",
	"model": "8683-BPR-P",
	"mpn": "8683-BPR-P",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-8683-bpr-p.webp",
		"alt": "Repères techniques : Ingersoll Rand 8683-BPR-P",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-8683-bpr-p",
		"label": "Référence 8683-BPR-P",
		"distinguishingAttributes": {
			"reference": "8683-BPR-P",
			"Masse publiée": "0.9 kg",
			"Caractéristiques du tableau constructeur": "8683-BPR-P 50 (5.7) 750 2.0 (0.9) 7.1” (179) 0.8” (20) 1/4” 17 (480)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 8683-BPR-P. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.9 kg. Caractéristiques du tableau constructeur : 8683-BPR-P 50 (5.7) 750 2.0 (0.9) 7.1” (179) 0.8” (20) 1/4” 17 (480).",
		"verifiedFacts": [
			"Masse publiée : 0.9 kg.",
			"Caractéristiques du tableau constructeur : 8683-BPR-P 50 (5.7) 750 2.0 (0.9) 7.1” (179) 0.8” (20) 1/4” 17 (480)."
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
			"value": "0.9 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "8683-BPR-P 50 (5.7) 750 2.0 (0.9) 7.1” (179) 0.8” (20) 1/4” 17 (480)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "480 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p31",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=31",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
