const product = {
	"id": "chicago-pneumatic-cp7201",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp7201",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP7201",
	"brand": "Chicago Pneumatic",
	"model": "CP7201",
	"mpn": "8941072014",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7201.webp",
		"alt": "Repères techniques CP7201 : 510 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7201-sku8941072014",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7201, référence fabricant 8941072014, demande 510 L/min en charge (8,5 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 2500 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 2500 tr/min.",
			"Filetage de sortie : 1/4-20 UNC.",
			"Diamètre du plateau (mm) : 75.",
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
			"value": "2500 tr/min",
			"evidenceIds": [
				"cp-8941072014-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4-20 UNC",
			"evidenceIds": [
				"cp-8941072014-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "75",
			"evidenceIds": [
				"cp-8941072014-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1 kg",
			"evidenceIds": [
				"cp-8941072014-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941072014-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7201-sku8941072014",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7201, réf. 8941072014",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.5 L/s × 60 = 510 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941072014-official"
		],
		"airflowLpm": [
			"cp-8941072014-official"
		],
		"workingPressureBar": [
			"cp-8941072014-official"
		],
		"connectorSize": [
			"cp-8941072014-official"
		],
		"recommendedHose": [
			"cp-8941072014-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.5 L/s × 60 = 510 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
