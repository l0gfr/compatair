import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-jet-j-2000d-505974",
	"slug": "cle-a-chocs-jet-j-2000d-505974",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "JET J-2000D (réf. 505974)",
	"brand": "JET",
	"model": "J-2000D",
	"mpn": "505974",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-jet-j-2000d-505974.webp",
		"alt": "Repères techniques : JET J-2000D (réf. 505974)",
		"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "jet-j-2000d",
		"label": "Référence 505974",
		"distinguishingAttributes": {
			"reference": "505974",
			"Masse publiée": "13 lbs",
			"Ligne technique constructeur": "505974 J-2000d 3/4 7/8 ring/Hole 510 102-408 5500 39 3/8 3/8 4 12-3/16 13"
		}
	},
	"editorial": {
		"overview": "JET J-2000D. La J-2000D, code 505974, est la version à poignée en D et gâchette intérieure, 12 3/16 pouces et 13 lb. La J-2000P à poignée pistolet publie 8⅞ pouces, 11 lb et une autre plage de couple. Les 39 CFM restent sans régime de mesure ; aucun Nm reconstruit n’est substitué aux ft-lb.",
		"verifiedFacts": [
			"Masse publiée : 13 lbs.",
			"Ligne technique constructeur : 505974 J-2000d 3/4 7/8 ring/Hole 510 102-408 5500 39 3/8 3/8 4 12-3/16 13.",
			"Poignée : En D, gâchette intérieure et poignée auxiliaire gauche.",
			"Carré : 3/4 pouce.",
			"Plage de travail : 102–408 ft-lb.",
			"Maximum : 510 ft-lb."
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
			"value": "13 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-jet-catalog-pdf-p55"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "505974 J-2000d 3/4 7/8 ring/Hole 510 102-408 5500 39 3/8 3/8 4 12-3/16 13",
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
		},
		{
			"label": "Poignée",
			"value": "En D, gâchette intérieure et poignée auxiliaire gauche",
			"evidenceIds": [
				"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
			]
		},
		{
			"label": "Carré",
			"value": "3/4 pouce",
			"evidenceIds": [
				"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
			]
		},
		{
			"label": "Plage de travail",
			"value": "102–408 ft-lb",
			"evidenceIds": [
				"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
			]
		},
		{
			"label": "Maximum",
			"value": "510 ft-lb",
			"evidenceIds": [
				"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
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
		},
		{
			"id": "cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1",
			"sourceUrl": "https://d29c95q8mcesvj.cloudfront.net/wysiwyg/pdf/414700_Catalog.pdf#page=55",
			"sourceLabel": "JET : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 9381736270fc03a7d3233abbb4c97f401cc4f8f453822e2b9eabc85c4e4f6ec6. La J-2000D, code 505974, est la version à poignée en D et gâchette intérieure, 12 3/16 pouces et 13 lb. La J-2000P à poignée pistolet publie 8⅞ pouces, 11 lb et une autre plage de couple. Les 39 CFM restent sans régime de mesure ; aucun Nm reconstruit n’est substitué aux ft-lb."
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
		],
		"editorial": [
			"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-jet-j-2000d-505974-reserved-20261103-1"
		]
	},
	"notes": [
		"Les caractéristiques mécaniques sont documentées ; aucune consommation n’est associée à une pression de mesure et à un régime suffisant pour le calcul."
	]
};

export default product;
