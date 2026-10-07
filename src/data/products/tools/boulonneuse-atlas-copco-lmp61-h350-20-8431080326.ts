import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-atlas-copco-lmp61-h350-20-8431080326",
	"slug": "boulonneuse-atlas-copco-lmp61-h350-20-8431080326",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Atlas Copco LMP61 H350-20 (réf. 8431080326)",
	"brand": "Atlas Copco",
	"model": "LMP61 H350-20",
	"mpn": "8431080326",
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
		"src": "/images/products/boulonneuse-atlas-copco-lmp61-h350-20-8431080326.webp",
		"alt": "Repères techniques : Atlas Copco LMP61 H350-20 (réf. 8431080326)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lmp61-h350-20",
		"label": "Référence 8431080326",
		"distinguishingAttributes": {
			"reference": "8431080326",
			"Vitesse à vide": "650 tr/min",
			"Masse": "3.9 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LMP61 H350-20 (réf. 8431080326). Consommation maximale : 1 200 L/min à 6,3 bar. Vitesse à vide : 650 tr/min. Masse : 3.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 650 tr/min.",
			"Masse : 3.9 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "650 tr/min",
			"evidenceIds": [
				"october-atlas-us-p57"
			]
		},
		{
			"label": "Masse",
			"value": "3.9 kg",
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
		"Consommation maximale : 1 200 L/min à 6,3 bar."
	]
};

export default product;
