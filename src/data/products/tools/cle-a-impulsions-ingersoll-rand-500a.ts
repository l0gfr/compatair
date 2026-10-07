import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-ingersoll-rand-500a",
	"slug": "cle-a-impulsions-ingersoll-rand-500a",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Ingersoll Rand 500A",
	"brand": "Ingersoll Rand",
	"model": "500A",
	"mpn": "500A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-ingersoll-rand-500a.webp",
		"alt": "Repères techniques : Ingersoll Rand 500A",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-500a",
		"label": "Référence 500A",
		"distinguishingAttributes": {
			"reference": "500A",
			"Masse publiée": "1.5 kg",
			"Caractéristiques du tableau constructeur": "500A M6 – M8 12 – 30 (16 – 41) 7,000 3.3 (1.5) 10.5” (267) 1.1” (27) 3/8” 11 (311)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 500A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 kg. Caractéristiques du tableau constructeur : 500A M6 – M8 12 – 30 (16 – 41) 7,000 3.3 (1.5) 10.5” (267) 1.1” (27) 3/8” 11 (311).",
		"verifiedFacts": [
			"Masse publiée : 1.5 kg.",
			"Caractéristiques du tableau constructeur : 500A M6 – M8 12 – 30 (16 – 41) 7,000 3.3 (1.5) 10.5” (267) 1.1” (27) 3/8” 11 (311)."
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
			"value": "1.5 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "500A M6 – M8 12 – 30 (16 – 41) 7,000 3.3 (1.5) 10.5” (267) 1.1” (27) 3/8” 11 (311)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "311 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p71",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=71",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 71",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
