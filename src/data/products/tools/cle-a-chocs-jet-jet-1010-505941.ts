import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jet-jet-1010-505941",
	"slug": "cle-a-chocs-jet-jet-1010-505941",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "JET JET-1010 (réf. 505941)",
	"brand": "JET",
	"model": "JET-1010",
	"mpn": "505941",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jet-jet-1010-505941.webp",
		"alt": "Repères techniques : JET JET-1010 (réf. 505941)",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jet-1010",
		"label": "Référence 505941",
		"distinguishingAttributes": {
			"reference": "505941",
			"Masse publiée": "33 lbs",
			"Ligne technique constructeur": "505941 Jet-1010 1 1-1/4 ring/Hole 1250 250-1000 4100 35 1/2 1/2 8 16-3/16 33"
		}
	},
	"editorial": {
		"overview": "JET JET-1010 (réf. 505941). Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 33 lbs. Ligne technique constructeur : 505941 Jet-1010 1 1-1/4 ring/Hole 1250 250-1000 4100 35 1/2 1/2 8 16-3/16 33.",
		"verifiedFacts": [
			"Masse publiée : 33 lbs.",
			"Ligne technique constructeur : 505941 Jet-1010 1 1-1/4 ring/Hole 1250 250-1000 4100 35 1/2 1/2 8 16-3/16 33."
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
			"value": "33 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p54"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "505941 Jet-1010 1 1-1/4 ring/Hole 1250 250-1000 4100 35 1/2 1/2 8 16-3/16 33",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p54"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p54"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p54",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=54",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 54",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p54"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p54"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p54"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
