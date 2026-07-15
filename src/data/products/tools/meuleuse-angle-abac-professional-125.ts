const product = {
	"id": "abac-2809913202",
	"slug": "meuleuse-angle-abac-professional-125",
	"categoryId": "meuleuse",
	"category": "Meuleuse d'angle",
	"label": "Meuleuse d'angle pneumatique ABAC Professional 125 mm",
	"brand": "ABAC",
	"model": "Professional Angle Grinder 125 mm",
	"mpn": "2809913202",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 660,
		"typical": 660,
		"max": 660
	},
	"connectorSize": "Entrée d’air 1/4 pouce",
	"usagePattern": "continuous",
	"confidence": "A",
	"image": {
		"src": "/images/products/abac-2809913202.webp",
		"alt": "Meuleuse d'angle pneumatique ABAC Professional 125 mm",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913202/angle-grinder-125-comp-pro",
		"sourceLabel": "Visuel officiel ABAC Professional Angle Grinder 125 mm"
	},
	"editorial": {
		"overview": "La meuleuse d'angle pneumatique ABAC Professional 125 mm est documentée par la fiche officielle ABAC 2809913202. Celle-ci publie une consommation de 11 L/s, convertie exactement en 660 L/min pour le moteur de compatibilité.",
		"verifiedFacts": [
			"ABAC publie une puissance de 660 W, une vitesse de 12 000 tr/min et un disque de 125 mm.",
			"La consommation officielle de 11 L/s correspond exactement à 660 L/min."
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
				"abac-2809913202-official"
			]
		},
		{
			"label": "Consommation d’air publiée",
			"value": "11 L/s (660 L/min)",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "Entrée d’air 1/4 pouce",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "660 W",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Vitesse",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Diamètre de disque",
			"value": "125 mm",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Vibration maximale publiée (valeur brute)",
			"value": "6,5",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Pression acoustique maximale LPA",
			"value": "85,3 dB(A)",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Dimensions produit",
			"value": "229 × 207 × 92 mm",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		},
		{
			"label": "Poids produit",
			"value": "2 kg",
			"evidenceIds": [
				"abac-2809913202-official"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-2809913202-official",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913202/angle-grinder-125-comp-pro",
			"sourceLabel": "ABAC, fiche officielle Professional Angle Grinder 125 mm (2809913202)",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Données de performance et dimensions produit ; 11 L/s convertis exactement en 660 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"abac-2809913202-official"
		],
		"mpn": [
			"abac-2809913202-official"
		],
		"airflowLpm": [
			"abac-2809913202-official"
		],
		"workingPressureBar": [
			"abac-2809913202-official"
		],
		"connectorSize": [
			"abac-2809913202-official"
		],
		"specifications": [
			"abac-2809913202-official"
		]
	},
	"notes": [
		"Conversion exacte : 11 L/s × 60 = 660 L/min.",
		"Valeur « typical » du schéma fixée à la borne supérieure officielle de 6,3 bar ; aucune pression intermédiaire n’est estimée.",
		"Diamètre intérieur de flexible non publié par la fiche fabricant."
	]
};

export default product;
