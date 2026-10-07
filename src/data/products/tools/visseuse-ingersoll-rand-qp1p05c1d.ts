import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-qp1p05c1d",
	"slug": "visseuse-ingersoll-rand-qp1p05c1d",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand QP1P05C1D",
	"brand": "Ingersoll Rand",
	"model": "QP1P05C1D",
	"mpn": "QP1P05C1D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-qp1p05c1d.webp",
		"alt": "Repères techniques : Ingersoll Rand QP1P05C1D",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-qp1p05c1d",
		"label": "Référence QP1P05C1D",
		"distinguishingAttributes": {
			"reference": "QP1P05C1D",
			"Masse publiée": "0.8 kg",
			"Caractéristiques du tableau constructeur": "QP1P05C1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 28.3 (0.9 – 3.2)13.3 – 47.8 (1.5 – 5.4) 500 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand QP1P05C1D. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.8 kg. Caractéristiques du tableau constructeur : QP1P05C1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 28.3 (0.9 – 3.2)13.3 – 47.8 (1.5 – 5.4) 500 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450).",
		"verifiedFacts": [
			"Masse publiée : 0.8 kg.",
			"Caractéristiques du tableau constructeur : QP1P05C1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 28.3 (0.9 – 3.2)13.3 – 47.8 (1.5 – 5.4) 500 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)."
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
			"value": "0.8 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "QP1P05C1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 28.3 (0.9 – 3.2)13.3 – 47.8 (1.5 – 5.4) 500 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "450 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p27",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=27",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p27"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
