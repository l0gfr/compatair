import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-cn45a",
	"slug": "agrafeuse-cloueuse-hymair-cn45a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair CN45A",
	"brand": "Hymair",
	"model": "CN45A",
	"mpn": "CN45A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 141.584,
		"typical": 141.584,
		"max": 141.584
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-cn45a.webp",
		"alt": "Repères techniques : Hymair CN45A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-cn45a",
		"label": "Référence CN45A",
		"distinguishingAttributes": {
			"reference": "CN45A",
			"Masse publiée": "2.7 kg",
			"Dimensions publiées (L × W × H)": "280 × 293 × 130 mm"
		}
	},
	"editorial": {
		"overview": "Hymair CN45A. Consommation moyenne : 141,584 L/min à 6,205 bar. Masse publiée : 2.7 kg. Dimensions publiées (L × W × H) : 280 × 293 × 130 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.7 kg.",
			"Dimensions publiées (L × W × H) : 280 × 293 × 130 mm.",
			"Capacité du magasin : 120 nails."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.7 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p6"
			]
		},
		{
			"label": "Dimensions publiées (L × W × H)",
			"value": "280 × 293 × 130 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p6"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "120 nails",
			"evidenceIds": [
				"october2-tools-steed-6-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Avg. air consumption ....................................... 5 SCFM @90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p6"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-steed-6-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-6-p6",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=6",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-6-p6"
		],
		"workingPressureBar": [
			"october2-tools-steed-6-p6"
		],
		"airflowLpm": [
			"october2-tools-steed-6-p6"
		],
		"airflowBasis": [
			"october2-tools-steed-6-p6"
		]
	},
	"notes": [
		"Consommation moyenne : 141,584 L/min à 6,205 bar."
	]
};

export default product;
