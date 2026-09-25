const product = {
	"id": "chicago-pneumatic-cp854e",
	"slug": "meuleuse-chicago-pneumatic-cp854e",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP854E",
	"brand": "Chicago Pneumatic",
	"model": "CP854E",
	"mpn": "T023187",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 456,
		"typical": 456,
		"max": 456
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp854e.webp",
		"alt": "Repères techniques CP854E : 456 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp854e-skuT023187",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP854E, référence fabricant T023187, demande 456 L/min en charge (7,6 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 525 W.",
			"Diamètre du disque (mm) : 125.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 450 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "525 W",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "125",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.7 kg",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "229 mm",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-t023187-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "7.5 l/s",
			"evidenceIds": [
				"cp-t023187-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t023187-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp854e-skuT023187",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP854E, réf. T023187",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 7.6 L/s × 60 = 456 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t023187-official"
		],
		"airflowLpm": [
			"cp-t023187-official"
		],
		"workingPressureBar": [
			"cp-t023187-official"
		],
		"connectorSize": [
			"cp-t023187-official"
		],
		"recommendedHose": [
			"cp-t023187-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 7.6 L/s × 60 = 456 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
