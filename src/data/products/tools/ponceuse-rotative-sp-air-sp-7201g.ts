import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-rotative-sp-air-sp-7201g",
	"slug": "ponceuse-rotative-sp-air-sp-7201g",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "SP AIR SP-7201G",
	"brand": "SP AIR",
	"model": "SP-7201G",
	"mpn": "SP-7201G",
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
		"src": "/images/products/ponceuse-rotative-sp-air-sp-7201g.webp",
		"alt": "Repères techniques : SP AIR SP-7201G",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7201g",
		"label": "Référence SP-7201G",
		"distinguishingAttributes": {
			"reference": "SP-7201G",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.53 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7201G. La SP-7201G est la petite ponceuse rotative de 50 mm, 13 000 tr/min et 0,53 kg. La SP-7201DA est à double action avec orbite 3 mm et masse 0,60 kg. Le chiffre d’orbite du modèle DA n’est pas transféré à la G. La consommation 0,3 m³/min reste de régime non précisé.",
		"verifiedFacts": [
			"Plateau : 50 mm, autoagrippant.",
			"Vitesse à vide : 13 000 tr/min.",
			"Orbite : Tiret dans la table, aucune orbite chiffrée attribuée.",
			"Longueur : 158 mm.",
			"Masse : 0,53 kg."
		],
		"limitations": [
			"Le catalogue ne précise pas le régime du débit ; la valeur reste non dimensionnante, sans maximum supposé.",
			"Source constructeur historique ; disponibilité actuelle et configuration livrée à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Plateau",
			"value": "50 mm, autoagrippant",
			"evidenceIds": [
				"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
			]
		},
		{
			"label": "Orbite",
			"value": "Tiret dans la table, aucune orbite chiffrée attribuée",
			"evidenceIds": [
				"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "158 mm",
			"evidenceIds": [
				"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,53 kg",
			"evidenceIds": [
				"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p16",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=16",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=16",
			"sourceLabel": "SP AIR : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. La SP-7201G est la petite ponceuse rotative de 50 mm, 13 000 tr/min et 0,53 kg. La SP-7201DA est à double action avec orbite 3 mm et masse 0,60 kg. Le chiffre d’orbite du modèle DA n’est pas transféré à la G. La consommation 0,3 m³/min reste de régime non précisé."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p16"
		],
		"workingPressureBar": [
			"october-sp-air-p16"
		],
		"airflowLpm": [
			"october-sp-air-p16"
		],
		"airflowBasis": [
			"october-sp-air-p16"
		],
		"editorial": [
			"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
		],
		"specifications": [
			"ponceuse-rotative-sp-air-sp-7201g-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
