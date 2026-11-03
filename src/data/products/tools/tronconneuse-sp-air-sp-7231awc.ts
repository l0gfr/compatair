import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-sp-air-sp-7231awc",
	"slug": "tronconneuse-sp-air-sp-7231awc",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "SP AIR SP-7231AWC",
	"brand": "SP AIR",
	"model": "SP-7231AWC",
	"mpn": "SP-7231AWC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 800,
		"typical": 800,
		"max": 800
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-sp-air-sp-7231awc.webp",
		"alt": "Repères techniques : SP AIR SP-7231AWC",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7231awc",
		"label": "Référence SP-7231AWC",
		"distinguishingAttributes": {
			"reference": "SP-7231AWC",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7231AWC. La SP-7231AWC utilise le disque 75 mm et la fixation par boulon hexagonal H11. La SP-7234 passe à 100 mm, fixation M10 × 1,5, 14 000 tr/min et 350 mm de longueur. La table SP-7231 et SP-7231AWC conserve les mêmes chiffres ; la différence exacte de protecteur se vérifie sur la version livrée, sans créer une capacité de coupe supposée.",
		"verifiedFacts": [
			"Disque : 75 mm / 3 pouces.",
			"Fixation : Boulon hexagonal, clé H11 mm.",
			"Vitesse à vide : 18 000 tr/min.",
			"Longueur : 220 mm.",
			"Masse : 1,2 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Disque",
			"value": "75 mm / 3 pouces",
			"evidenceIds": [
				"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
			]
		},
		{
			"label": "Fixation",
			"value": "Boulon hexagonal, clé H11 mm",
			"evidenceIds": [
				"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "220 mm",
			"evidenceIds": [
				"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p22",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=22",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "tronconneuse-sp-air-sp-7231awc-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=22",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-7231AWC utilise le disque 75 mm et la fixation par boulon hexagonal H11. La SP-7234 passe à 100 mm, fixation M10 × 1,5, 14 000 tr/min et 350 mm de longueur. La table SP-7231 et SP-7231AWC conserve les mêmes chiffres ; la différence exacte de protecteur se vérifie sur la version livrée, sans créer une capacité de coupe supposée."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p22"
		],
		"workingPressureBar": [
			"october-sp-air-p22"
		],
		"airflowLpm": [
			"october-sp-air-p22"
		],
		"airflowBasis": [
			"october-sp-air-p22"
		],
		"editorial": [
			"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
		],
		"specifications": [
			"tronconneuse-sp-air-sp-7231awc-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 800 L/min à 6,2 bar."
	]
};

export default product;
