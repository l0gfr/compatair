const product = {
	"id": "chicago-pneumatic-cp7215hcve",
	"slug": "ponceuse-orbitale-chicago-pneumatic-cp7215hcve",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Chicago Pneumatic CP7215HCVE",
	"brand": "Chicago Pneumatic",
	"model": "CP7215HCVE",
	"mpn": "8941272155",
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
		"src": "/images/products/chicago-pneumatic-cp7215hcve.webp",
		"alt": "Repères techniques CP7215HCVE : 510 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7215hcve-sku8941272155",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7215HCVE, référence fabricant 8941272155, demande 510 L/min en charge (8,5 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 11000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 11000 tr/min.",
			"Puissance maximale de l’outil : 210 W.",
			"Filetage de sortie : 5/16-24 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 480 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/16-24 UNF",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "150",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Orbite (mm)",
			"value": "10",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration centralisée",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Fixation de l’abrasif",
			"value": "Hook&Loop",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.92 kg",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "285 mm",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "8 l/s",
			"evidenceIds": [
				"cp-8941272155-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941272155-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7215hcve-sku8941272155",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7215HCVE, réf. 8941272155",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 8.5 L/s × 60 = 510 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941272155-official"
		],
		"airflowLpm": [
			"cp-8941272155-official"
		],
		"workingPressureBar": [
			"cp-8941272155-official"
		],
		"connectorSize": [
			"cp-8941272155-official"
		],
		"recommendedHose": [
			"cp-8941272155-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 8.5 L/s × 60 = 510 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
