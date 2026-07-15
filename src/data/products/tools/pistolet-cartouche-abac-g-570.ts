const product = {
	"id": "abac-2809913600",
	"slug": "pistolet-cartouche-abac-g-570",
	"categoryId": "pistolet-cartouche",
	"category": "Pistolet à cartouche",
	"label": "Pistolet pneumatique à cartouche ABAC G-570",
	"brand": "ABAC",
	"model": "G-570",
	"mpn": "2809913600",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 3,
		"typical": 7,
		"max": 7
	},
	"airflowLpm": {
		"min": 60,
		"typical": 60,
		"max": 60
	},
	"connectorSize": "Entrée 1/4 pouce ; filetage 1/4 BSP",
	"usagePattern": "intermittent",
	"confidence": "A",
	"image": {
		"src": "/images/products/abac-2809913600.webp",
		"alt": "Pistolet pneumatique à cartouche ABAC G-570",
		"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913600/cartridge-gun-g-570",
		"sourceLabel": "Visuel officiel ABAC G-570"
	},
	"editorial": {
		"overview": "Le pistolet pneumatique à cartouche ABAC G-570 est documenté par la fiche officielle ABAC 2809913600. Celle-ci publie une consommation de 1 L/s, convertie exactement en 60 L/min pour le moteur de compatibilité.",
		"verifiedFacts": [
			"ABAC publie une plage de pression de 3 à 7 bar et une consommation de 1 L/s.",
			"Le G-570 accepte les cartouches de 310 ml et possède un corps en aluminium."
		],
		"limitations": [
			"ABAC publie une plage de pression et une seule consommation d’air, sans courbe de débit selon la pression ; la borne haute publiée est reprise comme point de calcul, sans interpolation.",
			"Le fabricant ne publie pas de diamètre intérieur de flexible sur cette fiche ; aucun diamètre n’est donc ajouté au profil."
		]
	},
	"specifications": [
		{
			"label": "Pression de service publiée",
			"value": "3 à 7 bar",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Consommation d’air publiée",
			"value": "1 L/s (60 L/min)",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "Entrée 1/4 pouce ; filetage 1/4 BSP",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Capacité de cartouche",
			"value": "310 ml",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Aluminium",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Dimensions produit",
			"value": "302 × 61 × 163 mm",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		},
		{
			"label": "Poids produit",
			"value": "0,8 kg",
			"evidenceIds": [
				"abac-2809913600-official"
			]
		}
	],
	"evidence": [
		{
			"id": "abac-2809913600-official",
			"sourceUrl": "https://shop.abacaircompressors.com/en-INT/products/2809913600/cartridge-gun-g-570",
			"sourceLabel": "ABAC, fiche officielle G-570 (2809913600)",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-07-15",
			"confidence": "A",
			"notes": "Données de performance et dimensions produit ; 1 L/s convertis exactement en 60 L/min."
		}
	],
	"fieldSources": {
		"model": [
			"abac-2809913600-official"
		],
		"mpn": [
			"abac-2809913600-official"
		],
		"airflowLpm": [
			"abac-2809913600-official"
		],
		"workingPressureBar": [
			"abac-2809913600-official"
		],
		"connectorSize": [
			"abac-2809913600-official"
		],
		"specifications": [
			"abac-2809913600-official"
		]
	},
	"notes": [
		"Conversion exacte : 1 L/s × 60 = 60 L/min.",
		"Valeur « typical » du schéma fixée à la borne supérieure officielle de 7 bar ; aucune pression intermédiaire n’est estimée.",
		"Diamètre intérieur de flexible non publié par la fiche fabricant."
	]
};

export default product;
