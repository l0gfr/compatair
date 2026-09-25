const product = {
	"id": "chicago-pneumatic-cp1114r05",
	"slug": "perceuse-chicago-pneumatic-cp1114r05",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1114R05",
	"brand": "Chicago Pneumatic",
	"model": "CP1114R05",
	"mpn": "6151580310",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1114r05.webp",
		"alt": "Repères techniques CP1114R05 : 720 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1114r05-sku6151580310",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1114R05, référence fabricant 6151580310, demande 720 L/min en charge (12 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 500 tr/min.",
			"Puissance maximale de l’outil : 410 W.",
			"Couple de calage : 25.2 Nm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 900 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "410 W",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "25.2 Nm",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "13",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "À clé",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.3 kg",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "215 mm",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "15 l/s",
			"evidenceIds": [
				"cp-6151580310-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580310-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1114r05-sku6151580310",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1114R05, réf. 6151580310",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 12 L/s × 60 = 720 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151580310-official"
		],
		"airflowLpm": [
			"cp-6151580310-official"
		],
		"workingPressureBar": [
			"cp-6151580310-official"
		],
		"connectorSize": [
			"cp-6151580310-official"
		],
		"recommendedHose": [
			"cp-6151580310-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 12 L/s × 60 = 720 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
