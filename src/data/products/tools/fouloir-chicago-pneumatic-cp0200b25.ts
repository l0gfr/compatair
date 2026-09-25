const product = {
	"id": "chicago-pneumatic-cp0200b25",
	"slug": "fouloir-chicago-pneumatic-cp0200b25",
	"categoryId": "fouloir",
	"category": "Fouloir pneumatique",
	"label": "Fouloir pneumatique Chicago Pneumatic CP0200B25",
	"brand": "Chicago Pneumatic",
	"model": "CP0200B25",
	"mpn": "6151618050",
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
	"connectorSize": "Entrée 3/8 pouce, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0200b25.webp",
		"alt": "Repères techniques CP0200B25 : 660 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b25-sku6151618050",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0200B25, référence fabricant 6151618050, demande 660 L/min en charge (11 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 83 mm.",
		"verifiedFacts": [
			"Course : 83 mm.",
			"Poids de l’outil : 5.5 kg.",
			"Longueur de l’outil : 506 mm.",
			"Entrée d’air 3/8 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Course",
			"value": "83 mm",
			"evidenceIds": [
				"cp-6151618050-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "5.5 kg",
			"evidenceIds": [
				"cp-6151618050-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "506 mm",
			"evidenceIds": [
				"cp-6151618050-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151618050-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b25-sku6151618050",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0200B25, réf. 6151618050",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 11 L/s × 60 = 660 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151618050-official"
		],
		"airflowLpm": [
			"cp-6151618050-official"
		],
		"workingPressureBar": [
			"cp-6151618050-official"
		],
		"connectorSize": [
			"cp-6151618050-official"
		],
		"recommendedHose": [
			"cp-6151618050-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 11 L/s × 60 = 660 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
