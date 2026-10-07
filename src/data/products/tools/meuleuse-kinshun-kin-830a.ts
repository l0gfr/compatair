import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-830a",
	"slug": "meuleuse-kinshun-kin-830a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-830A",
	"brand": "Kinshun",
	"model": "KIN-830A",
	"mpn": "KIN-830A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-830a.webp",
		"alt": "Repères techniques : Kinshun KIN-830A",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-830a",
		"label": "Référence KIN-830A",
		"distinguishingAttributes": {
			"reference": "KIN-830A",
			"Masse publiée": "72.9g",
			"Dimensions publiées": "140mm+Ø17.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-830A. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 72.9g. Dimensions publiées : 140mm+Ø17.0mm.",
		"verifiedFacts": [
			"Masse publiée : 72.9g.",
			"Dimensions publiées : 140mm+Ø17.0mm.",
			"Vitesse publiée dans son unité originale : 60000 rpm.",
			"Pince publiée : 3.0mm(2.38or3.175)."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "72.9g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "140mm+Ø17.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "60000 rpm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Pince publiée",
			"value": "3.0mm(2.38or3.175)",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression établi dans le tableau fabricant.",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-shenghui-catalog-p4",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=4",
			"sourceLabel": "Kinshun, documentation technique fabricant, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-shenghui-catalog-p4"
		],
		"workingPressureBar": [
			"october2-tools-shenghui-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-shenghui-catalog-p4"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
