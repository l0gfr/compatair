import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "derouilleur-a-aiguilles-sp-air-sp-1482",
	"slug": "derouilleur-a-aiguilles-sp-air-sp-1482",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "SP AIR SP-1482",
	"brand": "SP AIR",
	"model": "SP-1482",
	"mpn": "SP-1482",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/derouilleur-a-aiguilles-sp-air-sp-1482.webp",
		"alt": "Repères techniques : SP AIR SP-1482",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1482",
		"label": "Référence SP-1482",
		"distinguishingAttributes": {
			"reference": "SP-1482",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "2.5 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1482. Le SP-1482 reçoit 19 aiguilles de 3 × 180 mm et possède une course 34 mm. Le SP-1460 reçoit 12 aiguilles avec course 12 mm et cadence 5 000 coups/min, contre 4 200 ici. Le faisceau et la course distinguent le travail possible ; les 0,13 m³/min ne sont pas un volume par coup.",
		"verifiedFacts": [
			"Aiguilles : 19, diamètre 3 mm × longueur 180 mm.",
			"Piston : 20 mm.",
			"Course : 34 mm.",
			"Cadence : 4 200 coups/min.",
			"Longueur : 260 mm."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Aiguilles",
			"value": "19, diamètre 3 mm × longueur 180 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
			]
		},
		{
			"label": "Piston",
			"value": "20 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "34 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
			]
		},
		{
			"label": "Cadence",
			"value": "4 200 coups/min",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "260 mm",
			"evidenceIds": [
				"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p23",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=23",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=23",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Le SP-1482 reçoit 19 aiguilles de 3 × 180 mm et possède une course 34 mm. Le SP-1460 reçoit 12 aiguilles avec course 12 mm et cadence 5 000 coups/min, contre 4 200 ici. Le faisceau et la course distinguent le travail possible ; les 0,13 m³/min ne sont pas un volume par coup."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p23"
		],
		"workingPressureBar": [
			"october-sp-air-p23"
		],
		"airflowLpm": [
			"october-sp-air-p23"
		],
		"airflowBasis": [
			"october-sp-air-p23"
		],
		"editorial": [
			"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
		],
		"specifications": [
			"derouilleur-a-aiguilles-sp-air-sp-1482-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 130 L/min à 6,2 bar."
	]
};

export default product;
