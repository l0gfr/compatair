const product = {
	"id": "chicago-pneumatic-cp7412",
	"slug": "meuleuse-chicago-pneumatic-cp7412",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP7412",
	"brand": "Chicago Pneumatic",
	"model": "CP7412",
	"mpn": "8941074120",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 84,
		"typical": 84,
		"max": 84
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7412.webp",
		"alt": "Repères techniques CP7412 : 84 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7412-sku8941074120",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7412, référence fabricant 8941074120, demande 84 L/min en charge (1,4 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 22000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 22000 tr/min.",
			"Puissance maximale de l’outil : 420 W.",
			"Capacité de la pince : 1/4 (6.4mm).",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 102 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "22000 tr/min",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "420 W",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Capacité de la pince",
			"value": "1/4 (6.4mm)",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.1 kg",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "330 mm",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Forme de la tête",
			"value": "Droite",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "1.7 l/s",
			"evidenceIds": [
				"cp-8941074120-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941074120-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7412-sku8941074120",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7412, réf. 8941074120",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 1.4 L/s × 60 = 84 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941074120-official"
		],
		"airflowLpm": [
			"cp-8941074120-official"
		],
		"workingPressureBar": [
			"cp-8941074120-official"
		],
		"connectorSize": [
			"cp-8941074120-official"
		],
		"recommendedHose": [
			"cp-8941074120-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 1.4 L/s × 60 = 84 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
