import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-st-64a",
	"slug": "agrafeuse-cloueuse-hymair-st-64a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair ST-64A",
	"brand": "Hymair",
	"model": "ST-64A",
	"mpn": "ST-64A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 59.465,
		"typical": 59.465,
		"max": 59.465
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-st-64a.webp",
		"alt": "Repères techniques : Hymair ST-64A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-st-64a",
		"label": "Référence ST-64A",
		"distinguishingAttributes": {
			"reference": "ST-64A",
			"Masse publiée": "2.90 kg",
			"Longueur publiée": "310 mm"
		}
	},
	"editorial": {
		"overview": "Hymair ST-64A. Consommation de régime non précisé : 59,465 L/min à 6,205 bar. Masse publiée : 2.90 kg. Longueur publiée : 310 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.90 kg.",
			"Longueur publiée : 310 mm.",
			"Hauteur publiée : 260 mm.",
			"Capacité du magasin : 80 nails."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.90 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "310 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "260 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "80 nails",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption .............................. 2.1 SCFM @ 90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.1 cfm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-6-p2",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=2",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-6-p2"
		],
		"workingPressureBar": [
			"october2-tools-steed-6-p2"
		],
		"airflowLpm": [
			"october2-tools-steed-6-p2"
		],
		"airflowBasis": [
			"october2-tools-steed-6-p2"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 59,465 L/min à 6,205 bar."
	]
};

export default product;
