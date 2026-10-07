import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jet-jsm-4341",
	"slug": "cle-a-chocs-jet-jsm-4341",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "JET JSM-4341",
	"brand": "JET",
	"model": "JSM-4341",
	"mpn": "JSM-4341",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jet-jsm-4341.webp",
		"alt": "Repères techniques : JET JSM-4341",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-4341",
		"label": "Référence JSM-4341",
		"distinguishingAttributes": {
			"reference": "JSM-4341",
			"Masse publiée": "2-3/4 lbs",
			"Ligne technique constructeur": "JSm-4341 1/2 1/2 ring 300 25-250 9000 4 1/4 3/8 3.9 83 6 2-3/4"
		}
	},
	"editorial": {
		"overview": "JET JSM-4341. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2-3/4 lbs. Ligne technique constructeur : JSm-4341 1/2 1/2 ring 300 25-250 9000 4 1/4 3/8 3.9 83 6 2-3/4.",
		"verifiedFacts": [
			"Masse publiée : 2-3/4 lbs.",
			"Ligne technique constructeur : JSm-4341 1/2 1/2 ring 300 25-250 9000 4 1/4 3/8 3.9 83 6 2-3/4."
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
			"value": "2-3/4 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p58"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-4341 1/2 1/2 ring 300 25-250 9000 4 1/4 3/8 3.9 83 6 2-3/4",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p58"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p58"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p58",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=58",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 58",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p58"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p58"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p58"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
