import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-jet-jsm-804",
	"slug": "visseuse-jet-jsm-804",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "JET JSM-804",
	"brand": "JET",
	"model": "JSM-804",
	"mpn": "JSM-804",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-jet-jsm-804.webp",
		"alt": "Repères techniques : JET JSM-804",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-804",
		"label": "Référence JSM-804",
		"distinguishingAttributes": {
			"reference": "JSM-804",
			"Masse publiée": "2-1/3 lbs",
			"Ligne technique constructeur": "JSm-804 positive 1/4 1/2 1800 115 4 1/4 3/8 0.6 99 7 2-1/3"
		}
	},
	"editorial": {
		"overview": "JET JSM-804. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2-1/3 lbs. Ligne technique constructeur : JSm-804 positive 1/4 1/2 1800 115 4 1/4 3/8 0.6 99 7 2-1/3.",
		"verifiedFacts": [
			"Masse publiée : 2-1/3 lbs.",
			"Ligne technique constructeur : JSm-804 positive 1/4 1/2 1800 115 4 1/4 3/8 0.6 99 7 2-1/3."
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
			"value": "2-1/3 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p69"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-804 positive 1/4 1/2 1800 115 4 1/4 3/8 0.6 99 7 2-1/3",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p69"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p69"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p69",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=69",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 69",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p69"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p69"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p69"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
