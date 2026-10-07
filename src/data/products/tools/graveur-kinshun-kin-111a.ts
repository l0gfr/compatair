import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "graveur-kinshun-kin-111a",
	"slug": "graveur-kinshun-kin-111a",
	"categoryId": "graveur",
	"category": "graveur",
	"label": "Kinshun KIN-111A",
	"brand": "Kinshun",
	"model": "KIN-111A",
	"mpn": "KIN-111A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/graveur-kinshun-kin-111a.webp",
		"alt": "Repères techniques : Kinshun KIN-111A",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-111a",
		"label": "Référence KIN-111A",
		"distinguishingAttributes": {
			"reference": "KIN-111A",
			"Masse publiée": "120g",
			"Dimensions publiées": "140mm+Ø18.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-111A. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 120g. Dimensions publiées : 140mm+Ø18.0mm.",
		"verifiedFacts": [
			"Masse publiée : 120g.",
			"Dimensions publiées : 140mm+Ø18.0mm.",
			"Vitesse publiée dans son unité originale : 18000SPM/34000 BPM."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "120g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p6"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "140mm+Ø18.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p6"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "18000SPM/34000 BPM",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucun point de pression établi dans le tableau fabricant.",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-shenghui-catalog-p6",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=6",
			"sourceLabel": "Kinshun, documentation technique fabricant, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-shenghui-catalog-p6"
		],
		"workingPressureBar": [
			"october2-tools-shenghui-catalog-p6"
		],
		"demandExplanation": [
			"october2-tools-shenghui-catalog-p6"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
