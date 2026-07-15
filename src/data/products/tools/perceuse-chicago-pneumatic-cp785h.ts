const product = {
	"id": "chicago-pneumatic-cp785h",
	"slug": "perceuse-chicago-pneumatic-cp785h",
	"categoryId": "perceuse",
	"category": "Perceuse",
	"label": "Perceuse pneumatique Chicago Pneumatic CP785H 13 mm",
	"brand": "Chicago Pneumatic",
	"model": "CP785H",
	"mpn": "T024134",
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
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp785h.webp",
		"alt": "Perceuse pneumatique Chicago Pneumatic CP785H 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp785h-skuT024134",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP785H"
	},
	"editorial": {
		"overview": "La perceuse pneumatique Chicago Pneumatic CP785H 13 mm fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 6 L/s, convertie exactement en 360 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie un mandrin de 13 mm et une vitesse à vide de 500 tr/min.",
			"Le couple de calage annoncé est de 15,4 Nm pour une puissance publiée de 375 W."
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
				"cp-t024134-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "6 L/s (360 L/min)",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "13 mm",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "15,4 Nm",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "375 W",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,36 kg",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "96 dB(A)",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "107 dB(A)",
			"evidenceIds": [
				"cp-t024134-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "15 L/s",
			"evidenceIds": [
				"cp-t024134-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t024134-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp785h-skuT024134",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP785H",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 6 L/s à 360 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-t024134-official"
		],
		"mpn": [
			"cp-t024134-official"
		],
		"airflowLpm": [
			"cp-t024134-official"
		],
		"workingPressureBar": [
			"cp-t024134-official"
		],
		"connectorSize": [
			"cp-t024134-official"
		],
		"recommendedHose": [
			"cp-t024134-official"
		],
		"specifications": [
			"cp-t024134-official"
		]
	},
	"notes": [
		"Conversion exacte : 6 L/s × 60 = 360 L/min."
	]
};

export default product;
