const product = {
	"id": "chicago-pneumatic-cp3319-salavise",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp3319-salavise",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP3319-SALAVISE",
	"brand": "Chicago Pneumatic",
	"model": "CP3319-SALAVISE",
	"mpn": "6151700220",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"connectorSize": "Entrée 3/8 pouce BSP, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp3319-salavise.webp",
		"alt": "Repères techniques CP3319-SALAVISE : 960 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3319-salavise-sku6151700220",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP3319-SALAVISE, référence fabricant 6151700220, demande 960 L/min en charge (16 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 750 W.",
			"Filetage de sortie : M14x2.",
			"Entrée d’air 3/8 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 960 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "750 W",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14x2",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "230",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.3 kg",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "200 mm",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "BSP",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "16 l/s",
			"evidenceIds": [
				"cp-6151700220-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151700220-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp3319-salavise-sku6151700220",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP3319-SALAVISE, réf. 6151700220",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 16 L/s × 60 = 960 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151700220-official"
		],
		"airflowLpm": [
			"cp-6151700220-official"
		],
		"workingPressureBar": [
			"cp-6151700220-official"
		],
		"connectorSize": [
			"cp-6151700220-official"
		],
		"recommendedHose": [
			"cp-6151700220-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 16 L/s × 60 = 960 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
