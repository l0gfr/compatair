const product = {
	"id": "abac-2809913201",
	"slug": "meuleuse-droite-coudee-abac-professional",
	"categoryId": "meuleuse",
	"category": "Meuleuse droite coudée",
	"label": "Meuleuse droite coudée pneumatique ABAC Professional",
	"brand": "ABAC",
	"model": "Professional Angle Die Grinder",
	"mpn": "2809913201",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 4,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"connectorSize": "Entrée d’air 1/4 pouce",
	"usagePattern": "continuous",
	"confidence": "A",
	"image": {
		"src": "/images/products/abac-2809913201.webp",
		"alt": "Meuleuse droite coudée pneumatique ABAC Professional",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913201/angle-die-grinder-pro",
		"sourceLabel": "Visuel officiel ABAC Professional Angle Die Grinder"
	},
	"editorial": {
		"overview": "La meuleuse droite coudée pneumatique ABAC Professional est documentée par la fiche officielle ABAC 2809913201. Celle-ci publie une consommation de 4 L/s, convertie exactement en 240 L/min pour le moteur de compatibilité.",
		"verifiedFacts": [
			"ABAC publie une puissance de 220 W et une vitesse de 20 000 tr/min.",
			"Les pinces acceptées sont de 3 et 6 mm, pour un poids produit de 0,7 kg."
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
				"abac-2809913201-official"
			]
		},
		{
			"label": "Consommation d’air publiée",
			"value": "4 L/s (240 L/min)",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "Entrée d’air 1/4 pouce",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "220 W",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Vitesse",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Tailles de pince",
			"value": "3 et 6 mm",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Vibration maximale publiée (valeur brute)",
			"value": "1,24",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Pression acoustique maximale LPA",
			"value": "80 dB(A)",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Dimensions produit",
			"value": "181 × 45 × 79 mm",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		},
		{
			"label": "Poids produit",
			"value": "0,7 kg",
			"evidenceIds": [
				"abac-2809913201-official"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-2809913201-official",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913201/angle-die-grinder-pro",
			"sourceLabel": "ABAC, fiche officielle Professional Angle Die Grinder (2809913201)",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Données de performance et dimensions produit ; 4 L/s convertis exactement en 240 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"abac-2809913201-official"
		],
		"mpn": [
			"abac-2809913201-official"
		],
		"airflowLpm": [
			"abac-2809913201-official"
		],
		"workingPressureBar": [
			"abac-2809913201-official"
		],
		"connectorSize": [
			"abac-2809913201-official"
		],
		"specifications": [
			"abac-2809913201-official"
		]
	},
	"notes": [
		"Conversion exacte : 4 L/s × 60 = 240 L/min.",
		"Valeur « typical » du schéma fixée à la borne supérieure officielle de 6,3 bar ; aucune pression intermédiaire n’est estimée.",
		"Diamètre intérieur de flexible non publié par la fiche fabricant."
	]
};

export default product;
