const product = {
	"id": "chicago-pneumatic-cp9361",
	"slug": "graveur-chicago-pneumatic-cp9361",
	"categoryId": "graveur",
	"category": "Graveur pneumatique",
	"label": "Graveur pneumatique Chicago Pneumatic CP9361",
	"brand": "Chicago Pneumatic",
	"model": "CP9361",
	"mpn": "T012644",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 5 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 5,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp9361.webp",
		"alt": "Repères techniques CP9361 : 6 L/min en charge, 6,3 bar, flexible 5 mm",
		"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp9361-skuT012644",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP9361, référence fabricant T012644, demande 6 L/min en charge (0,1 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Poids de l’outil : 0.14 kg.",
		"verifiedFacts": [
			"Poids de l’outil : 0.14 kg.",
			"Longueur de l’outil : 127 mm.",
			"Entrée d’air 1/4 pouce ; flexible de 5 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Poids de l’outil",
			"value": "0.14 kg",
			"evidenceIds": [
				"cp-t012644-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "127 mm",
			"evidenceIds": [
				"cp-t012644-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t012644-official",
			"sourceUrl": "https://tools.cp.com/en/products/percussivetools/cp9361-skuT012644",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP9361, réf. T012644",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 0.1 L/s × 60 = 6 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t012644-official"
		],
		"airflowLpm": [
			"cp-t012644-official"
		],
		"workingPressureBar": [
			"cp-t012644-official"
		],
		"connectorSize": [
			"cp-t012644-official"
		],
		"recommendedHose": [
			"cp-t012644-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 0.1 L/s × 60 = 6 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
