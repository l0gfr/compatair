import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-atlas-copco-lcs38-s150d-8424112506",
	"slug": "scie-atlas-copco-lcs38-s150d-8424112506",
	"categoryId": "scie",
	"category": "scie",
	"label": "Atlas Copco LCS38 S150D (réf. 8424112506)",
	"brand": "Atlas Copco",
	"model": "LCS38 S150D",
	"mpn": "8424112506",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1642.377,
		"typical": 1642.377,
		"max": 1642.377
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-atlas-copco-lcs38-s150d-8424112506.webp",
		"alt": "Repères techniques : Atlas Copco LCS38 S150D (réf. 8424112506)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lcs38-s150d",
		"label": "Référence 8424112506",
		"distinguishingAttributes": {
			"reference": "8424112506",
			"Vitesse à vide": "15000 tr/min",
			"Puissance publiée": "1.7 hp"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LCS38 S150D (réf. 8424112506). Consommation maximale : 1 642,377 L/min à 6,3 bar. Vitesse à vide : 15000 tr/min. Puissance publiée : 1.7 hp.",
		"verifiedFacts": [
			"Vitesse à vide : 15000 tr/min.",
			"Puissance publiée : 1.7 hp.",
			"Profondeur de coupe : 1 pouce.",
			"Diamètre de lame : 4 pouces.",
			"Masse publiée : 3.7 lb."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1.7 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226"
			]
		},
		{
			"label": "Profondeur de coupe",
			"value": "1 pouce",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226"
			]
		},
		{
			"label": "Diamètre de lame",
			"value": "4 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.7 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "58 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p226",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p226",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=226",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 226",
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
			"october2-tools-atlas-industrial-p226"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p226",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p226",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 1 642,377 L/min à 6,3 bar."
	]
};

export default product;
