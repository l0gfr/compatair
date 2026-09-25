const product = {
	"id": "chicago-pneumatic-cp7405",
	"slug": "meuleuse-chicago-pneumatic-cp7405",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Chicago Pneumatic CP7405",
	"brand": "Chicago Pneumatic",
	"model": "CP7405",
	"mpn": "8941074050",
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
		"src": "/images/products/chicago-pneumatic-cp7405.webp",
		"alt": "Repères techniques CP7405 : 60 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7405-sku8941074050",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7405, référence fabricant 8941074050, demande 60 L/min en charge (1 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 28000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 28000 tr/min.",
			"Puissance maximale de l’outil : 250 W.",
			"Capacité de la pince : 1/4 (6.4mm).",
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
			"value": "28000 tr/min",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "250 W",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Capacité de la pince",
			"value": "1/4 (6.4mm)",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.5 kg",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "176 mm",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Forme de la tête",
			"value": "Droite",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "1.3 l/s",
			"evidenceIds": [
				"cp-8941074050-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941074050-official",
			"sourceUrl": "https://tools.cp.com/en/products/grinders/cp7405-sku8941074050",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7405, réf. 8941074050",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 1 L/s × 60 = 60 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941074050-official"
		],
		"airflowLpm": [
			"cp-8941074050-official"
		],
		"workingPressureBar": [
			"cp-8941074050-official"
		],
		"connectorSize": [
			"cp-8941074050-official"
		],
		"recommendedHose": [
			"cp-8941074050-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 1 L/s × 60 = 60 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
