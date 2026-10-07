import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-ingersoll-rand-avc10c1",
	"slug": "marteau-a-river-ingersoll-rand-avc10c1",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Ingersoll Rand AVC10C1",
	"brand": "Ingersoll Rand",
	"model": "AVC10C1",
	"mpn": "AVC10C1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-ingersoll-rand-avc10c1.webp",
		"alt": "Repères techniques : Ingersoll Rand AVC10C1",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-avc10c1",
		"label": "Référence AVC10C1",
		"distinguishingAttributes": {
			"reference": "AVC10C1",
			"Masse publiée": "0.9 kg",
			"Caractéristiques du tableau constructeur": "AVC10C1 1/8” (3) 1/8” (3) 6.8” (172) 2.1 (0.9) 1.9” (48) 0.6” (14) 3200 0.401” 12 (340)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand AVC10C1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.9 kg. Caractéristiques du tableau constructeur : AVC10C1 1/8” (3) 1/8” (3) 6.8” (172) 2.1 (0.9) 1.9” (48) 0.6” (14) 3200 0.401” 12 (340).",
		"verifiedFacts": [
			"Masse publiée : 0.9 kg.",
			"Caractéristiques du tableau constructeur : AVC10C1 1/8” (3) 1/8” (3) 6.8” (172) 2.1 (0.9) 1.9” (48) 0.6” (14) 3200 0.401” 12 (340)."
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
				"october2b-tools-oct2b-ir-production-fastening-pdf-p73"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "AVC10C1 1/8” (3) 1/8” (3) 6.8” (172) 2.1 (0.9) 1.9” (48) 0.6” (14) 3200 0.401” 12 (340)",
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
			"value": "340 L/min",
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
