const product = {
	"id": "ponceuse-rotative-atlas-copco-lsv28-s040-lf-8423070613",
	"slug": "ponceuse-rotative-atlas-copco-lsv28-s040-lf-8423070613",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Atlas Copco LSV28 S040 LF (réf. 8423070613)",
	"brand": "Atlas Copco",
	"model": "LSV28 S040 LF",
	"mpn": "8423070613",
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
		"src": "/images/products/ponceuse-rotative-atlas-copco-lsv28-s040-lf-8423070613.webp",
		"alt": "Repères techniques : Atlas Copco LSV28 S040 LF (réf. 8423070613)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv28-s040-lf",
		"label": "Référence 8423070613",
		"distinguishingAttributes": {
			"reference": "8423070613",
			"Vitesse maximale à vide": "4000 tr/min",
			"Diamètre de plateau conseillé": "7 pouces"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV28 S040 LF (réf. 8423070613). Consommation en charge : 906,139 L/min à 6,3 bar. Vitesse maximale à vide : 4000 tr/min. Diamètre de plateau conseillé : 7 pouces.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 4000 tr/min.",
			"Diamètre de plateau conseillé : 7 pouces.",
			"Puissance maximale publiée : 0.8 hp.",
			"Masse publiée : 3.2 lb."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217"
			]
		},
		{
			"label": "Diamètre de plateau conseillé",
			"value": "7 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "0.8 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.2 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "32 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p217",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p217",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=217",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 217",
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
			"october2-tools-atlas-industrial-p217"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p217",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p217",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation en charge : 906,139 L/min à 6,3 bar."
	]
};

export default product;
