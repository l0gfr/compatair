import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303",
	"slug": "ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Atlas Copco LSO31 H070-3 (réf. 8423036303)",
	"brand": "Atlas Copco",
	"model": "LSO31 H070-3",
	"mpn": "8423036303",
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
		"src": "/images/products/ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Atlas Copco LSO31 H070-3 (réf. 8423036303)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "atlas-copco-lso31-h070-3",
		"label": "Référence 8423036303",
		"distinguishingAttributes": {
			"reference": "8423036303",
			"Vitesse à vide": "7000 tr/min",
			"Plateau": "93x170 mm"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSO31 H070-3, code 8423 0363 03 : ponceuse orbitale à plateau 93 × 170 mm, orbite 5 mm et aspiration autonome avec sac. La LSO30 H070-3 est sans aspiration ; la LSO32 H070-3 se raccorde à une aspiration centrale. Les 16 cfm sont explicitement mesurés à vide et restent hors du dimensionnement en charge.",
		"verifiedFacts": [
			"Vitesse à vide : 7000 tr/min.",
			"Plateau : 93x170 mm.",
			"Orbite : 5 mm.",
			"Longueur : 310 mm.",
			"Plateau : 93 × 170 mm.",
			"Aspiration : Autonome, sac inclus.",
			"Vitesse à vide : 7 000 tr/min.",
			"Consommation à vide, hors calcul : 16 cfm à 6,3 bar ; conversion documentaire 453,07 L/min."
		],
		"limitations": [
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée.",
			"Consommation à vide explicitement publiée, hors dimensionnement en charge."
		]
	},
	"specifications": [
		{
			"label": "Consommation dans son unité originale",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-atlas-industrial-p220",
				"october2-tools-atlas-industrial-p4"
			]
		},
		{
			"label": "Plateau",
			"value": "93 × 170 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
			]
		},
		{
			"label": "Orbite",
			"value": "5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
			]
		},
		{
			"label": "Aspiration",
			"value": "Autonome, sac inclus",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "16 cfm à 6,3 bar ; conversion documentaire 453,07 L/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
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
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf",
			"sourceLabel": "Atlas Copco, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Atlas Copco LSO31 H070-3, code 8423 0363 03 : ponceuse orbitale à plateau 93 × 170 mm, orbite 5 mm et aspiration autonome avec sac. La LSO30 H070-3 est sans aspiration ; la LSO32 H070-3 se raccorde à une aspiration centrale. Les 16 cfm sont explicitement mesurés à vide et restent hors du dimensionnement en charge. GET complet SHA-256 03eb69cef54f9a52be2a2bd73342620448907b5706ed365db2b3c8a4ca9d3617. Pages PDF lues : 220, 4."
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
		],
		"airflowBasis": [
			"review:2026-11-16-reviews:ponceuse-vibrante-atlas-copco-lso31-h070-3-8423036303:0"
		]
	},
	"notes": [
		"Consommation à vide explicitement publiée, hors dimensionnement en charge."
	],
	"airflowBasis": "free-speed"
};

export default product;
