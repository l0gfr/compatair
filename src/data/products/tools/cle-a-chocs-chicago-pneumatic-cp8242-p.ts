const product = {
	"id": "chicago-pneumatic-cp8242-p",
	"slug": "cle-a-chocs-chicago-pneumatic-cp8242-p",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP8242-P",
	"brand": "Chicago Pneumatic",
	"model": "CP8242-P",
	"mpn": "6151590200",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp8242-p.webp",
		"alt": "Repères techniques CP8242-P : 600 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp8242-p-sku6151590200",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP8242-P, référence fabricant 6151590200, demande 600 L/min en charge (10 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 11500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 11500 tr/min.",
			"Couple maximal en marche arrière : 550 Nm.",
			"Couple de travail maximal en marche avant : 400 Nm.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11500 tr/min",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "550 Nm",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "400 Nm",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "1/2",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.2 kg",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "177 mm",
			"evidenceIds": [
				"cp-6151590200-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151590200-official",
			"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp8242-p-sku6151590200",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP8242-P, réf. 6151590200",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 10 L/s × 60 = 600 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151590200-official"
		],
		"airflowLpm": [
			"cp-6151590200-official"
		],
		"workingPressureBar": [
			"cp-6151590200-official"
		],
		"connectorSize": [
			"cp-6151590200-official"
		],
		"recommendedHose": [
			"cp-6151590200-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 10 L/s × 60 = 600 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
