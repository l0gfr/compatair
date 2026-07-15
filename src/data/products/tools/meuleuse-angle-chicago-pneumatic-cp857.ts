const product = {
	"id": "chicago-pneumatic-cp857",
	"slug": "meuleuse-angle-chicago-pneumatic-cp857",
	"categoryId": "meuleuse",
	"category": "Meuleuse d'angle",
	"label": "Meuleuse d'angle pneumatique Chicago Pneumatic CP857 180 mm",
	"brand": "Chicago Pneumatic",
	"model": "CP857",
	"mpn": "T024387",
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
	"connectorSize": "Entrée 3/8 pouce ; flexible intérieur 10 mm recommandé",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp857.webp",
		"alt": "Meuleuse d'angle pneumatique Chicago Pneumatic CP857 180 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp857-skuT024387",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP857"
	},
	"editorial": {
		"overview": "La meuleuse d'angle pneumatique Chicago Pneumatic CP857 180 mm fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 11 L/s, convertie exactement en 660 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une vitesse à vide de 7 500 tr/min et un disque de 180 mm.",
			"Les niveaux acoustiques publiés sont de 102 dB(A) en pression et 113 dB(A) en puissance."
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
				"cp-t024387-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "11 L/s (660 L/min)",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7 500 tr/min",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "180 mm",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "940 W",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Poids",
			"value": "2,8 kg",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "102 dB(A)",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "113 dB(A)",
			"evidenceIds": [
				"cp-t024387-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "11 L/s",
			"evidenceIds": [
				"cp-t024387-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t024387-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp857-skuT024387",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP857",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 11 L/s à 660 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-t024387-official"
		],
		"mpn": [
			"cp-t024387-official"
		],
		"airflowLpm": [
			"cp-t024387-official"
		],
		"workingPressureBar": [
			"cp-t024387-official"
		],
		"connectorSize": [
			"cp-t024387-official"
		],
		"recommendedHose": [
			"cp-t024387-official"
		],
		"specifications": [
			"cp-t024387-official"
		]
	},
	"notes": [
		"Conversion exacte : 11 L/s × 60 = 660 L/min."
	]
};

export default product;
