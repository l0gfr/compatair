const product = {
	"id": "abac-2809913700",
	"slug": "scie-pneumatique-abac-professional",
	"categoryId": "scie",
	"category": "Scie pneumatique",
	"label": "Scie pneumatique ABAC Professional",
	"brand": "ABAC",
	"model": "Professional Saw",
	"mpn": "2809913700",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"connectorSize": "Entrée d’air 1/4 pouce",
	"usagePattern": "intermittent",
	"confidence": "A",
	"image": {
		"src": "/images/products/abac-2809913700.webp",
		"alt": "Scie pneumatique ABAC Professional",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913700/saw-comp-pro",
		"sourceLabel": "Visuel officiel ABAC Professional Saw"
	},
	"editorial": {
		"overview": "La scie pneumatique ABAC Professional est documentée par la fiche officielle ABAC 2809913700. Celle-ci publie une consommation de 4 L/s, convertie exactement en 240 L/min pour le moteur de compatibilité.",
		"verifiedFacts": [
			"ABAC publie une cadence de 9 500 courses/min et une longueur de course de 10 mm.",
			"La consommation officielle de 4 L/s correspond exactement à 240 L/min."
		],
		"limitations": [
			"La fiche publie une consommation d’air unique, sans courbe selon la charge ni facteur de cycle.",
			"Le fabricant ne publie pas de diamètre intérieur de flexible sur cette fiche ; aucun diamètre n’est donc ajouté au profil.",
			"La valeur vibratoire est conservée sans unité normalisée, car la fiche ABAC n’affiche pas une unité cohérente."
		]
	},
	"specifications": [
		{
			"label": "Pression de service publiée",
			"value": "6,3 bar",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Consommation d’air publiée",
			"value": "4 L/s (240 L/min)",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "Entrée d’air 1/4 pouce",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Cadence",
			"value": "9 500 courses/min",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Longueur de course",
			"value": "10 mm",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Vibration publiée (valeur brute)",
			"value": "3,7",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Dimensions produit",
			"value": "280 × 35 × 70 mm",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		},
		{
			"label": "Poids produit",
			"value": "0,8 kg",
			"evidenceIds": [
				"abac-2809913700-official"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-2809913700-official",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913700/saw-comp-pro",
			"sourceLabel": "ABAC, fiche officielle Professional Saw (2809913700)",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Données de performance et dimensions produit ; 4 L/s convertis exactement en 240 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"abac-2809913700-official"
		],
		"mpn": [
			"abac-2809913700-official"
		],
		"airflowLpm": [
			"abac-2809913700-official"
		],
		"workingPressureBar": [
			"abac-2809913700-official"
		],
		"connectorSize": [
			"abac-2809913700-official"
		],
		"specifications": [
			"abac-2809913700-official"
		]
	},
	"notes": [
		"Conversion exacte : 4 L/s × 60 = 240 L/min.",
		"Diamètre intérieur de flexible non publié par la fiche fabricant."
	]
};

export default product;
