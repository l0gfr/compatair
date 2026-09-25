const product = {
	"id": "chicago-pneumatic-cp3550-180",
	"slug": "meuleuse-chicago-pneumatic-cp3550-180",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3550-180",
	"brand": "Chicago Pneumatic",
	"model": "CP3550-180",
	"mpn": "6151600630",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1560,
		"typical": 1560,
		"max": 1560
	},
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3550-180.webp",
		"alt": "Repères techniques CP3550-180 : 1 560 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3550-180-sku6151600630",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3550-180, référence fabricant 6151600630, demande 1 560 L/min en charge (26 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 18000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 18000 tr/min.",
			"Puissance maximale de l’outil : 1100 W.",
			"Capacité de la pince : 1/4 (6.35mm).",
			"Entrée d’air 3/8 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 1 020 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18000 tr/min",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "1100 W",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Capacité de la pince",
			"value": "1/4 (6.35mm)",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Type de pince",
			"value": "Erickson serie 200 type",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.2 kg",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "248 mm",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Forme de la tête",
			"value": "90°",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "17 l/s",
			"evidenceIds": [
				"cp-6151600630-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151600630-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3550-180-sku6151600630",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3550-180, réf. 6151600630",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 26 L/s × 60 = 1560 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151600630-official"
		],
		"airflowLpm": [
			"cp-6151600630-official"
		],
		"workingPressureBar": [
			"cp-6151600630-official"
		],
		"connectorSize": [
			"cp-6151600630-official"
		],
		"recommendedHose": [
			"cp-6151600630-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 26 L/s × 60 = 1560 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
