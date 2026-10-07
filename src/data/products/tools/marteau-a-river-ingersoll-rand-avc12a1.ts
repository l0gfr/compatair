import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-ingersoll-rand-avc12a1",
	"slug": "marteau-a-river-ingersoll-rand-avc12a1",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Ingersoll Rand AVC12A1",
	"brand": "Ingersoll Rand",
	"model": "AVC12A1",
	"mpn": "AVC12A1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-ingersoll-rand-avc12a1.webp",
		"alt": "Repères techniques : Ingersoll Rand AVC12A1",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-avc12a1",
		"label": "Référence AVC12A1",
		"distinguishingAttributes": {
			"reference": "AVC12A1",
			"Masse publiée": "1.5 kg",
			"Caractéristiques du tableau constructeur": "AVC12A1 3/16” (5) 3/16” (5) 7.8” (197) 3.4 (1.5) 3.0” (76) 0.6” (14) 2100 0.401” 13 (360)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand AVC12A1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 kg. Caractéristiques du tableau constructeur : AVC12A1 3/16” (5) 3/16” (5) 7.8” (197) 3.4 (1.5) 3.0” (76) 0.6” (14) 2100 0.401” 13 (360).",
		"verifiedFacts": [
			"Masse publiée : 1.5 kg.",
			"Caractéristiques du tableau constructeur : AVC12A1 3/16” (5) 3/16” (5) 7.8” (197) 3.4 (1.5) 3.0” (76) 0.6” (14) 2100 0.401” 13 (360)."
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
				"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "AVC12A1 3/16” (5) 3/16” (5) 7.8” (197) 3.4 (1.5) 3.0” (76) 0.6” (14) 2100 0.401” 13 (360)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "360 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p73",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=73",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 73",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
