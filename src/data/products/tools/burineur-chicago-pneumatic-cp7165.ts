const product = {
	"id": "chicago-pneumatic-cp7165",
	"slug": "burineur-chicago-pneumatic-cp7165",
	"categoryId": "burineur",
	"category": "Burineur pneumatique",
	"label": "Burineur pneumatique Chicago Pneumatic CP7165",
	"brand": "Chicago Pneumatic",
	"model": "CP7165",
	"mpn": "8941071650",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 492,
		"typical": 492,
		"max": 492
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7165.webp",
		"alt": "Repères techniques CP7165 : 492 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7165-sku8941071650",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7165, référence fabricant 8941071650, demande 492 L/min en charge (8,2 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 89 mm.",
		"verifiedFacts": [
			"Course : 89 mm.",
			"Poids de l’outil : 2.19 kg.",
			"Longueur de l’outil : 240 mm.",
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
				"cp-8941071650-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.19 kg",
			"evidenceIds": [
				"cp-8941071650-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "240 mm",
			"evidenceIds": [
				"cp-8941071650-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941071650-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp7165-sku8941071650",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7165, réf. 8941071650",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.2 L/s × 60 = 492 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941071650-official"
		],
		"airflowLpm": [
			"cp-8941071650-official"
		],
		"workingPressureBar": [
			"cp-8941071650-official"
		],
		"connectorSize": [
			"cp-8941071650-official"
		],
		"recommendedHose": [
			"cp-8941071650-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.2 L/s × 60 = 492 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
