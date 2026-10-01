const product = {
	"id": "meuleuse-sp-air-sp-1200ah",
	"slug": "meuleuse-sp-air-sp-1200ah",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-1200AH",
	"brand": "SP AIR",
	"model": "SP-1200AH",
	"mpn": "SP-1200AH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sp-air-sp-1200ah.webp",
		"alt": "Repères techniques : SP AIR SP-1200AH",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1200ah",
		"label": "Référence SP-1200AH",
		"distinguishingAttributes": {
			"reference": "SP-1200AH",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.45 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1200AH. Consommation publiée, régime non précisé : 200 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.45 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.45 kg."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "1/4\"NPT",
			"evidenceIds": [
				"october-sp-air-p20"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.45 kg",
			"evidenceIds": [
				"october-sp-air-p20"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 20",
			"evidenceIds": [
				"october-sp-air-p20"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p20",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=20",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p20"
		],
		"workingPressureBar": [
			"october-sp-air-p20"
		],
		"airflowLpm": [
			"october-sp-air-p20"
		],
		"airflowBasis": [
			"october-sp-air-p20"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6,2 bar."
	]
};

export default product;
