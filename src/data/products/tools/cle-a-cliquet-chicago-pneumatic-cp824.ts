const product = {
	"id": "chicago-pneumatic-cp824",
	"slug": "cle-a-cliquet-chicago-pneumatic-cp824",
	"categoryId": "cle-a-cliquet",
	"category": "Clé à cliquet pneumatique",
	"label": "Clé à cliquet pneumatique Chicago Pneumatic CP824",
	"brand": "Chicago Pneumatic",
	"model": "CP824",
	"mpn": "T025390",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"connectorSize": "Entrée 1/4 pouce, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp824.webp",
		"alt": "Repères techniques CP824 : 420 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/ratchetwrenches/cp824-skuT025390",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP824, référence fabricant T025390, demande 420 L/min en charge (7 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 220 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 220 tr/min.",
			"Couple maximal en marche arrière : 17 Nm.",
			"Taille de l’entraînement (pouces) : 1/4.",
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
			"value": "220 tr/min",
			"evidenceIds": [
				"cp-t025390-official"
			]
		},
		{
			"label": "Couple maximal en marche arrière",
			"value": "17 Nm",
			"evidenceIds": [
				"cp-t025390-official"
			]
		},
		{
			"label": "Taille de l’entraînement (pouces)",
			"value": "1/4",
			"evidenceIds": [
				"cp-t025390-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "0.51 kg",
			"evidenceIds": [
				"cp-t025390-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "197 mm",
			"evidenceIds": [
				"cp-t025390-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-t025390-official",
			"sourceUrl": "https://tools.cp.com/en/products/ratchetwrenches/cp824-skuT025390",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP824, réf. T025390",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 7 L/s × 60 = 420 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-t025390-official"
		],
		"airflowLpm": [
			"cp-t025390-official"
		],
		"workingPressureBar": [
			"cp-t025390-official"
		],
		"connectorSize": [
			"cp-t025390-official"
		],
		"recommendedHose": [
			"cp-t025390-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 7 L/s × 60 = 420 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
