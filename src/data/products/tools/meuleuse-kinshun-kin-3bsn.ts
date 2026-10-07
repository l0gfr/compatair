import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kinshun-kin-3bsn",
	"slug": "meuleuse-kinshun-kin-3bsn",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Kinshun KIN-3BSN",
	"brand": "Kinshun",
	"model": "KIN-3BSN",
	"mpn": "KIN-3BSN",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kinshun-kin-3bsn.webp",
		"alt": "Repères techniques : Kinshun KIN-3BSN",
		"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kinshun-kin-3bsn",
		"label": "Référence KIN-3BSN",
		"distinguishingAttributes": {
			"reference": "KIN-3BSN",
			"Masse publiée": "71.2g",
			"Dimensions publiées": "140mm+Ø16.0mm"
		}
	},
	"editorial": {
		"overview": "Kinshun KIN-3BSN. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 71.2g. Dimensions publiées : 140mm+Ø16.0mm.",
		"verifiedFacts": [
			"Masse publiée : 71.2g.",
			"Dimensions publiées : 140mm+Ø16.0mm.",
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
			"value": "71.2g",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "140mm+Ø16.0mm",
			"evidenceIds": [
				"october2-tools-shenghui-catalog-p4"
			]
		},
		{
			"label": "Vitesse publiée dans son unité originale",
			"value": "65000 rpm",
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
