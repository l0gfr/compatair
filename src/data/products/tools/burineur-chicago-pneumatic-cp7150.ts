const product = {
	"id": "chicago-pneumatic-cp7150",
	"slug": "burineur-chicago-pneumatic-cp7150",
	"categoryId": "burineur",
	"category": "Burineur pneumatique",
	"label": "Burineur pneumatique Chicago Pneumatic CP7150",
	"brand": "Chicago Pneumatic",
	"model": "CP7150",
	"mpn": "8941071500",
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
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7150.webp",
		"alt": "Repères techniques CP7150 : 660 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7150-sku8941071500",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7150, référence fabricant 8941071500, demande 660 L/min en charge (11 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 89 mm.",
		"verifiedFacts": [
			"Course : 89 mm.",
			"Poids de l’outil : 2.2 kg.",
			"Longueur de l’outil : 225 mm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Course",
			"value": "89 mm",
			"evidenceIds": [
				"cp-8941071500-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.2 kg",
			"evidenceIds": [
				"cp-8941071500-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "225 mm",
			"evidenceIds": [
				"cp-8941071500-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941071500-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7150-sku8941071500",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7150, réf. 8941071500",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 11 L/s × 60 = 660 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941071500-official"
		],
		"airflowLpm": [
			"cp-8941071500-official"
		],
		"workingPressureBar": [
			"cp-8941071500-official"
		],
		"connectorSize": [
			"cp-8941071500-official"
		],
		"recommendedHose": [
			"cp-8941071500-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 11 L/s × 60 = 660 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
