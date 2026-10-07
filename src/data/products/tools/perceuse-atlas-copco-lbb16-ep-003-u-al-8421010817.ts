import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-atlas-copco-lbb16-ep-003-u-al-8421010817",
	"slug": "perceuse-atlas-copco-lbb16-ep-003-u-al-8421010817",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Atlas Copco LBB16 EP-003-U-AL (réf. 8421010817)",
	"brand": "Atlas Copco",
	"model": "LBB16 EP-003-U-AL",
	"mpn": "8421010817",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-atlas-copco-lbb16-ep-003-u-al-8421010817.webp",
		"alt": "Repères techniques : Atlas Copco LBB16 EP-003-U-AL (réf. 8421010817)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lbb16-ep-003-u-al",
		"label": "Référence 8421010817",
		"distinguishingAttributes": {
			"reference": "8421010817",
			"Vitesse à vide": "300 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LBB16 EP-003-U-AL (réf. 8421010817). Consommation maximale : 480 L/min à 6,3 bar. Vitesse à vide : 300 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 300 tr/min.",
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
			"value": "300 tr/min",
			"evidenceIds": [
				"october-atlas-us-p260"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-atlas-us-p260"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 260",
			"evidenceIds": [
				"october-atlas-us-p260"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p260",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p260",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=260",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 260",
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
			"october-atlas-us-p260"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p260"
		]
	},
	"notes": [
		"Consommation maximale : 480 L/min à 6,3 bar."
	]
};

export default product;
