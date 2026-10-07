import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbs26-h033-40-8421022040",
	"slug": "perceuse-atlas-copco-lbs26-h033-40-8421022040",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBS26 H033-40 (réf. 8421022040)",
	"brand": "Atlas Copco",
	"model": "LBS26 H033-40",
	"mpn": "8421022040",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 900.476,
		"typical": 900.476,
		"max": 900.476
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbs26-h033-40-8421022040.webp",
		"alt": "Repères techniques : Atlas Copco LBS26 H033-40 (réf. 8421022040)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbs26-h033-40",
		"label": "Référence 8421022040",
		"distinguishingAttributes": {
			"reference": "8421022040",
			"Vitesse à vide": "3300 tr/min",
			"Filetage de broche": "1/4\"-28"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBS26 H033-40 (réf. 8421022040). Consommation maximale : 900,476 L/min à 6,3 bar. Vitesse à vide : 3300 tr/min. Filetage de broche : 1/4\"-28.",
		"verifiedFacts": [
			"Vitesse à vide : 3300 tr/min.",
			"Filetage de broche : 1/4\"-28.",
			"Course : 40 mm.",
			"Masse publiée : 2.0 lb."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "3300 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "1/4\"-28",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257"
			]
		},
		{
			"label": "Course",
			"value": "40 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.0 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "31.8 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p257",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p257",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=257",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 257",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2-tools-atlas-industrial-p4",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=4",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-atlas-industrial-p257"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p257",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p257",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 900,476 L/min à 6,3 bar."
	]
};

export default product;
