import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jet-jsm-401",
	"slug": "cle-a-chocs-jet-jsm-401",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "JET JSM-401",
	"brand": "JET",
	"model": "JSM-401",
	"mpn": "JSM-401",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jet-jsm-401.webp",
		"alt": "Repères techniques : JET JSM-401",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-401",
		"label": "Référence JSM-401",
		"distinguishingAttributes": {
			"reference": "JSM-401",
			"Masse publiée": "2 lbs",
			"Ligne technique constructeur": "JSm-401 3/8 3/8 ring 75 15-60 10000 3 1/4 3/8 13.4 108 5 2"
		}
	},
	"editorial": {
		"overview": "JET JSM-401. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2 lbs. Ligne technique constructeur : JSm-401 3/8 3/8 ring 75 15-60 10000 3 1/4 3/8 13.4 108 5 2.",
		"verifiedFacts": [
			"Masse publiée : 2 lbs.",
			"Ligne technique constructeur : JSm-401 3/8 3/8 ring 75 15-60 10000 3 1/4 3/8 13.4 108 5 2."
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
			"value": "2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p59"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-401 3/8 3/8 ring 75 15-60 10000 3 1/4 3/8 13.4 108 5 2",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p59"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p59",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=59",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p59"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p59"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p59"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
