import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-hymair-t-50a",
	"slug": "agrafeuse-cloueuse-hymair-t-50a",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Hymair T-50A",
	"brand": "Hymair",
	"model": "T-50A",
	"mpn": "T-50A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"airflowLpm": {
		"min": 56.634,
		"typical": 56.634,
		"max": 56.634
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-hymair-t-50a.webp",
		"alt": "Repères techniques : Hymair T-50A",
		"sourceUrl": "https://www.steedtools.com/phoenix/admin/download?fileId=PWKUAfLuMrCV&dp=GvUApKfKKUAU",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "hymair-t-50a",
		"label": "Référence T-50A",
		"distinguishingAttributes": {
			"reference": "T-50A",
			"Masse publiée": "2.40 kg",
			"Longueur publiée": "300 mm"
		}
	},
	"editorial": {
		"overview": "Hymair T-50A. Consommation de régime non précisé : 56,634 L/min à 6,205 bar. Masse publiée : 2.40 kg. Longueur publiée : 300 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.40 kg.",
			"Longueur publiée : 300 mm.",
			"Hauteur publiée : 250 mm.",
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
			"value": "2.40 kg",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "300 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Hauteur publiée",
			"value": "250 mm",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "100 nails",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air consumption ............................... 2.0 SCFM @ 90 PSI",
			"evidenceIds": [
				"october2-tools-steed-6-p2"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "2.0 cfm",
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
		"Consommation de régime non précisé : 56,634 L/min à 6,205 bar."
	]
};

export default product;
