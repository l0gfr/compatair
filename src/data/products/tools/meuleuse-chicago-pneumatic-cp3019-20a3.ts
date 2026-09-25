const product = {
	"id": "chicago-pneumatic-cp3019-20a3",
	"slug": "meuleuse-chicago-pneumatic-cp3019-20a3",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3019-20A3",
	"brand": "Chicago Pneumatic",
	"model": "CP3019-20A3",
	"mpn": "6151607070",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 8 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 8,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3019-20a3.webp",
		"alt": "Repères techniques CP3019-20A3 : 540 L/min en charge, 6,3 bar, flexible 8 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3019-20a3-sku6151607070",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3019-20A3, référence fabricant 6151607070, demande 540 L/min en charge (9 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 20000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 20000 tr/min.",
			"Puissance maximale de l’outil : 375 W.",
			"Filetage de sortie : 3/8-24 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 8 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 360 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "375 W",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "75",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.6 kg",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "163 mm",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "6 l/s",
			"evidenceIds": [
				"cp-6151607070-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151607070-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3019-20a3-sku6151607070",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3019-20A3, réf. 6151607070",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 9 L/s × 60 = 540 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151607070-official"
		],
		"airflowLpm": [
			"cp-6151607070-official"
		],
		"workingPressureBar": [
			"cp-6151607070-official"
		],
		"connectorSize": [
			"cp-6151607070-official"
		],
		"recommendedHose": [
			"cp-6151607070-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 9 L/s × 60 = 540 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
