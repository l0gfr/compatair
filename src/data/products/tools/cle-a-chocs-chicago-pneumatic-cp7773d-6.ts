const product = {
	"id": "chicago-pneumatic-cp7773d-6",
	"slug": "cle-a-chocs-chicago-pneumatic-cp7773d-6",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP7773D-6",
	"brand": "Chicago Pneumatic",
	"model": "CP7773D-6",
	"mpn": "8941077737",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1140,
		"typical": 1140,
		"max": 1140
	},
	"connectorSize": "Entrée 1/2 pouce, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7773d-6.webp",
		"alt": "Repères techniques CP7773D-6 : 1 140 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp7773d-6-sku8941077737",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7773D-6, référence fabricant 8941077737, demande 1 140 L/min en charge (19 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 6600 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 6600 tr/min.",
			"Couple maximal en marche arrière : 1760 Nm.",
			"Couple de travail maximal en marche avant : 1450 Nm.",
			"Entrée d’air 1/2 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 1 560 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "6600 tr/min",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "1760 Nm",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "1450 Nm",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "1",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "7.4 kg",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "445 mm",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "26 l/s",
			"evidenceIds": [
				"cp-8941077737-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941077737-official",
			"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp7773d-6-sku8941077737",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7773D-6, réf. 8941077737",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 19 L/s × 60 = 1140 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941077737-official"
		],
		"airflowLpm": [
			"cp-8941077737-official"
		],
		"workingPressureBar": [
			"cp-8941077737-official"
		],
		"connectorSize": [
			"cp-8941077737-official"
		],
		"recommendedHose": [
			"cp-8941077737-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 19 L/s × 60 = 1140 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
