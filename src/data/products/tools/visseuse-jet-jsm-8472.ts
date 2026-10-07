import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-jet-jsm-8472",
	"slug": "visseuse-jet-jsm-8472",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "JET JSM-8472",
	"brand": "JET",
	"model": "JSM-8472",
	"mpn": "JSM-8472",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-jet-jsm-8472.webp",
		"alt": "Repères techniques : JET JSM-8472",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-8472",
		"label": "Référence JSM-8472",
		"distinguishingAttributes": {
			"reference": "JSM-8472",
			"Masse publiée": "2-1/2 lbs",
			"Ligne technique constructeur": "JSm-8472 positive 1/4 1/2 1800 115 4 1/4 3/8 0.3 83 7-3/8 2-1/2"
		}
	},
	"editorial": {
		"overview": "JET JSM-8472. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2-1/2 lbs. Ligne technique constructeur : JSm-8472 positive 1/4 1/2 1800 115 4 1/4 3/8 0.3 83 7-3/8 2-1/2.",
		"verifiedFacts": [
			"Masse publiée : 2-1/2 lbs.",
			"Ligne technique constructeur : JSm-8472 positive 1/4 1/2 1800 115 4 1/4 3/8 0.3 83 7-3/8 2-1/2."
		],
		"limitations": [
			"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
			"Catalogue industriel JET archivé. Référence physique explicitement listée dans une ligne technique ; aucun kit, jeu de burins, adaptateur ou accessoire n’est ajouté.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2-1/2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p68"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-8472 positive 1/4 1/2 1800 115 4 1/4 3/8 0.3 83 7-3/8 2-1/2",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p68"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p68"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p68",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=68",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 68",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p68"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p68"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p68"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
