const product = {
	"id": "chicago-pneumatic-cp7111h",
	"slug": "marteau-burineur-chicago-pneumatic-cp7111h",
	"categoryId": "burineur",
	"category": "Marteau burineur",
	"label": "Marteau burineur pneumatique Chicago Pneumatic CP7111H",
	"brand": "Chicago Pneumatic",
	"model": "CP7111H",
	"mpn": "8941071111",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7111h.webp",
		"alt": "Marteau burineur pneumatique Chicago Pneumatic CP7111H",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7111h-sku8941071111",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP7111H"
	},
	"editorial": {
		"overview": "Le marteau burineur pneumatique Chicago Pneumatic CP7111H fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 11 L/s, convertie exactement en 660 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une cadence de 3 000 coups/min et 7,2 J par coup.",
			"L’emmanchement est hexagonal, de 10,2 mm, pour un poids de 1,6 kg."
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
				"cp-8941071111-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "11 L/s (660 L/min)",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Cadence",
			"value": "3 000 coups/min",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Énergie par coup",
			"value": "7,2 J",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Emmanchement",
			"value": "Hexagonal 10,2 mm",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,6 kg",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "99 dB(A)",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "110 dB(A)",
			"evidenceIds": [
				"cp-8941071111-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941071111-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7111h-sku8941071111",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7111H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 11 L/s à 660 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-8941071111-official"
		],
		"mpn": [
			"cp-8941071111-official"
		],
		"airflowLpm": [
			"cp-8941071111-official"
		],
		"workingPressureBar": [
			"cp-8941071111-official"
		],
		"connectorSize": [
			"cp-8941071111-official"
		],
		"recommendedHose": [
			"cp-8941071111-official"
		],
		"specifications": [
			"cp-8941071111-official"
		]
	},
	"notes": [
		"Conversion exacte : 11 L/s × 60 = 660 L/min."
	]
};

export default product;
