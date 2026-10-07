import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-atlas-copco-lsf28-st030-8423123563",
	"slug": "meuleuse-atlas-copco-lsf28-st030-8423123563",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco LSF28 ST030 (réf. 8423123563)",
	"brand": "Atlas Copco",
	"model": "LSF28 ST030",
	"mpn": "8423123563",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-lsf28-st030-8423123563.webp",
		"alt": "Repères techniques : Atlas Copco LSF28 ST030 (réf. 8423123563)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-lsf28-st030",
		"label": "Référence 8423123563",
		"distinguishingAttributes": {
			"reference": "8423123563",
			"Vitesse à vide": "3000 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco LSF28 ST030 (réf. 8423123563). Consommation maximale : 1 080 L/min à 6,3 bar. Vitesse à vide : 3000 tr/min. Masse : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3000 tr/min.",
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
			"value": "3000 tr/min",
			"evidenceIds": [
				"october-atlas-us-p223"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-atlas-us-p223"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 223",
			"evidenceIds": [
				"october-atlas-us-p223"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p223",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p223",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=223",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 223",
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
			"october-atlas-us-p223"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p223"
		]
	},
	"notes": [
		"Consommation maximale : 1 080 L/min à 6,3 bar."
	]
};

export default product;
