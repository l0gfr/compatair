import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-960a",
	"slug": "meuleuse-kinshun-kin-960a",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-960A",
	"brand": "Kinshun",
	"model": "KIN-960A",
	"mpn": "KIN-960A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-960a.webp",
		"alt": "Repères techniques : Kinshun KIN-960A",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-960a",
		"label": "Référence KIN-960A",
		"distinguishingAttributes": {
			"reference": "KIN-960A",
			"Masse publiée": "106g",
			"Dimensions publiées": "140mm+Ø19.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-960A. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 106g. Dimensions publiées : 140mm+Ø19.0mm.",
		"verifiedFacts": [
			"Masse publiée : 106g.",
			"Dimensions publiées : 140mm+Ø19.0mm.",
			"Vitesse publiée dans son unité originale : 65000 rpm.",
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
			"value": "106g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "140mm+Ø19.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "65000 rpm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Pince publiée",
			"value": "3.0mm(2.38or3.175)",
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
