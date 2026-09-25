const product = {
	"id": "chicago-pneumatic-cp3750-085ab",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3750-085ab",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3750-085AB",
	"brand": "Chicago Pneumatic",
	"model": "CP3750-085AB",
	"mpn": "6151620400",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 2100,
		"typical": 2100,
		"max": 2100
	},
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 16 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 16,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3750-085ab.webp",
		"alt": "Repères techniques CP3750-085AB : 2 100 L/min en charge, 6,3 bar, flexible 16 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3750-085ab-sku6151620400",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3750-085AB, référence fabricant 6151620400, demande 2 100 L/min en charge (35 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 8500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 8500 tr/min.",
			"Puissance maximale de l’outil : 1638 W.",
			"Filetage de sortie : 5/8-11 UNC.",
			"Entrée d’air 1/2 pouce ; flexible de 16 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 1 080 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "1638 W",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "180",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "180",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.3 kg",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "313 mm",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "18 l/s",
			"evidenceIds": [
				"cp-6151620400-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151620400-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3750-085ab-sku6151620400",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3750-085AB, réf. 6151620400",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 35 L/s × 60 = 2100 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151620400-official"
		],
		"airflowLpm": [
			"cp-6151620400-official"
		],
		"workingPressureBar": [
			"cp-6151620400-official"
		],
		"connectorSize": [
			"cp-6151620400-official"
		],
		"recommendedHose": [
			"cp-6151620400-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 35 L/s × 60 = 2100 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
