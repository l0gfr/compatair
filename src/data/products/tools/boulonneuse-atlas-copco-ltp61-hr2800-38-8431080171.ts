import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-ltp61-hr2800-38-8431080171",
	"slug": "boulonneuse-atlas-copco-ltp61-hr2800-38-8431080171",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LTP61 HR2800-38 (réf. 8431080171)",
	"brand": "Atlas Copco",
	"model": "LTP61 HR2800-38",
	"mpn": "8431080171",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1200,
		"typical": 1200,
		"max": 1200
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-atlas-copco-ltp61-hr2800-38-8431080171.webp",
		"alt": "Repères techniques : Atlas Copco LTP61 HR2800-38 (réf. 8431080171)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltp61-hr2800-38",
		"label": "Référence 8431080171",
		"distinguishingAttributes": {
			"reference": "8431080171",
			"Vitesse à vide": "65 tr/min",
			"Masse": "14.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTP61 HR2800-38 (réf. 8431080171). Consommation maximale : 1 200 L/min à 6,3 bar. Vitesse à vide : 65 tr/min. Masse : 14.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 65 tr/min.",
			"Masse : 14.1 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "65 tr/min",
			"evidenceIds": [
				"october-atlas-us-p58"
			]
		},
		{
			"label": "Masse",
			"value": "14.1 kg",
			"evidenceIds": [
				"october-atlas-us-p58"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 58",
			"evidenceIds": [
				"october-atlas-us-p58"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p58",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p58",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=58",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 58",
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
			"october-atlas-us-p58"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p58"
		]
	},
	"notes": [
		"Consommation maximale : 1 200 L/min à 6,3 bar."
	]
};

export default product;
