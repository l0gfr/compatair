import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-ingersoll-rand-700a",
	"slug": "cle-a-impulsions-ingersoll-rand-700a",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Ingersoll Rand 700A",
	"brand": "Ingersoll Rand",
	"model": "700A",
	"mpn": "700A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-ingersoll-rand-700a.webp",
		"alt": "Repères techniques : Ingersoll Rand 700A",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-700a",
		"label": "Référence 700A",
		"distinguishingAttributes": {
			"reference": "700A",
			"Masse publiée": "2.0 kg",
			"Caractéristiques du tableau constructeur": "700A M8 – M10 19 – 36 (26 – 49) 5,500 4.4 (2.0) 11.2” (284) 1.1” (27) 3/8” 12 (340)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 700A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.0 kg. Caractéristiques du tableau constructeur : 700A M8 – M10 19 – 36 (26 – 49) 5,500 4.4 (2.0) 11.2” (284) 1.1” (27) 3/8” 12 (340).",
		"verifiedFacts": [
			"Masse publiée : 2.0 kg.",
			"Caractéristiques du tableau constructeur : 700A M8 – M10 19 – 36 (26 – 49) 5,500 4.4 (2.0) 11.2” (284) 1.1” (27) 3/8” 12 (340)."
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
			"value": "2.0 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p71"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "700A M8 – M10 19 – 36 (26 – 49) 5,500 4.4 (2.0) 11.2” (284) 1.1” (27) 3/8” 12 (340)",
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
			"value": "340 L/min",
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
