const product = {
	"id": "chicago-pneumatic-cp7263e",
	"slug": "ponceuse-vibrante-chicago-pneumatic-cp7263e",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Chicago Pneumatic CP7263E",
	"brand": "Chicago Pneumatic",
	"model": "CP7263E",
	"mpn": "8941072650",
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
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7263e.webp",
		"alt": "Repères techniques CP7263E : 510 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7263e-sku8941072650",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7263E, référence fabricant 8941072650, demande 510 L/min en charge (8,5 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 10000 tr/min.",
			"Puissance maximale de l’outil : 210 W.",
			"Orbite (mm) : 2.5.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 510 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Orbite (mm)",
			"value": "2.5",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Fixation de l’abrasif",
			"value": "Hook&Loop",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.63 kg",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "155 mm",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "8.5 l/s",
			"evidenceIds": [
				"cp-8941072650-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941072650-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7263e-sku8941072650",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7263E, réf. 8941072650",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.5 L/s × 60 = 510 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941072650-official"
		],
		"airflowLpm": [
			"cp-8941072650-official"
		],
		"workingPressureBar": [
			"cp-8941072650-official"
		],
		"connectorSize": [
			"cp-8941072650-official"
		],
		"recommendedHose": [
			"cp-8941072650-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.5 L/s × 60 = 510 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
