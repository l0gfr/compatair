const product = {
	"id": "chicago-pneumatic-cp0200b32l",
	"slug": "marteau-burineur-chicago-pneumatic-cp0200b32l",
	"categoryId": "burineur",
	"category": "Marteau burineur",
	"label": "Marteau burineur pneumatique Chicago Pneumatic CP0200B32L",
	"brand": "Chicago Pneumatic",
	"model": "CP0200B32L",
	"mpn": "6151618070",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	},
	"connectorSize": "Entrée 1/2 pouce ; flexible intérieur 13 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0200b32l.webp",
		"alt": "Marteau burineur pneumatique Chicago Pneumatic CP0200B32L",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b32l-sku6151618070",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP0200B32L"
	},
	"editorial": {
		"overview": "Le marteau burineur pneumatique Chicago Pneumatic CP0200B32L fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 13 L/s, convertie exactement en 780 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une cadence de 720 coups/min et une énergie de 38 J par coup.",
			"Le CP0200B32L pèse 10 kg et demande une entrée 1/2 pouce avec un flexible intérieur de 13 mm."
		],
		"limitations": [
			"Le débit en charge est conservé comme besoin instantané : aucune moyenne de cycle ni réduction arbitraire n’est appliquée."
		]
	},
	"specifications": [
		{
			"label": "Pression de service",
			"value": "6,3 bar",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "13 L/s (780 L/min)",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/2 pouce",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "13 mm",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Cadence",
			"value": "720 coups/min",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "38 J",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Diamètre de tête",
			"value": "75 mm",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Poids",
			"value": "10 kg",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "95 dB(A)",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "106 dB(A)",
			"evidenceIds": [
				"cp-6151618070-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151618070-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b32l-sku6151618070",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0200B32L",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 13 L/s à 780 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-6151618070-official"
		],
		"mpn": [
			"cp-6151618070-official"
		],
		"airflowLpm": [
			"cp-6151618070-official"
		],
		"workingPressureBar": [
			"cp-6151618070-official"
		],
		"connectorSize": [
			"cp-6151618070-official"
		],
		"recommendedHose": [
			"cp-6151618070-official"
		],
		"specifications": [
			"cp-6151618070-official"
		]
	},
	"notes": [
		"Conversion exacte : 13 L/s × 60 = 780 L/min."
	]
};

export default product;
