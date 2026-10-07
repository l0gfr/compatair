import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-f-50c",
	"slug": "agrafeuse-cloueuse-hymair-f-50c",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair F-50C",
	"brand": "Hymair",
	"model": "F-50C",
	"mpn": "F-50C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 39.644,
		"typical": 39.644,
		"max": 39.644
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-f-50c.webp",
		"alt": "Repères techniques : Hymair F-50C",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-f-50c",
		"label": "Référence F-50C",
		"distinguishingAttributes": {
			"reference": "F-50C",
			"Masse publiée": "1.35 kg",
			"Longueur publiée": "255 mm"
		}
	},
	"editorial": {
		"overview": "Hymair F-50C. Consommation de régime non précisé : 39,644 L/min à 6,205 bar. Masse publiée : 1.35 kg. Longueur publiée : 255 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.35 kg.",
			"Longueur publiée : 255 mm.",
			"Hauteur publiée : 230 mm.",
			"Capacité du magasin : 100 nails."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.35 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "255 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "230 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "100 nails",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption ................................... 1.4 SCFM @ 90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "1.4 cfm",
			"evidenceIds": [
				"october2-tools-steed-6-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-steed-6-p3",
			"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU#page=3",
			"sourceLabel": "Hymair, documentation technique fabricant, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2ba54ea32cf0ef4aa86123d86f6ea822cce25a4e72cea15b8bda4c0c6cccb524. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-steed-6-p3"
		],
		"workingPressureBar": [
			"october2-tools-steed-6-p3"
		],
		"airflowLpm": [
			"october2-tools-steed-6-p3"
		],
		"airflowBasis": [
			"october2-tools-steed-6-p3"
		]
	},
	"notes": [
		"Consommation de régime non précisé : 39,644 L/min à 6,205 bar."
	]
};

export default product;
