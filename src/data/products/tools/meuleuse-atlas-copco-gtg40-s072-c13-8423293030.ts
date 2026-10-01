const product = {
	"id": "meuleuse-atlas-copco-gtg40-s072-c13-8423293030",
	"slug": "meuleuse-atlas-copco-gtg40-s072-c13-8423293030",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Atlas Copco GTG40 S072-C13 (réf. 8423293030)",
	"brand": "Atlas Copco",
	"model": "GTG40 S072-C13",
	"mpn": "8423293030",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 3600,
		"typical": 3600,
		"max": 3600
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-atlas-copco-gtg40-s072-c13-8423293030.webp",
		"alt": "Repères techniques : Atlas Copco GTG40 S072-C13 (réf. 8423293030)",
		"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atlas-copco-gtg40-s072-c13",
		"label": "Référence 8423293030",
		"distinguishingAttributes": {
			"reference": "8423293030",
			"Vitesse à vide": "7200 tr/min",
			"Masse": "4.1 kg"
		}
	},
	"editorial": {
		"overview": "Atlas Copco GTG40 S072-C13 (réf. 8423293030). Consommation maximale : 3 600 L/min à 6,3 bar. Vitesse à vide : 7200 tr/min. Masse : 4.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7200 tr/min.",
			"Masse : 4.1 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7200 tr/min",
			"evidenceIds": [
				"october-atlas-us-p220"
			]
		},
		{
			"label": "Masse",
			"value": "4.1 kg",
			"evidenceIds": [
				"october-atlas-us-p220"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Atlas Copco, Industrial tools and solutions, édition US, page 220",
			"evidenceIds": [
				"october-atlas-us-p220"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Unless otherwise stated, the figures are valid at a working pressure of 6.3 bar and indicate the maximum air consumption.",
			"evidenceIds": [
				"october-atlas-us-p220",
				"october-atlas-us-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october-atlas-us-p220",
			"sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/Atlas%20Copco%20-%20Industrial%20tools%20and%20solutions.pdf#page=220",
			"sourceLabel": "Atlas Copco, Industrial tools and solutions, édition US, page 220",
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
			"october-atlas-us-p220"
		],
		"workingPressureBar": [
			"october-atlas-us-p3"
		],
		"airflowLpm": [
			"october-atlas-us-p220"
		]
	},
	"notes": [
		"Consommation maximale : 3 600 L/min à 6,3 bar."
	]
};

export default product;
