const product = {
	"id": "chicago-pneumatic-cp1720r22",
	"slug": "perceuse-chicago-pneumatic-cp1720r22",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1720R22",
	"brand": "Chicago Pneumatic",
	"model": "CP1720R22",
	"mpn": "6151580250",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1500,
		"typical": 1500,
		"max": 1500
	},
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1720r22.webp",
		"alt": "Repères techniques CP1720R22 : 1 500 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1720r22-sku6151580250",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1720R22, référence fabricant 6151580250, demande 1 500 L/min en charge (25 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 430 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 430 tr/min.",
			"Puissance maximale de l’outil : 890 W.",
			"Couple de calage : 80.4 Nm.",
			"Entrée d’air 1/2 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "430 tr/min",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "890 W",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "80.4 Nm",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "22",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "Morse taper 2",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "7 kg",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "472 mm",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151580250-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580250-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1720r22-sku6151580250",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1720R22, réf. 6151580250",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 25 L/s × 60 = 1500 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151580250-official"
		],
		"airflowLpm": [
			"cp-6151580250-official"
		],
		"workingPressureBar": [
			"cp-6151580250-official"
		],
		"connectorSize": [
			"cp-6151580250-official"
		],
		"recommendedHose": [
			"cp-6151580250-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 25 L/s × 60 = 1500 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
