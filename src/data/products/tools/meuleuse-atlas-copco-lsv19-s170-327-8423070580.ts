import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsv19-s170-327-8423070580",
	"slug": "meuleuse-atlas-copco-lsv19-s170-327-8423070580",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSV19 S170-327 (réf. 8423070580)",
	"brand": "Atlas Copco",
	"model": "LSV19 S170-327",
	"mpn": "8423070580",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 651.287,
		"typical": 651.287,
		"max": 651.287
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsv19-s170-327-8423070580.webp",
		"alt": "Repères techniques : Atlas Copco LSV19 S170-327 (réf. 8423070580)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsv19-s170-327",
		"label": "Référence 8423070580",
		"distinguishingAttributes": {
			"reference": "8423070580",
			"Vitesse maximale à vide": "17000 tr/min",
			"Diamètre de meule conseillé": "3 pouces"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSV19 S170-327 (réf. 8423070580). Consommation en charge : 651,287 L/min à 6,3 bar. Vitesse maximale à vide : 17000 tr/min. Diamètre de meule conseillé : 3 pouces.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 17000 tr/min.",
			"Diamètre de meule conseillé : 3 pouces.",
			"Puissance maximale publiée : 0.6 hp.",
			"Masse publiée : 1.6 lb."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "17000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Diamètre de meule conseillé",
			"value": "3 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "0.6 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p215"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.6 lb",
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
			"value": "23 cfm",
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
		"Consommation en charge : 651,287 L/min à 6,3 bar."
	]
};

export default product;
