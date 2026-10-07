import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-atlas-copco-gtg25-s085-700-8423252508",
	"slug": "ponceuse-rotative-atlas-copco-gtg25-s085-700-8423252508",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "Atlas Copco GTG25 S085-700 (réf. 8423252508)",
	"brand": "Atlas Copco",
	"model": "GTG25 S085-700",
	"mpn": "8423252508",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1919.882,
		"typical": 1919.882,
		"max": 1919.882
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-atlas-copco-gtg25-s085-700-8423252508.webp",
		"alt": "Repères techniques : Atlas Copco GTG25 S085-700 (réf. 8423252508)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-gtg25-s085-700",
		"label": "Référence 8423252508",
		"distinguishingAttributes": {
			"reference": "8423252508",
			"Vitesse maximale à vide": "8500 tr/min",
			"Puissance maximale publiée": "3.4 hp"
		}
	},
	"editorial": {
		"overview": "Atlas Copco GTG25 S085-700 (réf. 8423252508). Consommation en charge : 1 919,882 L/min à 6,3 bar. Vitesse maximale à vide : 8500 tr/min. Puissance maximale publiée : 3.4 hp.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 8500 tr/min.",
			"Puissance maximale publiée : 3.4 hp.",
			"Masse publiée : 4.2 lb.",
			"Hauteur sur broche : 2.3 pouces."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "3.4 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209"
			]
		},
		{
			"label": "Masse publiée",
			"value": "4.2 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209"
			]
		},
		{
			"label": "Hauteur sur broche",
			"value": "2.3 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "67.8 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p209",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p209",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=209",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 209",
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
			"october2-tools-atlas-industrial-p209"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p209",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p209",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation en charge : 1 919,882 L/min à 6,3 bar."
	]
};

export default product;
