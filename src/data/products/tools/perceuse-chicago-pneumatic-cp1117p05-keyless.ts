const product = {
	"id": "chicago-pneumatic-cp1117p05-keyless",
	"slug": "perceuse-chicago-pneumatic-cp1117p05-keyless",
	"categoryId": "perceuse",
	"category": "Perceuse",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1117P05 sans clé 13 mm",
	"brand": "Chicago Pneumatic",
	"model": "CP1117P05 Keyless",
	"mpn": "6151580180",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"connectorSize": "Entrée 1/4 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1117p05.webp",
		"alt": "Perceuse pneumatique Chicago Pneumatic CP1117P05 sans clé 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1117p05-keyless-sku6151580180",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP1117P05 Keyless"
	},
	"editorial": {
		"overview": "La perceuse pneumatique Chicago Pneumatic CP1117P05 sans clé 13 mm fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 14 L/s, convertie exactement en 840 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie un mandrin sans clé de 13 mm et une vitesse à vide de 500 tr/min.",
			"Le couple de calage annoncé est de 30 Nm pour une puissance publiée de 750 W."
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
				"cp-6151580180-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "14 L/s (840 L/min)",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 pouce",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Mandrin sans clé",
			"value": "13 mm",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "30 Nm",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "750 W",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,53 kg",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "83 dB(A)",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "94 dB(A)",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "16 L/s",
			"evidenceIds": [
				"cp-6151580180-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580180-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1117p05-keyless-sku6151580180",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1117P05 Keyless",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 14 L/s à 840 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-6151580180-official"
		],
		"mpn": [
			"cp-6151580180-official"
		],
		"airflowLpm": [
			"cp-6151580180-official"
		],
		"workingPressureBar": [
			"cp-6151580180-official"
		],
		"connectorSize": [
			"cp-6151580180-official"
		],
		"recommendedHose": [
			"cp-6151580180-official"
		],
		"specifications": [
			"cp-6151580180-official"
		]
	},
	"notes": [
		"Conversion exacte : 14 L/s × 60 = 840 L/min."
	]
};

export default product;
