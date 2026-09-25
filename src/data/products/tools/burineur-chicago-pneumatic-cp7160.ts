const product = {
	"id": "chicago-pneumatic-cp7160",
	"slug": "burineur-chicago-pneumatic-cp7160",
	"categoryId": "burineur",
	"category": "Burineur pneumatique",
	"label": "Burineur pneumatique Chicago Pneumatic CP7160",
	"brand": "Chicago Pneumatic",
	"model": "CP7160",
	"mpn": "8941071600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 522,
		"typical": 522,
		"max": 522
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7160.webp",
		"alt": "Repères techniques CP7160 : 522 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7160-sku8941071600",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7160, référence fabricant 8941071600, demande 522 L/min en charge (8,7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 67 mm.",
		"verifiedFacts": [
			"Course : 67 mm.",
			"Poids de l’outil : 1.88 kg.",
			"Longueur de l’outil : 191 mm.",
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
			"value": "67 mm",
			"evidenceIds": [
				"cp-8941071600-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.88 kg",
			"evidenceIds": [
				"cp-8941071600-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "191 mm",
			"evidenceIds": [
				"cp-8941071600-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941071600-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7160-sku8941071600",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7160, réf. 8941071600",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.7 L/s × 60 = 522 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941071600-official"
		],
		"airflowLpm": [
			"cp-8941071600-official"
		],
		"workingPressureBar": [
			"cp-8941071600-official"
		],
		"connectorSize": [
			"cp-8941071600-official"
		],
		"recommendedHose": [
			"cp-8941071600-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.7 L/s × 60 = 522 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
