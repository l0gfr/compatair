const product = {
	"id": "chicago-pneumatic-cp854",
	"slug": "meuleuse-angle-chicago-pneumatic-cp854",
	"categoryId": "meuleuse",
	"category": "Meuleuse d'angle",
	"label": "Meuleuse d'angle pneumatique Chicago Pneumatic CP854 100 mm",
	"brand": "Chicago Pneumatic",
	"model": "CP854",
	"mpn": "T023186",
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
	"connectorSize": "Entrée 1/4 NPT ; flexible intérieur 10 mm recommandé",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp854.webp",
		"alt": "Meuleuse d'angle pneumatique Chicago Pneumatic CP854 100 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp854-skuT023186",
		"sourceLabel": "Visuel officiel Chicago Pneumatic CP854"
	},
	"editorial": {
		"overview": "La meuleuse d'angle pneumatique Chicago Pneumatic CP854 100 mm fonctionne à 6,3 bar. La fiche Chicago Pneumatic publie une consommation en charge de 11 L/s, convertie exactement en 660 L/min pour le calcul de compatibilité.",
		"verifiedFacts": [
			"La fiche constructeur publie une vitesse à vide de 13 000 tr/min et un disque de 100 mm.",
			"La puissance publiée est de 525 W pour un poids de 1,7 kg."
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
				"cp-t023186-official"
			]
		},
		{
			"label": "Consommation en charge",
			"value": "11 L/s (660 L/min)",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Entrée d’air",
			"value": "1/4 NPT",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Diamètre intérieur de flexible recommandé",
			"value": "10 mm",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "100 mm",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "525 W",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Poids",
			"value": "1,7 kg",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Pression acoustique",
			"value": "85 dB(A)",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Puissance acoustique",
			"value": "96 dB(A)",
			"evidenceIds": [
				"cp-t023186-official"
			]
		},
		{
			"label": "Consommation à vide",
			"value": "11 L/s",
			"evidenceIds": [
				"cp-t023186-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t023186-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp854-skuT023186",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP854",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Consommation en charge convertie exactement de 11 L/s à 660 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"cp-t023186-official"
		],
		"mpn": [
			"cp-t023186-official"
		],
		"airflowLpm": [
			"cp-t023186-official"
		],
		"workingPressureBar": [
			"cp-t023186-official"
		],
		"connectorSize": [
			"cp-t023186-official"
		],
		"recommendedHose": [
			"cp-t023186-official"
		],
		"specifications": [
			"cp-t023186-official"
		]
	},
	"notes": [
		"Conversion exacte : 11 L/s × 60 = 660 L/min."
	]
};

export default product;
