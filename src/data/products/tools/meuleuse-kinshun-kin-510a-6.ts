import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-510a-6",
	"slug": "meuleuse-kinshun-kin-510a-6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-510A-6",
	"brand": "Kinshun",
	"model": "KIN-510A-6",
	"mpn": "KIN-510A-6",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-510a-6.webp",
		"alt": "Repères techniques : Kinshun KIN-510A-6",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-510a-6",
		"label": "Référence KIN-510A-6",
		"distinguishingAttributes": {
			"reference": "KIN-510A-6",
			"Masse publiée": "560g",
			"Dimensions publiées": "315mm+Ø35mm(19Ø+150mm)"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-510A-6. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 560g. Dimensions publiées : 315mm+Ø35mm(19Ø+150mm).",
		"verifiedFacts": [
			"Masse publiée : 560g.",
			"Dimensions publiées : 315mm+Ø35mm(19Ø+150mm).",
			"Vitesse publiée dans son unité originale : 22000 rpm.",
			"Pince publiée : 6mm+3mm(3.175-6.35)."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "560g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p10"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "315mm+Ø35mm(19Ø+150mm)",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p10"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "22000 rpm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p10"
			]
		},
		{
			"label": "Pince publiée",
			"value": "6mm+3mm(3.175-6.35)",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p10"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression établi dans le tableau fabricant.",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-shenghui-catalog-p10",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=10",
			"sourceLabel": "Kinshun, documentation technique fabricant, page PDF 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-shenghui-catalog-p10"
		],
		"workingPressureBar": [
			"october2-tools-shenghui-catalog-p10"
		],
		"demandExplanation": [
			"october2-tools-shenghui-catalog-p10"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
