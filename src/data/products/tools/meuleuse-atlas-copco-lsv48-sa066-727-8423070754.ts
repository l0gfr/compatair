const product = {
	"id": "meuleuse-atlas-copco-lsv48-sa066-727-8423070754",
	"slug": "meuleuse-atlas-copco-lsv48-sa066-727-8423070754",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSV48 SA066-727 (réf. 8423070754)",
	"brand": "Atlas Copco",
	"model": "LSV48 SA066-727",
	"mpn": "8423070754",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2152.08,
		"typical": 2152.08,
		"max": 2152.08
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsv48-sa066-727-8423070754.webp",
		"alt": "Repères techniques : Atlas Copco LSV48 SA066-727 (réf. 8423070754)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv48-sa066-727",
		"label": "Référence 8423070754",
		"distinguishingAttributes": {
			"reference": "8423070754",
			"Vitesse maximale à vide": "6600 tr/min",
			"Diamètre de meule conseillé": "7 pouces"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV48 SA066-727 (réf. 8423070754). Consommation en charge : 2 152,08 L/min à 6,3 bar. Vitesse maximale à vide : 6600 tr/min. Diamètre de meule conseillé : 7 pouces.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 6600 tr/min.",
			"Diamètre de meule conseillé : 7 pouces.",
			"Puissance maximale publiée : 2.5 hp.",
			"Masse publiée : 5.1 lb."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "6600 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Diamètre de meule conseillé",
			"value": "7 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "2.5 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Masse publiée",
			"value": "5.1 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "76 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p215",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=215",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 215",
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
			"october2-tools-atlas-industrial-p215"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p215",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p215",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation en charge : 2 152,08 L/min à 6,3 bar."
	]
};

export default product;
