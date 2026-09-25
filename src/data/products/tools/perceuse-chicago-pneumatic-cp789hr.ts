const product = {
	"id": "chicago-pneumatic-cp789hr",
	"slug": "perceuse-chicago-pneumatic-cp789hr",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP789HR",
	"brand": "Chicago Pneumatic",
	"model": "CP789HR",
	"mpn": "T025165",
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
		"src": "/images/products/chicago-pneumatic-cp789hr.webp",
		"alt": "Repères techniques CP789HR : 840 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp789hr-skuT025165",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP789HR, référence fabricant T025165, demande 840 L/min en charge (14 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 500 tr/min.",
			"Puissance maximale de l’outil : 320 W.",
			"Couple de calage : 21.1 Nm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 900 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "320 W",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "21.1 Nm",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "13",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "À clé",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.47 kg",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "203 mm",
			"evidenceIds": [
				"cp-t025165-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "15 l/s",
			"evidenceIds": [
				"cp-t025165-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t025165-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp789hr-skuT025165",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP789HR, réf. T025165",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 14 L/s × 60 = 840 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t025165-official"
		],
		"airflowLpm": [
			"cp-t025165-official"
		],
		"workingPressureBar": [
			"cp-t025165-official"
		],
		"connectorSize": [
			"cp-t025165-official"
		],
		"recommendedHose": [
			"cp-t025165-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 14 L/s × 60 = 840 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
