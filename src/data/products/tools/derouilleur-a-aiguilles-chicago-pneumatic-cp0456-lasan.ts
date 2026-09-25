const product = {
	"id": "chicago-pneumatic-cp0456-lasan",
	"slug": "derouilleur-a-aiguilles-chicago-pneumatic-cp0456-lasan",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "Dérouilleur à aiguilles",
	"label": "Dérouilleur à aiguilles Chicago Pneumatic CP0456-LASAN",
	"brand": "Chicago Pneumatic",
	"model": "CP0456-LASAN",
	"mpn": "T013049",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0456-lasan.webp",
		"alt": "Repères techniques CP0456-LASAN : 396 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0456-lasan-skuT013049",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0456-LASAN, référence fabricant T013049, demande 396 L/min en charge (6,6 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 25.4 mm.",
		"verifiedFacts": [
			"Course : 25.4 mm.",
			"Poids de l’outil : 2.7 kg.",
			"Longueur de l’outil : 413 mm.",
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
			"value": "25.4 mm",
			"evidenceIds": [
				"cp-t013049-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.7 kg",
			"evidenceIds": [
				"cp-t013049-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "413 mm",
			"evidenceIds": [
				"cp-t013049-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t013049-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0456-lasan-skuT013049",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0456-LASAN, réf. T013049",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 6.6 L/s × 60 = 396 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t013049-official"
		],
		"airflowLpm": [
			"cp-t013049-official"
		],
		"workingPressureBar": [
			"cp-t013049-official"
		],
		"connectorSize": [
			"cp-t013049-official"
		],
		"recommendedHose": [
			"cp-t013049-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 6.6 L/s × 60 = 396 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
