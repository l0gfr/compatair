import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-qp1s20s1d",
	"slug": "visseuse-ingersoll-rand-qp1s20s1d",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand QP1S20S1D",
	"brand": "Ingersoll Rand",
	"model": "QP1S20S1D",
	"mpn": "QP1S20S1D",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-qp1s20s1d.webp",
		"alt": "Repères techniques : Ingersoll Rand QP1S20S1D",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-qp1s20s1d",
		"label": "Référence QP1S20S1D",
		"distinguishingAttributes": {
			"reference": "QP1S20S1D",
			"Masse publiée": "0.8 kg",
			"Caractéristiques du tableau constructeur": "QP1S20S1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 22.1 (0.9 – 2.5) – 2,000 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand QP1S20S1D. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.8 kg. Caractéristiques du tableau constructeur : QP1S20S1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 22.1 (0.9 – 2.5) – 2,000 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450).",
		"verifiedFacts": [
			"Masse publiée : 0.8 kg.",
			"Caractéristiques du tableau constructeur : QP1S20S1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 22.1 (0.9 – 2.5) – 2,000 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)."
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
				"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "QP1S20S1D 2.7 – 9.7 (0.3 – 1.1) 8.0 – 22.1 (0.9 – 2.5) – 2,000 1.9 (0.8) 8.8” (223) 0.6” (15) 1/4” 16 (450)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "450 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p24",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=24",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p24"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
