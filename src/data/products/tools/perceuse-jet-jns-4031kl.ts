import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-jet-jns-4031kl",
	"slug": "perceuse-jet-jns-4031kl",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "JET JNS-4031KL",
	"brand": "JET",
	"model": "JNS-4031KL",
	"mpn": "JNS-4031KL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-jet-jns-4031kl.webp",
		"alt": "Repères techniques : JET JNS-4031KL",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-jns-4031kl",
		"label": "Référence JNS-4031KL",
		"distinguishingAttributes": {
			"reference": "JNS-4031KL",
			"Masse publiée": "2-1/2 lbs",
			"Ligne technique constructeur": "JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2"
		}
	},
	"editorial": {
		"overview": "JET JNS-4031KL. Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul. Masse publiée : 2-1/2 lbs. Ligne technique constructeur : JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2.",
		"verifiedFacts": [
			"Masse publiée : 2-1/2 lbs.",
			"Ligne technique constructeur : JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2."
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
			"value": "2-1/2 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "JNS-4031kl yeS 3/8 3/8-24 1/4 1800 4 1/4 3/8 5.4 78 8 2-1/2",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de la consommation de la ligne n’est pas établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p67"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-jet-catalog-pdf-p67",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=67",
			"sourceLabel": "JET, catalogue industriel constructeur archivé, section Air Tools, page PDF 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-jet-catalog-pdf-p67"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
