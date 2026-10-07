import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-sq054c-16-q",
	"slug": "visseuse-ingersoll-rand-sq054c-16-q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand SQ054C-16-Q",
	"brand": "Ingersoll Rand",
	"model": "SQ054C-16-Q",
	"mpn": "SQ054C-16-Q",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-sq054c-16-q.webp",
		"alt": "Repères techniques : Ingersoll Rand SQ054C-16-Q",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-sq054c-16-q",
		"label": "Référence SQ054C-16-Q",
		"distinguishingAttributes": {
			"reference": "SQ054C-16-Q",
			"Masse publiée": "1.4 kg",
			"Caractéristiques du tableau constructeur": "SQ054C-16-Q 15 - 40 (1.7 – 4.5) 25 – 60 (2.8 – 6.8) – 1,600 3.2 (1.4) 8.8” (224) 0.9” (24) 1/4” 25 (720)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand SQ054C-16-Q. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.4 kg. Caractéristiques du tableau constructeur : SQ054C-16-Q 15 - 40 (1.7 – 4.5) 25 – 60 (2.8 – 6.8) – 1,600 3.2 (1.4) 8.8” (224) 0.9” (24) 1/4” 25 (720).",
		"verifiedFacts": [
			"Masse publiée : 1.4 kg.",
			"Caractéristiques du tableau constructeur : SQ054C-16-Q 15 - 40 (1.7 – 4.5) 25 – 60 (2.8 – 6.8) – 1,600 3.2 (1.4) 8.8” (224) 0.9” (24) 1/4” 25 (720)."
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
			"value": "1.4 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "SQ054C-16-Q 15 - 40 (1.7 – 4.5) 25 – 60 (2.8 – 6.8) – 1,600 3.2 (1.4) 8.8” (224) 0.9” (24) 1/4” 25 (720)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "720 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p25",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=25",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p25"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
