const product = {
	"id": "chicago-pneumatic-cp7110",
	"slug": "marteau-burineur-chicago-pneumatic-cp7110",
	"categoryId": "burineur",
	"category": "Marteau burineur",
	"label": "Marteau burineur pneumatique Chicago Pneumatic CP7110",
	"brand": "Chicago Pneumatic",
	"model": "CP7110",
	"mpn": "8941071101",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 414,
		"typical": 414,
		"max": 414
	},
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7110.webp",
		"alt": "Marteau burineur pneumatique Chicago Pneumatic CP7110",
		"sourceUrl": "https://tools.cp.com/en-ca/products/percussivetools/cp7110-sku8941071101",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP7110"
	},
	"editorial": {
		"overview": "Le marteau burineur pneumatique Chicago Pneumatic CP7110 fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 6,9 L/s, convertie exactement en 414 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une cadence de 3 200 coups/min et 7,2 J par coup.",
			"L’emmanchement est rond, de 10,2 mm, pour un poids de 1,7 kg."
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
				"cp-8941071101-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "6,9 L/s (414 L/min)",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Cadence",
			"value": "3 200 coups/min",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "7,2 J",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Emmanchement",
			"value": "Rond 10,2 mm",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,7 kg",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "109 dB(A)",
			"evidenceIds": [
				"cp-8941071101-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941071101-official",
			"sourceUrl": "https://tools.cp.com/en-ca/products/percussivetools/cp7110-sku8941071101",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 6,9 L/s à 414 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-8941071101-official"
		],
		"mpn": [
			"cp-8941071101-official"
		],
		"airflowLpm": [
			"cp-8941071101-official"
		],
		"workingPressureBar": [
			"cp-8941071101-official"
		],
		"connectorSize": [
			"cp-8941071101-official"
		],
		"recommendedHose": [
			"cp-8941071101-official"
		],
		"specifications": [
			"cp-8941071101-official"
		]
	},
	"notes": [
		"Conversion exacte : 6,9 L/s × 60 = 414 L/min."
	]
};

export default product;
