import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-ingersoll-rand-7ramc1",
	"slug": "visseuse-ingersoll-rand-7ramc1",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Ingersoll Rand 7RAMC1",
	"brand": "Ingersoll Rand",
	"model": "7RAMC1",
	"mpn": "7RAMC1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-ingersoll-rand-7ramc1.webp",
		"alt": "Repères techniques : Ingersoll Rand 7RAMC1",
		"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "ingersoll-rand-7ramc1",
		"label": "Référence 7RAMC1",
		"distinguishingAttributes": {
			"reference": "7RAMC1",
			"Masse publiée": "1.5 kg",
			"Caractéristiques du tableau constructeur": "7RAMC1 20.4 – 85.9 (2.3 – 9.7)25.7 – 110.6 (2.9 – 12.5) – 1,000 3.3 (1.5) 10.6” (268) 0.9” (23) 1/4” 27 (760)"
		}
	},
	"editorial": {
		"overview": "Ingersoll Rand 7RAMC1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 kg. Caractéristiques du tableau constructeur : 7RAMC1 20.4 – 85.9 (2.3 – 9.7)25.7 – 110.6 (2.9 – 12.5) – 1,000 3.3 (1.5) 10.6” (268) 0.9” (23) 1/4” 27 (760).",
		"verifiedFacts": [
			"Masse publiée : 1.5 kg.",
			"Caractéristiques du tableau constructeur : 7RAMC1 20.4 – 85.9 (2.3 – 9.7)25.7 – 110.6 (2.9 – 12.5) – 1,000 3.3 (1.5) 10.6” (268) 0.9” (23) 1/4” 27 (760)."
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
				"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "7RAMC1 20.4 – 85.9 (2.3 – 9.7)25.7 – 110.6 (2.9 – 12.5) – 1,000 3.3 (1.5) 10.6” (268) 0.9” (23) 1/4” 27 (760)",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions du tableau, lorsqu’elles sont présentes, concernent le couple et la vitesse ; aucune pression de mesure de consommation ne leur est attribuée.",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "760 L/min",
			"evidenceIds": [
				"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-ir-production-fastening-pdf-p29",
			"sourceUrl": "https://irtoolhelp.ingersollrand.com/hc/en-us/article_attachments/4410723358739#page=29",
			"sourceLabel": "Ingersoll Rand, Production Fastening Assembly Tools, catalogue archivé dans le support constructeur, page PDF 29",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 58f6dd413f360beb3c24048bfe40e3e325ba005dc2b3b1d3e02a21110a0be9c1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-ir-production-fastening-pdf-p29"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
