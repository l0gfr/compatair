const product = {
	"id": "meuleuse-atlas-copco-gtg40-s060-927-8423071505",
	"slug": "meuleuse-atlas-copco-gtg40-s060-927-8423071505",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco GTG40 S060-927 (réf. 8423071505)",
	"brand": "Atlas Copco",
	"model": "GTG40 S060-927",
	"mpn": "8423071505",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 3567.923,
		"typical": 3567.923,
		"max": 3567.923
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-gtg40-s060-927-8423071505.webp",
		"alt": "Repères techniques : Atlas Copco GTG40 S060-927 (réf. 8423071505)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-gtg40-s060-927",
		"label": "Référence 8423071505",
		"distinguishingAttributes": {
			"reference": "8423071505",
			"Vitesse maximale à vide": "6000 tr/min",
			"Diamètre de meule conseillé": "9 pouces"
		}
	},
	"editorial": {
		"overview": "Atlas Copco GTG40 S060-927 (réf. 8423071505). Consommation en charge : 3 567,923 L/min à 6,3 bar. Vitesse maximale à vide : 6000 tr/min. Diamètre de meule conseillé : 9 pouces.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 6000 tr/min.",
			"Diamètre de meule conseillé : 9 pouces.",
			"Puissance maximale publiée : 6.1 hp.",
			"Masse publiée : 9.5 lb."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210"
			]
		},
		{
			"label": "Diamètre de meule conseillé",
			"value": "9 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "6.1 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210"
			]
		},
		{
			"label": "Masse publiée",
			"value": "9.5 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "126 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p210",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p210",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=210",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 210",
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
			"october2-tools-atlas-industrial-p210"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p210",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p210",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation en charge : 3 567,923 L/min à 6,3 bar."
	]
};

export default product;
