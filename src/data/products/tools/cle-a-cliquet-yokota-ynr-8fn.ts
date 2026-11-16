import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-yokota-ynr-8fn",
	"slug": "cle-a-cliquet-yokota-ynr-8fn",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Yokota YNR-8FN",
	"brand": "Yokota",
	"model": "YNR-8FN",
	"mpn": "YNR-8FN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-yokota-ynr-8fn-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Yokota YNR-8FN",
		"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "yokota-ynr-8fn",
		"label": "Référence YNR-8FN",
		"distinguishingAttributes": {
			"reference": "YNR-8FN",
			"Capacité de vissage publiée": "M8",
			"Vitesse à vide": "1400 tr/min"
		}
	},
	"editorial": {
		"overview": "Yokota YNR-8FN : nutrunner pour M8, 1 400 tr/min, tête haute de 19,5 mm et masse 1,2 kg. Le RW-120 du même catalogue est un cliquet M10 à 150 tr/min et 1,1 kg. La YRW-8NS utilise une tête de 13 mm et une douille de 12 mm ; leurs architectures et vitesses diffèrent.",
		"verifiedFacts": [
			"Capacité publiée : M8.",
			"Vitesse à vide : 1 400 tr/min.",
			"Longueur : 257 mm.",
			"Hauteur de tête : 19,5 mm.",
			"Masse : 1,2 kg.",
			"Consommation en charge, hors calcul : 400 L/min."
		],
		"limitations": [
			"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée.",
			"Documents fabricant de versions identifiées ; disponibilité et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Capacité publiée",
			"value": "M8",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 400 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		},
		{
			"label": "Longueur",
			"value": "257 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		},
		{
			"label": "Hauteur de tête",
			"value": "19,5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		},
		{
			"label": "Consommation en charge, hors calcul",
			"value": "400 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-yokota-jp-p42",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf#page=42",
			"sourceLabel": "Yokota Kogyo, catalogue général japonais du fabricant, page PDF 42",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0",
			"sourceUrl": "https://www.yokota-kogyo.co.jp/link/generalcatalog-j.pdf",
			"sourceLabel": "Yokota, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Yokota YNR-8FN : nutrunner pour M8, 1 400 tr/min, tête haute de 19,5 mm et masse 1,2 kg. Le RW-120 du même catalogue est un cliquet M10 à 150 tr/min et 1,1 kg. La YRW-8NS utilise une tête de 13 mm et une douille de 12 mm ; leurs architectures et vitesses diffèrent. GET complet SHA-256 b60e8188ea17df768d52a2b1381382bc9b0e158a03fcd4416d4c4e3ebd0a866c. Pages PDF lues : 42."
		}
	],
	"fieldSources": {
		"mpn": [
			"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
		],
		"demandExplanation": [
			"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
		],
		"workingPressureBar": [
			"review:2026-11-16-reviews:cle-a-cliquet-yokota-ynr-8fn:0"
		]
	},
	"notes": [
		"La consommation en charge est documentée, mais son appariement à une pression de mesure n’est pas établi. Les consignes de service restent séparées ; la compatibilité demeure indéterminée."
	]
};

export default product;
