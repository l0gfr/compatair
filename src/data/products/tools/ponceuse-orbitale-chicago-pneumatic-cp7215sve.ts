const product = {
	"id": "chicago-pneumatic-cp7215sve",
	"slug": "ponceuse-orbitale-chicago-pneumatic-cp7215sve",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Chicago Pneumatic CP7215SVE",
	"brand": "Chicago Pneumatic",
	"model": "CP7215SVE",
	"mpn": "8941272152",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 456,
		"typical": 456,
		"max": 456
	},
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "continuous",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7215sve.webp",
		"alt": "Repères techniques CP7215SVE : 456 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7215sve-sku8941272152",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7215SVE, référence fabricant 8941272152, demande 456 L/min en charge (7,6 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 12000 tr/min.",
			"Puissance maximale de l’outil : 210 W.",
			"Filetage de sortie : 5/8-24 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 480 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "210 W",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8-24 UNF",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Diamètre du plateau (mm)",
			"value": "150",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Orbite (mm)",
			"value": "10",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration autonome",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Fixation de l’abrasif",
			"value": "Hook&Loop",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.82 kg",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "232 mm",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "NPT",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "8 l/s",
			"evidenceIds": [
				"cp-8941272152-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941272152-official",
			"sourceUrl": "https://tools.cp.com/en/products/sanders/cp7215sve-sku8941272152",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7215SVE, réf. 8941272152",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 7.6 L/s × 60 = 456 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941272152-official"
		],
		"airflowLpm": [
			"cp-8941272152-official"
		],
		"workingPressureBar": [
			"cp-8941272152-official"
		],
		"connectorSize": [
			"cp-8941272152-official"
		],
		"recommendedHose": [
			"cp-8941272152-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 7.6 L/s × 60 = 456 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
