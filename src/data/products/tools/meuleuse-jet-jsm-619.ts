import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jet-jsm-619",
	"slug": "meuleuse-jet-jsm-619",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "JET JSM-619",
	"brand": "JET",
	"model": "JSM-619",
	"mpn": "JSM-619",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jet-jsm-619.webp",
		"alt": "Repères techniques : JET JSM-619",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-619",
		"label": "Référence JSM-619",
		"distinguishingAttributes": {
			"reference": "JSM-619",
			"Masse publiée": "3-3/4 lbs",
			"Ligne technique constructeur": "JSm-619 4 x 5/8 x 1/4 3/8-24 1/2 11,000 4 1/4 3/8 2.7 96 6-3/4 3-3/4"
		}
	},
	"editorial": {
		"overview": "JET JSM-619. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 3-3/4 lbs. Ligne technique constructeur : JSm-619 4 x 5/8 x 1/4 3/8-24 1/2 11,000 4 1/4 3/8 2.7 96 6-3/4 3-3/4.",
		"verifiedFacts": [
			"Masse publiée : 3-3/4 lbs.",
			"Ligne technique constructeur : JSm-619 4 x 5/8 x 1/4 3/8-24 1/2 11,000 4 1/4 3/8 2.7 96 6-3/4 3-3/4."
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
			"value": "3-3/4 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p65"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-619 4 x 5/8 x 1/4 3/8-24 1/2 11,000 4 1/4 3/8 2.7 96 6-3/4 3-3/4",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p65"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p65"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p65",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=65",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 65",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p65"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p65"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p65"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
