import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jet-ag-4s-526340",
	"slug": "meuleuse-jet-ag-4s-526340",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "JET AG-4S (réf. 526340)",
	"brand": "JET",
	"model": "AG-4S",
	"mpn": "526340",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jet-ag-4s-526340.webp",
		"alt": "Repères techniques : JET AG-4S (réf. 526340)",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-ag-4s",
		"label": "Référence 526340",
		"distinguishingAttributes": {
			"reference": "526340",
			"Masse publiée": "9-3/4 lbs",
			"Ligne technique constructeur": "526340 ag-4S 4 x 5/8 x 1/4 3/8-24 3/4 10000 4 1/4 3/8 0.65 83 9 9-3/4"
		}
	},
	"editorial": {
		"overview": "JET AG-4S (réf. 526340). Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 9-3/4 lbs. Ligne technique constructeur : 526340 ag-4S 4 x 5/8 x 1/4 3/8-24 3/4 10000 4 1/4 3/8 0.65 83 9 9-3/4.",
		"verifiedFacts": [
			"Masse publiée : 9-3/4 lbs.",
			"Ligne technique constructeur : 526340 ag-4S 4 x 5/8 x 1/4 3/8-24 3/4 10000 4 1/4 3/8 0.65 83 9 9-3/4."
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
			"value": "9-3/4 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p64"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "526340 ag-4S 4 x 5/8 x 1/4 3/8-24 3/4 10000 4 1/4 3/8 0.65 83 9 9-3/4",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p64"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p64"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p64",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=64",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p64"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p64"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p64"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
