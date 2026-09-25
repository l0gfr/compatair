const product = {
	"id": "chicago-pneumatic-cp0456-lesar",
	"slug": "derouilleur-a-aiguilles-chicago-pneumatic-cp0456-lesar",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "Dérouilleur à aiguilles",
	"label": "Dérouilleur à aiguilles Chicago Pneumatic CP0456-LESAR",
	"brand": "Chicago Pneumatic",
	"model": "CP0456-LESAR",
	"mpn": "T013046",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 282,
		"typical": 282,
		"max": 282
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp0456-lesar.webp",
		"alt": "Repères techniques CP0456-LESAR : 282 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0456-lesar-skuT013046",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP0456-LESAR, référence fabricant T013046, demande 282 L/min en charge (4,7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Course : 25.4 mm.",
		"verifiedFacts": [
			"Course : 25.4 mm.",
			"Poids de l’outil : 1.6 kg.",
			"Longueur de l’outil : 219 mm.",
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
				"cp-t013046-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.6 kg",
			"evidenceIds": [
				"cp-t013046-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "219 mm",
			"evidenceIds": [
				"cp-t013046-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t013046-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp0456-lesar-skuT013046",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP0456-LESAR, réf. T013046",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 4.7 L/s × 60 = 282 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t013046-official"
		],
		"airflowLpm": [
			"cp-t013046-official"
		],
		"workingPressureBar": [
			"cp-t013046-official"
		],
		"connectorSize": [
			"cp-t013046-official"
		],
		"recommendedHose": [
			"cp-t013046-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 4.7 L/s × 60 = 282 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
