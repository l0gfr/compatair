import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-jet-ag-4-5s-526345",
	"slug": "meuleuse-jet-ag-4-5s-526345",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "JET AG-4.5S (réf. 526345)",
	"brand": "JET",
	"model": "AG-4.5S",
	"mpn": "526345",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-jet-ag-4-5s-526345.webp",
		"alt": "Repères techniques : JET AG-4.5S (réf. 526345)",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-ag-4-5s",
		"label": "Référence 526345",
		"distinguishingAttributes": {
			"reference": "526345",
			"Masse publiée": "10 lbs",
			"Ligne technique constructeur": "526345 ag-4.5S 4-1/2 x 5/8 x 1/4 5/8-11 3/4 10000 4 1/4 3/8 0.65 83 9 10"
		}
	},
	"editorial": {
		"overview": "JET AG-4.5S (réf. 526345). Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 10 lbs. Ligne technique constructeur : 526345 ag-4.5S 4-1/2 x 5/8 x 1/4 5/8-11 3/4 10000 4 1/4 3/8 0.65 83 9 10.",
		"verifiedFacts": [
			"Masse publiée : 10 lbs.",
			"Ligne technique constructeur : 526345 ag-4.5S 4-1/2 x 5/8 x 1/4 5/8-11 3/4 10000 4 1/4 3/8 0.65 83 9 10."
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
			"value": "10 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p64"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "526345 ag-4.5S 4-1/2 x 5/8 x 1/4 5/8-11 3/4 10000 4 1/4 3/8 0.65 83 9 10",
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
