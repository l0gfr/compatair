import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-sp-air-sp-1600b",
	"slug": "ponceuse-bande-sp-air-sp-1600b",
	"categoryId": "poinconneuse-bordeuse",
	"category": "Poinçonneuse-bordeuse pneumatique",
	"label": "SP AIR SP-1600B",
	"brand": "SP AIR",
	"model": "SP-1600B",
	"mpn": "SP-1600B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-sp-air-sp-1600b.webp",
		"alt": "Repères techniques : SP AIR SP-1600B",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1600b",
		"label": "Référence SP-1600B",
		"distinguishingAttributes": {
			"reference": "SP-1600B",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1600B. La SP-1600B est la poinçonneuse-bordeuse de tôle à tête pivotante 360 degrés, pas une ponceuse à bande. Le catalogue distingue un poinçonnage acier diamètre 5,5 mm et un bordage d’acier épaisseur 1,5 mm. Les SP-1370A et SP-1380 de la même page sont les véritables ponceuses à bande. La catégorie est corrigée, sans modifier l’état non conclusif du débit 0,3 m³/min.",
		"verifiedFacts": [
			"Fonction : Poinçonnage et bordage, tête pivotante 360 degrés.",
			"Capacité de poinçonnage acier : Diamètre 5,5 mm.",
			"Épaisseur de bordage acier : 1,5 mm.",
			"Longueur : 170 mm.",
			"Masse : 1 kg.",
			"Consommation, régime non précisé : 0,3 m³/min."
		],
		"limitations": [
			"Le régime de la consommation n’est pas précisé ; aucune demande maximale ni volume par poinçonnage n’est calculé."
		]
	},
	"specifications": [
		{
			"label": "Fonction",
			"value": "Poinçonnage et bordage, tête pivotante 360 degrés",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		},
		{
			"label": "Capacité de poinçonnage acier",
			"value": "Diamètre 5,5 mm",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		},
		{
			"label": "Épaisseur de bordage acier",
			"value": "1,5 mm",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation, régime non précisé",
			"value": "0,3 m³/min",
			"evidenceIds": [
				"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p17",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=17",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=17",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-1600B est la poinçonneuse-bordeuse de tôle à tête pivotante 360 degrés, pas une ponceuse à bande. Le catalogue distingue un poinçonnage acier diamètre 5,5 mm et un bordage d’acier épaisseur 1,5 mm. Les SP-1370A et SP-1380 de la même page sont les véritables ponceuses à bande. La catégorie est corrigée, sans modifier l’état non conclusif du débit 0,3 m³/min."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p17"
		],
		"workingPressureBar": [
			"october-sp-air-p17"
		],
		"airflowLpm": [
			"october-sp-air-p17"
		],
		"airflowBasis": [
			"october-sp-air-p17"
		],
		"categoryId": [
			"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
		],
		"category": [
			"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
		],
		"editorial": [
			"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-bande-sp-air-sp-1600b-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
