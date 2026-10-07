import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-lmp24-hr003-13-8431024591",
	"slug": "boulonneuse-atlas-copco-lmp24-hr003-13-8431024591",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LMP24 HR003-13 (réf. 8431024591)",
	"brand": "Atlas Copco",
	"model": "LMP24 HR003-13",
	"mpn": "8431024591",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-lmp24-hr003-13-8431024591.webp",
		"alt": "Repères techniques : Atlas Copco LMP24 HR003-13 (réf. 8431024591)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lmp24-hr003-13",
		"label": "Référence 8431024591",
		"distinguishingAttributes": {
			"reference": "8431024591",
			"Vitesse à vide": "250 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMP24 HR003-13 (réf. 8431024591). Consommation maximale : 660 L/min à 6,3 bar. Vitesse à vide : 250 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 250 tr/min.",
			"Masse : 1.2 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"october-atlas-us-p57"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-atlas-us-p57"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 57",
			"evidenceIds": [
				"october-atlas-us-p57"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p57",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p57",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=57",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 57",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 4fab5d622435c614e9ed24db292c697a8e4ca13f0f5f8edb8d2092ee01348d74. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-atlas-us-p3",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=3",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 4fab5d622435c614e9ed24db292c697a8e4ca13f0f5f8edb8d2092ee01348d74. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-atlas-us-p57"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p57"
		]
	},
	"notes": [
		"Consommation maximale : 660 L/min à 6,3 bar."
	]
};

export default product;
