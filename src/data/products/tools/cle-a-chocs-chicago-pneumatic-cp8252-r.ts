const product = {
	"id": "chicago-pneumatic-cp8252-r",
	"slug": "cle-a-chocs-chicago-pneumatic-cp8252-r",
	"categoryId": "cle-a-chocs",
	"category": "Clé à chocs",
	"label": "Clé à chocs Chicago Pneumatic CP8252-R",
	"brand": "Chicago Pneumatic",
	"model": "CP8252-R",
	"mpn": "6151590250",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 720,
		"typical": 720,
		"max": 720
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "burst",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp8252-r.webp",
		"alt": "Repères techniques CP8252-R : 720 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp8252-r-sku6151590250",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP8252-R, référence fabricant 6151590250, demande 720 L/min en charge (12 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 9000 tr/min.",
			"Couple maximal en marche arrière : 950 Nm.",
			"Couple de travail maximal en marche avant : 750 Nm.",
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
			"value": "9000 tr/min",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "950 Nm",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		},
		{
			"label": "Couple de travail maximal en marche avant",
			"value": "750 Nm",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "1/2",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2 kg",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "200 mm",
			"evidenceIds": [
				"cp-6151590250-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151590250-official",
			"sourceUrl": "https://tools.cp.com/en/products/impactwrenches/cp8252-r-sku6151590250",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP8252-R, réf. 6151590250",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 12 L/s × 60 = 720 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151590250-official"
		],
		"airflowLpm": [
			"cp-6151590250-official"
		],
		"workingPressureBar": [
			"cp-6151590250-official"
		],
		"connectorSize": [
			"cp-6151590250-official"
		],
		"recommendedHose": [
			"cp-6151590250-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 12 L/s × 60 = 720 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
