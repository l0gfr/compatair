const product = {
	"id": "meuleuse-atlas-copco-gtg25-f085-m14-8423252512",
	"slug": "meuleuse-atlas-copco-gtg25-f085-m14-8423252512",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco GTG25 F085-M14 (réf. 8423252512)",
	"brand": "Atlas Copco",
	"model": "GTG25 F085-M14",
	"mpn": "8423252512",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1920,
		"typical": 1920,
		"max": 1920
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-gtg25-f085-m14-8423252512.webp",
		"alt": "Repères techniques : Atlas Copco GTG25 F085-M14 (réf. 8423252512)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-gtg25-f085-m14",
		"label": "Référence 8423252512",
		"distinguishingAttributes": {
			"reference": "8423252512",
			"Vitesse à vide": "8500 tr/min",
			"Masse": "2.2 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco GTG25 F085-M14 (réf. 8423252512). Consommation maximale : 1 920 L/min à 6,3 bar. Vitesse à vide : 8500 tr/min. Masse : 2.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Masse : 2.2 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october-atlas-us-p219"
			]
		},
		{
			"label": "Masse",
			"value": "2.2 kg",
			"evidenceIds": [
				"october-atlas-us-p219"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 219",
			"evidenceIds": [
				"october-atlas-us-p219"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p219",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p219",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=219",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 219",
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
			"october-atlas-us-p219"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p219"
		]
	},
	"notes": [
		"Consommation maximale : 1 920 L/min à 6,3 bar."
	]
};

export default product;
