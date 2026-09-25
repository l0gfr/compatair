const product = {
	"id": "chicago-pneumatic-cp1117p05-atex",
	"slug": "perceuse-chicago-pneumatic-cp1117p05-atex",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1117P05 ATEX",
	"brand": "Chicago Pneumatic",
	"model": "CP1117P05 ATEX",
	"mpn": "6151580350",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1117p05-atex.webp",
		"alt": "Repères techniques CP1117P05 ATEX : 840 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1117p05-atex-sku6151580350",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1117P05 ATEX, référence fabricant 6151580350, demande 840 L/min en charge (14 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 500 tr/min.",
			"Puissance maximale de l’outil : 750 W.",
			"Couple de calage : 30 Nm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 960 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "30 Nm",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "13",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "À clé",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.25 kg",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "268.3 mm",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "16 l/s",
			"evidenceIds": [
				"cp-6151580350-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580350-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1117p05-atex-sku6151580350",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1117P05 ATEX, réf. 6151580350",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 14 L/s × 60 = 840 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151580350-official"
		],
		"airflowLpm": [
			"cp-6151580350-official"
		],
		"workingPressureBar": [
			"cp-6151580350-official"
		],
		"connectorSize": [
			"cp-6151580350-official"
		],
		"recommendedHose": [
			"cp-6151580350-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 14 L/s × 60 = 840 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
