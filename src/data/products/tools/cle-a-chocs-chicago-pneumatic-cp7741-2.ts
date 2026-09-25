const product = {
	"id": "chicago-pneumatic-cp7741-2",
	"slug": "cle-a-chocs-chicago-pneumatic-cp7741-2",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP7741-2",
	"brand": "Chicago Pneumatic",
	"model": "CP7741-2",
	"mpn": "8941077412",
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
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7741-2.webp",
		"alt": "Repères techniques CP7741-2 : 522 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp7741-2-sku8941077412",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7741-2, référence fabricant 8941077412, demande 522 L/min en charge (8,7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 10000 tr/min.",
			"Couple maximal en marche arrière : 970 Nm.",
			"Couple de travail maximal en marche avant : 690 Nm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 126 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "970 Nm",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "690 Nm",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "1/2",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.35 kg",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "245 mm",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "2.1 l/s",
			"evidenceIds": [
				"cp-8941077412-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941077412-official",
			"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp7741-2-sku8941077412",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7741-2, réf. 8941077412",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.7 L/s × 60 = 522 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941077412-official"
		],
		"airflowLpm": [
			"cp-8941077412-official"
		],
		"workingPressureBar": [
			"cp-8941077412-official"
		],
		"connectorSize": [
			"cp-8941077412-official"
		],
		"recommendedHose": [
			"cp-8941077412-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.7 L/s × 60 = 522 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
