import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-ag6",
	"slug": "meuleuse-kinshun-kin-ag6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-AG6",
	"brand": "Kinshun",
	"model": "KIN-AG6",
	"mpn": "KIN-AG6",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-ag6.webp",
		"alt": "Repères techniques : Kinshun KIN-AG6",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-ag6",
		"label": "Référence KIN-AG6",
		"distinguishingAttributes": {
			"reference": "KIN-AG6",
			"Masse publiée": "110g",
			"Dimensions publiées": "150mm+Ø19mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-AG6. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 110g. Dimensions publiées : 150mm+Ø19mm.",
		"verifiedFacts": [
			"Masse publiée : 110g.",
			"Dimensions publiées : 150mm+Ø19mm.",
			"Vitesse publiée dans son unité originale : 35000 rpm.",
			"Pince publiée : 3.0mm+6mm(3.175or6.35)."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "110g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "150mm+Ø19mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "35000 rpm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p2"
			]
		},
		{
			"label": "Pince publiée",
			"value": "3.0mm+6mm(3.175or6.35)",
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
