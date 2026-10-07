import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-atlas-copco-ltv009-r11-6-200-8431027824",
	"slug": "visseuse-atlas-copco-ltv009-r11-6-200-8431027824",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Atlas Copco LTV009 R11-6-200 (réf. 8431027824)",
	"brand": "Atlas Copco",
	"model": "LTV009 R11-6-200",
	"mpn": "8431027824",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-atlas-copco-ltv009-r11-6-200-8431027824.webp",
		"alt": "Repères techniques : Atlas Copco LTV009 R11-6-200 (réf. 8431027824)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ltv009-r11-6-200",
		"label": "Référence 8431027824",
		"distinguishingAttributes": {
			"reference": "8431027824",
			"Vitesse à vide": "200 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LTV009 R11-6-200 (réf. 8431027824). Consommation maximale : 360 L/min à 6,3 bar. Vitesse à vide : 200 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 200 tr/min.",
			"Masse : 0.7 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "200 tr/min",
			"evidenceIds": [
				"october-atlas-us-p15"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-atlas-us-p15"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 15",
			"evidenceIds": [
				"october-atlas-us-p15"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p15",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p15",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=15",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 15",
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
			"october-atlas-us-p15"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p15"
		]
	},
	"notes": [
		"Consommation maximale : 360 L/min à 6,3 bar."
	]
};

export default product;
