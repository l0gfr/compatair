import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-atlas-copco-lso31-s070-3-8423036279",
	"slug": "ponceuse-vibrante-atlas-copco-lso31-s070-3-8423036279",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Atlas Copco LSO31 S070-3 (réf. 8423036279)",
	"brand": "Atlas Copco",
	"model": "LSO31 S070-3",
	"mpn": "8423036279",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 453.07,
		"typical": 453.07,
		"max": 453.07
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-atlas-copco-lso31-s070-3-8423036279.webp",
		"alt": "Repères techniques : Atlas Copco LSO31 S070-3 (réf. 8423036279)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lso31-s070-3",
		"label": "Référence 8423036279",
		"distinguishingAttributes": {
			"reference": "8423036279",
			"Vitesse à vide": "7000 tr/min",
			"Plateau": "93x170 mm"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSO31 S070-3 (réf. 8423036279). Consommation maximale : 453,07 L/min à 6,3 bar. Vitesse à vide : 7000 tr/min. Plateau : 93x170 mm.",
		"verifiedFacts": [
			"Vitesse à vide : 7000 tr/min.",
			"Plateau : 93x170 mm.",
			"Orbite : 5 mm.",
			"Longueur : 210 mm."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220"
			]
		},
		{
			"label": "Plateau",
			"value": "93x170 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220"
			]
		},
		{
			"label": "Longueur",
			"value": "210 mm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p220",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=220",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 220",
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
			"october2-tools-atlas-industrial-p220"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p220",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p220",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 453,07 L/min à 6,3 bar."
	]
};

export default product;
