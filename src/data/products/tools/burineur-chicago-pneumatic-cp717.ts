const product = {
	"id": "chicago-pneumatic-cp717",
	"slug": "burineur-chicago-pneumatic-cp717",
	"categoryId": "burineur",
	"category": "Burineur pneumatique",
	"label": "Burineur pneumatique Chicago Pneumatic CP717",
	"brand": "Chicago Pneumatic",
	"model": "CP717",
	"mpn": "T020120",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 354,
		"typical": 354,
		"max": 354
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp717.webp",
		"alt": "Repères techniques CP717 : 354 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp717-skuT020120",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP717, référence fabricant T020120, demande 354 L/min en charge (5,9 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 68 mm.",
		"verifiedFacts": [
			"Course : 68 mm.",
			"Poids de l’outil : 2.15 kg.",
			"Longueur de l’outil : 190 mm.",
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
			"value": "68 mm",
			"evidenceIds": [
				"cp-t020120-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.15 kg",
			"evidenceIds": [
				"cp-t020120-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "190 mm",
			"evidenceIds": [
				"cp-t020120-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t020120-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp717-skuT020120",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP717, réf. T020120",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 5.9 L/s × 60 = 354 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t020120-official"
		],
		"airflowLpm": [
			"cp-t020120-official"
		],
		"workingPressureBar": [
			"cp-t020120-official"
		],
		"connectorSize": [
			"cp-t020120-official"
		],
		"recommendedHose": [
			"cp-t020120-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 5.9 L/s × 60 = 354 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
