const product = {
	"id": "chicago-pneumatic-cp0200b32l-2f",
	"slug": "fouloir-chicago-pneumatic-cp0200b32l-2f",
	"categoryId": "fouloir",
	"category": "Fouloir pneumatique",
	"label": "Fouloir pneumatique Chicago Pneumatic CP0200B32L-2F",
	"brand": "Chicago Pneumatic",
	"model": "CP0200B32L-2F",
	"mpn": "6151618140",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 780,
		"typical": 780,
		"max": 780
	},
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0200b32l-2f.webp",
		"alt": "Repères techniques CP0200B32L-2F : 780 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b32l-2f-sku6151618140",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0200B32L-2F, référence fabricant 6151618140, demande 780 L/min en charge (13 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 127 mm.",
		"verifiedFacts": [
			"Course : 127 mm.",
			"Poids de l’outil : 10 kg.",
			"Longueur de l’outil : 1087 mm.",
			"Entrée d’air 1/2 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Course",
			"value": "127 mm",
			"evidenceIds": [
				"cp-6151618140-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "10 kg",
			"evidenceIds": [
				"cp-6151618140-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "1087 mm",
			"evidenceIds": [
				"cp-6151618140-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151618140-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151618140-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0200b32l-2f-sku6151618140",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0200B32L-2F, réf. 6151618140",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 13 L/s × 60 = 780 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151618140-official"
		],
		"airflowLpm": [
			"cp-6151618140-official"
		],
		"workingPressureBar": [
			"cp-6151618140-official"
		],
		"connectorSize": [
			"cp-6151618140-official"
		],
		"recommendedHose": [
			"cp-6151618140-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 13 L/s × 60 = 780 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
