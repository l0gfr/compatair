import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-360a",
	"slug": "meuleuse-kinshun-kin-360a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-360A",
	"brand": "Kinshun",
	"model": "KIN-360A",
	"mpn": "KIN-360A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-360a.webp",
		"alt": "Repères techniques : Kinshun KIN-360A",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-360a",
		"label": "Référence KIN-360A",
		"distinguishingAttributes": {
			"reference": "KIN-360A",
			"Masse publiée": "200g",
			"Dimensions publiées": "165mm+Ø23.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-360A. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 200g. Dimensions publiées : 165mm+Ø23.0mm.",
		"verifiedFacts": [
			"Masse publiée : 200g.",
			"Dimensions publiées : 165mm+Ø23.0mm.",
			"Vitesse publiée dans son unité originale : 30000rpm.",
			"Pince publiée : 3.0mm+6mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "200g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "165mm+Ø23.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "30000rpm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Pince publiée",
			"value": "3.0mm+6mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression établi dans le tableau fabricant.",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-shenghui-catalog-p2",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=2",
			"sourceLabel": "Kinshun, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-shenghui-catalog-p2"
		],
		"workingPressureBar": [
			"october2-tools-shenghui-catalog-p2"
		],
		"demandExplanation": [
			"october2-tools-shenghui-catalog-p2"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
