const product = {
	"id": "abac-2809913206",
	"slug": "meuleuse-angle-abac-g-202",
	"categoryId": "meuleuse",
	"category": "Meuleuse d'angle",
	"label": "Meuleuse d'angle pneumatique ABAC G-202 125 mm",
	"brand": "ABAC",
	"model": "G-202",
	"mpn": "2809913206",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 150,
		"typical": 150,
		"max": 150
	},
	"connectorSize": "Raccord rapide Euro 7,2 ; filetage 1/4 BSP",
	"usagePattern": "continuous",
	"confidence": "A",
	"image": {
		"src": "/images/products/abac-2809913206.webp",
		"alt": "Meuleuse d'angle pneumatique ABAC G-202 125 mm",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913206/angle-grinder-g-202",
		"sourceLabel": "Visuel officiel ABAC G-202"
	},
	"editorial": {
		"overview": "La meuleuse d'angle pneumatique ABAC G-202 125 mm est documentée par la fiche officielle ABAC 2809913206. Celle-ci publie une consommation de 2,5 L/s, convertie exactement en 150 L/min pour le moteur de compatibilité.",
		"verifiedFacts": [
			"ABAC publie un disque de 125 mm, une broche M11 et une vitesse de 10 000 tr/min.",
			"La fiche officielle précise un raccord Euro 7,2 avec filetage 1/4 BSP."
		],
		"limitations": [
			"ABAC publie une plage de pression et une seule consommation d’air, sans courbe de débit selon la pression ; la borne haute publiée est reprise comme point de calcul, sans interpolation.",
			"Le fabricant ne publie pas de diamètre intérieur de flexible sur cette fiche ; aucun diamètre n’est donc ajouté au profil.",
			"La valeur vibratoire est conservée sans unité normalisée, car la fiche ABAC n’affiche pas une unité cohérente."
		]
	},
	"specifications": [
		{
			"label": "Pression de service publiée",
			"value": "4 à 6,3 bar",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Consommation d’air publiée",
			"value": "2,5 L/s (150 L/min)",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "Raccord rapide Euro 7,2 ; filetage 1/4 BSP",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Vitesse",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "125 mm",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Broche",
			"value": "M11",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Vibration maximale publiée (valeur brute)",
			"value": "4",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Pression acoustique maximale LPA",
			"value": "89,5 dB(A)",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Métal",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Dimensions produit",
			"value": "215 × 175 × 95 mm",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		},
		{
			"label": "Poids produit",
			"value": "1,46 kg",
			"evidenceIds": [
				"abac-2809913206-official"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-2809913206-official",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913206/angle-grinder-g-202",
			"sourceLabel": "ABAC, fiche officielle G-202 (2809913206)",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Données de performance et dimensions produit ; 2,5 L/s convertis exactement en 150 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"abac-2809913206-official"
		],
		"mpn": [
			"abac-2809913206-official"
		],
		"airflowLpm": [
			"abac-2809913206-official"
		],
		"workingPressureBar": [
			"abac-2809913206-official"
		],
		"connectorSize": [
			"abac-2809913206-official"
		],
		"specifications": [
			"abac-2809913206-official"
		]
	},
	"notes": [
		"Conversion exacte : 2,5 L/s × 60 = 150 L/min.",
		"Valeur « typical » du schéma fixée à la borne supérieure officielle de 6,3 bar ; aucune pression intermédiaire n’est estimée.",
		"Diamètre intérieur de flexible non publié par la fiche fabricant."
	]
};

export default product;
