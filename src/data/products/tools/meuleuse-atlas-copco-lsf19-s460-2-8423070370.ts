import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsf19-s460-2-8423070370",
	"slug": "meuleuse-atlas-copco-lsf19-s460-2-8423070370",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF19 S460-2 (réf. 8423070370)",
	"brand": "Atlas Copco",
	"model": "LSF19 S460-2",
	"mpn": "8423070370",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 679.604,
		"typical": 679.604,
		"max": 679.604
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsf19-s460-2-8423070370.webp",
		"alt": "Repères techniques : Atlas Copco LSF19 S460-2 (réf. 8423070370)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsf19-s460-2",
		"label": "Référence 8423070370",
		"distinguishingAttributes": {
			"reference": "8423070370",
			"Vitesse maximale à vide": "46000 tr/min",
			"Puissance maximale publiée": "0.68 hp"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSF19 S460-2 (réf. 8423070370). Consommation en charge : 679,604 L/min à 6,3 bar. Vitesse maximale à vide : 46000 tr/min. Puissance maximale publiée : 0.68 hp.",
		"verifiedFacts": [
			"Vitesse maximale à vide : 46000 tr/min.",
			"Puissance maximale publiée : 0.68 hp.",
			"Masse publiée : 1.2 lb.",
			"Longueur : 7.6 pouces."
		],
		"limitations": [
			"Le débit en charge est associé au point de pression documenté ; aucun facteur de marche supposé ne le réduit.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse maximale à vide",
			"value": "46000 tr/min",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212"
			]
		},
		{
			"label": "Puissance maximale publiée",
			"value": "0.68 hp",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 lb",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212"
			]
		},
		{
			"label": "Longueur",
			"value": "7.6 pouces",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "6.3 bar : point de consommation maximale déclaré dans les conventions fabricant, page PDF 4, sauf exception explicite.",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "24 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p212",
				"october2-tools-atlas-industrial-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-atlas-industrial-p212",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=212",
			"sourceLabel": "Industrial Tools and Solutions, catalogue fabricant Atlas Copco, édition identifiée par empreinte, page PDF 212",
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
			"october2-tools-atlas-industrial-p212"
		],
		"workingPressureBar": [
			"october2-tools-atlas-industrial-p212",
			"october2-tools-atlas-industrial-p4"
		],
		"airflowLpm": [
			"october2-tools-atlas-industrial-p212",
			"october2-tools-atlas-industrial-p4"
		]
	},
	"notes": [
		"Consommation en charge : 679,604 L/min à 6,3 bar."
	]
};

export default product;
