const product = {
	"id": "meuleuse-atlas-copco-lsv28-st12-427-8423070601",
	"slug": "meuleuse-atlas-copco-lsv28-st12-427-8423070601",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSV28 ST12-427 (réf. 8423070601)",
	"brand": "Atlas Copco",
	"model": "LSV28 ST12-427",
	"mpn": "8423070601",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1047.723,
		"typical": 1047.723,
		"max": 1047.723
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsv28-st12-427-8423070601.webp",
		"alt": "Repères techniques : Atlas Copco LSV28 ST12-427 (réf. 8423070601)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv28-st12-427",
		"label": "Référence 8423070601",
		"distinguishingAttributes": {
			"reference": "8423070601",
			"Vitesse maximale à vide": "12000 tr/min",
			"Diamètre de meule conseillé": "4 pouces"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV28 ST12-427 (réf. 8423070601). Consommation en charge : 1 047,723 L/min à 6,3 bar. Vitesse maximale à vide : 12000 tr/min. Diamètre de meule conseillé : 4 pouces.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 12000 tr/min.",
			"Diamètre de meule conseillé : 4 pouces.",
			"Puissance maximale publiée : 1.0 hp.",
			"Masse publiée : 3.7 lb."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Diamètre de meule conseillé",
			"value": "4 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "1.0 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Masse publiée",
			"value": "3.7 lb",
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
			"value": "37 cfm",
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
		"Consommation en charge : 1 047,723 L/min à 6,3 bar."
	]
};

export default product;
