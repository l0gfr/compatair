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
		"overview": "Kinshun KIN-3BSN. La KIN-3BSN est une micromeuleuse à corps140 × Ø16 mm,65 000 tr/min et 71,2 g. Les KIN-630 et KIN-230 annoncent70 000 tr/min et un corpsØ15,5 mm plus léger. Les trois dimensions de pince listées ne sont pas assimilées ; le débit reste absent.",
		"verifiedFacts": [
			"Masse publiée : 71.2g.",
			"Dimensions publiées : 140 mm+Ø16.0 mm.",
			"Vitesse publiée dans son unité originale : 65000 rpm.",
			"Pince publiée : 3.0 mm(2.38or3.175).",
			"Vitesse à vide : 65 000 tr/min.",
			"Masse : 71,2 g.",
			"Corps : 140 mm, diamètre16 mm.",
			"Pinces selon configuration : 3 mm,2,38 mm ou3,175 mm."
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
			"value": "140 mm+Ø16.0 mm",
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
			"value": "3.0 mm(2.38or3.175)",
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
		},
		{
			"label": "Vitesse à vide",
			"value": "65 000 tr/min",
			"evidenceIds": [
				"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "71,2 g",
			"evidenceIds": [
				"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
			]
		},
		{
			"label": "Corps",
			"value": "140 mm, diamètre16 mm",
			"evidenceIds": [
				"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
			]
		},
		{
			"label": "Pinces selon configuration",
			"value": "3 mm,2,38 mm ou3,175 mm",
			"evidenceIds": [
				"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
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
		},
		{
			"id": "meuleuse-kinshun-kin-3bsn-reserved-20261103-1",
			"sourceUrl": "https://shenghuiairtools.com/cdn/shop/files/Product_Catalog.pdf#page=4",
			"sourceLabel": "Kinshun : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a5e9965c317f752d6cfc55359849a9129715ca0da347b990149ccaee82467510. La KIN-3BSN est une micromeuleuse à corps140 × Ø16 mm,65 000 tr/min et 71,2 g. Les KIN-630 et KIN-230 annoncent70 000 tr/min et un corpsØ15,5 mm plus léger. Les trois dimensions de pince listées ne sont pas assimilées ; le débit reste absent."
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
		],
		"editorial": [
			"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
		],
		"specifications": [
			"meuleuse-kinshun-kin-3bsn-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
