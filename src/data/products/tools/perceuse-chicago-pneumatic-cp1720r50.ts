const product = {
	"id": "chicago-pneumatic-cp1720r50",
	"slug": "perceuse-chicago-pneumatic-cp1720r50",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1720R50",
	"brand": "Chicago Pneumatic",
	"model": "CP1720R50",
	"mpn": "6151580270",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2280,
		"typical": 2280,
		"max": 2280
	},
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 19 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 19,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1720r50.webp",
		"alt": "Repères techniques CP1720R50 : 2 280 L/min en charge, 6,3 bar, flexible 19 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1720r50-sku6151580270",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1720R50, référence fabricant 6151580270, demande 2 280 L/min en charge (38 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 140 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 140 tr/min.",
			"Puissance maximale de l’outil : 1630 W.",
			"Couple de calage : 392 Nm.",
			"Entrée d’air 1/2 pouce ; flexible de 19 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "140 tr/min",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "1630 W",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "392 Nm",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "50",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "Morse taper 4",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "16 kg",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "595 mm",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151580270-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580270-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1720r50-sku6151580270",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1720R50, réf. 6151580270",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 38 L/s × 60 = 2280 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151580270-official"
		],
		"airflowLpm": [
			"cp-6151580270-official"
		],
		"workingPressureBar": [
			"cp-6151580270-official"
		],
		"connectorSize": [
			"cp-6151580270-official"
		],
		"recommendedHose": [
			"cp-6151580270-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 38 L/s × 60 = 2280 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
