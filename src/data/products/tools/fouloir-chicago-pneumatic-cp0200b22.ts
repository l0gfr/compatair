const product = {
	"id": "chicago-pneumatic-cp0200b22",
	"slug": "fouloir-chicago-pneumatic-cp0200b22",
	"categoryId": "fouloir",
	"category": "Fouloir pneumatique",
	"label": "Fouloir pneumatique Chicago Pneumatic CP0200B22",
	"brand": "Chicago Pneumatic",
	"model": "CP0200B22",
	"mpn": "6151618030",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 504,
		"typical": 504,
		"max": 504
	},
	"connectorSize": "Entrée 3/8 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0200b22.webp",
		"alt": "Repères techniques CP0200B22 : 504 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b22-sku6151618030",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0200B22, référence fabricant 6151618030, demande 504 L/min en charge (8,4 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 64 mm.",
		"verifiedFacts": [
			"Course : 64 mm.",
			"Poids de l’outil : 3 kg.",
			"Longueur de l’outil : 350 mm.",
			"Entrée d’air 3/8 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Course",
			"value": "64 mm",
			"evidenceIds": [
				"cp-6151618030-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "3 kg",
			"evidenceIds": [
				"cp-6151618030-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "350 mm",
			"evidenceIds": [
				"cp-6151618030-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151618030-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b22-sku6151618030",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0200B22, réf. 6151618030",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.4 L/s × 60 = 504 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151618030-official"
		],
		"airflowLpm": [
			"cp-6151618030-official"
		],
		"workingPressureBar": [
			"cp-6151618030-official"
		],
		"connectorSize": [
			"cp-6151618030-official"
		],
		"recommendedHose": [
			"cp-6151618030-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.4 L/s × 60 = 504 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
