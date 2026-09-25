const product = {
	"id": "chicago-pneumatic-cp7269s",
	"slug": "ponceuse-rotative-chicago-pneumatic-cp7269s",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Chicago Pneumatic CP7269S",
	"brand": "Chicago Pneumatic",
	"model": "CP7269S",
	"mpn": "8941078690",
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
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7269s.webp",
		"alt": "Repères techniques CP7269S : 720 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7269s-sku8941078690",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7269S, référence fabricant 8941078690, demande 720 L/min en charge (12 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 5000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 5000 tr/min.",
			"Puissance maximale de l’outil : 530 W.",
			"Filetage de sortie : 5/8-16 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 720 L/min publiés. Cette valeur ne remplace pas la consommation en charge dans le calcul."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "530 W",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-16 UNF",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "180",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Fixation de l’abrasif",
			"value": "Nut",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "2.3 kg",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "315 mm",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "12 l/s",
			"evidenceIds": [
				"cp-8941078690-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941078690-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7269s-sku8941078690",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7269S, réf. 8941078690",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 12 L/s × 60 = 720 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941078690-official"
		],
		"airflowLpm": [
			"cp-8941078690-official"
		],
		"workingPressureBar": [
			"cp-8941078690-official"
		],
		"connectorSize": [
			"cp-8941078690-official"
		],
		"recommendedHose": [
			"cp-8941078690-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 12 L/s × 60 = 720 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
