const product = {
	"id": "chicago-pneumatic-cp0200b18",
	"slug": "fouloir-chicago-pneumatic-cp0200b18",
	"categoryId": "fouloir",
	"category": "Fouloir pneumatique",
	"label": "Fouloir pneumatique Chicago Pneumatic CP0200B18",
	"brand": "Chicago Pneumatic",
	"model": "CP0200B18",
	"mpn": "6151618010",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 402,
		"typical": 402,
		"max": 402
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0200b18.webp",
		"alt": "Repères techniques CP0200B18 : 402 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b18-sku6151618010",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0200B18, référence fabricant 6151618010, demande 402 L/min en charge (6,7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 50 mm.",
		"verifiedFacts": [
			"Course : 50 mm.",
			"Poids de l’outil : 1.5 kg.",
			"Longueur de l’outil : 280 mm.",
			"Entrée d’air 1/4 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Course",
			"value": "50 mm",
			"evidenceIds": [
				"cp-6151618010-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.5 kg",
			"evidenceIds": [
				"cp-6151618010-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "280 mm",
			"evidenceIds": [
				"cp-6151618010-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151618010-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b18-sku6151618010",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0200B18, réf. 6151618010",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 6.7 L/s × 60 = 402 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151618010-official"
		],
		"airflowLpm": [
			"cp-6151618010-official"
		],
		"workingPressureBar": [
			"cp-6151618010-official"
		],
		"connectorSize": [
			"cp-6151618010-official"
		],
		"recommendedHose": [
			"cp-6151618010-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 6.7 L/s × 60 = 402 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
