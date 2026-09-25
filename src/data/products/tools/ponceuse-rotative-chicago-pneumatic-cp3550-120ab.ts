const product = {
	"id": "chicago-pneumatic-cp3550-120ab",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3550-120ab",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3550-120AB",
	"brand": "Chicago Pneumatic",
	"model": "CP3550-120AB",
	"mpn": "6151620370",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	},
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 13 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 13,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3550-120ab.webp",
		"alt": "Repères techniques CP3550-120AB : 1 020 L/min en charge, 6,3 bar, flexible 13 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3550-120ab-sku6151620370",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3550-120AB, référence fabricant 6151620370, demande 1 020 L/min en charge (17 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 1100 W.",
			"Filetage de sortie : 5/8-11 UNC.",
			"Entrée d’air 3/8 pouce ; flexible de 13 mm de diamètre intérieur pour une longueur de 5 m."
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
			"value": "12000 tr/min",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "1100 W",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-11 UNC",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "125",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.5 kg",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "249 mm",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "26 l/s",
			"evidenceIds": [
				"cp-6151620370-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151620370-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3550-120ab-sku6151620370",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3550-120AB, réf. 6151620370",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 17 L/s × 60 = 1020 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151620370-official"
		],
		"airflowLpm": [
			"cp-6151620370-official"
		],
		"workingPressureBar": [
			"cp-6151620370-official"
		],
		"connectorSize": [
			"cp-6151620370-official"
		],
		"recommendedHose": [
			"cp-6151620370-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 17 L/s × 60 = 1020 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
