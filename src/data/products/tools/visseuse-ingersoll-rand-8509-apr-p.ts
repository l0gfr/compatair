import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-8509-apr-p",
	"slug": "visseuse-ingersoll-rand-8509-apr-p",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand 8509-APR-P",
	"brand": "Ingersoll Rand",
	"model": "8509-APR-P",
	"mpn": "8509-APR-P",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-8509-apr-p.webp",
		"alt": "Repères techniques : Ingersoll Rand 8509-APR-P",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-8509-apr-p",
		"label": "Référence 8509-APR-P",
		"distinguishingAttributes": {
			"reference": "8509-APR-P",
			"Masse publiée": "1.3 kg",
			"Caractéristiques du tableau constructeur": "8509-APR-P 80 (9.1) 900 2.9 (1.3) 8.2” (208) 0.9” (23) 1/4” 26 (732)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 8509-APR-P. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.3 kg. Caractéristiques du tableau constructeur : 8509-APR-P 80 (9.1) 900 2.9 (1.3) 8.2” (208) 0.9” (23) 1/4” 26 (732).",
		"verifiedFacts": [
			"Masse publiée : 1.3 kg.",
			"Caractéristiques du tableau constructeur : 8509-APR-P 80 (9.1) 900 2.9 (1.3) 8.2” (208) 0.9” (23) 1/4” 26 (732)."
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
			"value": "1.3 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p31"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "8509-APR-P 80 (9.1) 900 2.9 (1.3) 8.2” (208) 0.9” (23) 1/4” 26 (732)",
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
			"value": "732 L/min",
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
