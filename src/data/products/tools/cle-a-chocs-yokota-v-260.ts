import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-yokota-v-260",
	"slug": "cle-a-chocs-yokota-v-260",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Yokota V-260",
	"brand": "Yokota",
	"model": "V-260",
	"mpn": "V-260",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-yokota-v-260-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Yokota V-260",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "yokota-v-260",
		"label": "Référence V-260",
		"distinguishingAttributes": {
			"reference": "V-260",
			"Capacité de vissage publiée": "M27",
			"Vitesse à vide": "5500 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota V-260 : carré 19 mm, longueur 380 mm et masse 7,85 kg. La V-2100 conserve le carré avec 236 mm et 4,5 kg ; la V-420 passe au carré 25,4 mm. La plage indicative 400–800 Nm de la V-260 est annoncée à 0,6 MPa ; cette pression de couple ne qualifie pas la mesure des 650 L/min en charge.",
		"verifiedFacts": [
			"Carré : 19 mm.",
			"Vitesse à vide : 5 500 tr/min.",
			"Longueur : 380 mm.",
			"Masse : 7,85 kg.",
			"Couple indicatif : 400–800 Nm à 0,6 MPa.",
			"Consommation en charge, hors calcul : 650 L/min."
		],
		"limitations": [
			"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "19 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5 500 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		},
		{
			"label": "Longueur",
			"value": "380 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		},
		{
			"label": "Masse",
			"value": "7,85 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		},
		{
			"label": "Couple indicatif",
			"value": "400–800 Nm à 0,6 MPa",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "650 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p37",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=37",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 37",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
			"sourceLabel": "Yokota, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Yokota V-260 : carré 19 mm, longueur 380 mm et masse 7,85 kg. La V-2100 conserve le carré avec 236 mm et 4,5 kg ; la V-420 passe au carré 25,4 mm. La plage indicative 400–800 Nm de la V-260 est annoncée à 0,6 MPa ; cette pression de couple ne qualifie pas la mesure des 650 L/min en charge. GET complet SHA-256 b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Pages PDF lues : 37."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:cle-a-chocs-yokota-v-260:0"
		]
	},
	"notes": [
		"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	]
};

export default product;
