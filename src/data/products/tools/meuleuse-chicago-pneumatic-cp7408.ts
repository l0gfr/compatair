const product = {
	"id": "chicago-pneumatic-cp7408",
	"slug": "meuleuse-chicago-pneumatic-cp7408",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP7408",
	"brand": "Chicago Pneumatic",
	"model": "CP7408",
	"mpn": "8941074080",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 60,
		"typical": 60,
		"max": 60
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7408.webp",
		"alt": "Repères techniques CP7408 : 60 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7408-sku8941074080",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7408, référence fabricant 8941074080, demande 60 L/min en charge (1 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 23000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 23000 tr/min.",
			"Puissance maximale de l’outil : 250 W.",
			"Capacité de la pince : 1/4 (6.35mm).",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 78 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "23000 tr/min",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "250 W",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Capacité de la pince",
			"value": "1/4 (6.35mm)",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.62 kg",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "195 mm",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Forme de la tête",
			"value": "120°",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "1.3 l/s",
			"evidenceIds": [
				"cp-8941074080-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941074080-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7408-sku8941074080",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7408, réf. 8941074080",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 1 L/s × 60 = 60 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941074080-official"
		],
		"airflowLpm": [
			"cp-8941074080-official"
		],
		"workingPressureBar": [
			"cp-8941074080-official"
		],
		"connectorSize": [
			"cp-8941074080-official"
		],
		"recommendedHose": [
			"cp-8941074080-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 1 L/s × 60 = 60 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
