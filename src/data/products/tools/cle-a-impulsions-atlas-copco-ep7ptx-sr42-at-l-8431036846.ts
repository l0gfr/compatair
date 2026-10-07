import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-atlas-copco-ep7ptx-sr42-at-l-8431036846",
	"slug": "cle-a-impulsions-atlas-copco-ep7ptx-sr42-at-l-8431036846",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Atlas Copco EP7PTX SR42-AT-L (réf. 8431036846)",
	"brand": "Atlas Copco",
	"model": "EP7PTX SR42-AT-L",
	"mpn": "8431036846",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-atlas-copco-ep7ptx-sr42-at-l-8431036846.webp",
		"alt": "Repères techniques : Atlas Copco EP7PTX SR42-AT-L (réf. 8431036846)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-ep7ptx-sr42-at-l",
		"label": "Référence 8431036846",
		"distinguishingAttributes": {
			"reference": "8431036846",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco EP7PTX SR42-AT-L (réf. 8431036846). Consommation maximale : 420 L/min à 6,3 bar. Vitesse à vide : 4000 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 0.9 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-atlas-us-p27"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-atlas-us-p27"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 27",
			"evidenceIds": [
				"october-atlas-us-p27"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p27",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p27",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=27",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 27",
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
			"october-atlas-us-p27"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p27"
		]
	},
	"notes": [
		"Consommation maximale : 420 L/min à 6,3 bar."
	]
};

export default product;
