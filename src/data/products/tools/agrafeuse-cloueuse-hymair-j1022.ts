import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-j1022",
	"slug": "agrafeuse-cloueuse-hymair-j1022",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair J1022",
	"brand": "Hymair",
	"model": "J1022",
	"mpn": "J1022",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 25.485,
		"typical": 25.485,
		"max": 25.485
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-j1022.webp",
		"alt": "Repères techniques : Hymair J1022",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-j1022",
		"label": "Référence J1022",
		"distinguishingAttributes": {
			"reference": "J1022",
			"Masse publiée": "1.20 kg",
			"Longueur publiée": "240 mm"
		}
	},
	"editorial": {
		"overview": "Hymair J1022. Consommation de régime non précisé : 25,485 L/min à 6,205 bar. Masse publiée : 1.20 kg. Longueur publiée : 240 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.20 kg.",
			"Longueur publiée : 240 mm.",
			"Hauteur publiée : 175 mm.",
			"Capacité du magasin : 100 staples."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.20 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "240 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "175 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "100 staples",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption .................................... 0.9 SCFM @ 90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "0.9 cfm",
			"evidenceIds": [
				"october2-tools-steed-6-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-6-p4",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=4",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-6-p4"
		],
		"workingPressureBar": [
			"october2-tools-steed-6-p4"
		],
		"airflowLpm": [
			"october2-tools-steed-6-p4"
		],
		"airflowBasis": [
			"october2-tools-steed-6-p4"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 25,485 L/min à 6,205 bar."
	]
};

export default product;
