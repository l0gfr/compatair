const product = {
	"id": "detoureuse-atlas-copco-lsk37-s250-ds2-8423123442",
	"slug": "detoureuse-atlas-copco-lsk37-s250-ds2-8423123442",
	"categoryId": "detoureuse",
	"category": "detoureuse",
	"label": "Atlas Copco LSK37 S250-DS2 (réf. 8423123442)",
	"brand": "Atlas Copco",
	"model": "LSK37 S250-DS2",
	"mpn": "8423123442",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 906.139,
		"typical": 906.139,
		"max": 906.139
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/detoureuse-atlas-copco-lsk37-s250-ds2-8423123442.webp",
		"alt": "Repères techniques : Atlas Copco LSK37 S250-DS2 (réf. 8423123442)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsk37-s250-ds2",
		"label": "Référence 8423123442",
		"distinguishingAttributes": {
			"reference": "8423123442",
			"Vitesse à vide": "25000 tr/min",
			"Pince": "1/4 pouce"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSK37 S250-DS2 (réf. 8423123442). Consommation maximale : 906,139 L/min à 6,3 bar. Vitesse à vide : 25000 tr/min. Pince : 1/4 pouce.",
		"verifiedFacts": [
			"Vitesse à vide : 25000 tr/min.",
			"Pince : 1/4 pouce.",
			"Masse publiée : 6.1 lb.",
			"Puissance publiée : 0.95 hp."
		],
		"limitations": [
			"La consommation maximale est déclarée dans les conventions du fabricant ; les exceptions explicites du modèle restent prioritaires.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "25000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225"
			]
		},
		{
			"label": "Pince",
			"value": "1/4 pouce",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225"
			]
		},
		{
			"label": "Masse publiée",
			"value": "6.1 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.95 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "32 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p225",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p225",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=225",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 225",
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
			"october2-tools-atlas-industrial-p225"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p225",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p225",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation maximale : 906,139 L/min à 6,3 bar."
	]
};

export default product;
