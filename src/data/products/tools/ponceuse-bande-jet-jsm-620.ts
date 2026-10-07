import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-jet-jsm-620",
	"slug": "ponceuse-bande-jet-jsm-620",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "JET JSM-620",
	"brand": "JET",
	"model": "JSM-620",
	"mpn": "JSM-620",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-jet-jsm-620.webp",
		"alt": "Repères techniques : JET JSM-620",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jsm-620",
		"label": "Référence JSM-620",
		"distinguishingAttributes": {
			"reference": "JSM-620",
			"Masse publiée": "3-1/4 lbs",
			"Ligne technique constructeur": "JSm-620 3/4 x 20-1/2 1/2 18,000 9274 18.4 1/4 3/8 3.1 82 11-7/8 / 18-1/2 3-1/4"
		}
	},
	"editorial": {
		"overview": "JET JSM-620. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 3-1/4 lbs. Ligne technique constructeur : JSm-620 3/4 x 20-1/2 1/2 18,000 9274 18.4 1/4 3/8 3.1 82 11-7/8 / 18-1/2 3-1/4.",
		"verifiedFacts": [
			"Masse publiée : 3-1/4 lbs.",
			"Ligne technique constructeur : JSm-620 3/4 x 20-1/2 1/2 18,000 9274 18.4 1/4 3/8 3.1 82 11-7/8 / 18-1/2 3-1/4."
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
			"value": "3-1/4 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p70"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JSm-620 3/4 x 20-1/2 1/2 18,000 9274 18.4 1/4 3/8 3.1 82 11-7/8 / 18-1/2 3-1/4",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p70"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p70"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p70",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=70",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p70"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p70"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p70"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
