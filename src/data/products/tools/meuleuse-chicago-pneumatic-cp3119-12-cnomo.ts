const product = {
	"id": "chicago-pneumatic-cp3119-12-cnomo",
	"slug": "meuleuse-chicago-pneumatic-cp3119-12-cnomo",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP3119-12 CNOMO",
	"brand": "Chicago Pneumatic",
	"model": "CP3119-12 CNOMO",
	"mpn": "6151600380",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"connectorSize": "Entrée 3/8 pouce BSP, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3119-12-cnomo.webp",
		"alt": "Repères techniques CP3119-12 CNOMO : 960 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3119-12-cnomo-sku6151600380",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3119-12 CNOMO, référence fabricant 6151600380, demande 960 L/min en charge (16 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 900 W.",
			"Capacité de la pince : 15/64 (6.0mm).",
			"Entrée d’air 3/8 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
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
			"value": "12000 tr/min",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "900 W",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Capacité de la pince",
			"value": "15/64 (6.0mm)",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Type de pince",
			"value": "Type CNOMO",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1 kg",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "222 mm",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Forme de la tête",
			"value": "Droite",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "BSP",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "6 l/s",
			"evidenceIds": [
				"cp-6151600380-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151600380-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp3119-12-cnomo-sku6151600380",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3119-12 CNOMO, réf. 6151600380",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 16 L/s × 60 = 960 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151600380-official"
		],
		"airflowLpm": [
			"cp-6151600380-official"
		],
		"workingPressureBar": [
			"cp-6151600380-official"
		],
		"connectorSize": [
			"cp-6151600380-official"
		],
		"recommendedHose": [
			"cp-6151600380-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 16 L/s × 60 = 960 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
