const product = {
	"id": "chicago-pneumatic-cp7430-cut-off-tool",
	"slug": "tronconneuse-chicago-pneumatic-cp7430-cut-off-tool",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Chicago Pneumatic CP7430 CUT OFF TOOL",
	"brand": "Chicago Pneumatic",
	"model": "CP7430 CUT OFF TOOL",
	"mpn": "8941174300",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 564,
		"typical": 564,
		"max": 564
	},
	"connectorSize": "Entrée 1/4 pouce BSP, flexible intérieur 10 mm sur 5 m",
	"usagePattern": "intermittent",
	"recommendedHose": {
		"innerDiameterMm": 10,
		"maximumLengthMeters": 5
	},
	"confidence": "A",
	"image": {
		"src": "/images/products/chicago-pneumatic-cp7430-cut-off-tool.webp",
		"alt": "Repères techniques CP7430 CUT OFF TOOL : 564 L/min en charge, 6,3 bar, flexible 10 mm",
		"sourceUrl": "https://tools.cp.com/en/products/specialtycutting/cp7430-cut-off-tool-sku8941174300",
		"sourceLabel": "Repères techniques CompatAir d’après la fiche Chicago Pneumatic"
	},
	"editorial": {
		"overview": "CP7430 CUT OFF TOOL, référence fabricant 8941174300, demande 564 L/min en charge (9,4 L/s). La fiche Chicago Pneumatic indique une pression dynamique maximale de 6,3 bar, retenue comme point de comparaison. Vitesse à vide : 16000 tr/min.",
		"verifiedFacts": [
			"Vitesse à vide : 16000 tr/min.",
			"Puissance maximale de l’outil : 440 W.",
			"Filetage de sortie : 3/8-24 UNF.",
			"Entrée d’air 1/4 pouce ; flexible de 10 mm de diamètre intérieur pour une longueur de 5 m."
		],
		"limitations": [
			"Le calcul compare la consommation en charge publiée, sans réduction arbitraire liée à une utilisation intermittente.",
			"Le diamètre de flexible publié concerne une longueur de 5 m ; il ne garantit pas la même perte de pression sur un tuyau plus long.",
			"La consommation à vide est distincte : 660 L/min publiés. Elle dépasse la consommation en charge : une alimentation couvrant uniquement le seuil calculé ne suffit pas à garantir la marche à vide prolongée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "16000 tr/min",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Puissance maximale de l’outil",
			"value": "440 W",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8-24 UNF",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Diamètre du disque (mm)",
			"value": "75",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Poids de l’outil",
			"value": "1.3 kg",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Longueur de l’outil",
			"value": "248 mm",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Type de filetage de l’entrée d’air",
			"value": "BSP",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		},
		{
			"label": "Consommation à vide, distincte de la consommation en charge",
			"value": "11 l/s",
			"evidenceIds": [
				"cp-8941174300-official"
			]
		}
	],
	"evidence": [
		{
			"id": "cp-8941174300-official",
			"sourceUrl": "https://tools.cp.com/en/products/specialtycutting/cp7430-cut-off-tool-sku8941174300",
			"sourceLabel": "Chicago Pneumatic, fiche officielle CP7430 CUT OFF TOOL, réf. 8941174300",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-25",
			"confidence": "A",
			"notes": "Consommation en charge : 9.4 L/s × 60 = 564 L/min. Pression dynamique maximale publiée : 6.3 bar. Relevé technique versionné du 2026-09-25."
		}
	],
	"fieldSources": {
		"mpn": [
			"cp-8941174300-official"
		],
		"airflowLpm": [
			"cp-8941174300-official"
		],
		"workingPressureBar": [
			"cp-8941174300-official"
		],
		"connectorSize": [
			"cp-8941174300-official"
		],
		"recommendedHose": [
			"cp-8941174300-official"
		]
	},
	"notes": [
		"Conversion exacte du débit en charge : 9.4 L/s × 60 = 564 L/min.",
		"Les caractéristiques sont déclarées par le fabricant ; CompatAir n’a pas réalisé de mesure physique de cet outil."
	]
};

export default product;
