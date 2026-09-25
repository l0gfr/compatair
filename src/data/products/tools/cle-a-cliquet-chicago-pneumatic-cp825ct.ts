const product = {
	"id": "chicago-pneumatic-cp825ct",
	"slug": "cle-a-cliquet-chicago-pneumatic-cp825ct",
	"categoryId": "cle-a-cliquet",
	"category": "Clé à cliquet pneumatique",
	"label": "Clé à cliquet pneumatique Chicago Pneumatic CP825CT",
	"brand": "Chicago Pneumatic",
	"model": "CP825CT",
	"mpn": "8941082512",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 306,
		"typical": 306,
		"max": 306
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp825ct.webp",
		"alt": "Repères techniques CP825CT : 306 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/ratchetwrenches/cp825ct-sku8941082512",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP825CT, référence fabricant 8941082512, demande 306 L/min en charge (5,1 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 280 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 280 tr/min.",
			"Couple maximal en marche arrière : 35 Nm.",
			"Taille de l’entraînement (pouces) : 3/8.",
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
			"value": "280 tr/min",
			"evidenceIds": [
				"cp-8941082512-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "35 Nm",
			"evidenceIds": [
				"cp-8941082512-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "3/8",
			"evidenceIds": [
				"cp-8941082512-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.5 kg",
			"evidenceIds": [
				"cp-8941082512-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "169 mm",
			"evidenceIds": [
				"cp-8941082512-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941082512-official",
			"sourceUrl": "https://tools.cp.com/en/products/ratchetwrenches/cp825ct-sku8941082512",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP825CT, réf. 8941082512",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 5.1 L/s × 60 = 306 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941082512-official"
		],
		"airflowLpm": [
			"cp-8941082512-official"
		],
		"workingPressureBar": [
			"cp-8941082512-official"
		],
		"connectorSize": [
			"cp-8941082512-official"
		],
		"recommendedHose": [
			"cp-8941082512-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 5.1 L/s × 60 = 306 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
