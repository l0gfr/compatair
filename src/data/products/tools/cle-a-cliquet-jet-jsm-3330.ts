import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-jet-jsm-3330",
	"slug": "cle-a-cliquet-jet-jsm-3330",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "JET JSM-3330",
	"brand": "JET",
	"model": "JSM-3330",
	"mpn": "JSM-3330",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-jet-jsm-3330.webp",
		"alt": "Repères techniques : JET JSM-3330",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-3330",
		"label": "Référence JSM-3330",
		"distinguishingAttributes": {
			"reference": "JSM-3330",
			"Masse publiée": "2-5/8 lbs",
			"Ligne technique constructeur": "JSm-3330 3/8 3/8 ball 50 150 4 1/4 3/8 2.6 79 10 2-5/8"
		}
	},
	"editorial": {
		"overview": "JET JSM-3330. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2-5/8 lbs. Ligne technique constructeur : JSm-3330 3/8 3/8 ball 50 150 4 1/4 3/8 2.6 79 10 2-5/8.",
		"verifiedFacts": [
			"Masse publiée : 2-5/8 lbs.",
			"Ligne technique constructeur : JSm-3330 3/8 3/8 ball 50 150 4 1/4 3/8 2.6 79 10 2-5/8."
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
			"value": "2-5/8 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p60"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-3330 3/8 3/8 ball 50 150 4 1/4 3/8 2.6 79 10 2-5/8",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p60"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p60"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p60",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=60",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 60",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p60"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p60"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p60"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
