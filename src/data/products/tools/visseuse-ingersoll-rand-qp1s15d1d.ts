import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-qp1s15d1d",
	"slug": "visseuse-ingersoll-rand-qp1s15d1d",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand QP1S15D1D",
	"brand": "Ingersoll Rand",
	"model": "QP1S15D1D",
	"mpn": "QP1S15D1D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-qp1s15d1d.webp",
		"alt": "Repères techniques : Ingersoll Rand QP1S15D1D",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-qp1s15d1d",
		"label": "Référence QP1S15D1D",
		"distinguishingAttributes": {
			"reference": "QP1S15D1D",
			"Masse publiée": "0.7 kg",
			"Caractéristiques du tableau constructeur": "QP1S15D1D 30.1(3.4) 1500 1.5 (0.7) 6.4” (162) 0.6” (15) 1/4” 16 (450)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand QP1S15D1D. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.7 kg. Caractéristiques du tableau constructeur : QP1S15D1D 30.1(3.4) 1500 1.5 (0.7) 6.4” (162) 0.6” (15) 1/4” 16 (450).",
		"verifiedFacts": [
			"Masse publiée : 0.7 kg.",
			"Caractéristiques du tableau constructeur : QP1S15D1D 30.1(3.4) 1500 1.5 (0.7) 6.4” (162) 0.6” (15) 1/4” 16 (450)."
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
			"value": "0.7 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "QP1S15D1D 30.1(3.4) 1500 1.5 (0.7) 6.4” (162) 0.6” (15) 1/4” 16 (450)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "450 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p34",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=34",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p34"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
