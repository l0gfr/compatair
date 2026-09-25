const product = {
	"id": "chicago-pneumatic-cp1820r32",
	"slug": "perceuse-chicago-pneumatic-cp1820r32",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Chicago Pneumatic CP1820R32",
	"brand": "Chicago Pneumatic",
	"model": "CP1820R32",
	"mpn": "6151580290",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 3180,
		"typical": 3180,
		"max": 3180
	},
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 19 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 19,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp1820r32.webp",
		"alt": "Repères techniques CP1820R32 : 3 180 L/min en charge, 6,3 bar, flexible 19 mm",
		"sourceUrl": "https://tools.cp.com/en/products/drills/cp1820r32-sku6151580290",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP1820R32, référence fabricant 6151580290, demande 3 180 L/min en charge (53 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 380 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 380 tr/min.",
			"Puissance maximale de l’outil : 2100 W.",
			"Couple de calage : 196 Nm.",
			"Entrée d’air 1/2 pouce ; flexible de 19 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "380 tr/min",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "2100 W",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Couple de calage",
			"value": "196 Nm",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Capacité maximale du mandrin (mm)",
			"value": "32",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Type de mandrin",
			"value": "Morse taper 3",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "14.5 kg",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "353 mm",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-6151580290-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-6151580290-official",
			"sourceUrl": "https://tools.cp.com/en/products/drills/cp1820r32-sku6151580290",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP1820R32, réf. 6151580290",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 53 L/s × 60 = 3180 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-6151580290-official"
		],
		"airflowLpm": [
			"cp-6151580290-official"
		],
		"workingPressureBar": [
			"cp-6151580290-official"
		],
		"connectorSize": [
			"cp-6151580290-official"
		],
		"recommendedHose": [
			"cp-6151580290-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 53 L/s × 60 = 3180 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
