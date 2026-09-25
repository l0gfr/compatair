const product = {
	"id": "chicago-pneumatic-cp3030-515afr",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3030-515afr",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3030-515AFR",
	"brand": "Chicago Pneumatic",
	"model": "CP3030-515AFR",
	"mpn": "6151620100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 582,
		"typical": 582,
		"max": 582
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3030-515afr.webp",
		"alt": "Repères techniques CP3030-515AFR : 582 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3030-515afr-sku6151620100",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3030-515AFR, référence fabricant 6151620100, demande 582 L/min en charge (9,7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 15000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 15000 tr/min.",
			"Puissance maximale de l’outil : 500 W.",
			"Filetage de sortie : 3/8-24 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 660 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "15000 tr/min",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "500 W",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "75",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.85 kg",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "174 mm",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "11 l/s",
			"evidenceIds": [
				"cp-6151620100-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151620100-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3030-515afr-sku6151620100",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3030-515AFR, réf. 6151620100",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 9.7 L/s × 60 = 582 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151620100-official"
		],
		"airflowLpm": [
			"cp-6151620100-official"
		],
		"workingPressureBar": [
			"cp-6151620100-official"
		],
		"connectorSize": [
			"cp-6151620100-official"
		],
		"recommendedHose": [
			"cp-6151620100-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 9.7 L/s × 60 = 582 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
