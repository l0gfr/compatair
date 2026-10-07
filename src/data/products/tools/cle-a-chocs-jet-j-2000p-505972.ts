import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jet-j-2000p-505972",
	"slug": "cle-a-chocs-jet-j-2000p-505972",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "JET J-2000P (réf. 505972)",
	"brand": "JET",
	"model": "J-2000P",
	"mpn": "505972",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jet-j-2000p-505972.webp",
		"alt": "Repères techniques : JET J-2000P (réf. 505972)",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-j-2000p",
		"label": "Référence 505972",
		"distinguishingAttributes": {
			"reference": "505972",
			"Masse publiée": "11 lbs",
			"Ligne technique constructeur": "505972 J-2000p 3/4 7/8 ring/Hole 550 110-440 5500 39 3/8 3/8 4 8-7/8 11"
		}
	},
	"editorial": {
		"overview": "JET J-2000P (réf. 505972). Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 11 lbs. Ligne technique constructeur : 505972 J-2000p 3/4 7/8 ring/Hole 550 110-440 5500 39 3/8 3/8 4 8-7/8 11.",
		"verifiedFacts": [
			"Masse publiée : 11 lbs.",
			"Ligne technique constructeur : 505972 J-2000p 3/4 7/8 ring/Hole 550 110-440 5500 39 3/8 3/8 4 8-7/8 11."
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
			"value": "11 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p55"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "505972 J-2000p 3/4 7/8 ring/Hole 550 110-440 5500 39 3/8 3/8 4 8-7/8 11",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p55"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p55"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p55",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=55",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 55",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p55"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p55"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p55"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
