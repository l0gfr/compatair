import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-8515-apr-a",
	"slug": "visseuse-ingersoll-rand-8515-apr-a",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand 8515-APR-A",
	"brand": "Ingersoll Rand",
	"model": "8515-APR-A",
	"mpn": "8515-APR-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-8515-apr-a.webp",
		"alt": "Repères techniques : Ingersoll Rand 8515-APR-A",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-8515-apr-a",
		"label": "Référence 8515-APR-A",
		"distinguishingAttributes": {
			"reference": "8515-APR-A",
			"Masse publiée": "1.1 kg",
			"Caractéristiques du tableau constructeur": "8515-APR-A 8 – 45 (0.9 – 5.1) 1,500 2.5 (1.1) 7.5” (190) 0.9” (23) 1/4” 27 (762)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 8515-APR-A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.1 kg. Caractéristiques du tableau constructeur : 8515-APR-A 8 – 45 (0.9 – 5.1) 1,500 2.5 (1.1) 7.5” (190) 0.9” (23) 1/4” 27 (762).",
		"verifiedFacts": [
			"Masse publiée : 1.1 kg.",
			"Caractéristiques du tableau constructeur : 8515-APR-A 8 – 45 (0.9 – 5.1) 1,500 2.5 (1.1) 7.5” (190) 0.9” (23) 1/4” 27 (762)."
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
			"value": "1.1 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "8515-APR-A 8 – 45 (0.9 – 5.1) 1,500 2.5 (1.1) 7.5” (190) 0.9” (23) 1/4” 27 (762)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "762 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p30",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=30",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p30"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
